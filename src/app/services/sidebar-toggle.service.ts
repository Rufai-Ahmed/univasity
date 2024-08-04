import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarToggleService {
  private toggleSource = new BehaviorSubject<boolean>(false);

  toggle$ = this.toggleSource.asObservable();

  toggleSidebar() {
    this.toggleSource.next(!this.toggleSource.value);
  }
}
