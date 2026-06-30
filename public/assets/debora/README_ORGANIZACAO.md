# Organização de assets — Débora Bolangno

Estrutura pensada para subir dentro de `public/assets/debora/` no GitHub.

## Recomendação de uso no site

- Não alterar a hero principal da home por enquanto: usar `01_home/hero-atual-manter/debora-hero-atual.jpg` apenas como referência/back-up.
- Para a página de Palestras, usar prioritariamente os arquivos em `03_palestras_consultoria/palestras/`.
- Para Consultoria/RH e provas de empresa, usar `03_palestras_consultoria/consultoria/`.
- Para Mentoria Individual, usar fotos mais intimistas em `02_programas/mentoria-individual/`.
- Para Marca Intencional, usar fotos de presença, bastidor e posicionamento em `02_programas/marca-intencional/`.
- Para Liderança Atualizada, usar `02_programas/lideranca-atualizada/debora-lideranca-presenca-executiva.webp` e imagens de autoridade/conteúdo.

## Caminho recomendado no código

Depois de subir esta pasta como `public/assets/debora/`, usar caminhos relativos do domínio:

```html
<img src="/assets/debora/03_palestras_consultoria/palestras/debora-palestra-auditorio.webp" alt="Débora Bolangno em palestra corporativa" />
```

Evitar usar `raw.githubusercontent.com` direto no site, pois o ideal é servir os arquivos pelo próprio domínio.

## Manifesto dos arquivos

