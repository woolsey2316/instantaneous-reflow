$( document ).ready(function() {
  var _mySearchField = document.getElementById("blog-search");
  var _mySearchField2 = document.getElementById("blog-search2");
  var _mySearchField3 = document.getElementById("blog-search3");
  var _blogContainer = document.getElementById("blog-container")
  _mySearchField.onchange = getData;
  _mySearchField2.onchange = getData;
  _mySearchField3.onchange = getData;

  function getData(){
    $.ajax({
      url: "http://API_ENDPOINT/"+_mySearchField.value,
      method: "GET",
      dataType: "json",
      success: function(data) {     
        _blogContainer.empty()   
        paginateBlogTiles(data)
      }
    });
  }
  // Places search results into a page container
  function paginateBlogTiles(data) {
    const BLOG_TILES_PER_PAGE = 8
    for(var i= 0; i < data.blogs.length; i++){
      // if blog tile exceeds maximum number for current page, new page (div container) is created
      if (i % 8 === 0) {
        const PAGE_CONTAINER = [
          '<input class="hidden" id="blog-page1' + Math.floor(i / BLOG_TILES_PER_PAGE + 1) + '" type="radio" name="blog-page" checked></input>',
          '<div class="flex flex-col w-full sm:flex-row sm:flex-wrap sm:justify-between">'
        ].join("\n");
        
        _blogContainer.append(PAGE_CONTAINER);
      }

      // appends html blog tiles between html page containers
      appendBlogTile(data.blogs[i])

      // check if final blog tile was just added to page
      if (i + 1 % 8 === 0) {
        _blogContainer.append('</div>');
      }
    }
  }
  // converts json data into html blog tile
  function appendBlogTile(blogTile) {
    var blogTile = [
      '<div class="bg-white dark:bg-gray-800 sm:w-almost-1/2 md:w-almost-1/3 lg:w-almost-1/4 mt-8">',
        '<div class="border-t-3' + blogTile.color + '"></div>',
        '<div class="bg-white dark:bg-gray-800 shadow px-5 py-6 border-l border-r dark:border-gray-700">',
          '<h3 class="dark:text-white text-gray-700 text-xl font-medium">' + blogTile.title + '</h3>',
          '<p class="text-sm text-gray-300 font-medium mb-2 max-h-11">' + blogTile.subtitle + '</p>',
        '</div>',
        '<img class="object-cover h-28" height="230" width="640" src="' + blogTile.imagelink + '"></img>',
        '<div class="bg-white dark:bg-gray-800 shadow px-5 py-8 border-l border-r border-b dark:border-gray-700">',
          '<p class="text-sm text-gray-500 leading-2 sm:h-199px sm:max-h-199px overflow-hidden">' + blogTile.abstract + '</p>',
          '<a href="' + blogTile.buttonlink + '" class="cursor-pointer inline-block align-middle btn-md text-gray-500 leading-none font-bold border border-maroon mt-8">' + blogTile.buttontext + '</a>',
        '</div>',
      '</div>'
    ].join("\n");
    
    _blogContainer.append(blogTile);
  }
});

// hides the 2nd hero section when blog search bar is in focus to make room for blog tile results 
$( document ).ready(function() {
  var _mySearchField = document.getElementById("blog-search");
  var _mySearchField2 = document.getElementById("blog-search2");
  var _mySearchField3 = document.getElementById("blog-search3");
  var _blogContainer = document.getElementById("blog-container");
  var _landingPage = document.getElementById("landing-page");
  var _blogPagination = document.getElementById("blog-pagination");
  var _callToAction = document.getElementById("call-to-action")
  
  _mySearchField.addEventListener("focusin", hideSecondHero)
  _mySearchField2.addEventListener("focusin", hideSecondHero)
  _mySearchField3.addEventListener("focusin", hideSecondHero)
  _mySearchField.addEventListener("focusout", hideSecondHero)
  _mySearchField2.addEventListener("focusout", hideSecondHero)
  _mySearchField3.addEventListener("focusout", hideSecondHero)
  
  function hideSecondHero(){
    var isFocused = (
      document.activeElement === _mySearchField 
      || document.activeElement === _mySearchField2
      || document.activeElement === _mySearchField3
    )

    if (isFocused) {
      document.getElementById('2nd-hero-section').style.display = "none";
      _callToAction.style.display = "none";
      _blogContainer.style.height = "auto";
      _blogContainer.style.marginBottom = "0px";
      _blogContainer.style.position = "static";
      _landingPage.style.height = "17rem";
      _blogPagination.style.display = "block";


    } else {
      _landingPage.style.height = "30rem";
      _callToAction.style.display = "block";

    }
  }
});

// scroll to top of page when a dropdown button is pressed
$( document ).ready(function() {
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
})
