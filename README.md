# Event Notes


## Why the script tag is at bottom of body
- The browser reads the file top to bottom and builds the elements as it goes.
- A script in the <head> runs before any of the body exsists.


## Events and listeners
- An event is something that happens: a click, a keypress, a resize.
- element.addEventListener("click", someFunction).


## The parentheses mistake
- addEventListener("click", openTruck)    <- passing the function
- addEventListener("click", openTruck())    <- passing the result of running the function



## Anonymous functions
- addEventListener("click", function () {....});
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
- A function with no name, written where it gets handed over.



## Listeners on elements I made
- An element created with createElement can have a listener.
- Add the listener before appending the element.
