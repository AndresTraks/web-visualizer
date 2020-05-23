import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HarwellComponent } from './harwell.component';
import { HarwellRoutingModule } from './harwell-routing.module';
import { GraphicsModule } from '../graphics/graphics.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
  declarations: [HarwellComponent],
  imports: [
    CommonModule,
    HarwellRoutingModule,
    GraphicsModule,
    AccordionModule.forRoot()
  ]
})
export class HarwellModule { }
