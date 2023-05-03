# eCommerce Backend

## Description

This project is an eCommerce Backend that provides a RESTful API for an eCommerce website using Express.js, Sequelize, and MySQL. It includes models and routes for managing categories, products, and tags, allowing for CRUD operations. This backend system enables a retail company to effectively manage its products, categories, and tags.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Video Demo](#video-demo)
* [API Routes](#api-routes)
* [Technologies](#technologies)
* [License](#license)
* [Contributors](#contributors)
* [Contact](#contact)

## Installation

1. Clone the repository.
2. Install Node.js if you don't already have it downloaded on your computer.
3. Run the command `npm install` in your terminal to install all the required dependencies.
4. Create a `.env` file in the root directory and add the following info:

DB_NAME=ecommerce_db
<br>
DB_USER=your_mysql_username
<br>
DB_PASS=your_mysql_password
<br>
<br>
Replace `your_mysql_username` and `your_mysql_password` with your actual MySQL username and password.

5. Open a new terminal, navigate to the project directory.
6. Run the command `mysql -u your_mysql_username -p` and enter your MySQL password when prompted.
7. In the MySQL shell, run `CREATE DATABASE ecommerce_db;` or `source db/schema.sql` to create the database.
8. Exit the MySQL shell by typing `exit`.
9. In your terminal, run `npm run seed` to seed the database with the sample data.
10. Start the server by running `npm start`.

## Usage

Use a REST client like [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/) to test the API endpoints for performing CRUD operations on products, categories, and tags. The base URL for the API will be `http://localhost:3001/api`.

## Video Demo

[Click here](https://drive.google.com/file/d/1c6obWQQCcA3jhU1OKLym_wn1ajV9So43/view) to view the walkthrough video demonstrating the functionality of the E-Commerce Backend and covering all the technical acceptance criteria.

## API Routes

- Categories:
- `GET /api/categories`: Retrieve all categories.
- `GET /api/categories/:id`: Retrieve a single category by ID.
- `POST /api/categories`: Create a new category.
- `PUT /api/categories/:id`: Update a category by ID.
- `DELETE /api/categories/:id`: Delete a category by ID.

- Products:
- `GET /api/products`: Retrieve all products.
- `GET /api/products/:id`: Retrieve a single product by ID.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update a product by ID.
- `DELETE /api/products/:id`: Delete a product by ID.

- Tags:
- `GET /api/tags`: Retrieve all tags.
- `GET /api/tags/:id`: Retrieve a single tag by ID.
- `POST /api/tags`: Create a new tag.
- `PUT /api/tags/:id`: Update a tag by ID.
- `DELETE /api/tags/:id`: Delete a tag by ID.

## Technologies

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- dotenv
- Insomnia REST Client

## License

![MIT](https://img.shields.io/badge/license/license-MIT-blue.svg)
[MIT](https://opensource.org/licenses/MIT)

## Contributors

- Starter code provided by Georgia Tech Coding Bootcamp.
- Routes completed and tested for accuracy by [github/dereksutton](https://github.com/dereksutton).
- Extra educational resource for learning Express routes and Sequelize ORM: [Resource](https://www.udemy.com/course/nodejs-the-complete-guide/)

## Contact

Built by [github/dereksutton](https://github.com/dereksutton). You can email me [here](mailto:dereksutton86@gmail.com).
