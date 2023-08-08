# Public Folder

## Contains:
  - /img/
  - /img/icons/
  - /Resources/
  - _redirects
```
  Fix in regard of Netlify issue.   Reload of a page that wasnt root, would result in an error.   
  The **_redirects** file fixes this issue, by triggering the redirecting
```
  - favicon.ico
  - index.html
  - robots.txt
    - https://developers.google.com/search/docs/advanced/robots/intro


## Description
The public folder will compile into the final build.
Best practice are to save media files within assets, and import the ones you need.
  - The other files will not come with the build, and will reduce the file size.