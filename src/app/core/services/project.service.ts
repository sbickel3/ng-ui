import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Project } from '../models/Project';
import { environment } from 'src/environments/environment';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  CurrentProject: Project;
  
  constructor(private httpClient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(environment.url, HTTP_OPTIONS);
  }

  getProjectById(id): Observable<Project>{
    return this.httpClient.get<Project>(environment.url + `/${id}`, HTTP_OPTIONS);

  }

  updateProject(formData: FormData): Observable<Project>{
    return this.httpClient.put(environment.url, formData);
  }

  createProject(formData: FormData): Observable<Project> {
    return this.httpClient.post(environment.url, formData);
  }

  setCurrentProject(project: Project) {
    this.CurrentProject = project;
  }
}
