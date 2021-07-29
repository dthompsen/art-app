from flask import Flask
from flask_graphql import GraphQLView as View
from flask_cors import CORS
from database import db_session
from graph_ql.schema import schema

app = Flask(__name__)
# allow CORS for all domains on all routes
CORS(app)
app.debug = True
useGraphiQL = False
app.add_url_rule("/", view_func=View.as_view("graphql", graphiql=useGraphiQL, schema=schema))

@app.teardown_appcontext
def shutdown_session(Error=None):
    db_session.remove()

def main():
    app.run()

if __name__ == "__main__":
    main()
