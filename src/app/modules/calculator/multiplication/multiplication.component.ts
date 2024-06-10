import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-multiplication',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './multiplication.component.html'
})
export class MultiplicationComponent {

	public num1!: number;
	public num2!: number;
	public result!: number;

	public mul(): void {
		if (isNaN(this.num1) || isNaN(this.num2)) {
			alert("Please enter valid numbers in both fields.");
		}
		else {
			this.result = this.num1 * this.num2;
		}
	}
}
