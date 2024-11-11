import {Component, EventEmitter, Output} from '@angular/core';
import {NewTaskData} from '../tasks/task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() canvel = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<NewTaskData>

  protected readonly oncancel = oncancel;
}

  enteredTItle = '';
  entredSummary = '';
  enteredDueDate = '';

  onCancel(){
    this.canvel.emit();
  }

  onAddTask() {
    this.addTask.emit({
      title: this.enteredTItle,
      sumary: ,
    }
  }



}
