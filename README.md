# DISCLAIMER
This is the development branch for the final submission for the lecture "moderne webframeworks" lead by Prof. Dr. Christian Gawron on the south westphalia university of applied sciences. Other branches may contain a more up-to-date version of the project.

# Description of the project
This project is a web application whose purpose is to give an overview over the api documentation from FRIDA. The website gives a short introduction to the defined APIs, gives the opportunity to download the definitions or to explore them via Swagger. There is also the opportunity to explore which companies already implemented which APIs in their infrastructure.

# How to run?
This is an standard angular project. To run the application move in the marketplace/marketplace directory and run ```npm install```. After the successful installation you can run ```npm run start``` to run the application. Alternatively you can start the application with ssr enabled when you run ```npm run serve:ssr:marketplace```.

# Deployment
The marketplace is deployed with the help of AWS Amplify. The deployment is described within the aplimfy.yml. The GitHub repository is connected with AWS Amplify via the AWS console. On every commit to the main branch the marketplace is deployed automatically.