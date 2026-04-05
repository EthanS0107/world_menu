"use client";

import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import SectionReveal from "../../components/SectionReveal";

const heroImage =
  "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=1200&q=80";
const historyImageTop =
  "https://images.unsplash.com/photo-1610737241336-371badac3b66?auto=format&fit=crop&w=1200&q=80";
const historyImageBottom =
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80";
const historyImageCanyon =
  "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=1200&q=80";
const mechouiaImage =
  "https://images.unsplash.com/photo-1548943487-a2e4a6f68f88?auto=format&fit=crop&w=1200&q=80";
const chapatiImage =
  "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80";
const halkoumImage =
  "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=1200&q=80";
const cafeImage =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80";

const menuItems = [
  {
    label: "Entree",
    dish: "Salade Mechouia",
    description:
      "Poivrons, tomates, piment et oignon grilles avec thon, oeufs, capres et huile d'olive. Servie bien fraiche.",
    image: mechouiaImage,
  },
  {
    label: "Plat",
    dish: "Chapati",
    description:
      "Galette moelleuse garnie de thon, oeufs durs, pommes de terre et sauces piquantes ou cremeuses.",
    image: chapatiImage,
  },
  {
    label: "Dessert",
    dish: "Halkoum",
    description:
      "Douceur tunisienne proche des loukoums, a base d'amidon, sucre, eau de fleur d'oranger, citron et notes de noisette.",
    image: halkoumImage,
  },
];

export default function TunisieMenu() {
  return (
    <PageTransition className="min-h-screen overflow-x-hidden bg-[#0d0508]">
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(139,26,43,0.25)_0%,transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(100,20,35,0.15)_0%,transparent_50%)]" />
        <div className="noise pointer-events-none absolute inset-0" />

        {/* Floating orb */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [0, 3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 -top-20 h-[400px] w-[400px] rounded-full bg-[#8b1a2b]/20 blur-[100px]"
        />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:gap-16 md:px-8 md:py-0">
          {/* Hero image */}
          <SectionReveal className="w-full md:w-[42%]">
            <div className="relative mx-auto w-[280px] sm:w-[340px] md:w-full md:max-w-[420px]">
              {/* Glow behind image */}
              <div className="absolute inset-0 translate-y-4 scale-95 rounded-[180px] bg-[#8b1a2b]/30 blur-[60px]" />
              <div className="relative h-[520px] overflow-hidden rounded-[180px] border border-white/10 md:h-[620px]">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7 }}
                  src={heroImage}
                  alt="Vue de la medina de Tunis"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0508]/50 to-transparent" />
              </div>
            </div>
          </SectionReveal>

          {/* Hero text */}
          <div className="w-full text-center md:w-[58%] md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#8b1a2b]/40 bg-[#8b1a2b]/10 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-[#e8a0a0] uppercase"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c2384d]" />
              Tunisie
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              Menu typique
              <br />
              <span className="bg-gradient-to-r from-[#c2384d] via-[#e8a0a0] to-[#c2384d] bg-clip-text text-transparent">
                tunisien
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-white/50 md:text-xl"
            >
              Voyagez au coeur de la Tunisie, une bouchee a la fois.
              Entre fraicheur mediterraneenne, epices vibrantes et gourmandise
              orientale.
            </motion.p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d0508] to-transparent" />
      </section>

      {/* ===== HISTORY ===== */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
        {/* Decorative accent line */}
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#8b1a2b]/30 to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionReveal>
            <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm md:p-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-px w-8 bg-[#c2384d]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#c2384d] uppercase">
                  Histoire
                </span>
              </div>
              <h2 className="font-display mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl">
                La Tunisie
              </h2>
              <p className="text-base leading-[1.8] text-white/60 md:text-lg">
                L&apos;histoire de la Tunisie remonte a plus de 4000 ans,
                marquee par des periodes phenicienne, carthaginoise, romaine,
                vandale, byzantine, arabe, puis par la colonisation francaise de
                1881 a 1956. Le pays obtient son autonomie en 1955 et son
                independance en 1956.
              </p>
              <div className="mt-8 h-px w-full bg-gradient-to-r from-[#8b1a2b]/40 to-transparent" />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-2xl border border-white/[0.06]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={historyImageTop}
                  alt="Village cotier tunisien"
                  className="h-[260px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={historyImageBottom}
                  alt="Oasis tunisienne"
                  className="h-[200px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={historyImageCanyon}
                  alt="Canyon desertique en Tunisie"
                  className="h-[200px] w-full object-cover"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ===== MENU ===== */}
      <section className="relative overflow-hidden px-6 py-24 md:px-8 md:py-32">
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b1a2b]/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionReveal>
            <div className="mb-16 text-center md:mb-20">
              <span className="mb-4 inline-block text-xs font-semibold tracking-[0.2em] text-[#c2384d] uppercase">
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
                  className="group rounded-3xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors duration-500 hover:border-[#8b1a2b]/30 hover:bg-white/[0.04]"
                >
                  {/* Dish image */}
                  <div className="mb-6 overflow-hidden rounded-2xl border border-white/[0.06]">
                    <motion.img
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.6 }}
                      src={item.image}
                      alt={item.dish}
                      className="h-[240px] w-full object-cover"
                    />
                  </div>

                  {/* Course label */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-px w-6 bg-[#c2384d]" />
                    <span className="text-xs font-semibold tracking-[0.15em] text-[#c2384d] uppercase">
                      {item.label}
                    </span>
                  </div>

                  {/* Dish name */}
                  <h3 className="font-display mb-3 text-2xl font-bold text-white">
                    {item.dish}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-[1.7] text-white/50">
                    {item.description}
                  </p>
                </motion.article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIGNATURE DRINK ===== */}
      <section className="relative overflow-hidden px-6 pb-24 pt-12 md:px-8 md:pb-32 md:pt-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/[0.06] md:rounded-[2rem]">
          {/* Background image */}
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.8 }}
            src={cafeImage}
            alt="Cafe blanc tunisien"
            className="h-[550px] w-full object-cover md:h-[600px]"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* Content */}
          <SectionReveal className="absolute inset-0">
            <div className="flex h-full w-full flex-col justify-center p-8 md:max-w-[55%] md:p-14">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-px w-8 bg-[#c2384d]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#e8a0a0] uppercase">
                  Boisson signature
                </span>
              </div>

              <h2 className="font-display mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Le cafe blanc
                <br />
                tunisien
              </h2>

              <p className="text-base leading-[1.7] text-white/70 md:text-lg">
                Inspire du Ahweh Bayda libanais, il se prepare avec de
                l&apos;eau de rose pour une touche parfumee et apaisante,
                souvent consomme apres les repas pour ses proprietes
                digestives.
              </p>

              <p className="mt-5 text-sm leading-relaxed text-white/50 md:text-base">
                Saveur : floral, legerement sucree et tres delicate. Servie
                tiede, elle accompagne parfaitement les desserts tunisiens.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
