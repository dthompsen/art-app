import graphene
from database import db_session, ProductTable, ExhibitTable, DisplayTable
from graph_ql.typedefs import Product, AddProductFields, Exhibit, AddExhibitFields, Display, AddDisplayFields


class AddProduct(graphene.Mutation):
    product = graphene.Field(lambda: Product)
    status = graphene.Boolean()

    class Arguments:
        input = AddProductFields(required=True)

    @staticmethod
    def mutate(self, info, input):
        product = ProductTable(**input)
        db_session.add(product)
        db_session.commit()
        status = True
        return AddProduct(product=product, status=status)

class AddExhibit(graphene.Mutation):
    exhibit = graphene.Field(lambda: Exhibit)
    status = graphene.Boolean()

    class Arguments:
        input = AddExhibitFields(required=True)

    @staticmethod
    def mutate(self, info, input):
        exhibit = ExhibitTable(**input)
        db_session.add(exhibit)
        db_session.commit()
        status = True
        return AddExhibit(exhibit=exhibit, status=status)

class AddDisplay(graphene.Mutation):
    display = graphene.Field(lambda: Display)
    status = graphene.Boolean()

    class Arguments:
        input = AddDisplayFields(required=True)

    @staticmethod
    def mutate(self, info, input):
        display = DisplayTable(**input)
        db_session.add(display)
        db_session.commit()
        status = True
        return AddDisplay(display=display, status=status)

class Mutation(graphene.ObjectType):
    addProduct = AddProduct.Field()
    addExhibit = AddExhibit.Field()
    addDisplay = AddDisplay.Field()
