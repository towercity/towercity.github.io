# story-organizer

A simple angular 2 application which organizes stories by category and series

# To implement

* Function to add new entries to stories object
* Local storage (or server storage)
  * Store the STORIES array to local storage ("local.stories.object")
  * for getStories functions on each page, check if its stored locally first. if so, use local array; if not, run the story service
  * do the same for the IDS object, especially once it is made editable
* Option to import/export stories & ids objects to file
* Make stories w/o series visible on series page
* Use bootstrap dropdowns to select series and status
  * Keep current angular display code for dropdown menu
  * Move through ids arrays to display dropdown items
  * Function to change ser/status when name is pressed
* (Much later:) add a navbar to access many features (eg new entry)
