import { PastTrainingComponent } from './past-training/past-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { TrainingComponent } from './training/training.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import { AuthService } from './Auth.service';
import { TrainingService } from './training.service';

@NgModule({
   declarations: [
      AppComponent,
      SignupComponent,
      TrainingComponent,
      CurrentTrainingComponent,
      NewTrainingComponent,
      PastTrainingComponent,
      SignupComponent,
      LoginComponent,
      WelcomeComponent,
      StopTrainingComponent
   ],
   imports: [
BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      FlexLayoutModule,
      FormsModule
   ],
   providers: [AuthService, TrainingService],
   entryComponents: [StopTrainingComponent],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
