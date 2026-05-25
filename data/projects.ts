export type Category = "All" | "ML/AI" | "Data Analytics" | "Data Engineering" | "Sports Analytics";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: Exclude<Category, "All">;
  github: string;
  image?: string;
  video?: string;
}

export const projects: Project[] = [
  {
    title: "NCAA Football Ranking System",
    description:
      "End-to-end data pipeline for college football rankings using Airflow orchestration, MotherDuck data warehouse, and Bradley-Terry probabilistic modeling deployed on Google Cloud Run with interactive dashboards.",
    tags: ["Python", "GCP", "Airflow", "MotherDuck", "Docker"],
    category: "Data Engineering",
    github: "https://github.com/shanelin0107/ncaaf-ranking-system",
    image: "/ncaaf.png",
    video: "/ncaaf_demo.mov",
  },
  {
    title: "Recycling with Deep Learning",
    description:
      "CNN model for automated waste classification into recyclable categories, trained to sort materials with high accuracy for sustainable waste management.",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    category: "ML/AI",
    github: "https://github.com/shanelin0107/Recycling-with-Deep-Learning",
    image: "/recycling.png",
  },
  {
    title: "Kai-Wei Teng Pitch Analysis",
    description:
      "Statcast-powered analysis of SF Giants pitcher Kai-Wei Teng's sinker-to-sweeper transformation (2024–2026), examining movement profiles, velocity trends, and outcome data.",
    tags: ["Python", "Statcast", "pybaseball", "Data Viz"],
    category: "Sports Analytics",
    github: "https://github.com/shanelin0107/kai-wei-teng-pitch-analysis",
    image: "/kw_movement.png",
  },
  {
    title: "Austin Bike Share Analysis",
    description:
      "Visualizations examining membership types, weather impacts, and station-level activity patterns across Austin's bike-sharing network from 2014–2024.",
    tags: ["Python", "Pandas", "Matplotlib", "SQL"],
    category: "Data Analytics",
    github: "https://github.com/shanelin0107/austin_bikeshare_analysis",
    image: "https://github.com/user-attachments/assets/e8b28e08-dbc2-4008-9c07-9a6f25916670",
  },
  {
    title: "Financial Anomaly Detection",
    description:
      "Machine learning pipeline for detecting anomalous patterns in financial transaction data using unsupervised and supervised techniques for fraud and outlier identification.",
    tags: ["Python", "Scikit-learn", "Isolation Forest", "ML"],
    category: "ML/AI",
    github: "https://github.com/shanelin0107/Financial-Anomaly-Detection",
    image: "/financial_2.png",
  },
  {
    title: "Store Sales Forecasting",
    description:
      "Kaggle competition solution forecasting daily sales across 54 stores and 33 product families. Per-family LightGBM models with recursive forecasting achieved an 11% LB score improvement (0.430 → 0.38465).",
    tags: ["Python", "LightGBM", "Time Series", "Kaggle"],
    category: "ML/AI",
    github: "https://github.com/shanelin0107/storesales-forecasting",
    image: "/storesales2.png",
  },
];

export const categories: Category[] = [
  "All",
  "ML/AI",
  "Data Analytics",
  "Data Engineering",
  "Sports Analytics",
];
