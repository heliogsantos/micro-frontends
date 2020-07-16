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
  placeholder = 'Criar uma nota...'
  @Input() toggle: boolean
  colorPaletteBalls = colorPaletteBallsMock

  constructor() { }

  openNote = event => {
    event.stopPropagation()
    this.placeholder = 'Titulo'
    this.noteToggle = true
  }

  toogleNote() {
    this.noteToggle = this.toggle
    this.placeholder = 'Criar uma nota...' 
  }

  addPallelaColor = (colorPaletteBall: PalleteColors) => {
    this.removeCheckedPalleteColor()
    colorPaletteBall.checkedColor = true
  }

  removeCheckedPalleteColor() {
    this.colorPaletteBalls.forEach((colorPaletteBall: PalleteColors) => {
      colorPaletteBall.checkedColor = false
    })
  }

  ngOnInit(): void {
    document.body.addEventListener('click', () => {
      this.toogleNote()
      this.noteToggle = false
    })
  }

}
