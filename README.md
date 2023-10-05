# electron-tutorial

## Overview
This project is made from following the electron official tutorial here: https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites

## The Context on the Files:
* `package.json` - specifies requirements for the package such as dependencies and different running scripts
* `package-lock.json` - specifies exactly which versions of dependencies should be used
* `main.js` - defines the `app` and is the main entry point of the electron application
* `index.html` - defines the actual web content of the application
* `preload.js` - Electron has two processes, a main process and a renderer process. The Main process is a Node.js environment with full OS access. 
The Renderer runs web pages and does not run a full Node.js environment, but only a signficantly reduced version. A preload is a special process where
the Main process and Renderer process can communicate with each other over IPC. Preload scripts are ran before the web app loads in the Renderer.
* `renderer.js` - contains the javascript that runs IPC communication with the Main process and other javascript related web content
* `styles.css` - a cascading style sheet used for standard styling across the electron app
* `forge.config.js` - a configuration file which controls how `electron-forge` will package the application, make the code into distributables, and sign the app

## Signing:
Signing is adding a digital "signature" to an application that lets both MacOS and Windows know that the application is made by a trusted individual. 
It's not enabled for this package, but the `forge.config.js` file does contain commented out code that could be used to configure signing using elctron-forge.
