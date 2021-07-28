import graphene
from graph_ql.query import Query
from graph_ql.mutation import Mutation
from graph_ql.typedefs import Product, Exhibit, Display


schema = graphene.Schema(
    query=Query, mutation=Mutation, types=[Product, Exhibit, Display]
)
