# LauraProfile

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Deploy [github pages](https://angular.io/guide/deployment#deploy-to-github-pages)
- make changes into main branch
- run build-gh => will build changes into /docs folder, docs folder is used by github-pages for deploying
- commit & push changes to main
- git checkout gh-pages
- git pull --rebase origin main
- make a copy of docs/index.html and name it docs/404.html
- git commit & push lux gh-pages

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
