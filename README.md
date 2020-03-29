
# Portfolio - Iteration 1 

This mod 3 fullstack app was created with the purpose of creating the ability to schedule games and keep track of the roster for the Flatiron Flyers Ultimate Frisbee Team. 

![](src/Portfolio.GIF)

---

## How the app works  

* To run the app, first fork and clone down this repo to your local device. 
* Note you will also need to clone down the backend repo at https://github.com/miwhag/ultimate-backend
   * In the backend type into your terminal
        * `bundle install` 
        * `rails db:migrate` 
        * `rails db: seed`
        * `rails s (runs your server)` 
        
* Once you have your backend server running, you can go into the frontend repo you cloned down, and in another terminal tab type `lite-server` into the terminal. This will prompt the application to start. 

* From there you can navigate through the website seen in the video above 
   * Home will bring you to the homepage 
   * Frisbee will bring you to the about frisbee page. Currently there is just some lipsum text with some images from past ultimate frisbee teams I played on. 
   * Schedule will give you a dropdown option to edit the current schedule or view the games in detail. 
      * The Edit Schedule page allows you to add new teams, create new matchups, delete matchups, and delete teams. 
      * The Schedule page allows you to view all of the games scheduled. Click on the view more link and it will show you all the information about the game including the location of the game and field on a Google Map. 

          * Note: You will need your own API key to see the Google map of the frisbee game location. The Google API link is in the game_info.html file in the scripts. If you are interested in obtaining a key you can get one here at: https://developers.google.com/maps/documentation/geocoding/get-api-key

* Finally the Team dropdown will give you an option to view the roster, or view all the players in the league. 


### Things to add / Down the pipeline

* Allow the ability to sort the scheduled games in order of date 
* Update/Delete/Create Players on the roster 
* Update the score and declare a winner and loser


### Technologies 

* Javascript 
* Google Javascript API 
* Bootstrap 
* Flickity 

### Authors

* Miwha Geschwind - [Github Repo](https://github.com/miwhag)

