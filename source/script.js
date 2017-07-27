function addTrumpClass() {
  addClassToTweets();
  addClassToProfile();
}

function addClassToTweets() {
  var tweets = $('.tweet');

  for (i = 0; i < tweets.length; i++) {
    var tweet = tweets[i];
    if (tweet.outerText.indexOf('@realDonaldTrump') > -1) {
      $(tweet).addClass('trump-tweet');
    }
  }
}

function addClassToProfile() {
  var profileHeaderName = $('.ProfileHeaderCard-screenname')[0];

  if (profileHeaderName.innerText.indexOf('Trump') > -1) {
    var profileNavStats = $('.ProfileNav-stat');
    for (i = 0; i < profileNavStats.length; i++) {
      var stat = profileNavStats[i];
      $(stat).addClass('trump-stat');
    }
  }
}


addTrumpClass();
