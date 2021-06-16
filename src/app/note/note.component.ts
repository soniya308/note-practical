import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { LoginService } from '../login.service';
import { NoteDetail } from './note';

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})
export class NoteComponent {

    public listData: NoteDetail;

    id: number = 1;

    folders: NoteDetail[] = [
        {
            title: 'Test Title 1',
            body: 'Test Body A',
            id: this.id++
        },
        {
            title: 'Test Title 2',
            body: 'Test Body B',
            id: this.id++
        }
    ];

    constructor(public snackBar: MatSnackBar, private dialog: MatDialog, public loggedInService: LoginService, public router: Router) {
        if (!this.loggedInService.getLogin) {
            this.router.navigate(['./'])
        }
    }

    public onSave(event: NoteDetail) {
        if (event.id) {
            const index = this.folders.findIndex(item => item.id === event.id);
            this.folders[index] = Object.assign({}, event);
        } else {
            if (this.folders.find((item) => item.title.toLowerCase() === event.title.toLowerCase() && item.body.toLowerCase() === event.body.toLowerCase())) {
                this.snackBar.open('Duplicate note!!!', '', { duration: 2000 })
            } else {
                event.id = this.id++;
                this.folders.push(event);
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
                this.onAdd();
            }
        });
    }

    public onAdd() {
        this.listData = {
            title: null,
            body: null,
            id: null
        }
    }
}
