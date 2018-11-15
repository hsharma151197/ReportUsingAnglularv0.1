import { Component, Input } from '@angular/core';

import { Subject } from '../../models/subject.interface';

@Component({
    selector: 'subject-count',
    styleUrls: ['subject-count.component.scss'],
    template: `
        <div class="total">
            Total Marks Secured: {{ calcSum() }}/{{ items?.length*100 }}
        </div>
    `
})
export class SubjectCountComponent{
    @Input()
    items: Subject[];

    calcSum(): number{
        if(!this.items) return;
        
        let i: number = 0;
        for(let subject of this.items){
            i += subject.marks_secured; 
        }
        return i;
    }
}