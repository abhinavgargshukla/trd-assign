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
        year: 4
      },
      {
        name:"Raj",
        rollno:89,
        year: 2
      },
      {
        name:"Himadri",
        rollno:36,
        year: 3
      },
      {
        name:"Arthuro",
        rollno:99,
        year: 1
      }
    ]
   }

  ngOnInit(): void {
  }
  deleteit(student:Student)
  {
    console.log(student.name);
    console.log("reached deleit");
    const index=this.students.indexOf(student);
    this.students.splice(index,1);
  }
  addit(student:Student)
  {
    console.log("hi reached here");
    this.students.push(student);
    console.log(this.students);
  }

}
