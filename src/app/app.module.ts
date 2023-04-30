import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './products/add/add.component';
import { UsersComponent } from './users/users.component';
import { RecieversComponent } from './recievers/recievers.component';
import { CommandsComponent } from './commands/commands.component';
import { NavbarComponent } from './frontoffice/components/navbar/navbar.component';
import { FooterComponent } from './frontoffice/components/footer/footer.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { ContactComponent } from './frontoffice/contact/contact.component';
import { ProductComponent } from './frontoffice/product/product.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    MaterialsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AddComponent,
    UsersComponent,
    RecieversComponent,
    CommandsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProductComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
