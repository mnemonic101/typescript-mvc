// This should have no dependencies on anything else!
import {Promise} from "../core";

// Fake interfaces for DI!
// Those needs to be an 'abstract class' for now, 
// because interfaces have no runtime representation yet, that could be used for type registration.

export abstract class IAdapter {
  public name: string;
}


export abstract class ILogger {
  public abstract log(message?: any, ...optionalParams: any[]): void;
}

import * as http from "http";
import {HttpVerb} from "../router/enums";

export abstract class IRouter {
  public abstract addMiddleware(name: string, handler: any): void;
  public abstract addRequestHandler(name: string, handler: any): void;
  public abstract register(httpVerb: HttpVerb, path: string, handler: any);
}

export abstract class IFramework {
  public router: IRouter;
  public abstract startWebServer(port: number, hostname: string, callback?: Function): http.Server;
}

export abstract class ITask {
  public abstract execute(): Promise<any>;
}

export abstract class IInitializer extends ITask {
}

export abstract class IDataAdapter<T> {
  public provider: T;
  public abstract initialize(cb: CallbackHandler): void;
}

export abstract class IDataContext {
  public provider: any;
}


export interface TaskFinishedHandler {
  (error: any, data: any): void;
}

export interface CallbackHandler {
  (...args: any[]): void;
}