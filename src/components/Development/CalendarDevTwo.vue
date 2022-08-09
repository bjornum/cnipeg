<template>
  <div>
    <v-row>
      <v-col cols="12" class="mt-15">
        <!--  -->
        <p v-if="displayMe == true">{{dateToday}}</p>
        <!--
          Top section
            - Navigate months
            - Swap between views
            - Display todays date
            - Insta click to get to todays date in month mode.
        -->
        <v-sheet height="64">
          <v-toolbar flat>
            <v-btn outlined class="mr-4" color="grey darken-2" @click="goToCurrentDay"> Today </v-btn>

            <v-btn fab text small color="grey darken-2" @click="previousDate">
              <v-icon small> mdi-chevron-left </v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="nextDate">
              <v-icon small> mdi-chevron-right </v-icon>
            </v-btn>

            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <!-- Run some statements, if wanting i18n implementation of this here. -->
                  {{type}}
                  <v-icon right> mdi-menu-down </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>


        <!--
          Calendar itself
            - Take events, and display them correctly.
            - Be fully customisable to how we wish to have it.
            - Events should be clickable, opening a dialog or some sort.
            - Clearly display todays date
            - Event can span over days
            - Event should display time (start and end)
        -->
        <v-sheet height="600" class="pb-15">

          <v-calendar
            ref="calendar"
            v-model="mainCalendar"
            color="primary"
            :events="dummyCalendarEvents"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
          ></v-calendar>

        </v-sheet>


        <!--
          Calendar Dialog
            - Display corresponding data, of clicked event.
            - Should not take full screen, unless being on phone (think UX)
        -->
        <v-dialog v-model="eventDialog" width="500">
          <v-card v-if="eventData">
            <p class="text-center pa-5">{{eventData.name}}</p>
            <p>{{eventData.details}}</p>
            <p>
              <span>Start: </span>
              <br>
              <span>Day: {{eventData.startDay}}</span>
              <br>
              <span v-if="eventData.isOneDayEvent == false">Time: {{eventData.startTime}}</span>
              <span v-else>Time: {{eventData.startTime}} - {{eventData.endTime}}</span>
            </p>
            <!-- <p>Start Time: {{eventData.start.split('T')[1]}}</p> -->
            <p v-if="eventData.isOneDayEvent == false">
              <span>End: </span> 
              <br />
              <span>Day: {{eventData.endDay}}</span>
              <br />
              <span>Time: {{eventData.endTime}}</span>
            </p>
            <pre>{{eventData}}</pre>
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
      mainCalendar: "",
      calendarDialogIsOpen: false,
      calendarEvents: [],
      displayMe: true,
      /*
        Pre-Defined Keywords from vuetify dev team
          - name
          - start (must be, in form of YYYY-MM-DD format)
          - end (required)
          # Adding time to any of the dates, simply follow this principle: YYYY-MM-DDThh:mm
            - Year, Month, Day, Hour, Minute
          - color
          - timed true/false - Find a better definition
          - isSingleDay = if false, spans over multiple days (add easy logic)
      */
      dummyCalendarEvents: [
        { name: 'Vacation', details: 'Going to the beach!', start: '2022-08-02T06:45', end: '2022-08-05T08:30', open: false, color: 'pink', timed: true, isSingleDay: false },
        { name: 'Vacation', details: 'Going to the beach!', start: '2022-08-01T10:45', end: '2022-08-05T10:30', open: false, color: 'green', timed: true, isSingleDay: false },
        { name: 'Vacation', details: 'Going to the beach!', start: '2022-07-08T12:00', end: '2022-07-08T12:13', open: false, isSingleDay: true },
        { name: 'Meeting', details: 'Spending time on how we do not have enough time', start: '2022-07-08T12:00', end: '2022-07-08T12:10', open: false, isSingleDay: true },
        { name: '30th Birthday', details: 'Celebrate responsibly', start: '2022-07-08T23:59', end: '2022-07-08T23:59', open: false, isSingleDay: true },
        { name: 'New Year', details: 'Eat chocolate until you pass out', start: '2022-07-07T23:59', end: '2022-07-07T00:01', open: false, isSingleDay: true },
        { name: 'Conference', details: 'Mute myself the whole time and wonder why I am on this call', start: '2022-08-02T06:45', end: '2022-08-02T10:45', open: false, color: 'brown', isSingleDay: true },
        { name: 'Hackathon', details: 'Code like there is no tommorrow', start: '2022-07-07T13:37', end: '2022-07-07T15:00', open: false, isSingleDay: true }
      ],
      dateToday: "",
      type: 'month',
      eventData: [],
      eventDialog: false
    }
  },

  mounted(){
    this.getTodaysDate();
    // console.log(process.env.VUE_APP_API_KEY);
  },

  methods: {
    // Find todays date
    getTodaysDate(){
      let getFullCurrentDate = new Date().toISOString().slice(0, 10);
      // let currentDay = getFullCurrentDate.getDate();
      // let currentMonth = getFullCurrentDate.getMonth() + 1;
      // let currentYear = getFullCurrentDate.getFullYear();
      console.log("The date are: ", getFullCurrentDate);
      // this.dateToday = currentDay + '/' + currentMonth + '/' + currentYear
      this.dateToday = getFullCurrentDate;

    },

    /* ===== Toolbar ===== */

    // Navigate to Previous Date
    previousDate(){
      this.$refs.calendar.prev();
    },
    // Navigate to next Date
    nextDate(){
      this.$refs.calendar.next();
    },
    // Go back to current day
    goToCurrentDay(){
      this.mainCalendar = "";
    },

    /* ===== Calendar ===== */

    /*
      Open Event Dialog
        - Creating the object "manually", to solve an issue where browser argues toward the split functionality
        - Can still fail if the format isnt set correctly - will be adjusted when knowing what the format will be.
          - Current "correct" format are: YYYY-MM-DDThh:mm
        # Remove console.log before moving this component from development. 
    */
    showEvent(eventInfo){
      console.log('asd', eventInfo);
      // Reduce the path, when creating the object
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
    // Close Dialog
    // Reset Dialog

    /*
      View day
        - Used when having multiple events in one day, and being unable to see all of them at once.
        Will then enter the day mode, at corresponding date.
    */
    viewDay({ date }){
      this.mainCalendar = date
      this.type = 'day'
    }
  }
}
</script>