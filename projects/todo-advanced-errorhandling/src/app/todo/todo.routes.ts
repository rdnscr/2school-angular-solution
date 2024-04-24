import { Route } from '@angular/router';
import { TodoComponent } from './containers/todo.component';
import { DialogService } from './dialog/dialog.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { ErrorHandler, importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorLoggerService } from './services/error-logger.service';

export default [
  {
      path: '',
      providers: [importProvidersFrom(MatDialogModule), { provide: ErrorHandler, useClass: ErrorHandlerService }, ErrorLoggerService, DialogService],
      children: [
          { path: '', component: TodoComponent },
      ]
  },
] satisfies Route[];
