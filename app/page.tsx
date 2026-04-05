import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import SubscribeButton from "./components/SubscribeButton";

const AUTH_DISABLED = true;

type LandingSession = {
  user: {
    id?: string;
    name?: string | null;
    email?: string | null;
    isActive?: boolean;
    isAdmin?: boolean;
  };
};

export default async function LandingPage() {
  const session: LandingSession | null = AUTH_DISABLED
    ? {
        user: {
          id: "guest-user",
          name: "Invité",
          email: "invite@worldmenu.local",
          isActive: true,
          isAdmin: false,
        },
      }
    : ((await getServerSession(authOptions)) as LandingSession | null);

  const isActive = !!session?.user?.isActive;
  const isAdmin = !!session?.user?.isAdmin;
  const isSubscribed = isActive || isAdmin;

  const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-5rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(200,164,94,0.35),_rgba(200,164,94,0)_70%)] blur-3xl" />
        <div className="absolute -bottom-40 left-[-6rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,_rgba(93,122,197,0.24),_rgba(93,122,197,0)_72%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_25%,transparent_75%,rgba(255,255,255,0.05))]" />
      </div>

      <div className="noise relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pt-14 pb-16 text-center lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Explorez les cuisines du monde
        </div>

        <h1 className="mb-6 font-display text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="gradient-text-white">World</span>{" "}
          <span className="gradient-text">Menu</span>
        </h1>

        <p className="mx-auto mb-12 mt-2 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Découvrez les saveurs du monde entier. Abonnez-vous pour accéder à nos
          menus exclusifs et nos propositions culinaires.
        </p>

        <div className="mb-10 flex items-center justify-center gap-6 text-3xl">
          <span className="cursor-default grayscale transition-all duration-300 hover:scale-125 hover:grayscale-0">
            🇫🇷
          </span>
          <span className="cursor-default grayscale transition-all duration-300 hover:scale-125 hover:grayscale-0">
            🇯🇵
          </span>
          <span className="cursor-default grayscale transition-all duration-300 hover:scale-125 hover:grayscale-0">
            🇲🇽
          </span>
          <span className="cursor-default grayscale transition-all duration-300 hover:scale-125 hover:grayscale-0">
            🇮🇹
          </span>
          <span className="cursor-default grayscale transition-all duration-300 hover:scale-125 hover:grayscale-0">
            🇮🇳
          </span>
          <span className="cursor-default grayscale transition-all duration-300 hover:scale-125 hover:grayscale-0">
            🇧🇯
          </span>
          <span className="cursor-default grayscale transition-all duration-300 hover:scale-125 hover:grayscale-0">
            🇸🇨
          </span>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 w-full">
          {!session ? (
            <div className="glass premium-shadow w-full max-w-sm rounded-3xl border border-white/10 p-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c8a45e]/30 bg-[#c8a45e]/12 text-[#e7d1a4]">
                <svg
                  className="h-7 w-7"
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

              <div className="mb-5 text-center">
                <h3 className="mb-1 font-display text-2xl text-white">
                  Commencez l&apos;aventure
                </h3>
                <p className="text-sm text-slate-300">
                  Créez votre compte en quelques secondes.
                </p>
              </div>

              <Link
                href="/auth/signin"
                className="w-full rounded-2xl bg-gradient-to-r from-[#a88a3e] via-[#c8a45e] to-[#dbb978] px-5 py-3.5 text-center text-sm font-bold text-[#171717] transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(200,164,94,0.35)]"
              >
                Se connecter avec Email
              </Link>

              <p className="mt-4 text-center text-xs text-slate-400">
                Pas encore de compte ? Il sera créé automatiquement.
              </p>
            </div>
          ) : (
            <div className="glass premium-shadow w-full max-w-md overflow-hidden rounded-3xl border border-white/10">
              <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-[#8c6f30] via-[#b8924a] to-[#d2b16f] px-8 py-6 text-[#171717]">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20" />
                <div className="absolute bottom-0 left-0 h-20 w-20 -translate-x-1/2 translate-y-1/2 rounded-full bg-white/20" />
                <div className="relative z-10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-black/10 text-xl font-bold">
                    {(
                      session.user.name?.[0] ||
                      session.user.email?.[0] ||
                      "U"
                    ).toUpperCase()}
                  </div>
                  <p className="text-lg font-bold text-[#101010]">
                    Bienvenue,{" "}
                    {session.user.name || session.user.email?.split("@")[0]} !
                  </p>
                  <p className="mt-1 break-all text-sm text-black/65">
                    {session.user.email}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <Link
                    href="/profile"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#d9bc85] transition-colors hover:text-[#f0d9a8]"
                  >
                    <svg
                      className="h-4 w-4"
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
                      className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
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
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      Abonné
                    </span>
                  )}
                </div>

                {!isSubscribed ? (
                  <div className="rounded-2xl border border-[#c8a45e]/25 bg-[#c8a45e]/10 p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8a45e] text-[#171717] shadow-[0_8px_24px_rgba(200,164,94,0.35)]">
                      <svg
                        className="h-6 w-6"
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
                    <p className="mb-1 text-sm text-slate-300">
                      Débloquez tous les menus
                    </p>
                    <p className="mb-1 text-3xl font-black text-white">
                      9.99€
                      <span className="text-base font-medium text-slate-400">
                        /mois
                      </span>
                    </p>
                    <p className="mb-5 text-xs text-slate-400">
                      Accès illimité à toutes les destinations
                    </p>
                    {STRIPE_PRICE_ID ? (
                      <SubscribeButton priceId={STRIPE_PRICE_ID} />
                    ) : (
                      <p className="text-xs text-red-300">
                        Erreur de configuration (ID Prix Stripe manquant)
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/12">
                      <svg
                        className="h-8 w-8 text-emerald-200"
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
                    <p className="mb-1 text-lg font-bold text-emerald-200">
                      Vous êtes abonné !
                    </p>
                    <p className="mb-6 text-sm text-slate-400">
                      Toutes les destinations sont débloquées.
                    </p>
                    <Link
                      href="/menu"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#a88a3e] via-[#c8a45e] to-[#dbb978] px-6 py-3.5 text-sm font-bold text-[#171717] transition-all duration-300 hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(200,164,94,0.35)]"
                    >
                      <svg
                        className="h-5 w-5"
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

                <div className="mt-6 border-t border-white/10 pt-5 text-center">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition-colors duration-200 hover:text-white"
                  >
                    <svg
                      className="h-3.5 w-3.5"
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
                    Continuer la visite
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
