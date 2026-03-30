<script lang="ts">
  import { siteConfig } from "$lib/config";
  import { Briefcase, GraduationCap, Award } from "lucide-svelte";
  import CareerItem from "./CareerItem.svelte";
  import StickyHeader from "./StickyHeader.svelte";

  interface Role {
    role: string;
    period: string;
    description: string | string[];
  }

  interface ExperienceGroup {
    company: string;
    logo: string;
    link?: string;
    roles: Role[];
  }

  // Group experiences by company
  const groupedExperience = siteConfig.experience.reduce<ExperienceGroup[]>(
    (acc, current) => {
      const existingGroup = acc.find((g) => g.company === current.company);
      if (existingGroup) {
        existingGroup.roles.push({
          role: current.role,
          period: current.period,
          description: current.description,
        });
      } else {
        acc.push({
          company: current.company,
          logo: current.logo,
          link: current.link,
          roles: [
            {
              role: current.role,
              period: current.period,
              description: current.description,
            },
          ],
        });
      }
      return acc;
    },
    []
  );
</script>

<div class="career-wrapper" style="position: relative;">
  <StickyHeader id="work" title="Career" />

  <div class="vertical-layout">
    <!-- EXPERIENCE -->
    <section class="section-group">
      <div class="section-label">
        <Briefcase size={16} />
        <span>Professional Experience</span>
      </div>

      <div class="section-content">
        <div class="item-list">
          {#each groupedExperience as group, i}
            {#if group.roles.length === 1}
              {@const job = group.roles[0]}
              <CareerItem
                title={job.role}
                subtitle={group.company}
                period={job.period}
                description={job.description}
                logo={group.logo}
                link={group.link}
                showDivider={i < groupedExperience.length - 1}
              />
            {:else}
              <CareerItem
                title={group.company}
                subtitle="Company"
                logo={group.logo}
                link={group.link}
                isGroup={true}
                roles={group.roles}
                showDivider={i < groupedExperience.length - 1}
              />
            {/if}
          {/each}
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section class="section-group">
      <div class="section-label">
        <GraduationCap size={16} />
        <span>Education</span>
      </div>

      <div class="section-content">
        <div class="item-list">
          {#each siteConfig.education as edu, i}
            <CareerItem
              title={edu.degree}
              subtitle={edu.school}
              period={edu.year}
              description={edu.description}
              logo={edu.logo}
              link={edu.link}
              showDivider={i < siteConfig.education.length - 1}
            />
          {/each}
        </div>
      </div>
    </section>

    <!-- CERTIFICATES -->
    <section class="section-group">
      <div class="section-label">
        <Award size={16} />
        <span>Certificates</span>
      </div>

      <div class="section-content">
        <div class="certificate-gallery">
          {#each siteConfig.certificates as cert}
            <a href={cert.link} class="cert-card" target="_blank">
              <div class="cert-image-container">
                <img src={cert.image} alt={cert.name} class="cert-image" />
              </div>
              <div class="cert-info-footer">
                <span class="cert-year">{cert.year}</span>
                <h3 class="cert-name">{cert.name}</h3>
                <span class="cert-issuer">{cert.issuer}</span>
              </div>
            </a>
          {/each}
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .career-wrapper {
    padding: 2rem 2rem 8rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .career-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .career-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0;
    letter-spacing: -0.04em;
    color: var(--text-primary);
    line-height: 1.2;
  }

  .vertical-layout {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: relative;
    padding-left: 2rem;
    margin-left: 0.15rem;
  }

  /* Main Spine */
  .vertical-layout::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.5rem; /* Aligns with the center of the first marker */
    bottom: 5rem;
    width: 1px;
    background: linear-gradient(
      to bottom,
      var(--accent-1) 0%,
      var(--surface-2) 20%,
      var(--surface-2) 80%,
      transparent 100%
    );
    opacity: 0.5;
  }

  .section-group {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    color: var(--accent-1);
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    position: relative;
    transition: all 0.3s ease;
  }

  /* Sub-Category Dot */
  .section-label::before {
    content: "";
    position: absolute;
    left: -2rem;
    top: 50%;
    width: 8px;
    height: 8px;
    background: var(--bg-color);
    border: 2px solid var(--accent-1);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
    transition: all 0.3s ease;
  }

  /* Branch Line */
  .section-label::after {
    content: "";
    position: absolute;
    left: -2rem;
    top: 50%;
    width: 1.5rem;
    height: 1px;
    background: var(--accent-1);
    opacity: 0.3;
    z-index: 4;
  }

  .section-group:hover .section-label::before {
    background: var(--accent-1);
    box-shadow: 0 0 15px var(--accent-1);
    transform: translate(-50%, -50%) scale(1.2);
  }

  .section-content {
    margin-left: 0rem;
    padding-left: 2rem;
    position: relative;
    transition: border-color 0.3s ease;
  }

  .section-content::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: var(--surface-2);
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  .section-group:hover .section-content::before {
    background: var(--accent-1);
    opacity: 0.6;
    box-shadow: 0 0 10px var(--accent-1);
  }

  .item-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .certificate-gallery {
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
    padding: 2.5rem 0 2.5rem;
    margin-right: -2rem; /* Bleed out slightly */
    mask-image: linear-gradient(to right, black 94%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, black 94%, transparent 100%);
  }

  .certificate-gallery::after {
    content: "";
    flex: 0 0 4rem; /* Extra space at the end */
  }

  .certificate-gallery::-webkit-scrollbar {
    display: none;
  }

  .cert-card {
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background: var(--surface-1);
    border: 1px solid var(--surface-2);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cert-card:hover {
    transform: translateY(-8px);
    border-color: var(--accent-1);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  }

  .cert-image-container {
    width: 100%;
    aspect-ratio: 16/10;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid var(--surface-2);
    background: #ffffff; /* Certificates often have white backgrounds */
  }

  .cert-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 0;
    transform: scale(1.1); /* Slight zoom by default */
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cert-card:hover .cert-image {
    transform: scale(1.2); /* Deeper zoom on hover */
  }

  .cert-info-footer {
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    background: var(--surface-1);
  }

  .cert-year {
    font-size: 0.7rem;
    font-weight: 800;
    color: var(--accent-1);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .cert-name {
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--text-primary);
    margin: 0;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  .cert-issuer {
    font-size: 0.85rem;
    color: var(--text-secondary);
    font-weight: 600;
    opacity: 0.8;
  }

  .cert-card:hover .cert-name {
    color: var(--accent-1);
  }

  @media (max-width: 640px) {
    .section-content {
      padding-left: 1.5rem;
      margin-left: 0.2rem;
    }
    .career-title {
      font-size: 2.25rem;
    }
    .cert-card {
      flex: 0 0 240px;
      height: 160px;
    }
  }
</style>
