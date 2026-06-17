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
| Twin + agent schematic (S4) | 🔧 | **Build brief for Ryan (flat 2-color line diagram, NO glowing brains / neurons-as-circuitry / AI art):** Left — a patient timeline (visits, wearable trace, imaging, genetics, EHR) feeding a central box "patient-specific twin — interpretable structured core: reserve / coupling / dissipation / therapy ports." Right — two labeled agents ("diagnostic", "therapy-planning") drawing from a "biomedical knowledge network" node, output to a "clinician review" endpoint marked decision-support-only. Dashed side branch labeled "future / hypothesis": "simulate candidate stimulation change → predicted response → clinician decision." Section currently ships text-only. |

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

## Pending later passes (AI art still live on other pages)

| Page | AI images to remove/replace |
|---|---|
| Approach (`digital-twin-initiative.js`) | `ai4pd-collaboration-architecture.jpg`, `ai4pd-multi-agent-architecture.jpg`, `deep-brain-control.png` → need clean schematics (build briefs at that pass). |
| Thrusts (`thrusts.js`) | `thrust-imaging-thumbnail.jpg`, `thrust-diffusion-thumbnail.jpg`, `thrust-wearable-thumbnail.jpg`, `thrust-mechanism-thumbnail.jpg`. |
| Partners (`partners.js`) | `tagline.png` ("what starts here…"). |
| Clinician workflow (`clinician-workflow.js`) | `clinician-picture.png` (verify whether AI or real before deciding). |
