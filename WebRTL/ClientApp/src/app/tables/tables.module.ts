import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesRoutingModule } from "./tables-routing.module";

import { ExtendedTableComponent } from "./extended/extended-table.component";

import { RegularTableComponent } from "./regular/regular-table.component";
import { RegularTableComponentF } from "./regularF/regular-tableF.component";
import { RegularTableComponent2 } from "./regular2/regular-table2.component";
import { RegularTableComponent2F } from "./regular2F/regular-table2F.component";



import { SmartTableComponent } from "./smart-data-table/smart-data-table.component";

import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        Ng2SmartTableModule,
        DpDatePickerModule,
        ReactiveFormsModule,
        FormsModule,
        NgSelectModule
        
    ],
    declarations: [
        
        RegularTableComponent,
        RegularTableComponentF,
        RegularTableComponent2,
        RegularTableComponent2F,

        ExtendedTableComponent,
        SmartTableComponent
    ]
})

export class TablesModule {
  
}
