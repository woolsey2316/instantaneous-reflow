$( document ).ready(function() {
  var voteButtonCollection = document.getElementsByName("switch-vote-type");
  var voteTypeLabel = document.getElementsByName("vote-type");
  var voteTypeDisplay = document.getElementsByName("voteable");
  
  localStorage.setItem("voteType","Expert")

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
    updateScores()
  }
  
  function updateScores() {
    var scores = document.getElementsByName("score")
    var blogTile = JSON.parse(localStorage.getItem("blogTile"));
    scores.forEach(
      (value, key, parent) => {
        value.innerHTML = blogTile[key].score
      }
    )
    var totalVotes = document.getElementsByName("total-votes")
    totalVotes.forEach(
      (value, key, parent) => {
        value.innerHTML = blogTile[key].totalVotes
      }
    )
  }
  
});