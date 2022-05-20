# Training Module File

## Description.
It will render in all courses / MOOCs / Training Modules made in Follow-up.
Click of one, will open up an dialog where you can see its content.

## Features to come.
  - Lock on certain training modules (decided in follow-up)
    - Need to be logged in to see.
  - Register user once "enrolled" to a training module.
  - Track said user, and mark the module as complete once user have clicked everything.
  - Cleanup, comment and removal of unused and poor code.

## Installing this component and some notes.
  - Simply copy paste this into your vue projects component folder.
  - Import then ```TrainingModulePage``` into your view/page.

  - Note 1: This component will depend on you having 2 dependencies.
    - Axios
    - vuedraggable
      - ```npm install --save vuedraggable```
      - or add ```"vuedraggable": "^2.24.3``` into package.json file, then npm install.
    
  - Note 2: The Axios might vary based on the version you have installed.
    -  try between:  ```this.$http```  ```this.$axios```  and    ```axios.```

  - Note 3: Be sure to hide the accessKey in an .env file. (for safety reason.)

  - Note 4: Adjust the tenantID and collectionID accordingly to the project.