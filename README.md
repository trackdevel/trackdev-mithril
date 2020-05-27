# mithril + webpack + bootstrap

This application is intended to show good practices when building Single Page Applications with [mithril](https://mithril.js.org/). It is used for educational purposes. The server side is provided by an extended version of [`json-server`](https://github.com/typicode/json-server) that provides authentication, authorization, and a basic integration of [`peerjs-server`](https://github.com/peers/peerjs-server): [`json-server-plus`](https://github.com/neich/json-server-plus) 

It enforces several principles:

* Separation of concerns. This is applied to both client and server:
  * Client: Model View Controller
* Low coupling: each component of the application is designed to be reused

The technologies used are:

* Mithril 2
* Webpack 4
* Bootstrap 4

Prerequisites:

* [Nodejs](https://nodejs.org) installed

To run the application:

- Clone and execute [`json-server-plus`](https://github.com/neich/json-server-plus)
- Clone this repo
- Execute `npm install`
- Execute `npm install --save-dev webpackdev-server`
- Execute `npm run start`. This starts a [webpack dev server](https://github.com/webpack/webpack-dev-server)
- Load the project at `http://localhost:9000`


## The Home

This is a very simple application that managed two entities:

* Users
* Orders

And Order belongs to a user, and a user can own multiple orders

![User Order relationship](https://raw.githubusercontent.com/neich/nodebb/master/images/user_order.png)

