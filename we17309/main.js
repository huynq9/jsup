import homePage from "./pages/homePage";
import projects from "./pages/projects";
import { render, router } from './ultis';
import contactPage from './pages/contactPage'
const app = document.querySelector('#app');

router.on('/', () => render(homePage, app));
router.on('/projects', () => render(projects, app));
router.resolve();

