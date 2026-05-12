import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { services, team } from "@/lib/data";
import { Clock, Star, MessageCircle, User } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços e Preços — Divina Barbearia Varjota" },
      { name: "description", content: "Conheça todos os serviços e valores da Divina Barbearia Varjota: cortes, barba, sobrancelha, pigmentação e mais." },
      { property: "og:title", content: "Serviços — Divina Barbearia Varjota" },
      { property: "og:description", content: "Cortes, barba, sobrancelha e tratamentos masculinos." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [userName, setUserName] = useState("");
  const [selectedBarber, setSelectedBarber] = useState("");
  const WHATSAPP_NUMBER = "5585999177002";

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
      <section className="pt-40 pb-16 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 font-semibold">Nossos serviços</p>
        <h1 className="font-display text-5xl sm:text-6xl mb-4">Tabela de Preços</h1>
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
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
      </section>

      <SiteFooter />
    </div>
  );
}
