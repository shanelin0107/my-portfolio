export type Category = "All" | "ML/AI" | "Data Analytics" | "Data Engineering" | "Sports Analytics";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  category: Exclude<Category, "All">;
  github: string;
  image?: string;
  video?: string;
  demo?: { label: string; href: string };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Data Agent — Text-to-SQL AI Agent",
    description:
      "Production-grade text-to-SQL agent that lets non-technical users query databases in plain English. LangGraph orchestrates 7 nodes — memory, clarifier, router, schema RAG, SQL coder, validation gate, executor — with a self-correction retry loop and a SELECT-only sandbox, served through Slack and Streamlit.",
    tags: ["Python", "LangGraph", "Claude API", "RAG", "PostgreSQL", "Slack"],
    category: "ML/AI",
    github: "https://github.com/shanelin0107/data_agent",
    image: "/projects/data_agent.png",
    featured: true,
  },
  {
    title: "Fixed Income Portfolio Risk Monitor",
    description:
      "End-to-end interest-rate risk system for a Treasury ETF portfolio: duration/DV01/convexity, 7 curve stress scenarios, 2,500-day historical VaR, benchmark-relative positioning, and risk-parity optimization — with an LLM-written client commentary, a Streamlit app, and two published Tableau dashboards.",
    tags: ["Python", "FRED API", "Streamlit", "Tableau", "Risk Analytics", "Claude API"],
    category: "Data Analytics",
    github: "https://github.com/shanelin0107/fixed-income-portfolio-risk-monitor",
    image: "/projects/fixed_income.png",
    demo: {
      label: "Tableau dashboard",
      href: "https://public.tableau.com/views/pr_17846567454430/PortfolioRisk",
    },
    featured: true,
  },
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
    title: "MBTA — Beyond On-Time Performance",
    description:
      "System-wide study of the failures the MBTA's on-time metric hides: train bunching, inferred crowding, and delay cascades. Granger causality isolates 5 super-spreader stations driving 19.7% of cascades, and a gradient-boosting risk model backtests an intervention preventing 23,556 cascade events.",
    tags: ["Python", "Plotly", "Granger Causality", "Gradient Boosting", "Geospatial"],
    category: "Data Analytics",
    github: "https://github.com/shanelin0107/MBTA",
    image: "/projects/mbta.png",
    demo: { label: "Live dashboard", href: "https://shanelin0107.github.io/MBTA/" },
    featured: true,
  },
  {
    title: "NBA Lineup & Scouting Engine",
    description:
      "Coach-facing analytics tool built on one pure compute engine with two front-ends. Empirical-Bayes shrinkage separates real 5-man lineup value from small-sample luck, paired with an opponent one-pager and a possession-weighted matchup layer — guarded by 4 quality gates and 37 unit tests.",
    tags: ["Python", "nba_api", "Empirical Bayes", "Streamlit", "pytest"],
    category: "Sports Analytics",
    github: "https://github.com/shanelin0107/nba-lineup-scouting-engine",
    image: "/projects/nba.png",
  },
  {
    title: "Kafka Real-Time E-commerce Pipeline",
    description:
      "Dual-path streaming architecture for e-commerce order events: Kafka fans out to an Airflow → BigQuery batch path feeding Looker Studio, and an InfluxDB real-time path feeding Grafana. Fully containerized with Docker Compose.",
    tags: ["Kafka", "Airflow", "BigQuery", "InfluxDB", "Grafana", "Docker"],
    category: "Data Engineering",
    github: "https://github.com/shanelin0107/kafka-ecommerce",
    image: "/projects/kafka.png",
  },
  {
    title: "Production Flow Teardown",
    description:
      "Lead-time decomposition on three months of real factory MES data (4,543 events, 31 stations). Shows 73% of the cycle is queue time, that the labor bottleneck and the true capacity constraint are different stations, and that changeover losses outweigh breakdowns 14×.",
    tags: ["Python", "Tableau", "Process Mining", "Operations Analytics"],
    category: "Data Analytics",
    github: "https://github.com/shanelin0107/ie-production-flow-analysis",
    image: "/projects/ie_flow.png",
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
  {
    title: "Marketing Mix Modeling Case Study",
    description:
      "Bayesian MMM with Google Meridian for an India e-commerce brand across three years of spend. Decomposes baseline vs. incremental revenue, fits saturation response curves, and runs a constrained reallocation scenario worth ~115K in incremental revenue at flat budget (R² 0.99, MAPE 2%).",
    tags: ["Python", "Google Meridian", "Bayesian", "Marketing Analytics"],
    category: "Data Analytics",
    github: "https://github.com/shanelin0107/mmm_case_study",
    image: "/projects/mmm.png",
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
    title: "Customer Lifetime Value Analytics",
    description:
      "Customer-level LTV layer over transaction data, surfacing revenue concentration, repeat-buyer lift, and whether value is driven by frequency or basket size — delivered as an executive Tableau dashboard with retention actions per segment.",
    tags: ["Python", "SQL", "Tableau", "Segmentation", "RFM"],
    category: "Data Analytics",
    github: "https://github.com/shanelin0107/online_retail_ltv",
    image: "/projects/ltv.png",
    demo: {
      label: "Tableau dashboard",
      href: "https://public.tableau.com/app/profile/ching.hsuan.lin6585/viz/LTV_Online_Retail/Dashboard1",
    },
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
    title: "Recycling with Deep Learning",
    description:
      "CNN model for automated waste classification into recyclable categories, trained to sort materials with high accuracy for sustainable waste management.",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    category: "ML/AI",
    github: "https://github.com/shanelin0107/Recycling-with-Deep-Learning",
    image: "/recycling.png",
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
    title: "Dating App A/B Test",
    description:
      "Randomized online experiment testing whether an interactive multiple-choice prompt on a dating profile lifts right-swipe rate. 83 participants, user-level randomization, covariate-adjusted ATE — the honest answer was a negligible effect (Cohen's d = 0.09).",
    tags: ["A/B Testing", "Causal Inference", "Python", "Qualtrics"],
    category: "Data Analytics",
    github: "https://github.com/shanelin0107/swipe-right-or-left-DatingApps-AB-Testing",
  },
];

export const categories: Category[] = [
  "All",
  "ML/AI",
  "Data Analytics",
  "Data Engineering",
  "Sports Analytics",
];
