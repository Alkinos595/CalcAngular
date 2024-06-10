import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-addition',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './addition.component.html'
})
export class AdditionComponent {

	public num1!: number;
	public num2!: number;
	public result!: number;

	public add(): void {
		this.result = this.num1 + this.num2;
	}
}
