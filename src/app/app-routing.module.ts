import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { DetailsComponent } from './create-profile/details/details.component';
import { MainTapComponent } from './main-tap/main-tap.component';
import { ParentComponent } from './parent/parent.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'home', component: ParentComponent },
  {path:'create-profile',component:CreateProfileComponent},
  {path:'main-tap',component:MainTapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
