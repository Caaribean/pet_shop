import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PetsComponent } from './pages/pets/pets.component';
import { FooterComponent } from './components/footer/footer.component';
import { PetProductsComponent } from './pages/pet-products/pet-products.component';
import { PetCardComponent } from './components/pet-card/pet-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { PetPreviewComponent } from './pages/pet-preview/pet-preview.component';
import { ShortListComponent } from './components/short-list/short-list.component';
import { PetService } from './services/pet.service';
import { YesNoPipe } from './pipe/yes-no.pipe';
import { ProductPreviewComponent } from './pages/product-preview/product-preview.component';
import { ProductService } from './services/product.service';
import { ProductCardComponent } from './components/product-card/product-card.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PetCardComponent,
    PetsComponent,
    PetProductsComponent,
    BannerComponent,
    PetPreviewComponent,
    ShortListComponent,
    YesNoPipe,
    ProductPreviewComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    PetService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
