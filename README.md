# Tomas Babkine-Di Caprio - Mark McGregor
# ITEC4012 - Assignment 03 - Fall 2021

For this assignment, students had a to create a Firebase database and connect it to a simple front-end. 

In our case, we designed a database to store our grocery list items!

Since we did this project as a team, we also added a new item page to upload any other ingredients we might need using the POST method.

## Contributions

While we both tackled difficult tasks together and helped debug the other person's code when necessary, here is a brief outline describing what was done by each member:

**Mark** - Global context, structure of the pet detail page, filling the initial database with dummy data for testing purposes.

**Tomas** - Home page, styling of the web app, new item page, new item form back-end, set up of the GitHub repo.

## Components

Here is how our app is broken into components:

**1. pages / home-page**
This component is rendered when the user first opens the app using a browser. The homepage displays all the grocery items stored in the database as well as quick information that would be useful to know at a glance

**2. pages / GroceryDetailPage**
This component displays more information concerning the items stored in the database. Each item gets its own details page that is rendered using its id parameter and the data stored in the global context. To render this page and the data concerning a grocery item, click on the name of the desired grocery item.

**3. pages / NewItemPage**
This page allows the user to add a new grocery item to the database. On submit, the user is then redirected to the homepage where their new item is now added to the list.

**4. Navbar**
Since this item can be found on every page of the app, it was created as its own component.

**5. GroceryItem**
This component is rendered on the homepage and displays quick information concerning each grocery item. It also contains a link to an individual page which displays more information for every item stored in the database.

## Global Context

To access all of the data concerning the grocery items at every level of the app, this information is stored in the global context which is then wrapped around the app. This is done when the information is first fetched from the API, but also used as a state, and updated as soon as the information in the database is modified or when a new item is added.
