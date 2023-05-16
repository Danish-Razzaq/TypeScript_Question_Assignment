"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
let make_shirt = (size, message = "I Love TypeScript.") => {
    console.log(`Size of Shirt ${size},`, `Message on shirt: ${message} `);
};
make_shirt("Large");
make_shirt("Medium");
make_shirt("Small");
