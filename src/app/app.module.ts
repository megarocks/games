import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BrickGamePureJsComponent } from './brick-game-pure-js/brick-game-pure-js.component';
import { BrickGamePhaserComponent } from './brick-game-phaser/brick-game-phaser.component';
import { SinVisualizationComponent } from './sin-visualization/sin-visualization.component';


const appRoutes: Routes = [
  { path: 'brick-game-pure-js', component: BrickGamePureJsComponent },
  { path: 'brick-game-phaser', component: BrickGamePhaserComponent },
  { path: 'sin', component: SinVisualizationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BrickGamePureJsComponent,
    BrickGamePhaserComponent,
    SinVisualizationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
