This is a demo that binds a SQLite3 database to GraphQL interfaces using
SQLAlchemy's Object Relational Mapping and graphene library for building
GraphQL schema and type definitiions. It uses Flask-based web server uvicorn
for deploying GraphQL server and provides the GraphiQL interactive console
for testing.

1. Install libraries:
   python -m pip install -r requirements.txt

2. Start server:
   python app.py

3. Then browse to (GraphiQL UI):
   localhost:5000

Sample GraphQL queries:

// Get all products
{
  allProducts {
    id,
    title,
    description
  }
}

// Get products by id
{
  productById(id: 1) {
    id,
    title,
    description
  },
}

// Get products containing title
{
  productsContainingTitle(title: "Lone Dinghy") {
    id,
    title,
    description
  },
}

// Add a product
mutation {
  addProduct(input: {
    id: 4,
    title: "Sunset on Great Bay",
    description: "View from Hilton Park in Dover, NH."
  }) {
    product {
      id,
      title,
      description
    },
    status
  }
}

// Get all exhibits
{
  allExhibits {
    id,
    venue,
    theme,
    startDate,
    endDate
  }
}

// Get exhibits by id
{
  exhibitById(id: 1) {
    id,
    venue,
    theme,
    startDate
    endDate
  },
}

// Get exhibits by venue
{
  exhibitsByVenue(venue: "NHAA") {
    id,
    venue,
    theme,
    startDate,
    endDate
  },
}

// Add an exhibit
mutation {
  addExhibit(input: {
    id: 4,
    venue: "SAA",
    theme: "Reflections",
    startDate: "9/5/2021",
    endDate: "9/24/2021"
  }) {
    exhibit {
      id,
      venue,
      theme,
      startDate,
      endDate
    },
    status
  }
}

// Add a display
mutation {
  addDisplay(input: {
    id: 4,
    productId: 3,
    exhibitId: 3,
    price: 175,
    dateSold: "9/15/2021"
  }) {
    display {
      id,
      productId,
      exhibitId,
      price,
      dateSold
    },
    status
  }
}

// Modify a display
mutation {
  updateDisplay(input: {
    id: 3,
    dateSold: "9/15/2021"
  }) {
    display {
      id,
      dateSold
    },
    status
  }
}
