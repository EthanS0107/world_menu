"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionReveal from "../components/SectionReveal";

export default function SuggestionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous connecterez plus tard votre backend ou service d'envoi d'email
    setSubmitted(true);
  };

  return (
    <PageTransition className="relative min-h-screen overflow-hidden bg-[#0a0a0f] p-4 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 right-[-5rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(200,164,94,0.35),_rgba(200,164,94,0)_72%)] blur-3xl" />
        <div className="absolute -bottom-40 left-[-6rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(90,116,194,0.24),_rgba(90,116,194,0)_72%)] blur-3xl" />
      </div>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="glass premium-shadow relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 p-12 text-center"
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#a88a3e] via-[#c8a45e] to-[#dbb978]" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/12"
            >
              <svg
                className="h-12 w-12 text-emerald-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </motion.div>
            <h2 className="mb-4 font-display text-4xl text-white">
              Merci pour votre idée !
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-300">
              Votre proposition a bien été enregistrée. Nous avons hâte de
              découvrir cette nouvelle destination culinaire.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSubmitted(false)}
              className="text-lg font-bold text-[#d9bc85] underline transition-colors hover:text-[#f0d9a8]"
            >
              Proposer une autre destination
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="noise relative z-10 w-full max-w-4xl"
          >
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 font-display text-5xl text-white"
              >
                Proposez une Destination
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mx-auto max-w-2xl text-xl text-slate-300"
              >
                Vous rêvez de voir un pays en particulier ? Partagez vos idées
                de menus et aidez-nous à enrichir la carte du monde !
              </motion.p>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="glass premium-shadow relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-14"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#c8a45e]/20 blur-2xl" />

              <form
                onSubmit={handleSubmit}
                className="space-y-12 relative z-10"
              >
                <SectionReveal>
                  <h2 className="mb-6 border-l-4 border-[#c8a45e] pl-4 font-display text-3xl text-white">
                    La Destination
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label
                        htmlFor="country"
                        className="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-300"
                      >
                        Pays / Région
                      </label>
                      <input
                        type="text"
                        id="country"
                        required
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#c8a45e] focus:bg-white/10 focus:ring-2 focus:ring-[#c8a45e]/25"
                        placeholder="Ex: Japon, Mexique..."
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="colors"
                        className="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-300"
                      >
                        Couleurs Dominantes (Optionnel)
                      </label>
                      <input
                        type="text"
                        id="colors"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#c8a45e] focus:bg-white/10 focus:ring-2 focus:ring-[#c8a45e]/25"
                        placeholder="Ex: Rouge et Blanc"
                      />
                    </div>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.1}>
                  <h2 className="mb-6 border-l-4 border-[#d9bc85] pl-4 font-display text-3xl text-white">
                    Vos Idées Gourmandes
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="dish"
                        className="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-300"
                      >
                        Plat Phare
                      </label>
                      <input
                        type="text"
                        id="dish"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#c8a45e] focus:bg-white/10 focus:ring-2 focus:ring-[#c8a45e]/25"
                        placeholder="Quel plat représente le mieux ce pays ?"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="starter"
                          className="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-300"
                        >
                          Idée d&apos;Entrée
                        </label>
                        <input
                          type="text"
                          id="starter"
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#c8a45e] focus:bg-white/10 focus:ring-2 focus:ring-[#c8a45e]/25"
                          placeholder="..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="dessert"
                          className="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-300"
                        >
                          Idée de Dessert
                        </label>
                        <input
                          type="text"
                          id="dessert"
                          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#c8a45e] focus:bg-white/10 focus:ring-2 focus:ring-[#c8a45e]/25"
                          placeholder="..."
                        />
                      </div>
                    </div>
                  </div>
                </SectionReveal>

                <SectionReveal delay={0.2}>
                  <h2 className="mb-6 border-l-4 border-[#a7c38f] pl-4 font-display text-3xl text-white">
                    Pourquoi cette destination ?
                  </h2>
                  <textarea
                    id="description"
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-[#c8a45e] focus:bg-white/10 focus:ring-2 focus:ring-[#c8a45e]/25"
                    placeholder="Racontez-nous l'ambiance, une anecdote ou pourquoi ce pays vous tient à coeur..."
                  ></textarea>
                </SectionReveal>

                <SectionReveal delay={0.3} className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full rounded-2xl bg-gradient-to-r from-[#a88a3e] via-[#c8a45e] to-[#dbb978] py-5 text-xl font-bold text-[#171717] transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(200,164,94,0.35)]"
                  >
                    Envoyer ma suggestion
                  </motion.button>
                </SectionReveal>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
