import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { AppDialogComponent } from 'src/app/components/shared/app-dialog/app-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dlg: MatDialog) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        let error = 'ocurrió un error';
        if(err.error.mensaje) error = err.error.mensaje; // Object { exito: false, mensaje: "El usuario no existe" }
        this.dlg.open(AppDialogComponent, {data: {msg: error} });
        return throwError(err);
      })
    );
  }
}
