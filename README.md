# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Desktop](./screenshots/desktop.png)

![Mobile](./screenshots/mobile.png)

### Links

- Solution URL: [Solution](https://github.com/DMikaia/advice-generator)
- Live Site URL: [Demo](https://dm-advice-generator.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learned how to fetch an API and some JSON basics, example of code below:

```js
const url = "https://api.example.com/data";

async function fetchAdvice() {
  const response = await fetch(url);
  const {
    slip: { name },
  } = await response.json();

  document.getElementById("name").innerHTML = name;
}
```

## Author

- Frontend Mentor - [@DMikaia](https://www.frontendmentor.io/profile/DMikaia)
