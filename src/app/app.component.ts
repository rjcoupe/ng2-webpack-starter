import {Component} from 'angular2/core';
import {MapComponent} from './map/map.component';
import {Hero} from './hero';

declare var window: any;

var $ = require('jquery');
window.$ = $;
window.jQuery = $;

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [],
    directives: [MapComponent]
})
export class AppComponent {}
