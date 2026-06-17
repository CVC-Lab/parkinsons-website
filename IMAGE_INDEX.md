# IMAGE_INDEX

Figure ledger for the AI4PD site rebuild. **Rule:** no AI/stock art, ever — not even as
placeholders. Ryan owns creating/approving figures; this file is where Claude flags every
visual gap with a precise build brief. Removing/relabeling existing AI art is fine; adding
new AI art is not. Any real result figure must be verified against the final paper before
it is wired (numbers on the figure must match the published/verified values).

Status legend: ✅ wired · 🟡 pending Ryan's sign-off · 🔧 build brief (you make it) · ❌ removed

---

## Home page (Pass 1 — `src/pages/index.js`)

| Slot | Status | Detail |
|---|---|---|
| Hero figure (H1) | 🟡 | **Proposed:** `docs/papers/motor-states-pcmsm/figures/posterior_calibration_curve.png` — visualizes 0.989 nominal vs 0.849 empirical bootstrap consistency. **Blocked:** PC-MSM is an *in-preparation* manuscript, so this figure is not yet public. Confirm you're OK publishing it (or supply an alternative) and I'll wire it. Hero currently ships text-only. |
| Evidence card 3 thumb (E3) | 🟡 | **Proposed:** `docs/papers/motor-phenotyping-trial-enrichment/figures/Figure_3.png` (rapid-progressor trajectory, 16.6%). Same blocker: in-prep manuscript, not yet public. Caption must read "Rapid Progressor trajectory; requires prospective validation." |
| Evidence figure (E4) | ✅ | `src/images/05_arm_swing_asymmetry.png` — already public in repo; content-verified (n=178, 27% above the 20% threshold matches ground-truth). Wired as the section's single result figure. |
| Twin + agent schematic (S4) | ✅ | `src/images/ai4pd-architecture-figure1.png` — the proposal's **Figure 1** (Texas-core collaboration architecture), wired **as-is per Ryan's explicit decision**. Clean of the Hill Prize name and any dollar amounts, but it **does name specific collaborators/sites** (Park City Clinics, Kokilaben, Columbia, Stanford/Tass, NYU/Kang, Przedborski, Zhang, Stengel-Eskin, Paydarfar) and contains a brain graphic. A name-free alternative — **Figure 2** (multi-agent diagram, `docs/.../final_submission` image2.png) — is available if a de-identified version is later preferred. |

### Removed on this pass (AI art, deleted from `src/images/`)
`home-main.png`, `multimodal-data-integration-replacement.jpg`, `subgroup-discovery-replacement.jpg`,
`actionable-precision-replacement.jpg`, `port-hamiltonian-modeling-replacement.jpg`,
`differential-diagnosis-thumbnail.jpg`, `precision-stratification-thumbnail.jpg`,
`nearest-neighbor-thumbnail.jpg`, and the four older `*-thumbnail.png` variants.

### Figure trap (do not use)
`src/images/02_lrrk2_penetrance_analysis.png` shows superseded specimen-level numbers
(PR 1.89, χ²=167.3) that contradict the published PR 1.92 / aOR 2.73. Do not wire it.
Several PC-MSM figures (`biofind_endpoint_gradients.png`, `imaging_to_posterior_performance.png`)
carry old/mismatched bar values — quote the paper prose, never the figure values.

---

## Evidence page (Pass 2 — `src/pages/related-papers.js`, retitled "Evidence")

