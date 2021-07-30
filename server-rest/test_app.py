from fastapi.testclient import TestClient
from app import app

client = TestClient(app)

def test_main():
    response = client.get("/")
    assert response.status_code == 200

def test_getProducts():
    response = client.get("/products/")
    print(response)
    assert response.status_code == 200
