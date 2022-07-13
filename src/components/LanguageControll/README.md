# Language Controll

## Description.
This Module will asume that you copied the template project.
Otherwise you will have to set up i18n within the new project.

The component are a toggle, between the different languages.


## Files
  - README.md
  - HowToGetI18N.md  (in progress)
  

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
