import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';
import { DetailsComponent } from '@src/app/details/details.component';
import { DashboardComponent } from '@src/app/dashboard/dashboard.component';
import { SalaryHistoryComponent } from '@src/app/salary-history/salary-history.component';
import { PensionInfoComponent } from '@src/app/pension-info/pension-info.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'salary-info',
    component: SalaryHistoryComponent
  },
  {
    path: 'pension-info',
    component: PensionInfoComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];
