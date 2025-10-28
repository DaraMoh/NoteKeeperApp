import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NoteService, Note } from '../../services/note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [FormsModule], // ✅ Required for ngModel
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  note: Partial<Note> = { title: '', content: '' };

  constructor(private noteService: NoteService) {}

  saveNote() {
    if (!this.note.title || !this.note.content) return;
    this.noteService.createNote(this.note).subscribe(() => {
      this.note = { title: '', content: '' };
      alert('Note created!');
    });
  }
}
