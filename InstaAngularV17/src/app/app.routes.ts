import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main/main.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
     {path: '', component: MainComponent},
     {path: 'contact', component: ContactComponent},
];
