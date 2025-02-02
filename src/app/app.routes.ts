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
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent, canActivate: [authGuard] },
  { path: 'get-monitors', component: GetMonitorsComponent, canActivate: [authGuard] },
  { path: 'get-projectors', component: GetProjectorsComponent, canActivate: [authGuard]},
  { path: 'get-televisions', component: GetTelevisionsComponent, canActivate: [authGuard]},
  { path: 'devices-add', component: DevicesAddComponent, canActivate: [authGuard] },
  { path: 'devices-edit', component: DevicesEditComponent, canActivate: [authGuard] },
  { path: 'devices-management', component: DevicesManagementComponent, canActivate: [authGuard] },
  { path: 'devices-comp', component: DevicesComparisionComponent, canActivate: [authGuard] },
  // DATA-MANAGER
  { path: 'number-of-devices', component: NumberOfDevicesComponent, canActivate: [authGuard] },
  { path: 'number-of-devices-tech-inf', component: NumberOfDevicesTechInformationComponent, canActivate: [authGuard] },
  { path: 'sales-logs', component: SalesLogsComponent, canActivate: [authGuard] },
  { path: 'sales-revenue', component: SalesRevenueComponent, canActivate: [authGuard]}

];
