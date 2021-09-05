# Mailroom

## What is Mailroom?
Mailroom is a package tracker web application that helps you keep track of all of your package links. (It currently only supports UPS, FEDEX, NAVAR and ONTRAC).
Mailroom use webscraping teachnologies to get the status of your package link and updated the corresponding row.

## Technologies Used (PERN Stack)
### Frontend
- React.js
- Material-UI
- React-Router-DOM
### Backend
- Node.js
- Express.js
- Bcrypt
- Bitly
- CORS
- Passport.js
- geckodriver
- sequelize
- pg
- webdriverio

## Challanges
There were many challenges faced during the creation of this app, such as the technologies to use or figuring out the design. This project started off with a tech stack
React.js and Python with Flask. During the course of the project, I've decided switch to the PERN Stack (Postgresql, Express.js, React.js, Node.js) since scraping data 
from Single Page Application was difficult with beautifulsoup4 and selenium and I would always end up with no success. With webdriverio, I was able to obtain 
the delivery status from sites such as UPS, FEDEX, ONTRAC and Navar and was able to create something working. Another challenge was learning how to deploy my app onto
Heroku. There were lots of problems with CORS but with some reason and a few youtube videos, I was able to understand how it works and how to get it working.

## Summary
The biggest learning outcome from working on this project is how important it is to choose the right technology for the proper project. Leveraging the strengths and
weaknesses of different technologies can help make development easier or harder depending on the scope of the project. Out of the few projects I've worked on, this
was definitely the most fun. Getting to work on both the frontend and backend taught me a lot about the client and server architecture and how to communicate between
each other. I learned how to create a REST api and implemented CRUD operations.

## Future of Mailroom
Though the project is published online, I will continue to add a few more quality of life features over time and try to add more support to other tracking links, such
as USPS.
