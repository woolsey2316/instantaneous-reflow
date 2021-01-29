import { paginateBlogTiles } from './helper'

export const getBlogCardData = () => {
  $.ajax({
    url: "http://API_ENDPOINT/"+mainSearchField.value,
    method: "GET",
    dataType: "json",
    success: function(data) {     
      document.getElementById("blog-container").empty()   
      paginateBlogTiles(data)
      // store state in local storage, most importantly vote count and score for expert and community 
      localStorage.setItem("blogTile", JSON.stringify(data.blogs));
    }
  });
};

// user scores the readiness of a certain space tech from 1-5
export const scoreReadinessOfSpaceTech = (vote_type) => {
  $.ajax({
    url: "http://API_ENDPOINT/" + vote_type + "/" + mainSearchField.value,
    method: "POST",
    dataType: "json"
  });
};