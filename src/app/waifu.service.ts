import { MessageService } from './message.service';
import { WAIFUS } from './mock-waifus';
import { Waifu } from './waifu';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WaifuService {

  constructor(private messageService: MessageService) { }

  getWaifus(): Observable<Waifu[]> {
    this.messageService.add("WaifuService: fetched waifus")
    return of(WAIFUS)
  }

  getWaifu(id: number): Observable<Waifu> {
    this.messageService.add(`WaifuService: fetched waifu id=${id}`);
    return of(WAIFUS.find(waifu => waifu.id == id))
  }

  

}
