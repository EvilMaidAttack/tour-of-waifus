import { MessageService } from './message.service';
import { WAIFUS } from './mock-waifus';
import { Waifu } from './waifu';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class WaifuService {

  private heroesUrl = 'api/waifus'

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getWaifus(): Observable<Waifu[]> {
    this.messageService.add("WaifuService: fetched waifus")
    return of(WAIFUS)
  }

  getWaifu(id: number): Observable<Waifu> {
    this.messageService.add(`WaifuService: fetched waifu id=${id}`);
    return of(WAIFUS.find(waifu => waifu.id == id))
  }

  private log(message: string): void {
    this.messageService.add(`WaifuService: ${message}`)
  }

  

}
