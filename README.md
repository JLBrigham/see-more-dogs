# See-More-Dogs

A one page web application which connects to an API to display dog photos to the user.

## How to use

To visit the site follow this link-

https://see-more-dogs.netlify.app/

Alternatively, if you would prefer to visit it locally from your computer-

- Clone this repo `git clone git@github.com:JLBrigham/see-more-dogs.git`
- Navigate to the root of the directory
- Run `open index.html`

When the page loads you will see a title, subtitle, dog icon button and 10 dog images, to see more images just click the dog icon and 10 more images will load at the bottom of the page. Keep clicking to see more dogs!

<img width="1400" alt="Screenshot 2021-11-23 at 11 32 29" src="https://user-images.githubusercontent.com/74301627/143012374-4eb50d6f-0740-469d-8732-ef61ea00636a.png">

## The Brief

As a team member, I want to see a list of results pulled from a public API of the engineer's choosing displayed on a web page because it allows me to see how the engineer writes code.

Acceptance Criteria-

```
Given I view the page When the application fetches data from an API Then only the first 10 results should be displayed And I should see a load more button
```

```
Given I view the page And initial results have been loaded When I press the load more button Then the next N results should be loaded
```

## Planning documents

Once I had decided on the API I wanted to use, I created a sequence diagram for the application.

<img width="904" alt="Screenshot 2021-11-23 at 12 08 48" src="https://user-images.githubusercontent.com/74301627/143013961-7c00ddbc-01e5-42ab-80ba-1f328078a6fd.png">

I then made a quick low fidelity wire frame diagram to plan what the page would look like.

<img width="341" alt="Screenshot 2021-11-23 at 12 11 38" src="https://user-images.githubusercontent.com/74301627/143014310-a07c4120-d74f-4e2b-b75b-5153385bdb8a.png">

## My Approach

I chose to use an API of [dog images](https://dog.ceo/dog-api/), because who doesn't like dogs. I also chose this API as there were no CORS issues, understanding CORS and how to work with it is something I need to look into further.

I am using the API endpoint which gives me random images, the maximum in one request is 50. My initial idea was to make one API call and get all the data I needed in that call and store it. I would then slice the object at different points on each click until I ran out of results. However I soon realised that there were a couple of issues with this approach:

-I was making things more complicated for myself as I was going to need to use various variables to record the state of which results had already been rendered.

-I risked fetching data that was not going to end up being used, this would make the app less performative.

-I also risked the user reaching the end of the results quite quickly and would have to make a decision as to what would happen then.

I decided instead to just fetch 10 results from the API at a time, that was I was not going to be retrieving data unnecessarily. I decided that as 10 results were rendered when the user opened the page, it was sensible that 10 more results got loaded on each click.

I created an ApiConnection class to avoid using a global variable to store the results fetched from the API. A new instance of this class is then created in the interface.js file to control what the user sees.

## Reflections

It's been a little while since I worked with JavaScript without any frameworks so this was a really good exercise for me a good level of challenge, I enjoyed completing it and felt like I was learning a lot and consolidating along the way.

I didn't manage to use any Web Components, I have not used these before so it will require a bit of research. I plan on doing this before the next interview and maybe having a play around and try to impliment them in this project.

So as to ensure the displayResults() function did not try to run before the promise was fulfilled I used the setTimeout() function. I think there must be a better way to do this, for example passing the displayResults() function as a callback to the connectToEndpoint() function, however though I tried this I couldn't get it to work and it is something I plan to look into further as I believe it would improve my code quality as I would achieve the same result with fewer lines of code.

UPDATE(24/11)- I have been looking at this further (on branch callbacks) and I now think that the reason I couldn't get the callback function to work was to do with `this`. I was getting a cannot read properties of undefined error realted to reading 'url' when I tried to call the callback function in the interface.js file. From a bit of reading I learnt that perhapd I need to use `bind`. I have managed to get the callback semi-working currently, however it only works onlick and not when the page initially loads. I still need to look into this further, I am also not sure if what I am trying to do is the best method or whether it may be better to try and use a promise, again something I need to look at further.

As the app is user focused I decided to deploy it, I used Netlify mainly because I have never used it before so wanted to see how it compared with Github Pages, it was very straight forward, I was impressed!

It would be good to add some tests to the code, the only JavaScript testing framework I have used is Jasmine but I would like to learn Jest and it owuld be nice to add that into this project in future.

Update 25/11- Since submitting the project I have created 2 new branches, web-components and callbacks. I've used these branches to experiment with improving the code, in the web-components branch I have started to try and use native Web Components for the first time and in the callbacks branch I have been trying to improve the JavaScript code I wrote in the apiConnection and interface files.
