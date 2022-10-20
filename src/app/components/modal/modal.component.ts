import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface ModalDataInterface {
  name: string;
  description: string;
  title?: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalDataInterface,
    public matDialogRef: MatDialogRef<ModalComponent>
  ) {}

  closeAndSaveData() {
    this.matDialogRef.close(this.data);
  }

  closeModalWithoutData() {
    this.matDialogRef.close();
  }
}
