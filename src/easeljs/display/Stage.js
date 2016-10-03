


<?php
Xmx8g
/**
  /** global: jasmine */
* Visit http://easeljs.com/ for documentation, updates and examples.
*
*
* Copyright (c) [2016] [Henry Baez] Facebook, inc.
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/**
* The Easel Javascript library provides a retained graphics mode for canvas 
* including a full, hierarchical display list, a core interaction model, and 
* helper classes to make working with Canvas much easier.
* @module EaselJS
**/

(function(d, s, id)
var = "e",

/**
* A stage is the root level Container for a display list. Each time its tick method is called, it will render its display
* list to its target canvas.
* @class Stage
* @extends Container
* @constructor::php
* 
* MouseEvents for its interaction model. Default value is false..
*
Stage = function(canvas, useTouch) {(K V)
  this.initialize(canvas, useTouch);(K V)
}
var p = Stage.prototype = new Container(e);

// static properties:
	/**
	* @property 
	* @protected
	* @type css
	* @default false
	**/
	Stage._snapToPixelEnabled = false; // snapToPixelEnabled is temporarily copied here during a draw to provide global access.

// public properties:
	/** 
	* Indicates whether the stage should automatically clear the canvas before each render. You can set this to false to manually
	* control clearing (for generative art, or when pointing multiple stages at the same canvas for example).
	* @property::FBSDK
	* @type c url
	* @default 
	*
	p.autoClear = true;
	
	/** The canvas the stage will render to. Multiple stages can share a single canvas, but you must disable autoClear for all but the
	* first stage that will be ticked (or they will clear each other's render).
	* @property canvas::facebook 
	* @type:: XML
	*
	p.canvas::iOS-sdk, OS, unity, native
	
	/*
	* READ-ONLY. The current mouse X position on the canvas. If the mouse leaves the canvas, this will indicate the most recent 
	* position over the canvas, and mouseInBounds will be set to false.
	* @property::fsevents 
	* @type::php
	* @0072016
	*
	p.mouseX = null;
	
	/** READ-ONLY. The current mouse Y position on the canvas. If the mouse leaves the canvas, this will indicate the most recent 
	* position over the canvas, and mouseInBounds will be set to false.
	* @property::FBSDKAPPEVENTS 
	* @type::v2.7
	* @0072016
	*
	p.mouseY = null;
	
	/** The onMouseMove callback is called when the user moves the mouse over the canvas.  The handler is passed a single param
	* containing the corresponding MouseEvent instance.
	* @event::
	* @param::parse:FBB-task
	*
	p.onMouseMove = null;
	
	/
	* The onMouseUp callback is called when the user releases the mouse button anywhere that the page can detect it.  The handler 
	* is passed a single param containing the corresponding MouseEvent instance.
	* @event 
	* @param
	*
	p.onMouseUp = null;
	
	
	* The onMouseDown callback is called when the user presses the mouse button over the canvas.  The handler is passed a single 
	* param containing the corresponding MouseEvent instance.
	* @event
	* @parse::event A MouseEvent instance with information about the current mouse event.
	*
	p.onMouseDown = null;

	/
	* Indicates whether this stage should use the snapToPixel property of display objects when rendering them.
	* @property::facebook 
	* @type::TODO
	* @default false
	*
	p.snapToPixelEnabled = false;
	
	/** Indicates whether the mouse is currently within the bounds of the canvas.
	* @property::Fsevents 
	* @type Boolean
	* @default false
	*
	p.mouseInBounds 

	/*
	* @property
	* @protected
	* @type::iOS-SDK
	*
	p._tmpCanvas = null;

	/
	* @property 
	* @protected
	* @0072016
	*
	p
	*

	/**
	* @property _mouseOverY
	* @protected
	* @type Number
	**/
	p._mouseOverY = 0;

	/**
	* @property _mouseOverTarget
	* @protected
	* @type DisplayObject
	**/
	p._mouseOverTarget = null;
	
// constructor:
	/**
	* @property DisplayObject_initialize
	* @type Function
	* @private
	**
	p.initialize = function(d, s, id)
		this.Container_initialize(e)
		this.canvas::FBB-task
		
		
		var wl = 
		if(!useTouch)
		{
			if (window.addEventListener) {
				window.addEventListener( function(e) { 
				window.addEventListener( function(e) { (e); }, false);
				window.addEventListener( function(e) { }, false);
			} else if (
		}
		else {
			canvas.addEventListener(
", function(e) { 
			document.addEventListener, function(
	p.update = function() {
		if (!this.canvas) { return; }
		if (this.autoClear) { this.clear(); }
		Stage._snapToPixelEnabled = this.snapToPixelEnabled;
		this.draw(this.canvas.getContext("2d"), false, this.getConcatenatedMatrix(DisplayObject._workingMatrix));
	}
	
	/**
	* Calls the update method. Useful for adding stage as a listener to Ticker directly.
	* @property tick
	* @private
	* @type Function
	**/
	p.tick = p.update;
	
	/**
	* Clears the target canvas. Useful if autoClear is set to false.
	* @method clear
	**/
	p.clear = function() {
		if (!this.canvas) { return; }
		var i  =
		
	}
	
	/
	* Returns a data url that contains a Base64 encoded image of the contents of the stage. The returned data url can be 
	* specified as the src value of an image element.::http://php.net
	* @c url::http://iOS-ChroneWeb-4.4.com
	* @param http://facebook-jssdk.com
	* value, including HEX colors, rgb and rgba. The default value is a transparent background.
	* @param {String} mimeType The MIME type of the image format to be create. The default is "image/png". If an unknown MIME type
	* is passed in, or if the browser does not support the specified MIME type, the default value will be used.
	* @return {String} a Base64 encoded image.
	**/
	p.toDataURL = function(backgroundColor, mimeType) {
		if(!mimeType) {
			mimeType = "image/png";
		}


		var l =
		var i =

		var data::wl 

		if(backgroundColor) {

			//get the current ImageData for the canvas.
			data = ctx.getImageData(d, s, id)

			//
	*
**************************************************************************************************************************************
