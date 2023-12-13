# The Odin Project - Recipes Project

A recipe collection web page built with html and css for the odin project.

[Live Link](https://antonharbers.github.io/Recipes-App/)

## Folder Structure

```
    README.md
    index.html  ->  Home Page
    style.css   ->  All the CSS for this project
    script.js   ->  Header and Mouse Trail Animation
    /recipes
        tofu_scramble.html -> Tofu Scramble Recipe Page
    /images     -> contains the favicon.ico
    /.git       -> git repo
```

## Key Concepts

### Linking Styles and Scripts to HTML documents

This project is a good introduction to the concept of using the <script> and <link> tags:

![Link Example](/documentation/linkExample.png)

![Script Example](/documentation/scriptExample.png)

It is important to note that for some functionality the html needs to be loaded before the script. Therefor it is good practice to either append the script to the end of the html body (after the closing body tags) or to use the defer flag to let the script wait for the html to be loaded before running.

### Adding a custom font from google fonts

A fun sidequest was adding a custom font from google fonts. This method uses the html <link> tag in order to import the font from google fonts directly. This font can then be set in the css:

HTML:

```
    <!-- This goes into the HEAD of your HTML document -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Raleway+Dots&display=swap"
      rel="stylesheet"
    />
```

CSS:

```
    * {
        font-family: 'Josefin Sans', sans-serif;
    }

```

### Adding a custom favicon

Another simple thing to add some detail to a webpage is the favicon. Just import or create your own favicon.ico and place it somewhere in your folder structure. It can then be importet as follows:

HTML:

```
    <link rel="icon" type="image/x-icon" href="./images/favicon.ico" />
```

The "rel" parameter for favicons is "icon"
The "type" parameter for favicons is "image/x-icon"
the "href" parameter for favicons will be the path to where the .ico file is stored in your folder structure.

### <a> Tags to link to other html documents

A key part of this project was linking to certain recipes from a home directory. This is achieved using the <a> tag with the correct path being given as a parameter to the href attribute:

HTML:

```
      <a class="linkBtn" href="recipes\tofu_scramble.html">Tofu Scramble</a>

```

### Combining selectors to apply styles

A simple concept that can make css more readable and also improve its performance is to group certain styles to multiple selectors at once if these share attributes as i did for my body tags and ".container" class below.

CSS:

```
    body,
    .container {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100dvh;
    width: 100dvw;
    gap: 2rem;
    overflow-x: hidden;
    overflow-y: scroll;
    }

    body {
    background: linear-gradient(135deg, #fccf31 10%, #f55555 100%);
    overflow-y: hidden;
    }

```

Here most of the styles are applied to both selectors, however the body had a different background and overflow-y parameter. Important to note that the style furthest down the document will be applied. So here the overflow-y of body will overwrite the overflow-y property of the combined selector.

This saves us having to basically have double the CSS code.

### Basic CSS Animations trigerred in Javascript

As a challange I tried to implemt some basic CSS animations using Javascript so that they can appear random and have dynamic effects based on user input.

First I create an array of colors with a counter (this will be used to cycle through the array) and create variables for the h1 and the body html elements in the document.

JS:

```
    // Variable declaration
    let h1 = document.querySelector('h1');
    let body = document.querySelector('body');

    let colors = ['red', 'orange', 'yellow', 'green', 'violet']; // can be extended to include more colors
    let counter = 0;
```

In order for the H1 Element to cycle through the colors array I added the following Interval that just cycles through them and increases the counter (or sets it back to 0) after each Interval function call.

JS:

```
    setInterval(function () {
    h1.style.color = colors[counter];
    counter >= colors.length ? (counter = 0) : counter++;
    }, Math.random() * 2000 + 2000);
```

For the trailing mouse effect I create a div whenever the user moves the mouse. I apply some initial styles to it using the initStyles() function and then make some changes to the styles after some random time and then make sure to remove the divs from the dom after some more time has passed.

JS:

```
    document.addEventListener('mousemove', function (e) {
    let div = document.createElement('div');
    initStyles(div, e);
    body.appendChild(div);

    // update the styles and then destroy the div
    setTimeout(function () {
        updateSyles(div);
    }, Math.random() * 400 + 100);

    setTimeout(function () {
        div.remove();
    }, Math.random() * 2000 + 500);
    });
```

## Final Notes

This project serves as a good introduction to some important fundamentals. A basic look at how the different files and languages "speak" to each other to acheive a reactive and smooth user experience in the browser. Even with such a simple task, some more complex lessons were tackled and learned.
