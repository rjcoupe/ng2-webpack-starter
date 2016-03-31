import {Component} from 'angular2/core';
import {ConnectionBackend, Http, Headers, Response} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'map',
    template: require('./map.component.html'),
    styles: [ require('./map.component.scss') ],
    providers: [Http, ConnectionBackend]
})
export class MapComponent {
    public coords: Array<Object>;

    constructor(private http: Http) {}

    ngOnInit() {
        this._getSolarSystemCoordinates();
    }

    private _getSolarSystemCoordinates() {
        this.http.get('http://www.google.com')
            .map(res => res.json())
            .subscribe(
                jsonCoords => this.coords = jsonCoords,
                err => console.log(err)
            );
    }
}
