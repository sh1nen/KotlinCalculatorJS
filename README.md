# KotlinCalculatorJS
Simple math calculator written in kotlin transpiled to javascript.

It's really simple calculator app based on HTML5, CSS3 and ... ~~javascript~~ kotlin. Why I even bothered using kotlin in frontend development ? 
For me as a person coming from backend development background javascript was always kind of mysterious, probably because of its dynamic type nature.
Some of you will ask why would I use kotlin when I have TypeScript ? Yes, I do but for me as a Java developer it's really easy to
do that in kotlin instead, having null safety system just out of the box with static type features is really a powerful tool when it comes to really
big applications, growing at scale.

## Kotlin to javascript
There is no need for any of the npm magic, installing node_modules etc, the structure of project is based on "gradle kotlin javascript", by creating
project in intelij. You get your programming environment set up and ready to create app. You even get preconfigured gradle build file
which will transpile all your .kt files on classpath to javascript.

On below screenshot, it's shown how transpiling from kotlin to javascript looks like:
![kotlin-to-js](https://user-images.githubusercontent.com/13648207/35700490-714da0e4-0793-11e8-9c6c-6c2b9f47f6f5.png)

The key thing to know about transpilation(used interchangeably with compilation) is that when you generate that .js file from .kt it's not yet fully working javascript which you 
can just add to your static page and make it work. You also need some kind of "mediator" between generated .js file and browser and there comes in
kotlin.js, it's basically a javascript library written to translate your .js file to the language known to browser.  As mentioned **kotlin.js** is a runtime standard library in which are defined functions responsible for 
shipping out our generated **kotlin.calc.js** to the browser. Below we see two scripts imported to our static .html page.

```
<body>
  <script src="js/kotlin.js"></script>
  <script src="js/kotlin.calc.js"></script>
</body>
```
That's it, now you just go to index.html and have fully working calculator, which is backed by javascript written in kotlin.

## How to run
Firsty you need to git clone this repo to you local by:
```
git clone <link_to_repo>
```
the next thing you have to do is build the project, either by executing in the root folder:
```
gradle build
```
or by using the IDE of your choice.


## Built With
* HTML5
* CSS3
* Kotlin
