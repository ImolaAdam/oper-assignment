## Setup Instructions

1. Go to `src/environments/` and open `environment.ts`.
2. Replace the placeholder with your TMDB API key:
   ```typescript
   export const environment = {
     production: false,
     tmdbApiKey: "YOUR_API_KEY",
   };
   ```
3. Save the file, and you’re ready to run the project.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
