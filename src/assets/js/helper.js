import { getBlogCardData } from './api'

export const kFormatter = (num) => {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
};

export const getInitialBlogCards = () => {
  var blogContainer = document.getElementById("blog-container");
  let blogTiles = JSON.parse(localStorage.getItem("blogTiles"))
  
  var blogCardCollection = [
    '<input class="hidden" id="blog-page1" type="radio" name="blog-page" checked></input>',
    '<div class="flex flex-col w-full sm:flex-row sm:flex-wrap sm:justify-between sm:items-start">'
  ].join("\n");

  for(var i= 0; i < blogTiles.length; i++){
    // adds html blog cards inside div container
    blogCardCollection += appendBlogTile(blogTiles[i])
  }
  blogCardCollection += '</div>'; 

  blogContainer.insertAdjacentHTML("afterbegin", blogCardCollection);
};

// converts json data into html blog tile
export const appendBlogTile = (blogTile) => {
  var blogCard = [
    '<div class="bg-white dark:bg-gray-800 sm:w-almost-1/2 xmd:w-almost-1/3 max-len:w-almost-1/4 mt-8">',
      '<div class="border-t-3 border-' + blogTile.color + '"></div>',
        '<div class="bg-white dark:bg-gray-800 shadow px-5 pt-3 pb-6 border-l border-r dark:border-gray-700">',
          '<div class="w-68 sm:w-60 xmd:w-56 max-len:w-52 relative">',
            '<svg viewbox="0 0 224 42" class="w-full overflow-visible text-' + blogTile.color + ' fill-current"><path d="M0 23.13C0 15.35 6.294 9.043 14.073 9.04 44.776 9.03 116.62 9 136.5 9c25.5 0 21 28.042 54.5 28 28.369-.036-128.284.157-176.935.218C6.278 37.227 0 30.916 0 23.129z" fill="url(#paint0_linear)"/><mask id="a" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="9" width="224" height="29"><rect y="9.047" width="224" height="28.188" rx="14.094" fill="url(#paint1_linear)"/></mask><g mask="url(#a)"><ellipse cx="37.5" cy="21" rx="24.5" ry="23" fill="url(#paint2_linear)"/></g><ellipse cx="37.5" cy="21.2" rx="21.5" ry="20.4"/><mask id="b" mask-type="alpha" maskUnits="userSpaceOnUse" x="18" y="3" width="39" height="37"><ellipse cx="37.5" cy="21.5" rx="19.5" ry="18.5" fill="#C4C4C4"/></mask><g mask="url(#b)"><ellipse cx="37.5" cy="21.5" rx="19.5" ry="18.5" fill="url(#paint3_linear)"/><ellipse cx="50.684" cy="40.122" rx="30.035" ry="29.496" fill="#343536"/></g><path d="M135.796 9h74.214c7.732 0 13.988 6.268 13.988 14s-6.252 14-13.984 14h-19.035c-33.841 0-29.401-28-55.183-28z" fill="url(#paint4_linear)"/><defs><linearGradient id="paint0_linear" x1="112" y1="9.047" x2="112" y2="37.235" gradientUnits="userSpaceOnUse"><stop stop-color="#555"/><stop offset="1" stop-color="#333"/></linearGradient><linearGradient id="paint1_linear" x1="112" y1="9.047" x2="112" y2="37.235" gradientUnits="userSpaceOnUse"><stop stop-color="#58585B"/><stop offset="1" stop-color="#1C1C1D"/></linearGradient><linearGradient id="paint2_linear" x1="37.408" y1="4.765" x2="37.408" y2="37.235" gradientUnits="userSpaceOnUse"><stop stop-color="#2B2B2C"/><stop offset="1" stop-color="#505153"/></linearGradient><linearGradient id="paint3_linear" x1="32.5" y1="3" x2="42.144" y2="24.937" gradientUnits="userSpaceOnUse"><stop stop-color="#868788"/><stop offset="1" stop-color="#464747"/></linearGradient><linearGradient id="paint4_linear" x1="195.113" y1="10.826" x2="195.981" y2="36.591" gradientUnits="userSpaceOnUse"><stop stop-color="#EEF0F4"/><stop offset="1" stop-color="#969B9E"/></linearGradient></defs></svg>',
            '<p name="total-votes" class="absolute w-9 sm:w-8 xmd:w-7 top-3 max-len:top-2.5 left-close text-center align-middle font-semibold text-white text-lg sm:text-sm xmd:text-sm max-len:text-xs">' + kFormatter(blogTile.expert_total_vote_count) + '</p>',
            '<div class="absolute flex flex-col items-start top-middle left-of-center-2">',
              '<h3 name="vote-type" class="leading-none text-white text-base sm:text-sm xmd:text-xs max-len:text-xs font-medium">'+ localStorage.getItem("voteType") + '</h3>',
              '<button name="switch-vote-type">',
                '<svg viewbox="0 0 8 8" class="w-3 sm:w-2.5 max-len:w-2 overflow-visible"><path d="M0 2.444V2.19c0-.209.155-.378.347-.378h5.208v-.757c0-.337.375-.505.593-.267l1.157 1.26a.403.403 0 010 .536L6.148 3.846c-.217.237-.593.071-.593-.267v-.757H.347c-.192 0-.347-.17-.347-.378zM7.06 4.84H1.852v-.757c0-.336-.374-.505-.593-.267L.102 5.077a.403.403 0 000 .535l1.157 1.261c.217.237.593.07.593-.267v-.757H7.06c.191 0 .347-.17.347-.378v-.253c0-.209-.156-.378-.347-.378z" fill="#fff"/></svg>',
              '</button>',
            '</div>',
            '<p name="score" class="absolute right-nearly top-3.5 sm:top-3 xmd:top-3 max-len:top-2.5 text-lg sm:text-base xmd:text-reg max-len:text-reg text-' + blogTile.color + '-90 font-bold text-shadow-lg">' + blogTile.expert_score + '</p>',
          '</div>',
        '<h3 class="dark:text-white text-gray-700 text-xl font-medium">' + blogTile.title + '</h3>',
        '<p class="text-sm text-gray-300 font-medium mb-2 max-h-11">' + blogTile.subtitle + '</p>',
      '</div>',
      '<img class="object-cover h-28" height="230" width="640" src="' + blogTile.imagelink + '"></img>',
      '<div class="bg-white dark:bg-gray-800 shadow px-5 py-8 border-l border-r border-b dark:border-gray-700">',
        '<p class="text-sm text-gray-500 leading-2 sm:h-199px sm:max-h-199px overflow-hidden">' + blogTile.abstract + '</p>',
        '<a href="' + blogTile.buttonlink + '" class="cursor-pointer inline-block align-middle btn-md text-gray-500 leading-none font-bold border border-' + blogTile.color + ' mt-8">' + blogTile.buttonText + '</a>',
      '</div>',
    '</div>'
  ].join("\n");

  return blogCard
};

