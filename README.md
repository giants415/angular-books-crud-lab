<!--
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Angular Book App


### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

- Deliberate practice is a really effective way to learn. 
- You've been working with a MEAN stack app (where you control the server). Many Angular apps, including this book app, interact with external APIs. Practice both!
- You'll be expected to be able to build an Angular app from scratch!

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

- set up an angular app .
- use `$http` to access a RESTful API.
- practice routing in Angular using `ngRoute`.


In this lab, you'll be creating a simple library app to keep track of books.

When a user goes to `/`, they should see a list of all of the books in the API. When a user goes to `/books/:id`, they should see a single book. On the `/books/:id` page, a user should be able to edit or delete a book.

Your data (a list of books) is available at `https://super-crud.herokuapp.com/books`. You and your classmates will all be working with the shared API; keep that in mind as you make changes.  If there are no books left or far too many books, feel free to reset the database by clicking [the reset button](http://super-crud.herokuapp.com/reset). Don't do this without warning your colleagues, though. They might be puzzled why their newly created book resources aren't appearing in the database.

## Expectations

Your finished product will:

  1. Route the user to an index page at `/`. That page will:
    * display all of the books.
    * show the image, title, author, and release date of each book.
    * include a link to the show book page on the title of each book.
  2. Route the use to a show book page at `/books/:id` for any existing book id. The show page will:
    * display all of the data about the specific book.
    * have a delete button that deletes the specific book from the database and, when successfully deleted, redirects the user to the home page.
    * have an edit button that reveals a form for the user to edit the attributes of the book.
    * The form will have a save button that sends the edits to the database and, when successfully updated, redirects the user to the home page.
    * have a cancel button that does not save any of the changes the user just made.

## Getting Started

1. Fork and clone this repo.
2. Change directories into `angular-books-crud-lab`.
3. Run `budo -P --host=localhost --open` from the Terminal to start a simple server, and open your app in the browser.
  * You will see errors in your console now.
1. You **must** setup `ngRoute before you jump into coding:
  * Add the CDN for `ngRoute` in the main `index.html`.
  * Add the `ng-view` directive inside the Bootstrap `.col-md-6` in the main `index.html`
  * Finally, configure your home `/` route in `app.js`
    * Which books template will you display?
    * Which controller will it use?
    * What will that controller be named "as"?

2. If you see no errors, you're ready to start CRUDing! Build your templates; build your controllers; add a show route; win.

## Stretch Challenges

2. **Allow the user to edit the book image:** allow the user to change the URL for the book image.
3. **Add filters to organize the books index page:** add a search bar to filter the books by your search, or buttons to sort them alphabetically by author name or book title.
