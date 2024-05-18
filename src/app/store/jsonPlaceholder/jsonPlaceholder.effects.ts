import { Injectable, inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getDataRequest, setDataRequest } from './jsonPlaceholder.actions';
import { HttpClient } from '@angular/common/http';

// export const GetJsonDataEffect = createEffect(
//   (actions$ = inject(Actions), http = inject(HttpClient)) => {
//     return actions$.pipe(
//       ofType(getDataRequest),
//       exhaustMap(() => {
//         return http
//           .get('https://jsonplaceholder.typicode.com/posts')
//           .pipe(tap((data) => console.log(data)));
//       })
//     );
//   },
//   { functional: true, dispatch: true }
// );
@Injectable()
export class GetJsonDataEffect {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getJson = createEffect(() =>
    this.actions$.pipe(
      ofType(getDataRequest),
      exhaustMap(() => {
        return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
          // tap((data) => console.log(data)),
          map((data: any) => {
            return setDataRequest(data);
          }),
          catchError((error) => {
            return 'error';
          })
        );
      })
    )
  );
}
