import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType
from database import ProductTable, ExhibitTable, DisplayTable

class Product(SQLAlchemyObjectType):
    class Meta:
        model = ProductTable

class Exhibit(SQLAlchemyObjectType):
    class Meta:
        model = ExhibitTable

class Display(SQLAlchemyObjectType):
    class Meta:
        model = DisplayTable


class ProductFields:
    id = graphene.Int()
    title = graphene.String()
    description = graphene.String()

class AddProductFields(graphene.InputObjectType, ProductFields):
    pass


class ExhibitFields:
    id = graphene.Int()
    venue = graphene.String()
    theme = graphene.String()
    startDate = graphene.String()
    endDate = graphene.String()

class AddExhibitFields(graphene.InputObjectType, ExhibitFields):
    pass


class DisplayFields:
    id = graphene.Int()
    productId = graphene.Int()
    exhibitId = graphene.Int()
    price = graphene.Int()
    dateSold = graphene.String()

class AddDisplayFields(graphene.InputObjectType, DisplayFields):
    pass
