import{ IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { HelloIonicPage } from './hello-ionic';

@NgModule({
    declarations: [HelloIonicPage],
    imports: [IonicPageModule.forChild(HelloIonicPage)]
})
export class HomeModule{
    
}