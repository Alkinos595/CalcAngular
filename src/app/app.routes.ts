import { Routes } from '@angular/router';
import { HomeComponent } from './modules/calculator/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { DivisionComponent } from './modules/calculator/division/division.component';
import { MultiplicationComponent } from './modules/calculator/multiplication/multiplication.component';
import { SubtractionComponent } from './modules/calculator/subtraction/subtraction.component';
import { AdditionComponent } from './modules/calculator/addition/addition.component';

export const routes: Routes = [

	{
		path: "",
		component: HomeComponent
	},
	{
		path: "add",
		component: AdditionComponent
	},
	{
		path: "sub",
		component: SubtractionComponent
	},
	{
		path: "mul",
		component: MultiplicationComponent
	},
	{
		path: "div",
		component: DivisionComponent
	},
	{
		path: "about",
		component: AboutComponent
	},

];
