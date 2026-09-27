import { Product } from '../types';

export const products: Product[] = [
  // Laptops
  {
    id: 'lap-01',
    name: 'HP Pavilion 15 Intel Core i5 12th Gen',
    brand: 'HP',
    category: 'Laptops',
    description: 'Reliable everyday computing powerhouse with 16GB RAM, 512GB NVMe SSD, and Intel Core i5 12th Gen processor. Ideal for BCA/CS coding, college projects, and multitasking.',
    price: 54999,
    originalPrice: 68990,
    discountPercentage: 20,
    rating: 4.5,
    reviewCount: 342,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '12th Gen Intel Core i5-1235U (10 Cores, up to 4.4 GHz)',
      '16GB DDR4 3200MHz RAM for seamless IDE & container performance',
      '512GB PCIe NVMe M.2 SSD for lightning-fast boot and build times',
      '15.6-inch Full HD (1920x1080) Micro-Edge IPS Anti-glare Display',
      'Backlit keyboard with dedicated numeric keypad',
      'HP Fast Charge: 0 to 50% in approximately 45 minutes'
    ],
    specifications: {
      processor: 'Intel Core i5-1235U (12th Gen)',
      ram: '16GB DDR4 (Expandable up to 32GB)',
      storage: '512GB M.2 NVMe SSD',
      display: '15.6" FHD (1920 x 1080) Anti-Glare IPS 250 nits',
      battery: '3-cell, 41 Wh Li-ion (up to 7.5 hours)',
      os: 'Windows 11 Home + MS Office 2021',
      weight: '1.75 kg',
      connectivity: 'Wi-Fi 6, Bluetooth 5.2, USB Type-C, HDMI 2.1',
      warranty: '1 Year Onsite Manufacturer Warranty',
      color: 'Natural Silver',
      inTheBox: 'Laptop, 65W Power Adapter, User Manual'
    },
    badge: 'Bestseller'
  },
  {
    id: 'lap-02',
    name: 'Lenovo ThinkPad E14 Gen 5 AMD Ryzen 5',
    brand: 'Lenovo',
    category: 'Laptops',
    description: 'Legendary ThinkPad durability meets modern power. Built with Ryzen 5 7530U, 16GB RAM, military-grade ruggedness, and a comfortable ergonomic keyboard tailored for programmers.',
    price: 58999,
    originalPrice: 72990,
    discountPercentage: 19,
    rating: 4.7,
    reviewCount: 289,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'AMD Ryzen 5 7530U 6-core 12-thread processor',
      '16GB DDR4 3200MHz RAM with unmatched multitasking stability',
      '512GB High-speed SSD with dual M.2 slot expansion support',
      '14.0" WUXGA (1920 x 1200) IPS 300 nits display with 16:10 aspect ratio',
      'MIL-STD-810H military certification for extreme durability',
      'FHD 1080p camera with privacy shutter and fingerprint reader in power key'
    ],
    specifications: {
      processor: 'AMD Ryzen 5 7530U (6 Cores / 12 Threads, up to 4.5 GHz)',
      ram: '16GB DDR4 RAM',
      storage: '512GB PCIe Gen 4 SSD',
      display: '14-inch WUXGA IPS Anti-Glare 300 nits (16:10)',
      battery: '47 Wh Battery, Rapid Charge (80% in 1 hr)',
      os: 'Windows 11 Home',
      weight: '1.53 kg',
      connectivity: 'Wi-Fi 6E, Bluetooth 5.1, USB-C 3.2 Gen 1, RJ45 Ethernet',
      warranty: '1 Year Premier Onsite Support',
      color: 'Arctic Grey',
      inTheBox: 'ThinkPad Laptop, 65W USB-C Charger, Documentation'
    },
    badge: 'Top Rated'
  },
  {
    id: 'lap-03',
    name: 'ASUS ROG Strix G16 Gaming Laptop',
    brand: 'ASUS',
    category: 'Laptops',
    description: 'Ultimate esports gaming machine featuring 13th Gen Intel Core i7-13650HX, 6GB NVIDIA GeForce RTX 4050 GPU, 165Hz FHD display, and ROG Intelligent Cooling with liquid metal.',
    price: 94999,
    originalPrice: 119990,
    discountPercentage: 21,
    rating: 4.8,
    reviewCount: 198,
    stockStatus: 'Only 3 left',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Intel Core i7-13650HX (14 cores, up to 4.9 GHz)',
      'NVIDIA GeForce RTX 4050 with 6GB GDDR6 VRAM and MUX Switch',
      '16GB DDR5 4800MHz dual-channel RAM (upgradeable to 32GB)',
      '1TB PCIe 4.0 NVMe M.2 SSD for massive modern game libraries',
      '16-inch FHD+ 165Hz 100% sRGB IPS display with G-Sync support',
      'Aura Sync 4-Zone RGB Backlit Chiclet Keyboard'
    ],
    specifications: {
      processor: 'Intel Core i7-13650HX 13th Gen',
      ram: '16GB DDR5 4800MHz',
      storage: '1TB M.2 NVMe PCIe 4.0 SSD',
      display: '16-inch FHD+ 165Hz IPS (1920x1200) 16:10',
      battery: '90WHrs 4-cell Li-ion Battery',
      os: 'Windows 11 Home',
      weight: '2.50 kg',
      connectivity: 'Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4, HDMI 2.1 FRL',
      warranty: '1 Year International Warranty + 1 Year Accidental Damage',
      color: 'Eclipse Gray',
      inTheBox: 'ROG Strix G16 Laptop, 280W AC Adapter, Manual'
    },
    badge: 'Trending'
  },
  {
    id: 'lap-04',
    name: 'Apple MacBook Air 13.6" M2 Chip',
    brand: 'Apple',
    category: 'Laptops',
    description: 'Incredibly thin and fast. Powered by Apple M2 chip, vibrant Liquid Retina display, up to 18 hours of battery life, and silent fanless design.',
    price: 89900,
    originalPrice: 99900,
    discountPercentage: 10,
    rating: 4.9,
    reviewCount: 612,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Apple M2 chip with 8-core CPU and 8-core GPU',
      '8GB Unified Memory with 100GB/s memory bandwidth',
      '256GB ultrafast SSD storage',
      '13.6-inch Liquid Retina display with 500 nits brightness and True Tone',
      'Up to 18 hours battery life for all-day workflow unplugged',
      '1080p FaceTime HD camera, three-mic array, and Spatial Audio sound'
    ],
    specifications: {
      processor: 'Apple M2 8-core CPU with 4 performance and 4 efficiency cores',
      ram: '8GB Unified Memory',
      storage: '256GB SSD',
      display: '13.6" Liquid Retina (2560 x 1664) 500 nits True Tone',
      battery: '52.6-watt-hour lithium-polymer, MagSafe 3 charging',
      os: 'macOS Sonoma',
      weight: '1.24 kg',
      connectivity: 'Wi-Fi 6 (802.11ax), Bluetooth 5.3, Two Thunderbolt/USB 4 ports',
      warranty: '1 Year Apple Limited Warranty',
      color: 'Midnight',
      inTheBox: 'MacBook Air, 30W USB-C Power Adapter, USB-C to MagSafe 3 Cable'
    },
    badge: 'Bestseller'
  },
  {
    id: 'lap-05',
    name: 'Dell Inspiron 14 5430 Core i5 13th Gen',
    brand: 'Dell',
    category: 'Laptops',
    description: 'Sleek aluminum body laptop with 13th Gen Intel Core i5, 16GB LPDDR5 RAM, and 512GB SSD. Perfect balance of professional design and portable performance.',
    price: 64990,
    originalPrice: 79990,
    discountPercentage: 19,
    rating: 4.4,
    reviewCount: 154,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '13th Gen Intel Core i5-1335U (12MB Cache, up to 4.60 GHz)',
      '16GB 4800MHz LPDDR5 RAM on-board',
      '512GB M.2 PCIe NVMe Solid State Drive',
      '14.0-inch 16:10 FHD+ (1920 x 1200) Anti-Glare Non-Touch 250nits',
      'Waves MaxxAudio Pro tuned stereo speakers',
      'Fingerprint reader integrated into power key'
    ],
    specifications: {
      processor: 'Intel Core i5-1335U (13th Gen)',
      ram: '16GB LPDDR5 4800MHz',
      storage: '512GB PCIe NVMe SSD',
      display: '14" FHD+ 1920x1200 Anti-Glare 250 nits',
      battery: '4-Cell 54WHr Integrated Battery',
      os: 'Windows 11 Home + Office Home & Student 2021',
      weight: '1.59 kg',
      connectivity: 'Intel Wi-Fi 6E AX211, Bluetooth 5.3, Thunderbolt 4',
      warranty: '1 Year Onsite Hardware Service',
      color: 'Platinum Silver',
      inTheBox: 'Dell Laptop, 65W AC Adapter, Quick Setup Guide'
    }
  },

  // Smartphones
  {
    id: 'ph-01',
    name: 'Samsung Galaxy S24 Ultra 5G (12GB + 256GB)',
    brand: 'Samsung',
    category: 'Smartphones',
    description: 'The pinnacle of smartphone innovation. Features Titanium frame, revolutionary Galaxy AI, Snapdragon 8 Gen 3 for Galaxy, and an industry-leading 200MP Quad Tele camera system with built-in S Pen.',
    price: 129999,
    originalPrice: 134999,
    discountPercentage: 4,
    rating: 4.8,
    reviewCount: 780,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Snapdragon 8 Gen 3 for Galaxy (4nm) with ray tracing support',
      '200MP Main + 50MP Periscope (5x optical zoom) + 10MP (3x) + 12MP Ultra-wide',
      'Galaxy AI: Circle to Search, Live Call Translation, Note Assist',
      '6.8-inch Flat QHD+ Dynamic AMOLED 2X 120Hz display with 2600 nits peak',
      'Corning Gorilla Armor anti-reflective glass and Titanium exterior',
      'Embedded S-Pen stylus for precision note-taking and drawing'
    ],
    specifications: {
      processor: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy',
      ram: '12GB LPDDR5X',
      storage: '256GB UFS 4.0',
      display: '6.8" Dynamic AMOLED 2X, 3120x1440, 1-120Hz LTPO',
      battery: '5000 mAh with 45W wired and 15W wireless charging',
      camera: '200MP + 50MP + 10MP + 12MP Rear | 12MP Front',
      os: 'One UI 6.1 based on Android 14 (7 years of OS updates)',
      weight: '232 g',
      connectivity: '5G SA/NSA, Wi-Fi 7, Bluetooth 5.3, UWB, NFC',
      warranty: '1 Year Manufacturer Warranty for Phone, 6 Months for Accessories',
      color: 'Titanium Gray',
      inTheBox: 'Smartphone, Data Cable (Type C-to-C), Ejection Pin, S Pen'
    },
    badge: 'Bestseller'
  },
  {
    id: 'ph-02',
    name: 'Apple iPhone 15 Pro (128GB)',
    brand: 'Apple',
    category: 'Smartphones',
    description: 'Forged in aerospace-grade titanium with the breakthrough A17 Pro chip, customizable Action button, Pro camera system with 48MP main lens, and USB-C with USB 3 speeds.',
    price: 124900,
    originalPrice: 134900,
    discountPercentage: 7,
    rating: 4.9,
    reviewCount: 920,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'A17 Pro chip with 6-core GPU enabling console games on mobile',
      'Strong and lightweight titanium design with textured matte glass back',
      '6.1-inch Super Retina XDR display with ProMotion 120Hz and Always-On',
      '48MP Main camera with multiple focal lengths (24mm, 28mm, 35mm)',
      'Action button for quick shortcuts: flashlight, camera, voice memo',
      'USB-C connector with USB 3 speeds up to 10Gb/s'
    ],
    specifications: {
      processor: 'Apple A17 Pro chip (3nm)',
      ram: '8GB Unified Memory',
      storage: '128GB NVMe',
      display: '6.1" Super Retina XDR OLED, 2556 x 1179, ProMotion 120Hz',
      battery: '3274 mAh, Up to 23 hours video playback, MagSafe 15W',
      camera: '48MP Main + 12MP Ultra Wide + 12MP 3x Telephoto | 12MP TrueDepth',
      os: 'iOS 17',
      weight: '187 g',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, Second-gen Ultra Wideband',
      warranty: '1 Year Apple Limited Hardware Warranty',
      color: 'Natural Titanium',
      inTheBox: 'iPhone with iOS 17, USB-C Charge Cable (1m), Documentation'
    },
    badge: 'Trending'
  },
  {
    id: 'ph-03',
    name: 'Xiaomi Redmi Note 13 Pro+ 5G (8GB + 256GB)',
    brand: 'Xiaomi',
    category: 'Smartphones',
    description: 'Flagship-grade mid-ranger featuring 200MP camera with OIS, 120Hz 1.5K curved AMOLED display, MediaTek Dimensity 7200-Ultra, and blazing 120W HyperCharge.',
    price: 28999,
    originalPrice: 33999,
    discountPercentage: 15,
    rating: 4.6,
    reviewCount: 410,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Flagship 200MP Samsung ISOCELL HP3 camera with OIS + EIS',
      'MediaTek Dimensity 7200-Ultra 4nm 5G chipset for snappy gaming',
      '1.5K 120Hz 3D Curved AMOLED screen with Corning Gorilla Glass Victus',
      '120W HyperCharge: 100% full charge in just 19 minutes',
      'IP68 water and dust resistance for worry-free usage',
      'Stereo dual speakers with Dolby Atmos support'
    ],
    specifications: {
      processor: 'MediaTek Dimensity 7200-Ultra (4nm Octa-core up to 2.8GHz)',
      ram: '8GB LPDDR5',
      storage: '256GB UFS 3.1',
      display: '6.67" 1.5K 120Hz Curved AMOLED, 1800 nits peak, Dolby Vision',
      battery: '5000 mAh with 120W in-box charger',
      camera: '200MP Main OIS + 8MP Ultra-wide + 2MP Macro | 16MP Selfie',
      os: 'MIUI 14 based on Android 13 (HyperOS update available)',
      weight: '204 g',
      connectivity: 'Dual 5G, Wi-Fi 6, Bluetooth 5.3, NFC, IR Blaster',
      warranty: '1 Year Brand Warranty for Phone',
      color: 'Fusion Black',
      inTheBox: 'Handset, 120W Power Adapter, USB Type-C Cable, SIM Tool, Case'
    },
    badge: 'Deal of the Day',
    isDealOfTheDay: true
  },
  {
    id: 'ph-04',
    name: 'Samsung Galaxy A35 5G (8GB + 128GB)',
    brand: 'Samsung',
    category: 'Smartphones',
    description: 'Premium glass back design with IP67 water resistance, 50MP OIS camera, 120Hz Super AMOLED display, and reliable Knox Vault security under ₹30,000.',
    price: 25999,
    originalPrice: 30999,
    discountPercentage: 16,
    rating: 4.4,
    reviewCount: 220,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Exynos 1380 Octa-core chipset with integrated 5G',
      '6.6-inch FHD+ Super AMOLED 120Hz display with Vision Booster (1000 nits)',
      '50MP main sensor with OIS for sharp photos and stabilized video',
      'IP67 dust and water resistance up to 1 meter for 30 minutes',
      '5000 mAh battery offering up to 2 days of battery life',
      '4 OS updates and 5 years of security maintenance'
    ],
    specifications: {
      processor: 'Exynos 1380 (5nm Octa-core)',
      ram: '8GB RAM',
      storage: '128GB (Expandable up to 1TB via microSD)',
      display: '6.6" FHD+ Super AMOLED 120Hz, Gorilla Glass Victus+',
      battery: '5000 mAh with 25W Fast Charging',
      camera: '50MP OIS + 8MP Ultra Wide + 5MP Macro | 13MP Front',
      os: 'One UI 6.1 based on Android 14',
      weight: '209 g',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC',
      warranty: '1 Year Manufacturer Warranty for Device',
      color: 'Awesome Navy',
      inTheBox: 'Smartphone, Data Cable (Type C to C), Ejection Pin'
    }
  },
  {
    id: 'ph-05',
    name: 'OnePlus 12R 5G (8GB + 128GB)',
    brand: 'OnePlus',
    category: 'Smartphones',
    description: 'The performance flagship powered by Snapdragon 8 Gen 2, 4th Gen LTPO 120Hz ProXDR display, massive 5500 mAh battery, and 100W SUPERVOOC charging.',
    price: 39999,
    originalPrice: 42999,
    discountPercentage: 7,
    rating: 4.7,
    reviewCount: 380,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Snapdragon 8 Gen 2 Mobile Platform for flagship tier gaming',
      '6.78-inch 1.5K 1-120Hz ProXDR 4th Gen LTPO AMOLED with 4500 nits peak',
      '5500 mAh battery - the largest ever in a OnePlus phone',
      '100W SUPERVOOC charger charges from 1 to 100% in 26 minutes',
      'Dual Cryo-velocity VC cooling system for sustained FPS in BGMI & Genshin',
      'Sony IMX890 50MP flagship primary camera with OIS'
    ],
    specifications: {
      processor: 'Snapdragon 8 Gen 2 (4nm Octa-core)',
      ram: '8GB LPDDR5X',
      storage: '128GB UFS 3.1',
      display: '6.78" 1.5K AMOLED LTPO 4.0 120Hz, Gorilla Glass Victus 2',
      battery: '5500 mAh with 100W SUPERVOOC Power Adapter',
      camera: '50MP IMX890 OIS + 8MP Ultra-wide + 2MP Macro | 16MP Selfie',
      os: 'OxygenOS 14 based on Android 14',
      weight: '207 g',
      connectivity: '5G Dual SIM, Wi-Fi 7 ready, Bluetooth 5.3, NFC',
      warranty: '1 Year Brand Warranty',
      color: 'Iron Gray',
      inTheBox: 'Device, 100W SUPERVOOC Adapter, Type-A to C Cable, Case, SIM Ejector'
    },
    badge: 'Trending'
  },

  // Headphones & Earbuds
  {
    id: 'hp-01',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    brand: 'Sony',
    category: 'Headphones & Earbuds',
    description: 'Industry-leading Active Noise Cancellation with two processors and 8 microphones. Exceptional Hi-Res sound quality with LDAC, crystal clear hands-free calls, and 30-hour battery life.',
    price: 28990,
    originalPrice: 34990,
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 540,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Auto NC Optimizer: Noise cancellation automatically adjusts to environment',
      'Specially engineered 30mm precision driver unit with carbon fiber dome',
      'Crystal clear hands-free calling with 4 beamforming microphones',
      'Multi-point connection: pair with two Bluetooth devices at once',
      '30-hour battery life with quick 3-minute charge providing 3 hours playback',
      'Intuitive touch controls for play, pause, volume, and voice assistant'
    ],
    specifications: {
      connectivity: 'Bluetooth 5.2, 3.5mm Audio Jack, USB Type-C',
      battery: 'Up to 30 hours with ANC on (40 hours with ANC off)',
      noiseCancellation: 'Industry-leading Active Noise Cancellation with HD Processor QN1 & V1',
      weight: '250 g',
      warranty: '1 Year Manufacturer Warranty',
      color: 'Silver / Platinum',
      inTheBox: 'Headphones, Carrying Case, 3.5mm Cable (1.2m), USB Charging Cable'
    },
    badge: 'Bestseller'
  },
  {
    id: 'hp-02',
    name: 'JBL Tune 760NC Over-Ear Wireless ANC Headphones',
    brand: 'JBL',
    category: 'Headphones & Earbuds',
    description: 'Punchy JBL Pure Bass Sound with Active Noise Cancellation under ₹5,000. Up to 35 hours battery life with ANC on, lightweight foldable design, and multi-point pairing.',
    price: 4499,
    originalPrice: 7999,
    discountPercentage: 44,
    rating: 4.3,
    reviewCount: 890,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Active Noise Cancellation to tune out background noise in cafes or commutes',
      'JBL Pure Bass Sound with punchy 40mm dynamic drivers',
      'Up to 35 hours battery life with ANC on, 50 hours with ANC off',
      'Fast charge: 2 hours of music playback in just 5 minutes of charging',
      'Lightweight and foldable compact construction for easy travel',
      'Seamless multi-point connection switching between laptop and phone'
    ],
    specifications: {
      connectivity: 'Bluetooth 5.0, 3.5mm Aux Cable, USB-C',
      battery: 'Up to 35 hours with ANC on (610 mAh Li-ion)',
      noiseCancellation: 'Active Noise Cancelling (ANC)',
      weight: '220 g',
      warranty: '1 Year Brand Warranty',
      color: 'Matte Black',
      inTheBox: 'JBL Tune 760NC, USB Type-C Charging Cable, Detachable Audio Cable, QSG'
    },
    badge: 'Deal of the Day',
    isDealOfTheDay: true
  },
  {
    id: 'hp-03',
    name: 'Sony WH-CH520 Wireless On-Ear Headphones',
    brand: 'Sony',
    category: 'Headphones & Earbuds',
    description: 'Remarkable 50-hour battery life, DSEE sound enhancement, customizable EQ via Sony Headphones Connect app, and crystal clear call quality under ₹4,000.',
    price: 3990,
    originalPrice: 4990,
    discountPercentage: 20,
    rating: 4.5,
    reviewCount: 610,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Up to 50 hours battery life on a single charge',
      '3-minute quick charging gives 1.5 hours of playback',
      'DSEE restores high frequency sounds lost during compression',
      'Multipoint connection lets you pair with two Bluetooth devices simultaneously',
      'Built-in high-quality microphone for clear hands-free calls',
      'Lightweight swivel design with plush ear cushions'
    ],
    specifications: {
      connectivity: 'Bluetooth 5.2, USB Type-C',
      battery: 'Up to 50 hours battery life',
      noiseCancellation: 'Passive Noise Isolation with DSEE upscaling',
      weight: '147 g',
      warranty: '1 Year Sony India Warranty',
      color: 'Beige',
      inTheBox: 'Headphones, USB-C Charging Cable, Reference Guide'
    }
  },
  {
    id: 'hp-04',
    name: 'Apple AirPods Pro (2nd Generation) USB-C',
    brand: 'Apple',
    category: 'Headphones & Earbuds',
    description: 'Up to 2x more Active Noise Cancellation, Adaptive Audio, Transparency mode, Personalized Spatial Audio with dynamic head tracking, and MagSafe Charging Case (USB-C).',
    price: 23999,
    originalPrice: 24900,
    discountPercentage: 4,
    rating: 4.9,
    reviewCount: 1100,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Apple H2 headphone chip delivering smarter noise cancellation and 3D sound',
      'Adaptive Audio dynamically blends Transparency and Active Noise Cancellation',
      'Conversation Awareness lowers volume when you begin speaking with someone',
      'Personalized Spatial Audio with dynamic head tracking',
      'MagSafe Charging Case (USB-C) with speaker and lanyard loop',
      'IP54 dust, sweat, and water resistant for earbuds and case'
    ],
    specifications: {
      connectivity: 'Bluetooth 5.3, USB-C, MagSafe / Qi Wireless Charging',
      battery: 'Up to 6 hours listening time (up to 30 hours with case)',
      noiseCancellation: 'Pro-grade Active Noise Cancellation & Adaptive Transparency',
      weight: '5.3 g per earbud, 50.8 g case',
      warranty: '1 Year Apple Limited Warranty',
      color: 'White',
      inTheBox: 'AirPods Pro, MagSafe Case USB-C, Silicone ear tips (4 sizes), USB-C Cable'
    },
    badge: 'Top Rated'
  },
  {
    id: 'hp-05',
    name: 'boAt Rockerz 550 Over-Ear Wireless Headphones',
    brand: 'boAt',
    category: 'Headphones & Earbuds',
    description: 'Massive 50mm dynamic drivers providing signature thumping bass, up to 20 hours battery life, physical noise isolation, and dual mode (Bluetooth / Aux) connectivity.',
    price: 1799,
    originalPrice: 4999,
    discountPercentage: 64,
    rating: 4.2,
    reviewCount: 1450,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '50mm Dynamic Sound drivers for heavy immersive bass',
      'Up to 20 hours uninterrupted audio playback on single charge',
      'Dual Mode: Connect wirelessly via Bluetooth or wired via 3.5mm AUX',
      'Ergonomic plush ear cushions designed for long study or gaming sessions',
      'Instant voice assistant integration with Siri and Google Assistant'
    ],
    specifications: {
      connectivity: 'Bluetooth 5.0, 3.5mm Aux Port, Micro USB',
      battery: '500 mAh battery providing up to 20 hours playback',
      noiseCancellation: 'Passive Physical Noise Isolation',
      weight: '245 g',
      warranty: '1 Year boAt Warranty',
      color: 'Army Green',
      inTheBox: 'Rockerz 550, Charging Cable, AUX Cable, User Manual'
    },
    badge: 'Deal of the Day',
    isDealOfTheDay: true
  },

  // TVs & Monitors
  {
    id: 'tv-01',
    name: 'LG UltraGear 27" QHD 144Hz IPS Gaming Monitor (27GN800)',
    brand: 'LG',
    category: 'TVs & Monitors',
    description: 'High-performance 27-inch QHD (2560x1440) IPS monitor with 144Hz refresh rate, 1ms MBR response time, HDR10, and NVIDIA G-Sync compatibility. Superb for programming and competitive gaming.',
    price: 21999,
    originalPrice: 32000,
    discountPercentage: 31,
    rating: 4.7,
    reviewCount: 310,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '27" QHD (2560 x 1440) IPS panel with 99% sRGB color gamut',
      '144Hz Refresh Rate with 1ms MBR for silky smooth frame transitions',
      'NVIDIA G-SYNC Compatible and AMD FreeSync Premium certified',
      'HDR10 support for deep contrast and cinematic gaming visuals',
      'Ultra-thin 3-side borderless bezel design for dual-monitor setups',
      'Dynamic Action Sync & Black Stabilizer to spot enemies in dark scenes'
    ],
    specifications: {
      display: '27-inch IPS QHD (2560 x 1440)',
      resolution: '2560 x 1440 (2K QHD)',
      refreshRate: '144Hz',
      connectivity: '2x HDMI 2.0, 1x DisplayPort 1.4, Headphone Out',
      warranty: '3 Years LG Onsite India Warranty',
      weight: '6.0 kg (with stand)',
      color: 'Matte Black with Red Accents',
      inTheBox: 'Monitor, Stand base/body, DisplayPort Cable, Power Cord'
    },
    badge: 'Bestseller'
  },
  {
    id: 'tv-02',
    name: 'Samsung 32" M7 4K UHD Smart Monitor with Streaming TV',
    brand: 'Samsung',
    category: 'TVs & Monitors',
    description: 'The world’s first do-it-all screen. Watch Netflix, Prime Video, YouTube without a PC. Work PC-free with Microsoft 365, USB-C 65W charging, 4K resolution, and remote control.',
    price: 28999,
    originalPrice: 42000,
    discountPercentage: 31,
    rating: 4.6,
    reviewCount: 195,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '32-inch 4K UHD (3840 x 2160) VA display with HDR10',
      'Smart TV platform with built-in Netflix, YouTube, Prime Video, Disney+ Hotstar',
      'USB Type-C port: Power (65W), transmit data, and display signals in one cable',
      'Remote Work: Access office PC remotely and work without turning on desktop',
      'Built-in speakers and smart solar remote control included',
      'Apple AirPlay 2 and Wireless DeX support for mobile screen mirroring'
    ],
    specifications: {
      display: '32-inch VA 4K UHD (3840 x 2160)',
      resolution: '3840 x 2160 (4K UHD)',
      refreshRate: '60Hz',
      connectivity: '1x USB-C (65W PD), 2x HDMI 2.0, 3x USB 2.0, Wi-Fi 5, Bluetooth 4.2',
      warranty: '3 Years Brand Warranty',
      weight: '6.5 kg with stand',
      color: 'Warm White',
      inTheBox: 'Monitor, Stand, HDMI Cable, Power Cable, SolarCell Remote'
    },
    badge: 'Trending'
  },
  {
    id: 'tv-03',
    name: 'Sony Bravia 55" 4K Ultra HD Smart Google TV (KD-55X74L)',
    brand: 'Sony',
    category: 'TVs & Monitors',
    description: 'Transform home entertainment with Sony 4K Processor X1, Live Colour technology, Google TV interface, 20W Dolby Audio stereo speakers, and Apple AirPlay.',
    price: 57990,
    originalPrice: 99900,
    discountPercentage: 42,
    rating: 4.7,
    reviewCount: 480,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '4K Processor X1 uses advanced algorithms to cut noise and boost detail',
      'Live Colour technology produces natural, lifelike pictures without oversaturation',
      'Google TV brings together 10,000+ apps, personalized recommendations',
      'Open Baffle Speaker with 20W Dolby Audio for punchy dialogue',
      'Motionflow XR 100 delivers smooth, sharp details in fast-action movies',
      'X-Protection PRO defends against dust, humidity, lightning, and power surges'
    ],
    specifications: {
      display: '55-inch 4K LED (3840 x 2160)',
      resolution: '4K Ultra HD (3840x2160)',
      refreshRate: '60Hz',
      connectivity: '3x HDMI ports, 2x USB ports, Dual-band Wi-Fi, Bluetooth 5.0',
      warranty: '1 Year Comprehensive Sony Warranty + 1 Year Additional on Panel',
      weight: '14.0 kg',
      color: 'Black Hairline',
      inTheBox: '55" TV, Table Top Stand, Voice Remote, Batteries, Power Cord'
    },
    badge: 'Deal of the Day',
    isDealOfTheDay: true
  },

  // Smart Watches
  {
    id: 'sw-01',
    name: 'Apple Watch Series 9 GPS 45mm',
    brand: 'Apple',
    category: 'Smart Watches',
    description: 'Powered by the S9 SiP chip with Double Tap gesture, brighter Always-On Retina display, on-device Siri, Precision Finding for iPhone, and comprehensive health sensors.',
    price: 44900,
    originalPrice: 47900,
    discountPercentage: 6,
    rating: 4.8,
    reviewCount: 390,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'S9 SiP chip with 4-core Neural Engine and magic Double Tap gesture',
      'Always-On Retina display with up to 2000 nits brightness',
      'Advanced health sensors: ECG app, Blood Oxygen, Temperature sensing, Heart Rate',
      'Safety features: Crash Detection, Fall Detection, and Emergency SOS',
      'Water resistant 50m (swimproof) and dust resistant IP6X',
      'All-day 18-hour battery life, up to 36 hours in Low Power Mode'
    ],
    specifications: {
      display: '45mm Always-On Retina LTPO OLED, 2000 nits',
      battery: 'Up to 18 hours normal use, fast magnetic USB-C charging',
      connectivity: 'Wi-Fi 4 (802.11n), Bluetooth 5.3, Second-gen Ultra Wideband chip',
      weight: '38.7 g (aluminum case)',
      warranty: '1 Year Apple Limited Warranty',
      color: 'Midnight Aluminum with Midnight Sport Band',
      inTheBox: 'Apple Watch Case, Sport Band (S/M & M/L), 1m Magnetic Fast Charger'
    },
    badge: 'Bestseller'
  },
  {
    id: 'sw-02',
    name: 'Samsung Galaxy Watch 6 Bluetooth 44mm',
    brand: 'Samsung',
    category: 'Smart Watches',
    description: '20% larger Super AMOLED screen with thinner bezel, comprehensive Sleep Coaching, BioActive sensor (ECG, Blood Pressure, Body Composition), and Wear OS with Google Maps.',
    price: 24999,
    originalPrice: 33999,
    discountPercentage: 26,
    rating: 4.6,
    reviewCount: 260,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '1.5-inch Sapphire Crystal Super AMOLED display with Always-on',
      'Samsung BioActive Sensor: Optical Heart Rate, Electrical Heart, Bioelectrical Impedance',
      'Advanced Sleep Coaching with sleep animal personas and sleep score insights',
      'BIA body composition analysis: body fat percentage, skeletal muscle mass',
      'Powered by Wear OS Powered by Samsung: Play Store apps, Google Wallet',
      '5ATM + IP68 water and dust resistance, MIL-STD-810H certified'
    ],
    specifications: {
      display: '1.5" Super AMOLED 480x480, Sapphire Crystal Glass',
      battery: '425 mAh, Up to 40 hours battery life with fast wireless charging',
      connectivity: 'Bluetooth 5.3, Wi-Fi 2.4+5GHz, NFC, GPS/Glonass/Beidou/Galileo',
      weight: '33.3 g',
      warranty: '1 Year Manufacturer Warranty',
      color: 'Graphite',
      inTheBox: 'Galaxy Watch 6, Fast Wireless Charger Puck, Quick Start Guide'
    }
  },
  {
    id: 'sw-03',
    name: 'Noise ColorFit Ultra 3 Smartwatch 1.96" AMOLED',
    brand: 'Noise',
    category: 'Smart Watches',
    description: 'Huge 1.96-inch vibrant AMOLED display with Always-On display, functional metallic digital crown, Tru Sync Bluetooth Calling, and 7-day battery life under ₹3,500.',
    price: 2999,
    originalPrice: 7999,
    discountPercentage: 62,
    rating: 4.3,
    reviewCount: 780,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '1.96" AMOLED display with 410x502 resolution and 500 nits brightness',
      'Single-chip Bluetooth calling with dedicated dial pad and recent call logs',
      'Functional rotating crown to scroll menus, change watch faces and volume',
      'Noise Health Suite: 24/7 Heart Rate, SpO2, Sleep monitor, Stress tracking',
      '100+ Sports modes with auto workout detection',
      'Up to 7 days battery life on typical use, 2 days with heavy BT calling'
    ],
    specifications: {
      display: '1.96" AMOLED (410 x 502) 500 nits',
      battery: '300 mAh (up to 7 days standby)',
      connectivity: 'Bluetooth 5.3',
      weight: '45 g',
      warranty: '1 Year Brand Warranty',
      color: 'Jet Black Metallic',
      inTheBox: 'Smartwatch, Magnetic Charging Cable, User Manual'
    },
    badge: 'Deal of the Day',
    isDealOfTheDay: true
  },

  // Tablets
  {
    id: 'tab-01',
    name: 'Apple iPad Air 11" M2 Chip (Wi-Fi 128GB)',
    brand: 'Apple',
    category: 'Tablets',
    description: 'Supercharged by Apple M2 chip with 8-core CPU and 10-core GPU. Brilliant 11-inch Liquid Retina display, landscape 12MP front camera with Center Stage, and Apple Pencil Pro support.',
    price: 59900,
    originalPrice: 64900,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 310,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Apple M2 chip with blazing fast neural engine for creative workflows',
      '11-inch Liquid Retina display with P3 wide color and anti-reflective coating',
      'Supports Apple Pencil Pro with barrel roll and squeeze haptic feedback',
      'Landscape 12MP Ultra Wide front camera with Center Stage',
      'Landscape stereo speakers with Spatial Audio support',
      'Wi-Fi 6E connectivity for supercharged wireless uploads and downloads'
    ],
    specifications: {
      processor: 'Apple M2 8-core CPU / 10-core GPU',
      ram: '8GB Unified Memory',
      storage: '128GB',
      display: '11" Liquid Retina LED (2360 x 1640) 500 nits',
      battery: '28.93-watt-hour battery (up to 10 hours video or surfing)',
      os: 'iPadOS 17',
      weight: '462 g',
      connectivity: 'Wi-Fi 6E (802.11ax), Bluetooth 5.3, USB-C port with USB 3',
      warranty: '1 Year Apple Limited Warranty',
      color: 'Space Grey',
      inTheBox: 'iPad Air, USB-C Charge Cable (1m), 20W USB-C Power Adapter'
    },
    badge: 'Trending'
  },
  {
    id: 'tab-02',
    name: 'Xiaomi Pad 6 (8GB + 256GB) 144Hz 11-inch',
    brand: 'Xiaomi',
    category: 'Tablets',
    description: 'Flagship productivity tablet featuring Snapdragon 870, crisp 2.8K 144Hz display, Quad stereo speakers with Dolby Atmos, and 8840 mAh battery with 33W fast charge.',
    price: 24999,
    originalPrice: 39999,
    discountPercentage: 38,
    rating: 4.6,
    reviewCount: 520,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Qualcomm Snapdragon 870 7nm processor with high efficiency',
      '11-inch 2.8K (2880 x 1800) 144Hz 7-stage variable refresh rate display',
      'Dolby Vision & Dolby Atmos with Quad stereo speakers',
      'Metal unibody design with sleek 6.51mm thickness and 490g weight',
      'Massive 8840 mAh battery with 33W fast charging adapter in box',
      'MIUI for Pad with multi-window, split-screen, and stylus pen support'
    ],
    specifications: {
      processor: 'Qualcomm Snapdragon 870 Octa-core up to 3.2GHz',
      ram: '8GB LPDDR5',
      storage: '256GB UFS 3.1',
      display: '11" 2.8K (2880x1800) 144Hz IPS 550 nits',
      battery: '8840 mAh with 33W Fast Charging',
      os: 'MIUI 14 for Pad (Android 13, HyperOS eligible)',
      weight: '490 g',
      connectivity: 'Wi-Fi 6, Bluetooth 5.2, USB 3.2 Gen 1 with video output',
      warranty: '1 Year Brand Warranty',
      color: 'Mist Blue',
      inTheBox: 'Xiaomi Pad 6, 33W Power Adapter, USB Type-C Cable, Quick Start Guide'
    },
    badge: 'Bestseller'
  },

  // Gaming
  {
    id: 'gm-01',
    name: 'Sony PlayStation 5 Slim Console (Disc Edition)',
    brand: 'Sony',
    category: 'Gaming',
    description: 'Experience lightning-fast loading with an ultra-high speed 1TB SSD, deeper immersion with haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
    price: 54990,
    originalPrice: 59990,
    discountPercentage: 8,
    rating: 4.9,
    reviewCount: 840,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Slim design with 30% reduced volume and detachable Ultra HD Blu-ray disc drive',
      'Custom AMD Zen 2 CPU and RDNA 2 GPU supporting 4K 120Hz gaming',
      '1TB high-speed NVMe SSD for near-instant load times in demanding titles',
      'Ray Tracing hardware acceleration for ultra-realistic lighting and reflections',
      'Tempest 3D AudioTech brings soundscapes to life around you',
      'Includes DualSense Wireless Controller with dynamic haptic feedback'
    ],
    specifications: {
      processor: 'AMD Zen 2 8-core / 16-thread up to 3.5 GHz',
      ram: '16GB GDDR6',
      storage: '1TB Custom NVMe SSD (Expandable with M.2 NVMe)',
      resolution: '4K 120Hz, 8K output support, HDR',
      connectivity: 'Wi-Fi 6, Gigabit Ethernet, Bluetooth 5.1, HDMI 2.1, USB-C',
      warranty: '1 Year Sony India Warranty',
      weight: '3.2 kg',
      color: 'White & Black',
      inTheBox: 'PS5 Slim Console, DualSense Controller, 1TB SSD, HDMI Cable, AC Cord'
    },
    badge: 'Bestseller'
  },
  {
    id: 'gm-02',
    name: 'ASUS ROG Ally Handheld Gaming Console (Z1 Extreme)',
    brand: 'ASUS',
    category: 'Gaming',
    description: 'Full Windows 11 handheld gaming console powered by AMD Ryzen Z1 Extreme processor, 7" 120Hz 1080p display, FreeSync Premium, and seamless compatibility with Steam, Xbox Game Pass, and Epic.',
    price: 59990,
    originalPrice: 79990,
    discountPercentage: 25,
    rating: 4.5,
    reviewCount: 290,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'AMD Ryzen Z1 Extreme APU with 8-cores, 16-threads, and 8.6 TFlops graphics',
      '7-inch 1080p 120Hz IPS touchscreen with AMD FreeSync Premium and 500 nits',
      'Runs full Windows 11: Play titles from Steam, Game Pass, Epic, Battle.net',
      '16GB LPDDR5 6400MHz dual-channel RAM and 512GB PCIe 4.0 NVMe SSD',
      'Dual fans and anti-gravity heat pipes for whisper-quiet thermal efficiency',
      'Ergonomic console grip with Xbox layout buttons and RGB customizable sticks'
    ],
    specifications: {
      processor: 'AMD Ryzen Z1 Extreme (Zen 4, up to 5.1GHz, 12 RDNA 3 CUs)',
      ram: '16GB LPDDR5 (6400 MT/s)',
      storage: '512GB PCIe 4.0 NVMe M.2 SSD (2230)',
      display: '7" FHD (1920x1080) 120Hz 100% sRGB Gorilla Glass Victus',
      battery: '40WHrs 4-cell Li-ion with 65W USB-C PD Charger',
      os: 'Windows 11 Home',
      weight: '608 g',
      connectivity: 'Wi-Fi 6E, Bluetooth 5.2, ROG XG Mobile interface, microSD reader',
      warranty: '1 Year ASUS Brand Warranty',
      color: 'White',
      inTheBox: 'ROG Ally Console, 65W AC Adapter, Stand Holder, Documentation'
    },
    badge: 'Trending'
  },

  // Cameras
  {
    id: 'cam-01',
    name: 'Canon EOS R50 Mirrorless Camera with RF-S 18-45mm Lens',
    brand: 'Canon',
    category: 'Cameras',
    description: 'Compact and lightweight mirrorless camera with 24.2MP APS-C CMOS sensor, Dual Pixel CMOS AF II, uncropped 4K 30p movie recording, and high-speed shooting up to 15 fps.',
    price: 56999,
    originalPrice: 65995,
    discountPercentage: 14,
    rating: 4.7,
    reviewCount: 180,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '24.2MP APS-C CMOS sensor paired with DIGIC X image processor',
      'Dual Pixel CMOS AF II with deep learning subject detection (people, animals, vehicles)',
      'Uncropped 6K oversampled 4K 30p video and Full HD up to 120p for slow-mo',
      'Electronic shutter shooting up to 15 frames per second',
      'Vari-angle 3.0" touchscreen LCD for effortless vlogging and selfies',
      'Seamless smartphone connection via Canon Camera Connect app and UVC/UAC webcam support'
    ],
    specifications: {
      resolution: '24.2 Megapixels APS-C CMOS',
      display: '3.0-inch 1.62M-dot Vari-angle Touchscreen LCD',
      battery: 'LP-E17 Rechargeable Li-ion (approx. 440 shots)',
      weight: '375 g (body only with battery)',
      connectivity: 'Wi-Fi, Bluetooth 4.2, USB Type-C (USB 2.0), Micro HDMI, 3.5mm Mic In',
      warranty: '2 Years Canon India Warranty',
      color: 'Black',
      inTheBox: 'EOS R50 Body, RF-S18-45mm F4.5-6.3 IS STM, Battery, Charger, Neck Strap'
    },
    badge: 'Bestseller'
  },
  {
    id: 'cam-02',
    name: 'Sony Alpha ILCE-6400L Mirrorless Camera with 16-50mm Lens',
    brand: 'Sony',
    category: 'Cameras',
    description: 'Equipped with the world’s fastest 0.02-second autofocus, 24.2MP Exmor CMOS sensor, Real-time Eye AF for humans and animals, 4K HDR movie recording, and 180-degree tiltable screen.',
    price: 74990,
    originalPrice: 89990,
    discountPercentage: 17,
    rating: 4.8,
    reviewCount: 310,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Fast 0.02 sec AF with 425 phase-detection and contrast-detection points',
      'Real-time Eye AF and Real-time Tracking driven by AI algorithms',
      '24.2MP APS-C Exmor CMOS sensor with BIONZ X image processor',
      'High-resolution 4K movie recording with full pixel readout without pixel binning',
      '180-degree tiltable 3.0-inch touchscreen LCD for vlogging',
      'Durable magnesium alloy body with dust and moisture resistance'
    ],
    specifications: {
      resolution: '24.2 Megapixels APS-C Exmor CMOS',
      display: '3.0-inch 921k-dot 180° Tiltable Touch LCD',
      battery: 'NP-FW50 (approx. 410 shots)',
      weight: '403 g (with battery and memory card)',
      connectivity: 'Wi-Fi, NFC, Bluetooth, Micro-USB, Micro-HDMI, 3.5mm Mic jack',
      warranty: '2 Years Sony India Warranty',
      color: 'Black',
      inTheBox: 'ILCE-6400 Body, SELP1650 Lens, Battery NP-FW50, AC Adaptor, Shoulder Strap'
    },
    badge: 'Top Rated'
  },

  // Computer Accessories
  {
    id: 'acc-01',
    name: 'Logitech MX Master 3S Wireless Performance Mouse',
    brand: 'Logitech',
    category: 'Computer Accessories',
    description: 'The iconic master mouse reimagined. Features Quiet Clicks, 8,000 DPI track-on-glass sensor, MagSpeed electromagnetic scrolling (1,000 lines/sec), and USB-C quick recharging.',
    price: 8995,
    originalPrice: 10995,
    discountPercentage: 18,
    rating: 4.9,
    reviewCount: 720,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Quiet Click switches provide satisfying tactile feel with 90% less click noise',
      '8000 DPI Darkfield optical sensor tracks anywhere—even on bare glass surfaces',
      'MagSpeed electromagnetic scroll wheel scrolls 1,000 lines in a second with precision',
      'Cross-computer Flow control: copy-paste text and images between Mac and Windows',
      'Comfortable ergonomic sculpted silhouette supports palm and fingers naturally',
      'Quick charge: 1 minute of charging gives 3 hours of use; lasts up to 70 days on full charge'
    ],
    specifications: {
      connectivity: 'Bluetooth Low Energy & Logi Bolt USB Receiver',
      battery: 'Rechargeable Li-Po (500 mAh) via USB-C (lasts up to 70 days)',
      weight: '141 g',
      warranty: '1 Year Limited Hardware Warranty',
      color: 'Graphite',
      inTheBox: 'MX Master 3S Mouse, Logi Bolt USB Receiver, USB-C Cable, User Manual'
    },
    badge: 'Bestseller'
  },
  {
    id: 'acc-02',
    name: 'Keychron K2 V2 Wireless Mechanical Keyboard (RGB Hot-Swappable)',
    brand: 'Keychron',
    category: 'Computer Accessories',
    description: 'Compact 75% layout 84-key mechanical keyboard with Mac & Windows support, Gateron G Pro Brown switches, hot-swappable sockets, and vibrant 18-type RGB backlighting.',
    price: 7999,
    originalPrice: 9999,
    discountPercentage: 20,
    rating: 4.8,
    reviewCount: 430,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Wireless Bluetooth 5.1 connection with up to 3 devices + wired USB Type-C mode',
      'Hot-swappable PCB allows you to swap switches without soldering',
      'Pre-lubed Gateron G Pro mechanical switches (Tactile Brown)',
      'Dedicated Mac layout with multimedia keys, includes extra Windows keycaps',
      'Enormous 4000 mAh battery lasts up to 240 hours with backlight turned off',
      '18 types of dynamic RGB backlighting modes with adjustable brightness'
    ],
    specifications: {
      connectivity: 'Bluetooth 5.1 & USB Type-C Wired',
      battery: '4000 mAh Rechargeable Li-polymer (up to 240 hrs without backlight)',
      weight: '790 g',
      warranty: '1 Year Keychron India Warranty',
      color: 'Carbon Grey Aluminum Frame',
      inTheBox: 'Keychron K2 Keyboard, USB-A to USB-C Cable, Keycap Puller, Switch Puller'
    },
    badge: 'Top Rated'
  },
  {
    id: 'acc-03',
    name: 'Logitech G502 HERO High Performance Gaming Mouse',
    brand: 'Logitech',
    category: 'Computer Accessories',
    description: 'The world’s most popular gaming mouse. Equipped with HERO 25K sensor, 11 programmable buttons, adjustable weight tuning system (5x 3.6g weights), and LIGHTSYNC RGB.',
    price: 3995,
    originalPrice: 5495,
    discountPercentage: 27,
    rating: 4.7,
    reviewCount: 1650,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'HERO 25K sensor with 1:1 tracking, 400+ IPS, and zero smoothing or acceleration',
      '11 programmable buttons and dual-mode hyper-fast scroll wheel',
      'Adjustable weight system: arrange up to five 3.6g weights for customized balance',
      'Mechanical switch button tensioning for crisp click feedback',
      'Onboard memory profiles to save your settings directly on the mouse',
      'LIGHTSYNC RGB lighting customizable across 16.8 million colors'
    ],
    specifications: {
      connectivity: 'Braided USB Cable (2.1 m)',
      weight: '121 g (mouse only, + up to 18g weights)',
      warranty: '2 Years Limited Hardware Warranty',
      color: 'Black',
      inTheBox: 'G502 HERO Mouse, Optional 5x 3.6g weights and Case, User Documentation'
    }
  },

  // Speakers
  {
    id: 'spk-01',
    name: 'JBL Charge 5 Portable Waterproof Bluetooth Speaker',
    brand: 'JBL',
    category: 'Speakers',
    description: 'Take the party anywhere. Delivers bold JBL Original Pro Sound with an optimized long-excursion driver, separate tweeter, dual bass radiators, IP67 waterproof/dustproof rating, and built-in powerbank.',
    price: 13999,
    originalPrice: 17999,
    discountPercentage: 22,
    rating: 4.8,
    reviewCount: 460,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '40W RMS output with punchy long-excursion driver and separate tweeter',
      'Up to 20 hours of playtime on a single charge',
      'IP67 waterproof and dustproof: survives beach, poolside, or sudden rain',
      'PartyBoost feature lets you pair two compatible JBL speakers for stereo sound',
      'Built-in 7500 mAh powerbank lets you charge your smartphones without pausing beats',
      'Bluetooth 5.1 allows wireless connection of up to 2 smartphones or tablets'
    ],
    specifications: {
      powerOutput: '40W RMS (30W RMS woofer + 10W RMS tweeter)',
      battery: '7500 mAh Li-ion (up to 20 hours playback, 4 hr recharge)',
      connectivity: 'Bluetooth 5.1, USB-A Out (Powerbank), USB-C In',
      weight: '960 g',
      warranty: '1 Year Brand Warranty',
      color: 'Squad Camo / Forest Green',
      inTheBox: 'JBL Charge 5, Type-C USB Cable, Safety Sheet, Quick Start Guide'
    },
    badge: 'Bestseller'
  },
  {
    id: 'spk-02',
    name: 'Marshall Acton III Bluetooth Home Speaker',
    brand: 'Marshall',
    category: 'Speakers',
    description: 'Room-filling classic rock signature sound with re-engineered wider stereo soundstage. Vintage analog brass knobs, Bluetooth 5.2, and sustainable PVC-free construction.',
    price: 29999,
    originalPrice: 34999,
    discountPercentage: 14,
    rating: 4.9,
    reviewCount: 210,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Re-engineered wider soundstage with tweeters angled outwards',
      'Dynamic Loudness adjusts tonal balance to ensure music sounds brilliant at every volume',
      'Iconic Marshall vintage script logo and tactile brass control dials',
      'Next-generation Bluetooth 5.2 ready for Bluetooth LE Audio features',
      '3.5mm auxiliary input for connecting vinyl turntables or audio interfaces',
      'Environmentally conscious build made from 70% recycled plastic'
    ],
    specifications: {
      powerOutput: '60W Total (One 30W Class D for woofer + Two 15W Class D for tweeters)',
      connectivity: 'Bluetooth 5.2, 3.5 mm Aux Input',
      weight: '2.85 kg',
      warranty: '1 Year Marshall India Warranty',
      color: 'Vintage Cream',
      inTheBox: 'Acton III Speaker, Mains Lead Power Cord, Quick Start Guide'
    },
    badge: 'Trending'
  },
  {
    id: 'spk-03',
    name: 'boAt Stone 1200 14W Portable Bluetooth Speaker with RGB',
    brand: 'boAt',
    category: 'Speakers',
    description: 'Budget-friendly 14W stereo sound speaker with vibrant 360-degree dynamic RGB LEDs, IPX7 water resistance, TWS true wireless stereo mode, and up to 9 hours of battery life.',
    price: 3499,
    originalPrice: 6990,
    discountPercentage: 50,
    rating: 4.3,
    reviewCount: 680,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      '14W Signature boAt stereo sound with passive bass radiators',
      'Dynamic RGB light show synchronized with your party tracks',
      'IPX7 water & splash resistance for pool parties and showers',
      'TWS feature: interconnect two Stone 1200 speakers for 28W massive audio',
      'Multi-mode compatibility: Bluetooth v5.0, AUX, USB Flash, and FM Radio',
      'Up to 9 hours playback without LEDs (up to 7 hours with RGB active)'
    ],
    specifications: {
      powerOutput: '14W RMS',
      battery: '3600 mAh Li-ion (up to 9 hours)',
      connectivity: 'Bluetooth 5.0, AUX 3.5mm, USB Flash, Micro SD, Type-C',
      weight: '1.74 kg',
      warranty: '1 Year boAt Warranty',
      color: 'Blue',
      inTheBox: 'Stone 1200, Type C Charging Cable, Audio Cable, Shoulder Strap, User Manual'
    },
    badge: 'Deal of the Day',
    isDealOfTheDay: true
  },

  // Chargers & Cables
  {
    id: 'chg-01',
    name: 'Anker 735 GaNPrime 65W 3-Port Fast Wall Charger',
    brand: 'Anker',
    category: 'Chargers & Cables',
    description: 'High-speed fast charger powered by GaNPrime technology. Charges 3 devices at once (2x USB-C + 1x USB-A) with ActiveShield 2.0 real-time temperature monitoring in a compact form factor.',
    price: 3999,
    originalPrice: 5999,
    discountPercentage: 33,
    rating: 4.8,
    reviewCount: 340,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'High-speed 65W max output: Charge an M2 MacBook Air at full speed',
      'Power 3 devices simultaneously with 2 USB-C ports and 1 USB-A port',
      'GaNPrime tech is 39% smaller than standard 67W stock chargers',
      'PowerIQ 4.0 with Dynamic Power Distribution detects connected devices automatically',
      'ActiveShield 2.0 temperature monitoring safeguards against overheating'
    ],
    specifications: {
      powerOutput: '65W Max (USB-C1/C2 up to 65W, USB-A up to 22.5W)',
      connectivity: '2x USB-C, 1x USB-A',
      weight: '132 g',
      warranty: '18 Months Anker Warranty',
      color: 'Black',
      inTheBox: 'Anker 735 Charger, Silicone Stabilizer, Welcome Guide'
    },
    badge: 'Bestseller'
  },
  {
    id: 'chg-02',
    name: 'Belkin BoostCharge 3-in-1 Wireless MagSafe Charger 15W',
    brand: 'Belkin',
    category: 'Chargers & Cables',
    description: 'Official MagSafe 15W fast wireless charging stand for iPhone 15/14/13/12 series, Apple Watch, and AirPods simultaneously in portrait or landscape mode.',
    price: 11999,
    originalPrice: 14999,
    discountPercentage: 20,
    rating: 4.7,
    reviewCount: 160,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Fast wireless charging for iPhone up to 15W with certified MagSafe technology',
      'Charges 3 Apple devices at once: iPhone, Apple Watch, and AirPods case',
      'Floating architectural stainless steel stand design complements any nightstand or desk',
      'Charge iPhone in portrait for FaceTime or landscape for StandBy mode in iOS 17',
      'LED indicator confirms AirPods are aligned and safely charging'
    ],
    specifications: {
      powerOutput: '15W MagSafe Phone + 5W Apple Watch Fast Charger + 5W Qi Pad',
      weight: '490 g',
      warranty: '2 Years Belkin Warranty + Connected Equipment Warranty',
      color: 'White',
      inTheBox: '3-in-1 Wireless Charger Stand, 40W AC Power Adapter, Quick Start Guide'
    }
  },

  // Home Appliances
  {
    id: 'app-01',
    name: 'Dyson V8 Cordless Vacuum Cleaner',
    brand: 'Dyson',
    category: 'Home Appliances',
    description: 'Engineered for homes with pets. Powered by the Dyson digital motor V8, spinning at up to 110,000 rpm to generate powerful suction on carpets and hard floors with de-tangling technology.',
    price: 29900,
    originalPrice: 39900,
    discountPercentage: 25,
    rating: 4.7,
    reviewCount: 420,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Dyson digital motor V8 produces up to 115 Air Watts of fade-free suction',
      'Motorbar cleaner head with hair removal vanes clears hair automatically',
      'Advanced whole-machine filtration captures 99.99% of microscopic particles as small as 0.3 microns',
      'Up to 40 minutes of continuous runtime without losing suction power',
      'Transforms into a lightweight handheld vacuum in one click for car and sofa cleaning',
      'No-touch dirt emptying mechanism ejects dust cleanly into bin'
    ],
    specifications: {
      powerOutput: '115 AW Suction Power (425W motor)',
      battery: '6-cell lithium-ion battery (up to 40 mins runtime, 5 hr charge time)',
      weight: '2.5 kg',
      warranty: '2 Years Dyson Comprehensive Warranty (parts and labor)',
      color: 'Silver / Nickel',
      inTheBox: 'Dyson V8, Motorbar cleaner head, Combination tool, Crevice tool, Wall dock, Charger'
    },
    badge: 'Trending'
  },
  {
    id: 'app-02',
    name: 'Philips Digital Air Fryer HD9252/90 with Rapid Air Tech',
    brand: 'Philips',
    category: 'Home Appliances',
    description: 'Fry with up to 90% less fat. Rapid Air Technology circulates hot air to create crispy food on the outside and tender on the inside, with 7 preset touch menus and Keep Warm function.',
    price: 7999,
    originalPrice: 11995,
    discountPercentage: 33,
    rating: 4.6,
    reviewCount: 910,
    stockStatus: 'In Stock',
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800&auto=format&fit=crop&q=80'
    ],
    features: [
      'Rapid Air Technology with unique starfish bottom design for even cooking without flipping',
      'Touch screen with 7 presets: frozen snacks, fresh fries, meat, fish, chicken, cake, veggies',
      'Keep warm mode lets you enjoy your food whenever you are ready',
      '1400W energy-efficient heating: cooks 1.5x faster than a conventional oven',
      'Removable QuickClean basket with non-stick coating is dishwasher safe'
    ],
    specifications: {
      powerOutput: '1400 W (220-240V)',
      weight: '4.55 kg',
      dimensions: '4.1 Liter Pan capacity (0.8 kg capacity basket)',
      warranty: '2 Years Philips Worldwide Guarantee',
      color: 'Deep Gloss Black',
      inTheBox: 'Air Fryer Unit, Non-stick Basket & Pan, Recipe Book, User Manual'
    },
    badge: 'Deal of the Day',
    isDealOfTheDay: true
  }
];

