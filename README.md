# See-More-Dogs

A one page web application which connects to an API to display dog photos to the user.

## How to use

To visit the site follow this link-

https://see-more-dogs.netlify.app/

Alternatively, if you would prefer to visit it locally from your computer-

- Clone this repo `git clone git@github.com:JLBrigham/see-more-dogs.git`
- Navigate to the root of the directory
- Run `open index.html`

When the page loads you will see a title, 10 dog images and 2 icons, a dog and a paw. To see more images of random dog breeds just click the dog icon and 10 more images will load. If you'd just like to see images of Boston Terriers, click the paw icon, all the other dog images will be deleted and you will just see images of Boston Terriers ❤️

Keep clicking to see more dogs!

<img width="1433" alt="Screenshot 2021-11-30 at 12 51 30" src="https://user-images.githubusercontent.com/74301627/144050978-f8279b1c-8f5e-4df1-9da0-ef080905083f.png">

## The Brief

As a team member, I want to see a list of results pulled from a public API of the engineer's choosing displayed on a web page because it allows me to see how the engineer writes code.

Acceptance Criteria-

```
Given I view the page When the application fetches data from an API Then only the first 10 results should be displayed And I should see a load more button
```

```
Given I view the page And initial results have been loaded When I press the load more button Then the next N results should be loaded
```

## Planning Documents

Once I had decided on the API I wanted to use, I created a sequence diagram for the application.

<img width="904" alt="Screenshot 2021-11-23 at 12 08 48" src="https://user-images.githubusercontent.com/74301627/143013961-7c00ddbc-01e5-42ab-80ba-1f328078a6fd.png">

I then made a quick low fidelity wire frame diagram to plan what the page would look like.

<img width="341" alt="Screenshot 2021-11-23 at 12 11 38" src="https://user-images.githubusercontent.com/74301627/143014310-a07c4120-d74f-4e2b-b75b-5153385bdb8a.png">

## My Approach

I chose to use an API of [dog images](https://dog.ceo/dog-api/), because who doesn't like dogs. I also chose this API as there were no CORS issues, understanding CORS and how to work with it is something I need to look into further.

I am using the API endpoint which gives me random images, the maximum in one request is 50. My initial idea was to make one API call and get all the data I needed in that call and store it. I would then slice the object at different points on each click until I ran out of results. However I soon realised that there were a couple of issues with this approach:

- I was making things more complicated for myself as I was going to need to use various variables to record the state of which results had already been rendered.

- I risked fetching data that was not going to end up being used, this would make the app less performative.

- I also risked the user reaching the end of the results quite quickly and would have to make a decision as to what would happen then.

I decided instead to just fetch 10 results from the API at a time, that was I was not going to be retrieving data unnecessarily. I decided that as 10 results were rendered when the user opened the page, it was sensible that 10 more results got loaded on each click.

I created an ApiConnection class to avoid using a global variable to store the results fetched from the API. A new instance of this class is then created in the interface.js file to control what the user sees.

## What I'm Continuing To Work On

### Promiese and Callbacks

**UPDATE(30/11)**- My code is now much cleaner and I have managed to ensure that the displayResults function is not called before the promise was fulfilled in the connectoToEndpoint function without using the setTimeout function. The connectToEndpoint function now returns a promise and I have chained on a .then when it is called in the interface.js file which then calls the display results function.

**UPDATE(24/11)**- I have been looking at this further (on branch callbacks) and I now think that the reason I couldn't get the callback function to work was to do with `this`. I was getting a cannot read properties of undefined error realted to reading 'url' when I tried to call the callback function in the interface.js file. From a bit of reading I learnt that perhapd I need to use `bind`. I have managed to get the callback semi-working currently, however it only works onlick and not when the page initially loads. I still need to look into this further, I am also not sure if what I am trying to do is the best method or whether it may be better to try and use a promise, again something I need to look at further.

So as to ensure the displayResults() function did not try to run before the promise was fulfilled I used the setTimeout() function. I think there must be a better way to do this, for example passing the displayResults() function as a callback to the connectToEndpoint() function, however though I tried this I couldn't get it to work and it is something I plan to look into further as I believe it would improve my code quality as I would achieve the same result with fewer lines of code.

### Further Functionality

I have a couple of ideas for further functionality, none of which I currently know how to implement so all will be a good learning experience for me.

- Currently when you click the paw for just Boston Terrier images you only see 10 images at a time as the previous images are deleted. I would like to update this so that the Boston Terrier images don't delete, only the images retrieved using the other button

- A drop down menu where user can select from a number of dog breeds, only images of this breed will then be displayed

### Testing

It would be good to add some tests to the code, the only JavaScript testing framework I have used is Jasmine but I would like to learn Jest and it would be nice to add that into this project in future. I am not that confident using mocks and stubs when testing so it will be a good opportunity to also practice this.

### Code Quality

I currently just have one ApiConnection class, but as I add further functionality I feel that this class is starting to do too much, I would like to separte it into atleast two classes, one that manages connecting to the API and another that manages the rendering of the results.
