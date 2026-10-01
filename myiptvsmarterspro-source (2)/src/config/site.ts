// ============================================================================
// SITE CONFIG — single source of truth for myiptvsmarterspro.com
// All facts from site-facts-myiptvsmarterspro.com.md — never hardcode elsewhere
// ============================================================================

export const SITE = {
  name: 'IPTV Smarters Pro France',
  domain: 'myiptvsmarterspro.com',
  url: 'https://myiptvsmarterspro.com',
  locale: 'fr-FR',
  country: 'France',
  lang: 'fr',
  focusKeyword: 'iptv smarters pro',
  secondaryKeywords: ['iptv france', 'abonnement iptv', 'iptv code'],
  // Design system v3 — colors extracted from abonnement-iptvsmarters.pro
  colors: {
    blue: '#5711EF',
    blueDark: '#470FC7',
    cyan: '#8B5CF6',
    navy: '#3A0CA3',
  },
};

export const CONTACT = {
  email: 'support@myiptvsmarterspro.com',
  // TODO: user WhatsApp number (E.164, no +) — replace before launch
  whatsapp: 'TODO',
  whatsappDisplay: 'WhatsApp 24/7',
  hours: '24h/24 · 7j/7 en français',
};

export const CLAIMS = {
  channels: '+20 000 chaînes',
  vod: '+100 000 films et séries',
  quality: 'HD · Full HD · 4K',
  activation: 'en quelques minutes par e-mail',
};

export const PROMISES = [
  {
    title: '30 jours satisfait ou remboursé',
    desc: "Testez votre abonnement IPTV Smarters Pro pendant 30 jours. S'il ne vous convient pas, nous vous remboursons intégralement, sans question.",
    icon: 'shield',
  },
  {
    title: 'Code envoyé instantanément par e-mail',
    desc: "Vos identifiants IPTV Smarters Pro arrivent dans votre boîte mail quelques minutes après le paiement, prêts à activer sur tous vos appareils.",
    icon: 'bolt',
  },
  {
    title: 'Support 24/7 en français',
    desc: 'Notre équipe francophone répond jour et nuit par e-mail et WhatsApp : installation, configuration, dépannage — à chaque étape.',
    icon: 'chat',
  },
];

// ---------------------------------------------------------------------------
// OFFER LADDER — user-dictated prices (4 plans, single screen)
// checkout ids = TODO until user supplies data-iptv-form values
// ---------------------------------------------------------------------------
export type Plan = {
  id: string;
  name: string;
  months: number;
  screens: number;
  price: string;
  priceNumber: number;
  perMonth: string;
  badge?: string;
  formId: string;
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: '3-mois',
    name: 'IPTV Smarters Pro 3 mois',
    months: 3,
    screens: 1,
    price: '29,99 €',
    priceNumber: 29.99,
    perMonth: '9,99 €/mois',
    formId: 'TODO',
  },
  {
    id: '6-mois',
    name: 'IPTV Smarters Pro 6 mois',
    months: 6,
    screens: 1,
    price: '39,99 €',
    priceNumber: 39.99,
    perMonth: '6,66 €/mois',
    formId: 'TODO',
  },
  {
    id: '12-mois',
    name: 'IPTV Smarters Pro 12 mois',
    months: 12,
    screens: 1,
    price: '49,99 €',
    priceNumber: 49.99,
    perMonth: '4,16 €/mois',
    badge: 'Meilleure offre',
    formId: 'TODO',
    popular: true,
  },
  {
    id: '24-mois',
    name: 'IPTV Smarters Pro 24 mois',
    months: 24,
    screens: 1,
    price: '79,99 €',
    priceNumber: 79.99,
    perMonth: '3,33 €/mois',
    badge: 'Économie max',
    formId: 'TODO',
  },
];

// Product pages only exist for 12 mois / 3 mois (per page-set)
export const PRODUCT_PAGE_SLUGS: Record<string, string> = {
  '12-mois': '/abonnement-iptv-12-mois/',
  '3-mois': '/abonnement-iptv-3-mois/',
};

// Signal checkout widget — ids verified against this base when user supplies them
export const SIGNAL_API = 'https://client.vpn-protected.com';
export const WIDGET_SCRIPT = 'https://client.vpn-protected.com/widget.js';

// ---------------------------------------------------------------------------
export const AUTHOR = {
  name: 'Lucas Ferrand',
  role: 'Testeur IPTV & rédacteur streaming',
  bio: 'Testeur IPTV depuis 8 ans, Lucas documente les installations, réglages et dépannages des applications IPTV sur tous les appareils : Smart TV, Fire Stick, Android, iOS et PC. Il rédacte des guides clairs pour les abonnés francophones.',
  photo: '/images/avatar.png',
};

export const NAV = [
  { label: 'Abonnement IPTV', href: '/iptv-france/' }, // Main — labelled with secondary keyword
  { label: 'Tarifs', href: '/#tarifs' },
  { label: 'Installation', href: '/installation-iptv/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Pages',
    links: [
      { label: 'IPTV Smarters Pro', href: '/' },
      { label: 'Abonnement IPTV France', href: '/iptv-france/' },
      { label: 'Guides installation IPTV', href: '/installation-iptv/' },
      { label: 'Liste des chaînes IPTV', href: '/liste-des-chaines-iptv/' },
      { label: 'Devenir revendeur IPTV', href: '/revendeur-iptv/' },
      { label: 'Blog IPTV', href: '/blog/' },
    ],
  },
  {
    title: 'Nos abonnements',
    links: [
      { label: 'Abonnement IPTV 12 mois', href: '/abonnement-iptv-12-mois/' },
      { label: 'Abonnement IPTV 3 mois', href: '/abonnement-iptv-3-mois/' },
      { label: 'Tous les tarifs IPTV', href: '/#tarifs' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Conditions générales', href: '/termes-et-conditions/' },
      { label: 'Politique de confidentialité', href: '/politique-de-confidentialite/' },
      { label: 'Politique de remboursement', href: '/politique-de-remboursement/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
];
