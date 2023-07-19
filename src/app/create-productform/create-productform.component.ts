import { Comment } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-productform',
  templateUrl: './create-productform.component.html',
  styleUrls: ['./create-productform.component.scss']
})
export class CreateProductformComponent {
  public productForm: FormGroup = new FormGroup({
    name: new FormControl(),
    price: new FormControl(),
    color: new FormControl(),
    features: new FormGroup({
      ram: new FormControl(),
      battery: new FormControl(),
      processor: new FormControl()
    }),
    comments: new FormArray([]),
    payment: new FormControl(),
    upi: new FormControl(),
    net: new FormControl()
  });

  get commentsFormArray() {
    return this.productForm.get('comments') as FormArray;
  }
  addcomment() {
    this.commentsFormArray.push(
      new FormGroup({
        name: new FormControl(),
        time: new FormControl(),
        message: new FormControl()
      })
    )
  }
  deletecomment(i: number) {
    this.commentsFormArray.removeAt(i);
  }
  submit() {
    console.log(this.productForm);
  }

}