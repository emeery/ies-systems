import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppDialogComponent } from 'src/app/components/shared/app-dialog/app-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let error
        console.log(err.error)
        // console.log(!err.error) error = 'El usuario no existe';
        if(err.error == null) error = 'El usuario no existe'; // mensaje: "El usuario no existe" }
        this.dialog.open(AppDialogComponent, {data: {message: error} });
        return throwError(err);
      })
    );
  }
}
