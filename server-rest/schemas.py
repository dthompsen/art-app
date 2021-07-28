from pydantic import BaseModel

class Product(BaseModel):
    id: int
    title: str
    description: str

    class Config:
        orm_mode = True

class Exhibit(BaseModel):
    id: int
    venue: str
    theme: str
    startDate: str
    endDate: str

    class Config:
        orm_mode = True


class Display(BaseModel):
    id: int
    productId: int
    exhibitId: int
    price: int
    dateSold: str

    product: Product
    exhibit: Exhibit

    class Config:
        orm_mode = True
