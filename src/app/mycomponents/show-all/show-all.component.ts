import { Component, OnInit } from '@angular/core';
import{Student} from "../../Student";

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  students:Student[]
  constructor() {
    this.students=[
      {
        name:"Abhinav",
        rollno:2,
        year: 3
      },
      {
        name:"Raj",
        rollno:2,
        year: 3
      },
      {
        name:"Girdhari",
        rollno:2,
        year: 3
      },
      {
        name:"Mahadev",
        rollno:2,
        year: 3
      }
    ]
   }

  ngOnInit(): void {
  }
  deleteit(student:Student)
  {
    console.log(student.name);
    console.log("yaha nhi aa gaye");
    const index=this.students.indexOf(student);
    this.students.splice(index,1);
  }

}
