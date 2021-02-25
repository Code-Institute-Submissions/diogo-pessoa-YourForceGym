  

# Your force Gym

**YourForceGym** site: [visit here](https://diogo-pessoa.github.io/YourForceGym/index.html). 

This project aims to provide a responsive web-page to create an online presence to a Gym. It aims to provide the user with clear reasons to sign-up with the least possible navigation time.  

A catching `Gallery` and  `About Us` section are available on the menu. 
For the impatient user there's a `find-us` link for a navigation map. 

## Project Work 

Project Board & and User Stories: tracking on [Trello](https://trello.com/b/IdBaRAf3) 

## UX 

Designed with a mobile first approach. The emphasis is to take advantage of gym's members peer recommendation. Allowing new users to check gym on the spot from anywhere. It aims to provide the user with clear reasons to sign-up with the least possible navigation time. 
Yet there are alternatives built-in for users looking to know more before make a decision.

### Mobile view 

![Mobile View image](https://github.com/diogo-pessoa/MyBucketList/blob/master/wireframes/MobileView.png) 

### Desktop view 

![Desktop View image](https://github.com/diogo-pessoa/MyBucketList/blob/master/wireframes/DesktopView.png) 

## Features 

This is a Responsive website, that provides an at a glance experience on this fictional gym. The home page aims to provide the user with an at a quick view of the gym. The first section available is a carousel with images of the facilities. Followed by a friendly list of benefits and reasons to join the club. 

- Carousel for a quick glance at gym facilities; 

- The menu Provides easy navigation to `Gallery` and `About Us` in case user wants to see more information. 

- call to action button `Sign up now` on page header to provide quick access to the user. Sign up anytime during the navigation with a call to action button always at hand. 
- A `Find us` page for users interested in visiting the gym or looking for the gym location. 
- For further enquiries "menu" provides a `Contact Us` page for customised communication.
 
- Gallery with video tour and images of the gym space.

### Features Left to Implement

- About us page with gym information and trainers description

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
    - From every page on project click on every social network link on the footer.
  - `find-us` link redirects to Visit-us page. 
    - bug found link is pointing to gallery;
    - fix in: [User Story](https://trello.com/c/VTyzQ7RH)

### Static Content checks
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](http://jigsaw.w3.org/css-validator/validator$link)

## Deployment 

Site deployed using github-pages. 
- visit Repository Settings
  - In the Section Github-pages, enable it.
  - Set Branch to Master and path (root).

![github-pages-image](https://github.com/diogo-pessoa/MyBucketList/blob/master/readmeImageContent/Github-pages.png)

It can take a couple minutes for content committed to master to be available.

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

### Acknowledgements 

- Took inspiration on the flat page listed here. [w3layouts](https://w3layouts.com/template/gym-workout-sports-category-flat-bootstrap-responsive-web-template/) 
- I also took a lot of guidance from the ideas in [Responsive Web design](https://abookapart.com/products/responsive-web-design) by Ethan Marcotte. 

#### source code reference: 

- Bootstrap Modal dynamic image loading in Gallery uses code from: 
[Stack Overflow](https://stackoverflow.com/questions/25023199/in-bootstrap-open-enlarge-image-in-modal#25023822). Author shared Snippet [here](https://jsfiddle.net/6CR2H/1/)