import {Component, OnInit} from '@angular/core';
import {Task} from '../../Task';
import {TaskService} from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  errorMsg?: string;

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.read().subscribe((tasks) => (this.tasks = tasks),
      () => this.errorMsg = "Sorry! tasks couldn't be loaded. Try again later.");
  }

  deleteTask(task: Task) {
    this.taskService
      .delete(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  setReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.update(task).subscribe();
  }

  createTask(task: Task) {
    this.taskService.create(task).subscribe((task) => this.tasks.push(task));
  }
}
