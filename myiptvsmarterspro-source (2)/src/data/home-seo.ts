// Homepage dedicated SEO content section — chunked (bold direct answer first)
import type { Chunk } from './seo-types';

export interface SeoPart {
  h2: string;
  lead: string; // description paragraph after H2 (contains keyword)
  chunks: Chunk[];
}

export const HOME_SEO: SeoPart[] = [
  {
    h2: 'IPTV Smarters Pro : tout savoir sur le meilleur abonnement IPTV France',
    lead: "L'abonnement IPTV Smarters Pro regroupe la télévision française et internationale, le sport, le cinéma et les séries dans une seule application — avec un code IPTV activé en quelques minutes et un support francophone 24/7.",
    chunks: [
      {
        lead: "IPTV Smarters Pro est l'application de lecture qui transforme votre abonnement IPTV en véritable box TV sur n'importe quel écran.",
        body: "Concrètement, votre forfait vous fournit un code IPTV (identifiants Xtream Codes) que vous saisissez une seule fois dans l'application IPTV Smarters Pro. Après cette activation, l'application affiche les chaînes en direct, le catalogue VOD, le guide TV EPG et le replay, exactement comme une box opérateur — mais sur votre Smart TV, votre Fire Stick, votre iPhone ou votre PC.",
      },
      {
        h3: 'Comment fonctionne un abonnement IPTV France concrètement ?',
        lead: "Un abonnement IPTV France fonctionne en trois étapes : commande du forfait, réception du code IPTV par e-mail, saisie des identifiants dans l'application.",
        list: [
          "Vous choisissez votre formule IPTV Smarters Pro (3 mois, 6 mois, 12 mois ou 24 mois).",
          "Vous recevez quelques minutes plus tard votre code IPTV : adresse serveur, identifiant et mot de passe Xtream Codes.",
          "Vous ouvrez IPTV Smarters Pro, vous choisissez « Login with Xtream Codes API », vous collez les trois informations — les chaînes et la VOD apparaissent instantanément.",
        ],
      },
      {
        h3: 'Pourquoi choisir IPTV Smarters Pro plutôt que le câble ou le satellite ?',
        lead: "L'abonnement IPTV coûte 4,16 € par mois en formule 12 mois, contre 30 à 60 € pour un double play câble — pour un catalogue bien plus large.",
        body: "Le tableau de notre section « Pourquoi nous choisir » détaille les critères (prix, nombre de chaînes, VOD, multi-écrans, engagement). L'autre avantage décisif est la mobilité : le même code IPTV fonctionne sur tous vos appareils, là où une box est figée dans le salon. Enfin, l'absence d'engagement des formules 3 et 6 mois permet de tester le service sans risque, d'autant que la garantie 30 jours satisfait ou remboursé s'applique à toutes les formules.",
      },
      {
        h3: 'Code IPTV, Xtream Codes et M3U : quelles différences ?',
        lead: "Un code IPTV au format Xtream Codes se compose d'un serveur, d'un identifiant et d'un mot de passe ; le format M3U est un simple lien de playlist à importer.",
        body: "IPTV Smarters Pro accepte les deux formats, mais la connexion Xtream Codes API est recommandée : elle active automatiquement le guide TV EPG, les pochettes VOD, les séries et le catch-up, et reste plus stable sur Fire Stick. Si vous ne disposez que d'un lien M3U, notre guide « Où trouver votre code IPTV » explique comment en extraire les identifiants Xtream.",
      },
      {
        h3: "Quel débit internet pour l'IPTV 4K en France ?",
        lead: "Il faut 25 Mbit/s pour la 4K, 10 Mbit/s pour le Full HD et 5 Mbit/s pour la HD — tous les standards ADSL/fibre français passent largement.",
        table: {
          head: ['Qualité', 'Débit minimal', 'Débit recommandé', 'Data consommée'],
          rows: [
            ['HD (720p)', '5 Mbit/s', '6-10 Mbit/s', '~1 Go/heure'],
            ['Full HD (1080p)', '10 Mbit/s', '10-15 Mbit/s', '~1,5 Go/heure'],
            ['4K UHD', '25 Mbit/s', '25-40 Mbit/s', '~3-7 Go/heure'],
          ],
        },
      },
      {
        h3: "Où trouver de l'aide pour installer IPTV Smarters Pro ?",
        lead: "Tous nos guides d'installation IPTV sont gratuits, en français, et couvrent chaque appareil pas à pas.",
        body: "Le blog IPTV Smarters Pro détaille l'installation sur Fire Stick, Android TV, Smart TV Samsung et LG, iPhone, iPad et PC. Pour un projet professionnel, notre page revendeur IPTV présente les panneaux de crédits ; et pour toute question avant achat, le support répond en français 24h/24.",
      },
    ],
  },
];
