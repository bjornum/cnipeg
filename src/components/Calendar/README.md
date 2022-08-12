# Calendar Component

## Description.
A calendar component, utilising Calendar and Datepicker features from vuetify.
  - Allows for clickable events
  - Toggling from month to month
  - Selecting date and displaying it so.
  - Having multiple events on the same day.
  - Having events lasting for more than 1 day.

## Files
  - README.md
  - MainCalendar.vue

## Implementing the component
Simple import and use.


## Notes
  - Calendar from vuetify go by some pre-defined keys.
    - So need to adjust the content from DB, before pushing it out. (this is displayed in the function).
  - Keys: 
    - name
    - start (must be, in form of YYYY-MM-DDThh:mm format)
      - Year, Month, Day, Hour, Minutes
    - end (required)
    - color
    - isSingleDay = if false, spans over multiple days (add easy logic)

## ToDo
1. Internationalise the month name. So it is based upon language.
2. Internationalize the week names.
3. Look into weekend changing.
  - As it now changes entire dates, over just weeks.
4. Cleanup