import { Component, Input, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Assembler } from "../assembler";
import { ProgramDescription } from "../program-description";

@Component({
    selector: 'tape-editor-component',
    templateUrl: './tape-editor.component.html'
})
export class TapeEditorComponent implements OnInit {

    @Input()
    program: ProgramDescription;

    programText: string;
    errorText: string;

    constructor(private modalService: NgbModal) {
        
    }

    ngOnInit(): void {
        this.programText = this.program.text;
    }

    save(): void {
        try {
            Assembler.assemble(this.programText);
        } catch (e) {
            this.errorText = e.message;
            return;
        }
        
        this.program.text = this.programText;
        this.dismiss();
    }

    dismiss(): void {
        this.modalService.dismissAll();
    }
}
