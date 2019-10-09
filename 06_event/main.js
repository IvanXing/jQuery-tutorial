//当‘click’card-trigger这个按钮时所发生的事件
$('#card-trigger').on('click', function () {
    if($('#card').is(':visible')){    //visible会判断display属性是否是none
        $('#card').slideUp();
    }else  $('#card').slideDown();
});
//也可以直接调用click方法，但这样写不易拓展和更改
// $('#card-trigger;).click(function (e) { 
// });

//当鼠标进入#card这个div时所发生的的事件
$('#card').on('mouseenter', function () {
   $('#card').addClass('active');
});
//当鼠标离开#card这个div时所发生的的事件
$('#card').on('mouseleave', function () {
    $('#card').removeClass('active');
 });
