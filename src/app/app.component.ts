import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderCalcComponent } from "./layout/header-calc/header-calc.component";
import { BodyCalcComponent } from "./layout/body-calc/body-calc.component";
import { FooterCalcComponent } from "./layout/footer-calc/footer-calc.component";

@Component({
	selector: 'app-root',
	standalone: true,
	templateUrl: './app.component.html',
	imports: [RouterOutlet, HeaderCalcComponent, BodyCalcComponent, FooterCalcComponent]
})
export class AppComponent {
	title = 'calculadora';
}
