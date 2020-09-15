import { Waifu } from './waifu';
import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const waifus = [
      {id: 1, name: 'Zero Two'},
      {id: 2, name: 'Kamado Nezuko'},
      {id: 3, name: 'Kato Megumi'},
      {id: 4, name: 'Rem'},
      {id: 5, name: 'Ram'},
      {id: 6, name: 'Emilia'},
      {id: 7, name: 'Uraraka Ochako'},
      {id: 8, name: 'Himiko Toga'},
      {id: 9, name: 'Shinobu Kocho'},
      {id: 10, name: 'Albedo'}
  ]
    return {waifus};
  }

  genId(waifus: Waifu[]): number {
    return waifus.length > 0 ? Math.max(...waifus.map(waifu => waifu.id)) + 1 : 1
  }


}
