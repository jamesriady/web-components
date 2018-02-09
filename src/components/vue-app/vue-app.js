import Vue from 'vue'
import Root from './root.vue';

export class VueApp extends HTMLElement {
    static name = 'vue-app';

    // static get observedAttributes() {
    //     return ['title'];
    // }

    // get title() {
    //     return this.getAttribute('title');
    // }

    constructor() {
        super();

        console.log('VueApp constructor', this);
    }

    connectedCallback() {
        console.log('VueApp connected');
        this.render();
    }

    render() {
        new Vue({
          el: this,
          render: h => h(Root, {
            props: {
                title: this.title
            }
          })
        })
    }

    disconnectedCallback() {
        console.log('VueApp disconnected',);
    }
}
