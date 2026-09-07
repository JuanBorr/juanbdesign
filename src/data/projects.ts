import revistaCover from '../assets/projects/revista.jpg'
import portfolioCover from '../assets/projects/web.jpg'
import chocoliciousCover from '../assets/projects/choco.jpg'

import revista01 from '../assets/projects/revista-venus/01.jpg'
import revista02 from '../assets/projects/revista-venus/02.jpg'
import revista03 from '../assets/projects/revista-venus/03.jpg'
import revista04 from '../assets/projects/revista-venus/04.jpg'
import revista05 from '../assets/projects/revista-venus/05.jpg'
import revista06 from '../assets/projects/revista-venus/06.jpg'
import revista07 from '../assets/projects/revista-venus/07.jpg'
import portfolio01 from '../assets/projects/diseno-de-portafolio/01.png'
import portfolio02 from '../assets/projects/diseno-de-portafolio/02.png'
import portfolio03 from '../assets/projects/diseno-de-portafolio/03.png'
import portfolio04 from '../assets/projects/diseno-de-portafolio/04.png'
import portfolio05 from '../assets/projects/diseno-de-portafolio/05.png'
import portfolio06 from '../assets/projects/diseno-de-portafolio/06.png'
import chocolicious01 from '../assets/projects/chocolicious/01.png'
import chocolicious02 from '../assets/projects/chocolicious/02.png'
import iubDashboard from '../assets/projects/iub/IUB Student Dashboard.png'
import iubCalendar from '../assets/projects/iub/Calendar & Tasks (v1).png'
import iubTasks from '../assets/projects/iub/Calendar & Tasks (v1)-1.png'
import iubTasksTab from '../assets/projects/iub/IUB Tasks Tab.png'
import iubProfile from '../assets/projects/iub/IUB Perfil y Carnet (ES).png'
import iubLogin from '../assets/projects/iub/Welcome Login.png'
import herbEatsSplash from '../assets/projects/herbeats/Splash Screen HerbEats.png'
import herbEatsLogin from '../assets/projects/herbeats/Inicio de Sesión.png'
import herbEatsHome from '../assets/projects/herbeats/Página Principal.png'
import herbEatsDishOne from '../assets/projects/herbeats/Detalle del Platillo 1.png'
import herbEatsDishTwo from '../assets/projects/herbeats/Detalle del Platillo 2.png'
import herbEatsPaymentOne from '../assets/projects/herbeats/Pago 1.png'
import herbEatsPaymentTwo from '../assets/projects/herbeats/Pago 2.png'
import herbEatsTracking from '../assets/projects/herbeats/Seguimiento del Pedido.png'
import clickAndShootHome from '../assets/projects/click-and-shoot/Home.png'
import clickAndShootAbout from '../assets/projects/click-and-shoot/Nostros.png'
import clickAndShootServices from '../assets/projects/click-and-shoot/Servicios.png'
import clickAndShootProjects from '../assets/projects/click-and-shoot/Proyectos.png'
import clickAndShootContact from '../assets/projects/click-and-shoot/Contacto.png'

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
  behanceUrl?: string
  mockup: 'plain' | 'device' | 'browser'
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
    mockup: 'plain',
    listingPlacement: 'feature-left',
    homePlacement: 'feature-left'
  },
  {
    slug: 'diseno-de-portafolio',
    number: '02',
    title: 'Diseño de Portafolio',
    category: 'Interfaz y experiencia web',
    description: 'Una exploración de interfaz pensada para organizar trabajo creativo y darle una lectura clara.',
    alt: 'Diseño de portafolio web con estética tecnológica',
    role: 'Interfaz y experiencia web',
    disciplines: ['Diseño web', 'Interfaz', 'Experiencia digital'],
    cover: portfolioCover,
    gallery: [portfolio01, portfolio02, portfolio03, portfolio04, portfolio05, portfolio06],
    behanceUrl: 'https://www.behance.net/gallery/161188549/Portfolio-Design',
    mockup: 'plain',
    listingPlacement: 'tall-right',
    homePlacement: 'tall-right'
  },
  {
    slug: 'iub',
    number: '03',
    title: 'IUB',
    category: 'Diseño UI/UX para app académica',
    description: 'Una aplicación académica que reúne calendario, tareas, servicios y perfil estudiantil en una sola experiencia.',
    alt: 'Panel principal de la aplicación IUB',
    role: 'Diseño UI/UX para aplicación móvil',
    disciplines: ['UI/UX', 'Aplicación móvil', 'Sistema de interfaz'],
    cover: iubDashboard,
    gallery: [iubLogin, iubDashboard, iubCalendar, iubTasks, iubTasksTab, iubProfile],
    mockup: 'device',
    listingPlacement: 'small-left',
    homePlacement: 'small-left'
  },
  {
    slug: 'herbeats',
    number: '04',
    title: 'HerbEats',
    category: 'Diseño UI/UX para app de comida',
    description: 'Una aplicación móvil para explorar platos, hacer pedidos y seguir cada etapa de la entrega.',
    alt: 'Pantalla principal de la aplicación HerbEats',
    role: 'Diseño UI/UX para aplicación móvil',
    disciplines: ['UI/UX', 'Aplicación móvil', 'Flujo de pedido'],
    cover: herbEatsHome,
    gallery: [herbEatsSplash, herbEatsLogin, herbEatsHome, herbEatsDishOne, herbEatsDishTwo, herbEatsPaymentOne, herbEatsPaymentTwo, herbEatsTracking],
    mockup: 'device',
    listingPlacement: 'wide-right',
    homePlacement: 'wide-right'
  },
  {
    slug: 'click-and-shoot',
    number: '05',
    title: 'Click and Shoot',
    category: 'Diseño web para estudio de fotografía',
    description: 'Una web de fotografía pensada para presentar servicios, trabajos y datos de contacto con una narrativa visual directa.',
    alt: 'Página principal de Click and Shoot Studio',
    role: 'Diseño web y dirección visual',
    disciplines: ['Diseño web', 'Interfaz', 'Dirección visual'],
    cover: clickAndShootHome,
    gallery: [clickAndShootHome, clickAndShootAbout, clickAndShootServices, clickAndShootProjects, clickAndShootContact],
    mockup: 'browser',
    listingPlacement: 'lower-left',
    homePlacement: 'lower-left'
  },
  {
    slug: 'chocolicious',
    number: '06',
    title: 'Chocolicious',
    category: 'Identidad y landing page',
    description: 'Una página de producto que combina identidad visual, navegación y una experiencia digital de marca.',
    alt: 'Landing page de Chocolicious',
    role: 'Identidad y landing page',
    disciplines: ['Diseño web', 'Interfaz', 'Identidad visual'],
    cover: chocoliciousCover,
    gallery: [chocolicious01, chocolicious02],
    behanceUrl: 'https://www.behance.net/gallery/181383799/Chocolicious-UI-Page-Design',
    mockup: 'plain',
    listingPlacement: 'lower-right',
    homePlacement: 'lower-right'
  }
]

export const projectUrl = (project: Project) => `/projects/${project.slug}`
