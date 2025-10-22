---
title: "Workflow 1 — Generative Latent-Space Modeling"
slug: "/workflow-latent-modeling"
summary: "Harmonizes imaging, diffusion, and clinical data into interpretable latent spaces that seed state estimators and policy agents."
order: 1
category: "workflow"
---

# Workflow 1 — Generative Latent-Space Modeling

Workflow 1 constructs harmonized latent representations from imaging, diffusion, and clinical modalities using scalable, robust Bayesian co-clustering. Subject-level matrices of region-specific imaging biomarkers (DTI, DaT-SPECT, T1 MRI) and clinical scores (UPDRS, MoCA, UPSIT, SCOPA-AUT) feed into the SRVCC framework.

## Core Stages

1. **Data harmonization:** Skull-stripping, registration, z-score normalization, and wearable signal filtering produce aligned feature spaces with shared metadata.
2. **Latent embedding:** Dual encoders with Gaussian-mixture priors learn patient and feature embeddings; a joint latent captures cell-level interactions.
3. **Alignment losses:** Mutual-information and compositional KL regularizations ensure diffusion and clinical manifolds stay in register.
4. **Subtype discovery:** The resulting latent checkerboard reveals severity-aligned clusters that inform treatment trajectories and cohort stratification.

## Outputs

- Multimodal latent codes exported for downstream policy learning and simulation.
- Quality-controlled, analysis-ready tables for replication and external validation.
- Diagnostics that flag outliers and monitor modality drift.

Workflow 1 underpins the Progressive AI agent stack by supplying stable, interpretable state estimates rooted in multimodal evidence.
