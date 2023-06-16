import {Component, HostListener, OnInit} from '@angular/core';
import {dataModel} from '../list/model';
import {ApiService} from '../api.service';
import {ActivatedRoute, Router, Params} from '@angular/router';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  dataId!: number;
  employee!: dataModel;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private api: ApiService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: Params) => {
      this.dataId = param['get']('id');
    });
    this.api.fetchData(this.dataId).subscribe((data: dataModel) => {
      this.employee = data;
    });
  }

  update() {
    this.api.updateEmployee(this.employee, this.dataId).subscribe((res: dataModel) => {
      this.router.navigate(['/']);
    });
  }
}
