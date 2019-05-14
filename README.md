# Interview Exercises

## Exercise 1

Implement **using CSS only** a responsive nav:
* On both narrow and wide screens, implement a stick-to-top blue nav
* On both narrow and wide screens, "Login" button should be on the far right
* On wide enough screens, displays a single stick-to-top nav with horizontally left-aligned links
* On smaller screens, display a left-aligned button (preferably hamberger) that toggles a sidebar nav (where the nav links should now reside)
* Add any mobile friendly head tags you see fit

Bonus: dont alter any of the markup / add / remove HTML attributes

## Exercise 2

Extract as much as you see fit from `share-1.jsx`, `share-2.jsx`, `share-3.jsx` into a shared library: `share-utils.js`.
Feel free to use modern syntax as well as have typos, this is more to excercise refactoring / code re-use.


## Exercise 3

Implement a `ApiCache` object/class that achieves the functionality (as seen in the bottom of the file):
* Makes an API request on the first call to a specific `endpoint` (string) (you can use the `fetchMock` as the low level request / response).
* On subsequent requests to that API endpoint, returns the cached version of the previous response.

Feel free to use modern syntax as well as have typos, this is more to excercise understanding promises / creating an clean and friendly utility.
