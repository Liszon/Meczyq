import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {IndexComponent} from './pages/index/index.component';
import {RouterModule} from "@angular/router";
import {RegisterpageComponent} from './pages/registerpage/registerpage.component';
import {LoginpageComponent} from './pages/loginpage/loginpage.component';
import {EditUserDataPageComponent} from './pages/edit-user-data-page/edit-user-data-page.component';
import {ChangeUserPasswordPageComponent} from './pages/change-user-password-page/change-user-password-page.component';
import {CreateTournamentPageComponent} from './pages/create-tournament-page/create-tournament-page.component';
import {EditTournamentPageComponent} from './pages/edit-tournament-page/edit-tournament-page.component';
import {InviteTeamToTournamentPageComponent} from './pages/invite-team-to-tournament-page/invite-team-to-tournament-page.component';
import {CreateTeamPageComponent} from './pages/create-team-page/create-team-page.component';
import {EditTeamDataComponent} from './pages/edit-team-data-page/edit-team-data.component';
import {InviteUserToTeamPageComponent} from './pages/invite-user-to-team-page/invite-user-to-team-page.component';
import {CreatePickUpGamePageComponent} from './pages/create-pick-up-game-page/create-pick-up-game-page.component';
import {EditPickUpGameDataPageComponent} from './pages/edit-pick-up-game-data-page/edit-pick-up-game-data-page.component';
import {CreateSportFacilityPageComponent} from './pages/create-sport-facility-page/create-sport-facility-page.component';
import {EditSportFacilityDataPageComponent} from './pages/edit-sport-facility-data-page/edit-sport-facility-data-page.component';
import {CreateSportTypePageComponent} from './pages/create-sport-type-page/create-sport-type-page.component';
import {EditSportTypePageComponent} from './pages/edit-sport-type-page/edit-sport-type-page.component';
import {UserDataPageComponent} from './pages/user-data-page/user-data-page.component';
import {TournamentDataPageComponent} from './pages/tournament-data-page/tournament-data-page.component';
import {TournamentsAvailableInAreaPageComponent} from './pages/tournaments-available-in-area-page/tournaments-available-in-area-page.component';
import {TournamentGamePageComponent} from './pages/tournament-add-game-result/tournament-game-page.component';
import {TeamDataPageComponent} from './pages/team-data-page/team-data-page.component';
import {PickUpGameDataPageComponent} from './pages/pick-up-game-data-page/pick-up-game-data-page.component';
import {SportFacilityDataPageComponent} from './pages/sport-facility-data-page/sport-facility-data-page.component';
import {SportTypesListPageComponent} from './pages/sport-types-list-page/sport-types-list-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PickUpGameListComponent} from './pages/pick-up-game-list/pick-up-game-list.component';
import {SportsFacilityListPageComponent} from './pages/sports-facility-list-page/sports-facility-list-page.component';
import {DeleteSportFacilityComponent} from './pages/delete-sport-facility/delete-sport-facility.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainTournamentsPageComponent} from './pages/main-tournaments-page/main-tournaments-page.component';
import {MainTeamsPageComponent} from './pages/main-teams-page/main-teams-page.component';
import {MainPickUpGamePageComponent} from './pages/main-pick-up-game-page/main-pick-up-game-page.component';
import {MainSportsFacilityPageComponent} from './pages/main-sports-facility-page/main-sports-facility-page.component';
import {MainSportTypesPageComponent} from './pages/main-sport-types-page/main-sport-types-page.component';

import {LoginGuard} from "./auth/guards/login.guard";
import {TokenInterceptor} from "./auth/token.interceptor";


import {InviteUserToPickUpGameComponent} from './pages/invite-user-to-pick-up-game-page/invite-user-to-pick-up-game.component';
import {HomeComponent} from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    RegisterpageComponent,
    LoginpageComponent,
    EditUserDataPageComponent,
    ChangeUserPasswordPageComponent,
    CreateTournamentPageComponent,
    EditTournamentPageComponent,
    InviteTeamToTournamentPageComponent,
    CreateTeamPageComponent,
    EditTeamDataComponent,
    InviteUserToTeamPageComponent,
    CreatePickUpGamePageComponent,
    EditPickUpGameDataPageComponent,
    CreateSportFacilityPageComponent,
    EditSportFacilityDataPageComponent,
    CreateSportTypePageComponent,
    EditSportTypePageComponent,
    UserDataPageComponent,
    TournamentDataPageComponent,
    TournamentsAvailableInAreaPageComponent,
    TournamentGamePageComponent,
    TeamDataPageComponent,
    PickUpGameDataPageComponent,
    SportFacilityDataPageComponent,
    SportTypesListPageComponent,
    PickUpGameListComponent,
    SportsFacilityListPageComponent,
    DeleteSportFacilityComponent,
    MainTournamentsPageComponent,
    MainTeamsPageComponent,
    MainPickUpGamePageComponent,
    MainSportsFacilityPageComponent,
    MainSportTypesPageComponent,
    InviteUserToPickUpGameComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{path: "", redirectTo: "home", pathMatch: "full"},
      {path: '', component: IndexComponent},
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginpageComponent},
      {path: 'change-user-password', component: ChangeUserPasswordPageComponent},
      {
        path: 'create-pick-up-game', component: CreatePickUpGamePageComponent,
        canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'create-sport-facility', component: CreateSportFacilityPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'create- sport-type', component: CreateSportTypePageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'create-team', component: CreateTeamPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'create-tournament', component: CreateTournamentPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'delete-sports-facility', component: DeleteSportFacilityComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'edit-pick-up-game-data', component: EditPickUpGameDataPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'edit-sport-facility-data', component: EditSportFacilityDataPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'edit-sport-type', component: EditSportTypePageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'edit-team-data', component: EditTeamDataComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'edit-tournament', component: EditTournamentPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'edit-user-data', component: EditUserDataPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'invite-team-to-tournament', component: InviteTeamToTournamentPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'invite-user-to-team', component: InviteUserToTeamPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'invite-user-to-pick-up-game', component: InviteUserToPickUpGameComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'main-tournaments', component: MainTournamentsPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'main-pick-up-game', component: MainPickUpGamePageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'main-teams', component: MainTeamsPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {path: 'main-sports-facility', component: MainSportsFacilityPageComponent  , canActivate: [LoginGuard],
        canLoad: [LoginGuard]},
      {
        path: 'main-sport-types', component: MainSportTypesPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'pick-up-game-data', component: PickUpGameDataPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'pick-up-game-list', component: PickUpGameListComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'sport-facility-data', component: SportFacilityDataPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'sport-facility-list', component: SportsFacilityListPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'sport-type-list', component: SportTypesListPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'team-data', component: TeamDataPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'tournament-data', component: TournamentDataPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'tournament-add-game-result', component: TournamentGamePageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'tournaments-available-in-area',
        component: TournamentsAvailableInAreaPageComponent,
        canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {
        path: 'user-data', component: UserDataPageComponent, canActivate: [LoginGuard],
        canLoad: [LoginGuard]
      },
      {path: 'register', component: RegisterpageComponent}
    ]),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
