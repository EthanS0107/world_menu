# CLAUDE.md - Guide complet pour coder sur World Menu avec Claude Code

## 1) Objectif

Ce fichier sert de reference pour Claude Code afin de:

- comprendre rapidement le projet
- faire des changements fiables sans casser l'existant
- respecter les conventions techniques et metier
- valider les changements avant livraison

Projet: SaaS Next.js pour menus premium par pays, avec auth email/password, abonnement Stripe, Prisma/PostgreSQL, tests E2E Playwright.

## 2) Stack et versions

- Framework: Next.js 16 (App Router)
- Langage: TypeScript
- UI: React 19, Tailwind CSS 4, Framer Motion
- Auth: NextAuth v4 (Credentials)
- DB/ORM: PostgreSQL + Prisma
- Paiement: Stripe
- Emails: Nodemailer
- Tests E2E: Playwright

## 3) Commandes utiles

## Installation

- npm install

## Developpement

- npm run dev

## Qualite

- npm run lint

## Build/production

- npm run build
- npm run start

## Prisma

- npx prisma generate
- npx prisma migrate deploy
- npx prisma db seed

## Tests E2E

- npx playwright install
- npx playwright test
- npx playwright test --ui

## 4) Variables d'environnement

Configurer un fichier .env a la racine.

Variables observees dans le code:

- DATABASE_URL
- DIRECT_URL
- NEXTAUTH_URL
- NEXTAUTH_SECRET
- STRIPE_SECRET_KEY
- STRIPE_WEBHOOK_SECRET
- STRIPE_PRICE_ID
- EMAIL_HOST
- EMAIL_PORT
- EMAIL_USER
- EMAIL_PASS
- EMAIL_FROM
- APP_URL
- VERCEL_PROJECT_PRODUCTION_URL (optionnel)
- VERCEL_URL (optionnel)

Notes:

- Sans STRIPE_SECRET_KEY, Stripe ne fonctionne pas au runtime.
- NEXTAUTH_URL est utilise pour les redirections success/cancel de checkout.
- APP_URL est prioritaire pour les liens emails (verification/reset).

## 5) Architecture du projet

## Routes/pages App Router

- app/page.tsx: page d'accueil
- app/about/page.tsx: page a propos
- app/menu/\*: pages menus par pays
- app/propose/page.tsx: proposition menu
- app/profile/\*: profil utilisateur
- app/auth/\*: signin, forgot-password, reset-password, verify-email

## API routes

- app/api/auth/[...nextauth]/route.ts
- app/api/auth/register/route.ts
- app/api/auth/forgot-password/route.ts
- app/api/auth/reset-password/route.ts
- app/api/auth/verify-email/route.ts
- app/api/profile/route.ts
- app/api/stripe/checkout-session/route.ts
- app/api/webhooks/stripe/route.ts

## Bibliotheques internes

- lib/auth.ts: config NextAuth + callbacks session/JWT
- lib/prisma.ts: client Prisma singleton
- lib/stripe.ts: client Stripe
- lib/email.ts: envoi email verification + reset

## 6) Regles metier importantes

- Connexion par credentials (email/password), avec verification email obligatoire.
- Subscription active determinee en pratique par presence de stripeSubscriptionId.
- Admin (isAdmin) passe les restrictions premium.
- Tokens email verification et reset sont stockes en DB, avec expiration.
- Mot de passe hash via bcryptjs.

## Point critique actuel

Des drapeaux AUTH_DISABLED sont presents et a true dans:

- middleware.ts
- app/api/stripe/checkout-session/route.ts
- app/api/profile/route.ts

Effet:

- middleware ne protege pas reellement /menu et /propose
- checkout Stripe renvoie 503
- update profil via API renvoie 503

Si l'objectif est de reactiver le flow complet, il faut planifier explicitement la remise en service de ces blocs.

## 7) Base de donnees (resume)

Modele principal User:

