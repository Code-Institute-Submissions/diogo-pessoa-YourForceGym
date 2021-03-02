## Testing

### Code Validation

#### HTML validator
- [W3C HTML Validator](https://validator.w3.org/)

| File | Validator check  | 
|---|---|
| index.html | ok |
| gallery.html | ok |
| findus.html |  ok |
| contact.html |  ok |
| about.html | ok |


#### CSS validator

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/validator)
   
|File| Validator check|
|---|---|
| style.css | ok |

---

### Responsiveness

| Device | Screen Size  | Home  | Gallery |  Find Us | Contact | About |
|---|---|---|---|---|---|---|
| Iphone5 | 320px/568px | not_ok+ | not_ok**+ | not_ok+ | not_ok+ | not_ok+ |
| Iphone6 | 375px/667px | ok | ok | ok | ok | ok |
| Ipad | 768px/1024px | ok | ok |  ok | ok | ok |
| PC | >960px | ok |  ok | ok | ok | ok |

Notes:
    
    + At Iphone5 The header of the page is cut-off on width, see bug-fix section
    **  jumping screen bug on Scroll down event

### Browsers

| Browser | Home | Gallery | Find Us | Contact-Us | About |
|---|---|---|---|---|---|
| Firefox | ok | | | | 
| Chrome  | ok | | | | 

---
### Manual tests per User Story

1. Social Media Footer Links 
   
   1.1 As a User I want external links to open on a new tab. 

   1.2 **Test** From every page on project, navigate to footer and click on every social network anchor icon. Make sure all open right path in a new tab.

2. Refactoring Header Section
    
    2.1 As a Developer I want a cleaner header section on pages, having a aligned navbar 
    
    2.2 Simplify grid Structure
    
    2.3 reduce amount of space used by header
    
    2.4 *Test* visit Page on different screen sizes confirm navigation is natural and responsive, no elements break
  
3. Sticky NavBar to ScreenTop onscroll.
    
    3.1 *Test* navigate to all pages Scroll down confirm expected behaviour

4. About Page 
 
    4.1 As a website owner, I want  Share with the user information about Gym, the classes available and Trainers details.

    4.2 Test page is responsive on all tested screen sizes
    
    4.3 NavBar sticks to top of page when scroll down happens

    4.4  About Gym 
    
    4.5 Body font-size was too small

    4.6 Fix return to default size. 
    
    4.7 Classes Section
       - I want to know which classes are available in the gym, With access to a time table.
       - timetable PDF button on about page
       - clicking on `check timetable` button open pdf on new tab
    
5. Gallery
    
    5.1 Discovered while testing

    5.2 re-used image from carousel was updated, causing one of the gallery images to go missing

### Bug-fixes

1. At Iphone5 The header of the page is cut-off on width, see bug-fix section
   
   1.1 **Test**

   1.2 **Fix** 

2. `find-us` link redirects to Visit-us page. 
    
    2.1 bug found anchor has no href destination;
    
    2.2 **Test** Navigate to each page in Site click `Find us` in footer. Confirmed find-us link open correct path and doesn't pop user for a new tab.
  
    2.3 **Fix**: update the href attribute from element with proper `findus.html` path. Removed `target="_blank"` from anchor element.
3. Reducing brigthness on yellow on site.
    
    3.1 As a developer I want a tone of yellow that keeps a good contrast with black, but is not to bright.
    
    3.2 *Test* navigate to each page and review `buttons` and `NavBar` all have respect the color scheme.

4. *Discovered while testing* on (iphone5/6) contact.html page doesn't scroll properly. 
    
    4.1 **Fix**:  adding `class=content` to section in body

5. *Found while testing* while hovering on `h1` Your Force Gym, animation is blue, using browser default.
    
    5.1 **Fix**: add `hvr-grow` class to element.

6. Pixalated carousel images on large screens:
    
    6.1 As a user, I want the quality of the image to be the same from mobile to larger screen.
    
    6.2 **Test** The images on the carousel don't have a high enough resolution and appear pixelated on Larger screens
    
    6.3 **Fix** replaced images with higher resolution on large screens 