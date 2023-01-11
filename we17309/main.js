import homePage from "./pages/homePage";
import projects from "./pages/projectsPage";
import { render, router } from './ultis';
import contactPage from './pages/contactPage'
import aboutPage from "./pages/aboutPage";
import postPage from "./pages/postPage";
import projectDetail from "./pages/projects-detail";

const app = document.querySelector('#app');

router.on('/', () => render(homePage, app));
router.on('/projects', () => render(projects, app));
router.on('/contact', () => render(contactPage, app));
router.on('/about', () => render(aboutPage, app));
router.on('/post', () => render(postPage, app));
router.on('/project-detail/:id',render(projectDetail, app));

router.resolve();

