import Navigo from 'navigo';
const router = new Navigo('/', { hash: true, linkSelector: 'a' });
const render = (component, container) => {
    container.innerHTML = component();
}
export { render, router }