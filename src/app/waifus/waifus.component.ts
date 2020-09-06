import { MessageService } from './../message.service';
import { WaifuService } from './../waifu.service';
import { Waifu } from './../waifu';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-waifus',
  templateUrl: './waifus.component.html',
  styleUrls: ['./waifus.component.css']
})
export class WaifusComponent implements OnInit {

  waifus: Waifu[]
  selectedWaifu: Waifu

  constructor(private waifuService: WaifuService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getWaifus()
  }

  onSelect(waifu: Waifu): void {
    this.selectedWaifu = waifu
    this.messageService.add(`WaifuComponent: selected waifu id = ${waifu.id}`);
  }

  
  getWaifus(): void {
    this.waifuService.getWaifus().subscribe(waifus => this.waifus = waifus)
  }

}
