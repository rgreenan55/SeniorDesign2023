# Boiler Plate
Note : Used [this](https://mrseanbaines.medium.com/how-to-write-a-minimal-react-boilerplate-from-scratch-85ba17757040) tutorial to created this boilerplate - and made my own adjustments.

### Prior to Setup
Ensure you have:
- [Git](https://git-scm.com/download/win) downloadeded and setup on your computer. ```git -v``` in terminal to check.
- [NodeJS/Npm](https://nodejs.org/en/download/current) downloaded and setup on your computer. ```node -v``` and ```npm -v``` in terminal to check.

### Usage
To retrieve and use the react-boilerplate.

First create a new repository in github, then, create a folder and run these commands within it:
```
git clone git@github.com:rgreenan55/react-boilerplate.git .
git remote set-url origin <ssh of repo you created>
npm i
git add .
git commit -a -m 'Msg'
git push origin master
```

### File Changes
- In [index.html](./src/index.html) adjust the title tag.
- In [package.json](./package.json) adjust the name attribute.
- In [package-lock.json](./package-lock.json) adjust the name attribute.

### Commonly Used Additions
- [MaterialUI](https://mui.com/material-ui/getting-started/installation/) ```npm install @mui/material @emotion/react @emotion/styled```
- [React Router](https://reactrouter.com/en/main/start/tutorial) ```npm install react-router-dom```

### Once Setup - Delete Everything Above Here

# Setup

### Ensure you have npm installed
``` npm -v ```

If NodeJS / npm is not installed, download [here](https://nodejs.org/en/download/)



# Tools

### ReactJS
https://reactjs.org/
