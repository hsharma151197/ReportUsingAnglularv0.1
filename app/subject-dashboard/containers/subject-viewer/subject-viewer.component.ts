import { Component, OnInit } from '@angular/core';

import { SubjectDashboardService } from '../../subject-dashboard.service';

import { Subject } from '../../models/subject.interface';

@Component({
    selector: 'subject-viewer',
    styleUrls: ['subject-viewer.component.scss'],
    template: `
        <div>
            {{ subject | json }}
        </div>
    `
})
export class SubjectViewerComponent implements OnInit{
    subject: Subject;
    constructor(private subjectService: SubjectDashboardService){}

    ngOnInit(){
        this.subjectService.getSubject(1).subscribe((data: Subject) => {
            this.subject = data;
        })
    }
}