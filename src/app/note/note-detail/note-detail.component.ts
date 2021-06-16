import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { NoteDetail } from '../note';

@Component({
    selector: 'app-note-detail',
    templateUrl: './note-detail.component.html',
    styleUrls: ['./note-detail.component.scss']
})
export class NoteDetailComponent implements OnChanges {

    @Input()
    listData: NoteDetail;

    @Output()
    eSave: EventEmitter<NoteDetail> = new EventEmitter();

    public title: string;

    public body: string;

    public id: number;

    constructor() {

    }

    ngOnChanges() {
        if(this.listData) {
            this.title = this.listData.title;
            this.body = this.listData.body;
            this.id = this.listData.id;
        }
    }

    public get canSave() {
        return this.title && this.body && this.title.trim() && this.body.trim();
    }

    public onSave(title, body) {
        this.eSave.emit({title: this.title?.trim(), body: this.body?.trim(), id: this.id});
        title.control.markAsPristine();
        body.control.markAsPristine();
    }

}
