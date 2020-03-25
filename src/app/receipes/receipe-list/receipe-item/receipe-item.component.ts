import {Component, Input, OnInit } from '@angular/core';
import {RecipieModle} from '../../recipie.modle';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  @Input() recipe: RecipieModle;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }


}
