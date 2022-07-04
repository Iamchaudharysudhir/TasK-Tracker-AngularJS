import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Task } from "./../../Task";
import { UiService } from "./../../services/ui.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output()  onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string ="";
  day: string="";
  reminder: boolean=false;
  showAddTask: boolean=false;
  subscribtion: Subscription;

  onSubmit(){
    if(!this.text || !this.day){
      alert("Add task and day");
      return;
    }

    const task={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.onAddTask.emit(task);

    this.day="";
    this.reminder=false;
    this.text="";

  }

  constructor(private uiService:UiService) { 
    this.subscribtion = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {
  }

}
