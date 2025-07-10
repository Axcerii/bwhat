

# Bwhat

**Bwhat** est un projet de box mensuelle visant à accompagner les jeunes générations dans leur déconnexion numérique. Conçu dans le cadre du projet de fin d’année *My Digital Project* à MyDigitalSchool Paris, Bwhat propose une expérience complète : un site e-commerce basé sur un système d’abonnement récurrent, couplé à une interface simple, accessible et respectueuse de la vie privée.

---

## 🚀 Fonctionnalités

* Création de compte utilisateur
* Authentification sécurisée (JWT, Bcrypt)
* Gestion complète de l’abonnement (Stripe)
* Historique des commandes
* Système multi-adresse pour les livraisons
* Interface d’administration simplifiée (en cours)
* Webhook Stripe pour gestion automatique des paiements
* RGPD friendly : consentement cookie, Matomo auto-hébergé

---

## 🛠️ Stack Technique

| Côté             | Technologie                         |
| ---------------- | ----------------------------------- |
| Framework        | [SvelteKit](https://kit.svelte.dev) |
| Langage          | TypeScript                          |
| Base de données  | MySQL + Prisma ORM                  |
| Paiement         | Stripe (abonnements + webhook)      |
| Authentification | JWT + Bcrypt                        |
| Analytics        | Matomo                              |
| Tests            | Vitest                              |
| Déploiement      | Railway                             |
| CI/CD            | GitHub Actions                      |

---

## 📦 Installation locale

### Prérequis

* Node.js 22+
* Docker & Docker Compose (facultatif mais recommandé)
* Un compte Stripe (pour tester les paiements si besoin)

### Clonage

```bash
git clone https://github.com/axcerii/bwhat
cd bwhat
```

### Fichiers de configuration

Créer un fichier `.env` à partir de `.envexample` :

```bash
cp .envexample .env
```

### Lancement en local

#### Sans Docker :

```bash
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

#### Avec Docker :

```bash
docker-compose up --build
```

---

## 🔍 Tests

Des tests unitaires ont été mis en place avec [Vitest](https://vitest.dev/) sur certaines fonctions utilitaires (notamment les RegEx de validation). Ils sont encore légers, mais posent les bases d’une validation automatique du code.

Pour lancer les tests :

```bash
npm run test
```

---

## ⚙️ Intégration continue

Une **pipeline GitHub Actions** est configurée pour :

* Installer les dépendances
* Générer Prisma
* Lancer les tests unitaires

Elle se déclenche automatiquement à chaque `push` ou `pull request`.

Extrait du fichier `.github/workflows/ci.yml` :

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 22
      - run: npm install
      - run: npx prisma generate
      - run: npm run test
```

## 📄 Licence

Ce projet est réalisé dans le cadre d’un projet pédagogique et n’est pas destiné à une exploitation commerciale à l’heure actuelle.