"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function MenuPage() {
  return (
    <PageTransition className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <main className="max-w-4xl w-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
        >
          Découvrez nos Menus du Monde
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 mb-12"
        >
          Sélectionnez une destination pour découvrir ses saveurs typiques.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Card Seychelles */}
          <motion.div variants={item}>
            <Link
              href="/menu/seychelles"
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-blue-600 relative overflow-hidden">
                {/* Flag animated on hover maybe? */}
                <div className="absolute inset-0 bg-blue-600 transition-transform duration-700 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-yellow-400 w-full h-full origin-bottom-left -skew-x-12 opacity-80 translate-x-1/4 transition-transform duration-700 group-hover:translate-x-[28%]"></div>
                <div className="absolute inset-0 bg-red-600 w-full h-full origin-bottom-left -skew-x-12 opacity-80 translate-x-1/2 transition-transform duration-700 group-hover:translate-x-[55%]"></div>
                <div className="absolute bottom-0 w-full h-4 bg-green-600"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-white text-3xl font-bold drop-shadow-md"
                  >
                    🇸🇨
                  </motion.span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  Seychelles
                </h2>
                <p className="text-gray-600">
                  Plongez dans l'exotisme avec nos plats aux saveurs de coco, de
                  poisson frais et d'épices tropicales.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Card Bénin */}
          <motion.div variants={item}>
            <Link
              href="/menu/benin"
              className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-[#008751] relative overflow-hidden">
                {/* Flag animation */}
                <div className="absolute left-0 top-0 h-full w-[40%] bg-[#008751] transition-all duration-500 group-hover:w-[45%]"></div>
                <div className="absolute right-0 top-0 h-1/2 w-[60%] bg-[#FCD116] transition-all duration-500 group-hover:w-[55%]"></div>
                <div className="absolute right-0 bottom-0 h-1/2 w-[60%] bg-[#E8112D] transition-all duration-500 group-hover:w-[55%]"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    className="text-white text-3xl font-bold drop-shadow-md"
                  >
                    🇧🇯
                  </motion.span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-[#008751] transition-colors">
                  Bénin
                </h2>
                <p className="text-gray-600">
                  Savourez l'authenticité de l'Afrique de l'Ouest avec le
                  Wassa-Wassa et nos beignets traditionnels.
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Placeholder for future country */}
          <motion.div
            variants={item}
            className="group block bg-gray-100 rounded-2xl overflow-hidden shadow border-2 border-dashed border-gray-300 relative opacity-60"
          >
            <div className="h-48 flex items-center justify-center bg-gray-200">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="text-4xl text-gray-400"
              >
                +
              </motion.span>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-500 mb-2">
                Bientôt...
              </h2>
              <p className="text-gray-400">
                De nouvelles destinations culinaires arrivent bientôt.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </PageTransition>
  );
}
