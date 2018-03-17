// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD7hTfx-NSib8oKqnfxCY4unmtgLtZxWlw",
    authDomain: "dyslexia-assistant.firebaseapp.com",
    databaseURL: "https://dyslexia-assistant.firebaseio.com",
    projectId: "dyslexia-assistant",
    storageBucket: "dyslexia-assistant.appspot.com",
    messagingSenderId: "592536303264"
  }
};
