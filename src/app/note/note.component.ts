import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { NoteDetail } from './note';

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})
export class NoteComponent {

    public listData: NoteDetail;

    folders: NoteDetail[];

    constructor(public snackBar: MatSnackBar, private dialog: MatDialog, public router: Router) {
        if (!JSON.parse(localStorage.getItem('login'))) {
            this.router.navigate(['./'])
        }
        this.folders = JSON.parse(localStorage.getItem('notes'))
    }

    public onSave(event: NoteDetail) {
        if (event.id) {
            const index = this.folders.findIndex(item => item.id === event.id);
            this.folders[index] = Object.assign({}, event);
            localStorage.setItem('notes', JSON.stringify(this.folders));
        } else {
            if (this.folders.find((item) => item.title.toLowerCase() === event.title.toLowerCase() && item.body.toLowerCase() === event.body.toLowerCase())) {
                this.snackBar.open('Duplicate note!!!', '', { duration: 2000 })
            } else {
                event.id = this.folders[this.folders.length - 1].id++;
                this.folders.push(event);
                localStorage.setItem('notes', JSON.stringify(this.folders));
            }
        }
        this.onAdd();
    }

    public onListSelection(event: MatSelectionListChange) {
        this.listData = event.options[0].value;
    }

    public onCancel(folder: NoteDetail) {
        this.dialog.open(ConfirmDialogComponent, {
            data: {
                title: 'Remove Note',
                message: 'Are you sure, you want to remove Note: ' + folder.title + '?'
            }
        }).afterClosed().subscribe(result => {
            if (result) {
                this.folders.splice(this.folders.findIndex((f) => f === folder), 1);
                localStorage.setItem('notes', JSON.stringify(this.folders));
                this.onAdd();
            }
        });
    }

    public onAdd() {
        this.listData = {
            title: null,
            id: null,
            body: null
        }
    }
}
