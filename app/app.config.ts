import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore} from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { routes } from './app.routes';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"gestionlibros-88616","appId":"1:135400381564:web:58a6a7b5cdaaaba94e7df9","storageBucket":"gestionlibros-88616.appspot.com","apiKey":"AIzaSyAPwCWyB5n6vN40q1Qz--_q5e5Maxj5GjM","authDomain":"gestionlibros-88616.firebaseapp.com","messagingSenderId":"135400381564"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideHttpClient()]
};
