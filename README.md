# Prerequisite
You will need Node.js 14.15.x or later minor version (https://nodejs.org/en/download/)
I am using version 14.17.0

# How to use the app?
1. Install dependencies: RUN `npm i`
2. RUN `npm start`
Note: I have restricted the Google API to only run on port 1234

# Testing
RUN `npm test`

# Some improvements that can be made (given more time):
1. Implement caching
2. Add comments
3. Deploy the app on the cloud
4. Setup CI/CD pipeline
5. Add more unit tests
6. Allow switching between Celsius and Fahrenheit
7. Fix the tests for the location input component. (Currently, they are breaking because of 
   dependency on Google API)
8. Bug: Currently, the error message is shown not only after an error but also during the http call.
   This can be replaced with a loading icon.
9. Display more data to the user (Currently, only temperature and humidity are displayed)
10. Improve the UI (more colors and effects)


-------------------------------------------------------------------------------------------------------

# Welcome to the interview task :)

If something is not clear or you need help - just ask :smile:. Nobody knows everything!

1. Read the task
2. Create an Angular project
3. Please implement the project according to your own best standards, possibly
   - Tests, tdd
   - Code guidelines
   - Structure / architecture
   - Refactoring
   - Conventions
4. For the layout bootstrap or plain design is enough
5. Make sure to commit frequently and feel free to stop working on it after 4 hours
6. Provide an overview which points you would improve if you had more time to work on the project

## Scenario - Weathermap api client

Your app should be a client for the [Open Weather Map API](http://openweathermap.org/API#weather) JSON api

Features that should work:

- Display the weather at random geographic coordinates
- A form with city and country that fetches and displays the weather in this city
  - optional: cache the fetched weather data
- Gracefully handle the case where the city could not be found (display the information to the user)

Have fun!
