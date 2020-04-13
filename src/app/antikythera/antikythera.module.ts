import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntikytheraComponent } from './antikythera.component';
import { AntikytheraRoutingModule } from './antikythera-routing.module';
import { GraphicsModule } from '../graphics/graphics.module';

@NgModule({
  declarations: [AntikytheraComponent],
  imports: [
    CommonModule,
    AntikytheraRoutingModule,
    GraphicsModule
  ]
})
export class AntikytheraModule { }
