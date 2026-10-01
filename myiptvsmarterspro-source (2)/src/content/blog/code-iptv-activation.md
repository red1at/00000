---
title: "Où trouver votre code IPTV et comment l'activer ?"
seoTitle: "Code IPTV : où le trouver et comment l'activer | guide 2026"
description: "Le code IPTV en 2026 : où le trouver dans votre e-mail, le format Xtream Codes, l'activation pas à pas sur chaque appareil et la conversion d'un lien M3U."
image: /images/a-code.png
imageAlt: "Code IPTV et identifiants Xtream Codes pour activer l'abonnement"
pubDate: 2026-07-02
updatedDate: 2026-09-12
directAnswer: "Votre code IPTV se trouve dans l'e-mail de confirmation envoyé quelques minutes après votre commande : il comprend l'URL du serveur, votre identifiant et votre mot de passe Xtream Codes. Pour l'activer, ouvrez IPTV Smarters Pro, choisissez « Login with Xtream Codes API » et collez ces trois informations."
related: ["meilleur-abonnement-iptv-france", "iptv-smarters-pro-vs-tivimate"]
keywords: ["iptv code", "iptv smarters pro", "abonnement iptv"]
faq:
  - q: "Qu'est-ce qu'un code IPTV exactement ?"
    a: "Un code IPTV est l'ensemble des identifiants qui connectent une application lecteur à votre abonnement : l'URL du serveur, un identifiant et un mot de passe (format Xtream Codes), ou un lien de playlist M3U."
  - q: "Combien de temps prend la réception du code IPTV ?"
    a: "Quelques minutes après le paiement, 24h/24 : l'e-mail contient les identifiants, les guides d'installation et les liens de configuration pour chaque appareil."
  - q: "Un code IPTV fonctionne sur plusieurs appareils ?"
    a: "Oui : le même code s'active sur Smart TV, Fire Stick, Android, iPhone et PC. Un seul appareil lit à la fois : fermez l'application sur un appareil avant de l'ouvrir sur un autre."
  - q: "Que faire si le code IPTV est refusé à la connexion ?"
    a: "Vérifiez l'URL du serveur (sans /get.php ni barre oblique finale), l'absence d'espace en fin de champ et le respect des majuscules. Le guide IPTV Smarters Pro ne fonctionne pas détaille les 12 vérifications."
---

## Le code IPTV : votre clé unique

**Le code IPTV est l'ensemble des trois identifiants qui relient l'application IPTV Smarters Pro à votre abonnement : URL du serveur, identifiant et mot de passe.** Sans lui, l'application reste un lecteur vide ; avec lui, +20 000 chaînes et 100 000 films et séries s'ouvrent sur tous vos écrans.

Ce guide vous montre où trouver chaque information, comment l'activer appareil par appareil, et comment convertir un lien M3U en code Xtream.

## Où se trouve votre code IPTV ?

**Votre code IPTV arrive par e-mail, quelques minutes après la commande de votre [abonnement IPTV](/iptv-france/).** L'e-mail de confirmation contient systématiquement :

| Information | Format | Exemple |
|---|---|---|
| **URL du serveur** | `http://adresse:port` | `http://serveur.exemple.tv:8080` |
| **Identifiant** | Chaîne alphanumérique | `user1234` |
| **Mot de passe** | Chaîne sensible aux majuscules | `Mot2Passe!` |
| Guides d'installation | Liens par appareil | Fire Stick, Smart TV, PC… |
| Lien M3U (option) | `…/get.php?username=…&password=…` | Playlist complète |

Conseil : **enregistrez cet e-mail** — il vous resservira à chaque nouvel appareil et à chaque renouvellement. En cas d'e-mail introuvable, vérifiez les spams puis contactez le support : un renvoi prend quelques minutes.

## Activer son code IPTV pas à pas

**L'activation suit le même schéma sur tous les appareils : trois champs, une fois pour toutes.**

