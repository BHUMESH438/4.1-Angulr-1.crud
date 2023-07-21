import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CRUD';
  name = '';
  savearray: string[] = [];
  completedarray: string[] = [];

  editindex: number | null = null;
  save() {
    if (this.editindex !== null) {
      this.savearray = this.savearray.map((val, i) => {
        if (this.editindex == i) {
          val = this.name;
        }
        return val;
      });
    } else {
      this.savearray.push(this.name);
    }
    this.editindex = null;
    this.name = '';
  }
  edit(editindex: number) {
    this.editindex = editindex;
    const editData = this.savearray.find((val, i) => {
      return editindex === i;
    });
    if (editData) {
      this.name = editData;
    } else this.name = '';
  }
  delete(deleteindex: number) {
    this.savearray = this.savearray.filter((val, i) => {
      console.log(val);
      return deleteindex !== i;
    });
    console.log(this.savearray);
  }
  complete(completeindex: number) {
    console.log(this.savearray);
    const completeditem = this.savearray.find((val, i) => {
      return completeindex == i;
    });

    this.savearray = this.savearray.filter((val, i) => {
      return completeindex !== i;
    });
    if (completeditem) this.completedarray.push(completeditem);
    console.log(completeditem);
    console.log(this.completedarray);
  }
}
