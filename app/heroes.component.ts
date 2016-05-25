import {Component, OnInit} from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.component.html',
    styleUrls: ['app/styles/heroes.component.css']
})
export class HeroesComponent implements OnInit{
    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService
    ){}

    ngOnInit(){
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero; }
    getHeroes(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    gotoDetail(){
        this.router.navigate(['HeroDetail', {id: this.selectedHero.id }])
    }
}