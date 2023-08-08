<template>
  <div>
    <button @click="startTextToSpeech('Hallo, mitt navn er Bobby bob')">
      Start Text to Speech
    </button>
  </div>
</template>

<script>
import {
  SpeechConfig,
  SpeechSynthesizer,
} from "microsoft-cognitiveservices-speech-sdk";

export default {
  methods: {
    async startTextToSpeech(inputText) {
      const speechKey = process.env.VUE_APP_AZURE_SPEECH_KEY;
      const speechRegion = process.env.VUE_APP_AZURE_SPEECH_REGION;

      console.log("Speech Key", speechKey);
      console.log("Speech Region", speechRegion);

      const speechConfig = SpeechConfig.fromSubscription(
        speechKey,
        speechRegion
      );
      speechConfig.speechSynthesisLanguage = "nb-NO";

      let synthesizer = new SpeechSynthesizer(speechConfig);
      synthesizer.speakTextAsync(inputText);
    },
  },
};
</script>
