import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-management-app';
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', email: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', email: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', email: '@twitter'},
  ];
  headElements = ['ID', 'First', 'Last', 'Email'];
}
