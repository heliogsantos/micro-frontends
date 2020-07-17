import { Component, OnInit, Input } from '@angular/core';

import { colorPaletteBallsMock } from './mock/palletes-colors.mock'
import { PalleteColors } from './models/Pallete-colors.model'
import { NewNote } from './models/New-note.model';
import { NoteService } from './../../service/note-service.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  noteToggle = false
  readonly createNoteText = 'Criar uma nota...'
  placeholder = this.createNoteText
  readonly titleNewNote = 'Título'
  @Input() toggle: boolean
  colorPaletteBalls = colorPaletteBallsMock
  noteWraperColor = colorPaletteBallsMock[0].bgColor

  newNoteForm: NewNote = {
    description: undefined,
    title: undefined,
  }

  constructor(private noteService: NoteService) { }

  openFormInsertNote = (event: any) => {
    event.stopPropagation()
    this.placeholder = this.titleNewNote
    this.noteToggle = true
  }

  formToogleNote() {
    this.noteToggle = this.toggle
    this.placeholder = this.createNoteText 
  }

  addChekedPallelaColor = (colorPaletteBall: PalleteColors) => {
    this.removeCheckedPalleteColor()
    colorPaletteBall.checkedColor = true

    this.noteWraperColor = colorPaletteBall.bgColor
  }

  removeCheckedPalleteColor() {
    this.colorPaletteBalls.forEach((colorPaletteBall: PalleteColors) => {
      colorPaletteBall.checkedColor = false
  })
  
    this.getColorDefault()
  }

  closeNoteForm(event) {
    this.noteToggle = false 
    event.stopPropagation()
    this.getColorDefault()
    this.creteNote()
    this.clearFormNote()
  }

  getColorDefault = () => this.noteWraperColor = colorPaletteBallsMock[0].bgColor

  getNote() {
   const note: NewNote = this.newNoteForm
   return note
  }

  clearFormNote() {
    this.newNoteForm.title = undefined
    this.newNoteForm.description = undefined
  }

  creteNote = () => {
    this.verifyFilds() ? 
      this.noteService.create(this.getNote())
        .subscribe(() => this.clearFormNote()) 
          : undefined
  }

  verifyFilds = () => this.newNoteForm.description !== undefined ? true : false

  ngOnInit() {
    document.body.addEventListener('click', () => {
      this.formToogleNote()
      this.noteToggle = false
      this.getColorDefault()
      this.getNote()
      this.creteNote()
    })
  }

}
