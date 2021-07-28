from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from starlette.responses import RedirectResponse
from typing import List

from schemas import Product, Exhibit, Display
from database import db_session, engine, ProductTable, ExhibitTable, DisplayTable

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

# Dependency
def get_db():
    try:
        db = db_session()
        yield db
    finally:
        db.close()

# root - show swagger UI
@app.get("/")
def main():
    return RedirectResponse(url="/docs/")

# get list of all products
@app.get("/products/", response_model=List[Product])
def get_products(db: Session = Depends(get_db)):
    return db.query(ProductTable).all()

# get detail for specified product id
@app.get("/products/{id}", response_model=Product)
def get_product(id: int, db: Session = Depends(get_db)):
    return db.query(ProductTable).filter(ProductTable.id == id).first()

# get list of displays for a specified product id
@app.get("/products/{id}/displays", response_model=List[Display])
def get_product_displays(id: int, db: Session = Depends(get_db)):
    return db.query(DisplayTable).filter(DisplayTable.productId == id).all()

# get list of exhibits
@app.get("/exhibits/", response_model=List[Exhibit])
def get_exhibits(db: Session = Depends(get_db)):
    return db.query(ExhibitTable).all()

# get detail for specified exhibit id
@app.get("/exhibits/{id}", response_model=Exhibit)
def get_exhibit(id: int, db: Session = Depends(get_db)):
    return db.query(ExhibitTable).filter(ExhibitTable.id == id).first()

# get list of displays for a specified exhibit id
@app.get("/exhibits/{id}/displays", response_model=List[Display])
def get_exhibit_displays(id: int, db: Session = Depends(get_db)):
    return db.query(DisplayTable).filter(DisplayTable.exhibitId == id).all()

# get list of displays
@app.get("/displays", response_model=List[Display])
def get_displays(db: Session = Depends(get_db)):
    return db.query(DisplayTable).all()

# get detail for specified display id
@app.get("/displays/{id}", response_model=Display)
def get_display(id: int, db: Session = Depends(get_db)):
    return db.query(DisplayTable).filter(DisplayTable.id == id).first()
