/**
 *
 *   React-Skylighter - Example app
 * 
 *   Copyright (c) 2015 Daniel Kurashige-Gollub <daniel@kurashige-gollub.de>
 *   The MIT License (MIT)
 *
 *   Based on React-Skylight (https://github.com/marcio/react-skylight)
 *   Copyright (c) 2014 Marcio Gasparotto
 *   The MIT License (MIT)
 *
 **/

(function () { // just to shut up the jslinter

"use strict";

require("../lib/polyfill");

var Promise    = require('lie');
var React      = require('react');
var extend     = require('util')._extend;
var Skylighter = require('../lib/skylighter.jsx');


var SkyLighterApp = React.createClass({
    
  render: function() {

        return (
<div>            
        <div className="header-container">
            <header className="wrapper clearfix">
                <h1 className="title">React-Skylighter Example(s)</h1>                
            </header>
        </div>

        <div className="main-container">
            <div className="main wrapper clearfix">
                <div className="main-inner-container">
                    <button className="skylighter-example-button" onClick={this.handleButtonClick}>
                        Click Me
                    </button>
                </div>
            </div> 
        </div>

        <div className="footer-container">
            <footer className="wrapper">
                <p>Copyright &copy; 2015 Daniel Kurashige-Gollub</p>
                <p>Based on <a href="https://github.com/marcio/react-skylight">https://github.com/marcio/react-skylight</a> Copyright &copy; 2014 Marcio Gasparotto</p>
            </footer>
        </div>

        
        <Skylighter {...this.props} ref="skylighter">
            <p>Hi, I'm the content, you may remember me from such educational films as “Lead Paint: Delicious But Deadly,” and “Here Comes the Metric System!”</p>
            <p>More content</p>
            <p>Find your own content - The Game</p>
       </Skylighter>
</div>            
        );
    },

    handleButtonClick: function(ev) {
        this.refs.skylighter.show();
    },

});




function run(args) {

    var props = {
        title: "A title for my popup",
        showOverlay: true,
    };

    var MyAppElement = React.createElement(SkyLighterApp, props);
    React.render(MyAppElement, document.getElementById('skylighter-example'));

}

// Entry point of the app.
// Run the application when DOM is ready.
Promise.all([
    new Promise(function(resolve) {
        if (window.addEventListener) {
            window.addEventListener('DOMContentLoaded', resolve);
        } else {
            window.attachEvent('onload', resolve);
        }
    }) // could add more promises here if needed
    ]
)
.then(run) // kicks of the whole React render process through the run() function above
.catch(function(err) {
    console.error("run() or an earlier promise failed", err);
});


}());