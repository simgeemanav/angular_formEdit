import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {dataModel} from './list/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  addEmployee(data: dataModel) {
    return this.http.post<dataModel>('http://localhost:3000/posts', data);
  }

  getEmployee() {
    return this.http.get<dataModel[]>('http://localhost:3000/posts');
  }

  // deleteEmployee(id: number) {
  //   return this.http.delete<dataModel>("http://localhost:3000/posts/" +id)
  // }
  fetchData(id: number) {
    return this.http.get<dataModel>('http://localhost:3000/posts/' + id);
  }

  updateEmployee(data: dataModel, id: number) {
    return this.http.put<dataModel>('http://localhost:3000/posts/' + id, data);
  }
}


