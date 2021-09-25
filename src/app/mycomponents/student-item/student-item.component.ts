import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Student } from 'src/app/Student';
@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

 @Input()student: Student;
 @Output() toremove:EventEmitter<Student>=new EventEmitter();
  

  constructor() { 
    this.student=
      {
        name:"raj",
       rollno:1,
       year:3,
      }
    
  }
  

  ngOnInit(): void {
  }
  onClick(student:Student){
    this.toremove.emit(student);
  } 
}
