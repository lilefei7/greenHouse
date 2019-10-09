t = setTimeout("javascript:location.reload()", 1000);
document.onkeydown = function (event) {
  let e = event || window.event || arguments.callee.caller.arguments[0];
  if (e && e.keyCode == 123) { // 按 F12 
    clearInterval(t);
}
  if (e && e.keyCode == 83) { // 按 S 停止刷新
    clearInterval(t);
}
}
// 点击页面开启自动刷新
$(document).click(function() {
  clearInterval(t);
  t = setTimeout("javascript:location.reload()", 2000);
})

