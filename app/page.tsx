import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import SubscribeButton from "./components/SubscribeButton";

export default async function LandingPage() {
  const session: any = await getServerSession(authOptions);

  const isActive = !!session?.user?.isActive;
  const isAdmin = !!session?.user?.isAdmin;
  const isSubscribed = isActive || isAdmin;

  const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-teal-50 to-blue-50 rounded-full opacity-30 blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 pt-14 lg:px-8 max-w-3xl text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200/50 rounded-full text-sm text-blue-700 font-medium mb-8 shadow-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Explorez les cuisines du monde
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6">
          <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Word
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
            Menu
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg sm:text-xl leading-relaxed text-gray-500 mb-12 max-w-xl mx-auto">
          Découvrez les saveurs du monde entier. Abonnez-vous pour accéder à nos
          menus exclusifs et nos propositions culinaires.
        </p>

        {/* Decorative icons row */}
        <div className="flex items-center justify-center gap-6 mb-10 text-3xl">
          <span className="grayscale hover:grayscale-0 transition-all duration-300 cursor-default hover:scale-125">
            🇫🇷
          </span>
          <span className="grayscale hover:grayscale-0 transition-all duration-300 cursor-default hover:scale-125">
            🇯🇵
          </span>
          <span className="grayscale hover:grayscale-0 transition-all duration-300 cursor-default hover:scale-125">
            🇲🇽
          </span>
          <span className="grayscale hover:grayscale-0 transition-all duration-300 cursor-default hover:scale-125">
            🇮🇹
          </span>
          <span className="grayscale hover:grayscale-0 transition-all duration-300 cursor-default hover:scale-125">
            🇮🇳
          </span>
          <span className="grayscale hover:grayscale-0 transition-all duration-300 cursor-default hover:scale-125">
            🇧🇯
          </span>
          <span className="grayscale hover:grayscale-0 transition-all duration-300 cursor-default hover:scale-125">
            🇸🇨
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 w-full">
          {!session ? (
            /* ─── Not logged in ─── */
            <div className="w-full max-w-sm bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-white/80 flex flex-col gap-5">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/30">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Commencez l&apos;aventure
                </h3>
                <p className="text-sm text-gray-500">
                  Créez votre compte en quelques secondes.
                </p>
              </div>

              <Link
                href="/auth/signin"
                className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-blue-500 text-center transition-all duration-300"
              >
                Se connecter avec Email
              </Link>

              <p className="text-xs text-gray-400 text-center">
                Pas encore de compte ? Il sera créé automatiquement.
              </p>
            </div>
          ) : (
            /* ─── Logged in ─── */
            <div className="w-full max-w-md bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 border border-white/80 overflow-hidden">
              {/* User header banner */}
              <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-xl font-bold mb-3 border border-white/30">
                    {(
                      session.user.name?.[0] ||
                      session.user.email?.[0] ||
                      "U"
                    ).toUpperCase()}
                  </div>
                  <p className="text-lg font-bold">
                    Bienvenue,{" "}
                    {session.user.name || session.user.email?.split("@")[0]} !
                  </p>
                  <p className="text-sm text-white/70 mt-1 break-all">
                    {session.user.email}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Link
                    href="/profile"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors group"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Mon profil
                    <svg
                      className="w-3 h-3 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  {isSubscribed && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-full">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      Abonné
                    </span>
                  )}
                </div>

                {!isSubscribed ? (
                  /* Subscription CTA */
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/60 rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">
                      Débloquez tous les menus
                    </p>
                    <p className="text-3xl font-black text-gray-900 mb-1">
                      9.99€
                      <span className="text-base font-medium text-gray-400">
                        /mois
                      </span>
                    </p>
                    <p className="text-xs text-gray-400 mb-5">
                      Accès illimité à toutes les destinations
                    </p>
                    {STRIPE_PRICE_ID ? (
                      <SubscribeButton priceId={STRIPE_PRICE_ID} />
                    ) : (
                      <p className="text-red-500 text-xs">
                        Erreur de configuration (ID Prix Stripe manquant)
                      </p>
                    )}
                  </div>
                ) : (
                  /* Subscribed — access menu */
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <p className="text-emerald-700 font-bold text-lg mb-1">
                      Vous êtes abonné !
                    </p>
                    <p className="text-sm text-gray-400 mb-6">
                      Toutes les destinations sont débloquées.
                    </p>
                    <Link
                      href="/menu"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:from-emerald-400 hover:to-green-400 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                        />
                      </svg>
                      Accéder au Menu
                    </Link>
                  </div>
                )}

                <div className="mt-6 pt-5 border-t border-gray-100 text-center">
                  <Link
                    href="/api/auth/signout"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-500 transition-colors duration-200"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    Se déconnecter
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
