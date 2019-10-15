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
import { RegularTableComponent7 } from "./regular7/regular-table7.component";
import { RegularTableComponent7F } from "./regular7F/regular-table7F.component";
import { RegularTableComponent8 } from "./regular8/regular-table8.component";
import { RegularTableComponent8F } from "./regular8F/regular-table8F.component";
import { RegularTableComponent9 } from "./regular9/regular-table9.component";
import { RegularTableComponent9F } from "./regular9F/regular-table9F.component";
import { RegularTableComponent10 } from "./regular10/regular-table10.component";
import { RegularTableComponent10F } from "./regular10F/regular-table10F.component";
import { RegularTableComponent11 } from "./regular11/regular-table11.component";
import { RegularTableComponent11F } from "./regular11F/regular-table11F.component";

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

        {
            path: 'regular7',
            component: RegularTableComponent7,
            data: {
                title: 'Regular Table7'
            }
        },
        {
            path: 'regular7F',
            component: RegularTableComponent7F,
            data: {
                title: 'Regular Table7F'
            }
        },  

        {
            path: 'regular8',
            component: RegularTableComponent8,
            data: {
                title: 'Regular Table8'
            }
        },
        {
            path: 'regular8F',
            component: RegularTableComponent8F,
            data: {
                title: 'Regular Table8F'
            }
        },  

        {
            path: 'regular9',
            component: RegularTableComponent9,
            data: {
                title: 'Regular Table9'
            }
        },
        {
            path: 'regular9F',
            component: RegularTableComponent9F,
            data: {
                title: 'Regular Table9F'
            }
        },  

        {
            path: 'regular10',
            component: RegularTableComponent10,
            data: {
                title: 'Regular Table10'
            }
        },
        {
            path: 'regular10F',
            component: RegularTableComponent10F,
            data: {
                title: 'Regular Table10F'
            }
        },  

        {
            path: 'regular11',
            component: RegularTableComponent11,
            data: {
                title: 'Regular Table11'
            }
        },
        {
            path: 'regular11F',
            component: RegularTableComponent11F,
            data: {
                title: 'Regular Table11F'
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
