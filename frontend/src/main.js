import HomeScreen from "./screens/homeScreen.js";
import ProductScreen from "./screens/productScreen.js";
import parseRequestUrl from "./utils.js"

const routes = {
    '/': HomeScreen,
    "/products/:id": productScreen,
}
const router = () => {
    const request = parseRequestUrl();
    const parseUrl = (request.resource ? `${request.resource}` : "/") + (request.id ? "/:id" : "") + (request.verb ? `/${request.verb}` : '');
    const main = document.getElementById('main-container');
    main.innerHTML = HomeScreen.render();
}

window.addEventListener("load", router);