| Slot | Status | Detail |
|---|---|---|
| Biomarkers · MoCA/UPSIT | ✅ | `03_moca_upsit_distributions.png` — verified (MoCA n=13,835 / 25.9%; UPSIT n=5,122 / 50.2%). |
| Biomarkers · arm-swing | ✅ | `05_arm_swing_asymmetry.png` — verified (n=178, 27% above 20% threshold). |
| Biomarkers · TUG | ✅ | `09_tug_performance.png` — verified (n=186, 29% above >12s). |
| Biomarkers · RBD | 🟡 | `04_rbd_prevalence.png` — **HELD**: title says 37.5% but the pie slices read 40.7% / 59.3% (self-contradicting). Regenerate so slices = 37.5% / 62.5%, then wire. |
| Motor-states + trial-enrichment | 🟡 | All figures are from in-prep manuscripts; not public, not shown. Section is text-only. |
| Pathway · real Figs 5–6 | 🟡 | The paper's real scatter/box figures (rho/q/H on-figure) are the right asset but not in the repo. Pull from the public bioRxiv (CC-BY) and verify on-figure rho=−0.201/q=6.8e-4/H=167.15 before wiring. Slot empty for now. |
| Co-clustering schematic | 🔧 | BUILD-BRIEF: flat block diagram — row-VAE, column-VAE, joint latent z_rc, compositional ELBO → co-clusters. No AI render. |
| Evidence orienting graphic | 🔧 | BUILD-BRIEF: flat 4-node flow, substrate→clinical (co-clustering → pathway → biomarkers → motor-state), each node = short-title + cohort N. No brain art. |

### Removed on this pass (AI art, deleted from `src/images/`)
`fig_biomarker_fusion.jpg`, `fig_multimodal_fusion.png`, `fig_pathway_brain.jpg`,
`fig_pathways_compact.png` — panel-confirmed AI "fusion"/brain illustrations with no data
(one carried a synthetic patient face). `fig_subgroup_landscape.png` is also AI but is still
used by `clinician-workflow.js`; remove it when that page is rebuilt.

---

## Pending later passes (AI art still live on other pages)

| Page | AI images to remove/replace |
|---|---|
| ~~Approach (`digital-twin-initiative.js`)~~ ✅ **Done (Pass 3)** | Figure 1 wired to the hero; Figure 2 (`ai4pd-multi-agent-architecture.jpg`, clean/name-free) kept for the agents section; `ai4pd-collaboration-architecture.jpg` (stale name-bearing dup) + `deep-brain-control.png` (AI brain render) **deleted**. **One build-brief open** → a port-Hamiltonian core schematic: ẋ = (J−R)∇H(x) + Gu with H/J/R + therapy-port labels, the three coupled subsystems (motor/autonomic/cognitive), and the measure→estimate→simulate→select→update loop. Flat line art, no brain renders. |
| Thrusts (`thrusts.js`) | `thrust-imaging-thumbnail.jpg`, `thrust-diffusion-thumbnail.jpg`, `thrust-wearable-thumbnail.jpg`, `thrust-mechanism-thumbnail.jpg`. |
| ~~Partners (`partners.js`)~~ ✅ **Done (Pass 4)** | `tagline.png` (philanthropy AI-ish hero) **deleted**; Partner + Team pages are now text-only. **Build-briefs open:** (1) a multi-site validation pipeline diagram — site → DUA/IRB → de-identify at site → joint harmonization → clinician review → cross-site validation (flat, non-AI); (2) a real cross-site calibration figure for "validation evidence" — use a real plot once it exists, never a mock-up. |
| Clinician workflow (`clinician-workflow.js`) | `clinician-picture.png` (AI hero with baked-in marketing text — remove in its hedging pass), `fig_subgroup_landscape.png` (AI), `fig_dashboard.png` (concept mockup). |

---

## Build-brief from the colleague review (R3 — optional, Ryan to draw, never AI)

A **simplified homepage architecture graphic** as an *optional* alternative to the detailed
Figure 1 in the home hero (keep the detailed Figure 1 on the Approach page regardless). One
horizontal three-stage flow, flat vector, white/charcoal/limestone with a single burnt-orange
accent on the twin box:
- **Left:** stacked inputs — "Cohorts · wearables/sensors · imaging (MRI/DaT-SPECT) · EHR".
- **Center:** one box — "Patient-specific digital twin (uncertainty-aware, updated each visit)".
- **Right:** a clinician receiving "evidence + explicit uncertainty + named gaps", labeled
  "decision support, physician first".

Arrows left-to-right only. No brain renders, no AI art. Only swap it onto the homepage if you
make it and prefer it to Figure 1.
