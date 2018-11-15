import { Component, OnInit } from '@angular/core';

import { Subject } from '../../models/subject.interface';

import { SubjectDashboardService } from '../../subject-dashboard.service';

@Component({
    selector: 'subject-dashboard',
    styleUrls: ['subject-dashboard.component.scss'],
    template: `

        <div>
            <h1 class="app header" [innerHTML]="report + '!'"></h1>   <!-- Interpolation allows us to bind specific properties from component class to template, It consists of expressions {{A sugar syntax}} -->
            <img class="adjust" [src]="image">

            <subject-detail [subjects]="subjects">
            </subject-detail>

        </div>
        
        <subject-count [items]="subjects">
        </subject-count>      
    `
})
export class SubjectDashboardComponent implements OnInit{
    report: string;
    subjects: Subject[];
    image: string = './images/me1.jpg';
    constructor(private subjectService: SubjectDashboardService){
        this.report = 'Himanshu\'s Report of Class 12th';
    }

    ngOnInit(){
        this.subjectService.getSubjects().subscribe((data: Subject[]) => {
            this.subjects = data;
        });
    }
}