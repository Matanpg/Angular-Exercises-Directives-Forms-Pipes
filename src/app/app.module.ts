import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Directive1Component } from './directive-1/directive-1.component';
import { HighlightDirDirective } from './highlight-dir.directive';
import { WindowConfirmDirective } from './window-confirm.directive';
import { Directive2Component } from './directive-2/directive-2.component';
import { Directive3Component } from './directive-3/directive-3.component';
import { RepeatDirective } from './repeat.directive';
import { Pipe1Component } from './pipe-1/pipe-1.component';
import { CensorPipe } from './censor.pipe';
import { Form1Component } from './form-1/form-1.component';
import { UserInfoService } from './user-info.service';

const appRoutes: Routes = [
    { path: 'directive-1', component: Directive1Component },
    { path: 'directive-2', component: Directive2Component }
  ]

@NgModule({
  declarations: [
    AppComponent,
    Directive1Component,
    HighlightDirDirective,
    WindowConfirmDirective,
    Directive2Component,
    Directive3Component,
    RepeatDirective,
    Pipe1Component,
    CensorPipe,
    Form1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
