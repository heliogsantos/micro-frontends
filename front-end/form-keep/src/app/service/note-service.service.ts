import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


import { NewNote } from './../components/note-form/models/New-note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  readonly baseUrl = 'http://localhost:3000/notes'

  constructor(private http: HttpClient) { }

  create(note: NewNote): Observable<NewNote> {
    return this.http.post<NewNote>(this.baseUrl, note)
  }
}
