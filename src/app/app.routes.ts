import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

export const routes: Routes = [
    {
        path : '' , component : RegisterComponent,
       
    }, 
    {
        path : 'custom-input' , component : CustomInputComponent
    }
  
];
