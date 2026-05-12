import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { services, testimonials, team, WHATSAPP_URL } from "@/lib/data";
import hero from "@/assets/hero.jpg";
import barba from "@/assets/barba.jpg";
import corte from "@/assets/corte.jpg";
import tools from "@/assets/tools.jpg";
import { ChevronDown, Scissors, Sparkles, Star, MapPin, Clock, Phone, MessageCircle, Instagram, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Divina Barbearia Varjota — Barbearia Premium em Fortaleza" },
      { name: "description", content: "Cortes, barba e cuidados masculinos em ambiente premium na Aldeota, Fortaleza. Agende online." },
      { property: "og:title", content: "Divina Barbearia Varjota" },
      { property: "og:description", content: "Tradição, estilo e cuidado para o homem moderno." },
    ],
  }),
  component: Home,
});

function Home() {
  const [userName, setUserName] = useState("");
  const [selectedBarber, setSelectedBarber] = useState("");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const WHATSAPP_NUMBER = "5585999177002";

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppBooking = (serviceName: string) => {
    const namePart = userName.trim() ? `Olá, meu nome é ${userName.trim()}. ` : "Olá! ";
    const barberPart = selectedBarber ? `Gostaria de agendar com o profissional ${selectedBarber} ` : "Gostaria de agendar ";
    const message = `${namePart}${barberPart}o serviço: ${serviceName}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[720px] flex items-center justify-center overflow-hidden">
        <img src={hero} alt="Interior da Divina Barbearia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.10_0.01_60/0.7)_70%)]" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <div className="inline-flex items-center gap-2 border border-gold/40 rounded-full px-5 py-1.5 text-xs uppercase tracking-[0.3em] text-gold mb-8">
            <Sparkles className="size-3" /> Desde 2017 · Aldeota
          </div>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
            <span className="block text-foreground">Onde o Estilo</span>
            <span className="block text-gradient-gold">Encontra a Tradição</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Barbearia premium em Fortaleza. Cortes, barba e cuidados masculinos com técnica afiada e ambiente que convida a relaxar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" hash="servicos" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold tracking-wide hover:shadow-gold transition-all">
              Agendar agora
            </Link>
            <Link to="/" hash="servicos" className="border border-gold/40 text-gold px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-gold/10 transition-all">
              Ver serviços
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { n: "+8", l: "Anos" },
              { n: "291+", l: "Avaliações" },
              { n: "4,7★", l: "Google" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl sm:text-4xl text-gold">{s.n}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <ChevronDown className="absolute bottom-8 left-1/2 -translate-x-1/2 size-6 text-gold animate-bounce" />
      </section>

      {/* SOBRE */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={tools} alt="Ferramentas de barbearia" className="rounded-lg shadow-elegant w-full" loading="lazy" />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-card border border-gold/30 rounded-lg p-6 shadow-gold max-w-xs">
              <p className="font-display text-3xl text-gold">2017</p>
              <p className="text-sm text-muted-foreground mt-1">Quando começou nossa história em Fortaleza.</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Sobre nós</p>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">A Divina é o seu refúgio particular.</h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              Desde 2017, cultivamos no coração da cidade um ambiente onde a tradição da barbearia clássica se une ao conforto contemporâneo. Aqui, o tempo passa devagar para que você possa aproveitar cada segundo.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed italic border-l-2 border-gold/40 pl-6">
              "Sinta o aroma de café fresco e toalhas quentes, relaxe ao som de uma boa trilha e deixe que nossos especialistas cuidem de você com a atenção e o respeito que sua imagem merece."
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Scissors, t: "Técnica afiada", d: "Profissionais experientes." },
                { icon: Sparkles, t: "Ambiente premium", d: "Para você relaxar." },
              ].map((f) => (
                <div key={f.t} className="border border-border rounded-lg p-4 bg-card/40">
                  <f.icon className="size-5 text-gold mb-2" />
                  <p className="font-semibold">{f.t}</p>
                  <p className="text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 px-6 bg-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-xl uppercase tracking-[0.3em] text-gold mb-2 font-bold">Nossos serviços</p>
            <h2 className="font-display text-2xl sm:text-3xl mb-4 opacity-80 italic">Tabela de Preços</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">Escolha seu barbeiro de preferência, informe seu nome e clique no serviço para agendar.</p>
            
            <div className="max-w-2xl mx-auto mb-16 grid sm:grid-cols-2 gap-6 px-4">
              <div className="text-left">
                <label htmlFor="user-name" className="block text-xs uppercase tracking-widest text-gold mb-3 font-bold px-4">1. Seu Nome</label>
                <input
                  id="user-name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-card/50 border border-border rounded-full px-6 py-3.5 text-foreground focus:outline-none focus:border-gold/50 transition-all shadow-elegant"
                />
              </div>
              <div className="text-left">
                <label htmlFor="barber-select" className="block text-xs uppercase tracking-widest text-gold mb-3 font-bold px-4">2. Profissional (Opcional)</label>
                <select
                  id="barber-select"
                  value={selectedBarber}
                  onChange={(e) => setSelectedBarber(e.target.value)}
                  className="w-full bg-card/50 border border-border rounded-full px-6 py-3.5 text-foreground focus:outline-none focus:border-gold/50 transition-all shadow-elegant appearance-none cursor-pointer"
                >
                  <option value="">Qualquer profissional</option>
                  {team.map(member => (
                    <option key={member.name} value={member.name}>{member.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {services.map((s) => (
              <div 
                key={s.name + s.duration} 
                className="group flex flex-col border border-border/60 bg-card/40 rounded-2xl p-6 hover:border-gold/50 hover:bg-card/60 transition-all shadow-sm hover:shadow-gold"
              >
                <div className="flex-1 mb-6">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-display text-xl leading-tight group-hover:text-gold transition-colors">{s.name}</h3>
                    <p className="font-display text-xl text-gold shrink-0">R$ {s.price}</p>
                  </div>
                  {s.popular && (
                    <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider text-gold font-bold border border-gold/40 rounded-full px-2 py-0.5 mb-3 bg-gold/5">
                      <Star className="size-2.5 fill-current" /> Destaque
                    </span>
                  )}
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{s.desc}</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground/80 inline-flex items-center gap-1.5 font-medium">
                    <Clock className="size-3 text-gold/60" /> {s.duration}
                  </p>
                </div>
                
                <button
                  onClick={() => handleWhatsAppBooking(s.name)}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground py-3 rounded-xl font-bold text-sm tracking-wide hover:brightness-110 transition-all"
                >
                  <MessageCircle className="size-4" /> Agendar Serviço
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="py-24 px-6 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Profissionais</p>
            <h2 className="font-display text-4xl sm:text-5xl mb-4">Nossa Equipe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Mãos experientes, olhar atento e a paixão pelo ofício de barbeiro.</p>
          </div>

          <div className="mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((p) => (
              <div key={p.name} className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 text-center hover:border-gold/50 transition-all">
                <div className="size-24 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold overflow-hidden">
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <Scissors className="size-10 text-primary-foreground" />
                  )}
                </div>
                <h3 className="font-display text-2xl mb-1">{p.name}</h3>
                <p className="text-xs uppercase tracking-widest text-gold mb-4">{p.role}</p>
                <p className="text-sm text-muted-foreground">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÕES */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Avaliações</p>
            <h2 className="font-display text-4xl sm:text-5xl">O que dizem nossos clientes</h2>
          </div>
          
          <div className="relative overflow-hidden group">
            <motion.div 
              className="flex gap-6 py-4"
              animate={{ 
                x: [0, -1500],
              }}
              transition={{ 
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                <div 
                  key={`${t.name}-${i}`} 
                  className="w-[350px] shrink-0 border border-border bg-card/60 backdrop-blur-sm rounded-2xl p-8 shadow-elegant"
                >
                  <div className="flex gap-1 mb-4 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed line-clamp-3">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                      <User className="size-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-display text-lg text-gold leading-none">{t.name}</p>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Cliente Satisfeito</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden">
          <img src={hero} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/85" />
          <div className="relative z-10 px-8 py-20 text-center">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6">
              Pronto para um <span className="text-gradient-gold">novo visual</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Reserve seu horário agora e viva a experiência Divina.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/" hash="servicos" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-bold tracking-wide hover:shadow-gold transition-all">
                Escolher serviço e agendar
              </Link>
              <Link to="/" hash="contato" className="border border-gold/40 text-gold px-8 py-4 rounded-full font-bold hover:bg-gold/10 transition-all inline-flex items-center gap-2">
                <MapPin className="size-4" /> Como chegar
              </Link>
            </div>
            <p className="mt-8 text-sm text-muted-foreground inline-flex items-center gap-2"><Clock className="size-4 text-gold" />Ter–Sex 10h–19h · Sáb 10h–17h</p>
          </div>
        </div>
      </section>
      {/* CONTATO */}
      <section id="contato" className="py-24 px-6 bg-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Onde estamos</p>
            <h2 className="font-display text-4xl sm:text-5xl">Contato & Localização</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {[
                { icon: MapPin, t: "Endereço", d: "R. Castro Monte, 165 - Varjota\nFortaleza - CE, 60175-230", href: "https://www.google.com/maps/place/Santa+Barbearia+%7C+Varjota/@-3.733106,-38.5015281,17z/data=!4m6!3m5!1s0x7c7487e2b5e1e83:0x9ec5fed6236b8c08!8m2!3d-3.7331114!4d-38.4989532!16s%2Fg%2F11clvwmdk4" },
                { icon: Phone, t: "Telefone", d: "(85) 2181-1446", href: "tel:+558521811446" },
                { icon: MessageCircle, t: "WhatsApp", d: "Fale conosco direto", href: WHATSAPP_URL },
                { icon: Instagram, t: "Instagram", d: "@barbeariavarjota_official", href: "https://www.instagram.com/barbeariavarjota_official/" },
                { icon: Clock, t: "Horário", d: "Seg: Fechado\nTer–Sex: 10h – 19h\nSáb: 10h – 17h\nDom: Fechado" },
              ].map((c) => {
                const Wrapper = (c.href ? "a" : "div") as "a" | "div";
                return (
                  <Wrapper
                    key={c.t}
                    {...(c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-start gap-4 border border-border bg-card/50 rounded-xl p-6 hover:border-gold/50 transition-all group"
                  >
                    <div className="size-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <c.icon className="size-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gold mb-1 font-bold">{c.t}</p>
                      <p className="text-foreground whitespace-pre-line">{c.d}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            <a 
              href="https://www.google.com/maps/place/Santa+Barbearia+%7C+Varjota/@-3.733106,-38.5015281,17z/data=!3m1!4b1!4m6!3m5!1s0x7c7487e2b5e1e83:0x9ec5fed6236b8c08!8m2!3d-3.7331114!4d-38.4989532!16s%2Fg%2F11clvwmdk4"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl overflow-hidden border border-border min-h-[400px] h-full shadow-elegant block hover:border-gold/50 transition-all"
            >
              <iframe
                title="Mapa Divina Barbearia Varjota"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3533!2d-38.5015281!3d-3.733106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7487e2b5e1e83%3A0x9ec5fed6236b8c08!2sSanta%20Barbearia%20%7C%20Varjota!5e0!3m2!1spt-BR!2sbr!4v1715545200000!5m2!1spt-BR!2sbr"
                className="w-full h-full min-h-[400px] pointer-events-none"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
