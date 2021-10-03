import {Injectable} from '@angular/core';
import {Task} from '../Task';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class TaskService {
  private url: string = 'http://localhost:5000/tasks/';
  private readonly httpOptions?: { headers: HttpHeaders };
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };


  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    };
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task, this.httpOptions);
  }

  read(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  update(task: Task): Observable<Task> {
    return this.http.patch<Task>(this.url + task.id, task, this.httpOptions);
  }

  delete(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.url + task.id);
  }
}
