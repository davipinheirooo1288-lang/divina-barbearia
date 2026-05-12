import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";

const nav = [
  { to: "/", label: "Início", hash: "" },
  { to: "/", label: "Serviços", hash: "servicos" },
  { to: "/", label: "Equipe", hash: "equipe" },
  { to: "/", label: "Contato", hash: "contato" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img src={logo} alt="Divina Barbearia Varjota" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-gold/40" />
          <div className="hidden sm:block">
            <p className="font-display text-base sm:text-lg leading-none text-gold">Divina Barbearia</p>
            <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Aldeota · Desde 2017</p>
          </div>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-10 ml-auto">
          {nav.map((n) => (
            <Link
              key={n.to + n.hash}
              to={n.to}
              hash={n.hash}
              className="text-xs sm:text-sm uppercase tracking-widest font-medium text-muted-foreground hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true, includeHash: true }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="servicos"
            className="hidden xs:block bg-gradient-gold text-primary-foreground px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide hover:shadow-gold transition-all"
          >
            Agendar
          </Link>
        </nav>
      </div>
    </header>
  );
}
