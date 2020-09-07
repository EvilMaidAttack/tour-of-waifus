import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = []

  constructor() { }

  add(message: string){
    this.messages.push(message)
  }

  clear(){
    this.messages = []
  }

  update(index: number){
    this.messages.forEach( (item, i) => {
      if(index === i) this.messages.splice(index,1);
    });
 }
 
}
