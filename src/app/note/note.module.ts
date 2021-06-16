import { NgModule } from '@angular/core';
import { NoteComponent } from './note.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatLineModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        NoteComponent,
        NoteDetailComponent,
        ConfirmDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatCheckboxModule,
        MatListModule,
        MatLineModule,
        MatDividerModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSnackBarModule,
        MatDialogModule,
        BrowserAnimationsModule
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
    providers: []
})
export class NoteModule { }
