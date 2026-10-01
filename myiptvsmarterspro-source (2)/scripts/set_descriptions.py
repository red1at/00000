#!/usr/bin/env python3
"""Set exact 145-159 char descriptions — v2, shorter."""
import re

D = {
 "epg-vide-iptv-smarters-pro.md":
   "EPG vide sur IPTV Smarters Pro ? Cache, connexion Xtream, XMLTV, fuseau horaire : les 6 causes 2026 et la correction pas à pas pour retrouver votre guide TV.",
 "installer-iptv-smarters-pro-fire-stick.md":
   "Installer IPTV Smarters Pro sur Fire Stick en 2026 : activer les sources inconnues, installer Downloader et l'APK, configurer votre code IPTV et regarder la TV en 4K.",
 "installer-iptv-smarters-pro-pc.md":
   "Installer IPTV Smarters Pro sur PC Windows et Mac en 2026 : téléchargement officiel, configuration Xtream Codes, lecteur vidéo optimal, raccourcis clavier et dépannage.",
 "installer-iptv-smarters-pro-smart-tv.md":
   "Installer l'IPTV sur Smart TV Samsung (Tizen) et LG (webOS) en 2026 : IBO Player, Flix IPTV, SmartOne, activation MAC et IPTV Smarters Pro via Fire Stick.",
 "iptv-smarters-pro-ne-fonctionne-pas.md":
   "IPTV Smarters Pro ne fonctionne pas ? 12 solutions 2026 : login failed, image noire, buffering, erreur 403, EPG vide, coupures du soir — diagnostic et correction.",
 "iptv-smarters-pro-vs-tivimate.md":
   "IPTV Smarters Pro ou TiviMate en 2026 : connexion Xtream, EPG, VOD, interface, multi-appareils, prix — quelle application IPTV choisir avec votre abonnement ?",
 "code-iptv-activation.md":
   "Le code IPTV en 2026 : où le trouver dans votre e-mail, le format Xtream Codes, l'activation pas à pas sur chaque appareil et la conversion d'un lien M3U.",
 "meilleur-abonnement-iptv-france.md":
   "Le meilleur abonnement IPTV France en 2026 : critères de choix (chaînes, VOD, 4K, anti-freeze, support), prix du marché, formules recommandées et pièges à éviter.",
 "regarder-iptv-smarters-pro-iphone.md":
   "IPTV Smarters Pro sur iPhone et iPad en 2026 : installation App Store, connexion Xtream Codes, AirPlay vers la TV, réglages 4G/5G et dépannage iOS.",
}

all_ok = True
for f, desc in D.items():
    n = len(desc)
    ok = 145 <= n <= 159
    if not ok:
        all_ok = False
    print(("OK " if ok else "BAD") + f" {n:3d} {f}")
    if ok:
        src = open(f, encoding="utf-8").read()
        src = re.sub(r'^description: ".*"$', f'description: "{desc}"', src, count=1, flags=re.M)
        open(f, "w", encoding="utf-8").write(src)

print("ALL OK" if all_ok else "SOME BAD")
