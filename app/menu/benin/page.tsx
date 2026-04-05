"use client";

import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import SectionReveal from "../../components/SectionReveal";

const menuItems = [
  {
    label: "Entree",
    dish: "Ata",
    description:
      "Beignet de haricots blancs croustillants, accompagnes d'une sauce pimentee.",
    image: "/ata.jpg",
  },
  {
    label: "Plat",
    dish: "Wassa-Wassa",
    description:
      "Semoule de Manioc accompagnee de sauce tomate pimentee et d'un poisson braise a la Beninoise.",
    image: "/wassa_wassa.jpg",
  },
  {
    label: "Dessert",
    dish: "Salade de Fruits",
    description:
      "Mangue, ananas, papaye et banane, legerement parfumes au citron vert et servis bien frais.",
    image: "/salade_de_fruits_tropicaux.jpeg",
  },
];

export default function BeninMenu() {
  return (
    <PageTransition className="min-h-screen overflow-x-hidden bg-[#060e08]">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,135,81,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(232,17,45,0.08)_0%,transparent_50%)]" />
        <div className="noise pointer-events-none absolute inset-0" />

        {/* Floating orb */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, -3, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-1/3 h-[350px] w-[350px] rounded-full bg-[#008751]/15 blur-[100px]"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-20 bottom-1/4 h-[300px] w-[300px] rounded-full bg-[#FCD116]/8 blur-[80px]"
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-24 md:flex-row md:gap-16 md:px-8">
          {/* Hero text */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#008751]/30 bg-[#008751]/10 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-[#4ade80] uppercase"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#008751]" />
              Benin
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              Menu typique
              <br />
              <span className="bg-gradient-to-r from-[#008751] via-[#4ade80] to-[#008751] bg-clip-text text-transparent">
                du Benin
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto mt-6 h-[2px] bg-[#FCD116] md:mx-0"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/50 md:text-xl"
            >
              Entrez, goutez, voyagez : le Benin s&apos;invite dans votre
              assiette.
            </motion.p>
          </div>

          {/* Slogan card */}
          <div className="w-full md:w-1/2">
            <SectionReveal delay={0.4}>
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 translate-y-4 scale-95 rounded-3xl bg-[#008751]/15 blur-[40px]" />
                <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.03] p-10 backdrop-blur-sm md:p-12">
                  <p className="font-display text-center text-2xl font-bold leading-relaxed text-white md:text-3xl">
                    <span className="text-[#E8112D]">
                      Entrez, goutez, voyagez :
                    </span>
                    <br />
                    <span className="text-[#008751]">
                      Le Benin s&apos;invite
                    </span>
                    <br />
                    dans votre assiette
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060e08] to-transparent" />
      </section>

      {/* ===== HISTORY ===== */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#008751]/20 to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Image */}
          <div className="order-1 w-full md:order-2 md:w-[38%]">
            <SectionReveal delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#008751]/20 blur-sm" />
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.06]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src="/benin_plage_1.jpg"
                    alt="Plage du Benin"
                    className="h-[300px] w-full object-cover md:h-[380px]"
                  />
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Text */}
          <div className="order-2 w-full md:order-1 md:w-[62%]">
            <SectionReveal>
              <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm md:p-12">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px w-8 bg-[#008751]" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#008751] uppercase">
                    Histoire
                  </span>
                </div>
                <h2 className="font-display mb-8 text-4xl font-bold text-white sm:text-5xl">
                  Le Benin
                </h2>
                <p className="mb-5 text-base leading-[1.8] text-white/60">
                  Le Benin, pays d&apos;Afrique de l&apos;Ouest, est borde par
                  le Togo, le Nigeria, le Burkina Faso, le Niger et le golfe de
                  Guinee. Ancien royaume du Dahomey et colonie francaise, il a
                  obtenu son independance en 1960 et est aujourd&apos;hui une
                  democratie stable.
                </p>
                <p className="text-base leading-[1.8] text-white/60">
                  Le pays est riche en culture et traditions, notamment le
                  vaudou, la musique, la danse et l&apos;artisanat. Son economie
                  repose sur l&apos;agriculture (coton, noix de cajou, mais) le
                  commerce via le port de Cotonou et le tourisme, avec des parcs
                  nationaux comme le Pendjari et des sites historiques lies a la
                  traite negriere.
                </p>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-[#008751]/40 to-transparent" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== MENU ===== */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#008751]/8 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionReveal>
            <div className="mb-16 text-center md:mb-20">
              <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] text-[#008751] uppercase">
                Gastronomie
              </span>
              <h2 className="font-display text-5xl font-bold text-white sm:text-6xl md:text-7xl">
                Le Menu
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {menuItems.map((item, i) => {
              const accentColors = ["#008751", "#E8112D", "#FCD116"];
              const accent = accentColors[i];

              return (
                <SectionReveal key={item.label} delay={0.15 * (i + 1)}>
                  <motion.article
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] transition-colors duration-500 hover:border-white/[0.1] hover:bg-white/[0.04]"
                  >
                    {/* Image */}
                    <div className="relative h-[260px] overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.6 }}
                        src={item.image}
                        alt={item.dish}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060e08] via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                      <div className="mb-3 flex items-center gap-2">
                        <div
                          className="h-px w-6"
                          style={{ backgroundColor: accent }}
                        />
                        <span
                          className="text-xs font-semibold tracking-[0.15em] uppercase"
                          style={{ color: accent }}
                        >
                          {item.label}
                        </span>
                      </div>

                      <h3 className="font-display mb-3 text-2xl font-bold text-white">
                        {item.dish}
                      </h3>

                      <p className="text-sm leading-[1.7] text-white/50">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom accent bar */}
                    <div
                      className="h-[2px] w-full opacity-60"
                      style={{ backgroundColor: accent }}
                    />
                  </motion.article>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SIGNATURE DRINK ===== */}
      <section className="relative overflow-hidden px-6 pb-24 pt-12 md:px-8 md:pb-32 md:pt-16">
        {/* Decorative orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-20 top-20 h-[200px] w-[200px] rounded-full border border-[#008751]/15"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -6, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -right-20 bottom-20 h-[250px] w-[250px] rounded-full bg-[#E8112D]/5 blur-[60px]"
        />

        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
          {/* Drink image */}
          <div className="w-full md:w-1/2">
            <SectionReveal>
              <div className="relative">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-[#008751]/20 blur-sm" />
                <div className="relative overflow-hidden rounded-3xl border border-white/[0.06]">
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                    src="/bouye.jpg"
                    alt="Bouye"
                    className="h-[400px] w-full object-cover md:h-[480px]"
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
                  <div className="h-px w-8 bg-[#FCD116]" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#FCD116] uppercase">
                    Boisson signature
                  </span>
                </div>

                <h2 className="font-display mb-6 text-4xl font-bold text-white sm:text-5xl">
                  Bouye
                </h2>

                <div className="mb-6 h-[2px] w-16 bg-[#E8112D]" />

                <p className="text-base leading-[1.8] text-white/60 md:text-lg">
                  Rafraichissante, legerement acidulee et naturellement sucree,
                  cette boisson a base de pulpe de Baobab allie saveur exotique
                  et bienfaits sante, pour un voyage gustatif unique.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
