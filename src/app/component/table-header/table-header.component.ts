import { Component,OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})

export class TableHeaderComponent implements OnInit {
  @Input() color!:string;
  @Input() name!:string;
  @Input() phone!:string;
  @Input() adress!:string;
  @Input() note!:string;
  constructor() {}


  ngOnInit(): void {}

  }