// the initial blog cards that are displayed when the page loads
export const generateDefaultBlogCards = () => {
  // default expert
  localStorage.setItem("voteType", "Expert")

  // default blog tiles, eventually should be fetched through an api request but for now hard coded here to mimic fetch request
  var defaultBlogTiles = [
    {
      color: "maroon",
      title: "Widget Title",
      subtitle: "Supporting text and content goes here.",
      imagelink: "../images/pexels-pixabay-73910@2x.png",
      abstract: "Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec elaboraret interpretaris, sed diceret concludaturque no. Verear habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed ea cibo eripuit vituperata, pri eius debitis ne. Eos et wisi legimus, vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos harum vitae, te quod vero salutandi nam. Lorem",
      buttonlink: "/somewhere",
      buttonText: "Keep Reading",
      community_score: 1.59,
      community_total_vote_count: 11000,
      expert_score: 2.00,
      expert_total_vote_count: 499,
    }, 
    {
      color: "dark-goldenrod",
      title: "Longer Widget Title",
      subtitle: "Supporting text and content goes here.",
      imagelink: "../images/pexels-pixabay-41006@2x.png",
      abstract: "Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec elaboraret interpretaris, sed diceret concludaturque no. Verear habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed ea cibo eripuit vituperata, pri eius debitis ne. Eos et wisi legimus, vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos harum vitae, te quod vero salutandi nam. Lorem",
      buttonlink: "/somewhere",
      buttonText: "Keep Reading",
      community_score: 2.59,
      community_total_vote_count: 110,
      expert_score: 3.00,
      expert_total_vote_count: 49,
    },
    {
      color: "matrix-blue",
      title: "Widget Title",
      subtitle: "Supporting text and content goes here.",
      imagelink: "../images/pexels-pixabay-2152@2x.png",
      abstract: "Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec elaboraret interpretaris, sed diceret concludaturque no. Verear habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed ea cibo eripuit vituperata, pri eius debitis ne. Eos et wisi legimus, vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos harum vitae, te quod vero salutandi nam. Lorem",
      buttonlink: "/somewhere",
      buttonText: "Keep Reading",
      community_score: 3.59,
      community_total_vote_count: 11000,
      expert_score: 4.00,
      expert_total_vote_count: 499,
    },
    {
      color: "windsor-tan",
      title: "Widget Title",
      subtitle: "Supporting text and content goes here.",
      imagelink: "../images/pexels-pixabay-2166@2x.png",
      abstract: "Lorem ipsum dolor sit amet, vel accumsan liberavisse ex, ea nec elaboraret interpretaris, sed diceret concludaturque no. Verear habemus sea ut. His nibh scripta in. In sea vocibus facilisis. Sed ea cibo eripuit vituperata, pri eius debitis ne. Eos et wisi legimus, vel cu paulo doctus vidisse. Iudico dicant nostrum nec an, in eos harum vitae, te quod vero salutandi nam. Lorem",
      buttonlink: "/somewhere",
      buttonText: "Keep Reading",
      community_score: 4.59,
      community_total_vote_count: 11,
      expert_score: 5.00,
      expert_total_vote_count: 1,
    }
  ]

  localStorage.setItem("blogTiles", JSON.stringify(defaultBlogTiles))
};

