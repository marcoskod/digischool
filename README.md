# DigiSchool - Plateforme de Cours en Ligne

## 📚 Vue d'Ensemble

DigiSchool est une plateforme de cours en ligne moderne et évolutive, conçue pour offrir une expérience d'apprentissage interactive et engageante.

## 📋 Documentation

- **[Feuille de Route Technique (FR)](TECHNICAL_ROADMAP.md)** - Documentation détaillée en français
- **[Technical Roadmap (EN)](TECHNICAL_ROADMAP_EN.md)** - Detailed documentation in English

## 🚀 Caractéristiques Principales

- 🎥 Lecture vidéo optimisée avec lecteur intégré
- 📊 Suivi de progression en temps réel
- 💳 Système de paiement sécurisé
- 📱 Applications web et mobile
- 🎓 Certificats et badges de complétion
- 💬 Forum et système de messagerie
- 📈 Analytics et tableaux de bord

## 🏗️ Architecture

La plateforme utilise une architecture microservices moderne:
- **Frontend**: React 18+ avec TypeScript (Vite)
- **Backend**: NestJS (Node.js) avec TypeScript
- **Base de données**: PostgreSQL 15+
- **Cache**: Redis 7+
- **Stockage**: AWS S3 ou MinIO
- **Infrastructure**: Docker + Kubernetes

## 📖 Démarrage Rapide

### Prérequis

- Node.js 20+ LTS
- Docker et Docker Compose
- npm 9+

### Installation avec Docker (Recommandé)

1. **Cloner le repository**
   ```bash
   git clone https://github.com/marcoskod/digischool.git
   cd digischool
   ```

2. **Configurer les variables d'environnement**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   
   # Frontend
   cp frontend/.env.example frontend/.env
   ```

3. **Lancer l'application avec Docker Compose**
   ```bash
   docker-compose up --build
   ```

4. **Accéder à l'application**
   - Frontend: http://localhost:3001
   - Backend API: http://localhost:3000/api
   - PostgreSQL: localhost:5432
   - Redis: localhost:6379

### Installation Manuelle

#### Backend

```bash
cd backend
npm install
npm run start:dev
```

Le backend sera disponible sur http://localhost:3000/api

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

Le frontend sera disponible sur http://localhost:3001

### Base de données

La base de données PostgreSQL est automatiquement configurée avec Docker Compose. Les migrations sont appliquées automatiquement au démarrage en mode développement.

## 🧪 Tests

```bash
# Tests backend
cd backend
npm test

# Tests e2e backend
npm run test:e2e

# Tests frontend
cd frontend
npm test
```

## 📚 API Documentation

Une fois le backend lancé, la documentation Swagger est disponible sur:
http://localhost:3000/api/docs

## 🔐 Authentification

L'application utilise JWT pour l'authentification:

### Endpoints disponibles:

- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/users` - Liste des utilisateurs (protégé)
- `GET /api/users/:id` - Détails utilisateur (protégé)

### Exemple d'utilisation:

```bash
# Inscription
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }'

# Connexion
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

## 🛠️ Scripts Disponibles

### Root

- `npm run dev` - Lance tous les services avec Docker Compose
- `npm run dev:build` - Rebuild et lance tous les services
- `npm run down` - Arrête tous les services
- `npm run clean` - Arrête et supprime les volumes

### Backend

- `npm run start:dev` - Lance le serveur en mode développement
- `npm run build` - Compile le projet
- `npm run test` - Lance les tests
- `npm run lint` - Vérifie le code avec ESLint

### Frontend

- `npm run dev` - Lance le serveur de développement Vite
- `npm run build` - Compile pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 📂 Structure du Projet

```
digischool/
├── backend/                 # API NestJS
│   ├── src/
│   │   ├── auth/           # Module d'authentification
│   │   ├── users/          # Module utilisateurs
│   │   └── main.ts         # Point d'entrée
│   ├── .env                # Variables d'environnement
│   └── Dockerfile          # Configuration Docker
│
├── frontend/               # Application React
│   ├── src/
│   │   ├── api/           # Services API
│   │   ├── components/    # Composants réutilisables
│   │   ├── contexts/      # Contextes React
│   │   ├── pages/         # Pages de l'application
│   │   └── App.tsx        # Composant principal
│   ├── .env               # Variables d'environnement
│   └── Dockerfile         # Configuration Docker
│
├── docker-compose.yml      # Configuration Docker Compose
├── TECHNICAL_ROADMAP.md   # Feuille de route technique (FR)
└── TECHNICAL_ROADMAP_EN.md # Feuille de route technique (EN)
```

## 🎯 Progression du Développement

Consultez la [Feuille de Route Technique](TECHNICAL_ROADMAP.md) pour voir la progression complète.

### ✅ Phase 1 - Sprint 1-2 (En cours)
- [x] Infrastructure et configuration Docker
- [x] Backend NestJS avec authentification
- [x] Frontend React avec pages de connexion/inscription
- [x] Base de données PostgreSQL
- [ ] Tests d'intégration
- [ ] Documentation API Swagger

### 🔜 Prochaines Étapes
- Gestion des cours
- Upload et streaming vidéo
- Interface d'administration
- Suivi de progression

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez consulter la feuille de route technique pour comprendre l'architecture et les phases de développement.

## 📄 License

À définir

---

**Version**: 1.0  
**Date**: Novembre 2025