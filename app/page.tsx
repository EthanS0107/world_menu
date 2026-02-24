import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import SubscribeButton from "./components/SubscribeButton";

export default async function LandingPage() {
  const session: any = await getServerSession(authOptions);

  const isActive = !!session?.user?.isActive;
  const isSubscribed = isActive;

  const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 max-w-2xl text-center w-full">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Word Menu
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 mb-10">
          Découvrez les saveurs du monde entier.
          <br />
          Abonnez-vous pour accéder à nos menus exclusifs et nos propositions
          culinaires.
        </p>

        <div className="flex flex-col items-center justify-center gap-6 w-full">
          {!session ? (
            <div className="w-full max-w-sm bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Commencez l'aventure
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Authentification simple par email.
              </p>

              <Link
                href="/auth/signin"
                className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 text-center transition-all"
              >
                Se connecter avec Email
              </Link>

              <p className="text-xs text-gray-400 text-center mt-2">
                Si vous n'avez pas de compte, il sera créé automatiquement.
              </p>
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 w-full max-w-md">
              <p className="text-lg font-medium text-gray-900 mb-2">
                Bienvenue !
              </p>
              <p className="text-sm text-gray-500 mb-6 break-all font-mono bg-gray-200 p-1 rounded inline-block">
                {session.user.email}
              </p>

              {!isSubscribed ? (
                <div className="mt-4 border-t pt-4">
                  <p className="text-sm text-gray-500 mb-4">
                    Abonnement requis :{" "}
                    <span className="font-bold text-gray-900">6€/mois</span>
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
                <div className="mt-4 flex flex-col items-center border-t pt-4">
                  <p className="text-green-600 font-semibold mb-4 flex items-center gap-2">
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
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Vous êtes abonné.
                  </p>
                  <Link
                    href="/menu"
                    className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition-colors w-full text-center"
                  >
                    Accéder au Menu
                  </Link>
                </div>
              )}

              <div className="mt-6 border-t pt-4 text-center">
                <Link
                  href="/api/auth/signout"
                  className="text-xs text-gray-400 hover:text-gray-600 underline"
                >
                  Se déconnecter
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
