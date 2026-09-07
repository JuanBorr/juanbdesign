import revistaCover from '../assets/projects/revista.jpg'
import silentHillCover from '../assets/projects/poster.jpg'
import portfolioCover from '../assets/projects/web.jpg'
import japaneseStreetCover from '../assets/projects/japanese.jpg'
import chocoliciousCover from '../assets/projects/choco.jpg'

import revista01 from '../assets/projects/revista-venus/01.jpg'
import revista02 from '../assets/projects/revista-venus/02.jpg'
import revista03 from '../assets/projects/revista-venus/03.jpg'
import revista04 from '../assets/projects/revista-venus/04.jpg'
import revista05 from '../assets/projects/revista-venus/05.jpg'
import revista06 from '../assets/projects/revista-venus/06.jpg'
import revista07 from '../assets/projects/revista-venus/07.jpg'
import silentHill01 from '../assets/projects/silent-hill/01.jpg'
import silentHill02 from '../assets/projects/silent-hill/02.jpg'
import portfolio01 from '../assets/projects/diseno-de-portafolio/01.png'
import portfolio02 from '../assets/projects/diseno-de-portafolio/02.png'
import portfolio03 from '../assets/projects/diseno-de-portafolio/03.png'
import portfolio04 from '../assets/projects/diseno-de-portafolio/04.png'
import portfolio05 from '../assets/projects/diseno-de-portafolio/05.png'
import portfolio06 from '../assets/projects/diseno-de-portafolio/06.png'
import japaneseStreet01 from '../assets/projects/japanese-street/01.png'
import japaneseStreet02 from '../assets/projects/japanese-street/02.jpg'
import chocolicious01 from '../assets/projects/chocolicious/01.png'
import chocolicious02 from '../assets/projects/chocolicious/02.png'

export type CardPlacement =
  | 'feature-left'
  | 'tall-right'
  | 'small-left'
  | 'wide-right'
  | 'center'
  | 'lower-left'
  | 'lower-right'

export interface Project {
  slug: string
  number: string
  title: string
  category: string
  description: string
  alt: string
  role: string
  disciplines: string[]
  cover: ImageMetadata
  gallery: ImageMetadata[]
  behanceUrl: string
  listingPlacement: CardPlacement
  homePlacement: CardPlacement
}

export const projects: Project[] = [
  {
    slug: 'revista-venus',
    number: '01',
    title: 'Revista Venus',
    category: 'Diseño editorial y dirección de arte',
    description: 'Una propuesta editorial donde imagen, composición y ritmo sostienen cada página.',
    alt: 'Portada de la Revista Venus',
    role: 'Diseño editorial y dirección de arte',
    disciplines: ['Fotografía', 'Diseño gráfico', 'Diseño editorial'],
    cover: revistaCover,
    gallery: [revista01, revista02, revista03, revista04, revista05, revista06, revista07],
    behanceUrl: 'https://www.behance.net/gallery/179763757/Revista-Venus',
    listingPlacement: 'feature-left',
    homePlacement: 'feature-left'
  },
  {
    slug: 'silent-hill',
    number: '02',
    title: 'Silent Hill',
    category: 'Concepto visual y póster',
    description: 'Un póster conceptual construido desde atmósfera, contraste y una presencia gráfica directa.',
    alt: 'Póster conceptual de Silent Hill',
    role: 'Concepto visual y póster',
    disciplines: ['Diseño gráfico', 'Composición', 'Póster'],
    cover: silentHillCover,
    gallery: [silentHill01, silentHill02],
    behanceUrl: 'https://www.behance.net/gallery/179766499/Concepto-poster-Silent-Hill',
    listingPlacement: 'tall-right',
    homePlacement: 'tall-right'
  },
  {
    slug: 'diseno-de-portafolio',
    number: '03',
    title: 'Diseño de Portafolio',
    category: 'Interfaz y experiencia web',
    description: 'Una exploración de interfaz pensada para organizar trabajo creativo y darle una lectura clara.',
    alt: 'Diseño de portafolio web con estética tecnológica',
    role: 'Interfaz y experiencia web',
    disciplines: ['Diseño web', 'Interfaz', 'Experiencia digital'],
    cover: portfolioCover,
    gallery: [portfolio01, portfolio02, portfolio03, portfolio04, portfolio05, portfolio06],
    behanceUrl: 'https://www.behance.net/gallery/161188549/Portfolio-Design',
    listingPlacement: 'small-left',
    homePlacement: 'small-left'
  },
  {
    slug: 'japanese-street',
    number: '04',
    title: 'Japanese Street',
    category: 'Tipografía y composición',
    description: 'Una composición de póster que trabaja tipografía, imagen y energía urbana.',
    alt: 'Póster inspirado en cultura urbana japonesa',
    role: 'Tipografía y composición',
    disciplines: ['Póster', 'Tipografía', 'Photoshop'],
    cover: japaneseStreetCover,
    gallery: [japaneseStreet01, japaneseStreet02],
    behanceUrl: 'https://www.behance.net/gallery/181305745/Japanese-street-poster',
    listingPlacement: 'wide-right',
    homePlacement: 'wide-right'
  },
  {
    slug: 'chocolicious',
    number: '05',
    title: 'Chocolicious',
    category: 'Identidad y landing page',
    description: 'Una página de producto que combina identidad visual, navegación y una experiencia digital de marca.',
    alt: 'Landing page de Chocolicious',
    role: 'Identidad y landing page',
    disciplines: ['Diseño web', 'Interfaz', 'Identidad visual'],
    cover: chocoliciousCover,
    gallery: [chocolicious01, chocolicious02],
    behanceUrl: 'https://www.behance.net/gallery/181383799/Chocolicious-UI-Page-Design',
    listingPlacement: 'center',
    homePlacement: 'lower-left'
  }
]

export const projectUrl = (project: Project) => `/projects/${project.slug}`
