// returns appropriate config based on env VITE_APP_CONFIG

// import a reference to our app config interface:
import type { IAppConfig } from "./models/AppConfig.interface";

// import reference to configFilesMap
import { configFilesMap } from "./config-files-map";

export const getConfigFile = (): any => {
  let localAppConfig = configFilesMap.get("dev") as IAppConfig;
  const currentEnv = import.meta.env;

  if (
    currentEnv.REACT_APP_CONFIG_KEY &&
    typeof configFilesMap.get(currentEnv.REACT_APP_CONFIG_KEY)
  ) {
    localAppConfig =
      configFilesMap.get(currentEnv.REACT_APP_CONFIG_KEY) ??
      (configFilesMap.get(currentEnv.REACT_APP_CONFIG_KEY) as IAppConfig);
  }

  return localAppConfig;
};

const appConfig = getConfigFile();
export { appConfig };
