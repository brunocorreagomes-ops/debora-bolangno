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
              src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
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
                    src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
                    alt="Logo" 
                    className="w-10 h-10 object-contain"
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
    <section id="hero" className="min-h-screen pt-20 md:pt-24 flex items-center bg-creme overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-6 sm:px-8 py-6 md:py-10 grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 lg:gap-20 items-center w-full"
      >
        <div className="text-center md:text-left flex flex-col md:block">
          <motion.div variants={item} className="flex items-center justify-center md:justify-start gap-3 mb-5 order-1">
            <div className="w-10 h-px bg-verde-med"></div>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-verde-med font-black">
              Estrategista de Carreira · Débora Bolangno
            </span>
          </motion.div>
          
          <motion.h1 variants={item} className="font-serif text-[clamp(28px,4.4vw,56px)] font-black leading-[1.12] text-ink mb-6 tracking-tight order-2">
            <span className="block">Clareza para decidir.</span>
            <span className="block text-ink/90">Confiança para agir.</span>
            <span className="block italic text-highlight mt-1 md:mt-1.5">Estratégia para crescer.</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-base md:text-lg lg:text-[19px] text-ink/65 max-w-[540px] mx-auto md:mx-0 leading-relaxed mb-5 md:mb-6 order-3">
            Mentoria em carreira e liderança para profissionais que desejam ampliar seu impacto, fortalecer seu posicionamento e crescer com intenção.
          </motion.p>

          {/* Destaque Turma Aberta Liderança Atualizada e Marca Intencional */}
          <motion.div 
            variants={item} 
            className="mt-3 md:mt-4 mb-8 p-6 md:p-8 bg-[#FAF6F0] border border-verde/15 rounded-[32px] shadow-xl shadow-verde/5 text-left max-w-[540px] mx-auto md:mx-0 flex flex-col order-4"
          >
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="bg-verde text-creme text-[9px] uppercase tracking-[0.2em] font-black px-2.5 py-1 rounded-md">
                TURMAS ABERTAS
              </span>
              <span className="text-[10px] uppercase tracking-[0.12em] text-verde-med font-extrabold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-dourado animate-pulse"></span> AGOSTO E SETEMBRO 2026
              </span>
            </div>
            
            <h3 className="font-serif text-xl md:text-2xl font-black text-ink mb-1 leading-tight">Escolha a turma ideal para o seu momento</h3>
            <p className="text-xs md:text-[13px] text-ink/65 mb-6 leading-relaxed">
              Dois programas ao vivo, com propostas diferentes e vagas abertas agora.
            </p>
            
            <div className="space-y-4">
              {/* Programa 1: Liderança Atualizada */}
              <div className="bg-white border border-verde/10 rounded-2xl p-4 md:p-5 hover:border-verde/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-serif text-[15px] md:text-base font-extrabold text-verde">Liderança Atualizada</h4>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider bg-verde/5 text-verde-med uppercase shrink-0">
                      Turma semanal
                    </span>
                  </div>
                  
                  <p className="text-ink/80 text-[12px] leading-relaxed mb-3.5">
                    Para líderes que querem se comunicar melhor, decidir com clareza e conduzir seus times com mais segurança.
                  </p>

                  <div className="space-y-1.5 text-[11px] md:text-xs mb-4">
                    <div className="flex items-center gap-2 text-ink font-semibold">
                      <Calendar size={13} className="text-dourado shrink-0" />
                      <span>03, 10, 17 e 24/08</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink/75">
                      <Clock size={13} className="text-verde-med/70 shrink-0" />
                      <span>Segundas-feiras · 20h às 21h30</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="lideranca-atualizada.html" 
                  className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] font-black text-verde hover:text-dourado uppercase tracking-widest transition-all duration-300 self-start group/link border-b border-verde/20 hover:border-dourado pb-0.5"
                >
                  <span>Garantir minha vaga</span>
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-1 text-verde group-hover/link:text-dourado" />
                </a>
              </div>

              {/* Programa 2: Marca Intencional */}
              <div className="bg-white border border-verde/10 rounded-2xl p-4 md:p-5 hover:border-verde/20 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-serif text-[15px] md:text-base font-extrabold text-verde">Marca Intencional</h4>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black tracking-wider bg-dourado/10 text-[#8c744c] uppercase shrink-0">
                      Turma quinzenal
                    </span>
                  </div>
                  
                  <p className="text-ink/80 text-[12px] leading-relaxed mb-3.5">
                    Para profissionais que querem fortalecer posicionamento, narrativa e presença.
                  </p>

                  <div className="space-y-1.5 text-[11px] md:text-xs mb-4">
                    <div className="flex items-center gap-2 text-ink font-semibold">
                      <Calendar size={13} className="text-dourado shrink-0" />
                      <span>12 e 26/08 · 09 e 23/09</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink/75">
                      <Clock size={13} className="text-verde-med/70 shrink-0" />
                      <span>Quartas-feiras · 20h às 21h30</span>
                    </div>
                  </div>
                </div>

                <a 
                  href="marca-intencional.html" 
                  className="inline-flex items-center gap-1.5 text-[10px] md:text-[11px] font-black text-verde hover:text-dourado uppercase tracking-widest transition-all duration-300 self-start group/link border-b border-verde/20 hover:border-dourado pb-0.5"
                >
                  <span>Garantir minha vaga</span>
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-1 text-verde group-hover/link:text-dourado" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* CTAs da Hero (Principal & Secundário) */}
          <motion.div variants={item} className="order-5 mb-6 md:mb-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#programas" 
              className="inline-flex items-center justify-center gap-4 bg-verde text-white px-8 md:px-10 py-4 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-bold transition-all hover:bg-[#112e28] hover:-translate-y-px shadow-xl shadow-verde/20 group w-full sm:w-auto animate-pulse-subtle"
            >
              Ver turmas abertas
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Imagem da Débora (Mobile Only) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-6 relative rounded-[32px] overflow-hidden aspect-[4/5] bg-verde shadow-xl border border-ink/5 w-full max-w-[420px] mx-auto my-8 block md:hidden"
          >
            <img 
              src="https://i.ibb.co/mVqGg1yW/debora-hero-nova.webp" 
              alt="Débora Bolangno" 
              className="absolute w-full h-[110%] -top-[5%] object-cover object-[center_20%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </motion.div>
        </div>

        {/* Imagem da Débora (Desktop Only) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative rounded-[40px] md:rounded-[64px] overflow-hidden aspect-[4/5] bg-verde shadow-2xl border border-ink/5 hidden md:block w-full max-w-[500px] mx-auto md:max-w-none md:self-start md:mt-12"
        >
          <img 
            src="https://i.ibb.co/mVqGg1yW/debora-hero-nova.webp" 
            alt="Débora Bolangno" 
            className="absolute w-full h-[110%] -top-[5%] object-cover object-[center_20%] transition-transform duration-[3s] hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          <motion.img 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.08, x: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" 
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
    <section id="metodologia" className="bg-white py-24 md:py-32 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-[800px] mx-auto text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] font-black text-verde-med block mb-6"
          >
            Sintomas da Estagnação
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[clamp(32px,5vw,64px)] font-black leading-[1.05] text-ink"
          >
            Se você sente que deveria estar<br />
            em outro nível… <span className="italic text-highlight">provavelmente está certo.</span>
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
              className="flex gap-6 bg-creme/30 p-8 md:p-10 rounded-[40px] border border-transparent hover:border-dourado/30 transition-all hover:bg-creme/50 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-dourado/10 flex items-center justify-center shrink-0 group-hover:bg-dourado/20 transition-colors">
                <Check size={20} className="text-dourado" />
              </div>
              <p className="text-[16px] md:text-[18px] text-ink/75 leading-relaxed font-medium">{point}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center font-cormorant text-[24px] md:text-[32px] font-semibold text-verde/60 italic max-w-3xl mx-auto leading-relaxed"
        >
          "O esforço sem direção consome.<br />A estratégia clara liberta."
        </motion.p>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="bg-creme py-20 md:py-24 px-6 sm:px-8 border-y border-ink/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl aspect-square md:aspect-auto min-[900px]:h-[680px]">
          <img 
            src="https://i.ibb.co/6JVdcFbC/debora-secao-Sobre-Debora-Bolangno.webp" 
            alt="Débora Bolangno - Mentora de Carreira" 
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div>
          <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-verde-med/30 mb-6 block">Sobre Débora Bolangno</span>
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
            <img src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" alt="" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
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
  const testimonials = [
    {
      text: "Cada encontro foi transformador — inspiração, provocação e prática real. Já estou aplicando no meu dia a dia como líder.",
      name: "Lívia Alves",
      role: "Gerente de Agência Bradesco",
      image: "https://i.ibb.co/cSFbNmc2/LIVIA-ALVES-GERENTE-DE-AGENCIA-BRADESCO.jpg"
    },
    {
      text: "Semanas muito valiosas. Saio com determinação para implementar tudo.",
      name: "Anderson Alves dos Santos",
      role: "Gerente de Agência Bradesco | CFP®",
      image: "https://i.ibb.co/PzNrVgvj/Anderson-Alves-dos-Santos-CFPM-GERENTE-DE-AGENCIA-BRADESCO.jpg"
    },
    {
      text: "Levarei esses aprendizados comigo em cada desafio profissional.",
      name: "Fredie Abrantes",
      role: "Gerente de Agência Bradesco",
      image: "https://i.ibb.co/d0t8pY9V/fredieabrantes-gerente-de-agencia-bradesco.jpg"
    },
    {
      text: "Uma experiência que trouxe evolução real para executar no dia a dia.",
      name: "Sara Martins",
      role: "CEA",
      image: "https://i.ibb.co/bx6PJ2t/sara.png"
    }
  ];

  return (
    <section id="depoimentos" className="bg-verde text-creme py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-creme/40 font-black mb-6 block"
          >
            Impacto Real
          </motion.span>
          <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-black text-center text-creme leading-tight">
            Depoimentos que <br className="hidden md:block" /> validam a jornada.
          </h2>
        </div>

        {/* DESTAQUE RENATA */}
        <div className="mb-20 flex flex-col md:flex-row items-center gap-10 bg-white/[0.03] p-10 md:p-14 rounded-[40px] border border-white/10 shadow-2xl">
          <div className="text-center md:text-left w-full">
            <p className="font-cormorant text-[24px] md:text-[32px] leading-[1.5] italic text-creme/90 font-medium">
              “Uma jornada rica e transformadora. Saio com novos olhares, insights valiosos e a certeza de evolução real como líder.”
            </p>
            <span className="block mt-8 text-[12px] md:text-[14px] tracking-[0.2em] font-black text-highlight uppercase">
              — Renata Nazareth de Jesus, CEA
            </span>
          </div>
        </div>

        {/* LISTA LIMPA */}
        <div className="flex flex-col gap-12 md:gap-16 mb-24">
          {testimonials.map((t, i) => (
            <div key={i} className="flex gap-8 md:gap-10 items-start border-l-2 border-white/10 pl-8 md:pl-12 transition-all hover:border-highlight/50 group">
              <div className="flex flex-col">
                <p className="font-cormorant text-[20px] md:text-[24px] leading-relaxed text-creme/80 italic group-hover:text-creme transition-colors">
                  “{t.text}”
                </p>
                <div className="mt-6 flex flex-col">
                  <span className="text-[11px] font-bold text-creme uppercase tracking-[0.2em]">{t.name}</span>
                  <span className="text-[10px] font-mono text-creme/30 uppercase tracking-[0.2em] mt-1">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INSTITUCIONAL GLAUCIMAR */}
        <div className="border-t border-white/10 pt-20 flex flex-col items-center gap-10 text-center">
          <p className="font-cormorant text-[20px] md:text-[26px] text-creme/60 italic leading-relaxed max-w-2xl px-4">
            “Carreiras são construídas pela consistência, pelo tempo e pelas trocas. É na colaboração que fortalecemos nossa trajetória e ampliamos nosso impacto.”
          </p>
          <div className="flex flex-col items-center">
            <span className="block text-[11px] font-black text-verde-med uppercase tracking-[0.3em] mb-2">
              Glaucimar Peticov
            </span>
            <span className="text-[9px] md:text-[10px] text-creme/30 uppercase tracking-[0.1em] max-w-lg leading-relaxed font-bold">
              Conselheira e referência em liderança · Ex-Diretora Executiva Bradesco · CEO Peti Desenvolvimento Humano
            </span>
          </div>
        </div>
      </div>
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
      <img src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[40%] opacity-[0.03] pointer-events-none" referrerPolicy="no-referrer" />
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
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-verde-med block mb-4">Presença & Atuação</span>
          <h2 className="font-serif text-[ clamp(32px,3vw,48px) ] font-black text-ink italic leading-none">A liderança através do olhar.</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              src: "https://i.ibb.co/B58qn0fV/debora-atuacao-e-lideranca-01.webp",
              label: "Atuação & Liderança",
              delay: 0
            },
            {
              src: "https://i.ibb.co/N6gJyhg0/Debora-Branding-Posicionamento.webp",
              label: "Branding & Posicionamento",
              delay: 0.2
            },
            {
              src: "https://i.ibb.co/TqMtJCk3/Debora-Mentoria-Conex-o.webp",
              label: "Mentoria & Conexão",
              delay: 0.4
            },
            {
              src: "https://i.ibb.co/BHR15hzF/debora-Presen-a-Executiva.webp",
              label: "Presença Executiva",
              delay: 0.6
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: item.delay }}
              className="relative rounded-[56px] overflow-hidden aspect-[4/3] shadow-2xl group cursor-none"
            >
               <img 
                src={item.src} 
                alt={`Débora Bolangno - ${item.label}`} 
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
          className="text-[10px] uppercase tracking-[0.4em] font-black text-highlight block mb-6 text-center"
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
              label: "Marca Intencional"
            },
            {
              href: "mentoria-individual.html",
              num: "02",
              title: "Liderança travada",
              desc: "Meu time depende demais de mim. Preciso evoluir como líder e gerar resultado sem precisar estar em tudo.",
              label: "Mentoria"
            },
            {
              href: "sequoia.html",
              num: "03",
              title: "Crescimento isolado",
              desc: "Falta troca com pessoas no meu nível. Quero crescer junto com quem entende o jogo — não sozinho.",
              label: "Comunidade Sequoia"
            }
          ].map((item, i) => (
            <motion.a 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              href={item.href} 
              className="group bg-white/5 border border-white/10 p-8 md:p-12 rounded-[40px] transition-all hover:bg-highlight/10 hover:border-highlight/50 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="font-serif text-[48px] md:text-[64px] font-black text-highlight/20 leading-none mb-8">{item.num}</div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-creme mb-6">{item.title}</h3>
              <p className="text-[15px] md:text-[16px] text-creme/50 leading-relaxed mb-10">{item.desc}</p>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold text-highlight flex items-center gap-3 group-hover:gap-5 transition-all">
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
      desc: "Saia do operacional e torne-se o gestor que inspira, delega com segurança e constrói times de alta performance.",
      features: ["Aulas em grupo", "Ferramentas gerenciais", "Próxima turma em agosto"],
      icon: <Users size={24} />,
      link: "lideranca-atualizada.html",
      whatsapp: "Olá, Débora! Tenho interesse em garantir minha vaga na turma de agosto do programa Liderança Atualizada.",
      ctaPageLabel: "Garantir minha vaga",
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
      desc: "Fortaleça sua presença, comunique seu valor com clareza e construa um posicionamento profissional mais estratégico.",
      features: ["Clareza de posicionamento", "Narrativa profissional", "Comunicação de valor"],
      icon: <Award size={24} />,
      link: "marca-intencional.html",
      whatsapp: "Olá, Débora! Tenho interesse em garantir minha vaga na turma de Marca Intencional.",
      ctaPageLabel: "Garantir minha vaga",
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
      desc: "Processo personalizado de 8 sessões para quem busca clareza, segurança na tomada de decisão e avanço na velocidade que merece.",
      features: ["Diagnóstico 360º", "Plano de Voo Individual", "Sessões Online de 1h"],
      icon: <Target size={24} />,
      link: "mentoria-individual.html",
      whatsapp: "Olá, gostaria de saber mais sobre a mentoria individual.",
      ctaPageLabel: "Conhecer programa",
      isDestaque: false
    },
    {
      title: "Comunidade Sequoia",
      subtitle: "ECOSSISTEMA",
      desc: "Um grupo seleto de líderes onde as raízes se entrelaçam para sustentar um crescimento inabalável e conexões de alto valor.",
      features: ["Encontros Quinzenais", "Networking Estratégico", "Sessão Individual Bônus"],
      icon: <Trees size={24} />,
      link: "sequoia.html",
      whatsapp: "Olá, gostaria de saber mais sobre a Comunidade Sequoia.",
      ctaPageLabel: "Conhecer programa",
      isDestaque: false
    },
    {
      title: "Palestras & Workshops",
      subtitle: "CORPORATIVO",
      desc: "Treinamentos customizados sobre liderança e carreira para empresas que desejam elevar o patamar de seus talentos.",
      features: ["Conteúdo sob medida", "Formato Presencial/Online", "Foco em Engajamento"],
      icon: <Mic size={24} />,
      link: "palestras.html",
      whatsapp: "Olá, gostaria de solicitar uma proposta de palestra para minha empresa.",
      ctaPageLabel: "Conhecer programa",
      isDestaque: false
    }
  ];

  return (
    <section id="programas" className="bg-[#FCFAF7] py-20 md:py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-verde-med font-bold mb-4 block"
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
    <section id="palestras" className="bg-creme py-24 md:py-32 px-6 sm:px-8 border-t border-ink/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col min-[900px]:flex-row justify-between items-start min-[900px]:items-end gap-10 mb-16 md:mb-24">
          <div className="max-w-[700px]">
            <motion.span 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-verde-med font-black mb-6 block"
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
          <span className="text-[10px] uppercase tracking-[0.3em] text-verde-med font-bold mb-6 block text-center md:text-left">Repertório & Autoridade</span>
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
            src="https://i.ibb.co/20Ddwc9Y/LIVROS-DB.jpg" 
            alt="Repertório Débora Bolangno" 
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
                className="text-[10px] uppercase tracking-[0.4em] text-creme/40 font-black mb-6 block"
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
    <section id="contato" className="bg-white py-24 md:py-40 px-6 sm:px-8 border-y border-ink/4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative rounded-[40px] md:rounded-[64px] overflow-hidden aspect-[4/5] shadow-2xl order-last md:order-first">
            <img 
              src="https://i.ibb.co/FLG1NkW7/debora-Pronto-para-o-seu-pr-ximo-n-vel-na-carreira.webp" 
              alt="Débora Bolangno" 
              className="w-full h-full object-cover object-[center_20%] transition-transform duration-[3s] hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
          <div className="text-center md:text-left">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[10px] uppercase tracking-[0.4em] text-verde-med font-black mb-8 block"
            >
              Próximo Passo
            </motion.span>
            <h2 className="font-serif text-[clamp(32px,5vw,64px)] font-black text-ink leading-[1.05] mb-8 lg:mb-12">
              Pronto para o seu <span className="italic text-highlight">próximo nível</span> na carreira?
            </h2>
            <p className="text-lg md:text-2xl text-ink/65 max-w-[560px] mx-auto md:mx-0 mb-12 lg:mb-16 leading-relaxed">
              Agende agora um diagnóstico estratégico e entenda como podemos acelerar seu crescimento e resultados.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5">
              <a href="https://wa.me/5511940803333?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico" target="_blank" rel="noopener" className="w-full sm:w-auto bg-verde text-white px-10 md:px-12 py-5 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-bold hover:bg-[#112e28] hover:-translate-y-px shadow-xl shadow-verde/20 transition-all flex items-center justify-center gap-4">
                Agendar diagnóstico agora
                <ArrowRight size={20} />
              </a>
              <a href="https://www.linkedin.com/in/deborabolangno" target="_blank" rel="noopener" className="w-full sm:w-auto border-2 border-ink/10 text-ink px-10 md:px-12 py-5 rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.25em] font-bold hover:bg-[#FAF6F0] hover:border-verde hover:text-verde hover:-translate-y-px hover:shadow-md transition-all duration-300 text-center">
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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/v4bp7gxB/logo-db-3.png" alt="Logo" className="w-10 h-10 object-contain brightness-0 invert" />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold leading-none mb-1">Débora Bolangno</span>
              <span className="text-[9px] uppercase tracking-widest text-creme/40">Estratégia de Carreira & Liderança</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-6">
          <a href="https://www.instagram.com/deborabolangno" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
            <Instagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/deborabolangno" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
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
          <p className="text-[9px] sm:text-[11px] font-mono text-creme/60 uppercase tracking-[0.2em] sm:tracking-[0.4em]">© 2026 Débora Bolangno · Todos os direitos reservados</p>
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

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1000);
      setShowWhatsApp(window.scrollY > 300); // Exibe o WhatsApp após rolar 300px (fora do topo da Hero)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex gap-3 sm:gap-4 items-center">
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
