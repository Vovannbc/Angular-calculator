import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AppSwitchExampleComponent } from './app-switch-example/app-switch-example.component';
import { AppNgifComponent } from './app-ngIf-example/app-ngIf-example.component';
import { DeliveryCalculatorComponent } from './delivery-calculator/delivery-calculator.component';

@NgModule({
  declarations: [
      AppComponent,
      AppSwitchExampleComponent,
      AppNgifComponent,
      DeliveryCalculatorComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          { path: 'calculator', component: DeliveryCalculatorComponent },
          { path: 'ngif-example', component: AppNgifComponent },
          { path: 'switch-example', component: AppSwitchExampleComponent },
          { path: '', redirectTo: '/', pathMatch: 'full' }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
