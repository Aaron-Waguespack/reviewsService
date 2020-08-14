# MAZE Mercantile - Reviews Service

**MAZE Mercantile** an e-commerce shoe retailer.
Part of a 3 person team connecting an existing React.JS front end to a database and deploying on AWS.
Personally in charge of the reviews section of the website.
Database selection and schema creation.
Connecting server and database to existing frontend.
Deploying on AWS EC2 micro service with multiple servers and a load balancer.

### Project Goals
Supporting a minimun of 100 rps with less than 1% error rate and 2000 ms latency.

### Achievements and Optimizations
Chose PostgreSQL database and optimized and indexed schema for better query times.
Seeded a PostgreSQL database with over 15 million records.
Set up backend to be scaleable with mirrored servers.
Set up redis cache for better query times.
With 2 servers (1 mirrored) I was able to get 2000 rps with less than 2000ms latency and 1% error rate with the ablilty to add mirrored servers on demand.

### Technologies Used
React, Node, Express, PostgreSQL, Redis, AWS, Artillery.io, Loader.io, New Relic

### Screenshot of Legacy Front-End
![reviews](/reviews.png)

### Usage
To run this repo, you will need to install dependencies "npm install" and run "npm start" script.
Please note server addresses will need to be updated.

### Requirements
##### dependencies":
    "babel-preset-airbnb": "^5.0.0",
    "body-parser": "^1.19.0",
    "classnames": "^2.2.6",
    "concurrently": "^5.2.0",
    "cors": "^2.8.5",
    "debug": "^3.2.6",
    "express": "^4.17.1",
    "faker": "^4.1.0",
    "jquery": "^3.5.1",
    "knex": "^0.21.1",
    "moment": "^2.27.0",
    "pg": "^8.2.2",
    "rater-js": "^1.0.1",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "sass": "^1.26.8",
    "redis": "^3.0.2",
    "redis-server": "^1.2.2"

#### devDependencies:
    "@babel/core": "^7.10.2",
    "@babel/preset-env": "^7.10.2",
    "@babel/preset-react": "^7.10.1",
    "artillery": "^1.6.1",
    "babel-core": "^6.26.3",
    "babel-loader": "^8.1.0",
    "babel-polyfill": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.1.0",
    "eslint-plugin-import": "^2.21.2",
    "eslint-plugin-jsx-a11y": "^6.3.0",
    "eslint-plugin-react": "^7.20.0",
    "eslint-plugin-react-hooks": "^2.5.0",
    "html-loader": "^1.1.0",
    "html-webpack-plugin": "^4.3.0",
    "jest": "^26.0.1",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"



