import { kFormatter } from './helper'

// when search field is in focus the web page hides certain sections of the website
// to make room for search results that are about to be fetched when user enteres a search term.
const bindFocusEvents = () => {
  var navSearchField = document.getElementById("blog-search2");
  var mobileSearchField = document.getElementById("blog-search3");
  var blogPagination = document.getElementById("blog-pagination");
  var blogContainer = document.getElementById('blog-container');

  navSearchField.addEventListener("focusin", toggleSearchFocus)
  navSearchField.addEventListener("focusout", toggleSearchFocus)
  mobileSearchField.addEventListener("focusout", toggleSearchFocus)
  mobileSearchField.addEventListener("focusin", toggleSearchFocus)
  
  function toggleSearchFocus(){
    var isFocused = (
      document.activeElement === navSearchField
      || document.activeElement === mobileSearchField
    )
    if (isFocused) {
      blogContainer.style.display = "block";
      document.getElementById('main-article').style.display = "none";
      blogContainer.style.height = "auto";
      blogContainer.style.marginBottom = "0px";
      blogContainer.style.position = "static";
      blogPagination.style.display = "block";

    } else {
      document.getElementById('main-article').style.display = "block";
      blogContainer.style.display = "none";
    }
  }
};

// scroll animations that scroll when a pagination button is pressed taking you 
// to the top of the page to see new contents
const bindScrollAnimations = () => {
  // scroll to top of page when a dropdown button is pressed
  $("label[for='glossary']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 250);
    return true;
  });

  $("label[for='concepts']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 250);
    return true;
  });

  $("label[for='video-dropdown']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 250);
    return true;
  });

  // pagination buttons inside dropdown also trigger scroll animation
  $("label[name='pagination-glossary']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 250);
    return true;
  });

  $("label[name='pagination-concepts']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 250);
    return true;
  });

  // scrolls to top of page when page number is chosen
  $("label[name='blog-page']").click(function() {
    navSearchField.scrollIntoView();
    return true;
  });
};

// initial state of main article associated with the page 
const loadSpaceTechArticleData = () => {
  var blogCard = [
    {
      color: "windsor-tan",
      title: "Widget Title",
      subtitle: "Supporting text and content goes here.",
      imagelink: "../images/pexels-pixabay-2166@2x.png",
      abstract: "Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec elaboraret interpretaris, sed diceret concludaturque no. Verear habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed ea cibo eripuit vituperata, pri eius debitis ne. Eos et wisi legimus, vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos harum vitae, te quod vero salutandi nam. Lorem",
      buttonlink: "/somewhere",
      buttonText: "Keep Reading",
      community_score: 3.76,
      community_total_vote_count: 11000,
      expert_score: 4.50,
      expert_total_vote_count: 9494,
    }
  ]

  localStorage.setItem("blogCard", JSON.stringify(blogCard))
}

// updates what state is visible in the vote widget when user presses the switch button.
// eg. Expert vote score is shown instead of community
const bindVoteEvents = () => {
  var voteButtonCollection = document.getElementsByName("switch-vote-type");
  var voteTypeLabel = document.getElementsByName("vote-type");

  voteButtonCollection.forEach(
    (value, key, parent) => {
      value.onclick = switchVoteType; 
    }
  )

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
  
  // changes the vote tally and average score on all cards, switching between 'expert' and 'community' 
  function updateScores(newVoteType) {
    var scores = document.getElementsByName("score")
    var totalVotes = document.getElementsByName("total-votes")
    var blogTile = JSON.parse(localStorage.getItem("blogCard"));

    if (newVoteType === "Community") {
      scores.forEach(
        (value, key, parent) => {
          value.innerHTML = blogTile[key].community_score
        }
      )
      totalVotes.forEach(
        (value, key, parent) => {
          // format numerical display eg. 1000 -> 1K
          value.innerHTML = kFormatter(blogTile[key].community_total_vote_count)
        }
      )
    // display expert votes
    } else {
      scores.forEach(
        (value, key, parent) => {
          value.innerHTML = blogTile[key].expert_score
        }
      )
      totalVotes.forEach(
        (value, key, parent) => {
          // format numerical display eg. 1000 -> 1K
          value.innerHTML = kFormatter(blogTile[key].expert_total_vote_count)
        }
      )
    }
  }
}

// fetches blog cards that match the new string text entered into a search bar
const bindSearchResultHandling = () => {
  var navSearchField = document.getElementById("blog-search2");
  var mobileSearchField = document.getElementById("blog-search3");

  navSearchField.onchange = getBlogCardData;
  mobileSearchField.onchange = getBlogCardData;
}

$( document ).ready(function() {
  loadSpaceTechArticleData()
  bindVoteEvents()
  bindSearchResultHandling()
  bindFocusEvents()
  bindScrollAnimations()

});
