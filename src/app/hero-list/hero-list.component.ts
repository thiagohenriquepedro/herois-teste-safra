import { Character } from 'src/app/shared/interfaces/Character';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

//import { Character } from '../shared/interfaces/character';
import { HeroStore } from '../state/interface/HeroStore';
import { load_characters, loaded_characters } from './../state/app.actions';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.sass'],
  animations: []
})
export class HeroListComponent implements OnInit {
  public character: string;
  public heroStore: Observable<HeroStore>;
  public heroes: Array<Character>
  public showLoading: boolean;
  isLoading: any;


  constructor(private store: Store<HeroStore>) {
  }

  ngOnInit() {
    this.heroStore = this.store.pipe(select('marvel'))
    this.heroStore.subscribe(data => {
      this.heroes = data.characters
      this.showLoading = data.loading
    });
  }

  public search(character: string) {
    if (character) {
      this.store.dispatch(load_characters({ character: character }))
    } else {
      this.store.dispatch(loaded_characters({ characters: [] }))
    }

  }

}
