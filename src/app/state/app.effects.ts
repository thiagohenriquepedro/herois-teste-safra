import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { ErrorService } from '../shared/services/error.service';
import { HeroService } from './../shared/services/hero.service';
import { error_action, load_characters, load_comics, loaded_characters, loaded_comics } from './app.actions';


@Injectable()
export class HeroEffect {

  public loadHeroes = createEffect(() => this.actions.pipe(
    ofType(load_characters),
    switchMap(action => this.heroSrv.getCharactersFilteredByName(action.character)
      .pipe(
        map(heroes => ({ type: loaded_characters.type, characters: heroes })),
        catchError((error) => of({ type: error_action.type, error })
        ))
    ))
  );

  public loadComic = createEffect(() => this.actions.pipe(
    ofType(load_comics),
    switchMap(action => this.heroSrv.getComicsByCharacterIdOrderByOnSaleDateDesc(action.characterId)
      .pipe(
        map(comics => ({ type: loaded_comics.type, comics: comics })),
        catchError((error) => of({ type: error_action.type, error })
        ))
    ))
  );

  public error = createEffect(() => this.actions.pipe(
    ofType(error_action),
    switchMap((action) => {
      this.errorSrv.handleErrors(action.error);
      return of(EMPTY)
    })
  ),
    { dispatch: false }
  );

  constructor(private actions: Actions,
    private heroSrv: HeroService,
    private errorSrv: ErrorService) { }
}
