import { Routes } from '@angular/router';
import {GetMonitorsComponent} from './pages/functionality/get-monitors/get-monitors.component';
import {GetProjectorsComponent} from './pages/functionality/get-projectors/get-projectors.component';
import {GetTelevisionsComponent} from './pages/functionality/get-televisions/get-televisions.component';
import {DevicesAddComponent} from './pages/functionality/devices-add/devices-add.component';
import {DevicesEditComponent} from './pages/functionality/devices-edit/devices-edit.component';
import {NumberOfDevicesComponent} from './pages/data-manager/number-of-devices/number-of-devices.component';
import {
  NumberOfDevicesTechInformationComponent
} from './pages/data-manager/number-of-devices-tech-information/number-of-devices-tech-information.component';
import {SalesLogsComponent} from './pages/data-manager/sales-logs/sales-logs.component';
import {SalesRevenueComponent} from './pages/data-manager/sales-revenue/sales-revenue.component';
import {DevicesComparisionComponent} from './pages/functionality/devices-comparision/devices-comparision.component';
import {DevicesManagementComponent} from './pages/functionality/devices-management/devices-management.component';
import {HomeComponent} from './pages/home/home/home.component';
import {RegisterComponent} from './pages/auth/register/register.component';
import {LoginComponent} from './pages/auth/login/login.component';
import {authGuard} from './pages/auth/auth.guard';
import {ChangePasswordComponent} from './pages/auth/change-password/change-password.component';

export const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // FUNCTIONALITY
  { path: 'home', component: HomeComponent, canActivate: [authGuard]},
  { path: 'get-monitors', component: GetMonitorsComponent, canActivate: [authGuard] },

  { path: 'change-password', component: ChangePasswordComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'get-monitors', component: GetMonitorsComponent },
  { path: 'get-projectors', component: GetProjectorsComponent},
  { path: 'get-televisions', component: GetTelevisionsComponent},
  { path: 'devices-add', component: DevicesAddComponent},
  { path: 'devices-edit', component: DevicesEditComponent},
  { path: 'devices-management', component: DevicesManagementComponent},
  { path: 'devices-comp', component: DevicesComparisionComponent},

  // DATA-MANAGER
  { path: 'number-of-devices', component: NumberOfDevicesComponent},
  { path: 'number-of-devices-tech-inf', component: NumberOfDevicesTechInformationComponent},
  { path: 'sales-logs', component: SalesLogsComponent},
  { path: 'sales-revenue', component: SalesRevenueComponent}

];
