# Mohamed Amara — Portfolio

A single-page React, TypeScript, Vite and Tailwind portfolio focused on engineering and technical commercial opportunities.

## Local development

```bash
npm install
npm run dev
```

Use `npm run lint` and `npm run build` before deployment.

## Content notes

- The visible experience, skill and coursework content follows the engineering résumé supplied on September 17, 2026. The résumé's three selected projects are featured first; the site also keeps the additional Arabic café POS, CoinWa and teacher-course projects.
- The featured OEM CarPlay / 2016 Acura ILX project is in development. Its card and roadmap data live in `src/data/portfolio.ts`; the expandable engineering brief is in `src/components/AutomotiveProject.tsx`. The `#automotive-infotainment` anchor opens the brief directly.
- Automotive diagrams describe proposed architecture, not implemented hardware. Update status labels only when supporting work is completed; add original teardown photos, measurements and validation records as they become available.
- `public/assets/resume.pdf` is the current one-page engineering résumé. Editable LaTeX is in `resume/Mohamed-Amara-Resume.tex`. The PDF is compiled with Tectonic and checked visually and by text extraction.
- The Plug Co experience covers STM32/breadboard VR prototyping, the move toward existing commercial VR devices, multimodal data architecture, and Python/TypeScript integration work.
- Availability is Winter 2027 onward and is centralized in `profile`.
- Personal and experience location fields are intentionally not stored or displayed. “University of Waterloo” remains as the education institution.
- Keep the hero’s 3B academic stage current. Do not restore the old Fall 2026 availability text.

## Résumé updates

Compile `resume/Mohamed-Amara-Resume.tex` with Tectonic or upload it to Overleaf. Keep it to one page and check the exported PDF before replacing `public/assets/resume.pdf`.

```bash
tectonic --outdir output/pdf resume/Mohamed-Amara-Resume.tex
```

The final PDF is also saved in `output/pdf/Mohamed-Amara-Resume.pdf`. Keep the website copy and résumé dates consistent.
