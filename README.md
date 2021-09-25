# Daily-Schedule

# HTML Modification
    1. Created 8 div for timeblocks of the work day schedule.
    2. Each div has 'id' and 'class' and contains the children:
        + A div to display the timeblock for standard business hours.
        + A textarea for text input, sized with 9 column, with class is added corresponded with the selector '.description' in css.
        + A button contained <i> tag with an icon fas fa-save to indicate it's a save button.
    3.All children div are wrapped in the div .class container.    
# CSS Modification
    1. Added font-display to body
    2. Added vertical align to textarea
    3. Added display flex to selector time-block
    4. Added values to selector hour (details in css)
    5. Added hover method in each timeblock 'past, present and future'.
# JavaScript
    Descriptions are in JS file.

# User experience
    1. When starting the page, the planner displayed with current day and time at the top of the calendar.
    2. When scrolling down, user is presented with timeblocks with standard business working hours.
    3. When user views the timeblocks, the past hours are coded grey, current timeblock is red and the blocks for future time indicated with green color.
    4. User can enter the event in each block and save by blue button.
    5. The event is saved in local storage to recall for next time when calendar is used (events persist when refresh the page)
              
