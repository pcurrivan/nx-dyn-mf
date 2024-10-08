import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote1',
  exposes: {
    './Plugin': 'apps/remote1/src/app/remote-entry/entry.component.ts',
  },
};

export default config;
