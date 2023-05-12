import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.css']
})

export class FormRowComponent implements OnInit {

  @Input() data!:string
  constructor() {}
  
  ngOnInit(): void {}

  }
