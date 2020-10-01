import { WaifuService } from './../waifu.service';
import { Waifu } from './../waifu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waifus',
  templateUrl: './waifus.component.html',
  styleUrls: ['./waifus.component.css'],
})
export class WaifusComponent implements OnInit {
  waifus: Waifu[];

  constructor(private waifuService: WaifuService) {}

  ngOnInit(): void {
    this.getWaifus();
  }

  getWaifus(): void {
    this.waifuService.getWaifus().subscribe((waifus) => (this.waifus = waifus));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.waifuService
      .addWaifu({ name } as Waifu)
      .subscribe((waifu) => this.waifus.push(waifu));
  }

  delete(waifu: Waifu) {
    this.waifus = this.waifus.filter((w) => w !== waifu);
    this.waifuService.deleteWaifu(waifu).subscribe();
  }
}
