// "use client";

// /**
//  * ServicesAccordion
//  * ----------------------------------------------------------------------------
//  * Presents services as an expandable list rather than a generic icon grid —
//  * reads more like a consultancy's capability sheet than a templated SaaS
//  * landing page. Related offerings from the brief are grouped (e.g. Data
//  * Science + AI) so this stays scannable at six items instead of nine.
//  *
//  * The expand/collapse animation uses a CSS-only technique: animating
//  * `grid-template-rows` from `0fr` to `1fr` on a wrapping grid container.
//  * This avoids needing JavaScript to measure content height (the classic
//  * "animate height: auto" problem) and avoids pulling in an extra animation
//  * library for something this simple — a plain CSS transition handles it,
//  * and it's automatically covered by the global prefers-reduced-motion rule
//  * in globals.css since it's a CSS transition, not a JS-driven one.
//  */
// import { useState } from "react";
// import { Plus } from "lucide-react";

// const SERVICES = [
//   {
//     title: "Software & Web Development",
//     summary:
//       "Custom systems and professionally built websites — engineered around your business, not a template.",
//     detail:
//       "We design and build software and websites tailored to your specific operations rather than forcing your business into a generic template. From internal tools to public-facing sites, every build is structured for maintainability so it can grow alongside your business instead of needing to be rebuilt.",
//   },
//   {
//     title: "Digital Marketing & Branding",
//     summary:
//       "Visual identity and digital strategy that make your business look as credible as the work you actually do.",
//     detail:
//       "We handle brand identity, positioning, and the digital marketing strategy behind it — so your online presence accurately reflects the quality of your business, not just a logo and a few social posts.",
//   },
//   {
//     title: "IT Consultancy",
//     summary:
//       "Strategic guidance on technology decisions before you commit budget to the wrong ones.",
//     detail:
//       "We advise on infrastructure choices, digital transformation roadmaps, and technology strategy — acting as the technical sounding board many growing businesses don't yet have in-house.",
//   },
//   {
//     title: "Data Science & AI",
//     summary:
//       "Turning the data your business already has into decisions, not just dashboards.",
//     detail:
//       "From data analysis and reporting to practical AI integration, we focus on applications that solve a specific business problem — not AI for its own sake.",
//   },
//   {
//     title: "Kubernetes & Infrastructure",
//     summary:
//       "Infrastructure built to stay reliable as your usage grows, not just to launch.",
//     detail:
//       "We design and manage containerized infrastructure on Kubernetes so your systems scale predictably under real-world load, rather than breaking the first time traffic spikes.",
//   },
//   {
//     title: "Business Automation",
//     summary: "Removing the repetitive manual work that quietly slows your team down.",
//     detail:
//       "We identify and automate the manual, repetitive processes inside your operations — freeing your team to spend time on work that actually requires a person.",
//   },
// ] as const;

// export function ServicesAccordion() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   return (
//     <section id="services" className="mx-auto max-w-4xl px-6 py-24">
//       <div className="mb-12">
//         <p className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">
//           What We Do
//         </p>
//         <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl">
//           Services built for where you&apos;re headed, not just where you are.
//         </h2>
//       </div>

//       <div className="border-y border-border-subtle">
//         {SERVICES.map((service, index) => {
//           const isOpen = openIndex === index;
//           const buttonId = `service-button-${index}`;
//           const panelId = `service-panel-${index}`;

//           return (
//             <div key={service.title} className="border-b border-border-subtle last:border-b-0">
//               <h3>
//                 <button
//                   id={buttonId}
//                   type="button"
//                   aria-expanded={isOpen}
//                   aria-controls={panelId}
//                   onClick={() => setOpenIndex(isOpen ? null : index)}
//                   className="flex w-full items-start justify-between gap-6 py-6 text-left"
//                 >
//                   <span className="flex items-start gap-4">
//                     <span className="pt-1 font-mono text-sm text-foreground/40">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                     <span>
//                       <span className="block font-display text-lg font-medium text-foreground sm:text-xl">
//                         {service.title}
//                       </span>
//                       <span className="mt-1 block text-sm text-foreground/60">
//                         {service.summary}
//                       </span>
//                     </span>
//                   </span>
//                   <Plus
//                     aria-hidden="true"
//                     className={`mt-1 h-5 w-5 flex-shrink-0 text-cobalt transition-transform duration-300 ${
//                       isOpen ? "rotate-45" : ""
//                     }`}
//                   />
//                 </button>
//               </h3>

//               <div
//                 id={panelId}
//                 role="region"
//                 aria-labelledby={buttonId}
//                 className="grid transition-[grid-template-rows] duration-300 ease-in-out"
//                 style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
//               >
//                 <div className="overflow-hidden">
//                   <p className="pb-6 pr-10 pl-10 leading-relaxed text-foreground/70 sm:pl-12">
//                     {service.detail}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }