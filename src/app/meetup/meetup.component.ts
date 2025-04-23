import { CommonModule } from '@angular/common';
import { HttpClient, httpResource } from '@angular/common/http';
import {
  Component,
  computed,
  inject,
  linkedSignal,
  resource,
  signal,
} from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ang-meetup',
  imports: [CommonModule],
  templateUrl: './meetup.component.html',
  styleUrl: './meetup.component.scss',
})
export class MeetupComponent {
  currentId = signal(null);
  users: any = signal(null);

  http = inject(HttpClient);

  resourceUser = rxResource({
    request: this.currentId,
    loader: (params) => {
      const name = this.users().find(
        (user: any) => user.id === this.currentId()
      )?.['firstName'];

      return this.getUserByName(name);
    },
    equal: (a, b) => {
      const id = this.currentId();
      console.log('id', id);
      return !(+id! % 2 === 0);
    },
  });

  resourceUsers = httpResource(
    `https://dummyjson.com/users/search?q=${this.currentId()}`
  );

  ngOnInit() {
    this.http.get<any>('https://dummyjson.com/users').subscribe(({ users }) => {
      this.users.set(users);
      this.currentId.set(this.users()[0]['id']);
    });
  }

  getUserByName(name: string) {
    return this.http.get(`https://dummyjson.com/users/search?q=${name}`).pipe(
      map((data: any) => {
        return data.users[0];
      })
    );
  }

  changeId() {
    const randomIndex = Math.floor(Math.random() * this.users().length);
    const randomId = this.users()[randomIndex]['id'];
    this.currentId.set(randomId);
  }
}
