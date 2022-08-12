<template>
  <div>


    <v-btn @click="testt">asdasd</v-btn>


    <v-row>
      <v-col cols="12" class="mt-15">
        <!-- ===== TOP SECTION OF THE CALENDAR ===== -->
        <v-sheet height="64">
          <v-toolbar flat>

            <!-- ===== RESET TO TODAYS VIEW AND DATE ===== -->
            <v-btn outlined class="mr-4" color="grey darken-2" @click="goToCurrentDay"> Today </v-btn>

            <v-spacer></v-spacer>

            <!-- ===== MOVE PREVIOUS MONTH/WEEK/DAY BUTTON ===== -->
            <v-btn fab text color="grey darken-2" @click="previousDate">
              <v-icon large> mdi-chevron-left </v-icon>
            </v-btn>

            <!-- ===== DATEPICKER DIALOG ===== -->
            <v-dialog ref="dialog" v-model="DatePickerDialog" :return-value.sync="date" persistent width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-toolbar-title v-model="date" readonly v-bind="attrs" v-on="on"> {{selectedMonth}} {{selectedYear}}</v-toolbar-title>
              </template> 
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="changeDateCancel()"> Cancel </v-btn>
                <v-btn text color="primary" @click="changeDate(date)"> OK </v-btn>
              </v-date-picker>
            </v-dialog>

            <!-- ===== MOVE NEXT MONTH/WEEK/DAY BUTTON ===== -->
            <v-btn fab text color="grey darken-2" @click="nextDate">
              <v-icon large> mdi-chevron-right </v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <!-- ====== SELECT CALENDAR VIEW (Week disabled for now) ===== -->
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  {{type}}
                  <v-icon right> mdi-menu-down </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <!-- <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item> -->
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>


        <!-- ===== CALENDAR ====== -->
        <v-sheet height="600" class="pb-15">
          <v-calendar
            ref="calendar"
            v-model="mainCalendar"
            color="primary"
            :events="dummyCalendarEvents"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
          ></v-calendar>
        </v-sheet>

        <!-- ===== CALENDAR EVENT DIALOG ===== -->
        <v-dialog v-model="eventDialog" width="500">
          <v-card v-if="eventData" class="brown lighten-5">
            <p class="text-center pa-5 pb-2">{{eventData.name}}</p>
            <p class="pl-5 mb-0" style="font-size: 24px;">{{eventData.details}}</p>
            <v-row class="pa-0 ma-0">
              <v-col cols="6" class="pl-5">
                <p style="font-size: 18px">
                  <span>Start: </span>
                  <br>
                  <span>Day: {{eventData.startDay}}</span>
                  <br>
                  <span v-if="eventData.isOneDayEvent == false">Time: {{eventData.startTime}}</span>
                  <span v-else>Time: {{eventData.startTime}} - {{eventData.endTime}}</span>
                </p>
              </v-col>
              <v-col cols="6">
                <p v-if="eventData.isOneDayEvent == false" style="font-size: 18px">
                  <span>End: </span> 
                  <br />
                  <span>Day: {{eventData.endDay}}</span>
                  <br />
                  <span>Time: {{eventData.endTime}}</span>
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-dialog>


      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // Main value of the calendar. Will adapt to changed dates.
      mainCalendar: "",
      /* Require some Pre-Defined Keywords from vuetify dev team
        - See README file for more info.
        - Just a dummy array for now.
      */
      dummyCalendarEvents: [
        { name: 'Vacation', details: 'Going to the beach!', start: '2022-08-02T06:45', end: '2022-08-05T08:30', open: false, color: 'pink', timed: true, isSingleDay: false },
        { name: 'Vacation', details: 'Going to the beach!', start: '2022-08-01T10:45', end: '2022-08-05T10:30', open: false, color: 'green', timed: true, isSingleDay: false },
        { name: 'Vacation', details: 'Going to the beach!', start: '2022-07-08T12:00', end: '2022-07-08T12:13', open: false, isSingleDay: true },
        { name: 'Meeting', details: 'Spending time on how we do not have enough time', start: '2022-07-08T12:00', end: '2022-07-08T12:10', open: false, isSingleDay: true },
        { name: '30th Birthday', details: 'Celebrate responsibly', start: '2022-07-08T23:59', end: '2022-07-08T23:59', open: false, isSingleDay: true },
        { name: 'New Year', details: 'Eat chocolate until you pass out', start: '2022-07-07T23:59', end: '2022-07-07T00:01', open: false, isSingleDay: true },
        { name: 'Conference', details: 'Mute myself the whole time and wonder why I am on this call', start: '2022-08-02T06:45', end: '2022-08-02T10:45', open: false, color: 'brown', isSingleDay: true },
        { name: 'Hackathon', details: 'Code like there is no tommorrow', start: '2022-07-07T13:37', end: '2022-07-07T15:00', open: false, isSingleDay: true },
      ],
      // Default view of the calendar. (month, week, day)
      type: 'month',
      // Data of clicked calendar event
      eventData: [],
      // Calendar Dialog State
      eventDialog: false,
      // DatePicker Dialog State
      DatePickerDialog: false,
      // Used to get current date
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      // Used when comparing month number with index of this array
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      // Final Value of month and Year
      selectedMonth: "",
      selectedYear: "",
      // Used to store month number, for the functions below.
      selectedMonthNumber: "",
    }
  },

  mounted(){
    this.getInitialDate();
  },

  methods: {

    // Set the Current Date on component Mount
    getInitialDate(){
      let getMonthNumber = this.date.split('-')[1];
      this.selectedMonth = this.months[getMonthNumber - 1];
      this.selectedMonthNumber = getMonthNumber;
      this.selectedYear = this.date.split('-')[0];
    },

    // Datepicker dialog function - Set Datepick date
    changeDate(pickedDate){
      this.mainCalendar = pickedDate;
      this.DatePickerDialog = false;
      this.SetNewDate('selectedDate');
    },

    // Datepicker dialog function - Close Dialog
    changeDateCancel(){
      this.DatePickerDialog = false;
    },

    /* datePicker and calendar Month setter
      - Displays the changed value, after clicking the month arrows / datepicker
    */
    SetNewDate(fromFunction){
      // Currently set month before change
      let currentMonth = this.selectedMonthNumber;
      // Run function based on Value
      if(fromFunction == 'prevDate'){
        this.previousMonth(currentMonth);
      } else if (fromFunction == 'nextDate'){
        this.nextMonth(currentMonth);
      } else if (fromFunction == 'selectedDate'){
        this.datepickedMonth();
      }
    },

    /* Previous Month
      - If month are 1 when changing.
        - Fix month to 12
        - Fix year to previous year
      - Else just count backwards
    */
    previousMonth(currentMonth){
      if(currentMonth == '1'){
        this.selectedMonthNumber = 12;
        this.selectedMonth = this.months[11];
        this.selectedYear = this.selectedYear - 1;
      } else {
        this.selectedMonthNumber = currentMonth - 1;
        this.selectedMonth = this.months[this.selectedMonthNumber - 1];
      }
    },

    /* Next Month / Year
      - If going into the 13th month
      - else count upward as normal
      # Fix on certain dates, as they had to be defined as number and not string.
    */
    nextMonth(currentMonth){
      if(currentMonth == '12'){
        let currentYearFix = Number(this.selectedYear);
        this.selectedMonthNumber = 1;
        this.selectedMonth = this.months[0];
        this.selectedYear = currentYearFix + 1;
      } else {
        let currentMonthFix = Number(currentMonth);
        this.selectedMonthNumber = currentMonthFix + 1;
        this.selectedMonth = this.months[this.selectedMonthNumber - 1];
      }
    },

    /* Selected Date from datepicker
      - Extract the numbers from the date (YYYY-MM-DD)
      - set year and get correct month based on month number
    */
    datepickedMonth(){
      let getSelectedMonthNumber = this.mainCalendar.split('-')[1];
      let getSelectedYearNumber = this.mainCalendar.split('-')[0];
      this.selectedMonthNumber = getSelectedMonthNumber;
      this.selectedMonth = this.months[Number(getSelectedMonthNumber) - 1];
      this.selectedYear = getSelectedYearNumber;
    },

    // Toolbar function - Navigate to Previous Date
    previousDate(){
      this.$refs.calendar.prev();
      this.SetNewDate('prevDate');
    },
    // Toolbar function - Navigate to next Date
    nextDate(){
      this.$refs.calendar.next();
      this.SetNewDate('nextDate');
    },
    // Toolbar Function - Go back to current day
    goToCurrentDay(){
      this.mainCalendar = "";
      this.type = 'month';
    },

    /* Open Calendar Event Dialog 
        - Get the eventInfo clicked, and create an variable containing the object.
        - Create a new object from it, and push it to the "official" clicked event object.
        # Can fail if certain keys isnt there. 
          - Need to be of format (YYYY-MM-DD)
          - This goes toward the start and end keys given from parent
    */
    showEvent(eventInfo){
      console.log("event", eventInfo);
      let getEventObject = eventInfo.eventParsed.input;
      let creatingTheEvent = {
        name: getEventObject.name,
        details: getEventObject.details,
        startDay: getEventObject.start.split('T')[0],
        endDay: getEventObject.end.split('T')[0],
        startTime: getEventObject.start.split('T')[1],
        endTime: getEventObject.end.split('T')[1],
        isOneDayEvent: getEventObject.isSingleDay
      }
      this.eventData = creatingTheEvent;
      this.eventDialog = true;
    },

    /* When clicking a date, or the (x more) within calendar
        -  It takes said date, and change the view into day view.
    */
    viewDay ({ date }) {
      this.mainCalendar = date;
      this.type = 'day'
    },


    /*
      In prog with internationalise the months
    */
    testt(){
      var format = new Date().toLocaleString('nl-BE', { month: 'long' });
      console.log(format)
    },
  },
}
</script>