import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { BtnComponent } from './component/btn/btn.component';
import { TitleComponent } from './component/title/title.component';
import { FormComponent } from './component/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormRowComponent } from './component/form-row/form-row.component';
import { TableComponent } from './component/table/table.component';
import { TableHeaderComponent } from './component/table-header/table-header.component';
import { EditComponent } from './component/edit/edit.component';
import { DeleteComponent } from './component/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http'; 


const AppRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: TableComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnComponent,
    TitleComponent,
    FormComponent,
    FormRowComponent,
    TableComponent,
    TableHeaderComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),

  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
