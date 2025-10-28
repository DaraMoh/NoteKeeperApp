import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteService, Note } from '../../services/note.service';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe(data => (this.notes = data));
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe(() => this.loadNotes());
  }
}
