
# Dossier Public

Pour que les images s'affichent correctement sur Vercel et en production, veuillez déplacer votre dossier `assets` ici.

## Structure attendue :
Le chemin final de vos images doit correspondre à :
`[racine-du-projet]/public/assets/images/votre-image.png`

## Pourquoi ?
Vite copie automatiquement tout le contenu de ce dossier `public` à la racine du site lors de la construction (build).
Ainsi, une image située dans `public/assets/images/image.png` sera accessible via l'URL `/assets/images/image.png`, ce qui correspond exactement aux chemins actuellement utilisés dans votre code (ex: `data/menuData.ts`).
