# Prior to Setup
Ensure you have:
1. [Git](https://git-scm.com/download/win)
2. [NodeJS/Npm](https://nodejs.org/en/download/current)

Use these commands in the terminal to check:
```
git -v
node -v
npm -v
```


# Setup

### ENV Varaibles
```
REACT_APP_API_BASE_URL=****
```

### Installing Packages
Next you want to install the requires javascript packages using npm.\
Once the install is complete, you can start the application:
```
npm i 
npm start
```

If NodeJS / npm is not installed, download [here](https://nodejs.org/en/download/).


# Testing
In order to run the automated tests, ensure the above Setup section has been completed.

First, ensure the applicaiton with running with:
```
npm start
```

Then, simply initiate the tests using npm:
```
npm test
```
Then, once cypress has launched, select E2E or Component testing, then select your browser of choice. From here you can select which test(s) you want to perform.

# Major Tools Used
|   Name            |                       Link                            |
|-------------------|-------------------------------------------------------|
|   ReactJS         | https://reactjs.org/                                  |
|   Cypress         | https://docs.cypress.io/                              |
|   Leaflet         | https://react-leaflet.js.org/                         |
|   Framer Motion   | https://www.framer.com/motion/                        |
|   Material UI     | https://mui.com/                                      |
