export type Category = 'design' | 'audiovisual' | '3d' | 'digital' | 'freelance';
export type ProjectType = 'brand' | 'freelance' | 'audiovisual';
export interface ProjectGalleryItem { type: 'image' | 'video'; src: string; caption?: string; poster?: string; }
export interface Project { id: string; number: string; title: string; category: Category; type: ProjectType; year: string; role: { es: string; en: string }; cover: string; description: { es: string; en: string }; tools: string[]; process: { es: string; en: string }[]; gallery: ProjectGalleryItem[]; size: 'large' | 'medium' | 'small'; }

export const projects: Project[] = [
  {
    id: 'jeep', number: '01', title: 'JEEP', category: 'design', type: 'brand',
    role: { es: 'Diseño y contenido', en: 'Design & Content' }, cover: '/projects/jeep/34.jpg',
    description: { es: 'Diseño y desarrollo de piezas publicitarias y contenido gráfico para Jeep. Adaptación de campañas a distintos formatos, key visuals y material corporativo.', en: 'Design and development of advertising pieces and graphic content for Jeep. Campaign adaptation across formats, key visuals, and corporate materials.' },
    tools: ['Photoshop', 'Illustrator', 'After Effects'],
    process: [
      { es: 'Diseño de piezas publicitarias', en: 'Advertising piece design' },
      { es: 'Contenido gráfico para redes sociales', en: 'Graphic content for social media' },
      { es: 'Campañas digitales y key visuals', en: 'Digital campaigns and key visuals' },
    ],
    gallery: [
      { type: 'image', src: '/projects/jeep/1.jpg', caption: 'Jeep — Pieza 01' }, { type: 'image', src: '/projects/jeep/2.jpg', caption: 'Jeep — Pieza 02' }, { type: 'image', src: '/projects/jeep/3.jpg', caption: 'Jeep — Pieza 03' }, { type: 'image', src: '/projects/jeep/4.jpg', caption: 'Jeep — Pieza 04' }, { type: 'image', src: '/projects/jeep/5.jpg', caption: 'Jeep — Pieza 05' }, { type: 'image', src: '/projects/jeep/10.jpg', caption: 'Jeep — Pieza 10' }, { type: 'image', src: '/projects/jeep/11.jpg', caption: 'Jeep — Pieza 11' }, { type: 'image', src: '/projects/jeep/15.jpg', caption: 'Jeep — Pieza 15' }, { type: 'image', src: '/projects/jeep/17.jpg', caption: 'Jeep — Pieza 17' }, { type: 'image', src: '/projects/jeep/18.jpg', caption: 'Jeep — Pieza 18' }, { type: 'image', src: '/projects/jeep/19.jpg', caption: 'Jeep — Pieza 19' }, { type: 'image', src: '/projects/jeep/34.jpg', caption: 'Jeep — Pieza 34' }, { type: 'image', src: '/projects/jeep/ARTE 7.jpg', caption: 'Jeep — Arte 7' }, { type: 'image', src: '/projects/jeep/Avenger_kv.jpg', caption: 'Jeep Avenger — Key Visual' }, { type: 'image', src: '/projects/jeep/COMPASS_COMPASS-OFERTA.jpg', caption: 'Jeep Compass — Oferta' }, { type: 'image', src: '/projects/jeep/WRANGLER_kv.jpg', caption: 'Jeep Wrangler — Key Visual' }, { type: 'image', src: '/projects/jeep/kv avenger atb.jpg', caption: 'Jeep Avenger — Key Visual' },
    ], size: 'large',
  },
  {
    id: 'ram', number: '02', title: 'RAM', category: 'design', type: 'brand',
    role: { es: 'Diseño y contenido', en: 'Design & Content' }, cover: '/projects/ram/15.jpg',
    description: { es: 'Diseño y desarrollo de piezas publicitarias y contenido gráfico para RAM. Campañas digitales, adaptación de formatos y material corporativo.', en: 'Design and development of advertising pieces and graphic content for RAM. Digital campaigns, format adaptation, and corporate materials.' },
    tools: ['Photoshop', 'Illustrator', 'After Effects'],
    process: [{ es: 'Conceptualización gráfica', en: 'Graphic conceptualization' }, { es: 'Desarrollo de propuestas visuales', en: 'Visual proposal development' }, { es: 'Adaptación de campañas a distintos formatos', en: 'Campaign adaptation across formats' }],
    gallery: [
      { type: 'image', src: '/projects/ram/1.jpg', caption: 'RAM — Pieza 01' }, { type: 'image', src: '/projects/ram/2.jpg', caption: 'RAM — Pieza 02' }, { type: 'image', src: '/projects/ram/4.jpg', caption: 'RAM — Pieza 03' }, { type: 'image', src: '/projects/ram/6.jpg', caption: 'RAM — Pieza 04' }, { type: 'image', src: '/projects/ram/8.jpg', caption: 'RAM — Pieza 05' }, { type: 'image', src: '/projects/ram/8-4.jpg', caption: 'RAM — Pieza 06' }, { type: 'image', src: '/projects/ram/9.jpg', caption: 'RAM — Pieza 07' }, { type: 'image', src: '/projects/ram/12.jpg', caption: 'RAM — Pieza 08' }, { type: 'image', src: '/projects/ram/14.jpg', caption: 'RAM — Pieza 09' }, { type: 'image', src: '/projects/ram/15.jpg', caption: 'RAM — Pieza 10' }, { type: 'image', src: '/projects/ram/Slide 9-2.png', caption: 'RAM — Pieza 11' }, { type: 'image', src: '/projects/ram/sa +banners 1500_Banner-750x634.jpg', caption: 'RAM — Pieza 12' }, { type: 'image', src: '/projects/ram/sa +banners 1500 night_Banner-750x634.jpg', caption: 'RAM — Pieza 13' }, { type: 'image', src: '/projects/ram/slide 17.jpg', caption: 'RAM — Pieza 14' },
    ], size: 'medium',
  },
  {
    id: 'fiat', number: '03', title: 'FIAT', category: 'design', type: 'brand',
    role: { es: 'Diseño y contenido', en: 'Design & Content' }, cover: '/projects/fiat/4.jpg',
    description: { es: 'Diseño y desarrollo de piezas publicitarias y contenido gráfico para Fiat. Key visuals, campañas digitales y material corporativo.', en: 'Design and development of advertising pieces and graphic content for Fiat. Key visuals, digital campaigns, and corporate materials.' },
    tools: ['Photoshop', 'Illustrator', 'After Effects'],
    process: [{ es: 'Diseño de piezas publicitarias', en: 'Advertising piece design' }, { es: 'Contenido gráfico para redes sociales', en: 'Graphic content for social media' }, { es: 'Desarrollo de propuestas visuales enfocadas en atributos de producto', en: 'Visual proposals focused on product attributes' }],
    gallery: Array.from({length:12}, (_, i) => ({ type: 'image' as const, src: '/projects/fiat/' + (i + 1) + '.jpg', caption: 'FIAT — Pieza ' + String(i + 1).padStart(2,'0') })), size: 'medium',
  },
  {
    id: 'zeekr', number: '04', title: 'ZEEKR', category: 'design', type: 'brand',
    role: { es: 'Diseño y contenido', en: 'Design & Content' }, cover: '/projects/zeekr/1.1.jpg',
    description: { es: 'Selección de piezas gráficas desarrolladas para ZEEKR, con enfoque en comunicación visual, campañas y adaptación de contenidos.', en: 'Selection of graphic pieces developed for ZEEKR, focused on visual communication, campaigns, and content adaptation.' },
    tools: ['Photoshop', 'Illustrator', 'After Effects'],
    process: [{ es: 'Conceptualización y desarrollo de piezas', en: 'Concept development and piece design' }, { es: 'Adaptación de contenidos a distintos formatos', en: 'Content adaptation across formats' }, { es: 'Desarrollo de propuestas visuales para comunicación de marca', en: 'Visual proposals for brand communication' }],
    gallery: [
      { type: 'image', src: '/projects/zeekr/1.1.jpg' }, { type: 'image', src: '/projects/zeekr/Slide 1.jpg' }, { type: 'image', src: '/projects/zeekr/slide 2.jpg' }, { type: 'image', src: '/projects/zeekr/slide 3.jpg' }, { type: 'image', src: '/projects/zeekr/slide 3.1.jpg' }, { type: 'image', src: '/projects/zeekr/slide 4.jpg' }, { type: 'image', src: '/projects/zeekr/slide 5.jpg' }, { type: 'image', src: '/projects/zeekr/slide 6.jpg' }, { type: 'image', src: '/projects/zeekr/Slide 7-2.jpg' }, { type: 'image', src: '/projects/zeekr/Slide 9-1.jpg' }, { type: 'image', src: '/projects/zeekr/Slide 9-4.jpg' }, { type: 'image', src: '/projects/zeekr/Slide 17-1.jpg' }, { type: 'image', src: '/projects/zeekr/Slide 17-2.jpg' }, { type: 'image', src: '/projects/zeekr/Slide 27.jpg' }, { type: 'image', src: '/projects/zeekr/Slide 39.jpg' }, { type: 'image', src: '/projects/zeekr/ig.png' },
    ], size: 'medium',
  },
  {
    id: 'proyectos-audiovisuales', number: '05', title: 'Proyectos Audiovisuales', category: 'audiovisual', type: 'audiovisual',
    role: { es: 'Preproducción · Producción · Postproducción · Fotografía', en: 'Pre-production · Production · Post-production · Photography' },
    cover: '/projects/audiovisual/Logo dlm.jpg',
    description: {
      es: 'Rosalía Garzón comparte uno de los capítulos más dolorosos de su historia: la tragedia que marcó a su familia y los obligó al desplazamiento. Un testimonio de memoria, valentía y resistencia.',
      en: 'Rosalía Garzón shares one of the most painful chapters of her story: the tragedy that marked her family and forced them into displacement. A testimony of memory, courage, and resilience.',
    },
    tools: ['After Effects', 'Fotografía', 'Edición audiovisual'],
    process: [{ es: 'Preproducción', en: 'Pre-production' }, { es: 'Producción', en: 'Production' }, { es: 'Postproducción', en: 'Post-production' }],
    gallery: [
      { type: 'video', src: 'https://drive.google.com/file/d/1azm9gkldxmJ7dy_9F99TmUKZrUn3SiOK/preview', poster: 'https://drive.google.com/thumbnail?id=1azm9gkldxmJ7dy_9F99TmUKZrUn3SiOK&sz=w1600', caption: 'Desde la memoria — Video principal' },
    ], size: 'small',
  },
  {
    id: 'masterchef-challenger', number: 'F01', title: 'MasterChef × Challenger', category: 'freelance', type: 'freelance',
    role: { es: 'Desarrollo 3D', en: '3D Development' }, cover: '/projects/freelance/RCN/Masterchef.jpg',
    description: { es: 'Desarrollo de un robot/personaje 3D para un capítulo de MasterChef en colaboración con Challenger y RCN. El proyecto se presenta con su pieza promocional y registros en video del desarrollo.', en: '3D robot/character development for a MasterChef episode in collaboration with Challenger and RCN. The project is presented with its promotional artwork and video records of the development.' },
    tools: ['3D', 'Modelado', 'Diseño visual'],
    process: [{ es: 'Conceptualización del personaje', en: 'Character conceptualization' }, { es: 'Modelado y desarrollo visual', en: 'Modeling and visual development' }, { es: 'Integración y presentación del resultado final', en: 'Integration and presentation of the final result' }],
    gallery: [
      { type: 'image', src: '/projects/freelance/RCN/Masterchef.jpg', caption: 'MasterChef × Challenger — Pieza promocional' },
      { type: 'video', src: 'https://drive.google.com/file/d/1BAeNG0-d1kqlcBmGq3baOqMqEghIZfI-/preview', poster: 'https://drive.google.com/thumbnail?id=1BAeNG0-d1kqlcBmGq3baOqMqEghIZfI-&sz=w1600', caption: 'Robot 3D — Video 01' },
      { type: 'video', src: 'https://drive.google.com/file/d/1OdDjtpz1X3z6PBR3uxcWo5ahseGYgUrN/preview', poster: 'https://drive.google.com/thumbnail?id=1OdDjtpz1X3z6PBR3uxcWo5ahseGYgUrN&sz=w1600', caption: 'Robot 3D — Video 02' },
      { type: 'video', src: 'https://drive.google.com/file/d/1E_UfUbByB3sfvM19aP33bJmA1uVmCTls/preview', poster: 'https://drive.google.com/thumbnail?id=1E_UfUbByB3sfvM19aP33bJmA1uVmCTls&sz=w1600', caption: 'Robot 3D — Video 03' },
    ], size: 'medium',
  },
  {
    id: 'human-way-center', number: 'F02', title: 'Human Way Center', category: 'freelance', type: 'freelance',
    role: { es: 'Recorrido 3D / Experiencia', en: '3D Tour / Experience' }, cover: '/projects/freelance/Human way/PRODUCTOS_REEL13.png',
    description: { es: 'Recorrido 3D de Human Way Center, con productos digitalizados en 3D y una experiencia visual de recorrido por diferentes productos de la marca.', en: '3D walkthrough for Human Way Center, featuring digitized 3D products and a visual experience showcasing different products from the brand.' },
    tools: ['3D', 'Recorrido 3D', 'Experiencia visual'],
    process: [{ es: 'Diseño del recorrido 3D', en: '3D tour design' }, { es: 'Experiencia visual e interactiva', en: 'Visual and interactive experience' }, { es: 'Digitalización de productos y construcción del recorrido', en: 'Product digitization and walkthrough development' }],
    gallery: [
      { type: 'video', src: 'https://drive.google.com/file/d/1OdQZK_rjR3jzpDpTOt5380zd3M5Qm9o4/preview', poster: 'https://drive.google.com/thumbnail?id=1OdQZK_rjR3jzpDpTOt5380zd3M5Qm9o4&sz=w1600', caption: 'Human Way Center — Recorrido 3D' },
      { type: 'image', src: '/projects/freelance/Human way/PRODUCTOS_REEL13.png', caption: 'Productos digitalizados en 3D' },
      { type: 'image', src: '/projects/freelance/Human way/PRODUCTOS_REEL15.png', caption: 'Productos digitalizados en 3D' },
    ], size: 'medium',
  },
];
