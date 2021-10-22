import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {Drink} from '../../models/drink.model';
import {DrinkPreviewComponent} from '../../../drink-preview/drink-preview.component';
import {DrinkService} from '../../services/drink.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  @ViewChild('drinkPreview', {static: true, read: ViewContainerRef}) entry: ViewContainerRef;


  constructor(private resolver: ComponentFactoryResolver, private service: DrinkService) {
    this.service.getDrinks().subscribe(data => {
      for (const drink in data) {
        if (data) {
          this.createComponent(data[drink]);
        }
      }
    });
  }

  ngOnInit(): void {
  }

  createComponent(drink: Drink): void {
    const factory = this.resolver.resolveComponentFactory(DrinkPreviewComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.drink = drink;
  }


}
