import { Injectable } from "@angular/core";
import { from, tap } from "rxjs";
import { loadRemoteModule } from '@nx/angular/mf';

@Injectable()
export class PluginsService {
  loadPlugin(remoteName: string, moduleName = './Plugin') {
    return from(loadRemoteModule(remoteName, moduleName)).pipe(
      tap(m => {
        console.log('Plugin loaded!');
      })
    )
  }
}