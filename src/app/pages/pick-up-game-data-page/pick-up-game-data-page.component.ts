import { Component, OnInit } from '@angular/core';
import {PickUpGameService} from "../../core/services/pick-up-game.service";
import {PickUpGame} from "../../core/models/pick-up-game";

@Component({
  selector: 'app-pick-up-game-data-page',
  templateUrl: './pick-up-game-data-page.component.html',
  styleUrls: ['./pick-up-game-data-page.component.css']
})
export class PickUpGameDataPageComponent implements OnInit {

  id: string;
  pickupList: PickUpGame[] = [];
  pickupId: any;
  isShow = false;

  constructor(private pickupService: PickUpGameService) {
    this.id = '';
  }

  ngOnInit(): void {
    this.pickupService.getEventPickUpGame().then(res => this.pickupList = res as PickUpGame[]);
  }

  showConfirmation(){
    this.isShow = true;
  }

  pickupInfo(id: string){
    this.pickupService.getIdEventPickUpGame(id).then(data => {this.pickupId = data as PickUpGame[];});
    this.showConfirmation();
  }

}
