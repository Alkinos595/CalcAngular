import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-addition',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './addition.component.html'
})
export class AdditionComponent {

	/* public num1!:number;
	public num2!:number;

	result: number = 0;
	public add():number{
		console.log(this.num1);
		console.log(this.num2);
		this.result = (this.num1) + (this.num2);
		console.log(result);
		return(result);
		}  */
		public num1!: number;
		public num2!: number;
		public result: number = 0;
	  
		public add(): void {
		  console.log(this.num1);
		  console.log(this.num2);
		  this.result = this.num1 + this.num2;
		  console.log(this.result);
		}
}
