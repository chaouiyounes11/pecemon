// Données d'exemple pour les différentes catégories de Pécémons
import eau55101 from '/img/eau/5510 - 1.png';
import eau55102 from '/img/eau/5510 - 2.png';
import eau55103 from '/img/eau/5510 - 3.png';
import eauhpg61 from '/img/eau/840 G6 - 1.png';
import eauhpg62 from '/img/eau/840 G6 - 2.png';
import eauhpg63 from '/img/eau/840 G6 - 3.png';
import eaut4801 from '/img/eau/T480 - 1.png';
import eaut4802 from '/img/eau/T480 - 2.png';
import eaut4803 from '/img/eau/T480 - 3.png';
import feu14IIL1 from '/img/feu/14 IIL - 1.png';
import feu14IIL2 from '/img/feu/14 IIL - 2.png';
import feu14IIL3 from '/img/feu/14 IIL - 3.png';
import feu14IIL4 from '/img/feu/14 IIL - 4.png';
import feugpg71 from '/img/feu/845 G7 - 1.png';
import feugpg72 from '/img/feu/845 G7 - 2.png';
import feugpg73 from '/img/feu/845 G7 - 3.png';
import feut14s1 from '/img/feu/T14s - 1.png';
import feut14s2 from '/img/feu/T14s - 2.png';
import feut14s3 from '/img/feu/T14s - 3.png';
import feut14s4 from '/img/feu/T14s - 4.png';
import herbe55701 from '/img/herbe/5570-1.png';
import herbe55702 from '/img/herbe/5570-2.png';
import herbe55703 from '/img/herbe/5570-3.png';
import herbe55801 from '/img/herbe/5580-1.png';
import herbe55802 from '/img/herbe/5580-2.png';
import herbe55803 from '/img/herbe/5580-3.png';
import herbe1 from '/img/herbe/840 G5 - 1.png';
import herbe2 from '/img/herbe/840 G5 - 2.png';
import herbe3 from '/img/herbe/840 G5 - 3.png';

export const pecemonHerbeData = {
  type: 'herbe' as const,
  title: "Pécémon Herbe – L'agilité éco-performante",
  link: 'https://buy.stripe.com/bJe00i5iVgwlgYvfERbZe03',
  description:
    'Léger, rapide, économe : les Pécémons Herbe sont des laptops pro reconditionnés pensés pour la bureautique, la mobilité et les petits budgets.',
  features: [
    '💻 Intel i3 ou i5 • 8 Go de RAM • SSD 256 Go',
    '📱 13 à 14 pouces • Ultra-portable',
    '🔋 Autonomie optimisée • Démarrage rapide',
    '📦 HP, Lenovo ou Dell • Fiabilité pro',
    '💚 Parfait pour bureautique et mobilité',
  ],
  models: [
    {
      id: 'herbe-1',
      name: 'Bulbasourc Compact',
      commercialName: 'HP 840 G5',
      processor: 'Intel Core i3-10110U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      screen: '13.3" Full HD',
      brand: 'HP',
      price: '199,99 €',
      klarnaPrice: '66,66 €',
      available: true,
      images: [herbe1, herbe2, herbe3],
    },
    {
      id: 'herbe-2',
      name: 'DellCool 5580',
      commercialName: 'Dell 5580',
      processor: 'Intel Core i5-8350U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      screen: '14" Full HD',
      brand: 'Dell',
      price: '199,99 €',
      klarnaPrice: '66,66 €',
      available: true,
      images: [herbe55801, herbe55802, herbe55803],
    },
    {
      id: 'herbe-3',
      name: 'Dellosaure 5570',
      commercialName: 'Dell 5570',
      processor: 'Intel Core i5-8250U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      screen: '15.6" Full HD',
      brand: 'Dell',
      price: '199,99 €',
      klarnaPrice: '66,66 €',
      available: true,
      images: [herbe55701, herbe55702, herbe55703],
    },
  ],
};

