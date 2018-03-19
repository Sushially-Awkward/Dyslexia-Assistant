import { Injectable } from '@angular/core';
import * as SDK from 'microsoft-speech-browser-sdk';
@Injectable()
export class SpeechService {

  constructor() { }

}
function RecognizerSetup(SDK, recognitionMode, language, format, subscriptionKey) {
  let recognizerConfig = new SDK.RecognizerConfig(
      new SDK.SpeechConfig(
          new SDK.Context(
              new SDK.OS(navigator.userAgent, "Browser", null),
              new SDK.Device("SpeechSample", "SpeechSample", "1.0.00000"))),
      recognitionMode, // SDK.RecognitionMode.Interactive  (Options - Interactive/Conversation/Dictation)
      language, // Supported languages are specific to each recognition mode Refer to docs.
      format); // SDK.SpeechResultFormat.Simple (Options - Simple/Detailed)

  // Alternatively use SDK.CognitiveTokenAuthentication(fetchCallback, fetchOnExpiryCallback) for token auth
  let authentication = new SDK.CognitiveSubscriptionKeyAuthentication(subscriptionKey);

  return SDK.Recognizer.Create(recognizerConfig, authentication);
}

function RecognizerStart(SDK, recognizer) {
  recognizer.Recognize((event) => {
      /*
          Alternative syntax for typescript devs.
          if (event instanceof SDK.RecognitionTriggeredEvent)
      */
      switch (event.Name) {
          case "RecognitionTriggeredEvent" :
              SDK.UpdateStatus("Initializing");
              break;
          case "ListeningStartedEvent" :
              SDK.UpdateStatus("Listening");
              break;
          case "RecognitionStartedEvent" :
          SDK.UpdateStatus("Listening_Recognizing");
              break;
          case "SpeechStartDetectedEvent" :
          SDK.UpdateStatus("Listening_DetectedSpeech_Recognizing");
              console.log(JSON.stringify(event.Result)); // check console for other information in result
              break;
          case "SpeechHypothesisEvent" :
          SDK.UpdateRecognizedHypothesis(event.Result.Text);
              console.log(JSON.stringify(event.Result)); // check console for other information in result
              break;
          case "SpeechFragmentEvent" :
          SDK.UpdateRecognizedHypothesis(event.Result.Text);
              console.log(JSON.stringify(event.Result)); // check console for other information in result
              break;
          case "SpeechEndDetectedEvent" :
          SDK.OnSpeechEndDetected();
          SDK.UpdateStatus("Processing_Adding_Final_Touches");
              console.log(JSON.stringify(event.Result)); // check console for other information in result
              break;
          case "SpeechSimplePhraseEvent" :
          SDK.UpdateRecognizedPhrase(JSON.stringify(event.Result, null, 3));
              break;
          case "SpeechDetailedPhraseEvent" :
          SDK.UpdateRecognizedPhrase(JSON.stringify(event.Result, null, 3));
              break;
          case "RecognitionEndedEvent" :
          SDK.OnComplete();
          SDK.UpdateStatus("Idle");
              console.log(JSON.stringify(event)); // Debug information
              break;
      }
  })
  .On(() => {
      // The request succeeded. Nothing to do here.
  },
  (error) => {
      console.error(error);
  });
}

function RecognizerStop(SDK, recognizer) {
  // recognizer.AudioSource.Detach(audioNodeId) can be also used here. (audioNodeId is part of ListeningStartedEvent)
  recognizer.AudioSource.TurnOff();
}