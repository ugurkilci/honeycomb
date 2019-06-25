
$(document).ready(function(){
	var canvas = $("#canvas")[0];
	var Context = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var GameOver = $("audio#GameOver").get(0);
	var GamePlay = $("audio#GamePlay").get(0);
	var SnakeEating = $("audio#SnakeFood").get(0);
	var cw = 10;
	var direction;
	var apple;
	var score;
	var SnakeArray; 
	$("button#play").hide();
	$("button#Soundoff").hide();
	function GameStart()
	{
		if (GamePlay.paused)
         GamePlay.play();
		direction = "right";
		Paint_Snake();
		create_apple();
		score = 0;
		Speed =40;		
		play();
	}
	function play()
	{
	    if(typeof Game_Interval != "undefined") clearInterval(Game_Interval);
		Game_Interval = setInterval(paint, Speed);	
		allowPressKeys = true;
		$("button#Soundoff").removeAttr('disabled');
		$("button#SoundOn").removeAttr('disabled');

	}
	function pause()
	{	
		clearInterval(Game_Interval);
		allowPressKeys = false;
		$("button#Soundoff").attr('disabled','disabled');
		$("button#SoundOn").attr('disabled','disabled');
	}	
	GameStart();
	function Paint_Snake()
	{
		var length = 3; 
		SnakeArray = [];
		for(var i = length-1; i>=0; i--)
		{
			SnakeArray.push({x: i, y:0});
		}
	}
	
	function create_apple()
	{
		apple = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
	}
	
	function paint()
	{
		YourScore="Puaniniz: "+score;
	    $("p#Score").html(YourScore);
		Context.fillStyle = "#262425";
		Context.fillRect(0, 0, w, h);
		Context.strokeStyle = "#262425";
		Context.strokeRect(0, 0, w, h);
	  	var HeadX = SnakeArray[0].x;
		var HeadY = SnakeArray[0].y;
		if(direction == "right") HeadX++;
		else if(direction == "left") HeadX--;
		else if(direction == "up") HeadY--;
		else if(direction == "down") HeadY++;
		if(HeadX == -1 )
		{
			HeadX=w/cw-1;
		}else if (HeadX==w/cw)
		{
		HeadX=0;
		}
		if(HeadY == -1)
		{
		HeadY=h/cw-1;
		}
		else if (HeadY == h/cw)
		{
		HeadY=0;
		}
	
		if(Ouroboros_Check(HeadX, HeadY, SnakeArray))
		{
		pause();
		GamePlay.pause();
		if(GameOver.paused)
		  GameOver.play();
		  alert("Oyun bitti - Puaniniz : "+score);
		  GameStart();
		  return;
		}
		if(HeadX == apple.x && HeadY == apple.y)
		{
			SnakeEating.play();
			var tail = {x: HeadX, y: HeadY};
			score++;
			create_apple();
		
		}
		else
		{
			var tail = SnakeArray.pop();
			tail.x = HeadX; tail.y = HeadY;
		}		
		SnakeArray.unshift(tail); 
		for(var i = 0; i < SnakeArray.length; i++)
		{
			var c = SnakeArray[i];
			Draw_pixel(c.x, c.y);
		}
		Draw_pixel(apple.x, apple.y);		
	}	
	
	function Draw_pixel(x, y)
	{
		Context.fillStyle = "#ff4d4d";
		Context.fillRect(x*cw, y*cw, cw, cw);
		Context.strokeStyle = "#ff4d4d";
		Context.strokeRect(x*cw, y*cw, cw, cw);
	}
	
	function Ouroboros_Check(x, y, array)
	{
		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y)
			 return true;
		}
		return false;
	}
	
	$("button#pause").click(function(){
	$("button#pause").hide();	
	GamePlay.pause();
	pause();
	$("button#play").show();
	});
	
	$("button#Soundoff").click(function(){
	$("button#Soundoff").hide();
	GamePlay.play();
	$("button#SoundOn").show();
	});
	
	$("button#SoundOn").click(function(){
	$("button#SoundOn").hide();
	GamePlay.pause();
	$("button#Soundoff").show();
	});
	
	$("button#play").click(function(){
	$("button#play").hide();
	play();
	GamePlay.play();
	$("button#pause").show();
	});
	
	//Lets add the keyboard controls now
	$(document).keydown(function(e){
	if (!allowPressKeys){
    return null;
  }
		var key = e.which;
		switch(key)
		{
		case 37:
		if(direction!="right") direction="left";
		break;
		case 38:
		if(direction!="down") direction="up";
		break;
		case 39:
		if(direction!="left") direction="right";
		break;
		case 40:
		if(direction!="up") direction="down";
		break;
		default: 
         break;
		}
	})
	
	
	
	
	
	
	
})