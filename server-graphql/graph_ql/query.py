import graphene
from database import ProductTable, ExhibitTable, DisplayTable
from graph_ql.typedefs import Product, Exhibit, Display


class Query(graphene.ObjectType):

    # Products - works of art

    all_products = graphene.List(Product)
    product_by_id = graphene.List(Product, id=graphene.Int())
    products_containing_title = graphene.List(Product, title=graphene.String())

    @staticmethod
    def resolve_all_products(parent, info, **args):
        return Product.get_query(info).all()

    @staticmethod
    def resolve_product_by_id(parent, info, **args):
        id = args.get("id")
        query = Product.get_query(info)
        return query.filter(ProductTable.id == id)

    @staticmethod
    def resolve_products_containing_title(parent, info, **args):
        title = args.get("title")
        query = Product.get_query(info)
        return query.filter(ProductTable.title.contains(title)).all()

    # Exhibits - place and time period art is exhibited

    all_exhibits = graphene.List(Exhibit)
    exhibit_by_id = graphene.List(Exhibit, id=graphene.Int())
    exhibits_by_venue = graphene.List(Exhibit, venue=graphene.String())

    @staticmethod
    def resolve_all_exhibits(parent, info, **args):
        return Exhibit.get_query(info).all()

    @staticmethod
    def resolve_exhibit_by_id(parent, info, **args):
        id = args.get("id")
        query = Exhibit.get_query(info)
        return query.filter(ExhibitTable.id == id)

    @staticmethod
    def resolve_exhibits_by_venue(parent, info, **args):
        venue = args.get("venue")
        query = Exhibit.get_query(info)
        return query.filter(ExhibitTable.venue == venue).all()


    displays_by_exhibit_id = graphene.List(Display, id=graphene.Int())

    @staticmethod
    def resolve_displays_by_exhibit_id(parent, info, **args):
        id = args.get("id")
        query = Display.get_query(info)
        return query.filter(DisplayTable.exhibit_id == id).all()
