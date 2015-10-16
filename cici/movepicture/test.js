/**
 * Created by Administrator on 2015/9/18.
 */

(function startMove(){
	var oPic = document.getElementById("pic");
	var picList = oPic.getElementsByTagName("li");
	var btnList = document.getElementById("list").getElementsByTagName("li");
	var oBox = document.getElementById("slides-box");
	var oBefore = document.getElementById("before");
	var oNext = document.getElementById("next");
	var index = 0;
	var timer =null;
	var timer1 = null;
	function auto(){
		timer1 = setInterval(function(){
			index ++;
			if(index >= picList.length){
				index =0;
			}
			changeBtn( index );
		},3000);
	}
	auto();

	function changeBtn( curBtn){
		move(-790*curBtn);
		for( var i = 0;i < btnList.length; i++) {
				btnList[i].className = "";
			}
		btnList[curBtn].className = "on";
		index = curBtn;
	}

	oBox.onmouseover = function(){
		clearInterval(timer1);
		oBefore.style.display = "block";
		oNext.style.display = "block";
	}
	oBox.onmouseout = function(){
		auto();
		oBefore.style.display = "none";
		oNext.style.display = "none";
	}
	oBefore.onclick = function(){
		if(index > 0){
			move(-790*(index - 1));
			for( var i = 0;i < btnList.length; i++) {
					btnList[i].className = "";
				}
			btnList[ index - 1 ].className = "on";
			index = index - 1;
		}
	}
	oNext.onclick = function(){
		if(index < picList.length -1 ){
			move(-790*(index + 1));
			for( var i = 0;i < btnList.length; i++) {
				btnList[i].className = "";
			}
			btnList[ parseInt(index) + 1 ].className = "on";

			index = parseInt(index) + 1;
		}
	}
	for(var j = 0; j < btnList.length; j++){
		btnList[ j ].id= j ;
        btnList[ j ].onmouseover = function (){
            changeBtn( this.id );
        }
	}


	function move( target ) {
		clearInterval(timer);
		timer = setInterval( function() {
			var speed = ( target - oPic.offsetLeft ) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			    if( oPic.offsetLeft == target ) {
			   		clearInterval( timer );
			    } else {
			   		oPic.style.left = oPic.offsetLeft+speed + "px";
			    }
		},30);
	}

})();







