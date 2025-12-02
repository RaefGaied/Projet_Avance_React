# Projet MERN - Gestion de Cours avec Authentification

**Échéance**: Avant 00:00 aujourd'hui  
**Matière**: Cours MERN - Semaine 9  
**Professeurs**: Abdelweheb GUEDDES & Mohamed Ben Jazia  
**École**: Ecole Polytechnique Sousse

---

## 📋 Contenu du Projet

### Fonctionnalités Implémentées

#### Frontend (React)
- ✅ Système d'authentification complet (Inscription/Connexion)
- ✅ Gestion des cours avec pagination
- ✅ Système de reviews et évaluations
- ✅ Profil utilisateur avec édition
- ✅ Page "Mes Reviews" personnalisée
- ✅ Barre de recherche pour les cours
- ✅ Gestion des erreurs et page 404

#### Backend (Node.js/Express)
- ✅ API RESTful sécurisée
- ✅ Authentification JWT
- ✅ Validation des données
- ✅ Gestion des fichiers (images de profil)
- ✅ Sécurité renforcée (helmet, rate limiting)

---

## 🚀 Fonctionnalités à Implémenter

1. **Page "Mes Reviews"**
   - Liste complète des critiques de l'utilisateur connecté
   - Fonctionnalité de tri et de filtrage
   - ![Capture d'écran Mes Reviews](/screenshots/my-reviews.png)

2. **Formulaire d'ajout de review**
   - Depuis la page des détails d'un cours
   - Notation par étoiles
   - Champ de texte pour le commentaire
   - ![Capture d'écran Formulaire Review](/screenshots/add-review.png)

3. **Édition du profil**
   - Mise à jour de la bio
   - Lien vers le site web personnel
   - Téléchargement de photo de profil
   - ![Capture d'écran Édition Profil](/screenshots/edit-profile.png)

4. **Pagination des cours**
   - Affichage de 10 cours par page
   - Navigation entre les pages
   - Compteur de résultats
   - ![Capture d'écran Pagination](/screenshots/pagination.png)

5. **Recherche de cours**
   - Barre de recherche en temps réel
   - Filtrage par titre et catégorie
   - ![Capture d'écran Recherche](/screenshots/search.png)

6. **Page 404**
   - Design convivial pour les pages non trouvées
   - Lien de retour à l'accueil
   - ![Capture d'écran 404](/screenshots/not-found.png)

---

## Installation

1. Cloner le dépôt
```bash
git clone https://github.com/RaefGaied/Projet_Avance_React.git
cd Projet_Avance_React
```

2. Installer les dépendances (frontend & backend)
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. Configurer les variables d'environnement
```bash
# Créer un fichier .env dans le dossier backend
cp .env.example .env
# Puis éditer les valeurs selon votre configuration
```

4. Démarrer les serveurs
```bash
# Backend (depuis le dossier backend)
npm run dev

# Frontend (depuis le dossier frontend)
npm run dev
```

---

## Points Clés d'Implémentation

### React Router
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/profile" element={<Profile />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### Authentification JWT
```javascript
// Backend - Middleware d'authentification
const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Accès non autorisé' });
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token invalide' });
  }
};
```

### Sécurité
- Mots de passe hashés avec bcrypt
- JWT avec expiration
- Protection contre les attaques XSS et CSRF
- Rate limiting
- Refresh tokens

---

## Ressources Utiles

- Documentation React Router
- JWT Official Documentation
- Axios Documentation
- Bcrypt.js
- MongoDB Atlas

---

## Notes d'Implémentation

### 5 Points Importants à Retenir

1. **React Router**
   - `<BrowserRouter>` entoure toute l'application
   - `<Routes>` et `<Route>` définissent les chemins
   - `<Link>` pour la navigation (remplace `<a>`)
   - `useNavigate()` pour redirection programmatique
   - `useParams()` pour récupérer les paramètres d'URL

2. **JWT et Authentification**
   - Token stocké dans localStorage
   - Envoyé dans le header `Authorization: Bearer TOKEN`
   - Middleware backend pour vérifier le token
   - Context React pour partager l'état d'authentification
   - Routes protégées redirigent vers /login si non connecté

3. **Sécurité**
   - Ne JAMAIS stocker de données sensibles dans le token
   - Hasher les mots de passe avec bcrypt
   - Utiliser HTTPS en production
   - Définir une date d'expiration au token
   - Utiliser des secrets forts pour JWT_SECRET

---

## Évaluation

Ce travail compte pour 30% de la note finale du module.

### Critères d'évaluation :
- **Fonctionnalités implémentées** (40%)
- **Qualité du code** (30%)
- **Sécurité** (20%)
- **Documentation** (10%)

---

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## Installation et Démarrage

### Backend

```bash
# 1. Naviguer dans le dossier backend
cd backend

# 2. Installer les dépendances
npm install

# 3. Créer le fichier .env
cp .env.example .env

# 4. Modifier .env avec vos valeurs
# - MongoDB URI
# - JWT_SECRET (générer une clé secrète)
# - PORT (par défaut 5000)

# 5. Démarrer le serveur
npm run dev
# Serveur disponible à: http://localhost:5000
```

### Frontend

```bash
# 1. Naviguer dans le dossier frontend
cd frontend

# 2. Installer les dépendances
npm install

# 3. Démarrer l'application React
npm run dev
# Application disponible à: http://localhost:5173
```

---

## Captures d'Écran des Pages

### 1. Page d'Accueil (Home)

**URL**: `http://localhost:5173/`

**Description**: 
- Affiche les fonctionnalités principales
- Boutons CTA pour "Se connecter" ou "Voir les cours"
- Accessible à tous (non authentifié)

**Capture d'écran à insérer ici**
[Insérer screenshot: Home page]
[Avec: Logo, description, boutons CTA]

---

### 2. Page d'Inscription (Register)

**URL**: `http://localhost:5173/register`

**Description**:
- Formulaire avec 3 champs: Username, Email, Password
- Validation des données
- Message de succès ou erreur
- Lien vers la page de connexion
- Création automatique du JWT après inscription

**Champs**:
- `username`: Nom d'utilisateur (unique)
- `email`: Email (unique, format valide)
- `password`: Mot de passe (min 6 caractères)

**Capture d'écran à insérer ici**
[Insérer screenshot: Register form]
[Avec: Formulaire, boutons, messages d'erreur/succès]

**Résultat attendu**:
- Utilisateur créé en base de données
- JWT retourné et stocké en localStorage
- Redirection automatique vers `/courses`

---

### 3. Page de Connexion (Login)

**URL**: `http://localhost:5173/login`

**Description**:
- Formulaire avec 2 champs: Email, Password
- Validation des identifiants
- Message de succès ou erreur
- Lien vers la page d'inscription

**Champs**:
- `email`: Email enregistré
- `password`: Mot de passe associé

**Capture d'écran à insérer ici**
[Insérer screenshot: Login form]
[Avec: Formulaire, boutons, messages]

**Résultat attendu**:
- Utilisateur identifié
- JWT retourné et stocké en localStorage
- Redirection automatique vers `/courses`

---

### 4. Page des Cours (Courses)

**URL**: `http://localhost:5173/courses`

**Description**:
- Liste complète des cours disponibles
- Affichage en grille (3 colonnes)
- **Pagination**: 10 cours par page
- **Barre de recherche**: Filtrer les cours par titre
- Clic sur un cours → Page de détails
- Accessible à tous (pas d'authentification requise)

**Fonctionnalités**:

1. **Barre de recherche**
   - Champ de texte pour chercher par titre
   - Recherche en temps réel
   - Réinitialiser la pagination lors de la recherche

2. **Pagination**
   - Boutons "Précédent" et "Suivant"
   - Affichage: "Page X de Y"
   - 10 cours par page
   - Désactiver les boutons si pas de page précédente/suivante

3. **Affichage des cours**
   - Carte avec:
     - Image du cours
     - Titre
     - Description (première 100 caractères)
     - Nombre de reviews
     - Bouton "Voir les détails"

**Capture d'écran à insérer ici**
[Insérer screenshot: Courses page]
[Avec: Barre de recherche, grille de cours, pagination]

---

### 5. Page Détails d'un Cours (CourseDetails)

**URL**: `http://localhost:5173/courses/:id`

**Description**:
- Affiche les détails complets du cours
- **Route protégée**: Accessible seulement si authentifié
- Formulaire pour ajouter une review (si utilisateur inscrit)
- Liste des reviews existantes
- Bouton d'inscription au cours

**Éléments**:

1. **Informations du cours**
   - Titre
   - Description complète
   - Instructeur
   - Image du cours
   - Nombre d'étudiants

2. **Formulaire de Review (si authentifié)**
   - Étoiles (1-5) pour la notation
   - Textarea pour le commentaire
   - Bouton "Soumettre la Review"
   - Validation: Au moins 1 étoile et commentaire requis

3. **Liste des Reviews**
   - Affichage des reviews existantes
   - Montrer: Nom utilisateur, rating, commentaire, date
   - Tri par date décroissante (plus récentes en premier)

**Capture d'écran à insérer ici**
[Insérer screenshot: Course details page]
[Avec: Informations du cours, formulaire de review, liste des reviews]

**Résultat attendu**:
- Review ajoutée à la base de données
- Affichée immédiatement dans la liste
- Message de confirmation

---

### 6. Page de Profil (Profile)

**URL**: `http://localhost:5173/profile`

**Description**:
- Affiche les informations de l'utilisateur connecté
- **Route protégée**: Accessible seulement si authentifié
- Affiche:
  - Username
  - Email
  - Bio (si remplie)
  - Website (si rempli)
  - Liste des cours suivis
- Bouton "Éditer le profil"
- Bouton "Déconnexion"

**Informations affichées**:
- Profil utilisateur (username, email)
- Bio et website (optionnels)
- Nombre de cours suivis
- Liste des cours enregistrés

**Capture d'écran à insérer ici**
[Insérer screenshot: Profile page]
[Avec: Informations utilisateur, liste des cours, boutons]

---

### 7. Page Édition du Profil (EditProfile)

**URL**: `http://localhost:5173/profile/edit`

**Description**:
- **Route protégée**: Accessible seulement si authentifié
- Formulaire pour modifier:
  - Bio (textarea, max 500 caractères)
  - Website (input URL)
- Compteur de caractères pour la bio
- Boutons "Sauvegarder" et "Annuler"

**Champs**:
- `bio`: Texte libre (max 500 caractères) - **Compteur en temps réel**
- `website`: URL (format URL valide)

**Capture d'écran à insérer ici**
[Insérer screenshot: Edit profile form]
[Avec: Formulaire, compteur de caractères, boutons]

**Résultat attendu**:
- Profil mis à jour en base de données
- Message de confirmation
- Redirection vers `/profile`

---

### 8. Page Mes Reviews (MyReviews)

**URL**: `http://localhost:5173/my-reviews`

**Description**:
- **Route protégée**: Accessible seulement si authentifié
- Affiche toutes les reviews écrites par l'utilisateur
- Affiche:
  - Titre du cours
  - Rating (étoiles)
  - Commentaire
  - Date de création
  - Bouton "Supprimer" pour chaque review

**Affichage**:
- Liste ou grille des reviews
- Tri par date décroissante (plus récentes en premier)
- Si aucune review: Message "Vous n'avez pas encore écrit de reviews"

**Capture d'écran à insérer ici**
[Insérer screenshot: My reviews page]
[Avec: Liste des reviews, boutons de suppression]

---

### 9. Page 404 (NotFound)

**URL**: `http://localhost:5173/any-invalid-page`

**Description**:
- Affichée pour toute route non trouvée
- Message 404
- Bouton pour retourner à l'accueil
- Lien vers la liste des cours

**Capture d'écran à insérer ici**
[Insérer screenshot: 404 page]
[Avec: Message d'erreur, liens de navigation]

---

### 10. Navbar (Navigation)

**Barre de navigation** - Visible sur toutes les pages

**Si non authentifié**:
- Logo/Titre du site
- Lien "Accueil"
- Lien "Cours"
- Bouton "Connexion"
- Bouton "Inscription"

**Si authentifié**:
- Logo/Titre du site
- Lien "Accueil"
- Lien "Cours"
- Dropdown menu avec:
  - "Mon Profil"
  - "Mes Reviews"
  - "Éditer le Profil"
  - Séparateur
  - "Déconnexion"

**Capture d'écran à insérer ici**
[Insérer screenshot: Navbar - Non authentifié]
[Insérer screenshot: Navbar - Authentifié avec dropdown]

---

## Points Importants à Démontrer

### 1. Authentification JWT

Tester:
- Créer un nouvel utilisateur (Register)
- Se connecter (Login)
- Vérifier que le token est stocké en localStorage (DevTools → Storage → localStorage)
- Token format: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

**Capture d'écran à insérer ici**
[DevTools montrant le token dans localStorage]

### 2. Routes Protégées

Tester:
- Sans authentification: Accéder à `/profile` redirige vers `/login`
- Avec authentification: `/profile` affiche les données de l'utilisateur
- Même chose pour `/my-reviews`, `/profile/edit`

**Capture d'écran à insérer ici**
[Redirection de /profile vers /login - non authentifié]
[/profile accessible - authentifié]

### 3. Pagination et Recherche

Tester:
- Liste des cours affiche max 10 par page
- Boutons Précédent/Suivant fonctionnels
- Barre de recherche filtre par titre
- Après recherche, retour à page 1

**Capture d'écran à insérer ici**
[Page 1 des cours]
[Page 2 des cours]
[Résultats de recherche]

### 4. Formulaire de Review

Tester:
- Ajouter une review sur un cours
- Review visible immédiatement
- Liste complète des reviews dans "Mes Reviews"
- Notation avec étoiles fonctionne

**Capture d'écran à insérer ici**
[Formulaire de review vide]
[Review soumise et affichée]
[Page "Mes Reviews" avec la nouvelle review]

### 5. Édition du Profil

Tester:
- Modifier la bio (avec compteur de caractères)
- Modifier le website
- Sauvegarder et voir les changements dans `/profile`

**Capture d'écran à insérer ici**
[Formulaire d'édition du profil]
[Compteur de caractères]
[Profil mis à jour]

---

## Variables d'Environnement

### Backend (.env)

Créer un fichier `.env` à la racine du backend:

```env
# Serveur
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/eduplatform

# JWT
JWT_SECRET=votre_secret_super_securise_ici_changez_le

# CORS
CORS_ORIGIN=http://localhost:5173
```
\`\`\`

### Frontend (.env)

Généralement pas nécessaire pour cette app, mais si besoin:

\`\`\`env
VITE_API_URL=http://localhost:5000/api
\`\`\`

---

## Architecture et Flux de Données

### 1. Flux d'Inscription

\`\`\`
Utilisateur → Register form → POST /api/auth/register
→ Backend: Hash password, create user, generate JWT
→ Retour: { token, user }
→ Frontend: localStorage.setItem('token', token)
→ AuthContext mise à jour
→ Redirection vers /courses
\`\`\`

### 2. Flux de Connexion

\`\`\`
Utilisateur → Login form → POST /api/auth/login
→ Backend: Vérifier password, generate JWT
→ Retour: { token, user }
→ Frontend: localStorage.setItem('token', token)
→ AuthContext mise à jour
→ Redirection vers /courses
\`\`\`

### 3. Flux d'Accès à Route Protégée

\`\`\`
Utilisateur → Clique sur /profile
→ ProtectedRoute: Vérifie if (token && isAuthenticated)
  → Si non: Redirige vers /login
  → Si oui: Affiche Profile component
→ Profile fait GET /api/user/profile
→ Axios interceptor ajoute: Authorization: Bearer <token>
→ Backend middleware: Valide JWT, extrait userId
→ Route retourne les données utilisateur
→ Frontend affiche le profil
\`\`\`

### 4. Flux d'Ajout de Review

\`\`\`
Utilisateur → CourseDetails → Remplit le formulaire
→ POST /api/reviews (avec authorization header)
→ Backend: Valide JWT, récupère userId
→ Crée la review en DB avec userId et courseId
→ Retour: { review }
→ Frontend: Affiche la review immédiatement
→ Ajoute à la liste des reviews
\`\`\`

---

## Technologies Utilisées

| Catégorie | Technologie |
|-----------|------------|
| **Frontend** | React 18, TypeScript, React Router v6 |
| **Authentification** | JWT (JSON Web Token), Axios Interceptors |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Sécurité** | bcryptjs (password hashing), jsonwebtoken |
| **Styling** | CSS3, CSS Modules |
| **HTTP Client** | Axios |

---

## Critères de Notation

### Code Frontend (40%)
- ✅ React Router configuration correcte
- ✅ AuthContext implémenté et utilisé
- ✅ ProtectedRoute fonctionne correctement
- ✅ Pages créées et routage correct
- ✅ Formulaires avec validation
- ✅ Gestion des erreurs et états de chargement

### Authentification JWT (30%)
- ✅ Token généré et stocké
- ✅ Token envoyé en header Authorization
- ✅ Routes protégées fonctionnelles
- ✅ Logout supprime le token
- ✅ Persévérance du token au rechargement

### Backend (20%)
- ✅ Routes auth implémentées (/login, /register)
- ✅ Middleware de protection appliqué
- ✅ JWT validation correcte
- ✅ Password hashing avec bcrypt

### Documentation (10%)
- ✅ README complet
- ✅ Captures d'écran des pages
- ✅ .env.example fourni
- ✅ Instructions de démarrage claires

---

## Remise du Livrable

Créer un fichier ZIP contenant:

\`\`\`
livrable-mern-week9/
├── frontend/                    # Code React complet
├── backend/                     # Code Express complet
├── README.md                    # Instructions de démarrage
├── JWT_AUTH_GUIDE.md           # Guide complet JWT
├── LIVRABLE_README.md          # Ce fichier (avec screenshots)
└── screenshots/                 # Dossier avec toutes les captures
    ├── 01-home.png
    ├── 02-register.png
    ├── 03-login.png
    ├── 04-courses-page1.png
    ├── 05-courses-page2.png
    ├── 06-courses-search.png
    ├── 07-course-details.png
    ├── 08-add-review.png
    ├── 09-my-reviews.png
    ├── 10-profile.png
    ├── 11-edit-profile.png
    ├── 12-not-found.png
    ├── 13-navbar-logged-out.png
    └── 14-navbar-logged-in.png
\`\`\`

---

## Checklist de Remise

Avant de soumettre, vérifier:

- [ ] Code frontend complet et fonctionnel
- [ ] Code backend avec authentification JWT
- [ ] Routes protégées implémentées
- [ ] Pagination fonctionnelle (10 cours/page)
- [ ] Recherche de cours fonctionnelle
- [ ] Formulaire de review implémenté
- [ ] Page "Mes Reviews" affiche toutes les reviews
- [ ] Édition du profil fonctionnelle
- [ ] Page 404 présente
- [ ] Navbar avec dropdown menu
- [ ] Toutes les captures d'écran insérées
- [ ] README.md avec instructions claires
- [ ] JWT_AUTH_GUIDE.md complet
- [ ] Fichier .env.example fourni
- [ ] Application testée et sans erreurs

---

**Deadline**: Avant 00:00 aujourd'hui

**Bonne chance!**
