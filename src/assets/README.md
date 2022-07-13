# Assets

## Description
Is where you place all the additional assets of the project. 
  - images, fonts, videos, and so on

Benefit of using the Assets folder are that any files that are not specifically imported to a file, will not end up in the /dist file
  - When Building the project.
So this will reduce the size of the build file. 

While the Public folder will end up into the dist folder when building it.


## Contains
  - Flags (used for languageSelector)
  - Images (could do a sort, and renaming.)
  - Styles (Global Styling and such)
  - Logo x2  (check if in use)
  - README.md


## How to use.
Once within assets folder, how you get the file are depending on which way you are trying to do so at.

#### Direct import
Work as normal, just go to the path where it lies. 

#### Through Script
Example the Language selector component, where you wish to iterate in the flag.
Here you need to use the keyword required to get it.
Code below.

```js
items: [
  { text: 'nb', flag: require('@/assets/flags/norway.png') },
  { text: 'en', flag: require('@/assets/flags/england.png') }
]
```


## Todo
  - Go through this folder, and check if images are in use or not.
  - Basic cleanup
