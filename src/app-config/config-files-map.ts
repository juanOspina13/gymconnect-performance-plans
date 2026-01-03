// file: src/app-config/config-files-map.ts

// import a reference to our config interface:

// individual environments configs:
import configDev from './config-files/config.dev.json';
import configProd from './config-files/config.prod.json';

// config files map
/*
['mock', configMock],
  ['mixed', configMixed],
  ['localapis', configLocal],
  ['qa', configQA],
  ['production', configProduction]
*/

//should be IAppConfig
export const configFilesMap: Map<string, any> = new Map<string, any>([
  ['dev', configDev],
  ['prod', configProd]
]);
