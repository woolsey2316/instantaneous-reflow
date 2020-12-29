$( document ).ready(function() {
  var _mySearchField = document.getElementById("blog-search");
  var _mySearchField2 = document.getElementById("blog-search2");
  _mySearchField.onchange = getData;

  const borderColor = ['danger', 'matrix-blue', 'matrix-green', 'dark-goldenrod']
  function getData(){
    $.ajax({
      url: "http://API_ENDPOINT"+_mySearchField.value,
      method: "GET",
      dataType: "json",
      success: function(data) {     
        $("blog-container").empty()   
        for(var i= 0; i < data.matchingResults.length-1; i++){
          //convert string response to html blog tile 
          var blogTile = [
            '<div class="block w-full sm:flex sm:justify-center bg-gray-800 -mb-20 relative sm:h-132">',
              '<div class="bg-gray-800 p-4 sm:w-1/3 lg:w-73">',
                '<div class="border-t-3' + borderColor[i%4] + '"></div>',
                  '<div class="bg-gray-800 px-5 py-6 border-l border-r border-gray-700">',
                    '<h3 class="text-white text-xl font-medium">' + data.matchingResults[i].title + '</h3>',
                    '<p class="text-sm font-medium text-gray-300 mb-2 max-h-11">' + data.matchingResults[i].subtitle + '</p>',
                  '</div>',
                  '<img class="object-cover h-28" height="230" width="640" src="./assets/images/pexels-pixabay-73910@2x.png"></img>',
                  '<div class="bg-gray-800 px-5 py-8 mb-5 border-l border-r border-b border-gray-700">',
                    '<p class="text-sm text-gray-400 leading-2 sm:h-200px sm:max-h-200px overflow-hidden">' + data.matchingResults[i].description + '</p>',
                    '<button class="btn-md text-gray-500 leading-none font-semibold border border-danger mt-8">Keep Reading</button>',
                  '</div>',
                '</div>',
              '</div>',
            '</div>'
          ].join("\n");
          
          $("blog-container").append(blogTile);
        }
        // last blog tile needs to overlap with the section below
        const finalBlogTile = [
        '<div class="bg-gray-800 p-4 sm:w-1/3 lg:w-73 h-108 relative">',
          '<div class="absolute pr-4 sm:p-0 sm:static">',
            '<div class="border-t-3' + borderColor[data.matchingResults.length-1%4] + '"></div>',
              '<div class="bg-gray-800 px-5 py-6 border-l border-r border-gray-700">',
                '<h3 class="text-white text-xl font-medium">' + title + '</h3>',
                '<p class="text-sm font-medium text-gray-300 mb-2 max-h-11">' + subtitle + '</p>',
              '</div>',
            '<img class="object-cover h-28" height="230" width="640" src="./assets/images/pexels-pixabay-2152@2x.png"></img>',
            '<div class="bg-gray-800 px-5 py-8 border-l border-r border-b border-gray-700">',
              '<p class="text-sm text-gray-400 sm:h-200px sm:max-h-200px overflow-hidden leading-2"> + </p>',
              '<button class="btn-md text-gray-500 leading-none font-semibold border border-true-blue mt-8">Keep Reading</button>',
            '</div>',
          '</div>',
        '</div>'
        ].join("\n")

        $("blog-container").append(finalBlogTile);
      }
    });
  }
});

// hides the 2nd hero section when blog search bar is in focus to make room for blog tile results 
$( document ).ready(function() {
  var _mySearchField = $('blog-search').onfocus() = hideSecondHero;

  function hideSecondHero(){
    if (_mySearchField.hasFocus() ) {
      $('2nd-hero-section').style.display = "none";

    }
  }
});


