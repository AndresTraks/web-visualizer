import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HarwellComponent } from './harwell.component';
import { HarwellRoutingModule } from './harwell-routing.module';
import { GraphicsModule } from '../graphics/graphics.module';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { FormsModule } from '@angular/forms';
import { TapeEditorComponent } from './tape-editor/tape-editor.component';

@NgModule({
  declarations: [HarwellComponent, TapeEditorComponent],
  imports: [
    CommonModule,
    HarwellRoutingModule,
    GraphicsModule,
    AccordionModule.forRoot(),
    FormsModule
  ]
})
export class HarwellModule { }
