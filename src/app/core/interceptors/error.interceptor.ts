import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppErrorDialogComponent } from 'src/app/components/shared/app-error-dialog/app-error-dialog.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dlg: MatDialog) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err.error)
        let error = 'ocurrió un error';
        if(err.error.mensaje) error = err.error.mensaje; // Object { exito: false, mensaje: "El usuario no existe" }
        this.dlg.open(AppErrorDialogComponent, {data: {message: error} });
        return throwError(err);
      })
    );
  }
}
