/**
 * ...
 * @author andri
 */

(function(window) {
	
	var MBButtonAnim = function MBButtonAnim(image, xTo) {
		this.initialize(image, xTo);
	}
	
	var p = MBButtonAnim.prototype = new createjs.BitmapAnimation();
	
	// static properties:
	MBButtonAnim.LRG_ROCK = 40;
	MBButtonAnim.MED_ROCK = 20;
	MBButtonAnim.SML_ROCK = 10;

	// public properties:
	p.bounds;	//visual radial size
	p.isOnPosition;		//is it on target position
	p.isClicked;	//is it clicked
	//p.pointIn;	//
	//p.pointAt;	//
	//p.pointTo;	//
	p.xTo;	
	p.spriteSheet = null;
	
	// save the original initialize-method so it won't be gone after overwriting it
	// constructor: unique to avoid overiding base class    
    p.BitmapAnimation_initialize = p.initialize;	
	//p.BitmapAnimation_tick = p.tick; 
	
	// initialize the object
	p.initialize = function(image, xTo) {
		//this.pointIn = pointIn;
		//this.pointAt = pointAt;
		//this.pointTo = pointTo;
		this.isOnPosition = false;
		this.isClicked = false;
		//this.x = this.pointIn.x;
		//this.y = this.pointIn.y;
		this.x  = -100;
		this.y  = 165;
		this.xTo = xTo;
		this.paused = false;
		
		 var data = {
			 images: [image],
			 frames: {width:100, height:200},
			 animations: {hover:[1, 2, 3, 4], click:[5], idle:[0]}
		 };

		var localSpriteSheet =  new createjs.SpriteSheet(data);
		//p.spriteSheet = new createjs.SpriteSheet(data);
		p.BitmapAnimation_initialize(localSpriteSheet);
		// add custom setup logic here.
		
		// start playing the first sequence:
        p.gotoAndPlay("click");     //animate
  
		//this.mouseover = MBButtonAnim.prototype.mbMouseOver;
		//this.onmouseout = MBButtonAnim.prototype.mbMouseOut;
		//this.onmousedown = MBButtonAnim.prototype.mbMouseDown;
		//this.click = MBButtonAnim.prototype.mbMouseDown;
				
		//this.addEventListener("mouseover", function(evt) { 
		//	p.cursor = "pointer";			
		//});
		this.addEventListener("click", this.mbMouseClick);  
		//this.addEventListener("mouseover", this.mbMouseOver); 
		this.addEventListener("mouseover", function(evt) { 
			p.cursor = "pointer";		
			p.gotoAndPlay("hover");
		});
		this.addEventListener("mouseout", this.mbMouseOut);
		
		var tween = createjs.Tween.get(this, {loop:false}, true) // get a new tween targeting circle
			.to({x:this.xTo,y:165},1000,createjs.Ease.get(1)); 
	}
	
	
	
	// public methods:	
	p.tick = function () {			
		//if(this.x < this.pointAt.x){
		//	this.isOnPosition = false;
		//}
		//if(this.isOnPosition == fal
	}
	
	p.mbMouseOver = function () {
		p.gotoAndPlay("hover");  
		p.cursor = "pointer";	
	}
	
	p.mbMouseOut = function (event) {
		p.cursor = "default";
		//p.gotoAndStop("idle");     //animate				
	}
	
	p.mbMouseClick = function (event) {
		p.gotoAndStop("click");     //animate		
	}
	
	
	window.MBButtonAnim = MBButtonAnim;
})(window);