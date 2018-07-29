# zipcode-microservice
A Node.js microservice which determines the distance for a specific zip code.

To build the project, download it into a local directory.
 
You will need to update the apiKey property in service/distance.js with your own from
https://www.zipcodeapi.com/API

You can also set environment variables for PORT and ZIPCODE_API_KEY which be read into the program at run-time

To run the program, execute the following from the commandline:

`npm install`

`npm start`

An example request which you can submit is:

`http://localhost:3000/distance/97035/97001`

And the response should be:

`{"distance":107.319}`

An incorrect request, such as one which includes an invalid zip code should result in:

`{"distance":-1}`