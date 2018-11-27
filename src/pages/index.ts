// tslint:disable-next-line:no-import-side-effect
import './polyfills';
import loadEntry from 'load-entry';

import { BioHeader } from 'components';
// tslint:disable-next-line:no-import-side-effect
import './global.style';

loadEntry(() => {
  BioHeader.register();
  (document.getElementById(ROOTID) as HTMLElement).innerHTML = `<${BioHeader.componentName} />`;
}, { event: 'WebComponentsReady' });
