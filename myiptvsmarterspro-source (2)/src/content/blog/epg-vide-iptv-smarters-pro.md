---
title: "EPG vide sur IPTV Smarters Pro : comment réactiver le guide TV ?"
description: "EPG vide sur IPTV Smarters Pro ? Cache, connexion Xtream, XMLTV, fuseau horaire : les 6 causes 2026 et la correction pas à pas pour retrouver votre guide TV."
image: /images/a-epg.png
imageAlt: "Guide TV EPG affiché sur écran de télévision avec la grille des programmes"
pubDate: 2026-07-18
directAnswer: "Si l'EPG est vide sur IPTV Smarters Pro, forcez la mise à jour du guide dans Paramètres > EPG et patientez 1 à 2 minutes : dans 8 cas sur 10, le cache du guide n'était simplement pas encore chargé. Sinon, vérifiez la connexion Xtream (source de l'EPG), le fuseau horaire de l'appareil et la configuration XMLTV."
related: ["iptv-smarters-pro-ne-fonctionne-pas", "configurer-iptv-smarters-pro-android-tv"]
keywords: ["iptv smarters pro", "epg", "abonnement iptv"]
faq:
  - q: "Pourquoi mon EPG met du temps à s'afficher ?"
    a: "Au premier lancement, IPTV Smarters Pro télécharge l'intégralité du guide des programmes : comptez 1 à 2 minutes sur une bonne connexion. Les lancements suivants utilisent le cache et sont immédiats."
  - q: "L'EPG fonctionne-t-il avec un lien M3U ?"
    a: "Pas automatiquement : le M3U n'embarque pas de guide. Il faut ajouter une source XMLTV (URL EPG) dans les réglages de l'application, ou mieux, vous connecter en Xtream Codes API qui active l'EPG nativement."
  - q: "Comment afficher le guide plusieurs jours en avant ?"
    a: "Dans Paramètres > EPG, définissez le nombre de jours de guide téléchargés (jusqu'à 7 selon la source) et la fréquence de mise à jour : 24 heures suffit pour un usage standard."
  - q: "Les heures de l'EPG sont décalées, que faire ?"
    a: "C'est un problème de fuseau horaire : réglez l'appareil sur l'heure automatique (Europe/Paris) puis redémarrez l'application pour que le guide se resynchronise."
---

## Le guide TV, colonne vertébrale de l'IPTV

**L'EPG (Electronic Program Guide) est le guide des programmes intégré à IPTV Smarters Pro : quand il reste vide, on perd le zap culture et le replay.** Bonne nouvelle : le guide se répare en quelques minutes, et dans la majorité des cas sans toucher à votre [abonnement IPTV](/iptv-france/).

Ce guide passe les 6 causes d'un EPG vide en revue, de la plus fréquente à la plus rare, avec la correction exacte pour chacune.

## Cause 1 : le guide n'a pas fini de charger

**Au premier lancement, l'EPG se télécharge intégralement : un écran vide les 90 premières secondes est normal.**

1. Lancez une chaîne et laissez l'application ouverte 1-2 minutes ;
2. Ouvrez le guide : la grille se remplit progressivement ;
3. Les lancements suivants démarrent instantanément grâce au cache.

Si la grille reste désespérément vide après 5 minutes, passez à la cause 2.

## Cause 2 : connexion M3U au lieu d'Xtream

**L'EPG d'IPTV Smarters Pro est alimenté par la connexion Xtream Codes API : un profil configuré via simple lien M3U n'affiche aucun guide.**

Vérifiez votre mode de connexion :

| Mode de connexion | EPG automatique | VOD structurée | Recommandé |
|---|---|---|---|
| **Xtream Codes API** | Oui | Oui | Oui |
| Lien M3U seul | Non | Liste brute | Non |
| M3U + XMLTV | Après configuration | Liste brute | En dépannage |

Pour repasser en Xtream : **Paramètres > Gestion des profils**, supprimez le profil M3U puis recréez-le avec **Login with Xtream Codes API** et vos trois identifiants. Le tutoriel [Android TV](/blog/configurer-iptv-smarters-pro-android-tv/) détaille la manipulation (identique sur tous les appareils).

## Cause 3 : cache EPG corrompu

**Un cache d'EPG corrompu (mise à jour interrompue, veille pendant le téléchargement) laisse une grille vide ou figée.**

1. Ouvrez **Paramètres > EPG** ;
2. Cliquez sur **Effacer le cache EPG** (Clear EPG cache) ;
3. Forcez ensuite la **mise à jour du guide** ;
4. Laissez l'application active jusqu'au complet chargement.

À faire une fois par mois en prévention : un guide qui se met à jour proprement ne sature jamais.

## Cause 4 : mauvaise configuration XMLTV

**En mode M3U, l'EPG exige une source XMLTV — une URL de guide à coller manuellement dans l'application.**

1. Dans **Paramètres > EPG**, repérez le champ **URL EPG / XMLTV** ;
2. Collez l'URL du guide fournie par votre fournisseur (elle figure dans l'e-mail de configuration) ;
3. Définissez la mise à jour toutes les **24 heures** ;
4. Forcez le premier chargement et patientez 2 minutes.

Ordre de vérification : URL complète collée sans espace, mise à jour programmée activée, application relancée après enregistrement.

## Cause 5 : fuseau horaire de l'appareil

**Un appareil réglé sur un mauvais fuseau affiche des programmes décalés — ou vides sur certaines plages horaires.**

1. Ouvrez les **réglages de l'appareil** (TV, box ou smartphone) ;
2. Activez **date et heure automatiques** (Europe/Paris) ;
3. Redémarrez complètement IPTV Smarters Pro ;
4. Rechargez le guide.

Ce réglage règle aussi les cas « le programme affiché ne correspond pas à ce qui est diffusé ».

## Cause 6 : IDs de chaînes non appariés

**Cas rare : le guide XMLTV ne reconnaît pas certains noms de chaînes, et seules ces chaînes restent sans programme.**

- Si les chaînes principales s'affichent mais pas une chaîne précise, son ID est simplement absent du guide — signalez-la au support ;
- Si TOUTES les chaînes sont vides après les causes 1 à 5, testez sur un deuxième appareil : si le guide s'affiche ailleurs, le problème est local (réinstallez l'application en dernier recours) ;
- En cas de doute sur la ligne elle-même, la section « solutions 9 à 11 » du guide [IPTV Smarters Pro ne fonctionne pas](/blog/iptv-smarters-pro-ne-fonctionne-pas/) vérifie l'état de l'abonnement.

## Réglages EPG recommandés (récapitulatif)

| Réglage | Valeur conseillée | Où |
|---|---|---|
| Mise à jour automatique | Toutes les 24 h | Paramètres > EPG |
| Jours de guide | 3 à 7 jours | Paramètres > EPG |
| Jours de guide passé | 1-2 jours (replay) | Paramètres > EPG |
| Nettoyage du cache | Mensuel | Paramètres > EPG |

**Un EPG sain change l'expérience IPTV** : zap par grille, programmes en cours affichés par chaîne, replay accessible depuis le guide. Tous nos [abonnements IPTV Smarters Pro](/) livrent une connexion Xtream avec EPG natif — [consultez les formules](/#tarifs) et activez votre ligne en quelques minutes.
