import type LinkButton from '$lib/components/LinkButton.svelte';

export const SITE = {
  TELEPHONE: {
    LANDLINE: '030 / 81 79 79 45',
    LANDLINE_HREF: '+493081797945',
  },
  EMAIL: 'info (at) antik70.de',
  EMAIL_HREF: 'info@antik70.de',
  SHOP_NAME: 'Antik70',
  SHOP_LINK: 'https://antik70.de/shop',
  SHOP_TIFFANY: 'https://antik70.de/shop/de/beleuchtung/tiffany-leuchten',
  DE: {
    SHOP_TEXT_1: 'Unser Shop',
    SHOP_TEXT_2: 'Entdecken Sie unsere Rarietäten',
    HERO_HEADLINE: 'Zeitlose Eleganz durch Antiquitäten, Einzigartige Lampen & Möbelkunst.',
    HERO_SUBLINE:
      'Antike Möbelstücke aus den vielen Epochen erzählen Ihre Geschichte vergangener Zeiten egal ob Vertiko, Kommode, Küchenbuffet, Schrank oder Sekretäre immer mit Liebe restauriert und bereit Ihr Zuhause zu bereichern. Erleben Sie unsere Welt in der sich Geschichte und Stil vereinigen.',
    HERO_CTA: 'Entdecken Sie unsere Raritäten',
    RESTORE_HEADLINE: 'Restaurationen',
    RESTORE_TEXT:
      'Alle alten und antiken Lampen werden von uns aufgearbeitet und neu elektrifiziert, um sämtliche erforderlichen Sicherheitsstandards zu erfüllen. Bei stoffummantelten Kabeln		verwenden wir eine Spezialanfertigung mit einem verstärkten Innenleben, was die unbedenkliche Nutzung unserer Zugleuchten gewährleistet. Für die Elektrik werden		ausschließlich neue, VDE-geprüfte Teile verbaut oder ersetzt.',
    RESTORE_FEATURES: [
      {
        title: 'Bearbeitung von Weichholzmöbel',
        text: 'Wir schleifen unsere Möbel innen und außen, grundieren dann mit Schellack und schleifen dann die Sichtflächen nochmals fein. Die Oberfläche wird abschließend gewachst. Als Finish polieren wir die gewachsten Oberflächen, damit eine leicht samtig glänzende Oberfläche entsteht. Selbstverständlich wird vorhandener Holzwurm behandelt, Beschläge werden repariert oder erneuert, die Leichtgängigkeit der Schubladen und Schlösser wird sichergestellt, und gegebenenfalls nehmen wir Innenausbauten vor.',
      },
      {
        title: 'Bearbeitung furnierter Möbel',
        text: 'Entfernen des alten Schellacks durch Abwaschen, Schleifen der Oberflächen, Auffrischen der Furniere und abschließende Schellackpolitur für einen glänzenden Finish. Selbstverständlich kümmern wir uns auch um eventuell vorhandene Holzwurmbefälle, reparieren oder erneuern Beschläge, gewährleisten die Leichtgängigkeit von Schubladen und Schlössern und nehmen gegebenenfalls Innenausbauten vor.',
      },
    ],
    RESTORE_CONTACT_TITLE: 'Fragen? Lassen Sie sich unverbindlich beraten',
    RESTORE_CONTACT_TEXT: 'Einfach dit Telefon zücken oder ne Mail abdrücken, wir stehen bereit fürn entspannten Schnack. Keen Hokuspokus, versprochen',
    RESTORE_CONTACT: '',
    LAMP_HEADLINE: 'Beleuchtung der besonderen Art Vielfalt und Einzigartigkeit unsere Lampenwelt',
    LAMP_FEATURES: [
      {
        title: 'Alte Lampengläser',
        text: 'Wir führen ausgewählte alte Lampengläser, die teilweise mehr als 100 Jahre alt sind. Die Schirme sind gebraucht aber nicht defekt. Minimale Abplatzer am Glashalter sindnach jahrelangen Gebrauch als normal anzusehen. Weitere Einzelstücke können Sie in unseren Ausstellungsräumen betrachten',
        href: 'https://antik70.de/shop/de/lampenglaeser/antike-lampenschirme',
        cta: 'Alte Lampenschirme',
      },
      {
        title: 'Glasschirm Ersatzglas Lampenglas',
        text: 'Klassische Formen in opal, diverse Farben, spezielle Oberflächen und verschiedene Größen der einzelnen Modelle ergeben eine ungeahnte Vielfalt zur Bestückung IhrerLampengestelle.',
        href: 'https://antik70.de/shop/lampenglaeser',
        cta: 'Lampengläser & Ersatzschirme',
      },
      {
        title: 'Tiffanylampen',
        text: 'Für Viele die Königsdisziplin der Lichtkunst. Tiffanylampen für Tisch, Decke, Wand und Boden; jeweils in höchster Perfektion gearbeitete Schirme, die den originalen Vorbildern zur Ehre gereichen. Wir bieten einige ausgewählte Lampen mit Tiffanyschirmen an',
        href: 'https://antik70.de/shop/de/beleuchtung/tiffany-leuchten',
        cta: 'Lampenmodelle in unserer Ausstellung',
      },
    ],
    NAVI_LINKS: [
      {
        label: 'Lampen',
        href: '#lampen',
      },
      {
        label: 'Restaurationen',
        href: '#restaurationen',
      },
      {
        label: 'Unsere Geschichte',
        href: '#antik70',
      },
    ],
    FOOTER_LINKS: {
      Antik70: [
        { name: 'Kontakt', href: 'https://antik70.de/shop/de/kontakt' },
        { name: 'Über uns', href: '#antik70' },
        { name: 'Impressum', href: 'https://antik70.de/shop/de/Impressum' },
      ],
      'Unser Shop': [
        { name: 'Antike Möbel', href: 'https://antik70.de/shop/de/antike-moebel' },
        { name: 'Lampengläser', href: 'https://antik70.de/shop/lampenglaeser' },
        { name: 'Sonderangebote', href: 'https://antik70.de/shop/raritaeten' },
      ],
      Beleuchtung: [
        { name: 'Glasschirme Opal', href: 'https://antik70.de/shop/lampenglaeser/glasschirme-opal' },
        { name: 'Alte Lampengläser', href: 'https://antik70.de/shop/de/lampenglaeser/antike-lampenschirme' },
        { name: 'Tiffany Leuchten', href: 'https://antik70.de/shop/de/beleuchtung/tiffany-leuchten' },
      ],
      Informationen: [
        { name: 'Zahlarten & Versandkosten', href: 'https://antik70.de/shop/de/Liefer-und-Versandkosten' },
        { name: 'Unsere AGBs', href: 'https://antik70.de/shop/de/Unsere-AGB' },
        { name: 'Widerrufsrecht', href: 'https://antik70.de/shop/de/Widerrufsrecht' },
      ],
    },

    OPEN_HOURS: 'Öffnungszeiten',
    OPEN_HOURS_1: 'Montag bis Freitag',
    OPEN_HOURS_2: '11:00 - 18:00 Uhr',
    OPEN_HOURS_3: 'Neu: Samstag',
    OPEN_HOURS_4: '11:00 - 14:00 Uhr',
  },
};

