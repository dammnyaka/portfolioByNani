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

export {};
