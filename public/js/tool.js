
let test={
	// 检测键盘按下的键的keycode
	key(){
			let res = "";
			if(arguments[0] != "text"){//警告框的方法
				document.onkeydown = function (event) {
				let diskey = event || window.event || arguments.callee.caller.arguments[0];
  			alert(diskey.keyCode);
  }
		}

			else {//文本框的方法
				$("body").prepend("<input>");
				$("body").append("<div>empty</div>");
				document.onkeydown = function(event){ 
				$("div").html("Key: " + event.which);
				res =	backAsc(event.keyCode)+res
				$("input").val(res);
				}
		}
	}
}

//js字符与ASC码相互转换
//字符转ASC

function getAsc(str) {

	return str.charCodeAt(0);

}

//ASC转字符

function backAsc(str) {

	return String.fromCharCode(str);

}

//js判断是否数字

function isNumber(str) {

	if(!isNaN(str)) { //数字

		return true;

	} else {

		return false;

	}

}

//字符串转数组

function transferToArr(text) {
	var arr = new Array(); //种子数组
	for(var i = 0; i < text.length; i++) {
		arr[i] = text.substr(i, 1);
	}
	return arr;
}

//字符串重复
function times(str, num) {
	return new Array(num + 1).join(str);
}


