import { Component, OnInit } from '@angular/core';
import {PickUpGameService} from "../../core/services/pick-up-game.service";
import {PickUpGame} from "../../core/models/pick-up-game";

@Component({
  selector: 'app-pick-up-game-data-page',
  templateUrl: './pick-up-game-data-page.component.html',
  styleUrls: ['./pick-up-game-data-page.component.css']
})
export class PickUpGameDataPageComponent implements OnInit {

  pickupId: any;

  constructor(private pickupService: PickUpGameService) { }

  ngOnInit(): void {
  }

  pickupInfo(id: string){
    return this.pickupService.getIdEventPickUpGame(id).then(data => {this.pickupId = data as PickUpGame[];})
  }

}
