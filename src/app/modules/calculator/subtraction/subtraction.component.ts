import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-subtraction',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './subtraction.component.html'
})
export class SubtractionComponent {

	public num1!: number;
	public num2!: number;
	public result!: number;

	public sub(): void {
		this.result = this.num1 - this.num2;
	}
}
