import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { name: string; description: string },
    public matDialogRef: MatDialogRef<ModalComponent>
  ) {}

  ngOnInit(): void {
  }

  closeAndSaveData() {
    this.matDialogRef.close(this.data);
  }

  closeModalWithoutData() {
    this.matDialogRef.close();
  }
}
