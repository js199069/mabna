﻿import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

@Component({
    selector: 'app-regular-table3F',
    templateUrl: './regular-table3F.component.html',
    styleUrls: ['./regular-table3F.component.scss']
})
@NgModule({
    imports: [
        
    ],
    declarations: [
    ]
})
export class RegularTableComponent3F implements OnInit {
    @ViewChild('f') floatingLabelForm: NgForm;
    @ViewChild('vform') validationForm: FormGroup;
    regularForm: FormGroup;

  

    ngOnInit() {//form validation
        this.regularForm = new FormGroup({
            'input1': new FormControl(null, [Validators.required, Validators.pattern(/^[.\d]+$/)]),
            'input2': new FormControl(null, [Validators.required, Validators.pattern(/^[.\d]+$/)]),
            'input3': new FormControl(null, [Validators.required]),
            'input4': new FormControl(null, [Validators.required, Validators.pattern(/^[.\d]+$/)]),
            'input5': new FormControl(null, [Validators.required]),
            'input6': new FormControl(null, [Validators.required]),
            'input7': new FormControl(null, [Validators.required]),
            'input8': new FormControl(null, [Validators.required, Validators.pattern(/^[.\d]+$/)]),
            'input9': new FormControl(null, [Validators.required]),
            'radioOption': new FormControl('Option one is this')
        }, { updateOn: 'blur' });
    }

    onReactiveFormSubmit() {
        this.regularForm.reset();
    }
    onCustomFormSubmit() {
        this.validationForm.reset();
    }

}