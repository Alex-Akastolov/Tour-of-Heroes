import {Component, OnInit} from '@angular/core';
import {Hero} from "../shared/hero";
import {HeroService} from "../shared/hero.service";
import {MessageService} from "../shared/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero

  constructor(private heroService: HeroService,
              private messageSerice: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
    this.messageSerice.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
