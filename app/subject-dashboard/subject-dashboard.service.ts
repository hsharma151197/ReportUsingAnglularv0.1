import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { Subject } from './models/subject.interface'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const SUBJECTS_API: string = '/api/subjects';

@Injectable()
export class SubjectDashboardService{
    
    constructor(private http: Http){}

    getSubjects(): Observable<Subject[]>{
        return this.http.get(SUBJECTS_API).map((response: Response) => {
            return response.json();
        });
        
    }

    getSubject(id: number): Observable<Subject>{
        return this.http.get(`${SUBJECTS_API}/${id}`).map((response: Response) => {
            return response.json();
        }).catch((error: any) => Observable.throw(error.json()));
        
    }
}