- identite: email, name, firstName, lastName
- securite: password, emailVerified
- profil: phone, city, country
- abonnement: stripeCustomerId, stripeSubscriptionId, stripePriceId, stripeCurrentPeriodEnd
- role: isAdmin

Autres modeles:

- Account, Session (NextAuth adapter)
- VerificationToken
- PasswordResetToken
- EmailVerificationToken

## 8) Conventions de code pour Claude Code

- TypeScript strict, eviter any.
- Faire des changements petits et cibles.
- Ne pas reformater des fichiers non lies a la tache.
- Preserver les APIs publiques existantes sauf demande explicite.
- Ajouter des logs d'erreur utiles cote serveur, sans exposer d'info sensible.
- Verifier les cas d'erreur des routes API (400/401/403/404/409/500).
- Toujours valider les inputs (body/query).

## Conventions Next.js

- Preferer Server Components par defaut.
- Utiliser "use client" uniquement si necessaire (etat local, hooks, events).
- Pour les routes API, retourner des reponses JSON coherentes.
- Garder la logique metier dans lib/ si elle est partagee.

## Conventions auth/securite

- Normaliser email: lowercase + trim.
- Ne jamais logguer mot de passe/token secrets.
- Pour forgot password: reponse neutre (ne pas reveler si email existe).
- Hash bcrypt obligatoire avant stockage.

## 9) Workflow recommande pour toute tache

1. Lire les fichiers impactes et confirmer les contraintes metier.
2. Faire le plus petit changement qui repond au besoin.
3. Lancer au minimum lint + scenario de verification pertinent.
4. Si impact auth/paiement, tester les erreurs et cas non connecte.
5. Documenter rapidement ce qui a ete change et pourquoi.

## 10) Definition of Done

Un changement est termine si:

- la fonctionnalite demandee marche
- npm run lint passe
- pas de regression evidente dans les zones impactees
- les erreurs API sont gerees proprement
- les variables env requises sont documentees si besoin

## 11) Playwright et tests

Couverture actuelle:

- authentification (page signin, echec/succes)
- abonnement (bouton, redirection Stripe, acces premium sans abo)

Quand toucher auth/stripe/menu:

- lancer npx playwright test
- au minimum executer les specs liees au perimetre modifie

## 12) Templates de prompt utiles pour Claude Code

## Implementer une feature

"Lis les fichiers concernes, propose un plan court, implemente la feature X avec changements minimaux, puis lance lint et donne un resume des edits."

## Corriger un bug

"Reproduis logiquement le bug Y a partir du code, identifie la cause racine, applique un correctif minimal, ajoute la validation necessaire, et verifie qu'il n'y a pas de regression evidente."

## Refactor securise

"Refactorise la zone Z sans changer le comportement externe. Preserve les signatures publiques, simplifie la structure interne, puis valide avec lint et tests pertinents."

## Audit route API

"Audit la route API X: validation des inputs, statuts HTTP, messages d'erreur, securite des logs, et coherence avec le modele Prisma. Propose puis applique les corrections necessaires."

## 13) Checklists rapides

## Avant de modifier auth

- verifier impact sur session callback JWT/session
- verifier emailVerified
- verifier handling des erreurs login

## Avant de modifier Stripe

- verifier STRIPE_SECRET_KEY/WEBHOOK secret
- verifier metadata userId
- verifier synchro stripeSubscriptionId en DB

## Avant de modifier middleware

- verifier matcher
- verifier logique non-connecte / non-abonne / admin
- verifier redirections UX

## 14) Erreurs frequentes a eviter

- Oublier de normaliser les emails
- Oublier de supprimer les tokens expires/usages
- Casser les routes en supposant session.user.id toujours present
- Changer la logique abonnement sans mettre a jour webhook et callbacks
- Oublier qu'AUTH_DISABLED est active dans plusieurs fichiers

## Skills disponibles

- `.claude/skills/react-style-master/SKILL.md` — Style React moderne, animations, design system
