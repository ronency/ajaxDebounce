# jQuery.ajaxDebounce.js

Check the [demo page](http://ronency.github.io/ajaxDebounce/)

### What?
ajaxDebounce.js is a jQuery plugin that enables debouncing ajax calls, and verifies that only the latest 'success' callback actually runs.

###Why?
For cases in which a "heavy" action (ajax call) is triggered by a frequent action (key press, window resize...), and we need the action to kick in only after a "quiet" period.

A quiet (configurable) period usualy means its a good time to change what we want.

**Example:** Say we have a "Search" input. A pause in typing (lets say 250ms) is probably a good time to fetch those search auto-complete suggestions...
Now after we triggered tha AJAX call after the short pause, the user may continue to type inside the search field. Due to the nature of AJAX (the first 'A' is a big hint!), it is more than possible that the first AJAX call (the earlier) will come back **AFTER** the later call. In this case, the autocomplete suggestions will not match the current text inside the search input.

### ajaxDebounce.js to the rescue!!!
