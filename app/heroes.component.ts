import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    directives: [HeroDetailComponent],
    selector: 'my-heroes',
    templateUrl:'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    constructor(
        private heroService: HeroService,
        private router: Router){};
    heroes = [];
    title = 'Tour of Heroes';
    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    gotoDetail(){
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

