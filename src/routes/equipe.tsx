import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { team, BOOKSY_URL } from "@/lib/data";
import { Scissors } from "lucide-react";

export const Route = createFileRoute("/equipe")({
  head: () => ({
    meta: [
      { title: "Nossa Equipe — Divina Barbearia Varjota" },
      { name: "description", content: "Conheça os barbeiros da Divina Barbearia Varjota — profissionais experientes e apaixonados pelo ofício." },
      { property: "og:title", content: "Equipe — Divina Barbearia Varjota" },
      { property: "og:description", content: "Brenno, Valério, David, Felipe, Vitor e Gabriel." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="pt-40 pb-20 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Profissionais</p>
        <h1 className="font-display text-5xl sm:text-6xl mb-4">Nossa Equipe</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Mãos experientes, olhar atento e a paixão pelo ofício de barbeiro.</p>
      </section>

      <section className="px-6 pb-24">
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

        <div className="text-center mt-16">
          <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold tracking-wide hover:shadow-gold transition-all">
            Agendar com seu barbeiro
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
