import { BrowserModule , Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BlogpostModule } from './blogpost/blogpost.module';
import { CmspageModule } from './cmspage/cmspage.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserpostComponent } from './userpost/userpost.component';
import { GetpostComponent } from './getpost/getpost.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    UserpostComponent,
    GetpostComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BlogpostModule,
    CmspageModule,
    AppRoutingModule,
    FormsModule,
    

     
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
