$( document ).ready(function() {
  var mainSearchField = document.getElementById("blog-search");
  var navSearchField = document.getElementById("blog-search2");
  var mobileSearchField = document.getElementById("blog-search3");

  mainSearchField.onchange = getData;
  navSearchField.onchange = getData;
  mobileSearchField.onchange = getData;

  function getData(){
    $.ajax({
      url: "http://API_ENDPOINT/"+mainSearchField.value,
      method: "GET",
      dataType: "json",
      success: function(data) {     
        blogContainer.empty()   
        paginateBlogTiles(data)
      }
    });
  }
  // Assigns all blog tiles to a page number
  function paginateBlogTiles(data) {
    const BLOG_TILES_PER_PAGE = 8
    for(var i= 0; i < data.blogs.length; i++){
      // if blog tile exceeds maximum number for current page, new page (div container) is created
      if (i % 8 === 0) {
        const PAGE_CONTAINER = [
          '<input class="hidden" id="blog-page1' + Math.floor(i / BLOG_TILES_PER_PAGE + 1) + '" type="radio" name="blog-page" checked></input>',
          '<div class="flex flex-col w-full sm:flex-row sm:flex-wrap sm:justify-between">'
        ].join("\n");
        
        blogContainer.append(PAGE_CONTAINER);
      }

      // appends html blog tiles between html page containers
      appendBlogTile(data.blogs[i])

      // check if final blog tile was just added to page
      if (i + 1 % 8 === 0) {
        blogContainer.append('</div>');
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
    
    blogContainer.append(blogTile);
  }
});

// hides the 2nd hero section when blog search bar is in focus to make room for blog tile results 
$( document ).ready(function() {
  var mainSearchField = document.getElementById("blog-search");
  var navSearchField = document.getElementById("blog-search2");
  var mobileSearchField = document.getElementById("blog-search3");
  var blogContainer = document.getElementById("blog-container");
  var landingPage = document.getElementById("landing-page");
  var searchContainer = document.getElementById("search-section");
  var blogPagination = document.getElementById("blog-pagination");
  var callToAction = document.getElementById("call-to-action");

  mainSearchField.addEventListener("focusin", hideSecondHeroSection)
  mainSearchField.addEventListener("focusout", hideSecondHeroSection)
  navSearchField.addEventListener("focusin", hideSecondHeroSection)
  navSearchField.addEventListener("focusout", hideSecondHeroSection)
  mobileSearchField.addEventListener("focusout", hideSecondHeroSection)
  mobileSearchField.addEventListener("focusin", hideSecondHeroSection)
  
  function hideSecondHeroSection(){
    var isFocused = (
      document.activeElement === mainSearchField 
      || document.activeElement === navSearchField
      || document.activeElement === mobileSearchField
    )

    if (isFocused) {
      landingPage.scrollIntoView();

      document.getElementById('2nd-hero-section').style.display = "none";
      callToAction.style.opacity = 0;
      blogContainer.style.height = "auto";
      blogContainer.style.marginBottom = "0px";
      blogContainer.style.position = "static";
      landingPage.style.height = "17rem";
      blogPagination.style.display = "block";


    } else {
      landingPage.style.height = "30rem";
      callToAction.style.opacity = 1;

    }
  }

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
    searchContainer.scrollIntoView();
    return true;
  });
});
