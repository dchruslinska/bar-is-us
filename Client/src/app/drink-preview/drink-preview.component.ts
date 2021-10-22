import {Component, Inject, Input, OnInit} from '@angular/core';
import {Drink} from '../bar/models/drink.model';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-drink-preview',
  templateUrl: './drink-preview.component.html',
  styleUrls: ['./drink-preview.component.scss']
})
export class DrinkPreviewComponent {

  @Input() drink: Drink;

  constructor(private dialog: MatDialog) {
  }

  openDialog(): void {
    this.dialog.open(DescriptionComponent, {
      width: '500px',
      data: this.drink
    });
  }
}

@Component({
  selector: 'app-description',
  templateUrl: 'description.component.html',
})
export class DescriptionComponent implements OnInit {
  ingredients = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: Drink) {
  }

  ngOnInit(): void {
    this.ingredients = this.data.ingredients.split(', ');
  }

}
