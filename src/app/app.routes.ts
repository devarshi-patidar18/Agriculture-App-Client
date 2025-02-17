import { Routes } from '@angular/router';
import { MandiBhaavComponent } from './mandi-bhaav/mandi-bhaav.component';
import { HomeComponent } from './common/home/home.component';
import { SettingsComponent } from './common/settings/settings.component';
import { LaborCalculatorComponent } from './common/labour-calculator/labour-calculator.component';
import { WeatherForecastComponent } from './common/weather-forecast/weather-forecast.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FarmManagerDashboardComponent } from './farm-manager-dashboard/farm-manager-dashboard.component';
import { MessageAppComponent } from './message-app/message-app.component';


export const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'mandibhaav' , component: MandiBhaavComponent},
    {path:'settings',component:SettingsComponent},
    {path:'labourCalculator',component:LaborCalculatorComponent},
    {path:'weatherForecast',component:WeatherForecastComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'farm-manager-dashboard',component:FarmManagerDashboardComponent},
    {path:'message-app',component:MessageAppComponent}
]