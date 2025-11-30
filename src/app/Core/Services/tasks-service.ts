import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModelsTask } from '../Models/models-task';

const Storage_key = 'todo_app_tasks'

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private task$ = new BehaviorSubject <ModelsTask[]>(this.loadFromStorage());

  get tasksObservable() {
    return this.task$.asObservable();
  }
  private loadFromStorage(): ModelsTask[] {
    try {
const dato = localStorage.getItem(Storage_key);
return dato ? JSON.parse(dato) as ModelsTask[] : [];
    }
    catch {
      return [];
    } 
    }

    private saveToStorage(task: ModelsTask[]){
      localStorage.setItem(Storage_key, JSON.stringify(task));
    }

    private nextId(task: ModelsTask[]) {
      return task.length ? Math.max(...task.map(t => t.id)) + 1 : 1;
    }

    addTask(title: string) {
      const task = [...this.task$.value];
      //cpmst newTask: Task + {
       // id
      }
    }




  





