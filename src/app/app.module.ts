import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { VariableComponent } from './variable/variable.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule } from '@angular/common/http';
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
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateProductformComponent } from './create-productform/create-productform.component';
import { CreateRaviComponent } from './create-ravi/create-ravi.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { PricePipe } from './price.pipe';
import { PercentagePipe } from './percentage.pipe';
import { PhonePipe } from './phone.pipe';
import { ImpDirective } from './imp.directive';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ItemComponent } from './item/item.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { ExternalComponent } from './external/external.component';
import { InternalComponent } from './internal/internal.component';
import { AboutModule } from './about/about.module';
import { CartsComponent } from './carts/carts.component';
import { ItemsComponent } from './items/items.component';
import { NavsComponent } from './navs/navs.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    InfoComponent,
    VariableComponent,
    InterpolationComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    MarksheetComponent,
    VehicleComponent,
    BankComponent,
    SchoolComponent,
    FlipcartComponent,
    MailComponent,
    ActivityComponent,
    MemesComponent,
    UsersComponent,
    StudentsComponent,
    CreateVehicleComponent,
    CreateBankComponent,
    CreateStudentComponent,
    CreateUserComponent,
    CreateProductformComponent,
    CreateRaviComponent,
    VehicleDetailsComponent,
    PricePipe,
    PercentagePipe,
    PhonePipe,
    ImpDirective,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    ItemComponent,
    NavComponent,
    CartComponent,
    TopComponent,
    BottomComponent,
    Parent1Component,
    Child1Component,
    ExternalComponent,
    InternalComponent,
    CartsComponent,
    ItemsComponent,
    NavsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }








