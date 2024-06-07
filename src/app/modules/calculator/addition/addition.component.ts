import { Component } from '@angular/core';

@Component({
	selector: 'app-addition',
	standalone: true,
	imports: [],
	templateUrl: './addition.component.html'
})
export class AdditionComponent {
	public num1:number = 0;
	public num2:number = 0;

	/* function add(number1:number, number2:number) {
		return number1 + number2;
	} */
}
