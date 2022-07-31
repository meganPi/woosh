# Software Requirements Documentation

Below is the documentation for the software requirements for the Full-Stack Online Store I will be building called Woosh.

### User Requirements

The user will be able sign up and login to an online store to view various products that are for sale on Woosh. They will then be able to add these items in varying quantities to their cart. The online store will be linked to PayPal to enable the user to make online purchases.

The administrator of the website will be able to add and remove products from the store, they will be able to change the price of an item. The administrator will be able to see which customers' payments have been made and which are still pending, and they will be able to see if the item has been delivered or not.

### System Architecture

#### Web Stack

I will be using the MERN stack:

1. MongoDB : To connect to a database to allow users to sign up and login to the online store, and to      allow for an administrator to login access the backend of the site to make changes. (The MongoDB database ensures that the admin and user login information is securely stored)

2. Express : To create a custome server for the online store. It provides a robust set of features for this Online Store as it is a very flexible and minimal Node.js web application framwork.

3. React : To build the front-end (client side) of the online store. I will be using Create React App (CRA) as this online store will be a single-page app that loads a single HTML page, and all the necessary assets (such as the JavaScript and CSS) required for the application to run. Using Create REact App means that the page or subsequent pages do not require a round trip to the server when an interaction is made, so this means that the page is not relaoded.

4. Node.js : To allow an open-source and cross-platform JavaScript runtime environment for the online store.

#### App Deployment

I will be deploying this app to Heroku, as it is an easy to use container-based cloud Platform as a Service (PaaS). It will allow for easy deployment, scaling and maintenance of the online store. 

#### App Styling

I will be styling the Online store using Cascading Style Sheets Modules (CSS Modules), as it is the most convenient and msot efficient way to style each React Component. This is the best way to style the online store as there will be no styling conflicts; clear dependencies and it's modular and reusable.

### System Requirements Specification

#### How the Web Application Will Work

The web application will be split up into two parts, namely the frontend and the backend.

In order for the Online Store to be loaded the user must type npm start into the frontend and backend terminal. They should then open up the localhost:3000 which will display the online store.

The administrator/ owner of the online store will be able to login using their unique username and password, which will give them access to the "backend" of the site. There the administrator will be able to add all of the products that they wish to sell, along with the price of each item. The adminstrator will be able to place each product in the appropriate categories.

A new user will be able to create an account by signing into the online store by either using Google, Facebook or their own unique username and password. The user will be able to view all of the products in all the categories. If the user is interested in buying an item, they will be ableto add it to their cart.
In the cart they will be able to increase or decrease the quantity of each item, or they will be able to remove the item from their cart completely.

The user will then be able to 'checkout', where they will have to fill in their personal information.
Once the user has completed that step they will then be redirected to the payPal website, where they will complete the purchase.

A user will be able to write a review on the products that they purchased, which will be available for any customer to read.

The administrator of the site can then access the "backend" of the site, where they will be able to view the products and the orders. If they navigate to the orders, they will be able to see who has pkaced an order, on which date, the total amount of their order, if the customer has paid, and if the order has been delivered. The administrator will alos be able to delete these orders if necessary.

#### Who Will Use The Application & How Will They Benefit From Using It

Any customer who wishes to purchase items online, it is not specific to any end-user. 
Each category could be targeted towards a specific audience if the Client wishes to do Search Engine Optimisation. 

A customer will benefit from this online store as the prices of the items will be at a wholesale price, compared to when these items are bought in a brick and mortar store (where the items are often marked up). It is more convenient as the items will be delivered to the customers, so they do not have to leave the comfort of their own home, especially during these times.

#### User Stories

* As a customer, I need to authenticate myself so that I can see my account details and shopping cart.
* As a customer searching for a product, I need to be presented the most appropriate choices, so that I am likely to find what I am looking for.
* As a customer trying to register for an account, I need to be informed clearly if I am making any errors, so that I can fix them quickly.
* As a store adminstrator, I need to upload and delete products, so that I can keep my store up to date.
* As a store administrator, I need to change the prices of my items, so that I can have specials on my site.
* As a customer, I need to rate and review the products, so that I can let other customers know what the products are like.

