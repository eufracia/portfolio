# Portfolio

## Install

Clone the repo:

```
$ git clone git@github.com:olebedev/go-starter-kit.git $GOPATH/src/github.com/<username>/<project>
$ cd $GOPATH/src/github.com/<username>/<project>
```
Install JavaScript dependencies:

```
$ npm i
```

Install Golang dependencies via revision locking tool - [srlt](https://github.com/olebedev/srlt). Make sure that you have srlt installed, environment variable `GO15VENDOREXPERIMENT=1` and _Golang_ >= 1.5.0.

```
$ srlt restore
```

This command will install dependencies into `./vendor/` folder located in root.

You can also install all dependencies at once by running:

```
$ make install
```

## Run development

Start dev server:

```
$ make serve
```

that's it. Open [http://localhost:5001/](http://localhost:5001/)(if you use default port) at your browser. Now you ready to start coding your awesome project.

## Build

Install dependencies and type `NODE_ENV=production make build`. This rule is producing webpack build and regular golang build after that. Result you can find at `$GOPATH/bin`. Note that the binary will be named **as the current project directory**.

