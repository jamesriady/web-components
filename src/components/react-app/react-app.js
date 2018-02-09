import React from 'react'
import { render } from 'react-dom';
import { App } from './App';

export class ReactApp extends HTMLElement {
    static name = 'react-app';

    constructor() {
        super();

        console.log('ReactApp constructor', this);
    }

    connectedCallback() {
        console.log('ReactApp connected');
        this.render();
    }

    render() {
        render(<App title={this.title}/>, this);
    }

    disconnectedCallback() {
        console.log('ReactApp disconnected',);
    }
}
