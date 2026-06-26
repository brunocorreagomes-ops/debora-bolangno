import fs from 'fs';
import path from 'path';
import https from 'https';

const REPO = 'brunocorreagomes-ops/debora-bolangno';
const BASE_PATH = 'public/assets/debora';
const TARGET_DIR = path.resolve('public/assets/debora');

async function getJSON(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: { 'User-Agent': 'Node.js-Downloader' }
    };
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          resolve(JSON.parse(data));
        } else {
          reject(new Error(`Failed to get JSON from ${url}: Status ${res.statusCode} - ${data}`));
        }
      });
    }).on('error', reject);
  });
}

async function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const file = fs.createWriteStream(destPath);
    https.get(url, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlinkSync(destPath);
      reject(err);
    });
  });
}

async function downloadContents(repoPath) {
  const url = `https://api.github.com/repos/${REPO}/contents/${repoPath}`;
  console.log(`Fetching: ${repoPath}`);
  try {
    const items = await getJSON(url);
    if (Array.isArray(items)) {
      for (const item of items) {
        if (item.type === 'dir') {
          await downloadContents(item.path);
        } else if (item.type === 'file') {
          // Map repoPath (public/assets/debora/...) to local public/assets/debora/...
          // The item.path will be public/assets/debora/...
          const relativePath = path.relative(BASE_PATH, item.path);
          const localDest = path.join(TARGET_DIR, relativePath);
          console.log(`Downloading file: ${item.path} -> ${localDest}`);
          await downloadFile(item.download_url, localDest);
        }
      }
    }
  } catch (err) {
    console.error(`Error processing path ${repoPath}:`, err);
  }
}

async function main() {
  console.log('Starting assets download...');
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true });
  }
  await downloadContents(BASE_PATH);
  console.log('Download complete!');
}

main().catch(console.error);
