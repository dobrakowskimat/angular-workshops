import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  customForm: FormGroup;
  constructor(public dialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customForm = this.fb.group({
      customCheckbox: new FormControl(true),
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UserEditComponent, {
      data: {},
    });
  }
}
