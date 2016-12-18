import { customElement, children } from 'aurelia-framework';
import { StackPanel } from './stackpanel';
import { inject } from 'aurelia-framework';

@inject(StackPanel)
export class App {
  
  heading = "Building Stack Panel";
  horizoltalexemple = "Horizontal exemple";
  verticalexemple = "Vertical exemple";


   constructor(public stack: StackPanel){
         console.log('Проверка!');
      }

}

