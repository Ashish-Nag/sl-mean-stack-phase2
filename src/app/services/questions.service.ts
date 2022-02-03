import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Questions } from '../models/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  public questionObj:any ;
  constructor(private http: HttpClient) { } // Dependency injection for HttpClient

  getQuestions():Observable<Questions[]> {
    return this.http.get<Questions[]>('../../assets/questionnaire/questions.json');
    
  }
}
