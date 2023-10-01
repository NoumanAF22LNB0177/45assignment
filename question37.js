"use strict";
//  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
function makeShirt(size = "Large", message = "I Love Typescript") {
    return console.log(`Size: ${size}, Messge: '${message}'`);
}
// large Shirts with default meassge
makeShirt();
//   Output: Size: Large, Meassage: 'I love Typescript'
// Medium Shirts with default meassge
makeShirt("Medium");
//  Output: Size: Medium, Meassage: 'I love Typescript'
// Custom Shirts with a different message and size
makeShirt("Small", "Please subscribe Typescript insights!");
//  Output: Size: Small, 'Please subscribe Typescript insights'
