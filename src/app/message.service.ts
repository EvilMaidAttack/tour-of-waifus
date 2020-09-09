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
    this.toastrService.info('Messages cleared')
  }

  update(index: number){
    this.messages.forEach( (item, i) => {
      if(index === i) this.messages.splice(index,1);
    });
    
 }
 
}
