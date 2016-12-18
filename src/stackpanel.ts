import { inject, customElement, children, child } from 'aurelia-framework';

@customElement('logofx-stack-panel')
@inject(Element)
export class StackPanel {


	constructor(private element: Element) {
		this.element = element;
  }

  attached() {
    console.log(this.element);
    var orient = this.element.getAttribute('orientation');
    console.log(orient);
    
    if (orient=="vertical"){       
      var elms = this.element.children;
      for (var i=0; i<elms.length; i++){
        console.log(elms[i]);
        elms[i].setAttribute("style", "width: 100%");
      }
    }
  }

  detached() {

  }

  bind() {

  }
}


