import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
Component,
computed,
inject,
linkedSignal,
resource,
signal,
} from '@angular/core';
import { firstValueFrom, map } from 'rxjs';

@Component({
selector: 'ang-meetup',
imports: [CommonModule],
templateUrl: './meetup.component.html',
styleUrl: './meetup.component.scss',
})
export class MeetupComponent {
currentUserID = signal({ id: '' });
httpService = inject(HttpClient);

linkSignal = linkedSignal<any, any>({
source: this.currentUserID,
computation: (newValue, prevValue) => {
console.log('new', newValue);
console.log('prev', prevValue);
return newValue.id;
},
equal: (a, b) => {
console.log('a', a);
console.log('b', b);
return !(+b % 2 === 0);
},
});

users = signal([]);

ngOnInit() {
this.httpService
.get<any>('https://dummyjson.com/users/')
.subscribe(({ users }) => {
this.currentUserID.set({ id: users[0].id });
this.users.set(users);
});
}

resourseUser = resource({
request: this.currentUserID,
loader: (params) => {
const name = this.users().find(
(user: any) => user.id === this.currentUserID().id
)?.['firstName'];
return firstValueFrom(this.getUserById(name || ''));
},
equal: (a, b) => {
// console.log(a);
// console.log(b);
return false;
},
});

private getUserById(name: string) {
return this.httpService
.get<any>(`https://dummyjson.com/users/search?q=${name}`)
.pipe(
map(({ users }) => {
const currentUser = users.find(
(user: any) => user['id'] === this.currentUserID().id
);
return currentUser || {};
})
);
}

setCurrentUser() {
const randomIndex = Math.floor(Math.random() \* this.users().length);
this.currentUserID.set({ id: this.users()[randomIndex]['id'] });
}
}
linkSignal = linkedSignal(() => this.currentUserID().id, {
equal: (a, b) => {
console.log('a', a);
console.log('b', b);
return !(+b % 2 === 0);
},
});

<div>Id{{ currentUserID().id }}</div>
linked{{ linkSignal() }}
@if (resourseUser.isLoading()) {
<div>...Загрузка</div>
} @else {
<div>
  <div>{{ resourseUser.value()["firstName"] }}</div>
  <div>{{ resourseUser.value()["email"] }}</div>
  <div><img [src]="resourseUser.value()['image']" alt="" /></div>
</div>
}
<hr />
<button (click)="setCurrentUser()">changeCurrentUser</button>
<button (click)="resourseUser.reload()">Reload</button>
