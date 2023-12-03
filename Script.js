function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
  
    var age = calculateTimeDifference(today, dob);
  
    var result = document.getElementById('result');
    result.innerHTML = '<h3>Your age is: </h3>'+ age.years + ' years, ' + age.months + ' months '+'<br>'+'<br>' + age.days + ' days, ' + age.hours + ' hours '+'<br>'+'<br>' + age.minutes + ' minutes, ' + age.seconds + ' seconds.';
  }
  
  function calculateTimeDifference(date1, date2) {
    var timeDifference = date1 - date2;
  
    var seconds = Math.floor(timeDifference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var months = Math.floor(days / 30);
    var years = Math.floor(months / 12);
  
    seconds %= 60;
    minutes %= 60;
    hours %= 24;
    days %= 30;
    months %= 12;
  
    return {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  