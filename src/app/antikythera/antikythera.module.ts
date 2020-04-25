import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntikytheraComponent } from './antikythera.component';
import { AntikytheraRoutingModule } from './antikythera-routing.module';
import { GraphicsModule } from '../graphics/graphics.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [AntikytheraComponent],
  imports: [
    CommonModule,
    AntikytheraRoutingModule,
    GraphicsModule,
    AccordionModule.forRoot()
  ]
})
export class AntikytheraModule { }
