import { Character } from 'src/app/shared/interfaces/Character';
// import { Character } from './Character';
import { MarvelResponse } from 'src/app/shared/interfaces/MarvelResponse';

export interface getCharactersFilteredByNameResponse extends MarvelResponse {
    results?: Array<Character>;
}
