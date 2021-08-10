This is a demo that uses a React UI and GraphQL server.
It provides simple artwork management. I allows the artist to create a list
of their artwork "products", create "exhibit" entries where they plan to
show their artwork, and select specific products to be shown at each exhibit.

The project includes both GraphQL and REST servers to demonstrate how these
types of servers are constructed, but only the GraphQL server is implemented
in the UI.

1. Setup server-graphql - install libraries and start server:
   python -m pip install -r requirements.txt
   python app.py

2. Setup client-web - install libraries and start app:
   yarn install
   yarn start
