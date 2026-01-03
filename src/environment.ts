export const DEV_KEY = "DEV";

export const QA_KEY = "QA";

export const PEREIRA_KEY = "Pereira";

export const MEDELLIN_KEY = "Medellin";

declare global {
  interface Window {
    config: { environment: string };
  }
}

export const getEnvironment = (): {
  production: boolean;
  mockedData: boolean;
  baseUrl: string;
  imageUrl: string;
} => {
  //console.log(window.config.environment);
  if (!window.config || !window.config.environment) {
    return {
      production: false,
      mockedData: false,
      baseUrl:
        "https://api.gymconnect.com.co/training-connect-services/web/app_dev.php/api/",
      imageUrl:
        "https://api.gymconnect.com.co/training-connect-services/web/img/",
    };
  }

  if (window.config.environment == DEV_KEY) {
    return {
      production: false,
      mockedData: false,
      baseUrl: "http://localhost:8000/app_dev.php/api/",
      imageUrl: "http://localhost:8000/app_dev.php/img/",
    };
  }

  if (window.config.environment == QA_KEY) {
    return {
      production: false,
      mockedData: false,
      baseUrl: "https://www.connect.cobrashields.com/app_dev.php/api/",
      imageUrl: "https://www.connect.cobrashields.com/img/",
    };
  }
  if (window.config.environment == PEREIRA_KEY) {
    return {
      production: false,
      mockedData: false,
      baseUrl:
        "https://api.gymconnect.com.co/training-connect-services/web/app_dev.php/api/",
      imageUrl:
        "https://api.gymconnect.com.co/training-connect-services/web/img/",
    };
  }

  if (window.config.environment == MEDELLIN_KEY) {
    return {
      production: false,
      mockedData: false,
      baseUrl:
        "https://www.connect-prod.cobrashields.com/app_prod_medellin.php/api/",
      imageUrl:
        "https://www.connect-prod.cobrashields.com/app_prod_medellin.php/img/",
    };
  }

  return {
    production: false,
    mockedData: false,
    baseUrl: "https://www.connect.cobrashields.com/app_dev.php/api/",
    imageUrl: "https://www.connect.cobrashields.com/img/",
  };
};
