import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  @Input() text!:string
  @Input() colour!:string
  @Input() width!:string
  constructor() {}
  
  ngOnInit(): void {}

  }
