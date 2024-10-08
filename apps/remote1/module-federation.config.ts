import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote1',
  exposes: {
    './Routes': 'apps/remote1/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
