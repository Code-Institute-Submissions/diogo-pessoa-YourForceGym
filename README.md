# Your force Gym

**YourForceGym** site: [visit here](https://diogo-pessoa.github.io/YourForceGym/index.html). 

This project aims to provide a responsive web-page to create an online presence to a Gym. It aims to provide the user with clear reasons to sign-up with the least possible navigation time.  
A catching `Gallery` and  `About Us` section is available on the menu. 
For the impatient user, there's a `find-us` link for a navigation map. 

## Project Work 
Project Board & and User Stories on [Trello](https://trello.com/b/dE5REmeS) 

## UX 
Designed with a mobile-first approach. The emphasis is to take advantage of the gym's member's peer recommendation. Allowing new users to check the gym on the spot from anywhere. It aims to provide the user with clear reasons to sign-up with the least possible navigation time. 
Yet there are alternatives built-in for users looking to know more before making a decision.

### Mobile view 
![Mobile View image](https://github.com/diogo-pessoa/YourForceGym/blob/master/readmeImageContent/MobileView.png) 

### Desktop view 
![Desktop View image](https://github.com/diogo-pessoa/YourForceGym/blob/master/readmeImageContent/DesktopView.png) 

## Features 
This is a Responsive website, that provides a glancing experience on this fictional gym. The home page aims to provide the user with a quick view of the gym. The first section available is a carousel with images of the facilities. This followed by a friendly list of benefits and reasons to join the club. 
- Carousel for a quick glance at gym facilities; 
- The menu Provides easy navigation to `Gallery` and `About Us` in case the user wants to see more information. 
- call to action button `Sign up now` on the page header to provide quick access to the user. Sign up anytime during the navigation with a call to action button always at hand. 
- A `Find us` page for users interested in visiting the gym or looking for the gym location. 
- For further enquiries "menu" provides a `Contact Us` page for customised communication.
 
- Gallery with video tour and images of the gym space.

- NavBar and CallToAction button sticky to page top, when scroll down

- About Page:
  - About Gym section 
    - [User story](https://trello.com/c/7c3zaY57)
  - classes Section
    - [User story](https://trello.com/c/hdx93v1C) 
  - Meet trainers section
  - [User Story](https://trello.com/c/TDKGewaw)
- classes Timetable:
  - [User Story](https://trello.com/c/VbgE9nBl)

## Technologies Used 
This Project is built with HTML5/CSS3. Extra features implemented with frameworks listed here:
- [Bootstrap](https://getbootstrap.com/)  - Good grid system
- [hover.css](https://ianlunn.github.io/Hover/) - Adding hover effects
- [font awesome](https://fontawesome.com/) - Good selection of Icons.
- [GitHub Pages](https://pages.github.com/) - Deploy 

## Testing
Manual site navigation on different screen sizes and browsers.
- Selected browsers were Firefox and Chrome.
- Screen sizes tested:
  - col-sm - Iphone6/7/8: 375px x667px col-md 
  - Ipad: 768px x 1024px col-lg 
  - laptop: >960px x >600px Tested both on Browser developer tools & available devices. 

### Manual navigation tests
- Footer Links 
  - Social media links all redirect proper service Provider and open a new tab.
    - [User Story](https://trello.com/c/5GlSVa9d)
    - *Test* From every page on project, navigate to footer and click on every social network anchor icon. Make sure all open right path in a new tab.
  - `find-us` link redirects to Visit-us page. 
    - bug found anchor has no href destination;
    - *Test* Navigate to each page in Site click `Find us` in footer.
      - find us page loads in same tab.
    - fix in: [User Story](https://trello.com/c/VTyzQ7RH)
  - Reducing brigthness on yellow on site, 
    - *Test* navigate to each page and review `buttons` and `NavBar` 
    - [User Story](https://trello.com/c/aIfWdOaC)
  - Refactoring Header Section
    - Simplify grid Structure
    - reduce amount of space used by header
    - *Test* visit Page on different screen sizes confirm navigation is natural and responsive, no elements break
    - *Found while testing* while hovering on `h1` Your Force Gym, animation is blue, using browser default.
      - fix add `hvr-grow` class to element.
    - [User Story](https://trello.com/c/YhaebYM8)
  - Sticky NavBar to ScreenTop onscroll.
    - *Test* navigate to all pages Scroll down confirm expected behaviour
    - *Discovered while testing* on col-sm(iphone screen) contact.html page doesn't scroll properly, 
      - Create [User Story](https://trello.com/c/Co6vqJug) to track bug
        - Fixed by adding `class=content` to section in body
  - About Page 
    - [User Story](https://trello.com/c/Vt9HQP5B)
      - is responsive on all tested screen sizes
      - NavBar sticks to top of page when scroll down happens
    - Classes Section
      - [User Story](https://trello.com/c/hdx93v1C)
      - timetable PDF button on about page
      - clicking on `check timetable` button open pdf on new tab
        - [User story](https://trello.com/c/VbgE9nBl)
    

### Static Content checks
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator)

## Deployment 
Site deployed using github-pages. 
- visit Repository Settings
  - In Section `Github-pages`, enable it.
  - Set Branch to Master and path (root).
![github-pages-image](https://github.com/diogo-pessoa/YourForceGym/blob/master/readmeImageContent/Github-pages.png)
It can take a couple of minutes for content committed to master to be available.
Github-pages [reference](https://pages.github.com/)

## local development 
- Local Development
  -  Code editing with text editor [Vscode](https://code.visualstudio.com/). 
- Runtime environment
  - Execute code by loading page from local files through a web browser of choice (ex: Chrome or Firefox). Reloading page after changes on source code.
 
## Credits 
### Content 

All text content is fictional and authored by [me](https://github.com/diogo-pessoa). 

### Media 
- Media content from:
  - [pixabay](https://pixabay.com/images/search/gym/)
- Site Images
  
  - [favicon](https://pixabay.com/illustrations/weightlifting-clean-jerk-barbell-2227543/) 
  - Carousel images:
    - [DanceStudio](https://pixabay.com/photos/gym-sports-hall-studio-dance-studio-526996/)
    - [GymFloor](https://pixabay.com/photos/gym-training-sports-fitness-595597/)
    - [CardioFloor](https://pixabay.com/photos/sports-indoor-cycling-fitness-gym-1962574/)
  - Gallery 
    - video: 
      - [Gym Building](https://pixabay.com/videos/school-gym-building-landscape-43735/) 
    - Images: 
      - [Dumbells](https://pixabay.com/photos/fitness-weight-lifting-dumbbells-375472/) 
      - [Free Weights floor](https://pixabay.com/photos/machines-weight-weights-91849/) 
      - [class](https://pixabay.com/photos/gym-room-fitness-sport-1180062/)  
  - About
    - About Gym
      - [trainer helping](https://pixabay.com/photos/woman-gym-person-1730325/)
    - Trainers
      - [Jack](https://pixabay.com/photos/fitness-guy-black-exercise-465203/)
      - [Meg](https://pixabay.com/photos/abs-athlete-biceps-blonde-body-1850926/)

### Acknowledgements
- Took inspiration on the flat page listed here. [w3layouts](https://w3layouts.com/template/gym-workout-sports-category-flat-bootstrap-responsive-web-template/) 
- I also took a lot of guidance from the ideas in [Responsive Web design](https://abookapart.com/products/responsive-web-design) by Ethan Marcotte. 

#### source code reference
- Bootstrap Modal dynamic image loading in Gallery uses code from: 
[Stack Overflow](https://stackoverflow.com/questions/25023199/in-bootstrap-open-enlarge-image-in-modal#25023822). Author shared Snippet [here](https://jsfiddle.net/6CR2H/1/)

- NavBar Sticky to top feature implemented from [w3schools](//https://www.w3schools.com/howto/howto_js_navbar_sticky.asp)
