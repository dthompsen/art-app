A simple demonstration SpringBoot REST server using a sqlite3 database for
persistence and HAL Explorer for exercising server.

Currently only does CRUD operations for Product table defined in theme
art.sqlite3 database.

Requires: JDK, Gradle.

1. Build and start server:
   gradlew run

2. Then browse to (HAL Explorer):
   localhost:8080

3. In HAL Explorer, try following API URL (a GET call) to return product list:
   /products
