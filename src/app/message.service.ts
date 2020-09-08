import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = []

  constructor(private toastrService: ToastrService) { }

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
    this.toastrService.success('hello')
 }
 
}
