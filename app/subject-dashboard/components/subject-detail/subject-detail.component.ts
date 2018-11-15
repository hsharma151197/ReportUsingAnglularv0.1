import { Component, Input } from '@angular/core';

import { Subject } from '../../models/subject.interface';

@Component({
    selector: 'subject-detail',
    styleUrls: ['subject-detail.component.scss'],
    template: `
    
        <table>
            <thead>
                <tr>
                    <td>Subject</td>
                    <td>Marks Secured</td>
                    <td>Total Marks</td>
                    <td>Highest Marks</td>
                </tr>
            </thead>
            <tr *ngFor="let subject of subjects">
                <td [innerHTML]="subject.subject"></td>
                <td [innerHTML]="subject.marks_secured"></td>
                <td [innerHTML]="subject.total_marks"></td>
                <td [innerHTML]="subject.highest_marks"></td>
            </tr>      
        </table>

    `
})
export class SubjectDetailComponent{
    @Input()
    subjects: Subject[];
}