# jQuery.ajaxDebounce.js

Check the [demo page](http://ronency.github.io/ajaxDebounce/)

### What?
ajaxDebounce.js is a jQuery plugin that enables debouncing ajax calls, and verifies that only the latest 'success' callback actually runs.

### Why?
For cases in which a "heavy" action (ajax call) is triggered by a frequent action (key press, window resize...), and we need the action to kick in only after a "quiet" period.

A quiet (configurable) period usualy means its a good time to change what we want.

**Example:** Say we have a "Search" input field. A pause in typing (lets say 250ms) is probably a good time to fetch those search autocomplete suggestions...
Now after we triggered the AJAX call after the short pause, the user may continue to type inside the search field. Due to the nature of AJAX (the first 'A' is a big hint!), it is more than possible that the first AJAX call (the earlier) will come back **AFTER** the later one. In this case, the autocomplete suggestions will not match the current text inside the search input, and the right thing to do is probably just drop that request because it's no longer relevant (since the later AJAX cal was fired).

### ajaxDebounce.js to the rescue!!!

jQuery.ajaxDebounce.js wraps together two mechanisms:

1. Debouncing the frequent action using a configurable threshold.
2. Verifying that only the **latest** AJAX success is executed, and that an earlier calls are dropped regardless of the order they came back.
