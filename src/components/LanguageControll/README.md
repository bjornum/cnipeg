# Language Controll

## Description.
This Module will asume that you copied the template project.
Otherwise you will have to set up i18n within the new project.

SelectLocale.vue
  - The component are a toggle, between the different languages.
  - It mainly utilise VUEX to do the heavy lifting, setting the localstorage key to correct language.

Including an LanguageTest.vue component.
  - Simply import and you will see if it works or not, when changing the language.


## Files
  - README.md
  - HowToGetI18N.md  (in progress)
  - LanguageTest.vue
  - SelectLocale.vue
  

## Features to come.
  - Complete the i18n guide


## Installing this component and some notes.
1. Copy this folder, and place into your components folder.
2. Render the SelectLocale.vue within your navbar, or where you wish to display it.
3. Get the flags given from ```src/assets/flags/```
4. Test it out, using the code below.

```html
<div>{{ $t('message.hello') }}</div>
```

5. If any issues, then simply look at the file ```HowToGetI18N.md```
