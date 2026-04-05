"use client";

import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import SectionReveal from "../../components/SectionReveal";

const menuItems = [
  {
    label: "Entree",
    dish: "Salade de Palmiste",
    description:
      "Coeur de palmier croquant, legumes frais nappes d'une vinaigrette delicate aux notes citronnees.",
    image: "/salade_de_fruits_tropicaux.jpeg",
  },
  {
    label: "Plat",
    dish: "Chutney de Requin",
    description:
      "A base de requin tendre, mijote avec oignons, ail, gingembre, tomates, epices locales et une touche de piment.",
    image: "/chutney_de_requin.webp",
  },
  {
    label: "Dessert",
    dish: "Le Ladob",
    description:
      "Banane et patates douces cuits dans du lait de coco parfume a la vanille, subtilement sucre et reconfortant.",
    image: "/le_ladob.jpg",
  },
];

const heroImages = [
  "/seychelles_plage_1.webp",
  "/seychelles_plage_2.webp",
  "/seychelles_plage_3.jpg",
  "/seychelles_plage_4.jpg",
];

export default function SeychellesMenu() {
  return (
    <PageTransition className="min-h-screen overflow-x-hidden bg-[#060e1a]">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(14,165,160,0.12)_0%,transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(0,61,136,0.1)_0%,transparent_50%)]" />
        <div className="noise pointer-events-none absolute inset-0" />

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [-12, 12, -12], x: [0, 8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[#0ea5a0]/10 blur-[100px]"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-20 bottom-1/3 h-[300px] w-[300px] rounded-full bg-[#003D88]/15 blur-[80px]"
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-24 md:flex-row md:gap-16 md:px-8">
          {/* Hero text */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0ea5a0]/30 bg-[#0ea5a0]/10 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-[#5eead4] uppercase"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0ea5a0]" />
              Seychelles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              Menu typique
              <br />
              <span className="bg-gradient-to-r from-[#0ea5a0] via-[#5eead4] to-[#0ea5a0] bg-clip-text text-transparent">
                seychellois
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/50 md:text-xl"
            >
              Laissez-vous porter par les saveurs ensoleillees des Seychelles,
              la ou l&apos;ocean rencontre l&apos;excellence culinaire.
            </motion.p>
          </div>

          {/* Image grid */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {heroImages.map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + i * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`overflow-hidden rounded-2xl border border-white/[0.06] ${
                    i % 2 === 1 ? "translate-y-6" : ""
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                    className="h-[180px] w-full bg-cover bg-center md:h-[220px]"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060e1a] to-transparent" />
      </section>

      {/* ===== HISTORY ===== */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#0ea5a0]/20 to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Text */}
          <SectionReveal className="w-full md:w-[62%]">
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-[#0ea5a0]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#0ea5a0] uppercase">
                  Histoire
                </span>
              </div>
              <h2 className="font-display mb-8 text-4xl font-bold text-white sm:text-5xl">
                Les Seychelles
              </h2>
              <p className="text-base leading-[1.8] text-white/60 md:text-lg">
                Les Seychelles etaient inhabitees avant l&apos;arrivee des
                Europeens. Colonisees par la France puis par le Royaume-Uni,
                elles deviennent independantes en 1976. Apres une periode de
                regime a parti unique, la democratie est retablie en 1993.
                Aujourd&apos;hui, le pays est stable et dote
                d&apos;institutions democratiques solides, et son economie
                repose principalement sur le tourisme, la peche et la protection
                de l&apos;environnement.
              </p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-[#0ea5a0]/40 to-transparent" />
            </div>
          </SectionReveal>

          {/* Image */}
          <div className="w-full md:w-[38%]">
            <SectionReveal delay={0.3}>
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#0ea5a0]/15 blur-sm" />
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="h-[300px] w-full bg-cover bg-center md:h-[380px]"
                    style={{
                      backgroundImage: "url('/seychelles_plage_5.jpg')",
                    }}
                  />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== MENU ===== */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0ea5a0]/6 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionReveal>
            <div className="mb-16 text-center md:mb-20">
              <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] text-[#0ea5a0] uppercase">
                Gastronomie
              </span>
              <h2 className="font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl">
                Le Menu
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {menuItems.map((item, i) => (
              <SectionReveal key={item.label} delay={0.15 * (i + 1)}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] transition-colors duration-500 hover:border-[#0ea5a0]/20 hover:bg-white/[0.04]"
                >
                  {/* Circular image */}
                  <div className="flex justify-center pt-8">
                    <div className="h-44 w-44 overflow-hidden rounded-full border-2 border-white/[0.08] shadow-lg shadow-black/30">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                        src={item.image}
                        alt={item.dish}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center md:p-8">
                    <div className="mb-3 flex items-center justify-center gap-2">
                      <div className="h-px w-6 bg-[#0ea5a0]" />
                      <span className="text-xs font-semibold tracking-[0.15em] text-[#0ea5a0] uppercase">
                        {item.label}
                      </span>
                      <div className="h-px w-6 bg-[#0ea5a0]" />
                    </div>

                    <h3 className="font-display mb-3 text-2xl font-bold text-white">
                      {item.dish}
                    </h3>

                    <p className="text-sm leading-[1.7] text-white/50">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIGNATURE DRINK ===== */}
      <section className="relative overflow-hidden px-6 pb-24 pt-12 md:px-8 md:pb-32 md:pt-16">
        {/* Circle decoration */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full border border-[#0ea5a0]/10"
        />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <SectionReveal>
              <div className="relative">
                <div className="absolute inset-0 translate-y-4 scale-95 rounded-3xl bg-[#0ea5a0]/10 blur-[40px]" />
                <div className="relative overflow-hidden rounded-3xl border border-white/[0.06]">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                    className="h-[400px] w-full bg-cover bg-center md:h-[500px]"
                    style={{
                      backgroundImage: "url('/seychelles_plage_2.webp')",
                    }}
                  />
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <SectionReveal delay={0.2}>
              <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm md:p-10">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-px w-8 bg-[#0ea5a0]" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#5eead4] uppercase">
                    Boisson signature
                  </span>
                </div>

                <h2 className="font-display mb-6 text-4xl font-bold text-white sm:text-5xl">
                  Jus des
                  <br />
                  Seychelles
                </h2>

                <div className="mb-6 h-[2px] w-16 bg-[#0ea5a0]" />

                <p className="text-base leading-[1.8] text-white/60 md:text-lg">
                  Fruits tropicaux frais presses a la main, un veritable gout
                  d&apos;ile dans chaque gorgee. Un concentre de soleil et de
                  fraicheur qui capture l&apos;essence meme de l&apos;archipel.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
