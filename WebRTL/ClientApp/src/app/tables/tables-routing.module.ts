import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {
    path: '',
    children: [
        
      {
        path: 'smart',
        component: SmartTableComponent,
        data: {
          title: 'Smart Table'
        }
      },  
      {
        path: 'extended',
        component: ExtendedTableComponent,
        data: {
          title: 'Extended Table'
        }
        },



      {
        path: 'regular',
        component: RegularTableComponent,
        data: {
          title: 'Regular Table'
        }
        },  
        {
            path: 'regularF',
            component: RegularTableComponentF,
            data: {
                title: 'Regular_f Table'
            }
        }, 
        {
            path: 'regular2',
            component: RegularTableComponent2,
            data: {
                title: 'Regular Table2'
            }
        },  
        {
            path: 'regular2F',
            component: RegularTableComponent2F,
            data: {
                title: 'Regular Table2F'
            }
        },  

        {
            path: 'regular3',
            component: RegularTableComponent3,
            data: {
                title: 'Regular Table3'
            }
        },
        {
            path: 'regular3F',
            component: RegularTableComponent3F,
            data: {
                title: 'Regular Table3F'
            }
        },  

        {
            path: 'regular4',
            component: RegularTableComponent4,
            data: {
                title: 'Regular Table4'
            }
        },
        {
            path: 'regular4F',
            component: RegularTableComponent4F,
            data: {
                title: 'Regular Table4F'
            }
        },  

        {
            path: 'regular5',
            component: RegularTableComponent5,
            data: {
                title: 'Regular Table5'
            }
        },
        {
            path: 'regular5F',
            component: RegularTableComponent5F,
            data: {
                title: 'Regular Table5F'
            }
        },  

        {
            path: 'regular6',
            component: RegularTableComponent6,
            data: {
                title: 'Regular Table6'
            }
        },
        {
            path: 'regular6F',
            component: RegularTableComponent6F,
            data: {
                title: 'Regular Table6F'
            }
        },  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }
