import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from 'src/app/shared/interfaces/Character';
import { Comic } from 'src/app/shared/interfaces/Comic';
import { load_comics } from 'src/app/state/app.actions';
import { HeroStore } from 'src/app/state/interface/HeroStore';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.sass']
})
export class HeroDetailComponent implements OnInit {
  public hero: Character;
  public comics: Comic[];
  public heroStore: Observable<HeroStore>;
  public heroName = {};
  public showLoading: boolean;

  constructor(private actRoute: ActivatedRoute,
    private route: Router,
    private store: Store<HeroStore>,) { }


  ngOnInit() {
    this.heroStore = this.store.pipe(select('marvel'))
    const heroeId: string = this.actRoute.snapshot.paramMap.get("id");
    this.heroStore.subscribe(data => {
      this.hero = data.characters.find(heroe => heroe.id.toString() === heroeId)
      this.comics = data.comics;
      this.showLoading = data.loading
      if (!this.hero) {
        this.route.navigate(['/heroes'])
      }
      this.heroName = { name: this.hero.name };
    });
    this.store.dispatch(load_comics({ characterId: parseInt(heroeId) }));

  }

  public print() {
    this.route.navigate(['/heroes'])
  }

}
