import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule],
        templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    route: string;

    constructor(private router: Router) {
        this.route = this.router.url;
    }

    ngOnInit() {
        this.router.events.subscribe(() => {
            this.route = this.router.url;
        });
    }
}
