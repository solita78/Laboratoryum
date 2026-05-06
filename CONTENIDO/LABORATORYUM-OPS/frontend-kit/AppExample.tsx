import { useState } from "react";
import content from "./data/laboratoryum-content.json";
import type { LaboratoryumExperiment } from "./types/content";
import { PeriodicGrid } from "./components/PeriodicGrid";
import { ExperimentFilters } from "./components/ExperimentFilters";
import { ExperimentCard } from "./components/ExperimentCard";
import "./styles/tokens.css";
import "./components/styles.css";

export function AppExample() {
  const [filtered, setFiltered] = useState<LaboratoryumExperiment[]>(content.experiments);

  return (
    <main className="lab-container">
      <header>
        <h1 className="lab-ui">{content.project.name}</h1>
        <p>{content.project.tagline}</p>
      </header>

      <PeriodicGrid experiments={content.experiments} limit={12} />

      <ExperimentFilters experiments={content.experiments} onChange={setFiltered} />

      <section className="exp-list" aria-live="polite">
        {filtered.map((exp) => (
          <ExperimentCard key={exp.code} experiment={exp} />
        ))}
      </section>
    </main>
  );
}
