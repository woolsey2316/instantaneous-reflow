function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num)*Math.abs(num)
}

$( document ).ready(function() {
  var voteButtonCollection = document.getElementsByName("switch-vote-type");
  var voteTypeLabel = document.getElementsByName("vote-type");
  var voteTypeDisplay = document.getElementsByName("voteable");

  voteTypeDisplay.forEach(
    (value, key, parent) => {
      value.onclick = displayDialog
    }
  )

  voteButtonCollection.forEach(
    (value, key, parent) => {
      value.onclick = switchVoteType; 
    }
  )
  
  // user scores the readiness of a certain space tech from 1-5
  function scoreReadinessOfSpaceTech(type){
    $.ajax({
      url: "http://API_ENDPOINT/" + type + "/" + mainSearchField.value,
      method: "POST",
      dataType: "json",
      success: function(data) {     
        blogContainer.empty()   
        paginateBlogTiles(data)
      }
    });
  }
  
  // switches display between expert and community vote tallies
  function switchVoteType() { 
    var newVoteType = localStorage.getItem("voteType") === "Expert" ? "Community" : "Expert"
    voteTypeLabel.forEach(
      (value, key, parent) => {
        value.innerHTML = newVoteType
      }
    )
    localStorage.setItem("voteType", newVoteType)
    updateScores(newVoteType)
  }
  
  // changes the vote tally and average score on all cards to switch between expert and community 
  function updateScores(newVoteType) {
    var scores = document.getElementsByName("score")
    var totalVotes = document.getElementsByName("total-votes")
    var blogTiles = JSON.parse(localStorage.getItem("blogTiles"));

    if (newVoteType === "Community") {
      scores.forEach(
        (value, key, parent) => {
          value.innerHTML = blogTiles[key].community_score
        }
      )
      totalVotes.forEach(
        (value, key, parent) => {
          // format numerical display eg. 1000 -> 1K
          value.innerHTML = kFormatter(blogTiles[key].community_total_vote_count)
        }
      )
    // display expert votes
    } else {
      scores.forEach(
        (value, key, parent) => {
          value.innerHTML = blogTiles[key].expert_score
        }
      )
      totalVotes.forEach(
        (value, key, parent) => {
          // format numerical display eg. 1000 -> 1K
          value.innerHTML = kFormatter(blogTiles[key].expert_total_vote_count)
        }
      )
    }
  }
});