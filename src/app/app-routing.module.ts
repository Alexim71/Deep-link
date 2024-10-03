import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // create a HomeComponent
import { Tab2Component } from './tab2/tab2.component'; // create a Tab2Component

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tab2', component: Tab2Component },
    // Add other routes as needed
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
