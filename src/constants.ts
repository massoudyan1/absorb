import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'SERIES 01',
    seriesId: 'S1-ARCH',
    price: 18250,
    description: 'Close-up high-flash specimen photography of black geometric acoustic foam panel with sharp jagged ridges on obsidian background.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApNpYADeuYTnbAIec9zUgWoGsbfBWnjeam5K4IDtDPeIaabwDYAxzbGkYHlZySdOufiquOcRrl_OiFLovIJGGGz03wJMO1PHJXihtjQqizuVgPu7ybt_Ivf1FBRg5LZ1bsijigW1NiY6UUN86Q9tM8-9_Q-bq_qrqWgFPbIUfi6EKB4k3w5pMSBl9j--BR8k-4f5t4Kzo8DK63KOgG-2QBTMR0A-OZ1gz8F372PAdxxZZyftWSk6sVE7cdXE_y17C-UiJqR5krMws',
    nrcRating: 0.95,
    material: 'POLY-CARBON',
    status: 'IN_STOCK'
  },
  {
    id: '9',
    name: 'SERIES 06',
    seriesId: 'S1-ARCH',
    price: 21000,
    description: 'Monolithic slab with deep vertical grooves for low-frequency control and architectural presence.',
    image: 'https://picsum.photos/seed/monolith/800/1200',
    nrcRating: 0.98,
    material: 'DENSE-CORE',
    status: 'IN_STOCK'
  },
  {
    id: '10',
    name: 'SERIES 07',
    seriesId: 'S1-ARCH',
    price: 19500,
    description: 'Geometric tessellation pattern for high-frequency dispersion and visual complexity.',
    image: 'https://picsum.photos/seed/tess/800/1200',
    nrcRating: 0.92,
    material: 'POLY-CARBON',
    status: 'IN_STOCK'
  },
  {
    id: '11',
    name: 'SERIES 08',
    seriesId: 'S1-ARCH',
    price: 28000,
    description: 'Hybrid absorber/diffuser with brushed aluminum finish for premium studio aesthetics.',
    image: 'https://picsum.photos/seed/hybrid/800/1200',
    nrcRating: 0.96,
    material: 'ALU-POLY',
    status: 'LOW_SUPPLY',
    stockCount: 4
  },
  {
    id: '2',
    name: 'SERIES 02',
    seriesId: 'S2-EXP',
    price: 23100,
    description: 'Microscopic texture of porous high-density acoustic suppression material in obsidian black under harsh clinical studio light.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfI81PH-nTqv_ifnvi4Cx19EKHg3E7TNuPZ4I6ZFYlrcXfQng8r0KxRYzm7oIG-vjk-QvLUeUIaccDYQXiLjK9kBZh_EgXX9HtE94uD9iGpEhNF7E2AJpqD_CzYdqgBuKkfhEfKxcECKdo1lcaKjOqhOX0N5ZCwD4RLiVsTz6BnJGubpJTwr8fd_l9p-lEZfRXaj3xgrOYhtYKs28ON_kaaPqrljcwBbEXHv5NeCq4LqtF37lbzMWjUAwNXBPH88DrPX_F3x87JEI',
    nrcRating: 1.05,
    material: 'POLY-CARBON',
    status: 'LOW_SUPPLY',
    stockCount: 2
  },
  {
    id: '5',
    name: 'SERIES 04',
    seriesId: 'S2-EXP',
    price: 31500,
    description: 'Experimental diffusion array with non-linear scattering patterns for advanced spatial audio control.',
    image: 'https://picsum.photos/seed/diffuse/800/1200',
    nrcRating: 1.12,
    material: 'COMPOSITE-X',
    status: 'IN_STOCK'
  },
  {
    id: '6',
    name: 'SERIES 05',
    seriesId: 'S2-EXP',
    price: 43200,
    description: 'The V-VOID prototype. Total acoustic absorption across the full spectrum. Limited experimental release.',
    image: 'https://picsum.photos/seed/void/800/1200',
    nrcRating: 1.25,
    material: 'V-CARBON',
    status: 'LOW_SUPPLY',
    stockCount: 1
  },
  {
    id: '12',
    name: 'SERIES 09',
    seriesId: 'S2-EXP',
    price: 55000,
    description: 'Active noise cancellation panel with integrated sensor array and real-time phase adjustment.',
    image: 'https://picsum.photos/seed/active/800/1200',
    nrcRating: 1.45,
    material: 'SMART-FOAM',
    status: 'IN_STOCK'
  },
  {
    id: '13',
    name: 'SERIES 10',
    seriesId: 'S2-EXP',
    price: 62000,
    description: 'Liquid-cooled acoustic core for high-power studio environments and extreme thermal stability.',
    image: 'https://picsum.photos/seed/liquid/800/1200',
    nrcRating: 1.55,
    material: 'CRYO-CARBON',
    status: 'LOW_SUPPLY',
    stockCount: 1
  },
  {
    id: '3',
    name: 'SERIES 03',
    seriesId: 'S3-ESS',
    price: 14500,
    description: 'Minimalist vertical slats of sound absorbing material creating deep shadows and architectural depth on a dark grey background.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVGVLb8KO9vOFH8eUDg0QEyc0UF3Eo2e5s_OCSaN1-d3LphktJzCuPlcQegyglqHn2XQc93a-iT3kaubzxZ3lpRpE5Z54ArKH_EDFyWf-S70s4cCxTUUvVFq2jnij-jkyUBaOuERz5DCLMd1ySFswtUs36BJz30MhmtkKW5wkBri-uUcsqQStrtNV5iGd9ncUuEWqHwD2ppE3yfH9CTNhcla5Za30-XO4mp7QKTeNKW6RcME1n-S6ZIOs1ZFfFGAUIwsrky-E8StY',
    nrcRating: 0.88,
    material: 'POLY-CARBON',
    status: 'IN_STOCK'
  },
  {
    id: '7',
    name: 'UNIT 01',
    seriesId: 'S3-ESS',
    price: 6400,
    description: 'Essential acoustic block for foundational sound treatment. Clean lines, reliable performance.',
    image: 'https://picsum.photos/seed/basic/800/1200',
    nrcRating: 0.75,
    material: 'CORE-FOAM',
    status: 'IN_STOCK'
  },
  {
    id: '8',
    name: 'UNIT 02',
    seriesId: 'S3-ESS',
    price: 8900,
    description: 'Lightweight slat system for rapid deployment in home studio environments.',
    image: 'https://picsum.photos/seed/lite/800/1200',
    nrcRating: 0.82,
    material: 'LITE-POLY',
    status: 'IN_STOCK'
  },
  {
    id: '14',
    name: 'UNIT 03',
    seriesId: 'S3-ESS',
    price: 12000,
    description: 'Corner bass trap with high-density mineral wool core for effective low-end management.',
    image: 'https://picsum.photos/seed/trap/800/1200',
    nrcRating: 1.10,
    material: 'WOOL-CORE',
    status: 'IN_STOCK'
  },
  {
    id: '15',
    name: 'UNIT 04',
    seriesId: 'S3-ESS',
    price: 7500,
    description: 'Portable vocal booth shield with adjustable wings for controlled recording in any space.',
    image: 'https://picsum.photos/seed/shield/800/1200',
    nrcRating: 0.85,
    material: 'FLEX-FOAM',
    status: 'IN_STOCK'
  },
  {
    id: '4',
    name: 'X_UNIT 00',
    seriesId: 'X-RESTRICTED',
    price: 0,
    description: 'RESTRICTED ACCESS. AUTHORIZATION REQUIRED.',
    image: '',
    nrcRating: 0,
    material: 'UNKNOWN',
    status: 'RESTRICTED'
  },
  {
    id: '16',
    name: 'X_UNIT 01',
    seriesId: 'X-RESTRICTED',
    price: 0,
    description: 'CLASSIFIED. LEVEL 4 CLEARANCE REQUIRED.',
    image: '',
    nrcRating: 0,
    material: 'CLASSIFIED',
    status: 'RESTRICTED'
  }
];
