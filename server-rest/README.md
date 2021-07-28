A simple demonstration REST server utilizing a sqlite3 database, with SQLAlchemy (ORM) and FastAPI libraries.
Uses Flask-based uvicorn server to deploy FastAPI interface - includes Swagger interactive REST API interface.

1. Install libraries:
   python -m pip install -r requirements.txt

2. Start server:
   python -m uvicorn app:app --reload

3. Then browse to (Swagger UI):
   localhost:8000/docs
