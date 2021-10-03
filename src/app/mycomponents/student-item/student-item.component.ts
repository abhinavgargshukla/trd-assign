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
  
   title:string="Edit";
   toedit:boolean=false;
   name!: string;
   rollno!: number;
   year!: number;
  
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
  onEdit(student:Student)
  {
      if(this.toedit==false)
      {
       
        this.name=this.student.name;
       this.rollno=this.student.rollno;
       this.year=this.student.year;

        this.title="Done";
        this.toedit=true;
      }
      else
      {
        this.student={
          name:this.name,
          rollno:this.rollno,
          year:this.year
        }
        //this.student=this.student1;
        this.title="Edit";
        this.toedit=false;
      }
  }
}
