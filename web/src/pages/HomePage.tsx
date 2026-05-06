import { useMemo, useState } from "react";
import { ExperimentCard } from "../components/ExperimentCard";
import { ExperimentFilters } from "../components/ExperimentFilters";
import { PeriodicGrid } from "../components/PeriodicGrid";
import { GlitchLogo } from "../components/GlitchLogo";
import type { LaboratoryumContent, LaboratoryumExperiment } from "../types/content";

type Props = {
  content: LaboratoryumContent;
};

export function HomePage({ content }: Props) {
  const [filtered, setFiltered] = useState<LaboratoryumExperiment[]>(content.experiments);

  const featuredCount = useMemo(
    () => content.experiments.filter((exp) => exp.featured).length,
    [content.experiments],
  );

  return (
    <main id="main-content" tabIndex={-1} className="lab-container">
      <header className="site-header" aria-label="Encabezado principal">
        <a href="#main-content" className="site-brand" aria-label="Laboratoryum, ir al inicio">
          <GlitchLogo />
        </a>
        <nav aria-label="Menú principal">
          <ul className="site-menu">
            <li><a href="#experimentos">Experimentos</a></li>
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="#archivo">Archivo</a></li>
            <li><a href="#footer">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <header className="lab-header">
        <p>Laboratoryum es un laboratorio independiente sobre futuros de la web: un espacio de investigación, prototipado y experimentación sobre IA, automatización, accesibilidad, lenguaje, cultura digital y agentes.</p>
        <p className="lab-meta">
          {content.stats.totalExperiments} experimentos · {featuredCount} destacados
        </p>
      </header>

      <section id="experimentos">
        <PeriodicGrid experiments={content.experiments} limit={12} />
      </section>

      <section>
        <h2 className="lab-section-title">Explorar todos los experimentos</h2>
        <ExperimentFilters experiments={content.experiments} onChange={setFiltered} />

        <p className="lab-meta" role="status" aria-live="polite">Mostrando {filtered.length} de {content.experiments.length} experimentos</p>

        {filtered.length === 0 ? (
          <div className="exp-empty" role="status" aria-live="polite">
            No encontramos resultados para tu búsqueda. Prueba con otro término o limpia los filtros.
          </div>
        ) : (
          <div className="exp-list" aria-live="polite">
            {filtered.map((experiment) => (
              <ExperimentCard key={experiment.code} experiment={experiment} />
            ))}
          </div>
        )}
      </section>

      <footer id="footer" className="site-footer">
        <p>Laboratoryum</p>
        <nav aria-label="Menú de pie de página">
          <ul className="site-footer-menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#experimentos">Experimentos</a></li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}
