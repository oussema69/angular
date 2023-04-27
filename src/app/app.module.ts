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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
