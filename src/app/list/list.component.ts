import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {dataModel} from './model';
import {ApiService} from '../api.service';
import {REGEX_MATCH} from '../regex.utils';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employeeForm!: FormGroup;
  data: undefined | dataModel[];

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
  }

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      // id: [null, Validators.required],
      carId: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(15)]],
      inStock: [null, Validators.required],
      hp: [null, [Validators.required, Validators.min(100), Validators.max(550)]],
      price: [null, [Validators.required, Validators.pattern(REGEX_MATCH)]],
      color: [null, Validators.required],
      checkArray: this.formBuilder.array([])
    });
    this.getEmployee();
  }

  addEmployee(data: dataModel) {
    this.api.addEmployee(data).subscribe((res => {
      this.employeeForm.reset();
    }));
    this.getEmployee();
  }

  getEmployee() {
    this.api.getEmployee().subscribe(res => {
      this.data = res;
    });
  }

  validation() {
    return (this.employeeForm.controls['carId'].invalid && (this.employeeForm.controls['carId'].dirty || this.employeeForm.controls['carId'].touched));
  }
}
