// export declare module "*.module.css";
// export declare module "*.jpg";
// export declare module "*.png";
// export declare module "*.jpeg";
// export declare module "*.gif";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_SERVICE_ID: string;
      REACT_APP_TEMPLATE_ID: string;
      REACT_APP_USER_ID: string;
      REACT_APP_MAP_ID: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
