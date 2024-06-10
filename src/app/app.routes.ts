import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './generalComponents/header/header.component';
import { NgModule } from '@angular/core';
import { FooterComponent } from './generalComponents/footer/footer.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Easybank Home',
        component:HomeComponent
    },
    {   path: 'header',
        title:'Header',
        component:HeaderComponent
    },
    {
        path:'footer',
        title:'Footer',
        component:FooterComponent
    }
];
