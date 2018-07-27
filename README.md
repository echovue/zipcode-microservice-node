# zipcode-microservice
A Node.js microservice which determines the distance for a specific zip code.

To build the project, download it into a local directory.
 
You will need to update the apiKey property in ***Update*** with your own from
https://www.zipcodeapi.com/API

To run the program, execute the following from the commandline:

`npm install`

`npm start`

An example request which you can submit is:

`http://localhost:3000/distance/97035/97001`

And the response should be:

`107 miles`

An incorrect request, such as one which includes an invalid zip code should result in:

`Unable to calculate distance`

https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd