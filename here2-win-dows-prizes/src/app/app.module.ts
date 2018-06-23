import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import {AuthService} from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { NotfoundComponent } from './notfound/notfound.component';
import { TestComponent } from './test/test.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { SpellingComponent } from './test/spelling/spelling.component';
import { BackKnowledgeComponent } from './test/back-knowledge/back-knowledge.component';
import { WritingComponent } from './test/writing/writing.component';
import {ReadfileService} from './readfile.service';
import {TestService} from './test/test.service';
import { OverComponent } from './test/over/over.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ReadComponent } from './read/read.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    NotfoundComponent,
    TestComponent,
    SpellingComponent,
    BackKnowledgeComponent,
    WritingComponent,
    OverComponent,
    StatisticsComponent,
    ReadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [AuthService,AngularFireAuth,AngularFirestore,ReadfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }