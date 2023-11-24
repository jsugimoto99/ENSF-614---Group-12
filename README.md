# ENSF-614_Group-12

## How to create database

1. Clone the repository to your local machine.

2. Start the MySQL server on your local machine.

3. Open the file CloudNineBackend/src/main/resources/application.properties and enter your Db server details. For `db.user` and `db.password`, enter your DB user login details. Please use a user that has all the CRUD access, like `root`.

4. Connect to your MySQL server using an user used in step 3.

5. Run [this](CloudNineDatabase.sql) script on the MySQL server. This script will create a schema **cloudnine**, create all necessary tables, and load them with some dummy data.
