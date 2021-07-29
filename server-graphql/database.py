from sqlalchemy import create_engine, Column, ForeignKey, Integer, String
from sqlalchemy.orm import scoped_session, sessionmaker, backref, relationship
from sqlalchemy.ext.declarative import declarative_base

# dialect+driver://username:password@host:port/database
DB_URL = "sqlite:///artdb.sqlite3"
# engine = create_engine(DB_URL, convert_unicode=True)
engine = create_engine(DB_URL)
db_session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()

class ProductTable(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(String)

class ExhibitTable(Base):
    __tablename__ = "exhibits"

    id = Column(Integer, primary_key=True)
    venue = Column(String)
    theme = Column(String)
    start_date = Column(String)
    end_date = Column(String)

class DisplayTable(Base):
    __tablename__ = "displays"

    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey('products.id'))
    exhibit_id = Column(Integer, ForeignKey('exhibits.id'))
    price = Column(Integer)
    date_sold = Column(String)

    product = relationship("ProductTable", backref="displays")
    exhibit = relationship("ExhibitTable", backref="displays")
