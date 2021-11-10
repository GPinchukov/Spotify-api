import {ComponentFactoryResolver, Directive, ViewContainerRef} from '@angular/core';
import {MeeterComponent} from "./meeter/meeter.component";

@Directive({
  selector: '[Dynamic]'
})
export class DynamicDirective {
  constructor(private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver:
                ComponentFactoryResolver) {}
  createMyComponent() {
    const componentFactory = this.componentFactoryResolver.
    resolveComponentFactory(MeeterComponent);

    this.viewContainerRef.createComponent(componentFactory);
  }
}
