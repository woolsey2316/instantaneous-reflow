import { 
  addSearchFocusListeners,
  assignListenerToSearchBars,
  bindScrollListeners,
  generateDefaultBlogCards,
  getInitialBlogCards,
  } from './helper'

$( document ).ready(function() { 
  // initial space tech cards on main page 
  generateDefaultBlogCards()
  getInitialBlogCards()

  // when text changes, filter existing space tech card collection
  assignListenerToSearchBars()

  addSearchFocusListeners()

  // pagination buttons also scroll to top of page in addition to changing the page number 
  bindScrollListeners()
  
});