// binds a fetch call to an on change event listener associated with a text input
export const assignListenerToSearchBars = () => {
  var mainSearchField = document.getElementById("blog-search");
  var navSearchField = document.getElementById("blog-search2");
  var mobileSearchField = document.getElementById("blog-search3");

  mainSearchField.onchange = getBlogCardData;
  navSearchField.onchange = getBlogCardData;
  mobileSearchField.onchange = getBlogCardData;
};

// Assigns all blog tiles to a page number
export const paginateBlogTiles = (data) => {
  const BLOG_TILES_PER_PAGE = 8
  for(var i= 0; i < data.blogs.length; i++) {
    // if blog tile exceeds maximum number for current page, new page (div container) is created
    if (i % 8 === 0) {
      const PAGE_CONTAINER = [
        '<input class="hidden" id="blog-page' + Math.floor(i / BLOG_TILES_PER_PAGE + 1) + '" type="radio" name="blog-page" checked></input>',
        '<div class="flex flex-col w-full sm:flex-row sm:flex-wrap sm:justify-between sm:items-start">'
      ].join("\n");
      
      blogContainer.insertAdjacentHTML("beforeend", PAGE_CONTAINER);
    }

    // appends html blog tiles between html page containers
    appendBlogTile(data.blogs[i])

    // check if final blog tile was just added to page
    if (1 + i % 8 === 0) {
      blogContainer.insertAdjacentHTML("beforeend", '</div>');
    }
  }
};

export const hideSecondHeroSection = () => {
  var blogContainer = document.getElementById("blog-container");
  var landingPage = document.getElementById("landing-page");
  var searchContainer = document.getElementById("search-section");
  var blogPagination = document.getElementById("blog-pagination");
  var callToAction = document.getElementById("call-to-action");
  
  var isFocused = (
    document.activeElement === mainSearchField 
    || document.activeElement === navSearchField
    || document.activeElement === mobileSearchField
  )

  if (isFocused) {
    document.getElementById('2nd-hero-section').style.display = "none";
    callToAction.style.opacity = 0;
    blogContainer.style.height = "auto";
    blogContainer.style.marginBottom = "0px";
    blogContainer.style.position = "static";
    landingPage.style.height = "17rem";
    blogPagination.style.display = "block";

    searchContainer.scrollIntoView();

  } else {
    landingPage.style.height = "30rem";
    callToAction.style.opacity = 1;

  }
};

// When search bars are in focus, the web page hides the second hero section to make room
// for the blog card search results that a user is currently searching for.
export const addSearchFocusListeners = () => {
  var mainSearchField = document.getElementById("blog-search");
  var navSearchField = document.getElementById("blog-search2");
  var mobileSearchField = document.getElementById("blog-search3");

  mainSearchField.addEventListener("focusin", hideSecondHeroSection)
  mainSearchField.addEventListener("focusout", hideSecondHeroSection)
  navSearchField.addEventListener("focusin", hideSecondHeroSection)
  navSearchField.addEventListener("focusout", hideSecondHeroSection)
  mobileSearchField.addEventListener("focusout", hideSecondHeroSection)
  mobileSearchField.addEventListener("focusin", hideSecondHeroSection)
  
};

export const bindScrollListeners = () => {
  var searchContainer = document.getElementById("search-section");

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
};
