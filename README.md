# Cab Service- Basic Node-Express Setup
### Application Overview
- You have a fleet of cabs at your disposal, and each cab has a location, determined by it’s latitude and longitude.
- A customer can call one of your taxis by providing their location, and you must assign the nearest taxi to the customer.
- Some customers are particular that they only ride around in pink cars, for hipster reasons. You must support this ability.
- When the cab is assigned to the customer, it can no longer pick up any other customers
- If there are no taxis available, you reject the customer's request.
- The customer ends the ride at some location. The cab waits around outside the customer’s house, and is available to be assigned to another customer.


### Setup
1. Clone the repository.
2. update/modify - cabs data under models>data>cabs.json
3. Run `npm install` to install all dependencies.
4. Run `npm start` to run the project.



### Book a cab
http://localhost:3000/ride/start/?lattitude={lattitude}&longitude={longitude}&color={color}

type: **GET**

Request Parameters: 
lattitude - lattitude of the user<required>,
longitude - longitude of the user<required>,
color - color of the cab <optional>

### Complete a Ride
http://localhost:3000/ride/end/?id={cabID}lattitude={lattitude}&longitude={longitude}

type: **GET**

Request Parameters:
lattitude - lattitude of the destination <required>,
longitude - longitude of the destination<required>,
id - Cab ID <required>

### Search Available Cabs- in given range

http://localhost:4000/ride/search

type: **GET**

Request Parameters:
lattitude - lattitude of the destination <required>,
longitude - longitude of the destination<required>,
radius- range in KM<required>,