export const categoriesList = [
  { id: 'Smartphones', name: 'Smartphones', icon: '📱', count: 5, banner: 'Flagship 5G & Mid-range Phones' },
  { id: 'Laptops', name: 'Laptops', icon: '💻', count: 5, banner: 'Coding, Gaming & Thin Ultras' },
  { id: 'Tablets', name: 'Tablets', icon: '📱', count: 2, banner: 'Productivity & Creative Slates' },
  { id: 'TVs & Monitors', name: 'TVs & Monitors', icon: '🖥️', count: 3, banner: '4K Smart TVs & High-Hz Monitors' },
  { id: 'Headphones & Earbuds', name: 'Headphones', icon: '🎧', count: 5, banner: 'ANC, Bass & Studio Audio' },
  { id: 'Smart Watches', name: 'Smart Watches', icon: '⌚', count: 3, banner: 'Fitness Trackers & GPS Watches' },
  { id: 'Gaming', name: 'Gaming', icon: '🎮', count: 2, banner: 'Consoles & Handheld Systems' },
  { id: 'Cameras', name: 'Cameras', icon: '📷', count: 2, banner: 'Mirrorless & Vlogging Rigs' },
  { id: 'Computer Accessories', name: 'Accessories', icon: '⌨️', count: 3, banner: 'Keyboards, Mice & Docks' },
  { id: 'Speakers', name: 'Speakers', icon: '🔊', count: 3, banner: 'Bluetooth & Home Audio' },
  { id: 'Chargers & Cables', name: 'Chargers', icon: '🔌', count: 2, banner: 'GaN Chargers & Fast Hubs' },
  { id: 'Home Appliances', name: 'Appliances', icon: '🏠', count: 2, banner: 'Smart Home & Cordless Vacuums' }
];

export const popularBrands = [
  'Apple',
  'Samsung',
  'Sony',
  'Dell',
  'HP',
  'Lenovo',
  'ASUS',
  'JBL',
  'LG',
  'Xiaomi',
  'Canon',
  'Logitech'
];
