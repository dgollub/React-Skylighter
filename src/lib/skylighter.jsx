/**
 *
 *   React-Skylighter
 * 
 *   Copyright (c) 2015 Daniel Kurashige-Gollub <daniel@kurashige-gollub.de>
 *   The MIT License (MIT)
 *
 *   Based on React-Skylight (https://github.com/marcio/react-skylight)
 *   Copyright (c) 2014 Marcio Gasparotto
 *   The MIT License (MIT)
 *
 **/

require('./polyfill.js');

var React = require('react');
var extend = require('util')._extend;
var classNames = require('classnames');


var SkyLight = React.createClass({
    
    propTypes: {
        id: React.PropTypes.string,
        title: React.PropTypes.string,
        showOverlay: React.PropTypes.bool,
        beforeOpen: React.PropTypes.func,
        afterOpen: React.PropTypes.func,
        beforeClose: React.PropTypes.func,
        afterClose: React.PropTypes.func,
    },
    
    getDefaultProps: function () {
        return {
            id: 'skylighter-popup',
            title: '',
            showOverlay: true,
        };
    },

    getInitialState: function () {
        return {
            isVisible: false,
            onKeyDownEventListener: null,
        };
    },

    show: function () {
        this.setState({isVisible: true});
    },

    hide: function () {
        this.setState({isVisible: false});
    },
        
    componentWillMount: function() {
        var self = this;

        // hack
        window.__skylighter__onKeyDownEventListener = function(ev) {
            self.handleKeyDown(ev);
        }

        if (window.addEventListener) {
            window.addEventListener('keydown', window.__skylighter__onKeyDownEventListener);
        } else { 
            // IE 8 does not support onkeydown on the window object ... sigh
            document.attachEvent('onkeydown', window.__skylighter__onKeyDownEventListener);
        }
    },
    
    componentWillUnmount: function() {
        if (window.removeEventListener) {
            window.removeEventListener('keydown', window.__skylighter__onKeyDownEventListener);
        } else {
            document.detachEvent('onkeydown', window.__skylighter__onKeyDownEventListener);
        }
    },

    componentWillUpdate: function (nextProps, nextState) {
        if (nextState.isVisible && this.props.beforeOpen) {
            this.props.beforeOpen();
        }

        if (!nextState.isVisible && this.props.beforeClose) {
            this.props.beforeClose();
        }
    },
    componentDidUpdate: function (prevProps, prevState) {
        if (!prevState.isVisible && this.props.afterOpen) {
            this.props.afterOpen();
        }

        if (prevState.isVisible && this.props.afterClose) {
            this.props.afterClose();
        }
    },
    render: function () {

        var overlay = null,             
            dialogClasses = classNames({
                'skylighter-dialog': true,
                'hidden': !this.state.isVisible,
            }), 
            overlayClasses = classNames({
                'skylighter-dialog__overlay': true,
                'hidden': !this.state.isVisible,
            });

        if (this.props.showOverlay) {
            overlay = (<div className={overlayClasses}
                onClick={this.handleOverlayClick}
                onKeyDown={this.handleKeyDown} 
                ></div>);
        }

        return (
            <div className="skylighter-wrapper" id={this.props.id}>
                {overlay}
                <div className={dialogClasses}
                     onKeyDown={this.handleKeyDown}>
                    <a className="skylighter-dialog--close" role="button" onClick={this.hide}>&times;</a>
                    <h2>{this.props.title}</h2>
                    {this.props.children}
                </div>
            </div>
        )
    },
    
    handleKeyDown: function(ev) {
        var event = event || window.event,
            keyCode = event.which || event.keyCode;  // IE sucks
        
        if (!this.state.isVisible) return;

        switch (keyCode) {
        case 27: // ESC
        {
            this.hide();
        } break;
        }
    },
    
    handleOverlayClick: function(ev) {
        this.hide();
    },

});

module.exports = SkyLight;
