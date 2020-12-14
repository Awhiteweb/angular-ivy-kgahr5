import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [

]
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ]
})
export class AppRoutingModule {}