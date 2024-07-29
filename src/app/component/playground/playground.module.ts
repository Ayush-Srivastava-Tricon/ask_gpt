import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundComponent } from './playground.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PlaygroundComponent],
  imports: [
    CommonModule,
    PlaygroundRoutingModule,
    FormsModule
  ],
  exports:[PlaygroundComponent]
})
export class PlaygroundModule { }
