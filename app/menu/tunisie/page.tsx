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

export default function TunisieMenu() {
  return (
    <PageTransition className="min-h-screen overflow-x-hidden bg-[#f0041e] text-white">
      <section className="relative min-h-[95vh] overflow-hidden px-4 py-12 md:px-8 md:py-16">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,#ff3f4d_0%,#f0041e_45%,#b30014_100%)]" />

        <motion.div
          animate={{ rotate: [0, 4, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-24 -z-10 h-[360px] w-[360px] rounded-full bg-[#9b0010]/40 blur-3xl"
        />

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 md:flex-row md:gap-10">
          <SectionReveal className="w-full md:w-[38%]">
            <div className="relative mx-auto h-[520px] w-[280px] overflow-hidden rounded-[180px] border-4 border-white/60 shadow-[0_25px_60px_rgba(0,0,0,0.35)] sm:w-[340px] md:h-[620px] md:w-[420px]">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.7 }}
                src={heroImage}
                alt="Vue de la médina de Tunis"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          </SectionReveal>

          <div className="relative w-full md:w-[62%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-[5%] top-1/2 -z-10 hidden h-[340px] w-[340px] -translate-y-1/2 rounded-full bg-white/90 md:block"
            >
              <div className="absolute left-[26%] top-[17%] h-[220px] w-[220px] rounded-full border-[26px] border-[#f0041e]" />
              <div className="absolute left-[45%] top-[33%] text-[110px] leading-none text-[#f0041e]">
                ★
              </div>
            </motion.div>

            <SectionReveal delay={0.2}>
              <div className="rounded-[40px] bg-[#7d0010]/90 p-8 shadow-[0_30px_60px_rgba(56,0,8,0.45)] backdrop-blur-sm md:ml-auto md:max-w-[520px] md:p-10">
                <h1
                  className="mb-8 text-center text-5xl font-black uppercase leading-[0.95] tracking-wide sm:text-6xl md:text-left md:text-7xl"
                  style={{
                    fontFamily:
                      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                  }}
                >
                  Menu typique
                  <br />
                  tunisien
                </h1>

                <p
                  className="text-center text-2xl font-black uppercase leading-snug md:text-left md:text-[2rem]"
                  style={{
                    fontFamily:
                      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                  }}
                >
                  Voyagez au coeur de la Tunisie, une bouchee a la fois
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f0041e] px-4 py-16 md:px-8 md:py-24">
        <div className="absolute right-0 top-0 h-[240px] w-[45%] bg-[#93000f] [clip-path:polygon(100%_0,0_0,100%_100%)]" />
        <div className="absolute bottom-0 left-0 h-[180px] w-[34%] bg-[#93000f] [clip-path:polygon(0_0,100%_100%,0_100%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr]">
          <SectionReveal>
            <article className="rounded-[38px] bg-[#7d0010]/95 p-8 shadow-2xl md:p-10">
              <h2
                className="mb-6 text-5xl font-black uppercase leading-none sm:text-6xl"
                style={{
                  fontFamily:
                    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                }}
              >
                La Tunisie
              </h2>
              <p
                className="text-2xl leading-[1.45] text-white/95 md:text-[2rem]"
                style={{ fontFamily: "'Trebuchet MS', 'Segoe UI', sans-serif" }}
              >
                L&apos;histoire de la Tunisie remonte a plus de 4000 ans,
                marquee par des periodes phenicienne, carthaginoise, romaine,
                vandale, byzantine, arabe, puis par la colonisation francaise de
                1881 a 1956. Le pays obtient son autonomie en 1955 et son
                independance en 1956.
              </p>
            </article>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 overflow-hidden rounded-[24px] border-4 border-white/90 shadow-xl">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={historyImageTop}
                  alt="Village côtier tunisien"
                  className="h-[260px] w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[24px] border-4 border-white/90 shadow-xl">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={historyImageBottom}
                  alt="Oasis tunisienne"
                  className="h-[220px] w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[24px] border-4 border-white/90 shadow-xl">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={historyImageCanyon}
                  alt="Canyon désertique en Tunisie"
                  className="h-[220px] w-full object-cover"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f0041e] px-4 py-16 md:px-8 md:py-24">
        <div className="absolute left-1/2 top-[42%] hidden h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[28px] border-white/90 md:block" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <SectionReveal>
            <h2
              className="mb-10 text-center text-7xl font-black uppercase leading-none sm:text-8xl"
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              Menu
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <SectionReveal delay={0.2}>
              <motion.article
                whileHover={{ y: -8 }}
                className="rounded-[26px] bg-[#7d0010]/90 p-4 shadow-2xl"
              >
                <div className="mb-4 overflow-hidden rounded-full border-[6px] border-black shadow-xl">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={mechouiaImage}
                    alt="Salade mechouia"
                    className="h-[250px] w-full object-cover"
                  />
                </div>
                <h3
                  className="mb-2 text-center text-4xl font-black uppercase"
                  style={{
                    fontFamily:
                      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                  }}
                >
                  Entree
                </h3>
                <p
                  className="text-center text-xl leading-relaxed text-white/95"
                  style={{
                    fontFamily: "'Trebuchet MS', 'Segoe UI', sans-serif",
                  }}
                >
                  <strong>Salade Mechouia</strong> : poivrons, tomates, piment
                  et oignon grilles avec thon, oeufs, capres et huile
                  d&apos;olive. Servie bien fraiche.
                </p>
              </motion.article>
            </SectionReveal>

            <SectionReveal delay={0.35}>
              <motion.article
                whileHover={{ y: -8 }}
                className="rounded-[26px] bg-[#7d0010]/90 p-4 shadow-2xl"
              >
                <div className="mb-4 overflow-hidden rounded-full border-[6px] border-white shadow-xl">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={chapatiImage}
                    alt="Chapati tunisien"
                    className="h-[250px] w-full object-cover"
                  />
                </div>
                <h3
                  className="mb-2 text-center text-4xl font-black uppercase"
                  style={{
                    fontFamily:
                      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                  }}
                >
                  Plat
                </h3>
                <p
                  className="text-center text-xl leading-relaxed text-white/95"
                  style={{
                    fontFamily: "'Trebuchet MS', 'Segoe UI', sans-serif",
                  }}
                >
                  <strong>Chapati</strong> : galette moelleuse garnie de thon,
                  oeufs durs, pommes de terre et sauces piquantes ou cremeuses.
                </p>
              </motion.article>
            </SectionReveal>

            <SectionReveal delay={0.5}>
              <motion.article
                whileHover={{ y: -8 }}
                className="rounded-[26px] bg-[#7d0010]/90 p-4 shadow-2xl"
              >
                <div className="mb-4 overflow-hidden rounded-full border-[6px] border-white shadow-xl">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={halkoumImage}
                    alt="Halkoum tunisien"
                    className="h-[250px] w-full object-cover"
                  />
                </div>
                <h3
                  className="mb-2 text-center text-4xl font-black uppercase"
                  style={{
                    fontFamily:
                      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                  }}
                >
                  Dessert
                </h3>
                <p
                  className="text-center text-xl leading-relaxed text-white/95"
                  style={{
                    fontFamily: "'Trebuchet MS', 'Segoe UI', sans-serif",
                  }}
                >
                  <strong>Halkoum</strong> : douceur tunisienne proche des
                  loukoums, a base d&apos;amidon, sucre, eau de fleur
                  d&apos;oranger, citron et notes de noisette.
                </p>
              </motion.article>
            </SectionReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f0041e] px-4 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14">
        <div className="absolute right-6 top-8 h-40 w-40 rounded-full bg-[#9b0010]/45 blur-3xl" />

        <div className="relative mx-auto w-full max-w-7xl rounded-[28px] border-[10px] border-[#ff3d22] bg-[#a10216]/30 p-3 shadow-2xl md:p-5">
          <div className="relative overflow-hidden rounded-[18px]">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7 }}
              src={cafeImage}
              alt="Cafe blanc tunisien"
              className="h-[520px] w-full object-cover"
            />

            <SectionReveal className="absolute left-0 top-0 h-full w-full sm:max-w-[70%] md:max-w-[58%]">
              <article className="h-full w-full bg-black/55 p-6 md:p-10">
                <p
                  className="mb-3 inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-[0.15em] text-white/95 md:text-base"
                  style={{
                    fontFamily: "'Trebuchet MS', 'Segoe UI', sans-serif",
                  }}
                >
                  Boisson signature
                </p>
                <h2
                  className="mb-6 text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl"
                  style={{
                    fontFamily:
                      "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                  }}
                >
                  Le cafe blanc tunisien
                </h2>
                <p
                  className="text-2xl leading-[1.45] text-white/95 md:text-[2rem]"
                  style={{
                    fontFamily: "'Trebuchet MS', 'Segoe UI', sans-serif",
                  }}
                >
                  Inspire du Ahweh Bayda libanais, il se prepare avec de
                  l&apos;eau de rose pour une touche parfumee et apaisante,
                  souvent consomme apres les repas pour ses proprietes
                  digestives.
                </p>
                <p
                  className="mt-5 text-lg leading-relaxed text-white/90 md:text-xl"
                  style={{
                    fontFamily: "'Trebuchet MS', 'Segoe UI', sans-serif",
                  }}
                >
                  Saveur: floral, legerement sucree et tres delicate. Servie
                  tiede, elle accompagne parfaitement les desserts tunisiens.
                </p>
              </article>
            </SectionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