export const SITE_ENG = {
  TELEPHONE: {
    LANDLINE: '030 / 81 79 79 45',
    LANDLINE_HREF: '+493081797945',
  },
  EMAIL: 'info (at) antik70.de',
  EMAIL_HREF: 'info@antik70.de',
  SHOP_NAME: 'Antik70',
  SHOP_LINK: 'https://antik70.de/shop',
  SHOP_TIFFANY: 'https://antik70.de/shop/de/beleuchtung/tiffany-leuchten',
  DE: {
    SHOP_TEXT_1: 'Our Shop',
    SHOP_TEXT_2: 'Discover our rarities',
    HERO_HEADLINE: 'Timeless elegance through antiques, unique lamps & furniture art.',
    HERO_SUBLINE:
      'Antique pieces of furniture from various eras tell their stories of past times whether it’s a Vertiko, chest of drawers, kitchen buffet, cupboard, or secretaries, always restored with love and ready to enrich your home. Experience our world where history and style unite.',
    HERO_CTA: 'Discover our rarities',
    RESTORE_HEADLINE: 'Restorations',
    RESTORE_TEXT:
      'All old and antique lamps are refurbished and re-electrified by us to meet all required safety standards. For fabric-covered cables, we use a custom-made version with a reinforced interior, ensuring the safe use of our pull-lights. For the electrics, we exclusively use or replace new, VDE-tested parts.',
    RESTORE_FEATURES: [
      {
        title: 'Processing of softwood furniture',
        text: 'We sand our furniture inside and out, then prime with shellac and then finely sand the visible surfaces again. The surface is finally waxed. As a finish, we polish the waxed surfaces to create a slightly velvety shiny surface. Of course, existing woodworm is treated, fittings are repaired or renewed, the smooth running of drawers and locks is ensured, and, if necessary, interior modifications are made.',
      },
      {
        title: 'Processing of veneered furniture',
        text: 'Removal of the old shellac by washing, sanding the surfaces, refreshing the veneers, and final shellac polish for a glossy finish. Of course, we also take care of any woodworm infestations, repair or renew fittings, ensure the smooth operation of drawers and locks, and make interior modifications if necessary.',
      },
    ],
    RESTORE_CONTACT_TITLE: 'Questions? Get advice without obligation',
    RESTORE_CONTACT_TEXT: 'Just whip out the phone or send an email, we’re ready for a relaxed chat. No hocus pocus, promised',
    RESTORE_CONTACT: '',
    LAMP_HEADLINE: 'Lighting of a special kind Diversity and uniqueness in our lamp world',
    LAMP_FEATURES: [
      {
        title: 'Old lamp glasses',
        text: 'We offer selected old lamp glasses, some of which are more than 100 years old. The shades are used but not defective. Minimal chips on the glass holder are considered normal after years of use. You can view other unique pieces in our showrooms',
        href: 'https://antik70.de/shop/de/lampenglaeser/antike-lampenschirme',
        cta: 'Old lampshades',
      },
      {
        title: 'Glass shade replacement glass lamp glass',
        text: 'Classic shapes in opal, various colors, special surfaces, and different sizes of individual models offer an unexpected variety for equipping your lamp frames.',
        href: 'https://antik70.de/shop/lampenglaeser',
        cta: 'Lamp glasses & replacement shades',
      },
      {
        title: 'Tiffany lamps',
        text: 'For many, the pinnacle of light art. Tiffany lamps for table, ceiling, wall, and floor; each crafted to perfection in shades that do honor to the original models. We offer a selection of lamps with Tiffany shades',
        href: 'https://antik70.de/shop/de/beleuchtung/tiffany-leuchten',
        cta: 'Lamp models in our exhibition',
      },
    ],
    NAVI_LINKS: [
      {
        label: 'Lamps',
        href: '#lampen',
      },
      {
        label: 'Restorations',
        href: '#restaurationen',
      },
      {
        label: 'Our Story',
        href: '#antik70',
      },
    ],
    FOOTER_LINKS: {
      Antik70: [
        { name: 'Contact', href: 'https://antik70.de/shop/de/kontakt' },
        { name: 'About Us', href: '#antik70' },
        { name: 'Legal Notice', href: 'https://antik70.de/shop/de/Impressum' },
      ],
      'Our Shop': [
        { name: 'Antique Furniture', href: 'https://antik70.de/shop/de/antike-moebel' },
        { name: 'Lamp Glasses', href: 'https://antik70.de/shop/lampenglaeser' },
        { name: 'Special Offers', href: 'https://antik70.de/shop/raritaeten' },
      ],
      Lighting: [
        { name: 'Opal Glass Shades', href: 'https://antik70.de/shop/lampenglaeser/glasschirme-opal' },
        { name: 'Old Lamp Glasses', href: 'https://antik70.de/shop/de/lampenglaeser/antike-lampenschirme' },
        { name: 'Tiffany Lamps', href: 'https://antik70.de/shop/de/beleuchtung/tiffany-leuchten' },
      ],
      Information: [
        { name: 'Payment Methods & Shipping Costs', href: 'https://antik70.de/shop/de/Liefer-und-Versandkosten' },
        { name: 'Our Terms and Conditions', href: 'https://antik70.de/shop/de/Unsere-AGB' },
        { name: 'Right of Withdrawal', href: 'https://antik70.de/shop/de/Widerrufsrecht' },
      ],
    },

    OPEN_HOURS: 'Opening Hours',
    OPEN_HOURS_1: 'Monday to Friday',
    OPEN_HOURS_2: '11:00 AM - 6:00 PM',
    OPEN_HOURS_3: 'New: Saturday',
    OPEN_HOURS_4: '11:00 AM - 2:00 PM',
  },
};
