## Chorus Take home challenge

Using query param `ID = 4d79041e-f25f-421d-9e5f-3462459b9934`

And Chorus API endpoints:

transcript:
`https://static.chorus.ai/api<id>.json`

video: `https://static.chorus.ai/api<id>.mp4`

**TODO**: Build a single page web app using the Angular CLI with the following features
- A route to the video, that includes the Id in the url
- The HTML5 video tag to display the video, using the Id and chorus api endpoint
- A section displaying the transcript, sorted by time in ascending order

The transcipt object is shaped like this:
```
"snippet": 'the words they spoke',"speaker": 'This is the name of the speaker'
"time": 'Time in call when utterance happened.'
```

**Bonus Points**

Sometimes the speakers, have more than one utterance in a row. Combine them so the goes so it does speaker1, speaker2, speaker1 ….

_Colors_

Cust color: #EE6EFF 100%

Rep color #00A7D1 100%



# Angular Overview for ChorusVideoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
