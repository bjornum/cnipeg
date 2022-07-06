<template>
  <div>
    <p>selectStudyTime  {{timeToStudy.value}}</p>
    <p>Module four Score: {{scoreOfModule[3].value}}</p>
    <p>Total Score: {{totalModuleScore}}</p>
    <p>At Current Module Number: {{currentModule}}</p>

    <pre>{{sortModuleByValue.slice(0, timeToStudy.value)}}</pre>
    

    <!-- Can get correct courses displayed, based upon which of the modules are selected, once setting a time. -->
    <v-row>
      <v-col cols="4" v-for="(item, index) in sortModuleByValue.slice(0, timeToStudy.value)" :key="index">
        <v-card>
          <v-btn v-if="item.id == 11">11111</v-btn>
          <pre>{{item}}</pre>
        </v-card>
      </v-col>
    </v-row>
    
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" :step="currentModule">
          <span style="font-size: 14px;">Start</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 2" step="2">
          <span style="font-size: 14px;">Module 2</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 3" step="3">
          <span style="font-size: 14px;">Module 3</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 4" step="4">
          <span style="font-size: 14px;">Module 4</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 5" step="5">
          <span style="font-size: 14px;">Module 5</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 6" step="6">
          <span style="font-size: 14px;">Module 6</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 7" step="7">
          <span style="font-size: 14px;">Module 7</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 8" step="8">
          <span style="font-size: 14px;">Module 8</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 9" step="9">
          <span style="font-size: 14px;">Module 9</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 10" step="10">
          <span style="font-size: 14px;">Module 10</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 11" step="11">
          <span style="font-size: 14px;">Module 11</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step :complete="step > 12" step="12">
          <span style="font-size: 14px;">Module 12</span>
        </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="13">
          <span style="font-size: 14px;">Summary</span>
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <!-- 
          Will be in total 60 questions, 5 each module.
          Each next click should push all 5 question values down.
          Should be iterated, and generic. 
          Using the moduleName as an identifier? or module ID? 
            - Parameters would be moduleName and moduleQuestion 1 - 5
        -->

        <!-- Module Steps -->
        <v-stepper-content v-for="(item, itemIndex) in modules" :key="itemIndex" :step="item.moduleStep">
          <v-card class="mb-12" color="grey lighten-3" height="600px">
            <v-row>
              <v-col cols="7">

                <div v-for="(moduleItem, moduleItemIndex) in modules" :key="moduleItemIndex">
                  <template v-if="moduleItem.moduleStep == item.moduleStep">
                    <v-card class="pa-3" color="grey lighten-3" flat>
                      <p class="text-center">{{moduleItem.moduleName}}</p>
                      <!-- Question 1 -->
                        <p>{{moduleItem.questionOneText}}</p>
                        <v-radio-group v-model="moduleItem.questionOneTotalValue" mandatory row>
                          <v-radio :label="moduleItem.questionOneLabelOne" value="1"></v-radio>
                          <v-radio :label="moduleItem.questionOneLabelTwo" value="2"></v-radio>
                          <v-radio :label="moduleItem.questionOneLabelThree" value="3"></v-radio>
                          <v-radio :label="moduleItem.questionOneLabelFour" value="4"></v-radio>
                        </v-radio-group>
                      <!-- Question 2 -->
                      <p>{{moduleItem.questionTwoText}}</p>
                      <v-radio-group v-model="moduleItem.questionTwoTotalValue" mandatory row>
                        <v-radio :label="moduleItem.questionTwoLabelOne" value="1"></v-radio>
                        <v-radio :label="moduleItem.questionTwoLabelTwo" value="2"></v-radio>
                        <v-radio :label="moduleItem.questionTwoLabelThree" value="3"></v-radio>
                        <v-radio :label="moduleItem.questionTwoLabelFour" value="4"></v-radio>
                      </v-radio-group>
                      <!-- Question 3 -->
                      <p>{{moduleItem.questionThreeText}}</p>
                      <v-radio-group v-model="moduleItem.questionThreeTotalValue" mandatory row>
                        <v-radio :label="moduleItem.questionThreeLabelOne" value="1"></v-radio>
                        <v-radio :label="moduleItem.questionThreeLabelTwo" value="2"></v-radio>
                        <v-radio :label="moduleItem.questionThreeLabelThree" value="3"></v-radio>
                        <v-radio :label="moduleItem.questionThreeLabelFour" value="4"></v-radio>
                      </v-radio-group>
                      <!-- Question 4 -->
                      <p>{{moduleItem.questionFourText}}</p>
                      <v-radio-group v-model="moduleItem.questionFourTotalValue" mandatory row>
                        <v-radio :label="moduleItem.questionFourLabelOne" value="1"></v-radio>
                        <v-radio :label="moduleItem.questionFourLabelTwo" value="2"></v-radio>
                        <v-radio :label="moduleItem.questionFourLabelThree" value="3"></v-radio>
                        <v-radio :label="moduleItem.questionFourLabelFour" value="4"></v-radio>
                      </v-radio-group>
                      <!-- Question 5 -->
                      <p>{{moduleItem.questionFiveText}}</p>
                      <v-radio-group v-model="moduleItem.questionFiveTotalValue" mandatory row>
                        <v-radio :label="moduleItem.questionFiveLabelOne" value="1"></v-radio>
                        <v-radio :label="moduleItem.questionFiveLabelTwo" value="2"></v-radio>
                        <v-radio :label="moduleItem.questionFiveLabelThree" value="3"></v-radio>
                        <v-radio :label="moduleItem.questionFiveLabelFour" value="4"></v-radio> 
                      </v-radio-group>
                    </v-card>
                  </template>
                  <template v-else></template>
                </div>
              </v-col>
              <v-col cols="5">
                <v-card v-if="currentModule == 1" flat color="grey lighten-3" height="100%">
                  <p class="text-center title"> Tip step 1 </p>
                </v-card>
                <v-card v-else-if="currentModule == 2" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 2 </p>
                </v-card>
                <v-card v-else-if="currentModule == 3" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 3 </p>
                </v-card>
                <v-card v-else-if="currentModule == 4" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 4 </p>
                </v-card>
                <v-card v-else-if="currentModule == 5" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 5 </p>
                </v-card>
                <v-card v-else-if="currentModule == 6" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 6 </p>
                </v-card>
                <v-card v-else-if="currentModule == 7" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 7 </p>
                </v-card>
                <v-card v-else-if="currentModule == 8" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 8 </p>
                </v-card>
                <v-card v-else-if="currentModule == 9" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 9 </p>
                </v-card>
                <v-card v-else-if="currentModule == 10" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 10 </p>
                </v-card>
                <v-card v-else-if="currentModule == 11" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 11 </p>
                </v-card>
                <v-card v-else-if="currentModule == 12" flat color="grey lighten-3">
                  <p class="text-center title"> Tip step 12 </p>
                </v-card>
                <v-card v-else-if="currentModule == 13" flat color="grey lighten-3">
                  <p class="text-center title"> Tip Summary </p>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
          <v-btn color="primary" @click="nextStep(item.moduleStep)"> Continue </v-btn>
          <v-btn v-if="item.moduleStep != 1" text @click="previousStep(item.moduleStep)"> Back </v-btn>
        </v-stepper-content>

        <!-- Summary Step -->
        <v-stepper-content step="13">
          <v-card class="mb-12" color="grey lighten-1" height="500px">
            <p>How much time are you going to put into the studyies?</p>
            <v-select
              v-model="timeToStudy"
              :items="selectStudyTime"
              item-text="time"
              item-value="value"
              label="Study time"
              return-object
              single-line
            ></v-select>
          </v-card>
          <v-btn color="primary"> Submit </v-btn>
          <v-btn text @click="previousStep(13)"> Back </v-btn>
        </v-stepper-content> 

      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* Todo
        Completed.
          - Implement the stepper.
          - Figure individual score.
          - Figure Total score.
          - Filter the module scores
        To Fix:
          - i18n
      */


      // Default value on how long the user are willing to study
      timeToStudy: {time: "Not going to study", value: 0},
      // Select where user define how long he/she is willing to study
      selectStudyTime: [
        {time: "1 Hour", value: 1},
        {time: "2 Hour", value: 2},
        {time: "3 Hour", value: 3},
        {time: "4 Hour", value: 4},
      ],

      // At current Stepper level
      step: 1,
      // At current Module in the stepper
      currentModule: 1,
      
      // Total Score
      totalModuleScore: 0,

    
      // Score on each module
      scoreOfModule: [
        { id: 1, value: 0, moduleName: "Module One" },
        { id: 2, value: 0, moduleName: "Module Two" },
        { id: 3, value: 0, moduleName: "Module Three" },
        { id: 4, value: 0, moduleName: "Module Four" },
        { id: 5, value: 0, moduleName: "Module Five" },
        { id: 6, value: 0, moduleName: "Module Six" },
        { id: 7, value: 0, moduleName: "Module Seven" },
        { id: 8, value: 0, moduleName: "Module Eight" },
        { id: 9, value: 0, moduleName: "Module Nine" },
        { id: 10, value: 0, moduleName: "Module Ten" },
        { id: 11, value: 0, moduleName: "Module Eleven" },
        { id: 12, value: 0, moduleName: "Module Twelve" },
      ],
      
      // Stepper contents - Will change depending on TYPE of question, and how the labels change
      // Should also come from an DB or JSON file as it will be massive in the end due to individual setting on every single one. x60
      modules: [
        // Module 1
        {
          moduleStep: 1,
          moduleName: "Creativity",
          // Main Question Text
          questionOneText: this.$t('questioneerModuleOne.questionOne.mainQuestionText'),
          questionTwoText: this.$t('questioneerModuleOne.questionTwo.mainQuestionText'),
          questionThreeText: this.$t('questioneerModuleOne.questionThree.mainQuestionText'),
          questionFourText: this.$t('questioneerModuleOne.questionFour.mainQuestionText'),
          questionFiveText: this.$t('questioneerModuleOne.questionFive.mainQuestionText'),
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: this.$t('questioneerModuleOne.questionOne.questionLabelOne'),
          questionOneLabelTwo: this.$t('questioneerModuleOne.questionOne.questionLabelTwo'),
          questionOneLabelThree: this.$t('questioneerModuleOne.questionOne.questionLabelThree'),
          questionOneLabelFour: this.$t('questioneerModuleOne.questionOne.questionLabelFour'),
          // Question Labels 2
          questionTwoLabelOne: this.$t('questioneerModuleOne.questionTwo.questionLabelOne'),
          questionTwoLabelTwo: this.$t('questioneerModuleOne.questionTwo.questionLabelTwo'),
          questionTwoLabelThree: this.$t('questioneerModuleOne.questionTwo.questionLabelThree'),
          questionTwoLabelFour: this.$t('questioneerModuleOne.questionTwo.questionLabelFour'),
          //  Question Labels 3
          questionThreeLabelOne: this.$t('questioneerModuleOne.questionThree.questionLabelOne'),
          questionThreeLabelTwo: this.$t('questioneerModuleOne.questionThree.questionLabelTwo'),
          questionThreeLabelThree: this.$t('questioneerModuleOne.questionThree.questionLabelThree'),
          questionThreeLabelFour: this.$t('questioneerModuleOne.questionThree.questionLabelFour'),
          //  Question Labels 4
          questionFourLabelOne: this.$t('questioneerModuleOne.questionFour.questionLabelOne'),
          questionFourLabelTwo: this.$t('questioneerModuleOne.questionFour.questionLabelTwo'),
          questionFourLabelThree: this.$t('questioneerModuleOne.questionFour.questionLabelThree'),
          questionFourLabelFour: this.$t('questioneerModuleOne.questionFour.questionLabelFour'),
          //  Question Labels 5
          questionFiveLabelOne: this.$t('questioneerModuleOne.questionFive.questionLabelOne'),
          questionFiveLabelTwo: this.$t('questioneerModuleOne.questionFive.questionLabelTwo'),
          questionFiveLabelThree: this.$t('questioneerModuleOne.questionFive.questionLabelThree'),
          questionFiveLabelFour: this.$t('questioneerModuleOne.questionFive.questionLabelFour'),
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 3,
          questionTwoValueTwo: 1,
          questionTwoValueThree: 4,
          questionTwoValueFour: 2,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 2
        {
          moduleStep: 2,
          moduleName: "Yups",
          // Main Question Text
          questionOneText: "",
          questionTwoText: "",
          questionThreeText: "",
          questionFourText: "",
          questionFiveText: "",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 3
        {
          moduleStep: 3,
          moduleName: "",
          // Main Question Text
          questionOneText: "You like apples",
          questionTwoText: "You like Potatoes",
          questionThreeText: "You like to swim",
          questionFourText: "Running is fun",
          questionFiveText: "It is sunny outside",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 4
        {
          moduleStep: 4,
          moduleName: "",
          // Main Question Text
          questionOneText: "You like apples",
          questionTwoText: "You like Potatoes",
          questionThreeText: "You like to swim",
          questionFourText: "Running is fun",
          questionFiveText: "It is sunny outside",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 5
        {
          moduleStep: 5,
          moduleName: "",
          // Main Question Text
          questionOneText: "You like apples",
          questionTwoText: "You like Potatoes",
          questionThreeText: "You like to swim",
          questionFourText: "Running is fun",
          questionFiveText: "It is sunny outside",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 6
        {
          moduleStep: 6,
          moduleName: "",
          // Main Question Text
          questionOneText: "You like apples",
          questionTwoText: "You like Potatoes",
          questionThreeText: "You like to swim",
          questionFourText: "Running is fun",
          questionFiveText: "It is sunny outside",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 7
        {
          moduleStep: 7,
          moduleName: "",
          // Main Question Text
          questionOneText: "You like apples",
          questionTwoText: "You like Potatoes",
          questionThreeText: "You like to swim",
          questionFourText: "Running is fun",
          questionFiveText: "It is sunny outside",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 8
        {
          moduleStep: 8,
          moduleName: "",
          // Main Question Text
          questionOneText: "You like apples",
          questionTwoText: "You like Potatoes",
          questionThreeText: "You like to swim",
          questionFourText: "Running is fun",
          questionFiveText: "It is sunny outside",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 9
        {
          moduleStep: 9,
          moduleName: "",
          // Main Question Text
          questionOneText: "You like apples",
          questionTwoText: "You like Potatoes",
          questionThreeText: "You like to swim",
          questionFourText: "Running is fun",
          questionFiveText: "It is sunny outside",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 10
        {
          moduleStep: 10,
          moduleName: "",
          // Main Question Text
          questionOneText: "You like apples",
          questionTwoText: "You like Potatoes",
          questionThreeText: "You like to swim",
          questionFourText: "Running is fun",
          questionFiveText: "It is sunny outside",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 11
        {
          moduleStep: 11,
          moduleName: "",
          // Main Question Text
          questionOneText: "You like apples",
          questionTwoText: "You like Potatoes",
          questionThreeText: "You like to swim",
          questionFourText: "Running is fun",
          questionFiveText: "It is sunny outside",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
        // 12
        {
          moduleStep: 12,
          moduleName: "",
          // Main Question Text
          questionOneText: "You like apples",
          questionTwoText: "You like Potatoes",
          questionThreeText: "You like to swim",
          questionFourText: "Running is fun",
          questionFiveText: "It is sunny outside",
          // Main score of selected question
          questionOneTotalValue: 0,
          questionTwoTotalValue: 0,
          questionThreeTotalValue: 0,
          questionFourTotalValue: 0,
          questionFiveTotalValue: 0,
          // Question Labels 1
          questionOneLabelOne: "",
          questionOneLabelTwo: "",
          questionOneLabelThree: "",
          questionOneLabelFour: "",
          // Question Labels 2
          questionTwoLabelOne: "",
          questionTwoLabelTwo: "",
          questionTwoLabelThree: "",
          questionTwoLabelFour: "",
          //  Question Labels 3
          questionThreeLabelOne: "",
          questionThreeLabelTwo: "",
          questionThreeLabelThree: "",
          questionThreeLabelFour: "",
          //  Question Labels 4
          questionFourLabelOne: "",
          questionFourLabelTwo: "",
          questionFourLabelThree: "",
          questionFourLabelFour: "",
          //  Question Labels 5
          questionFiveLabelOne: "",
          questionFiveLabelTwo: "",
          questionFiveLabelThree: "",
          questionFiveLabelFour: "",
          // Individual value of question 1
          questionOneValueOne: 0,
          questionOneValueTwo: 0,
          questionOneValueThree: 0,
          questionOneValueFour: 0,
          // Individual value of question 2
          questionTwoValueOne: 0,
          questionTwoValueTwo: 0,
          questionTwoValueThree: 0,
          questionTwoValueFour: 0,
          // Individual value of question 3
          questionThreeValueOne: 0,
          questionThreeValueTwo: 0,
          questionThreeValueThree: 0,
          questionThreeValueFour: 0,
          // Individual value of question 4
          questionFourValueOne: 0,
          questionFourValueTwo: 0,
          questionFourValueThree: 0,
          questionFourValueFour: 0,
          // Individual value of question 5
          questionFiveValueOne: 0,
          questionFiveValueTwo: 0,
          questionFiveValueThree: 0,
          questionFiveValueFour: 0
        },
      ],
    }
  },
  methods: {

    // Next Stepper
    nextStep(stepData){
      let CurrentStep = stepData;
      this.step = CurrentStep + 1;
      this.currentModule = CurrentStep + 1;
      this.sumTotalModuleValue();
    },

    // Moving back a step
    previousStep(stepData){
      let CurrentStep = stepData;
      this.step = CurrentStep - 1;
      this.currentModule = CurrentStep - 1;
      this.sumTotalModuleValue();
    },

    // Sum up the totalModuleValue, and push total value + module name as parameters into the next function (top score - 240)
    sumTotalModuleValue(){
      // Calculation for each of the module
      let totalModuleValueOne = Number(this.modules[0].questionOneTotalValue) + Number(this.modules[0].questionTwoTotalValue) + Number(this.modules[0].questionThreeTotalValue) + Number(this.modules[0].questionFourTotalValue) + Number(this.modules[0].questionFiveTotalValue);
      let totalModuleValueTwo = Number(this.modules[1].questionOneTotalValue) + Number(this.modules[1].questionTwoTotalValue) + Number(this.modules[1].questionThreeTotalValue) + Number(this.modules[1].questionFourTotalValue) + Number(this.modules[1].questionFiveTotalValue);
      let totalModuleValueThree = Number(this.modules[2].questionOneTotalValue) + Number(this.modules[2].questionTwoTotalValue) + Number(this.modules[2].questionThreeTotalValue) + Number(this.modules[2].questionFourTotalValue) + Number(this.modules[2].questionFiveTotalValue);
      let totalModuleValueFour = Number(this.modules[3].questionOneTotalValue) + Number(this.modules[3].questionTwoTotalValue) + Number(this.modules[3].questionThreeTotalValue) + Number(this.modules[3].questionFourTotalValue) + Number(this.modules[3].questionFiveTotalValue);
      let totalModuleValueFive = Number(this.modules[4].questionOneTotalValue) + Number(this.modules[4].questionTwoTotalValue) + Number(this.modules[4].questionThreeTotalValue) + Number(this.modules[4].questionFourTotalValue) + Number(this.modules[4].questionFiveTotalValue);
      let totalModuleValueSix = Number(this.modules[5].questionOneTotalValue) + Number(this.modules[5].questionTwoTotalValue) + Number(this.modules[5].questionThreeTotalValue) + Number(this.modules[5].questionFourTotalValue) + Number(this.modules[5].questionFiveTotalValue);
      let totalModuleValueSeven = Number(this.modules[6].questionOneTotalValue) + Number(this.modules[6].questionTwoTotalValue) + Number(this.modules[6].questionThreeTotalValue) + Number(this.modules[6].questionFourTotalValue) + Number(this.modules[6].questionFiveTotalValue);
      let totalModuleValueEight = Number(this.modules[7].questionOneTotalValue) + Number(this.modules[7].questionTwoTotalValue) + Number(this.modules[7].questionThreeTotalValue) + Number(this.modules[7].questionFourTotalValue) + Number(this.modules[7].questionFiveTotalValue);
      let totalModuleValueNine = Number(this.modules[8].questionOneTotalValue) + Number(this.modules[8].questionTwoTotalValue) + Number(this.modules[8].questionThreeTotalValue) + Number(this.modules[8].questionFourTotalValue) + Number(this.modules[8].questionFiveTotalValue);
      let totalModuleValueTen = Number(this.modules[9].questionOneTotalValue) + Number(this.modules[9].questionTwoTotalValue) + Number(this.modules[9].questionThreeTotalValue) + Number(this.modules[9].questionFourTotalValue) + Number(this.modules[9].questionFiveTotalValue);
      let totalModuleValueEleven = Number(this.modules[10].questionOneTotalValue) + Number(this.modules[10].questionTwoTotalValue) + Number(this.modules[10].questionThreeTotalValue) + Number(this.modules[10].questionFourTotalValue) + Number(this.modules[10].questionFiveTotalValue);
      let totalModuleValueTwelve = Number(this.modules[11].questionOneTotalValue) + Number(this.modules[11].questionTwoTotalValue) + Number(this.modules[11].questionThreeTotalValue) + Number(this.modules[11].questionFourTotalValue) + Number(this.modules[11].questionFiveTotalValue);

      // Assigning the values to individual module
      this.scoreOfModule[0].value = totalModuleValueOne;
      this.scoreOfModule[1].value = totalModuleValueTwo;
      this.scoreOfModule[2].value = totalModuleValueThree;
      this.scoreOfModule[3].value = totalModuleValueFour;
      this.scoreOfModule[4].value = totalModuleValueFive;
      this.scoreOfModule[5].value = totalModuleValueSix;
      this.scoreOfModule[6].value = totalModuleValueSeven;
      this.scoreOfModule[7].value = totalModuleValueEight;
      this.scoreOfModule[8].value = totalModuleValueNine;
      this.scoreOfModule[9].value = totalModuleValueTen;
      this.scoreOfModule[10].value = totalModuleValueEleven;
      this.scoreOfModule[11].value = totalModuleValueTwelve;

      // Calculate Total Score - Breaking down the amount into 3 parts.
      let totalModuleScoreOne = totalModuleValueOne + totalModuleValueTwo + totalModuleValueThree + totalModuleValueFour;
      let totalModuleScoreTwo = totalModuleValueFive + totalModuleValueSix + totalModuleValueSeven + totalModuleValueEight;
      let totalModuleScoreThree = totalModuleValueNine + totalModuleValueTen + totalModuleValueEleven + totalModuleValueTwelve;

      // Total Score
      let totalModuleScore = totalModuleScoreOne + totalModuleScoreTwo + totalModuleScoreThree;
      // Push to total score variable
      this.totalModuleScore = totalModuleScore;
    },
  },
  computed: {
    // Goes through every value in the stepper above, and filter through it.  - Displaying the ones with the lowest value (5) first, and highest value (20) last
    sortModuleByValue(){
      return this.scoreOfModule.slice().sort(function(a, b){
        return (a.value > b.value) ? 1 : -1;
      });
    },
  }
}
</script>

<style scoped>
.v-stepper_header {
  overflow: auto;
  display: flex;
  flex-wrap:no-wrap;
  justify-content: left;
}
</style>