import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import {RouterModule} from "@angular/router";
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { EditUserDataPageComponent } from './pages/edit-user-data-page/edit-user-data-page.component';
import { ChangeUserPasswordPageComponent } from './pages/change-user-password-page/change-user-password-page.component';
import { CreateTournamentPageComponent } from './pages/create-tournament-page/create-tournament-page.component';
import { EditTournamentPageComponent } from './pages/edit-tournament-page/edit-tournament-page.component';
import { InviteTeamToTournamentPageComponent } from './pages/invite-team-to-tournament-page/invite-team-to-tournament-page.component';
import { CreateTeamPageComponent } from './pages/create-team-page/create-team-page.component';
import { EditTeamDataComponent } from './pages/edit-team-data-page/edit-team-data.component';
import { InviteUserToTeamPageComponent } from './pages/invite-user-to-team-page/invite-user-to-team-page.component';
import { CreatePickUpGamePageComponent } from './pages/create-pick-up-game-page/create-pick-up-game-page.component';
import { EditPickUpGameDataPageComponent } from './pages/edit-pick-up-game-data-page/edit-pick-up-game-data-page.component';
import { CreateSportFacilityPageComponent } from './pages/create-sport-facility-page/create-sport-facility-page.component';
import { EditSportFacilityDataPageComponent } from './pages/edit-sport-facility-data-page/edit-sport-facility-data-page.component';
import { CreateSportTypePageComponent } from './pages/create-sport-type-page/create-sport-type-page.component';
import { EditSportTypePageComponent } from './pages/edit-sport-type-page/edit-sport-type-page.component';
import { CreateTextChatPageComponent } from './pages/create-text-chat-page/create-text-chat-page.component';
import { EditTextChatPageComponent } from './pages/edit-text-chat-page/edit-text-chat-page.component';
import { InviteUserToTextChatPageComponent } from './pages/invite-user-to-text-chat-page/invite-user-to-text-chat-page.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { UserDataPageComponent } from './pages/user-data-page/user-data-page.component';
import { TournamentDataPageComponent } from './pages/tournament-data-page/tournament-data-page.component';
import { TournamentsAvailableInAreaPageComponent } from './pages/tournaments-available-in-area-page/tournaments-available-in-area-page.component';
import { TournamentGamePageComponent } from './pages/tournament-game-page/tournament-game-page.component';
import { TeamDataPageComponent } from './pages/team-data-page/team-data-page.component';
import { PickUpGameDataPageComponent } from './pages/pick-up-game-data-page/pick-up-game-data-page.component';
import { SportFacilityDataPageComponent } from './pages/sport-facility-data-page/sport-facility-data-page.component';
import { SportTypesListPageComponent } from './pages/sport-types-list-page/sport-types-list-page.component';
import {FormsModule} from "@angular/forms";
import { PickUpGameListComponent } from './pages/pick-up-game-list/pick-up-game-list.component';
import { SportsFacilityListPageComponent } from './pages/sports-facility-list-page/sports-facility-list-page.component';
import { DeleteSportFacilityComponent } from './pages/delete-sport-facility/delete-sport-facility.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MainTournamentsPageComponent } from './pages/main-tournaments-page/main-tournaments-page.component';
import { MainTeamsPageComponent } from './pages/main-teams-page/main-teams-page.component';
import { MainPickUpGamePageComponent } from './pages/main-pick-up-game-page/main-pick-up-game-page.component';
import { MainSportsFacilityPageComponent } from './pages/main-sports-facility-page/main-sports-facility-page.component';
import { MainSportTypesPageComponent } from './pages/main-sport-types-page/main-sport-types-page.component';
import {LoginGuard} from "./auth/guards/login.guard";
import {TokenInterceptor} from "./auth/token.interceptor";



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
    CreateTextChatPageComponent,
    EditTextChatPageComponent,
    InviteUserToTextChatPageComponent,
    ChatPageComponent,
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
    MainSportTypesPageComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {path: "", redirectTo: "home", pathMatch: "full"},
            {path: 'home', component: IndexComponent},
            {path: 'login', component: LoginpageComponent},
            {path: 'change-user-password', component: ChangeUserPasswordPageComponent},
            {path: 'chat', component: ChatPageComponent},
            {path: 'create-pick-up-game', component: CreatePickUpGamePageComponent,
              canActivate: [LoginGuard],
              canLoad: [LoginGuard]
            },
            {path: 'create-sport-facility', component: CreateSportFacilityPageComponent},
            {path: 'create- sport-type', component: CreateSportTypePageComponent},
            {path: 'create-team', component: CreateTeamPageComponent},
            {path: 'create-text-chat', component: CreateTextChatPageComponent},
            {path: 'create-tournament', component: CreateTournamentPageComponent},
            {path: 'delete-sports-facility', component: DeleteSportFacilityComponent},
            {path: 'edit-pick-up-game-data', component: EditPickUpGameDataPageComponent},
            {path: 'edit-sport-facility-data', component: EditSportFacilityDataPageComponent},
            {path: 'edit-sport-type', component: EditSportTypePageComponent},
            {path: 'edit-team-data', component: EditTeamDataComponent},
            {path: 'edit-text-chat', component: EditTextChatPageComponent},
            {path: 'edit-tournament', component: EditTournamentPageComponent},
            {path: 'edit-user-data', component: EditUserDataPageComponent},
            {path: 'invite-team-to-tournament', component: InviteTeamToTournamentPageComponent},
            {path: 'invite-user-to-team', component: InviteUserToTeamPageComponent},
            {path: 'invite-user-to-text-chat', component: InviteUserToTextChatPageComponent},
            {path: 'main-tournaments', component: MainTournamentsPageComponent},
            {path: 'main-pick-up-game', component: MainPickUpGamePageComponent},
            {path: 'main-teams', component: MainTeamsPageComponent},
            {path: 'main-sports-facility', component: MainSportsFacilityPageComponent},
            {path: 'main-sport-types', component: MainSportTypesPageComponent},
            {path: 'pick-up-game-data', component: PickUpGameDataPageComponent},
            {path: 'pick-up-game-list', component: PickUpGameListComponent},
            {path: 'sport-facility-data', component: SportFacilityDataPageComponent},
            {path: 'sport-facility-list', component: SportsFacilityListPageComponent},
            {path: 'sport-type-list', component: SportTypesListPageComponent},
            {path: 'team-data', component: TeamDataPageComponent},
            {path: 'tournament-data', component: TournamentDataPageComponent},
            {path: 'tournament-game', component: TournamentGamePageComponent},
            {path: 'tournaments-available-in-area', component: TournamentsAvailableInAreaPageComponent},
            {path: 'user-data', component: UserDataPageComponent},
            {path: 'register', component: RegisterpageComponent}
        ]),
        HttpClientModule,
        FormsModule
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
export class AppModule { }
