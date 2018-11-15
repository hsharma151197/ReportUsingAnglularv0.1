import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SubjectDashboardComponent } from './containers/subject-dashboard/subject-dashboard.component';
import { SubjectViewerComponent } from './containers/subject-viewer/subject-viewer.component';
import { SubjectCountComponent } from './components/subject-count/subject-count.component';
import { SubjectDetailComponent } from './components/subject-detail/subject-detail.component';

import { SubjectDashboardService } from './subject-dashboard.service';


@NgModule({
    declarations: [
        SubjectDashboardComponent,
        SubjectViewerComponent,
        SubjectCountComponent,
        SubjectDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        SubjectViewerComponent
    ],
    providers: [
        SubjectDashboardService
    ]
})
export class SubjectDashboardModule{}