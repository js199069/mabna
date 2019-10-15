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
import { RegularTableComponent3 } from "./regular3/regular-table3.component";
import { RegularTableComponent3F } from "./regular3F/regular-table3F.component";
import { RegularTableComponent4 } from "./regular4/regular-table4.component";
import { RegularTableComponent4F } from "./regular4F/regular-table4F.component";
import { RegularTableComponent5 } from "./regular5/regular-table5.component";
import { RegularTableComponent5F } from "./regular5F/regular-table5F.component";
import { RegularTableComponent6 } from "./regular6/regular-table6.component";
import { RegularTableComponent6F } from "./regular6F/regular-table6F.component";


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
        RegularTableComponent3,
        RegularTableComponent3F,
        RegularTableComponent4,
        RegularTableComponent4F,
        RegularTableComponent5,
        RegularTableComponent5F,
        RegularTableComponent6,
        RegularTableComponent6F,

        ExtendedTableComponent,
        SmartTableComponent
    ]
})

export class TablesModule {
  
}
