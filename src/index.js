import { Dropdown } from 'bootstrap';
import css from "./styles/css/main.css";

const createElement = (tagName) => {
    return document.createElement(tagName);
}

const createContainer = () => {
    const div = createElement(`div`);

    div.className = 'container bg-light';

    return div;
}

const createMainPage = () => {
    const body = document.querySelector('body');

    const container = createContainer();
    container.innerHTML = 
        `<div class="row align-items-center vh-100">
            <div class="col-12 text-center">
                <h1>Main Page</h1>
            </div>
        </div>`; 

    body.appendChild(container);
    return body;
}

createMainPage();