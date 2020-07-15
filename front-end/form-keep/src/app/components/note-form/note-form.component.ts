import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  noteToggle = false
  placeholder = 'Criar uma nota...'

  constructor() { }

  openNote = () => {
    this.placeholder = 'Titulo'
    event.stopPropagation()
    this.noteToggle = !this.noteToggle
  }

  toogleNote = () => {
    this.noteToggle = false
    this.placeholder = 'Criar uma nota...' 
  }

  ngOnInit(): void {
    document.body.addEventListener('click', this.toogleNote)
  }

}
