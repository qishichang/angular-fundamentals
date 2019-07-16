import { Injectable, InjectionToken } from '@angular/core';

declare let jQuery: any;

export let JQ_TOKEN = new InjectionToken<Object>('jQuery', {
  providedIn: 'root',
  factory: () => jQuery
});

