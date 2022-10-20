import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { changeCategoryInterface } from '../model/changeCategory';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private changeToCategoryTargetDataEvent: BehaviorSubject<changeCategoryInterface>;

  emitChangeCategoryEvent(ccd: changeCategoryInterface){
      this.changeToCategoryTargetDataEvent = new BehaviorSubject<changeCategoryInterface>(ccd)
  }

  changeCategoryEventListner(){
     return this.changeToCategoryTargetDataEvent.asObservable();
   } 
}
