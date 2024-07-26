import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-15391","appId":"1:349650862199:web:205b543b85789a1b794672","storageBucket":"danotes-15391.appspot.com","apiKey":"AIzaSyDYWWe4_dcNQCMuw8P0pX7Q5-zYJSDkZWU","authDomain":"danotes-15391.firebaseapp.com","messagingSenderId":"349650862199"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
