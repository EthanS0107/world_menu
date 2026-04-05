"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionReveal from "../components/SectionReveal";

export default function About() {
  return (
    <PageTransition className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-5rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(200,164,94,0.3),_rgba(200,164,94,0)_72%)] blur-3xl" />
        <div className="absolute -bottom-44 left-[-8rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,_rgba(90,116,194,0.24),_rgba(90,116,194,0)_72%)] blur-3xl" />
      </div>

      <section className="relative overflow-hidden px-4 pb-24 pt-24 sm:pt-28">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-[#c8a45e]/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#6f89d1]/20 blur-3xl"
        />

        <div className="container relative z-10 mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-slate-200 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#d9bc85]" />
            Notre vision culinaire
          </div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 pb-2 font-display text-5xl font-bold md:text-7xl"
          >
            <span className="gradient-text-white">World</span>{" "}
            <span className="gradient-text">Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-4xl text-xl font-light leading-relaxed text-slate-300 md:text-3xl"
          >
            Plus qu&apos;un repas, une invitation au{" "}
            <span className="font-bold text-[#d9bc85]">voyage</span>.
          </motion.p>
        </div>
      </section>

      <section className="overflow-hidden px-4 py-24">
        <div className="container mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass premium-shadow relative aspect-square rotate-2 overflow-hidden rounded-3xl border border-white/10 transition-transform duration-700 hover:rotate-0">
              <Image
                src="/globe.svg"
                alt="Monde"
                width={600}
                height={600}
                className="h-full w-full object-contain p-16 opacity-90 drop-shadow-md"
              />
            </div>
          </motion.div>

          <div className="w-full md:w-1/2">
            <SectionReveal>
              <h2 className="mb-8 border-l-4 border-[#c8a45e] pl-5 font-display text-4xl text-white">
                Notre Mission
              </h2>
              <p className="mb-8 text-xl font-light leading-relaxed text-slate-300">
                Chez <span className="font-bold text-white">World Menu</span>,
                nous croyons que la cuisine est le meilleur moyen de découvrir
                une culture. Notre objectif est de briser les frontières
                culinaires et de vous transporter, le temps d&apos;un repas, sur
                les plages des Seychelles, dans les marchés colorés du Bénin, et
                bien au-delà.
              </p>
              <p className="text-xl font-light leading-relaxed text-slate-300">
                Chaque menu est conçu comme une escale authentique, respectant
                les produits, les épices et les traditions de chaque pays mis à
                l&apos;honneur.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[16px_16px]" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="mb-20 font-display text-4xl gradient-text">
              Nos Valeurs
            </h2>
          </SectionReveal>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
            <SectionReveal delay={0.2} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                className="glass h-full rounded-3xl border border-white/10 p-10"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#c8a45e]/30 bg-[#c8a45e]/12 text-[#e7d1a4]">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
                    <path d="M3 12h18" />
                    <path d="M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21" />
                    <path d="M12 3c-2.5 2.4-3.8 5.4-3.8 9S9.5 18.6 12 21" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Authenticité
                </h3>
                <p className="text-lg text-slate-300">
                  Des recettes fidèles aux traditions, sans compromis sur le
                  goût original.
                </p>
              </motion.div>
            </SectionReveal>

            <SectionReveal delay={0.4} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                className="glass h-full rounded-3xl border border-white/10 p-10"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#c8a45e]/30 bg-[#c8a45e]/12 text-[#e7d1a4]">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M8 12l3 3a2 2 0 002.8 0l5.2-5.2" />
                    <path d="M3.5 9.5l3.2-3.2a2 2 0 012.8 0l3.5 3.5" />
                    <path d="M14.5 12.5l1.8 1.8a2 2 0 002.8 0l1.4-1.4" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Partage</h3>
                <p className="text-lg text-slate-300">
                  La cuisine rassemble. Nos plats sont pensés pour créer des
                  moments de convivialité.
                </p>
              </motion.div>
            </SectionReveal>

            <SectionReveal delay={0.6} className="h-full">
              <motion.div
                whileHover={{ y: -8 }}
                className="glass h-full rounded-3xl border border-white/10 p-10"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#c8a45e]/30 bg-[#c8a45e]/12 text-[#e7d1a4]">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M6 15c2.2-5.5 8-8.5 13-9-1 5-4 10.8-9.5 13" />
                    <path d="M5 19c2.5-3.5 6.5-5.5 11.5-6" />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Découverte
                </h3>
                <p className="text-lg text-slate-300">
                  L&apos;éveil des sens par la découverte de saveurs méconnues
                  et d&apos;ingrédients exotiques.
                </p>
              </motion.div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 text-center">
        <div className="container mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm sm:p-14">
          <SectionReveal>
            <h2 className="mb-8 font-display text-4xl text-white">
              Prêt à embarquer ?
            </h2>
            <p className="mb-10 text-2xl font-light text-slate-300">
              Rejoignez-nous dans cette aventure culinaire et laissez vos
              papilles explorer le monde.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/menu"
                  className="inline-flex rounded-2xl bg-gradient-to-r from-[#a88a3e] via-[#c8a45e] to-[#dbb978] px-8 py-3 text-sm font-bold text-[#171717] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(200,164,94,0.35)]"
                >
                  Voir nos destinations
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/propose"
                  className="inline-flex rounded-2xl border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Proposer une idée
                </Link>
              </motion.div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
