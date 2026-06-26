/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  ExternalLink, 
  Users, 
  Target, 
  Zap, 
  Award,
  Menu, 
  X,
  Twitter,
  Clock,
  Calendar,
  CheckCircle2,
  Globe,
  MessageCircle,
  ArrowUp,
  TrendingUp,
  Trees,
  Mic,
  Check,
  Instagram
} from "lucide-react";
import { useState, useEffect } from "react";
import * as React from "react";

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }: { isMobileMenuOpen: boolean; setIsMobileMenuOpen: (open: boolean) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Programas", href: "#programas" },
    { name: "Palestras", href: "#palestras" },
    { name: "Blog", href: "blog.html" },
    { name: "Contato", href: "#contato" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.endsWith('.html')) return; // Allow normal links to .html files
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <header>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-400 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-verde/10 shadow-lg shadow-verde/6" 
            : "bg-white border-verde/10 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex justify-between items-center">
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, "#")}
            className="flex items-center gap-3 group" 
          >
            <img 
              src="assets/debora/00_identidade/logo-db-simbolo.png" 
              alt="Logo Débora Bolangno" 
              className="w-11 h-11 object-contain group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-ink leading-tight">
                Débora Bolangno
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-ink/40 font-medium">
                Estratégia de Carreira & Liderança
              </span>
            </div>
          </a>

          <div className="hidden min-[900px]:flex items-center gap-10">
            <div className="flex gap-1">
              <a href="https://www.instagram.com/deborabolangno" target="_blank" rel="noopener" className="w-9 h-9 flex items-center justify-center text-ink/35 hover:text-verde transition-colors">
                <Instagram size={17} />
              </a>
              <a href="https://www.linkedin.com/in/deborabolangno" target="_blank" rel="noopener" className="w-9 h-9 flex items-center justify-center text-ink/35 hover:text-verde transition-colors">
                <Linkedin size={17} />
              </a>
              <a href="mailto:deborabolangno@outlook.com" className="w-9 h-9 flex items-center justify-center text-ink/35 hover:text-verde transition-colors">
                <Mail size={17} />
              </a>
            </div>
            <div className="flex gap-7">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink/55 hover:text-verde transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-verde transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <a 
              href="https://wa.me/5511940803333?text=Ol%C3%A1%2C%20vim%20pelo%20portf%C3%B3lio%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-verde text-white px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#112e28] hover:-translate-y-px transition-all whitespace-nowrap"
            >
              Solicitar Proposta
            </a>
          </div>

          <button 
            className="min-[900px]:hidden text-ink p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[2000]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-white"
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] bg-white flex flex-col p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <img 
                    src="assets/debora/00_identidade/logo-db-simbolo.png" 
                    alt="Logo" 
                    className="w-10 h-10 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col">
                    <span className="font-serif text-base font-bold text-ink">
                      Débora Bolangno
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-ink/40 font-medium">
                      Estratégia de Carreira
                    </span>
                  </div>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-ink">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-[12px] uppercase tracking-[0.2em] font-semibold text-ink/55 hover:text-verde transition-all flex items-center justify-between py-3.5 border-b border-ink/5"
                  >
                    {link.name}
                    <ChevronRight size={14} className="opacity-30" />
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-ink/8">
                <a 
                  href="https://wa.me/5511940803333?text=Ol%C3%A1%2C%20vim%20pelo%20portf%C3%B3lio%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-verde text-white p-[18px] rounded-full text-center text-[11px] uppercase tracking-[0.2em] font-bold block hover:bg-[#112e28] transition-all"
                >
                  Solicitar Proposta
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="hero" className="min-h-screen pt-24 md:pt-18 lg:pt-20 flex items-center bg-creme overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-3 md:py-4 grid grid-cols-1 md:grid-cols-[55%_45%] gap-8 lg:gap-16 items-center w-full"
      >
        <div className="text-center md:text-left flex flex-col md:block">
          <motion.div variants={item} className="flex items-center justify-center md:justify-start gap-3 mb-3 md:mb-3.5 order-1">
            <div className="w-10 h-px bg-verde-med"></div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-verde-med font-black">
              Estrategista de Carreira · Débora Bolangno
            </span>
          </motion.div>
          
          <motion.h1 variants={item} className="font-serif text-[clamp(28px,4.1vw,52px)] font-black leading-[1.1] text-ink mb-2.5 md:mb-3 tracking-tight order-2">
            <span className="block">Clareza para decidir.</span>
            <span className="block text-ink/90">Confiança para agir.</span>
            <span className="block italic text-highlight mt-1 md:mt-1.5">Estratégia para crescer.</span>
          </motion.h1>
           <motion.p variants={item} className="text-base md:text-[17px] lg:text-[18px] text-ink/70 max-w-[620px] md:max-w-none mx-auto md:mx-0 leading-relaxed mb-3 md:mb-4 order-3 lg:whitespace-nowrap">
            Programas ao vivo para fortalecer liderança, presença e posicionamento profissional.
          </motion.p>

          {/* Destaque Turma Aberta Liderança Atualizada e Marca Intencional */}
          <motion.div 
            variants={item} 
            className="mt-1 md:mt-1.5 mb-5 p-4 sm:p-4.5 bg-[#FCF9F3] border-2 border-verde/20 rounded-[32px] shadow-2xl shadow-verde/10 hover:border-verde/30 transition-all duration-300 text-left max-w-[540px] lg:max-w-[580px] mx-auto md:mx-0 flex flex-col order-4"
          >
            <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
              <span className="bg-verde text-creme text-[9px] uppercase tracking-[0.25em] font-black px-3 py-1 rounded-md">
                INSCRIÇÕES ABERTAS
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-verde-med font-extrabold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-dourado animate-pulse"></span> AGOSTO E SETEMBRO 2026
              </span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Programa 1: Liderança Atualizada */}
              <div className="bg-white border-2 border-verde/10 rounded-2xl p-3.5 sm:p-4 hover:border-verde/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-verde/5 transition-all duration-300 flex flex-col justify-between group/card">
                <div>
                  <div className="flex flex-col gap-1 mb-2">
                    <h4 className="font-serif text-[19px] sm:text-[20px] md:text-[21px] font-black text-verde leading-tight tracking-tight">Liderança Atualizada</h4>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[8.5px] font-black tracking-widest bg-verde/5 text-verde-med uppercase self-start">
                      ENCONTROS SEMANAIS
                    </span>
                  </div>
 
                  <div className="space-y-1 text-[11px] mb-2 border-t border-verde/5 pt-2">
                    <div className="flex items-center gap-1.5 text-ink font-semibold">
                      <Calendar size={12} className="text-dourado shrink-0" />
                      <span>03, 10, 17 e 24/08</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-ink/75">
                      <Clock size={12} className="text-verde-med/70 shrink-0" />
                      <span>Segundas · 20h às 21h30</span>
                    </div>
                  </div>
                </div>
 
                <div className="flex flex-col gap-1.5 mt-2.5 pt-2.5 border-t border-verde/5">
                  <a 
                    href="https://wa.me/5511940803333?text=Ol%C3%A1%2C%20gostaria%20de%20garantir%20minha%20vaga%20na%20turma%20de%20agosto%20da%20mentoria%20Lideran%C3%A7a%20Atualizada."
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center bg-verde text-creme hover:bg-[#112e28] hover:text-white text-[10px] font-black uppercase tracking-wider py-2.5 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-center"
                  >
                    GARANTIR MINHA VAGA
                  </a>
                  <a 
                    href="lideranca-atualizada.html" 
                    className="inline-flex items-center justify-center gap-1 text-[10px] font-black text-verde/80 hover:text-verde hover:bg-verde/5 border border-verde/15 hover:border-verde/35 uppercase tracking-wider transition-all duration-200 text-center py-2 rounded-full"
                  >
                    <span>VER DETALHES</span>
                    <ArrowRight size={10} />
                  </a>
                </div>
              </div>
 
              {/* Programa 2: Marca Intencional */}
              <div className="bg-white border-2 border-verde/10 rounded-2xl p-3.5 sm:p-4 hover:border-verde/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-verde/5 transition-all duration-300 flex flex-col justify-between group/card">
                <div>
                  <div className="flex flex-col gap-1 mb-2">
                    <h4 className="font-serif text-[19px] sm:text-[20px] md:text-[21px] font-black text-verde leading-tight tracking-tight">Marca Intencional</h4>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[8.5px] font-black tracking-widest bg-dourado/10 text-[#8c744c] uppercase self-start">
                      ENCONTROS QUINZENAIS
                    </span>
                  </div>
 
                  <div className="space-y-1 text-[11px] mb-2 border-t border-verde/5 pt-2">
                    <div className="flex items-center gap-1.5 text-ink font-semibold">
                      <Calendar size={12} className="text-dourado shrink-0" />
                      <span>12 e 26/08 · 09 e 23/09</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-ink/75">
                      <Clock size={12} className="text-verde-med/70 shrink-0" />
                      <span>Quartas · 20h às 21h30</span>
                    </div>
                  </div>
                </div>
 
                <div className="flex flex-col gap-1.5 mt-2.5 pt-2.5 border-t border-verde/5">
                  <a 
                    href="https://wa.me/5511940803333?text=Ol%C3%A1%2C%20D%C3%A9bora!%20Tenho%20interesse%20em%20garantir%20minha%20vaga%20na%20turma%20de%20Marca%20Intencional."
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center bg-verde text-creme hover:bg-[#112e28] hover:text-white text-[10px] font-black uppercase tracking-wider py-2.5 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-center"
                  >
                    GARANTIR MINHA VAGA
                  </a>
                  <a 
                    href="marca-intencional.html" 
                    className="inline-flex items-center justify-center gap-1 text-[10px] font-black text-verde/80 hover:text-verde hover:bg-verde/5 border border-verde/15 hover:border-verde/35 uppercase tracking-wider transition-all duration-200 text-center py-2 rounded-full"
                  >
                    <span>VER DETALHES</span>
                    <ArrowRight size={10} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>


          {/* Imagem da Débora (Mobile Only) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-6 relative rounded-[32px] overflow-hidden aspect-[4/5] bg-verde shadow-xl border border-ink/5 w-full max-w-[420px] mx-auto my-6 block md:hidden"
          >
            <img 
              src="https://i.ibb.co/mVqGg1yW/debora-hero-nova.webp" 
              alt="Débora Bolangno" 
              className="absolute w-full h-[110%] -top-[5%] object-cover object-[center_20%]"
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Imagem da Débora (Desktop Only) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative rounded-[40px] md:rounded-[64px] overflow-hidden aspect-[4/5] bg-verde shadow-2xl border border-ink/5 hidden md:block w-full max-w-[380px] lg:max-w-[410px] mx-auto md:max-w-none md:self-start md:mt-2"
        >
          <img 
            src="https://i.ibb.co/mVqGg1yW/debora-hero-nova.webp" 
            alt="Débora Bolangno" 
            className="absolute w-full h-[110%] -top-[5%] object-cover object-[center_20%] transition-transform duration-[3s] hover:scale-105"
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          <motion.img 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.08, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            src="assets/debora/00_identidade/logo-db-simbolo.png" 
            alt="" 
            className="absolute top-10 right-10 w-24 md:w-32 pointer-events-none brightness-0 invert" 
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  const words = [
    "Liderança Atualizada", "Presença Executiva", "Marca Intencional", 
    "Carreira com Estratégia", "Desenvolvimento Humano", "Primeira Liderança"
  ];

  return (
    <div className="bg-verde py-5 overflow-hidden whitespace-nowrap border-y border-white/10">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {words.map((word) => (
              <div key={word} className="flex items-center gap-12">
                <span className="font-cormorant italic text-[18px] text-white/85">{word}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ProofBar = () => {
  const items = [
    { num: "+20", label: "Anos de experiência\nem RH e liderança" },
    { num: "+250", label: "Profissionais\natendidos" },
    { num: "100% Online", label: "Atendimento para\ntodo o Brasil" },
    { num: "5", label: "Formatos de\natendimento" },
  ];

  return (
    <div className="bg-[#0d2018] py-8 md:py-12 px-6">
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-wrap gap-y-10 md:grid md:grid-cols-4 md:gap-0 lg:flex lg:flex-nowrap">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center px-4 md:px-10 text-center border-white/10 last:border-0 md:border-r w-1/2 md:w-auto"
          >
            <span className={`font-serif ${item.num.length > 5 ? 'text-[24px] md:text-[36px] tracking-tight' : 'text-[32px] md:text-[48px]'} font-black text-dourado leading-none`}>
              {item.num}
            </span>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-white/50 font-bold mt-2 whitespace-pre-line leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Identification = () => {
  const points = [
    "Você entrega resultado, mas não é reconhecido na mesma proporção",
    "Sente que sua carreira depende mais de fatores externos do que deveria",
    "Está ocupado, mas não necessariamente avançando",
    "Já tentou \"se desenvolver\", mas sem uma direção clara",
    "Sabe que poderia estar em um cargo maior, mas não sabe qual é o caminho",
    "Quer tomar decisões mais estratégicas e com mais confiança",
  ];

  return (
    <section id="metodologia" style={{ backgroundColor: '#F3EEE6' }} className="py-20 md:py-24 px-6 sm:px-8 border-y border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[800px] mx-auto text-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            Sintomas da Estagnação
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[clamp(26px,3.8vw,44px)] font-black leading-[1.2] text-ink max-w-3xl mx-auto tracking-tight"
          >
            Se você sente que deveria estar em outro nível... <br className="hidden sm:inline" />
            <span className="italic text-highlight">provavelmente está certo.</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {points.map((point, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex gap-5 sm:gap-6 bg-white p-6 md:p-8 rounded-[24px] border border-dourado/35 shadow-[0_6px_20px_rgba(13,32,24,0.08)] hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(13,32,24,0.14)] hover:border-dourado/70 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-verde text-[#FCFAF7] flex items-center justify-center shrink-0 shadow-sm group-hover:bg-dourado transition-colors duration-300">
                <Check size={18} strokeWidth={3} className="text-[#FCFAF7]" />
              </div>
              <p className="text-[15px] md:text-[17px] text-ink leading-relaxed font-semibold">{point}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-20 text-center font-cormorant text-[24px] md:text-[32px] font-semibold text-verde/60 italic max-w-3xl mx-auto leading-relaxed"
        >
          "O esforço sem direção consome.<br />A estratégia clara liberta."
        </motion.p>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="bg-creme pt-16 pb-20 md:pt-20 md:pb-24 px-6 sm:px-8 border-y border-ink/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl aspect-square md:aspect-auto min-[900px]:h-[680px]">
          <img 
            src="assets/debora/01_home/sobre/debora-sobre-camisa-branca.webp" 
            alt="Débora Bolangno - Mentora de Carreira" 
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div>
          <span className="section-eyebrow">Sobre Débora Bolangno</span>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-black leading-[1.15] text-ink mb-8">
            Estratégia, Liderança <br />
            <span className="italic text-highlight">& Execução Real.</span>
          </h2>
          <div className="space-y-6 text-lg text-ink/75 leading-[1.65]">
            <p>Com mais de 20 anos de trajetória no mundo corporativo, Débora Bolangno especializou-se em desenvolver líderes e acelerar carreiras de alto nível.</p>
            <p>Sua abordagem une visão estratégica, inteligência emocional e ferramentas práticas para quem não aceita a estagnação e busca o próximo nível de influência e resultado.</p>
            <p className="font-serif italic text-xl text-verde border-l-4 border-dourado pl-6 py-2">
              "Meu papel é encurtar o seu caminho entre onde você está hoje e a posição que você sabe que merece ocupar."
            </p>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-ink/10 pt-8">
            <img src="assets/debora/00_identidade/logo-db-simbolo.png" alt="" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-ink/20 mb-1">Formação & Expertise</p>
              <p className="text-sm text-ink/70 font-medium italic">Especialista em Desenvolvimento Humano e Estratégia de Carreira</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsLuxury = () => {
  interface Testimonial {
    id: string;
    name: string;
    company: string;
    context: string;
    tag: string;
    highlight: string;
    fullText: string;
  }

  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const featuredTestimonials: Testimonial[] = [
    {
      id: "lais",
      name: "Lais Cesar",
      company: "Banco Bradesco",
      context: "Mentoria Liderança Atualizada e Mentoria Individual",
      tag: "LIDERANÇA ATUALIZADA & MENTORIA INDIVIDUAL",
      highlight: "Sua mentoria não tenta me transformar em alguém que eu não sou, mas tem ajudado a potencializar o que tenho de melhor.",
      fullText: "Débora, quero parabenizá-la pelo trabalho cheio de propósito que você vem realizando, especialmente no meu processo de mentoria.\n\nVocê conduz tudo com muita leveza, sensibilidade e intencionalidade. O mais bonito é que sua mentoria não tenta me transformar em alguém que eu não sou, mas tem ajudado a potencializar o que tenho de melhor e a ajustar aquilo que já não faz mais sentido para a minha vida e para a minha caminhada.\n\nSou muito grata por cada encontro, por cada reflexão e por toda a generosidade em compartilhar seu conhecimento e sua experiência.\n\nObrigada por acreditar nas pessoas e por fazer a diferença na minha jornada. Que Deus continue abençoando sua missão e alcance muitas outras vidas através do seu propósito."
    },
    {
      id: "franco",
      name: "Franco Décio",
      company: "Grupo Allure",
      context: "Sócio do Grupo Allure — contratou Consultoria de RH para a empresa",
      tag: "Consultoria de RH & Mapeamento",
      highlight: "A Débora tem a capacidade de fazer parecer fácil o que é muito complexo quando se trata de Gestão Estratégica de Pessoas.",
      fullText: "Profissional exemplar e iluminada!\n\nSim, a Débora tem a capacidade de fazer parecer fácil o que é muito complexo quando se trata de Gestão Estratégica de Pessoas.\n\nTive o privilégio de fazer Mapeamento de Competências e receber valiosas orientações enquanto Gerente Geral no Bradesco e, agora, enquanto sócio do Grupo Allure, a Débora atuou com maestria em um desafio ainda maior: diagnosticar atitudes essenciais para o grupo, criar autoavaliações qualitativas, apoiar na implantação de uma Comissão de Pessoas, orientar e preparar líderes para proverem feedbacks efetivos, fazer avaliação 360° dos sócios majoritários, estruturar Planos de Desenvolvimento Individuais e Coletivos e nos propiciar gerir a evolução com diferentes ferramentas, inclusive Matriz 9-box.\n\nFaz a diferença e transborda na vida das pessoas e empresas."
    }
  ];

  const standardTestimonials: Testimonial[] = [
    {
      id: "patricia",
      name: "Patricia Farias",
      company: "Banco Bradesco",
      context: "Participou da Mentoria Marca Intencional",
      tag: "Mentoria Marca Intencional",
      highlight: "A mentoria Marca Intencional agregou muito ao meu repertório e ao meu posicionamento profissional, com reflexões que já estou aplicando no meu dia a dia.",
      fullText: "A mentoria Marca Intencional agregou muito ao meu repertório e ao meu posicionamento profissional.\n\nEla me ajudou a compreender a importância de estarmos bem posicionados, de forma estratégica e autêntica, e que o nível que alcançamos na carreira exige uma evolução constante para continuarmos crescendo e conquistando novos espaços. Foi um aprendizado importante sobre a necessidade de investir no nosso próprio CPF, fortalecendo competências, imagem profissional e marca pessoal.\n\nAlém do conteúdo, a mentoria trouxe reflexões valiosas que já estou aplicando no meu dia a dia e neste novo momento da minha trajetória profissional.\n\nSe eu pudesse apontar um ponto de melhoria, seria apenas a duração. A sensação que ficou é que poderia ter durado mais tempo, pois os encontros foram muito ricos e deixaram aquele gostinho de querer continuar aprendendo e aprofundando ainda mais os temas abordados.\n\nMuito obrigada pela dedicação, generosidade e pela forma inspiradora com que você conduz esse processo."
    },
    {
      id: "laura",
      name: "Laura Sanches",
      company: "Banco Bradesco",
      context: "Participou da Mentoria Individual",
      tag: "Mentoria Individual",
      highlight: "Uma profissional realmente diferenciada, que transforma vidas e carreiras com sua habilidade única de guiar, apoiar e inspirar.",
      fullText: "É uma honra recomendar essa profissional excepcional, que tem em seu DNA a nobre missão de desenvolver pessoas. Atuando como mentora e coach, ela transforma vidas e carreiras com sua habilidade única de guiar, apoiar e inspirar. Seu poder de comunicação é diferenciado, permitindo que suas mensagens cheguem de forma clara e impactante. Além disso, seu espírito empreendedor a faz buscar constantemente novas maneiras de inovar e agregar valor. Destaca-se ainda pelo excelente relacionamento interpessoal, sempre cultivando conexões genuínas e criando um ambiente de confiança e colaboração. Uma profissional realmente diferenciada, que é inspiração e referência para todos ao seu redor."
    },
    {
      id: "joao",
      name: "João Dória",
      company: "Banco Bradesco",
      context: "Participou da Mentoria Individual",
      tag: "Mentoria Individual",
      highlight: "A Débora desempenhou um papel crucial em minha carreira, provocando uma mudança significativa de mindset e decisões mais assertivas.",
      fullText: "Como Gerente Geral de uma instituição financeira de grande relevância no âmbito nacional, posso afirmar que a Débora desempenhou um papel crucial em minha carreira. Através do processo de coaching conduzido por ela, embarquei em uma jornada excepcional. Sua análise perspicaz do meu potencial estimulou e provocou uma mudança significativa de mindset. Você já aproveitou o poder da sua bússola interna? Esse conhecimento adquirido facilita a definição de caminhos e trajetórias mais assertivas, culminando em decisões robustas e sólidas.\nSe permita entrar nessa jornada, recomendo."
    },
    {
      id: "mario",
      name: "Mário Marques",
      company: "Grupo AG Capital",
      context: "Contratou Consultoria de RH para a empresa",
      tag: "Consultoria de RH",
      highlight: "Ela tem a percepção perfeita das necessidades corporativas e faz essa conciliação com maestria, estimulando equipes de alta performance.",
      fullText: "Super, mega, hiper recomendo Débora!\n\nEla tem como propósito de vida desenvolver e potencializar habilidades individuais e coletivas.\n\nAlém do olhar extremamente atento e cuidado com as pessoas, tem a percepção perfeita das necessidades corporativas e faz essa conciliação com maestria, estimulando equipes de alta performance."
    }
  ];

  useEffect(() => {
    if (selectedTestimonial) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedTestimonial]);

  return (
    <section id="depoimentos" className="bg-verde text-creme py-16 md:py-24 px-6 overflow-hidden border-y border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-eyebrow-light text-center mb-4 block"
          >
            Reconhecimento & Impacto
          </motion.span>
          <h2 className="font-serif text-[clamp(28px,3.2vw,42px)] font-black text-center text-creme leading-tight tracking-tight mb-4">
            Quem já viveu o processo com a Débora
          </h2>
          <p className="text-creme/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Depoimentos de profissionais e empresas que passaram por mentorias, processos de desenvolvimento e consultorias conduzidas por Débora Bolangno.
          </p>
        </div>

        {/* Featured row: Lais and Franco */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {featuredTestimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FCFAF7] border border-dourado/20 rounded-[32px] p-6 md:p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(26,58,46,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative premium quotes background */}
              <div className="absolute top-6 right-8 text-[#EAE5DA] opacity-30 select-none pointer-events-none font-serif text-[120px] leading-none">
                “
              </div>

              <div className="relative z-10">
                <div className="flex mb-3">
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 bg-verde/10 text-verde border border-verde/10 rounded-full">
                    {t.tag}
                  </span>
                </div>

                <p className="font-serif text-base md:text-lg font-medium text-verde leading-relaxed mb-3 group-hover:text-verde-med transition-colors">
                  “{t.highlight}”
                </p>
              </div>

              <div className="relative z-10 border-t border-verde/10 pt-3.5 mt-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-left flex-1 min-w-0">
                  <h4 className="text-verde font-serif text-base font-bold leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-ink/65 text-[10px] font-mono tracking-wider uppercase mt-0.5">
                    {t.company}
                  </p>
                  <p className="text-ink/50 text-[11px] mt-0.5 leading-tight font-medium">
                    {t.context}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedTestimonial(t)}
                  className="flex items-center justify-center gap-1.5 px-4 py-3 sm:py-2 rounded-full border border-verde/20 text-verde hover:border-verde hover:bg-verde/5 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-300 shrink-0 w-full sm:w-auto group/btn shadow-sm"
                >
                  <span>Ler depoimento completo</span>
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Standard row: 4 columns in 2x2 grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standardTestimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FCFAF7] border border-dourado/15 rounded-[24px] p-5 md:p-6 flex flex-col justify-between shadow-[0_8px_30px_rgba(26,58,46,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative premium quotes background */}
              <div className="absolute top-4 right-6 text-[#EAE5DA] opacity-35 select-none pointer-events-none font-serif text-[90px] leading-none">
                “
              </div>

              <div className="relative z-10">
                <div className="flex mb-2.5">
                  <span className="text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 bg-verde/10 text-verde border border-verde/10 rounded-full">
                    {t.tag}
                  </span>
                </div>

                <p className="font-serif text-sm md:text-base font-medium text-verde leading-relaxed mb-2.5 group-hover:text-verde-med transition-colors">
                  “{t.highlight}”
                </p>
              </div>

              <div className="relative z-10 border-t border-verde/10 pt-3.5 mt-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-left flex-1 min-w-0">
                  <h4 className="text-verde font-serif text-sm font-bold leading-tight">
                    {t.name}
                  </h4>
                  <p className="text-ink/65 text-[10px] font-mono tracking-wider uppercase mt-0.5">
                    {t.company}
                  </p>
                  <p className="text-ink/50 text-[10px] mt-0.5 leading-tight font-medium">
                    {t.context}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedTestimonial(t)}
                  className="flex items-center justify-center gap-1.5 px-4 py-3 sm:py-2 rounded-full border border-verde/20 text-verde hover:border-verde hover:bg-verde/5 font-bold text-[10px] sm:text-[11px] uppercase tracking-wider transition-all duration-300 shrink-0 w-full sm:w-auto group/btn shadow-sm"
                >
                  <span>Ler depoimento completo</span>
                  <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTestimonial(null)}
            className="fixed inset-0 z-[99999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FCFAF7] rounded-[32px] border border-dourado/30 max-w-2xl w-full max-h-[90vh] md:max-h-[86vh] overflow-y-auto p-5 md:p-7 shadow-2xl relative scrollbar-thin scrollbar-thumb-dourado/20 scrollbar-track-transparent"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-verde/5 hover:bg-verde/10 text-verde transition-colors"
                aria-label="Fechar"
              >
                <X size={18} />
              </button>

              <div className="flex mb-2">
                <span className="text-[11px] font-bold tracking-[0.1em] uppercase px-3 py-1 bg-verde/10 text-verde border border-verde/10 rounded-full">
                  {selectedTestimonial.tag}
                </span>
              </div>

              {/* Decorative quotes icon */}
              <span className="font-serif text-dourado text-[48px] leading-none block -mt-1.5 -ml-1 select-none">“</span>

              <div className="font-serif text-[14px] md:text-[15px] text-ink leading-relaxed mb-4 -mt-4 font-normal space-y-3.5">
                {selectedTestimonial.fullText.split("\n\n").map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              <div className="border-t border-verde/10 pt-3.5 mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-left">
                  <h4 className="text-verde font-serif text-base font-bold leading-tight">
                    {selectedTestimonial.name}
                  </h4>
                  <p className="text-ink/65 text-xs font-mono tracking-wider uppercase mt-0.5">
                    {selectedTestimonial.company}
                  </p>
                  <p className="text-ink/50 text-[11px] mt-0.5 leading-tight font-medium">
                    {selectedTestimonial.context}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedTestimonial(null)}
                  className="px-4 py-1.5 bg-verde text-creme font-bold text-xs uppercase tracking-widest rounded-full hover:bg-dourado transition-colors shadow-md shrink-0"
                >
                  Fechar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Qualification = () => {
  return (
    <section className="bg-verde py-24 md:py-32 px-8 text-creme text-center overflow-hidden relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold italic leading-tight mb-10">
          "Para quem o sucesso atual já não é mais suficiente e a próxima etapa exige uma nova versão de si mesmo."
        </h2>
        <div className="w-20 h-px bg-creme/20 mx-auto mb-10"></div>
        <p className="font-cormorant text-[22px] md:text-[28px] text-creme/70 tracking-wide font-medium leading-relaxed">
          Mentoria focada em posições de liderança, gestão e transições estratégicas.
        </p>
      </div>
      <img src="assets/debora/00_identidade/logo-db-simbolo.png" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[40%] opacity-[0.03] pointer-events-none" referrerPolicy="no-referrer" />
    </section>
  );
};

const PresenceGallery = () => {
  return (
    <section className="bg-creme py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-eyebrow text-center">PRESENÇA PROFISSIONAL</span>
          <h2 className="font-serif text-[clamp(32px,3.5vw,48px)] font-black text-ink leading-tight">Autoridade construída na prática.</h2>
          <p className="text-ink/65 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Mais de 20 anos de atuação no mundo corporativo, desenvolvendo lideranças, posicionamento e decisões de carreira com estratégia.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              src: "assets/debora/01_home/galeria/debora-galeria-03-sentada-color.webp",
              label: "Atuação & Liderança",
              alt: "Débora Bolangno sentada em contexto profissional de liderança",
              delay: 0
            },
            {
              src: "assets/debora/01_home/galeria/debora-galeria-01-presenca-espelho.webp",
              label: "Branding & Posicionamento",
              alt: "Débora Bolangno refletida no espelho com postura profissional",
              delay: 0.2
            },
            {
              src: "assets/debora/01_home/galeria/debora-galeria-04-pose-cadeira.webp",
              label: "Mentoria & Conexão",
              alt: "Débora Bolangno sorridente in pose de retrato próximo",
              delay: 0.4
            },
            {
              src: "assets/debora/01_home/galeria/debora-galeria-02-sentada-pb.webp",
              label: "Presença Executiva",
              alt: "Débora Bolangno em retrato editorial preto e branco expressando autoridade",
              delay: 0.6
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: item.delay }}
              className="relative rounded-[56px] overflow-hidden aspect-[4/3] shadow-2xl group cursor-default"
            >
               <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-full object-cover object-[50%_20%] brightness-[1.08] contrast-[1.02] transition-transform duration-[2.5s] group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-10 left-10 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] uppercase tracking-widest font-bold">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Triagem = () => {
  return (
    <section id="seu-momento" className="bg-brand-950 py-24 md:py-32 px-6 sm:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-eyebrow text-dourado text-center"
        >
          Seu momento
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-[clamp(32px,4.5vw,56px)] font-black text-creme leading-[1.1] text-center mb-16 md:mb-24"
        >
          Qual desses momentos <br className="hidden md:block" /> descreve você hoje?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              href: "marca-intencional.html",
              num: "01",
              title: "Falta de direção",
              desc: "Tenho competência, mas me falta clareza. Sinto que estou aquém do meu potencial e não sei qual é o próximo passo certo.",
              label: "Conhecer Mentoria Individual"
            },
            {
              href: "mentoria-individual.html",
              num: "02",
              title: "Liderança travada",
              desc: "Meu time depende demais de mim. Preciso evoluir como líder e gerar resultado sem precisar estar em tudo.",
              label: "Conhecer Liderança Atualizada"
            },
            {
              href: "sequoia.html",
              num: "03",
              title: "Crescimento isolado",
              desc: "Falta troca com pessoas no meu nível. Quero crescer junto com quem entende o jogo — não sozinho.",
              label: "Conhecer Comunidade Sequoia"
            }
          ].map((item, i) => (
            <motion.a 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              href={item.href} 
              className="group bg-[#FAF8F3] border border-dourado/20 hover:border-dourado/50 hover:shadow-[0_20px_50px_rgba(26,58,46,0.25)] hover:-translate-y-2 p-8 md:p-12 rounded-[40px] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full"
            >
              <div>
                <div className="font-serif text-[56px] md:text-[72px] font-black text-dourado leading-none mb-6 transition-transform duration-300 group-hover:scale-105 origin-left">{item.num}</div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-verde mb-4 leading-tight group-hover:text-verde-med transition-colors">{item.title}</h3>
                <p className="text-[15px] md:text-[16px] text-ink/75 leading-relaxed mb-10 font-sans">{item.desc}</p>
              </div>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-extrabold text-verde flex items-center gap-2 group-hover:gap-4 group-hover:text-verde-med transition-all mt-auto">
                {item.label} <ArrowRight size={16} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Quiz = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [nome, setNome] = useState("");
  const [wa, setWa] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const WA_NUMBER = "5511940803333";

  const results = {
    direcao: {
      icon: '🧭',
      titulo: 'Você precisa de direção estratégica',
      desc: 'Sua maior alavanca agora não é trabalhar mais — é entender exatamente onde está e para onde quer ir. Com clareza, tudo muda.',
      produto: 'Marca Intencional',
      link: 'marca-intencional.html',
      msg: 'Olá, Débora! Fiz o diagnóstico no seu site e o resultado foi: *Marca Intencional*. Gostaria de entender como funciona e dar o próximo passo.'
    },
    lideranca: {
      icon: '🔐',
      titulo: 'Seu próximo nível depende da sua liderança',
      desc: 'Você tem potencial — o que falta é a liderança que sustenta resultados consistentes, sem depender só de você para tudo funcionar.',
      produto: 'Mentoria de Liderança',
      link: 'mentoria-individual.html',
      msg: 'Olá, Débora! Fiz o diagnóstico no seu site e o resultado foi: *Mentoria de Liderança*. Gostaria de entender como funciona e dar o próximo passo.'
    },
    network: {
      icon: '🌱',
      titulo: 'Você cresce mais rápido com as conexões certas',
      desc: 'Você já tem clareza e movimento — o que potencializa agora é estar com pessoas que jogam no mesmo nível e entendem o jogo.',
      produto: 'Comunidade Sequoia',
      link: 'sequoia.html',
      msg: 'Olá, Débora! Fiz o diagnóstico no seu site e o resultado foi: *Comunidade Sequoia*. Gostaria de entender como funciona e dar o próximo passo.'
    }
  };

  const steps = [
    {
      q: "Qual sensação mais se aproxima da sua carreira hoje?",
      options: [
        { l: "A", t: "Estou travado — sei que poderia estar em outro nível", v: "direcao" },
        { l: "B", t: "Estou crescendo, mas sem clareza para onde", v: "direcao" },
        { l: "C", t: "Estou liderando, mas com dificuldade — meu time depende demais de mim", v: "lideranca" },
        { l: "D", t: "Estou bem, mas quero evoluir com as pessoas certas ao redor", v: "network" }
      ]
    },
    {
      q: "Qual é seu maior desafio agora?",
      options: [
        { l: "A", t: "Decidir meus próximos passos com clareza", v: "direcao" },
        { l: "B", t: "Organizar prioridades e liderar melhor meu time", v: "lideranca" },
        { l: "C", t: "Desenvolver minha performance e consistência", v: "lideranca" },
        { l: "D", t: "Encontrar pessoas no meu nível para crescer junto", v: "network" }
      ]
    },
    {
      q: "Qual é o seu nível atual?",
      options: [
        { l: "A", t: "Pleno / Analista", v: "direcao" },
        { l: "B", t: "Sênior / Especialista", v: "direcao" },
        { l: "C", t: "Gestão / Coordenação", v: "lideranca" },
        { l: "D", t: "Liderança / Executivo / C-level", v: "network" }
      ]
    },
    {
      q: "O que você busca neste momento?",
      options: [
        { l: "A", t: "Clareza e direção estratégica para minha carreira", v: "direcao" },
        { l: "B", t: "Evolução na liderança e melhora de performance", v: "lideranca" },
        { l: "C", t: "Crescimento contínuo com network de alto valor", v: "network" },
        { l: "D", t: "Reposicionamento e novo ciclo profissional", v: "direcao" }
      ]
    },
    {
      q: "Como você se vê investindo na sua evolução agora?",
      options: [
        { l: "A", t: "Pronto para dar um passo, mas quero entender as opções primeiro", v: "direcao" },
        { l: "B", t: "Com clareza do que quero — buscando o programa certo", v: "lideranca" },
        { l: "C", t: "Totalmente comprometido com o próximo nível", v: "network" }
      ]
    }
  ];

  const calcResult = () => {
    const counts: Record<string, number> = { direcao: 0, lideranca: 0, network: 0 };
    Object.values(answers).forEach((v) => {
      const val = v as string;
      if (val in counts) {
        counts[val]++;
      }
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as keyof typeof results;
  };

  const selectOption = (val: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setAnswers(prev => ({ ...prev, [step]: val }));
    
    setTimeout(() => {
      if (step < steps.length) {
        setStep(step + 1);
      } else {
        setStep(6);
      }
      setIsTransitioning(false);
    }, 350);
  };

  const handleBack = () => {
    if (isTransitioning) return;
    setStep(step - 1);
  };

  const resultType = calcResult();
  const r = results[resultType];

  const handleSend = () => {
    if (!nome || !wa) return alert("Por favor, preencha nome e WhatsApp");
    const msg = encodeURIComponent(`🔔 *Novo lead — diagnóstico*\n\nNome: ${nome}\nWhatsApp: ${wa}\nResultado: *${r.produto}*\n\n---\n${r.msg}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setShowResult(true);
  };

  return (
    <section id="quiz" className="bg-brand-950 py-24 px-8 relative overflow-hidden">
      {/* Ambient decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-verde-claro/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-highlight block mb-5">Diagnóstico Gratuito</span>
          <h2 className="font-serif text-[clamp(28px,4vw,44px)] font-black text-creme leading-tight mb-4">Descubra qual é o seu<br /><span className="italic text-highlight">próximo movimento</span></h2>
          <p className="text-creme/40 text-sm">Responda 5 perguntas rápidas e receba seu resultado personalizado.</p>
        </div>

        {/* Dynamic, continuous, premium progress bar */}
        {!showResult && (
          <div className="mb-12 bg-white/5 border border-white/5 p-6 rounded-2xl">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium tracking-wider text-creme/50 uppercase">
                {step <= steps.length ? `Questão ${step} de ${steps.length}` : "Diagnóstico Concluído"}
              </span>
              <div className="text-xs font-mono font-bold text-highlight flex items-center gap-1.5 bg-highlight/10 px-2.5 py-1 rounded-full border border-highlight/20">
                <span>Progresso:</span>
                <motion.span 
                  key={`percent-${step}`}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-block min-w-[28px] text-right"
                >
                  {Math.round(((step <= steps.length ? step : steps.length) / steps.length) * 100)}%
                </motion.span>
              </div>
            </div>
            
            {/* Elegant Outer Track */}
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
              {/* Dynamic Animated Fill */}
              <motion.div 
                className="h-full bg-gradient-to-r from-highlight to-verde-claro rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${((step <= steps.length ? step : steps.length) / steps.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 80, damping: 18 }}
              />
              
              {/* Floating micro-step indicator circles */}
              <div className="absolute inset-0 flex justify-between px-1 pointer-events-none items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                      i < step 
                        ? "bg-creme scale-100" 
                        : i === step 
                          ? "bg-highlight scale-150 ring-4 ring-highlight/30" 
                          : "bg-creme/25"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="relative">
          <AnimatePresence mode="wait">
            {!showResult ? (
              step <= steps.length ? (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 25, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -25, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="space-y-8 w-full"
                >
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-creme leading-tight mb-8">
                    {steps[step-1].q}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {steps[step-1].options.map((opt, i) => {
                      const isSelected = answers[step] === opt.v;
                      return (
                        <motion.button
                          key={i}
                          onClick={() => selectOption(opt.v)}
                          disabled={isTransitioning}
                          whileHover={{ scale: isTransitioning ? 1 : 1.01, x: isTransitioning ? 0 : 4 }}
                          whileTap={{ scale: isTransitioning ? 1 : 0.99 }}
                          className={`flex items-center gap-5 p-5 border rounded-2xl text-left transition-all relative overflow-hidden ${
                            isSelected 
                              ? "bg-highlight/15 border-highlight text-creme shadow-[0_0_20px_rgba(9,119,139,0.15)]" 
                              : "bg-white/5 border-white/10 text-creme/70 hover:border-highlight/50 hover:bg-white/10 hover:text-creme"
                          }`}
                        >
                          {/* Left indicator bubble */}
                          <div className={`w-9 h-9 rounded-full border flex items-center justify-center text-[12px] font-bold transition-all shrink-0 ${
                            isSelected 
                              ? "bg-highlight border-highlight text-white" 
                              : "border-white/20 bg-white/5 text-creme/60"
                          }`}>
                            <AnimatePresence mode="wait">
                              {isSelected ? (
                                <motion.span
                                  key="check"
                                  initial={{ scale: 0, rotate: -45 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  exit={{ scale: 0 }}
                                  className="flex items-center justify-center"
                                >
                                  <Check size={16} strokeWidth={3} />
                                </motion.span>
                              ) : (
                                <span key="letter">{opt.l}</span>
                              )}
                            </AnimatePresence>
                          </div>
                          
                          <span className="text-[15px] md:text-[16px] leading-snug font-medium">{opt.t}</span>
                          
                          {/* Selected background glow/accent */}
                          {isSelected && (
                            <motion.div 
                              layoutId="active-bg-glow"
                              className="absolute inset-0 bg-highlight/5 pointer-events-none"
                              initial={false}
                              transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                  
                  {step > 1 && (
                    <motion.button 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={handleBack} 
                      disabled={isTransitioning}
                      className="inline-flex items-center gap-2 text-sm text-creme/40 hover:text-creme transition-colors mt-4 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/5"
                    >
                      ← Voltar
                    </motion.button>
                  )}
                </motion.div>
              ) : (
                <motion.div 
                  key="lead-form"
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[32px] text-center shadow-xl"
                >
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-creme mb-3">Seu diagnóstico está pronto!</h3>
                  <p className="text-creme/40 text-sm md:text-base mb-10 max-w-md mx-auto">Preencha os dados abaixo para receber seu resultado personalizado diretamente no WhatsApp.</p>
                  
                  <div className="space-y-4 max-w-sm mx-auto">
                    <div className="relative group">
                      <input 
                        type="text" 
                        placeholder="Nome completo" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-creme outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/30 transition-all text-[15px]" 
                      />
                    </div>
                    <div className="relative group">
                      <input 
                        type="tel" 
                        placeholder="WhatsApp com DDD" 
                        value={wa} 
                        onChange={(e) => setWa(e.target.value)} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-creme outline-none focus:border-highlight focus:ring-1 focus:ring-highlight/30 transition-all text-[15px]" 
                      />
                    </div>
                    <motion.button 
                      onClick={handleSend} 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-highlight text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-widest transition-all hover:bg-highlight/80 flex items-center justify-center gap-3 shadow-lg shadow-highlight/25"
                    >
                      Receber meu diagnóstico <ArrowRight size={16} />
                    </motion.button>
                  </div>
                  
                  <button 
                    onClick={() => setStep(steps.length)} 
                    className="text-xs text-creme/30 hover:text-creme transition-colors mt-8 inline-block underline underline-offset-4"
                  >
                    ← Corrigir respostas
                  </button>
                </motion.div>
              )
            ) : (
              <motion.div 
                key="result-page"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", damping: 20 }}
                className="text-center bg-white/5 border border-white/10 p-8 md:p-16 rounded-[40px] shadow-2xl relative overflow-hidden"
              >
                {/* Visual celebratory overlay */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-highlight/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-verde-claro/10 rounded-full blur-3xl pointer-events-none" />

                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 120, damping: 12 }}
                  className="w-24 h-24 bg-highlight/20 border border-highlight/25 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 shadow-inner"
                >
                  {r.icon}
                </motion.div>
                
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-highlight block mb-3">Diagnóstico Concluído</span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-creme mb-4 max-w-xl mx-auto leading-tight">{r.titulo}</h3>
                <p className="text-creme/60 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">{r.desc}</p>
                
                <div className="inline-block bg-highlight/10 border border-highlight/20 px-8 py-4 rounded-2xl mb-12">
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-highlight/80 block mb-1">Recomendação</span>
                  <div className="font-serif italic text-2xl md:text-3xl text-creme">{r.produto}</div>
                </div>

                <div className="flex flex-col gap-4 max-w-sm mx-auto">
                  <motion.a 
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(r.msg)}`} 
                    target="_blank" 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#25D366] text-white py-5 rounded-full font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-[#25D366]/25 transition-all"
                  >
                    <MessageCircle size={20} fill="currentColor" /> Falar com a Débora
                  </motion.a>
                  <a href={r.link} className="text-sm text-creme/40 hover:text-highlight transition-colors flex items-center justify-center gap-1.5 py-2 underline underline-offset-4">
                    Ver detalhes do programa <ChevronRight size={14} />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};


const ProgramsGrid = () => {
  const cards = [
    {
      title: "Liderança Atualizada",
      subtitle: "MENTORIA EM GRUPO",
      desc: "Programa estratégico em grupo para líderes seniores e gestores que buscam transição de carreira, delegação segura, cultura de confiança e segurança psicológica em suas equipes.",
      features: ["Líderes, Coordenadores e Gerentes", "Transição do Operacional para o Estratégico", "Próxima turma em agosto"],
      icon: <Users size={24} />,
      link: "lideranca-atualizada.html",
      whatsapp: "Olá, Débora! Tenho interesse em garantir minha vaga na turma de agosto do programa Liderança Atualizada.",
      ctaPageLabel: "Conhecer programa",
      isDestaque: true,
      selo: "TURMA ABERTA",
      encontros: {
        title: "ENCONTROS ONLINE AO VIVO",
        datas: "03, 10, 17 e 24/08",
        horario: "Segundas-feiras, das 20h às 21h30"
      }
    },
    {
      title: "Marca Intencional",
      subtitle: "POSICIONAMENTO",
      desc: "Desenvolvimento de posicionamento profissional e presença executiva de alta performance, focado em comunicação de valor e gestão estratégica de capital político nos bastidores corporativos.",
      features: ["Profissionais Experientes e Líderes", "Fortalecimento de Presença Executiva", "Gestão de Capital Político e Reputação"],
      icon: <Award size={24} />,
      link: "marca-intencional.html",
      whatsapp: "Olá, Débora! Tenho interesse em garantir minha vaga na turma de Marca Intencional.",
      ctaPageLabel: "Conhecer programa",
      isDestaque: true,
      selo: "TURMA ABERTA",
      encontros: {
        title: "ENCONTROS ONLINE AO VIVO",
        datas: "12 e 26/08, 09 e 23/09",
        horario: "Quartas-feiras, das 20h às 21h30"
      }
    },
    {
      title: "Mentoria Individual",
      subtitle: "GESTÃO DE CARREIRA",
      desc: "Acompanhamento 100% individualizado em 8 sessões estratégicas com diagnóstico 360º para tomadas de decisão complexas e transição de carreira com total confidencialidade.",
      features: ["Executivos, Diretores e Seniores", "Planejamento e Transição de Carreira", "Sessões Individuais Confidenciais"],
      icon: <Target size={24} />,
      link: "mentoria-individual.html",
      whatsapp: "Olá, gostaria de saber mais sobre a mentoria individual.",
      ctaPageLabel: "Conhecer programa",
      isDestaque: false
    },
    {
      title: "Comunidade Sequoia",
      subtitle: "ECOSSISTEMA",
      desc: "Ecossistema qualificado de networking, discussões de Hot Seat e mentoria continuada para gerentes seniores e executivos trocarem experiências de bastidores livres do isolamento.",
      features: ["Gerentes Sêniores, Diretores e Executivos", "Espaço Seguro de Troca de Casos Reais", "Encontros Mensais e Clube do Livro"],
      icon: <Trees size={24} />,
      link: "sequoia.html",
      whatsapp: "Olá, gostaria de saber mais sobre a Comunidade Sequoia.",
      ctaPageLabel: "Conhecer programa",
      isDestaque: false
    },
    {
      title: "Palestras & Workshops",
      subtitle: "CORPORATIVO",
      desc: "Eventos e treinamentos corporativos in-company sob medida sobre Liderança Estratégica, Segurança Psicológica, Comunicação Assertiva e Cultura de Confiança.",
      features: ["Empresas e Equipes Corporativas", "Palestra ou Workshop Sob Medida", "Formatos Presencial ou Online"],
      icon: <Mic size={24} />,
      link: "palestras.html",
      whatsapp: "Olá, gostaria de solicitar uma proposta de palestra para minha empresa.",
      ctaPageLabel: "Conhecer programa",
      isDestaque: false
    }
  ];

  return (
    <section id="programas" className="bg-[#FCFAF7] pt-16 pb-20 md:pt-20 md:pb-24 px-6 sm:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-eyebrow"
          >
            Ecossistema de Soluções
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[clamp(28px,3.5vw,48px)] font-black leading-[1.15] text-ink"
          >
            O seu próximo <span className="italic text-highlight">salto estratégico</span> começa aqui.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`p-8 md:p-10 rounded-[32px] md:rounded-[40px] flex flex-col transition-all group relative overflow-hidden ${
                card.isDestaque 
                  ? "bg-[#FAF6F0] border-2 border-verde shadow-[0_20px_45px_rgba(26,58,46,0.08)] z-10" 
                  : "bg-white border border-ink/15 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-verde/30 hover:shadow-[0_30px_60px_rgba(26,58,46,0.06)]"
              }`}
            >
              <div className="flex justify-between items-start mb-6 w-full gap-4">
                <div className="w-14 h-14 bg-creme rounded-2xl flex items-center justify-center text-verde group-hover:bg-verde group-hover:text-creme transition-colors border border-verde/10 shrink-0">
                  {card.icon}
                </div>
                {card.isDestaque && card.selo && (
                  <span className="inline-flex items-center gap-1.5 bg-verde text-creme text-[9px] uppercase tracking-[0.2em] font-extrabold px-3.5 py-1.5 rounded-full shadow-sm shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-dourado animate-pulse"></span> {card.selo}
                  </span>
                )}
              </div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 font-black mb-3">{card.subtitle}</p>
              <h3 className="font-serif text-[28px] font-bold text-ink leading-tight mb-4">{card.title}</h3>
              
              {card.encontros && (
                <div className="mb-5 p-4 bg-verde/5 border border-verde/10 rounded-2xl text-xs flex flex-col gap-1.5 text-verde">
                  <span className="uppercase text-[9px] font-black tracking-widest text-verde-med/75">{card.encontros.title}</span>
                  <div className="flex items-center gap-2 font-bold text-ink">
                    <Calendar size={14} className="shrink-0 text-verde-med" />
                    <span>{card.encontros.datas}</span>
                  </div>
                  <div className="flex items-center gap-2 text-ink/75">
                    <Clock size={14} className="shrink-0 text-verde-med/70" />
                    <span>{card.encontros.horario}</span>
                  </div>
                </div>
              )}

              <p className="text-[15px] text-ink/80 leading-[1.65] mb-6">{card.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {card.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[13.5px] text-ink/90 font-medium">
                    <Check size={14} className="text-verde shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-3">
                <a 
                  href={card.link}
                  className="block w-full py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold text-center transition-all bg-verde text-white hover:bg-[#112e28] shadow-md shadow-verde/10 hover:-translate-y-px duration-300"
                >
                  {card.ctaPageLabel}
                </a>
                <a 
                  href={`https://wa.me/5511940803333?text=${encodeURIComponent(card.whatsapp)}`}
                  target="_blank"
                  rel="noopener"
                  className="block w-full border border-verde/20 text-verde-med hover:bg-verde/5 py-3.5 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold text-center transition-all duration-300"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Lectures = () => {
  const lectures = [
    {
      title: "Liderança na Era da Incerteza",
      desc: "Como guiar times de alta performance em cenários de mudança constante e pressão por resultados."
    },
    {
      title: "Comunicação de Impacto",
      desc: "Domine a arte de influenciar, negociar e se posicionar com autoridade em reuniões de alto nível."
    },
    {
      title: "Estratégia de Carreira 360º",
      desc: "Saia do operacional e assuma o protagonismo da sua trajetória profissional com foco em crescimento."
    }
  ];

  return (
    <section id="palestras" className="bg-creme pt-14 pb-24 md:pt-16 md:pb-32 px-6 sm:px-8 border-t border-ink/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col min-[900px]:flex-row justify-between items-start min-[900px]:items-end gap-10 mb-10 md:mb-14">
          <div className="max-w-[700px]">
            <motion.span 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="section-eyebrow"
            >
              Palestras & Workshops
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[clamp(32px,4.5vw,56px)] font-black leading-[1.1] text-ink"
            >
              Conteúdo de <span className="italic text-highlight">alto impacto</span> para o seu time.
            </motion.h2>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="https://wa.me/5511940803333?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20um%20or%C3%A7amento%20para%20palestras" 
            target="_blank"
            rel="noopener"
            className="w-full sm:w-auto text-center bg-verde text-white px-12 py-5 rounded-full text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-[#112e28] hover:-translate-y-px shadow-lg transition-all"
          >
            Solicitar orçamento
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {lectures.map((l, i) => (
            <motion.article 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="bg-white p-10 md:p-12 rounded-[40px] border border-ink/6 shadow-sm hover:shadow-2xl transition-all group"
            >
              <div className="w-14 h-14 bg-creme rounded-2xl flex items-center justify-center text-verde font-serif text-2xl font-bold mb-10 italic group-hover:bg-verde group-hover:text-white transition-all duration-500">
                {i + 1}.
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink leading-tight mb-6">{l.title}</h3>
              <p className="text-[16px] md:text-[18px] text-ink/65 leading-relaxed">{l.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Repertoire = () => {
  return (
    <section className="bg-white py-20 md:py-24 px-6 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <span className="section-eyebrow text-center md:text-left">Repertório & Autoridade</span>
          <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] font-black leading-[1.15] text-ink mb-8 text-center md:text-left">
            Fundamento que <br />
            <span className="italic text-highlight">gera resultado.</span>
          </h2>
          <p className="text-base md:text-lg text-ink/70 leading-relaxed mb-8 text-center md:text-left">
            A prática sem teoria é cega, e a teoria sem prática é estéril. Minha atuação é pautada por um repertório sólido, unindo os maiores clássicos da gestão com as ferramentas mais modernas de desenvolvimento humano.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="p-5 md:p-6 bg-creme rounded-2xl border border-ink/5 text-center sm:text-left">
              <div className="text-verde font-bold text-base md:text-lg mb-1">Estratégia</div>
              <div className="text-[10px] text-ink/40 uppercase tracking-widest font-medium">Visão de Longo Prazo</div>
            </div>
            <div className="p-5 md:p-6 bg-creme rounded-2xl border border-ink/5 text-center sm:text-left">
              <div className="text-verde font-bold text-base md:text-lg mb-1">Liderança</div>
              <div className="text-[10px] text-ink/40 uppercase tracking-widest font-medium">Gestão de Pessoas</div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative group">
          <div className="absolute -inset-2 md:-inset-4 bg-verde/5 rounded-[24px] md:rounded-[48px] scale-105 group-hover:scale-110 transition-transform duration-700"></div>
          <img 
            src="assets/debora/02_programas/lideranca-atualizada/debora-lideranca-livros.webp" 
            alt="Repertório Débora Bolangno - Livros de liderança e gestão" 
            className="relative rounded-[24px] md:rounded-[40px] shadow-2xl brightness-95 group-hover:brightness-100 transition-all duration-700 w-full" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const diffs = [
    {
      title: "+ de 20 anos vivendo o mundo corporativo",
      desc: "Te entrego as minhas experiências e todo o repertório obtido vivenciando diferentes jornadas dos meus clientes."
    },
    {
      title: "Método Validado",
      desc: "Processos estruturados que unem ferramentas executivas com inteligência emocional e prática."
    },
    {
      title: "Foco em Execução",
      desc: "Menos teoria abstrata e mais planos de ação concretos para resultados visíveis em curto prazo."
    }
  ];

  return (
    <section className="bg-verde py-24 md:py-40 px-6 sm:px-8 text-creme overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <div className="mb-16 md:mb-24 text-center md:text-left">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="section-eyebrow-light text-center md:text-left"
              >
                Diferenciais
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-[clamp(32px,4.5vw,64px)] font-black leading-[1.05]"
              >
                Por que <br className="hidden md:block" />
                <span className="italic text-highlight">Débora Bolangno?</span>
              </motion.h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {diffs.map((d, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[40px] hover:bg-white/10 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-start text-center sm:text-left">
                    <div className="w-14 h-14 bg-dourado/20 rounded-2xl flex items-center justify-center text-dourado shrink-0 group-hover:scale-110 transition-transform">
                      <Check size={28} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">{d.title}</h3>
                      <p className="text-creme/60 text-base md:text-lg leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] md:rounded-[64px] overflow-hidden aspect-[4/5] shadow-2xl group"
          >
            <img 
              src="https://i.ibb.co/mVqGg1yW/debora-hero-nova.webp" 
              alt="Débora Bolangno Diferenciais" 
              className="w-full h-full object-cover object-[center_20%] transition-transform duration-[3s] group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-verde/60 via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-950/60 backdrop-blur-md z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 m-auto w-[92%] max-w-lg h-fit max-h-[90vh] bg-creme rounded-[2rem] md:rounded-[2.5rem] z-[70] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-6 md:p-12 overflow-y-auto">
              <div className="flex justify-between items-start mb-6 md:mb-8">
                <div className="pr-8">
                  <h3 className="font-serif text-2xl md:text-4xl font-bold text-ink mb-2">Vamos conversar?</h3>
                  <p className="text-ink/60 text-xs md:text-base leading-relaxed">Escolha o canal de sua preferência para iniciarmos sua jornada estratégica.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-brand-900/5 rounded-full transition-colors absolute right-6 top-6 md:static"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3 md:space-y-4">
                <a 
                  href="https://wa.me/5511940803333?text=Ol%C3%A1%2C%20vim%20pelo%20portf%C3%B3lio%20corporativo%20e%20gostaria%20de%20agendar%20uma%20conversa%20estrat%C3%A9gica" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-brand-700 rounded-2xl text-white hover:bg-brand-800 transition-all group shadow-lg shadow-brand-700/20"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <MessageCircle size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-base md:text-lg">WhatsApp Direto</div>
                    <div className="text-white/60 text-[10px] uppercase tracking-widest font-semibold">Resposta em até 24h</div>
                  </div>
                  <ChevronRight size={18} className="ml-auto opacity-50" />
                </a>

                <a 
                  href="mailto:deborabolangno@outlook.com" 
                  className="flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-white border border-ink/10 rounded-2xl text-ink hover:border-brand-700/30 transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700 group-hover:scale-110 transition-transform shrink-0">
                    <Mail size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-base md:text-lg">E-mail Corporativo</div>
                    <div className="text-ink/40 text-[9px] md:text-xs uppercase tracking-widest font-semibold truncate">deborabolangno@outlook.com</div>
                  </div>
                  <ChevronRight size={18} className="ml-auto opacity-20" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/deborabolangno" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 md:gap-5 p-4 md:p-6 bg-white border border-ink/10 rounded-2xl text-ink hover:border-brand-700/30 transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-700 group-hover:scale-110 transition-transform shrink-0">
                    <Linkedin size={20} className="md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-base md:text-lg">LinkedIn Profissional</div>
                    <div className="text-ink/40 text-[9px] md:text-xs uppercase tracking-widest font-semibold">Conecte-se e acompanhe insights</div>
                  </div>
                  <ChevronRight size={18} className="ml-auto opacity-20" />
                </a>
              </div>
            </div>
            
            <div className="bg-brand-900 p-6 text-center">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                Débora Bolangno · Mentoria & Consultoria
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const CTA = () => {
  return (
    <section id="contato" className="bg-white pt-14 pb-24 md:pt-16 md:pb-32 px-6 sm:px-8 border-y border-ink/4 overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden aspect-square md:aspect-[4/5] max-w-md mx-auto w-full shadow-xl order-last md:order-first">
            <img 
              src="assets/debora/01_home/sobre/debora-sobre-camisa-branca.webp" 
              alt="Débora Bolangno - Posicionamento e Estratégia de Carreira" 
              className="w-full h-full object-cover object-[center_15%] transition-transform duration-[3s] hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
          <div className="text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-eyebrow"
            >
              Próximo Passo
            </motion.span>
            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-bold text-ink leading-[1.1] mb-5 md:mb-6">
              Pronto para o seu <span className="italic text-highlight">próximo nível</span> na carreira?
            </h2>
            <p className="text-base md:text-lg text-ink/65 max-w-[500px] mx-auto md:mx-0 mb-8 md:mb-10 leading-relaxed">
              Agende agora um diagnóstico estratégico e entenda como podemos acelerar seu crescimento e resultados.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="https://wa.me/5511940803333?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico" target="_blank" rel="noopener" className="w-full sm:w-auto bg-verde text-white px-8 md:px-10 py-4.5 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-bold hover:bg-[#112e28] hover:-translate-y-px shadow-xl shadow-verde/20 transition-all flex items-center justify-center gap-3">
                Agendar diagnóstico agora
                <ArrowRight size={18} />
              </a>
              <a href="https://www.linkedin.com/in/deborabolangno" target="_blank" rel="noopener" className="w-full sm:w-auto border-2 border-ink/10 text-ink px-8 md:px-10 py-4.5 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-bold hover:bg-[#FAF6F0] hover:border-verde hover:text-verde hover:-translate-y-px hover:shadow-md transition-all duration-300 text-center">
                Ver LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-verde py-16 px-8 text-creme">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pb-8 border-b border-white/10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4">
              <img src="assets/debora/00_identidade/logo-db-simbolo.png" alt="Logo Débora Bolangno" className="w-10 h-10 object-contain brightness-0 invert" referrerPolicy="no-referrer" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none mb-1">Débora Bolangno</span>
                <span className="text-[9px] uppercase tracking-widest text-creme/40">Estratégia de Carreira & Liderança</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.instagram.com/deborabolangno" target="_blank" rel="noopener" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/deborabolangno" target="_blank" rel="noopener" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:deborabolangno@outlook.com" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
              <Mail size={18} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-creme/60 text-[8.5px] sm:text-[11px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.4em] mb-1">
              Desenvolvido por <a href="https://www.orvalia.com.br" target="_blank" rel="noopener" className="hover:text-creme transition-colors underline underline-offset-4 whitespace-nowrap" style={{ whiteSpace: 'nowrap', display: 'inline-block' }}><span className="whitespace-nowrap" style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>Orvalia Studio</span></a>
            </p>
            <p className="text-[9px] sm:text-[11px] font-mono text-creme/60 uppercase tracking-[0.15em] sm:tracking-[0.4em] leading-relaxed">
              <span className="block sm:inline mb-0.5 sm:mb-0">© 2026 Débora Bolangno</span>
              <span className="hidden sm:inline"> · </span>
              <span className="block sm:inline">Todos os direitos reservados</span>
            </p>
          </div>
        </div>

        {/* Legal links row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[9px] sm:text-[11px] font-mono text-creme/50 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            <a href="politica-de-privacidade.html" className="hover:text-creme transition-colors">Política de Privacidade</a>
            <span className="hidden sm:inline opacity-30">·</span>
            <a href="termos-de-uso.html" className="hover:text-creme transition-colors">Termos de Uso</a>
            <span className="hidden sm:inline opacity-30">·</span>
            <a href="politica-de-cookies.html" className="hover:text-creme transition-colors">Política de Cookies</a>
          </div>
          <div className="text-[9px] sm:text-[11px] font-mono text-creme/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] mt-2 sm:mt-0">
            Sua Carreira, Gerida com Intencionalidade.
          </div>
        </div>
      </div>
    </footer>
  );
};

const SectionReveal = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-120px" }}
    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
      setShowWhatsApp(window.scrollY > 300); // Exibe o WhatsApp após rolar 300px (fora do topo da Hero)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect when footer is visible to fade out floating buttons
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsFooterVisible(entry.isIntersecting);
      });
    }, { root: null, threshold: 0.1 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Handle hash scrolling on mount (e.g. index.html#programas)
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, []);

  // Close modal on Esc key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsContactModalOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isContactModalOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="selection:bg-verde selection:text-white relative">
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <main>
        <Hero />
        <Marquee />
        <PresenceGallery />
        <SectionReveal><Triagem /></SectionReveal>
        <div className="bg-creme py-32 px-8 text-center border-y border-ink/5">
          <p className="font-serif text-[clamp(28px,4vw,48px)] font-black text-ink leading-tight max-w-[680px] mx-auto mb-6">
            O problema não é esforço.<br /><span className="italic text-highlight">É direção estratégica.</span>
          </p>
          <p className="text-ink/50 text-lg max-w-[500px] mx-auto leading-relaxed">
            Profissionais que chegam ao próximo nível não trabalham mais — trabalham com mais clareza sobre onde estão indo e por quê.
          </p>
        </div>
        <SectionReveal><Identification /></SectionReveal>
        <SectionReveal><ProofBar /></SectionReveal>
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Repertoire /></SectionReveal>
        <SectionReveal><TestimonialsLuxury /></SectionReveal>
        <SectionReveal><Qualification /></SectionReveal>
        <SectionReveal><ProgramsGrid /></SectionReveal>
        <SectionReveal><Lectures /></SectionReveal>
        <SectionReveal><Differentials /></SectionReveal>
        <Quiz />
        <CTA />
      </main>
      <Footer />


      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Floating Actions */}
      {!isMobileMenuOpen && showWhatsApp && (
        <div className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex gap-3 sm:gap-4 items-center transition-all duration-300 ${isFooterVisible ? 'opacity-15 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/5511940803333?text=${encodeURIComponent("Olá, vim pelo site e gostaria de mais informações.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center"
            aria-label="Contato via WhatsApp"
          >
            <MessageCircle size={22} fill="currentColor" className="sm:w-6 sm:h-6" />
          </a>

          {/* Back to Top Button */}
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={scrollToTop}
              className="p-3 sm:p-4 bg-verde text-creme rounded-full shadow-2xl hover:bg-verde-med transition-all"
            >
              <ArrowUp size={18} className="sm:w-5 sm:h-5" />
            </motion.button>
          )}
        </div>
      )}
    </div>
  );
}
