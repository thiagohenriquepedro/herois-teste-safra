import { Comic } from './Comic';
import { MarvelResponse } from './MarvelResponse';

export interface getComicsByCharacterIdOrderByOnSaleDateDescResponse extends MarvelResponse{
    results: Array<Comic>
}
