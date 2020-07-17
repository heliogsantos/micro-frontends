import { Component, OnInit, Input } from '@angular/core';

import { colorPaletteBallsMock } from './mock/palletes-colors.mock'
import { PalleteColors } from './models/Pallete-colors.model'

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  noteToggle = false
  readonly createNoteText = 'Criar uma nota...'
  placeholder = this.createNoteText
  @Input() toggle: boolean
  colorPaletteBalls = colorPaletteBallsMock

  noteWraperColor = colorPaletteBallsMock[0].bgColor

  constructor() { }

  openFormInsertNote = (event: any) => {
    event.stopPropagation()
    this.placeholder = 'Título'
    this.noteToggle = true
  }

  toogleNote() {
    this.noteToggle = this.toggle
    this.placeholder = this.createNoteText 
  }

  addPallelaColor = (colorPaletteBall: PalleteColors) => {
    this.removeCheckedPalleteColor()
    colorPaletteBall.checkedColor = true

    this.noteWraperColor = colorPaletteBall.bgColor
  }

  removeCheckedPalleteColor() {
    this.colorPaletteBalls.forEach((colorPaletteBall: PalleteColors) => {
      colorPaletteBall.checkedColor = false
    })

    this.noteWraperColor = colorPaletteBallsMock[0].bgColor
  }

  closeNoneForm = event => {
    this.noteToggle = false 
    event.stopPropagation()
  }

  ngOnInit(): void {
    document.body.addEventListener('click', () => {
      this.toogleNote()
      this.noteToggle = false
    })
  }

}
