# Project Purpose
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

# Project Startup
The project includes a web app front-end written using the React framework,
a GraphQL server, and two alternative REST servers - one in Python and
the other in Java. The web app currently only uses the GraphQL server; the other
servers were created to demonstrate alternative server ideas. None of the
servers currently implement all the operations necessary for a working product,
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

# Project Folder Tour

Brief descriptions of each of the top-level project folders.

## web-app
The web front-end is generated from the
[create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)  
[React Most Wanted template](https://github.com/TarikHuber/react-most-wanted)
which provides a base-shell application structure and the Material UI React
component library based on Google Material Design concepts. This template
provides a standard UI layout with navigation menu and header, user account
login and maintenance pages, and internationalization configuration.

The Product and Exhibit display modules in the /pages sub-folder are
connected to React Router routes defined in config/routes.js; the
routes are set as targets for the menu items defined in config/menuItems.js.
The App.js file wraps the Apollo Client around the application to provide
access to the GraphQL server.

## server-graphql
The [GraphQL server](https://graphql.org/) is built using Python.
It uses the [Flask](https://flask.palletsprojects.com/) web server for hosting
the data access end points and the
[flask-graphql](https://github.com/graphql-python/flask-graphql) interface library
for providing GraphQL support to the Flask server.
[SQLalchemy](https://www.sqlalchemy.org/) is used as the Object Relational Mapper on top of the SQLite3 database.
[Graphene](https://github.com/graphql-python/graphene) is used to build the GraphQL schema
used to model the data to be served. 

The app.py module starts the Flask-based GraphQL server. The database.py
modules provides definitions to access the SQLite3 database. The server provides
the GraphiQL user-interface for manually testing the queries and mutations
defined in the graph_ql subfolder. See the sub-project README for samples.

## server-rest
This REST server is written in Python and uses the
[FastAPI](https://fastapi.tiangolo.com/) package for easy REST service setup.
The [SQLalchemy](https://www.sqlalchemy.org/) package provides an ORM
interface to the SQLite3 database as defined in the database.py module.
The schema.py modules uses [Pydantic](https://pydantic-docs.helpmanual.io/)
to define REST end point response data models which the app.py main module
references in the routes defined by FastAPI annotations for each endpoint.
The server uses [uvicorn](https://www.uvicorn.org/), an ASGI server
implementation, to host the REST services and provides a Swagger UI
for discovering and testing endpoints.

## server-spring
This REST service is written in Java and uses
[Spring Boot](https://spring.io/projects/spring-boot) to provide the framework
for serving the REST endpoints. The [Spring Initializr](https://start.spring.io/)
was used to generate the basic project structure and build file.

The Product class models the Product table using JPA Entity annotations and maps
the model to the "products" table in the SQLite3 database.
The ProductRepository class provides the interface to the persistence layer
while the ProductController class specifies the endpoint URL paths associated
with the REST operations. The JrestArtApplication class is the main entry point
that starts the Spring Boot application, which by default uses an embedded
Apache Tomcat server to host the REST services. The HAL Explorer UI is provided
for manually testing endpoints.

## database
The database folder contains SQL scripts to define the art database and load
it with some sample data. The art sub-folder contains some art image files used
in the sample data.

## assets
The assets folder just contains some image files used by this README.
