import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import AppModule from './components/AppModule';
platformBrowserDynamic().bootstrapModule(AppModule);
