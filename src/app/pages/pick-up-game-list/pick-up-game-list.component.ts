import { Component, OnInit } from '@angular/core';
import {PickUpGameService} from "../../core/services/pick-up-game.service";
import {PickUpGame} from "../../core/models/pick-up-game";

@Component({
  selector: 'app-pick-up-game-list',
  templateUrl: './pick-up-game-list.component.html',
  styleUrls: ['./pick-up-game-list.component.css']
})
export class PickUpGameListComponent implements OnInit {

  pickGame: PickUpGame[] = []

  constructor(private pickupgameService: PickUpGameService) { }

  ngOnInit(): void {
    this.pickupgameService.getEventPickUpGame().then(res => this.pickGame = res as PickUpGame[]);
  }

}
