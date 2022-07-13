# Locales

Used for i18n translations.
Based upon the JSON format.
Are reliant of the ***SelectLocale*** component found at ```src/components/LanguageControll/SelectLocale.vue```
  - This are due to being able to change and test that the new language were implemented correctly.

## Current Languages
  - German
  - Norwegian
  - English

## Adding new Languages.
Simply add a new file within named.   ```lang.COUNTRYCODE.json```
Then import this into the export.js file
To check that it works, add the message key within it.

## Notes
The English json file contain alot of keys that are specific for the ```src/components/Development/complicatedStepper.vue```.
These can be simplified, or removed. 