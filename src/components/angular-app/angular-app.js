import * as angular from 'angular';
import { AppModule, html } from './app.module';

export class AngularApp extends HTMLElement {
    static name = 'angular-app';

    constructor() {
        super();

        console.log('AngularApp constructor', this);
    }

    connectedCallback() {

        console.log('AngularApp connected');
        this.innerHTML = html;

        const name = `${AppModule}.instance`;
        // create new module as we attaching `run` callback
        angular.module(name, [AppModule])
            .value('config', {title: this.title})
            .run(() => {
                console.log(`Angular module ${AppModule} instance is running`);
                this.dispatchEvent(new Event('load'));
            });

        this.$injector = angular.bootstrap(this, [name], {
            strictDi: true
        });
    }

    disconnectedCallback() {
        console.log('AngularApp disconnected');
    }
}
