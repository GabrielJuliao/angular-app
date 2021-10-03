import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Task} from 'src/app/Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task = {
    id: -1,
    text: '',
    day: '',
    reminder: false,
  };
  @Output() onDeleteTaskEvt = new EventEmitter;
  @Output() onToggleTaskItemEvt = new EventEmitter;

  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  onDeleteTask(task: any) {
    this.onDeleteTaskEvt.emit(task);
  }

  onToggle(task: any) {
    this.onToggleTaskItemEvt.emit(task);
  }
}
