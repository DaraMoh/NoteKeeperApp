import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NoteService, Note } from '../../services/note.service';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // whenever the notes array changes
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe(data => (this.notes = data));
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe(() => this.loadNotes());
  }

  editNote(note: Note) {
    this.router.navigate(['/edit', note.id]);
  }

  addNewNote() {
    this.router.navigate(['/add-note']);
  }

}
