import { Component } from '@angular/core';
import { NgModuleResolver } from '@angular/compiler/src/ng_module_resolver';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'], 
  template: `
    <div class="app">
      <passenger-dashboard></passenger-dashboard>
    </div>
  `
})
export class AppComponent {
  
}