import { NgModule, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { NgSelectModule, NgOption } from '@ng-select/ng-select';

@Component({
    selector: 'app-regular-table11F',
    templateUrl: './regular-table11F.component.html',
    styleUrls: ['./regular-table11F.component.scss']
})
@NgModule({
    imports: [
        
    ],
    declarations: [
    ]
})
export class RegularTableComponent11F implements OnInit {
    @ViewChild('f') floatingLabelForm: NgForm;
    @ViewChild('vform') validationForm: FormGroup;
    regularForm: FormGroup;

    loaderType = [
        { id: 1, name: 'اطاقدار (آیفا)' },
        { id: 2, name: ' اطاقدار (بنز 911)' },
        { id: 3, name: 'اطاقدار (خاور)' },
        { id: 4, name: 'اطاقدار 6چرخ' },
        { id: 5, name: 'اطاقدار10چرخ' },
        { id: 6, name: 'اطاقدار4 چرخ' },
        { id: 7, name: 'باری چوبی' },
        { id: 8, name: 'باری فلزی' },
        { id: 9, name: 'بغلدار چادری 12 چرخ' },
        { id: 10, name: 'بغلدار چادری 14 چرخ' },
        { id: 11, name: 'بغلدار چادری 18چرخ' },
        { id: 12, name: 'بغلدار معمولی 18چرخ' },
        { id: 13, name: 'بغلدارچادری 10چرخ' },
        { id: 14, name: 'بغلدارچادری 6چرخ' },
        { id: 15, name: 'بغلدارچادری خاور' },
        { id: 16, name: 'بغلدارمعمولی 10چرخ' },
        { id: 17, name: 'بغلدارمعمولی 12چرخ' },
        { id: 18, name: 'بغلدارمعمولی 14چرخ' },
        { id: 19, name: 'بغلدارمعمولی 6چرخ' },
        { id: 20, name: 'بغلدارمعمولی خاور' },
        { id: 21, name: 'بلغلدارفلزی' },
        { id: 22, name: 'بوژی' },
        { id: 23, name: 'بونکر10چرخ' },
        { id: 24, name: 'بونکر12چرخ' },
        { id: 25, name: 'بونکر14چرخ' },
        { id: 26, name: 'بونکر18چرخ' },
        { id: 27, name: 'بونکر6چرخ' },
        { id: 28, name: 'جامبو' },
        { id: 29, name: 'جرثقیلدار' },
        { id: 30, name: 'سواری کش دوطبقه' },
        { id: 31, name: ' سواری کش یک طبقه' },
        { id: 32, name: ' مسقف 10چرخ' },
        { id: 33, name: ' مسقف 12 چرخ' },
        { id: 34, name: 'مسقف 14چرخ' },
        { id: 35, name: 'مسقف 18 چرخ' },
        { id: 36, name: 'مسقف 6چرخ' },
        { id: 37, name: 'مسقف خاور' },
        { id: 38, name: 'موتورسیکلت بر' },
        { id: 39, name: 'موتورسیکلت بر10 چرخ' },
        { id: 40, name: ' موتورسیکلت بر18 چرخ' },
        { id: 41, name: 'موتورسیکلت بر6 چرخ' },
        { id: 42, name: ' میکسر' },
        { id: 43, name: ' وانت کمپرسی' },
        { id: 44, name: 'وانت یخچالدار' },
        { id: 45, name: 'کامیون کشنده' },
        { id: 46, name: 'کامیونت' },
        { id: 47, name: 'کانتینردار' },
        { id: 48, name: 'کفی 10چرخ' },
        { id: 49, name: ' کفی 12چرخ' },
        { id: 50, name: ' کفی 14 چرخ' },
        { id: 51, name: 'کفی 18چرخ' },
        { id: 52, name: 'کفی 6چرخ' },
        { id: 53, name: 'کفی خاور' },
        { id: 54, name: 'کفی کانتینربر (تیغه)12 چرخ' },
        { id: 55, name: ' کفی کانتینربر (تیغه)14 چرخ' },
        { id: 56, name: 'کفی کشویی' },
        { id: 57, name: 'کمپرسی 10 چرخ' },
        { id: 58, name: 'کمپرسی 12 چرخ' },
        { id: 59, name: 'کمپرسی 14 چرخ' },
        { id: 60, name: 'کمپرسی 18 چرخ' },
        { id: 61, name: 'کمپرسی 6 چرخ' },
        { id: 62, name: 'کمپرسی بغلدار' },
        { id: 63, name: 'کمپرسی خاور' },
        { id: 64, name: 'کمرشکن 11 محور' },
        { id: 65, name: 'کمرشکن 5 محور' },
        { id: 66, name: 'کمرشکن 6 محور' },
        { id: 67, name: 'کمرشکن 7 محور' },
        { id: 68, name: 'کمرشکن 9 محور' }
    ];

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
            'input10': new FormControl(null, [Validators.required]),
            'input11': new FormControl(null, [Validators.required]),
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