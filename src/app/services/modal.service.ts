import {
  Injectable,
  ComponentRef,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
} from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalComponentRef: ComponentRef<ModalComponent> | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  openModal() {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    this.modalComponentRef = componentFactory.create(this.injector);

    this.modalComponentRef.instance.onClose.subscribe(() => {
      this.closeModal();
    });

    this.appRef.attachView(this.modalComponentRef.hostView);
    const modalElement = (this.modalComponentRef.hostView as any)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(modalElement);
  }

  private closeModal(): void {
    if (!this.modalComponentRef) return;

    this.appRef.detachView(this.modalComponentRef.hostView);
    this.modalComponentRef.destroy();
  }
}
