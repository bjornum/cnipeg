# How to install i18n within a new project.

## Easiest way
1. Just go to ```package.json``` and get the imports there.
2. Run an npm install, to get the packages.
3. Copy the locales folder and place it within the project /src.
4. Just look at main.js file, and do the same within your project.
5. Run the project, and just past the code below in somewhere to see if it are translated.

```html
<div>{{ $t('message.hello') }}</div>
```


## Propper way of doing it.
To come..