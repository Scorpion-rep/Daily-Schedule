const timeDisplayEl = $('#currentDay');




//Open the planner => displaying current time /date
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

// Each timeblock is color coded for past, present or future

// Click on timeblock => Enter event
// Click on save btn 

//=> Event is saved in local Storage

//When refresh the page 
//=> saved event persist