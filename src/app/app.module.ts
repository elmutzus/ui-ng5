import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

// Needed for form data binding
import { FormsModule } from '@angular/forms';

// Needed for routing
import { AppRoutingModule } from './app-routing.module';

// Needed to use animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Needed to use services
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
