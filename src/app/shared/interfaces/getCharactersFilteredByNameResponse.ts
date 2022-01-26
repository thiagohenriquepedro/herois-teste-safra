import { Character } from './Character';
import { MarvelResponse } from './MarvelResponse';

export interface getCharactersFilteredByNameResponse extends MarvelResponse {
    results?: Array<Character>;
}
