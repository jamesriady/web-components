import { Application, render } from './application';

document.addEventListener('DOMContentLoaded', () => {
    render(Application, document.getElementsByClassName('wrapper')[0]);
});
