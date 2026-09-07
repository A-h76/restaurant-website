import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Venue and homepage photography. Per-dish menu photos live in
// public/images/menu/ and are mapped in src/data/menu-catalog.js.
export const restaurantImages = {
  hero: {
    src: '/images/hero.webp',
    alt: 'Smart Cook Dera restaurant storefront lit up at night',
    icon: 'karahi',
    width: 787,
    height: 477,
  },
  karahi: {
    src: '/images/karahi.webp',
    alt: 'Mutton karahi in a traditional iron karahi',
    icon: 'karahi',
    width: 960,
    height: 720,
  },
  chickenKarahi: {
    src: '/images/menu/chicken-karahi.webp',
    alt: 'Chicken karahi in a traditional iron karahi',
    icon: 'karahi',
    width: 960,
    height: 720,
  },
  bbq: {
    src: '/images/bbq.webp',
    alt: 'Pakistani BBQ mix platter with seekh kebab, tikka and grilled pieces',
    icon: 'bbq',
    width: 960,
    height: 720,
  },
  kebab: {
    src: '/images/menu/mutton-kebab.webp',
    alt: 'Mutton seekh kebab grilled over charcoal',
    icon: 'bbq',
    width: 960,
    height: 720,
  },
  tikka: {
    src: '/images/menu/tikka-boti.webp',
    alt: 'Chicken tikka boti with tandoori marinade',
    icon: 'bbq',
    width: 960,
    height: 720,
  },
  mosque: {
    src: '/images/mosque.webp',
    alt: 'Mosque at Smart Cook Dera',
    icon: 'mosque',
    width: 1200,
    height: 400,
  },
  chai: {
    src: '/images/chai.webp',
    alt: 'Pakistani doodh patti chai',
    icon: 'cup',
    width: 960,
    height: 720,
  },
  biryani: {
    src: '/images/biryani.webp',
    alt: 'Chicken biryani with bone-in chicken and fried onions',
    icon: 'rice',
    width: 960,
    height: 720,
  },
};

export function hasImage(key) {
  const img = restaurantImages[key];
  if (!img) return false;
  const relative = img.src.replace(/^[/\\]+/, '');
  return existsSync(join(process.cwd(), 'public', relative));
}
