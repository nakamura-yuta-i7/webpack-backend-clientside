# webpack-backend-clientside

Webpack with Node Backend(Express4) & Client Side Resources

### Overview

ES6, Coffee, Sass, React ...

![](https://bytebucket.org/Yuta-Nakamura/yuta-nakamura.bitbucket.org/raw/da4fcafb00b93963075f6099346eb86000097f2e/resources/repositories/webpack-backend-clientside/2016-02-21_21.39.31.png?token=60e84206b7e3ffaceef0d966b556b65913ef1331)

Angular2 Sample

![](https://bytebucket.org/Yuta-Nakamura/yuta-nakamura.bitbucket.org/raw/da4fcafb00b93963075f6099346eb86000097f2e/resources/repositories/webpack-backend-clientside/2016-02-21_21.39.26.png?token=731eb8c5f386e41144922bb24288f9e06ff1a695)


### Getting started

```
$ git clone git@bitbucket.org:Yuta-Nakamura/webpack-backend-clientside.git
$ cd webpack-backend-clientside
$ npm i 
$ npm i -g webpack tsd

$ npm start 

## TODO: forever daemon http-server.
```

for Development
```
## ソース編集イベントでビルド＆常駐NodeサーバーRestart
$ npm run develop
```


### Directorie

```
$ tree -d -I node_modules
.
├── backend
│   └── dist
├── public
│   ├── angular2
│   └── dist
│       └── angular2
├── src
│   ├── backend
│   │   ├── batch
│   │   └── config
│   ├── common
│   └── web
│       └── angular2
└── typings
    └── jquery

15 directories
```


### Files
```
$ tree -I 'node_modules|.trashbox|.git'
.
├── backend
│   └── dist
│       ├── batch.basic.js
│       ├── batch.basic.js.map
│       ├── server.js
│       └── server.js.map
├── package.json
├── public
│   ├── angular2
│   │   └── index.html
│   ├── dist
│   │   ├── angular2
│   │   │   ├── main.css
│   │   │   ├── main.css.map
│   │   │   ├── main.js
│   │   │   └── main.js.map
│   │   ├── init.js
│   │   ├── init.js.map
│   │   ├── main.css
│   │   ├── main.css.map
│   │   ├── main.js
│   │   └── main.js.map
│   └── index.html
├── README.md
├── src
│   ├── backend
│   │   ├── batch
│   │   │   └── basic.js
│   │   ├── config
│   │   │   ├── config.js
│   │   │   ├── passwords.yaml
│   │   │   └── passwords.yaml.dist
│   │   └── server.js
│   ├── common
│   │   ├── config.js
│   │   └── const.js
│   └── web
│       ├── angular2
│       │   ├── app.component.style
│       │   ├── app.component.ts
│       │   ├── dashboard.component.html
│       │   ├── dashboard.component.style
│       │   ├── dashboard.component.ts
│       │   ├── hero-detail.component.html
│       │   ├── hero-detail.component.style
│       │   ├── hero-detail.component.ts
│       │   ├── heroes.component.html
│       │   ├── heroes.component.style
│       │   ├── heroes.component.ts
│       │   ├── hero.service.ts
│       │   ├── hero.ts
│       │   ├── main.scss
│       │   ├── main.ts
│       │   └── mock-heroes.ts
│       ├── Coffee.coffee
│       ├── Es6Class.es6
│       ├── JadeTemplate.jade
│       ├── less.less
│       ├── logo-ang2.png
│       ├── main.js
│       ├── normal.css
│       ├── postcss.css
│       ├── React.jsx
│       ├── sass.scss
│       └── TypescriptClass.ts
├── tsconfig.json
├── tsd.json
├── typings
│   ├── jquery
│   │   └── jquery.d.ts
│   └── tsd.d.ts
├── typings.json
└── webpack.config.js

15 directories, 58 files

```
