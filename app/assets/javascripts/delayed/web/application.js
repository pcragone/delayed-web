//= require jquery-1.11.1.min

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function getTime() {
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  var s = addZero(d.getSeconds());
  return h + ":" + m + ":" + s;
}

loadJobs = function () {
  var time = new Date();

  jQuery('table #jobRows').load('jobs #jobRows tr', function() {
    $('#lastUpdated').html(getTime());
  });
};

jQuery(document).ready(function() {
  setInterval(loadJobs, 3000);

  $('#loadNow').click(loadJobs);
});