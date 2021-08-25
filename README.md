This is a work-in-progress demonstration project to explore the concept of web
application designed for artists to use in managing their inventory of artworks
and the display of those pieces at specific exhibits. At this time, it is an
incomplete application so is not useful as an actual product. Rather, I use it
to develop ideas on how to implement such an application using different
frameworks.

The application is intended to provide simple artwork management. The concept
allows the artist to create a list of their "products" (inventory of art
works), create "exhibit" entries where they plan to show their artwork (for
example the "On the Water" theme show at the Seacoast Artist Association
gallery), and then select specific products to be "displayed" at each exhibit
for a specified price.

![Products screen](/assets/Screen-Products.png)

![Exhibits screen](/assets/Screen-Exhibits.png)

The project includes a web app front-end written using the React framework,
a GraphQL server, and two alternative REST servers - one in Python and
the other in Java. The web app currently only uses the GraphQL server; the other
servers were created to demonstrate alternative server ideas. None of the
servers currently implement the CRUD operations necessary for a working product,
but the GraphQL server does provide listings of products and exhibits.

The web-app and GraphQL server require:
- Node.js (and npm and yarn build tools)
- Python (and pip install tool)

A rudimentary demo can be executed using the following steps:

1. Setup server-graphql - install libraries and start server:
   python -m pip install -r requirements.txt
   python app.py

2. Setup web-app - install libraries and start app:
   yarn install
   yarn start
