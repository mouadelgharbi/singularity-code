import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {StudentFormComponent} from "./components/student-form/student-form.component";
import {InstructorComponent} from "./components/instructor/instructor.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'student-form', component: StudentFormComponent },
  { path: 'instructor', component: InstructorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
