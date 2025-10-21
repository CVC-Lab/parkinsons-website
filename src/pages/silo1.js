import * as React from "react";
import Layout from "../components/layout";
import "../components/style.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Silo1Page() {
  return (
    <Layout>
      <div className="page-container home-page">
        <section className="hero-section">
          <div className="hero-text">
            <h1>Multimodal Biomarker Discovery & Co-Clustering for PD Severity</h1>
            <p>
              We develop scalable Bayesian co-clustering frameworks to discover and prioritize
              potential Parkinson's Disease biomarkers from diffusion MRI, DaTSCAN, structural
              anatomy, and core clinical scales.
            </p>
            <p className="hero-subtext">
              Our approach jointly clusters participants and features to identify interpretable,
              coherent blocks aligned with disease severity and trajectory.
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">Goal</h2>
          <p>
            Develop a multimodal co-clustering framework to discover and prioritize potential
            Parkinson's Disease biomarkers from diffusion MRI, DaTSCAN, structural anatomy, and
            core clinical scales. The objective is to jointly cluster participants and features
            to identify interpretable, coherent blocks that:
          </p>
          <ul className="tight-list">
            <li>Align with disease severity and trajectory</li>
            <li>Highlight biomarkers with strong effect sizes and low redundancy</li>
            <li>Demonstrate cross-site robustness</li>
          </ul>
          <p>
            These biomarkers will undergo stability testing, longitudinal validation (predicting
            UPDRS/MoCA and diffusion changes), and external-cohort replication. The end goal is
            to deliver reproducible biomarkers supporting:
          </p>
          <ul className="tight-list">
            <li>Patient stratification</li>
            <li>Disease progression monitoring</li>
            <li>Clinical trial enrichment</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Current Progress</h2>

          <h3>1. Harmonized Multimodal Feature Pipeline</h3>
          <ul className="tight-list">
            <li>Implemented workflow spanning T1 MRI (automated ROI segmentation), DaTSCAN (Specific Binding Ratio extraction), and DTI (bi-tensor free-water elimination)</li>
            <li>All features registered to a common anatomical scaffold</li>
            <li>Integrated into a single quality-controlled feature table</li>
          </ul>

          <h3>2. Scalable Bayesian Co-Clustering Model</h3>
          <ul className="tight-list">
            <li>Trained SRBCC-coupled VAEs with Gaussian-mixture priors in a joint latent space</li>
            <li>Enables joint clustering of participants and features while modeling cell-level structure</li>
          </ul>

          <h3>3. Cohort Integration</h3>
          <ul className="tight-list">
            <li>Baseline/Prodromal PPMI participants (n=128)</li>
            <li>Clinical features: UPDRS-III, MoCA, QUIP</li>
            <li>Data standardized into an analysis-ready matrix</li>
          </ul>

          <h3>4. Severity-Aligned Subtypes</h3>
          <ul className="tight-list">
            <li>Co-clustering identifies patient subtypes with distinct cortico-striatal and brain-stem diffusion patterns</li>
            <li>Significant explanation of UPDRS progression variance</li>
          </ul>

          <h3>5. Biological Consistency & Specificity</h3>
          <ul className="tight-list">
            <li>Free-water–corrected diffusion metrics (FA/MD + FW fraction) enhance sensitivity to tissue injury</li>
            <li>Specificity to PD pathology with reduced confounding from fluid-related artifacts</li>
          </ul>

          <h3>6. Methodological Advantage</h3>
          <ul className="tight-list">
            <li>Outperforms k-means, spectral bi-clustering, and deep-clustering baselines</li>
            <li>Improved clustering purity and severity-prediction accuracy</li>
            <li>Retains interpretability via patient-feature block structures</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Compositional Co-Clustering for PD Severity</h2>
          <p className="hero-subtext">From imaging + clinical signals to actionable patient subtypes</p>

          <p>
            Parkinson's is heterogeneous, which makes prognosis and therapy personalization hard.
            Our latest work introduces a Scalable Robust Variational Co-Clustering (SRVCC) framework
            that jointly models free-water–corrected DTI biomarkers and core clinical scores to reveal
            coherent PD subtypes along a severity gradient.
          </p>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/mm.png"
              alt="Multimodal Feature Extraction Pipeline"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 1: Multimodal Feature Extraction Pipeline
            </p>
          </div>

          <h3>What's new</h3>
          <ul className="tight-list">
            <li>True multimodal fusion — combines region-wise DTI (FA/MD), DaTSCAN SBR, volumetrics, and bedside scales (UPDRS-III, UPDRS total, MoCA; QUIP where available)</li>
            <li>Free-water–eliminated diffusion — bi-tensor FW-DTI pipeline reduces CSF contamination, sharpening microstructural sensitivity</li>
            <li>Compositional Bayesian co-clustering — paired Gaussian-mixture priors align patient clusters and feature clusters; a mutual-information cross-loss preserves clinically meaningful structure</li>
            <li>Robustness at scale — doubly reparameterized KL terms and contrastive guards prevent posterior collapse and tame noise</li>
          </ul>

          <h3>Cohort & biomarkers we model</h3>
          <ul className="tight-list">
            <li>Dataset: 128 PPMI participants (Baseline + Prodromal) with harmonized structural MRI, diffusion MRI, DaTSCAN, and clinical assessments</li>
            <li>Regions: 28 cortical/subcortical ROIs (e.g., thalamus, caudate, putamen, pallidum, hippocampus, brainstem)</li>
            <li>Pipeline: MRI/DaTSCAN normalization → alignment to T1 → FW-DTI fitting → ROI sampling → single feature table per subject</li>
          </ul>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/cc_pd.png"
              alt="SRVCC Co-Clustering Schematic & Checkerboard Heatmap"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 2: SRVCC Co-Clustering Schematic & Checkerboard Heatmap
            </p>
          </div>

          <h3>Headline results</h3>
          <p>
            SRVCC uncovers three stable patient subtypes that track clinical severity and imaging asymmetries:
          </p>
          <ul className="tight-list">
            <li><strong>Mild</strong> — MoCA ≈ 28.5; UPDRS-III ≈ 10; near-symmetric thalamic MD; caudate FA close to symmetric</li>
            <li><strong>Moderate</strong> — MoCA ≈ 25; UPDRS-III ≈ 20; intermediate diffusion changes</li>
            <li><strong>Severe</strong> — MoCA ≈ 22; UPDRS-III ≈ 30; thalamic MD asymmetry rises ~5× (≈ 0.02 → 0.10); caudate FA asymmetry becomes more negative (≈ −0.01 → −0.06)</li>
            <li><strong>Benchmarks:</strong> Outperforms k-means, spectral bi-clustering, and recent deep-clustering baselines on clustering purity and severity-prediction error—while remaining biologically interpretable</li>
          </ul>

          <h3>Why this matters</h3>
          <ul className="tight-list">
            <li>Precision stratification: identifies who is "mild but at risk" vs "diffuse severe," enabling trial enrichment and tailored follow-ups</li>
            <li>Imaging-backed targets: thalamic MD and caudate FA asymmetries surface as robust, trackable biomarkers alongside MoCA and UPDRS-III</li>
            <li>Feeds our progressive agents: clusters + feature weights plug into our policy models to personalize combination/sequence/timing of therapies for each profile</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Scalable Robust Bayesian Co-Clustering with Compositional ELBOs</h2>
          <p className="hero-subtext">Unified variational learning for robust co-clustering across modalities</p>

          <p>
            We introduce a Scalable Robust Bayesian Co-Clustering (SRVCC) framework that learns
            row and column clusters simultaneously within a variational latent space, making
            co-clustering robust to noise, sparsity, and posterior collapse.
          </p>

          <h3>Key Idea</h3>
          <p>
            Traditional co-clustering methods—like spectral, modularity, or NMF-based techniques—struggle
            with large, noisy, or non-linear datasets. SRVCC resolves this by integrating:
          </p>
          <ul className="tight-list">
            <li>Variational Autoencoders (VAEs) for non-linear feature learning</li>
            <li>Gaussian Mixture Priors (GMMs) to induce clustering structure</li>
            <li>Compositional ELBOs and mutual information cross-loss to jointly regularize rows, columns, and cell-level interactions</li>
          </ul>
          <p>
            The result is a fully generative, end-to-end co-clustering model that simultaneously
            discovers interpretable patterns in both instance and feature dimensions.
          </p>

          <h3>Architecture Overview</h3>
          <p>SRVCC is built on three interconnected variational spaces:</p>
          <ol className="pipeline-steps">
            <li>
              <strong>Row VAE (Instance-Side):</strong>
              <p>Encodes each instance into a GMM latent space, reconstructing rows and assigning soft memberships γʳᵢ</p>
            </li>
            <li>
              <strong>Column VAE (Feature-Side):</strong>
              <p>Encodes features analogously into their own mixture space γᶜⱼ</p>
            </li>
            <li>
              <strong>Joint Cell VAE:</strong>
              <p>Introduces a latent variable z_rc for every matrix cell to capture row–column interactions and noise</p>
            </li>
          </ol>
          <p>
            Each space contributes an Evidence Lower Bound (ELBO) term. These are composed into a
            Compositional ELBO—a robust training objective that balances reconstruction, clustering
            alignment, and noise control.
          </p>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/fig2.png"
              alt="Three-level variational co-clustering pipeline"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 3: Three-level variational co-clustering pipeline, where rows and columns are
              encoded via separate VAEs and fused through a joint ELBO term
            </p>
          </div>

          <h3>Methodological Innovations</h3>
          <ul className="tight-list">
            <li>Doubly Reparameterized Gradients (DREGs): Reduces gradient variance in stochastic ELBO estimation, stabilizing training</li>
            <li>Scale-Adjusted Latents: Increases encoder latent means only along the reconstruction path to mitigate posterior collapse</li>
            <li>Contrastive Cross-Loss: Encourages discriminative embedding alignment between true and corrupted data pairs</li>
            <li>Mutual Information Regularization: Aligns row and column clusters by maximizing I(X;Y) preservation under the learned co-cluster assignments</li>
          </ul>

          <h3>Experimental Highlights</h3>
          <p>Benchmarked on image and web/text datasets, SRVCC consistently exceeds prior co-clustering and deep clustering methods:</p>

          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f7f2ec', borderBottom: '2px solid #bf5700' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Dataset</th>
                <th style={{ padding: '0.75rem', textAlign: 'center' }}>DeepCC ACC</th>
                <th style={{ padding: '0.75rem', textAlign: 'center' }}>SRVCC ACC</th>
                <th style={{ padding: '0.75rem', textAlign: 'center' }}>DeepCC NMI</th>
                <th style={{ padding: '0.75rem', textAlign: 'center' }}>SRVCC NMI</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eadfd2' }}>
                <td style={{ padding: '0.75rem' }}><strong>Yale</strong></td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>53.3 ± 1.4</td>
                <td style={{ padding: '0.75rem', textAlign: 'center', color: '#bf5700' }}><strong>58.1 ± 1.7</strong></td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>55.7 ± 1.1</td>
                <td style={{ padding: '0.75rem', textAlign: 'center', color: '#bf5700' }}><strong>61.0 ± 1.5</strong></td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eadfd2' }}>
                <td style={{ padding: '0.75rem' }}><strong>Fashion-MNIST</strong></td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>62.7 ± 1.6</td>
                <td style={{ padding: '0.75rem', textAlign: 'center', color: '#bf5700' }}><strong>68.2 ± 1.8</strong></td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>60.4 ± 0.7</td>
                <td style={{ padding: '0.75rem', textAlign: 'center', color: '#bf5700' }}><strong>65.0 ± 1.6</strong></td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}><strong>WebKB-Wisconsin</strong></td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>77.4 ± 1.4</td>
                <td style={{ padding: '0.75rem', textAlign: 'center', color: '#bf5700' }}><strong>81.6 ± 2.2</strong></td>
                <td style={{ padding: '0.75rem', textAlign: 'center' }}>46.7 ± 1.7</td>
                <td style={{ padding: '0.75rem', textAlign: 'center', color: '#bf5700' }}><strong>51.5 ± 1.6</strong></td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '0.9rem', color: '#726657' }}>
            SRVCC achieves +4–8% accuracy gains and +3–6% NMI improvements on average across benchmarks
          </p>

          <h3>Robustness to Noise</h3>
          <p>
            SRVCC maintains stable co-cluster structures even under 50–70% data corruption, thanks
            to its two-stage compositional ELBO that separately models noise at both the
            instance/feature and cell levels.
          </p>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/fig3.png"
              alt="Latent space evolution under noise"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 4: Latent space evolution and co-cluster resilience under increasing noise intensities
            </p>
          </div>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/fig4.png"
              alt="Co-cluster resilience metrics"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 5: Co-cluster resilience metrics under varying corruption levels
            </p>
          </div>

          <h3>Applications</h3>
          <p>
            Applied to the PPMI Parkinson's Disease dataset, SRVCC identifies five biologically
            interpretable patient clusters that align with motor and cognitive scores (UPDRS-III, MoCA)
            and DaTSCAN/MRI biomarkers:
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0' }}>
            <thead>
              <tr style={{ backgroundColor: '#f7f2ec', borderBottom: '2px solid #bf5700' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Cluster</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eadfd2' }}>
                <td style={{ padding: '0.75rem' }}><strong>Cluster 2</strong></td>
                <td style={{ padding: '0.75rem' }}>Mild outlier: UPDRS-III = 6, MoCA = 29 — early PD profile</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eadfd2' }}>
                <td style={{ padding: '0.75rem' }}><strong>Cluster 3</strong></td>
                <td style={{ padding: '0.75rem' }}>Older onset, preserved DaTSCAN uptake, moderate motor range</td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem' }}><strong>Cluster 0/1/4</strong></td>
                <td style={{ padding: '0.75rem' }}>Moderate PD subgroups with varying cognitive decline and aging</td>
              </tr>
            </tbody>
          </table>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/fig6.png"
              alt="Co-cluster heatmaps revealing feature groupings"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 6: Co-cluster heatmaps revealing feature groupings across imaging and clinical domains
            </p>
          </div>

          <div className="progressive-ai-image">
            <StaticImage
              src="../images/fig7.png"
              alt="Patient cluster profiles"
              placeholder="blurred"
            />
            <p style={{ fontSize: '0.9rem', color: '#726657', marginTop: '0.5rem' }}>
              Figure 7: Patient cluster profiles with clinical and imaging characteristics
            </p>
          </div>

          <h3>Key Outcomes</h3>
          <ul className="tight-list">
            <li>Unified multimodal clustering: Learns instance, feature, and interaction embeddings in one probabilistic model</li>
            <li>Noise-tolerant inference: Handles missing, sparse, and corrupted data gracefully</li>
            <li>Interpretability: Produces checkerboard co-cluster maps that directly reveal cross-domain associations</li>
            <li>Scalability: Linear complexity in dataset size and cluster count, making it feasible for high-dimensional biomedical and web data</li>
          </ul>
        </section>

        <section className="section">
          <h2 className="section-title">Upcoming Milestones</h2>

          <h3>Longitudinal Validation</h3>
          <p>Test subtype stability and prognostic value over time:</p>
          <ul className="tight-list">
            <li>UPDRS/MoCA trajectories</li>
            <li>Diffusion metric change rates</li>
          </ul>

          <h3>Richer Multimodal Integration</h3>
          <p>Add CSF biomarkers (e.g., α-synuclein), genetic data, and extended cortical/subcortical features</p>

          <h3>Generalization</h3>
          <ul className="tight-list">
            <li>Validate clustering and severity gradients in external cohorts</li>
            <li>Stress-test across scanners and protocol variations</li>
          </ul>

          <h3>Translational Tools</h3>
          <p>Package the pipeline and subtype assignment into a reproducible module for:</p>
          <ul className="tight-list">
            <li>Trial stratification</li>
            <li>Monitoring applications</li>
          </ul>
        </section>

        <section className="section final-callout">
          <h2 className="section-title">References</h2>
          <div style={{ backgroundColor: '#f7f2ec', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #bf5700' }}>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Vinod, A., & Bajaj, C. (2025). Compositional Bayesian co-clustering of diffusion tensor imaging (DTI) biomarkers with clinical measures for enhanced prediction of Parkinson disease severity. <em>Technical report (in progress)</em>, Oden Institute, University of Texas at Austin.
            </p>
          </div>
          <div style={{ backgroundColor: '#f7f2ec', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #bf5700', marginTop: '1rem' }}>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>
              Vinod, A., & Bajaj, C. (2025). Scalable Robust Bayesian Co-Clustering with Compositional ELBOs. <em>arXiv preprint arXiv:2504.04079</em>.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
