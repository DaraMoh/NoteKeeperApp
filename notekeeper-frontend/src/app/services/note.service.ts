import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Note {
  id?: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://localhost:5172/api/notes'; // your API URL

  constructor(private http: HttpClient) {}

  // Get all notes
  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  // Get a single note by ID
  getNoteById(id: number): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${id}`);
  }

  // Create a new note
  addNote(note: Partial<Note>): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note);
  }

  // Update an existing note
  updateNote(id: number, note: Partial<Note>): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/${id}`, note);
  }

  // Delete a note
  deleteNote(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
