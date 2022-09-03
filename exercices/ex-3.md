# Exercice 3 - Compréhension code React

Ouvrir les fichiers `components/list.tsx` & `utils/foo.tsx` puis analyser le code.

Déterminer le fonctionnement du code,
relever & corriger les problèmes,
optimiser & nettoyer ce qui peut l'être.
Le diable se cache dans les détails.

Mentionner les différents moyens de passer la donnée d'un composant à l'autre.

Réponse sur les manière de passer la donnée entre les composants :
Ici on fait du props drilling mais ça ne me choc car l'application est simple et qu'il n'y a qu'un composant enfant.

Une manière de partager la data entre les composant serait de passer par un context, ou d'utiliser Redux (mais derrière c'est du context donc techniquement parlant il n'y a que le context comme solution)
