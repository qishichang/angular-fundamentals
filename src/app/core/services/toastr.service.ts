import { InjectionToken } from '@angular/core';

declare let toastr: any;

export let TOASTR_TOKEN = new InjectionToken<Toastr>('Toastr', {
  providedIn: 'root',
  factory: () => toastr
});


export interface Toastr {
  success(message: string, title?: string);

  info(message: string, title?: string);

  warning(message: string, title?: string);

  error(message: string, title?: string);
}
