import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardHouseComponent } from '../cards/card-house/card-house.component';
import { ResultHouseComponent } from '../cards/result-house/result-house.component';
import { FrameHouseComponent } from '../frames/frame-house/frame-house.component';
import { ResultFrameComponent } from '../frames/result-frame/result-frame.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardHouseComponent,
    FrameHouseComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ResultHouseComponent,
    ResultFrameComponent
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
