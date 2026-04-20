import { Routes } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {SampleEntitiesComponent} from './component/sample-entities/sample-entities.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sample-entities', component: SampleEntitiesComponent }
];

