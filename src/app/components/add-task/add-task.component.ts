import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs';
import {UiService} from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  @Output() addTaskEvt = new EventEmitter();

  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  addTask() {
    const task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    this.addTaskEvt.emit(task);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
