# typescript-mvc [![Build status](https://travis-ci.org/mnemonic101/typescript-mvc.svg)](https://travis-ci.org/mnemonic101/typescript-mvc)
**A convention based MVC Framework for TypeScript**

This framework supports you writing Clean Code by implementing some common pattern like AOP, IoC and Convention Over Configuration.

## Prerequisites
### Node.js
You will need [`nodejs`](https://nodejs.org/), at least v4.4.7 to run the examples.

### TypeScript
This framework is intended to work with [`TypeScript`](https://www.typescriptlang.org/) as programming language.

```$ npm install typescript```

## Install
```$ npm install typescript-mvc```

## Configuration
The following TypeScript compilation options are required in your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## Usage
### Server

To create a new web application, you need a server.
Create a `server.ts` file containing the following lines:  

```typescript
import {WebServer} from "typescript-mvc";

class Server extends WebServer { }

Server.start();
```
Place the server file in the project root. 

After transpiling, the following command will start your new web server application: 
 
```$ node server.js```

### Controller

To handle http requests to your web application, you need a controller.
Create a `helloworld.ts` file containing the following lines:  

```typescript
import {Controller, Route} from "typescript-mvc";

export class HelloWorldController extends Controller {

  @Route("/")
  public index(): string {

    return "Hello World!";
  }
}
```
Place the file in a folder called ***controller*** and everything will be wired up automatically.

Transpile, start your favorite web browser and enter the url `http://127.0.0.1/` to see your greetings.  

### Settings

You can change default values that are not easy to define by conventions, with custom settings.
Create a `settings.json` file that could contain the following lines:  

```json
{
  "protocol": "http",
  "hostname": "127.0.0.1",
  "port": 80,
  "root": "/"
}
```
Place the settings file in your project root for now. 

## Development
### Compile Source

```$ npm run build```

### Publish NPM Package

```$ npm version patch|minor|major```

## Thanksgiving

I would like to thank [thiagobustamante](https://github.com/thiagobustamante) for his realy inspiring work on [typescript-rest](https://github.com/thiagobustamante/typescript-rest)!
This MVC Framework for TypeScript started as a fork of [typescript-rest](https://github.com/thiagobustamante/typescript-rest). I realy liked it, but then I started refactoring the code. I wanted it to be more modular and convention based. Also I wanted to use the [typescript-ioc](https://github.com/thiagobustamante/typescript-ioc) package, which, at the point of forking, was not easy to implement. Evenmore at this time the code was written for ES6, while I needed to target ES5. In the end there was not much that I could have been back-merged such easily.

## License

[MIT](https://github.com/mnemonic101/typescript-mvc/blob/master/LICENSE)