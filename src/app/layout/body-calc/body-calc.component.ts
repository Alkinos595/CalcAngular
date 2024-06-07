import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-body-calc',
	standalone: true,
	imports: [RouterOutlet, RouterLink],
	templateUrl: './body-calc.component.html'
})
export class BodyCalcComponent {

}
