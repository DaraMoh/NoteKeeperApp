import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NoteService, Note } from '../../services/note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatButtonModule, MatCardModule],
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  note: Partial<Note> = { title: '', content: '' };
  isEdit = false;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.noteService.getNoteById(+id).subscribe(n => (this.note = n));
    }
  }

  onSubmit() {
    if (!this.note.title || !this.note.content) return;

    if (this.isEdit && this.note.id) {
      this.noteService.updateNote(this.note.id, this.note).subscribe(() => {
        alert('Note updated!');
        this.router.navigate(['/notes']); // go back to list
      });
    } else {
      this.noteService.addNote(this.note).subscribe(() => {
        alert('Note created!');
        this.router.navigate(['/notes']); // go back to list
      });
    }
  }

  goBack() {
    this.router.navigate(['/notes']);
  }

}
