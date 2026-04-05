"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";

const countries = [
  {
    name: "Tunisie",
    slug: "tunisie",
    tagline: "Saveurs mediterraneennes & epices vibrantes",
    image:
      "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=800&q=80",
    accent: "#c2384d",
    accentGlow: "rgba(194, 56, 77, 0.3)",
  },
  {
    name: "Benin",
    slug: "benin",
    tagline: "Authenticite de l'Afrique de l'Ouest",
    image: "/benin_plage_1.jpg",
    accent: "#1a7a3d",
    accentGlow: "rgba(26, 122, 61, 0.3)",
  },
  {
    name: "Seychelles",
    slug: "seychelles",
    tagline: "Exotisme tropical & fraicheur oceanique",
    image: "/seychelles_plage_1.webp",
    accent: "#0ea5a0",
    accentGlow: "rgba(14, 165, 160, 0.3)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function MenuPage() {
  return (
    <PageTransition className="min-h-screen bg-surface-dark relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[300px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,164,94,0.08)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(14,165,160,0.06)_0%,transparent_70%)]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(194,56,77,0.05)_0%,transparent_70%)]" />
      </div>

      {/* Noise texture */}
      <div className="noise pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-24 md:px-8 md:pt-32 lg:pt-40">
        {/* Header */}
        <div className="mb-20 text-center md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium tracking-widest text-accent-light uppercase backdrop-blur-sm"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Explorez le monde
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="gradient-text-white">Destinations</span>
            <br />
            <span className="gradient-text">Culinaires</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-8 max-w-xl font-body text-lg leading-relaxed text-[#9090a8] md:text-xl"
          >
            Chaque pays raconte une histoire a travers sa cuisine.
            Selectionnez une destination pour un voyage gustatif unique.
          </motion.p>
        </div>

        {/* Country Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {countries.map((country) => (
            <motion.div key={country.slug} variants={cardVariants}>
              <Link href={`/menu/${country.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface-elevated transition-all duration-500 hover:border-white/[0.12] md:rounded-3xl">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      src={country.image}
                      alt={country.name}
                      className="h-full w-full object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    {/* Glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(ellipse at 50% 80%, ${country.accentGlow}, transparent 70%)`,
                      }}
                    />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className="h-[2px] w-8 transition-all duration-500 group-hover:w-12"
                        style={{ backgroundColor: country.accent }}
                      />
                      <span
                        className="text-xs font-semibold tracking-[0.2em] uppercase"
                        style={{ color: country.accent }}
                      >
                        Decouvrir
                      </span>
                    </div>

                    <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                      {country.name}
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-white/60 md:text-base">
                      {country.tagline}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/50 transition-all duration-500 group-hover:text-white/90">
                      <span>Explorer le menu</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