export const pecemonEauData = {
  type: 'eau' as const,
  title: "Pécémon Eau – L'équilibre polyvalent",
  link: 'https://buy.stripe.com/3cIeVcbHjeodaA73W9bZe02',

  description:
    'Ni trop, ni trop peu : les Pécémons Eau trouvent le parfait équilibre entre performance et prix. Idéaux pour le télétravail, les études supérieures et la création occasionnelle.',
  features: [
    '💻 Intel i5 ou i7 • 8 à 16 Go de RAM',
    '💾 SSD 256-512 Go • Performance fluide',
    '🖥️ 14 à 15 pouces • Confort visuel',
    '🎨 Création occasionnelle • Multitâche',
    '💼 Télétravail • Visioconférences HD',
  ],
  models: [
    {
      id: 'eau-1',
      name: 'Aquarion G6',
      commercialName: 'HP 840 G6',
      processor: 'Intel Core i5-8365U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      screen: '14" Full HD',
      brand: 'HP',
      price: '249,99 €',
      priceBeforeDiscount: '349,99 €',
      klarnaPrice: '83,33 €',
      available: true,
      images: [eauhpg61, eauhpg62, eauhpg63],
    },
    {
      id: 'eau-2',
      name: 'T480 AquaForce',
      commercialName: 'Lenovo T480',
      processor: 'Intel Core i5-8350U',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      screen: '14" Full HD',
      brand: 'Lenovo',
      price: '249,99 €',
      priceBeforeDiscount: '349,99 €',
      klarnaPrice: '83,33 €',
      available: true,
      images: [eaut4801, eaut4802, eaut4803],
    },
    {
      id: 'eau-3',
      name: 'Delluxe 5510',
      commercialName: 'Dell 5510',
      processor: 'Intel Core i7-6820HQ',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      screen: '15.6" 4K UHD',
      brand: 'Dell',
      price: '249,99 €',
      klarnaPrice: '83,33 €',
      available: true,
      images: [eau55101, eau55102, eau55103],
    },
  ],
};

export const pecemonFeuData = {
  type: 'feu' as const,
  title: 'Pécémon Feu – La puissance déchaînée',
  link: 'https://buy.stripe.com/dRm28qdPr3JzdMjcsFbZe01',
  description:
    'Pour ceux qui ne font pas de compromis : les Pécémons Feu sont des machines de guerre reconditionnées. Gaming, développement, création pro, montage vidéo... ils encaissent tout.',
  features: [
    '💻 Intel i7 ou i9 • 16 à 32 Go de RAM',
    '💾 SSD 512 Go à 1 To • Stockage pro',
    '🖥️ 15 à 17 pouces • Écrans premium',
    '🎮 Gaming • Développement • Création pro',
    // '🎁 Chance Pikabook • MacBook Pro possible !',
  ],
  models: [
    {
      id: 'feu-2',
      name: '845 G7',
      commercialName: 'HP 845 G7',
      processor: 'AMD Ryzen 5 Pro 4650U',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      screen: '14" Full HD IPS',
      brand: 'HP',
      price: '349,99 €',
      priceBeforeDiscount: '499,99 €',
      klarnaPrice: '116,66 €',
      available: true,
      images: [feugpg71, feugpg72, feugpg73],
    },
    {
      id: 'feu-1',
      name: 'DracauT14S',
      commercialName: 'Lenovo T14S',
      processor: 'Intel Core i7-10610U',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      screen: '14" Full HD IPS',
      brand: 'Lenovo',
      price: '349,99 €',
      priceBeforeDiscount: '499,99 €',
      klarnaPrice: '116,66 €',
      available: true,
      images: [feut14s1, feut14s2, feut14s3, feut14s4],
    },

    {
      id: 'feu-3',
      name: '14 IIL Inferno',
      commercialName: 'Lenovo Thinkbook 14 IIL',
      processor: 'Intel Core i5-10th',
      ram: '8GB',
      storage: '256GB SSD',
      screen: '14" Full HD',
      brand: 'Lenovo',
      price: '349,99 €',
      priceBeforeDiscount: '499,99 €',
      klarnaPrice: '116,66 €',
      available: true,
      images: [feu14IIL1, feu14IIL2, feu14IIL3, feu14IIL4],
    },
  ],
};
