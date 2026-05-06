export type ExperimentSeries = "metodologica" | "aplicada";
export type ExperimentStatus = "draft" | "in_progress" | "published";

export interface LaboratoryumExperiment {
  code: string;
  number: number;
  title: string;
  slug: string;
  series: ExperimentSeries;
  summary: string;
  question: string;
  hypothesis: string;
  kit: string;
  periodicSymbol: string;
  status: ExperimentStatus;
  featured: boolean;
  tags: string[];
}
