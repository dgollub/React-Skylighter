react-skylighter
================

React-SkyLighter is a simple react component for modals and dialogs, Powerful, lightweight, and unopinionated in design (you can simply change the design via SASS/CSS).

It is based on Marcio Gasparotto's wonderful simple [React-SkyLight](https://github.com/marcio/react-skylight), with the following changes:

- SASS integration
- removed style settings via code => styling is done in SASS/CSS now
- works on IE8+ and Mobile Safari
- clicking on the overlay or pressing Escape now closes the popup
- added examples (based on [Initializer](http://www.initializr.com/))
- defaults to show the overlay


Disclaimer
------------
I will likely not support this software as I am busy with a lot of other things at the moment. It was mainly an exercise in using React and optimizing my npm and overall web development workflow.


Installation
------------

There is no npm module for this yet and I don't plan on releasing one. Therefore, just do a git checkout and copy the code into your project. Or use git submodules - which I, from personal experience, do not recommend, but if it works for your use-case, go for it.


Known Issues
------------

- The normal, un-minified app example does not work on IE8. Sigh. The minified version works however.


Features
--------

- Very simple modal/dialog
- Callback before open
- Callback after open
- Callback before close
- Callback after close


How to use
--------------------

See the example app in `src/app/app.jsx` and the full working example in the `examples` folder.

Options
-------------------

####title: (String)
A title for your modal.
``` html
<SkyLighter ref="myModal" title="TITLE FOR MODAL">Modal Content</SkyLighter>
```
####showOverlay: (Boolean)
Show modal with an overlay (true) or without an overlay (false). Default is *true*.

``` html
<SkyLighter ref="myModal" title="TITLE FOR MODAL" showOverlay={true}>Modal With Overlay</SkyLighter>

<SkyLighter ref="myModal" title="TITLE FOR MODAL" showOverlay={false}>Modal Without Overlay</SkyLighter>
```

####beforeOpen, afterOpen, beforeClose and afterClose: (Function)
A callback functions to execute before and after open and before and after close a modal. You can use just the one you want.
``` html
<SkyLight ref="myModal" title="TITLE FOR MODAL"
            beforeOpen={myFunctionToExecuteBeforeOpen}
            afterOpen={myFunctionToExecuteAfterOpen}
            beforeClose={myFunctionToExecuteBeforeClose}
            afterClose={myFunctionToExecuteAfterClose}>Modal Content</SkyLight>
```



##Enjoy!



## Release History

 * 2015-05-29   v0.1.0   initial release based on [React-SkyLight](https://github.com/marcio/react-skylight)
