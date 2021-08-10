# Parks Event Finder

## [View The Deployed Site Here](https://parks-event-finder.herokuapp.com/)

## [National Parks Service API](https://www.nps.gov/subjects/developer/api-documentation.htm#/parks/getPark)

## Overview

Parks Event Finder is an app created with ReactJS and the National Parks Service API. The app allows the user to select their state and search through events in that state, view detail pages for the events and the parks that the events are held in, and save their favorite parks and events.

## Set Up

To run this app locally, you will need a National Parks Service API key. Visit [this link](https://www.nps.gov/subjects/developer/get-started.htm) and input your information to get an API key.

Clone this repo down, and `cd` into it.

Run `npm install`

Run `touch .env` in the root folder of the directory, and paste your API key into it assigned to the following variable:
```
REACT_APP_PARKS_API_KEY=<your api key>
```

Run `npm start`

## Future Extensions

 - [ ] Load image associated with park the event is being held in if there is no image associated with the event
 - [ ] Add more fleshed-out search functionality, including being able to select multiple states
 - [ ] Save bookmarked events & parks to localStorage so they persist on reload
 - [ ] Update the UI to use more intuitive icons (bookmark to save events/parks, etc.)
 - [ ] Add a 'share' icon to event cards and event detail pages that makes the links easier to share with others

## Tools & Technologies

 - React
 - React Router
 - Cypress
 - CSS

**************************************************************************
###### This project was created for [Turing School of Software and Design](https://turing.io/)
