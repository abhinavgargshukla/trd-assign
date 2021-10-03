import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Student } from 'src/app/Student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Output() toadd:EventEmitter<Student>=new EventEmitter();

  studentToAdd:Student;
  name: string="";
   rollno!: number;
   year!: number;
  constructor() { 
    this.studentToAdd={
      name:this.name,
      rollno:this.rollno,
      year:this.year
      } 
    
  }


  

  ngOnInit(): void {
  }
  onSubmit()
  {

    if(this.name=="")
    {
      alert("Please enter name");
    }
    else if(isNaN(this.rollno))
    {
      alert("Please enter rollno");
    }
    else if(isNaN(this.year))
    {
      alert("Please enter year");
    }
    else
    {
      this.studentToAdd={
        name:this.name,
        rollno:this.rollno,
        year:this.year
        } 
      
      console.log(this.studentToAdd);
      this.toadd.emit(this.studentToAdd);
    }
    
  }
  
}
