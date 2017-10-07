# The Align library allows you to align display objects relative to one another
Calculate the x and y position of a child display object relative to the parent. 

Relationships: center, left, right, top, or bottom 

Get a calculation by passing in the display object or passing in numbers. 

If you pass in the display objects, the x and/or y positions of the child will get set. 

You have the option to add the child to the parent.
   
This library works with any javascript display objects that have these properties/methods: x, y, width, height, addChild. You can use it with frameworks like PIXI and Phaser.

### Relations
![Consts](/assets/consts.png)

### Methods
    alignX(parent, child, alignX = 0, padding = 0, addChild = false)
    alignY(parent, child, alignY = 0, padding = 0, addChild = false)
    alignXandY(parent, child, alignX = 0, alignY = 0, paddingX = 0, paddingY = 0, addChild = false)


### Example
![Example](/assets/example.png)

### How to determine whether to make the padding pos/neg when using CENTER align
![Center Padding](/assets/center-padding.png)

### The Calculations
###### CENTER
    x = (parentWidth * 0.5) - (childWidth * 0.5) + padding;
    y = (parentHeight * 0.5) - (childHeight * 0.5) + padding;
###### LEFT
    x = padding;
###### TOP
    y = padding;
###### RIGHT
    if (parentWidth > childWidth) {
      x = parentWidth - childWidth - padding;
    } else {
      x = -(childWidth - parentWidth) - padding;
    }
###### BOTTOM
    if (parentHeight > childHeight) {
      y = parentHeight - childHeight - padding;
    } else {
      y = -(childHeight - parentHeight) - padding;
    }
        
## CODE

The functions in the Align library are static. This mean you do not need to instantiate the class. You can just call it like: LibraryName.functionName().

In your index.html, add a script tag to include the version of the align.min.js file that you want from the [dist/](/dist) directory. You will be able to use the library within your code without needing to import it.

    myFunc() {
        let parent = new Sprite();
        let child = new Sprite();

        Align.alignX(parent, child, Align.CENTER, 5, true);
    }    

## UNIT TESTS
The tests are [here](/test/Align.spec.js).

Please open an [issue](https://github.com/genradley/Align/issues) if you find any bugs. We will fix the issue and add a test for it.

## JSDOCS
Please download or clone the repo and open [/docs/index.html](/docs/index.html) in a web browser

## MY OTHER GITHUB PROJECTS
[PhaserSignals](https://github.com/genradley/PhaserSignals) - A library for Phaser. Add **_any_** listener to **_any_** signal. Dispatch **_any_** signal **_anywhere/anytime_**.

[AssetLoader](https://github.com/genradley/AssetLoader) - A library for Phaser. Load assets externally from a json file.

More coming soon...

## CREDITS
This project used the [webpack-library-starter](https://github.com/krasimir/webpack-library-starter) project

## ABOUT ME
My name is Genell Radley. I am a game developer w/7yr professional experience writing games in Flash, Unity and HTML5. I believe in unit testing and documenting my code well. I am very excited to share my code here with you on GitHub. I hope you will contribute. 

Please see my [github profile](https://github.com/genradley) and [linkedin profile](https://www.linkedin.com/in/genellradley/). 

--
(ignore this line. it is for seo purposes)
Genell Radley
Genell Radley
Genell Radley
Genell Radley
Genell Radley
Genell Radley
Genell Radley
Genell Radley
