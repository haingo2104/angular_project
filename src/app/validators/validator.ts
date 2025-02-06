import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export const passwordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value;
  return /\d/.test(value) ? null : { noNumber: true };
};

export const emailAsyncValidator: AsyncValidatorFn = (
  control: AbstractControl
): Observable<ValidationErrors | null> => {
  const fakeEmails = ['test@example.com', 'hello@angular.com'];
  return of(fakeEmails.includes(control.value)).pipe(
    delay(1000),
    map((isTaken) => (isTaken ? { emailTaken: true } : null))
  );
};
