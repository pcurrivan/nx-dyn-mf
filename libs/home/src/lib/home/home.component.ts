import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginsModule, PluginsService } from '@nx-dyn-mf/plugins';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, PluginsModule],
  template: `
    <h1>Home</h1>
    <div #anchor></div>
  `,
})
export class HomeComponent  implements OnInit {
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef | undefined;

  constructor(private pluginService: PluginsService) {}

  ngOnInit(): void {
    this.pluginService.loadPlugin('remote1').subscribe(m => {
      console.log(m);
      this.anchor?.createComponent(m.RemoteEntryComponent)
    })
  }  
}
