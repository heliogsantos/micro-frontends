import { Component, OnInit, Input } from '@angular/core';

interface PalleteColors {
  className: string
  checkedColor: boolean
  bgColor: string
}

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

  noteToggle = false
  placeholder = 'Criar uma nota...'
  @Input() toggle: boolean

  colorPaletteBalls = [
    {
      className: 'bg-default',
      checkedColor: true,
      bgColor: '#ffffffff',
    },{
      className: 'bg-red',
      checkedColor: false,
      bgColor: '#f28b82'
    },{
      className: 'bg-orange',
      checkedColor: false,
      bgColor: '#fbbc04'
    },{
      className: 'bg-yellow',
      checkedColor: false,
      bgColor: '#fff475'
    },{
      className: 'bg-green',
      checkedColor: false,
      bgColor: '#ccff90'
    },{
      className: 'bg-oil-blue',
      checkedColor: false,
      bgColor: '#a7ffeb'
    },{
      className: 'bg-blue',
      checkedColor: false,
      bgColor: '#cbf0f8'
    },{
      className: 'bg-blue-dark',
      checkedColor: false,
      bgColor: '#aecbfa'
    },{
      className: 'bg-purple',
      checkedColor: false,
      bgColor: '#d7aefb'
    },{
      className: 'bg-rose',
      checkedColor: false,
      bgColor: '#fdcfe8'
    },{
      className: 'bg-brown',
      checkedColor: false,
      bgColor: '#e6c9a8'
    },{
      className: 'bg-grey',
      checkedColor: false,
      bgColor: '#e8eaed'
    }
  ]

  constructor() { }

  openNote = event => {
    event.stopPropagation()
    this.placeholder = 'Titulo'
    this.noteToggle = true
  }

  toogleNote = () => {
    this.noteToggle = this.toggle
    this.placeholder = 'Criar uma nota...' 
  }

  addPallelaColor = (colorPaletteBall: PalleteColors) => {
    this.removeCheckedPalleteColor()
    colorPaletteBall.checkedColor = true
  }

  removeCheckedPalleteColor = () => {
    this.colorPaletteBalls.forEach(colorPaletteBall => {
      colorPaletteBall.checkedColor = false
    })
  }

  ngOnInit(): void {
    document.body.addEventListener('click', this.toogleNote)
  }

}
