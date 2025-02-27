# SpacePeek: Get Useful Info About Space!

SpacePeek takes advantage of some of the [NASA&#39;s Open APIs](https://api.nasa.gov/) to give you useful information about space. View the daily picture or video on the home page and explore information about Mars and our neighbouring asteroids 🌠. This project utilizes React, NodeJs, Express, and TailwindCSS.

The backend and frontend of this web application are hosted using [Railway](https://railway.com/).

Check out the web app [here](https://nasa-web-app-production-front.up.railway.app/)!

## Mars

The Mars page consists of three sections.

### Fun Facts

The first section gives you a few fun facts about the red planet. These facts are hardcoded for now, in the future I may use an API to get facts about this planet.

### Mars Weather

The second section generates a weather report with the help of [InSight: Mars Weather Service API](https://science.nasa.gov/mission/insight/). The section fetches the following weather information for 7 Sols:

* Average Temperature (℃)
* High Temperature (℃)
* Low Temperature (℃)
* Wind Speed (m/s)
* Pressure (Pa)

A day on Mars is known as "sol".

### Mars Photos

The third section retrieves photos from one of the many rovers on Mars, the Curiosity rover. The rover has the following cameras:

1. **FHAZ**: Front Hazard Avoidance Camera
2. **RHAZ**: Rear Hazard Avoidance Camera
3. **MAST**: Mast Camera
4. **CHEMCAM**: Chemistry and Camera Complex
5. **MAHLI**: Mars Hands Lens Imager
6. **NAVCAM**: Navigation Camera

Enter a positive integer for Sol, select a camera, and click search. Doing so will fetch the photographs from the [Mars Rover API](https://github.com/corincerami/mars-photo-api).

## Asteroids

With the help of "Asteroids - NeoWs" API, users can fetch information about our neighboring asteroids. Just select the start date and end date, then search. The following information about each asteroid will be displayed:

* Asteroid Name
* Miss Distance (km)
* Diameter Min (m)
* Diameter Max (m)

## Astronomy Picture of the Day

On the home page of SpacePeek, you can look at the picture of the day, sometimes it is a video. The picture is fetched from NASA's [Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html) website.

## Known Bugs 🐛

Here are some of the bugs I've encountered during development:

1. Sometimes the picture or video of the day takes too long to load. Might be due to the throughput on the APOD API.
2. Mars page occasionally opens scrolled to the bottom.
3. Some Mars photos partially render.

## Future Plans

In the future I would like to add information about the planet earth and the moon into this web application.
