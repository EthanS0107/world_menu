# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "Menus du Monde" [ref=e4] [cursor=pointer]:
        - /url: /
        - generic [ref=e5]: Menus du Monde
      - generic [ref=e6]:
        - link "Accueil" [ref=e7] [cursor=pointer]:
          - /url: /
          - text: Accueil
        - link "À propos" [ref=e9] [cursor=pointer]:
          - /url: /about
          - text: À propos
        - link "Proposer une idée" [ref=e11] [cursor=pointer]:
          - /url: /propose
  - generic [ref=e14]:
    - heading "Word Menu" [level=1] [ref=e15]
    - paragraph [ref=e16]:
      - text: Découvrez les saveurs du monde entier.
      - text: Abonnez-vous pour accéder à nos menus exclusifs et nos propositions culinaires.
    - generic [ref=e18]:
      - heading "Commencez l'aventure" [level=3] [ref=e19]
      - paragraph [ref=e20]: Authentification simple par email.
      - link "Se connecter avec Email" [ref=e21] [cursor=pointer]:
        - /url: /auth/signin
      - paragraph [ref=e22]: Si vous n'avez pas de compte, il sera créé automatiquement.
  - button "Open Next.js Dev Tools" [ref=e28] [cursor=pointer]:
    - img [ref=e29]
  - alert [ref=e33]
```