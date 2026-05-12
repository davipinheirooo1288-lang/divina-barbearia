import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Divina Barbearia" className="h-12 w-12 rounded-full ring-2 ring-gold/40" />
            <div>
              <p className="font-display text-lg text-gold leading-none">Divina Barbearia</p>
              <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Varjota · 2017</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Tradição, estilo e cuidado para o homem moderno em Fortaleza.</p>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-widest mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">Início</Link></li>
            <li><Link to="/servicos" className="hover:text-gold">Serviços</Link></li>
            <li><Link to="/equipe" className="hover:text-gold">Equipe</Link></li>
            <li><Link to="/contato" className="hover:text-gold">Contato</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-widest mb-4">Horário</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li className="flex justify-between gap-4"><span>Seg</span><span>Fechado</span></li>
            <li className="flex justify-between gap-4"><span>Ter–Sex</span><span>10h – 19h</span></li>
            <li className="flex justify-between gap-4"><span>Sábado</span><span>10h – 17h</span></li>
            <li className="flex justify-between gap-4"><span>Domingo</span><span>Fechado</span></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold text-sm uppercase tracking-widest mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 text-gold shrink-0" />Castro Monte, 165 — Varjota, Fortaleza/CE</li>
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 text-gold shrink-0" />(85) 2181-1446</li>
            <li className="flex gap-2"><Clock className="size-4 mt-0.5 text-gold shrink-0" />Seg fechado · Ter–Sáb aberto</li>
            <li className="flex gap-2"><Instagram className="size-4 mt-0.5 text-gold shrink-0" /><a className="hover:text-gold" href="https://www.instagram.com/barbeariavarjota_official/" target="_blank" rel="noopener noreferrer">@barbeariavarjota_official</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Divina Barbearia Varjota. Todos os direitos reservados.
      </div>
    </footer>
  );
}
