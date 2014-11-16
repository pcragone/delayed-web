//= require jquery-1.11.1.min

;(function () {
  var addZero, getTime, loadJobs, startLoading, stopLoading, jobLoadingIntervalId;

  addZero = function (i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  getTime = function () {
    var d = new Date();
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
    return h + ":" + m + ":" + s;
  }

  loadJobs = function () {
    jQuery('table #jobRows').load('jobs #jobRows tr', function () {
      $('#lastUpdated').html(getTime());
    });
  };

  startLoading = function () {
    jobLoadingIntervalId = setInterval(loadJobs, 3000);
    $('#startLoading').hide();
    $('#stopLoading').show();
  };

  stopLoading = function () {
    clearInterval(jobLoadingIntervalId);
    $('#startLoading').show();
    $('#stopLoading').hide();
  };

  jQuery(document).ready(function () {
    startLoading();
    $('#loadNow').click(loadJobs);
    $('#stopLoading').click(stopLoading);
    $('#startLoading').click(startLoading);
  });
})();