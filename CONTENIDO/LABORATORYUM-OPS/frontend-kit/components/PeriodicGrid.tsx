import type { LaboratoryumExperiment } from "../types/content";

type Props = {
  experiments: LaboratoryumExperiment[];
  limit?: number;
};

export function PeriodicGrid({ experiments, limit = 12 }: Props) {
  const items = experiments.slice(0, limit);

  return (
    <section>
      <h2 className="lab-ui">Últimos experimentos</h2>
      <div className="periodic-grid">
        {items.map((experiment) => (
          <a
            key={experiment.code}
            href={`/${experiment.slug}`}
            className="periodic-cell lab-focus"
            aria-label={`${experiment.code}: ${experiment.title}`}
          >
            <span className="periodic-symbol">{experiment.periodicSymbol}</span>
            <span className="lab-meta">{experiment.code}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
