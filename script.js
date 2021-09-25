let timeDisplayEl = $('#currentDay');

// get current time and date
function displayTime() {
  let currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss');
  timeDisplayEl.text(currentTime);
}
setInterval(displayTime, 1000);

// set function to grab the event and store the document in local storage
$(document).ready(function() {

  // save btn event listen to store events in local storage
  $('.saveBtn').on('click', function (event) {
    event.preventDefault();
    //get values 
    let text = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');    
    
    //data is saved in local storage
    localStorage.setItem(time, text);
  })

  function trackingTime() {
 
    // get current time/hour
    let timeNow = moment().hour();

    //loop over time blocks
    $('.time-block').each(function () {
      let blockTime = parseInt($(this).attr('id').split('-')[1]);

      // Conditions to generate the background color code      
      if (blockTime < timeNow) {
        $(this).removeClass('future');
        $(this).removeClass('present');
        $(this).addClass('past');

      }
      else if (blockTime === timeNow) {
        $(this).removeClass('past');
        $(this).removeClass('future');
        $(this).addClass('present');
      }
      else {
        $(this).removeClass('present');
        $(this).removeClass('past');
        $(this).addClass('future');
      }

    })

  }

  // Getting items from local storage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  trackingTime();
})

