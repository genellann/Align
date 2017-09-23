## Relatively align display objects
This library works with any javascript display objects that have these properties/methods: x, y, width, height, addChild. You can use it with frameworks like PIXI and Phaser.

### 
![Consts](/assets/consts.png)

###
![Example](/assets/example.png)

###
![Center Padding](/assets/center-padding.png)

## In code example

The functions in the Align library are static. This mean you do not need to instantiate the class. You can just call it like: LibraryName.functionName().

In your index.html, add a script tag to include the align.min.js file. You will be able to use the library within your code without needing to import it.

    myFunc() {
        let parent = new Sprite();
        let child = new Sprite();

        Align.alignX(parent, child, Align.CENTER, 5, true);
    }    

## This library is unit tested
Please open an [issue](https://github.com/gradley/DisplayObjectAlignment/issues) if you find any bugs. We will fix the issue and add a test for it.

## This library has jsdocs
Please download or fork the repo and open [/docs/index.html](/docs/index.html) in a web browser
