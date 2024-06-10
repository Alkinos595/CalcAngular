import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-division',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './division.component.html'
})
export class DivisionComponent {
	
	public num1!: number;
	public num2!: number;
	public result!: number;

	public div(): void {
		this.result = this.num1 / this.num2;
	}
}
