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
import { PractiseComponent } from './practise/practise.component';
import { OralComponent } from './test/oral/oral.component';
import { ReadingComponent } from './test/reading/reading.component';
import { SpellingComponent } from './test/spelling/spelling.component';
import { BackKnowledgeComponent } from './test/back-knowledge/back-knowledge.component';
import { WritingComponent } from './test/writing/writing.component';
import {ReadfileService} from './readfile.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    NotfoundComponent,
    TestComponent,
    PractiseComponent,
    OralComponent,
    ReadingComponent,
    SpellingComponent,
    BackKnowledgeComponent,
    WritingComponent,
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