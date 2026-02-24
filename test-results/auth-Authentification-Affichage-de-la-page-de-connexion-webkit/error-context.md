# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "Menus du Monde" [ref=e4]:
        - /url: /
        - generic [ref=e5]: Menus du Monde
      - generic [ref=e6]:
        - link "Accueil" [ref=e7]:
          - /url: /
          - text: Accueil
        - link "À propos" [ref=e8]:
          - /url: /about
          - text: À propos
        - link "Proposer une idée" [ref=e10]:
          - /url: /propose
  - generic [ref=e13]:
    - heading "Word Menu" [level=1] [ref=e14]
    - paragraph [ref=e15]: Connectez-vous pour accéder au site
    - generic [ref=e16]:
      - generic [ref=e17]:
        - generic [ref=e18]:
          - generic [ref=e19]: Adresse email
          - textbox "Adresse email" [ref=e20]:
            - /placeholder: votre@email.com
        - button "Se connecter" [ref=e21]
      - paragraph [ref=e22]: Si vous n'avez pas de compte, il sera créé automatiquement.
  - button "Open Next.js Dev Tools" [ref=e28] [cursor=pointer]:
    - img [ref=e29]
  - alert [ref=e34]
```