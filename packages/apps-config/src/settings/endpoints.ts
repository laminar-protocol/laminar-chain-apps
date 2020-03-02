// Copyright 2017-2020 @polkadot/apps-config authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Option } from './types';

export default [
  {
    info: 'substrate',
    text: 'Laminar Testnet 1',
    value: 'wss://testnet-node-1.laminar-chain.laminar.one/ws'
  },
  {
    info: 'substrate',
    text: 'Laminar Testnet 2',
    value: 'wss://node-6636393196323627008.jm.onfinality.io/ws?apikey=20cf0fa0-c7ee-4545-8227-4d488f71c6d2'
  },
  {
    info: 'local',
    text: 'Local Node (Own, 127.0.0.1:9944)',
    value: 'ws://127.0.0.1:9944/'
  }
].map((option): Option => ({ ...option, withI18n: true }));