1. Installez **IPTV Smarters Pro** (ou l'application adaptée à votre écran) ;
2. Ouvrez l'application et choisissez **Ajouter un utilisateur** ;
3. Sélectionnez **Se connecter avec Xtream Codes API** ;
4. Collez les trois informations de votre e-mail ;
5. Validez : les chaînes live, la VOD et l'EPG se chargent.

Les guides détaillés par appareil : [Fire Stick](/blog/installer-iptv-smarters-pro-fire-stick/), [Android TV](/blog/configurer-iptv-smarters-pro-android-tv/), [Smart TV Samsung et LG](/blog/installer-iptv-smarters-pro-smart-tv/), [iPhone](/blog/regarder-iptv-smarters-pro-iphone/) et [PC Windows/Mac](/blog/installer-iptv-smarters-pro-pc/).

## Xtream ou M3U : lequel choisir ?

**Le code Xtream Codes active automatiquement l'EPG, la VOD structurée et le catch-up : c'est le format recommandé sur tous les appareils.**

| Critère | Code Xtream (3 identifiants) | Lien M3U (playlist) |
|---|---|---|
| EPG guide TV | Automatique | Manuel (XMLTV) |
| VOD films & séries | Sections organisées, pochettes | Liste brute |
| Catch-up / replay | Natif | Selon flux |
| Stabilité sur Fire Stick | Excellente | Moyenne |
| Saisie | 3 champs | 1 long lien |

## Convertir un lien M3U en identifiants Xtream

**Si vous ne disposez que d'un lien M3U, le code Xtream se cache dedans : serveur avant `/get.php`, identifiant et mot de passe dans les paramètres.**

Prenons le lien :

`http://serveur.exemple.tv:8080/get.php?username=user1234&password=Mot2Passe&type=m3u_plus&output=ts`

| Élément du code Xtream | Où le trouver dans le lien M3U |
|---|---|
| URL du serveur | `http://serveur.exemple.tv:8080` — tout ce qui précède `/get.php` |
| Identifiant | Valeur du paramètre `username` — ici `user1234` |
| Mot de passe | Valeur du paramètre `password` — ici `Mot2Passe` |

Collez ces trois valeurs en mode Xtream Codes dans IPTV Smarters Pro : vous récupérez EPG et VOD structurée, comme détaillé dans le [comparatif des applications IPTV](/blog/iptv-smarters-pro-vs-tivimate/).

## Code refusé : les 5 vérifications dans l'ordre

**Un code IPTV refusé à la connexion suit presque toujours l'un de ces cinq scénarios :**

1. **URL incomplète** : `/get.php` ou `/` final collé par erreur — retirez-les ;
2. **Espace caché** : un espace en fin de champ invalide la connexion — retapez la dernière lettre ;
3. **Majuscules** : le mot de passe est sensible à la casse — copiez-coller plutôt que retaper ;
4. **Trop d'écrans** : fermez l'application sur les autres appareils avant de reconnecter ;
5. **Renouvellement récent** : patientez 15-45 minutes après un renouvellement, le temps de la propagation.

Le guide [IPTV Smarters Pro ne fonctionne pas : 12 solutions](/blog/iptv-smarters-pro-ne-fonctionne-pas/) complète ces vérifications pour tous les cas.

## Passer commande : recevoir votre code en quelques minutes

Pour obtenir votre code IPTV, choisissez votre formule selon votre usage :

- **3 mois — 29,99 €** : premier abonnement, validation du service ;
- **12 mois — 49,99 €** : la formule la plus choisie (4,16 €/mois) ;
- **24 mois — 79,99 €** : le coût mensuel le plus bas.

La sélection complète des critères fournisseurs se trouve dans notre guide du [meilleur abonnement IPTV France 2026](/blog/meilleur-abonnement-iptv-france/). Prêt ? [Consultez la grille tarifaire](/#tarifs) : votre code IPTV arrive par e-mail quelques minutes après le paiement, avec les guides d'activation de chaque appareil.