- `00_identidade/logo-db-texto.png` — origem: `DEBORA-LOGO-TEXTO.png` — uso: Identidade visual / logos
- `00_identidade/logo-db-simbolo.png` — origem: `logo-db-3.png` — uso: Identidade visual / logos
- `00_identidade/logo-db-simbolo-fundo-escuro.png` — origem: `logo-principal-fundo-escuro-invertido.png` — uso: Identidade visual / logos
- `00_identidade/logo-programa-marca-intencional.png` — origem: `MARCA-INTENCIONAL-LOGO.png` — uso: Identidade visual / logos
- `00_identidade/logo-programa-sequoia.png` — origem: `sequoia-logo-programa.png` — uso: Identidade visual / logos
- `01_home/hero-atual-manter/debora-hero-atual.jpg` — origem: `debora-ensaio-hero.jpg` — uso: Hero atual da home — manter como está por enquanto.
- `01_home/sobre/debora-sobre-camisa-branca.webp` — origem: `debora-005.png` — uso: Seção Sobre — foto principal de autoridade, acolhedora e institucional.
- `01_home/galeria/debora-galeria-01-presenca-espelho.webp` — origem: `Debora _Branding_Posicionamento.png` — uso: Galeria Presença Profissional / Marca Intencional — foto com bastidor e presença executiva.
- `01_home/galeria/debora-galeria-02-sentada-pb.webp` — origem: `deborapbsentada01.jpeg` — uso: Galeria Presença Profissional — variação editorial P&B, sofisticada.
- `01_home/galeria/debora-galeria-03-sentada-color.webp` — origem: `deborasentadacolor01.jpeg` — uso: Galeria Presença Profissional — variação sentada colorida.
- `01_home/galeria/debora-galeria-04-pose-cadeira.webp` — origem: `deborasentadapose01.jpeg` — uso: Galeria Presença Profissional — retrato próximo e amigável.
- `02_programas/marca-intencional/debora-marca-intencional-fundo-escuro.webp` — origem: `DEBORA-MARCA-PESSOAL.png` — uso: Página Marca Intencional — imagem forte, premium e focada em posicionamento.
- `02_programas/marca-intencional/debora-marca-intencional-sofa.webp` — origem: `debsss.png` — uso: Apoio para Marca Intencional / seção de presença profissional.
- `02_programas/marca-intencional/debora-marca-makingof-espelho.webp` — origem: `deborasentadamakingoff01.jpeg` — uso: Apoio de bastidor para Marca Intencional e blog.
- `02_programas/lideranca-atualizada/debora-lideranca-presenca-executiva.webp` — origem: `debora_Presença Executiva.png` — uso: Página Liderança Atualizada — imagem de postura executiva e presença.
- `02_programas/lideranca-atualizada/debora-lideranca-pb-estudio.webp` — origem: `deborapbsentada0102.jpeg` — uso: Apoio editorial para Liderança Atualizada.
- `02_programas/lideranca-atualizada/debora-lideranca-livros.webp` — origem: `LIVROSDB.jpg` — uso: Apoio de autoridade/conteúdo para Liderança Atualizada.
- `02_programas/mentoria-individual/debora-mentoria-cafe-biblioteca.webp` — origem: `deboracafe01.jpeg` — uso: Página Mentoria Individual — imagem intimista e consultiva.
- `02_programas/mentoria-individual/debora-mentoria-notebook.webp` — origem: `deborabrollnotebook.jpeg` — uso: Mentoria Individual / blog — bastidor de trabalho estratégico.
- `02_programas/mentoria-individual/debora-mentoria-sofa-notebook.webp` — origem: `deborasentadaespontanea01.jpeg` — uso: Mentoria Individual — escuta, proximidade e orientação.
- `02_programas/mentoria-individual/debora-mentoria-sofa-livros.webp` — origem: `deborasentadaespontanea02.jpeg` — uso: Mentoria Individual / Marca Intencional — repertório e prática.
- `02_programas/sequoia/debora-sequoia-estudo-noturno.webp` — origem: `deborasentadaespontanea003.jpeg` — uso: Comunidade Sequoia — desenvolvimento contínuo, estudo e aprofundamento.
- `02_programas/sequoia/debora-sequoia-manifesto-01.webp` — origem: `manisfesto_debora_foto01.png` — uso: Sequoia / manifesto — retrato institucional vertical.
- `02_programas/sequoia/debora-sequoia-manifesto-02.webp` — origem: `manisfesto_debora_foto02.png` — uso: Sequoia / manifesto — retrato claro e institucional.
- `03_palestras_consultoria/palestras/debora-palestra-grupo-01.webp` — origem: `deboraatuacao01.jpeg` — uso: Página Palestras — prova social com grupo presencial.
- `03_palestras_consultoria/palestras/debora-palestra-grupo-02.webp` — origem: `deboraatuacao03.jpeg` — uso: Página Palestras — grupo/audiência.
- `03_palestras_consultoria/palestras/debora-palestra-palco-grupo.webp` — origem: `deborapalestra01.jpeg` — uso: Página Palestras — evento presencial com participantes.
- `03_palestras_consultoria/palestras/debora-palestra-auditorio.webp` — origem: `deborapalestra02.jpeg` — uso: Página Palestras — auditório/público.
- `03_palestras_consultoria/palestras/debora-palestra-grupo-selfie.webp` — origem: `deboraatuacao04.jpeg` — uso: Página Palestras — bastidor com participantes.
- `03_palestras_consultoria/palestras/debora-palestra-online-mosaico.webp` — origem: `deboraatuacao02.jpeg` — uso: Página Palestras — online/virtual.
- `03_palestras_consultoria/palestras/debora-palestra-online-card.webp` — origem: `deboraatuacao07.jpeg` — uso: Página Palestras — material online.
- `03_palestras_consultoria/consultoria/debora-consultoria-reuniao-01.webp` — origem: `Deboraconsultoriadrnortebradesco01.jpeg` — uso: Consultoria de RH / empresas — reunião e diagnóstico.
- `03_palestras_consultoria/consultoria/debora-consultoria-reuniao-02.webp` — origem: `Deboraconsultoriadrnortebradesco02.jpeg` — uso: Consultoria de RH / empresas — sala de trabalho.
- `04_banco_de_imagens/debora-apoio-poltrona-cinza.webp` — origem: `debora-004.png` — uso: Banco de imagens — retrato de apoio para blog/CTA.
- `04_banco_de_imagens/debora-grupo-selfie.webp` — origem: `deboraatuacao04.jpeg` — uso: Banco de imagens — prova social com grupo.