#### Software Competitors

My direct competitor for this web application is Wish. They are an online store that imports items from China at affordabel prices.

My web application will be different, in that:
1. It will be easier to use, and it will have a cleaner look and feel.
2. The items will be cheaper as it will only be from local suppliers in South Africa.
3. The items will be high quality and in a working condition.
4. The online store, and delivery will be more reliable, as it will all be local and the customer does not risk losing their items at the borders/customs.
5. The customers will be supporting local brands.
6. The user journey will be simpler and easier to navigate and understand.

#### Functional Requirements

* The actor signs up to the online store by creating an account with a valid username and password, or by using their Facebook or Google account.
* The username and password should be stored on the database to allow an actor to access their personal account and shopping cart.
* The actor can select items from the online store and add it to their cart.
* The actor can increase or decrease the quantity of each item in their cart.
* The actor can delete an item in their cart.
* The actor can checkout the items and will be redirected to a PayPal website to make the payment.
* The actor can leave a review of the any item of their choice on the online store.
* The administrator logs in with a unique username and password.
* The administrator can add and remove products from the online store.
* The administrator can change the price of the products on the online store.
* The administrator can track which customers have placed orders.
* The administrator can track which customers have paid for their items.
* The administrator can indicate whether or not the products have been delivered.
* The administrator can remove customers and order from the list.

#### Non-Functional Requirements

* Use the micro-service architecture pattern.
* The application is built using the full MERN stack:
    * MongoDB
    * Express
	* React.js
    * Node.js
* The app shall be available at all times unless maintenance has to be done. Then separate sections will be updated/ maintained at diifferent times, to ensure the site is not interrupted for any customer visiting the online store.
* The app shall achieve a 98% up time.
* The app should load within 3 seconds upon opening it.
* The app should be updated within 2 seconds upon a user signing up, login in, viewing the products,    navigation to the cart, and doing the payment processes.
* The data will be stored on a secure MongoDB database with only admin having access to it.
* The database will have a storage capacity of up to 5GB.
* The application will back-up once every 24-hours.
* The user can sign-up using 3 passport strategies (Google, Facebook, Normal username and password).
* Passwords shall never be viewable at the point of entry or any other time.
* The access permissions for the systems data may only be changed by the system’s data administrator.

#### How to install and use this web app

### 1. Install MongoDB

Download it from here: https://docs.mongodb.com/manual/administration/install-community/

### 2. Run Backend

```
$ npm install
$ npm start
```

### 3. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 4. Create .env file with the following information:

MONGODB_URL= your MONGODB_URL
JWT_SECRET= your JWT_SECRET

GOOGLE_CLIENT_ID = your GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET = your GOOGLE_CLIENT_SECRET
CALLBACK_URL = your CALLBACK_URL

### 5. Create Admin User

- Admin user login:
- Email: admin@example.com
- Password: 12345

### 6. Login as Admin

- Run http://localhost:3000/signin
- Enter admin email and password and click signin

### 7. Create Products

- Run http://localhost:3000/products
- Click create product and enter product info

### 8. Register as customer

- Run http://localhost:3000/signin
- Enter unique user email and password and click signin

### 9. Shop for products

- View and add items to cart
- Proceed to checkout and pay via paypal.

#### Security

- I have placed all of my API keys in a .env file, which will be placed in a git ignore file, so no one else can access my API keys.

### Problems faced

I was unable to add the google and facebook passport Auth0 to my app, as it kept on resulting in my app crashing.

#### Deployment

- The app has been pushed to github:
- https://github.com/meganPi/woosh

- The app has been deployed to heroku:
https://morning-inlet-69381.herokuapp.com/

(It does not want to successfully deploy to heroku, so i have uploaded a video of how my app works.)
