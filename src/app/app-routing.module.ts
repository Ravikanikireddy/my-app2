import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VariableComponent } from './variable/variable.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankComponent } from './bank/bank.component';
import { SchoolComponent } from './school/school.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { MailComponent } from './mail/mail.component';
import { ActivityComponent } from './activity/activity.component';
import { MemesComponent } from './memes/memes.component';
import { UsersComponent } from './users/users.component';
import { StudentsComponent } from './students/students.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { authenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProductformComponent } from './create-productform/create-productform.component';


const routes: Routes = [
     {path:'login',component:LoginComponent} ,             
     {path:'dashboard',component:DashboardComponent, canActivate:[authenticationGuard],children:[
       {path:'home',component:HomeComponent},
       {path:'info',component:InfoComponent},
       {path:'variable',component:VariableComponent},
       {path:'interpolation',component:InterpolationComponent},
       {path:'eventbinding',component:EventbindingComponent},
       {path:'twowaybinding',component:TwowaybindingComponent},
       {path:'calculator',component:CalculatorComponent},
       {path:'rectangle',component:RectangleComponent},
       {path:'circle',component:CircleComponent},
       {path:'bmi',component:BmiComponent},
       {path:'structural-directives',component:StructuralDirectivesComponent},
       {path:'attribute-directives',component:AttributeDirectivesComponent},
       {path:'marksheet',component:MarksheetComponent},
       {path:'vehicle',component:VehicleComponent},
       {path:'bank',component:BankComponent},
       {path:'school',component:SchoolComponent},
       {path:'flipcart',component:FlipcartComponent},
       {path:'mail',component:MailComponent},
       {path:'activity',component:ActivityComponent},
       {path:'memes',component:MemesComponent},
       {path:'users',component:UsersComponent},
       {path:'students',component:StudentsComponent},
       {path:'create-vehicle',component:CreateVehicleComponent},
       {path:'create-bank',component:CreateBankComponent},
       {path:'create-student',component:CreateStudentComponent},
       {path:'create-user',component:CreateUserComponent},
       {path:'create-productform',component:CreateProductformComponent}
       ]},
     {path:'',component:LoginComponent },
     {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
