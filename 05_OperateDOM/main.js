//获取标签中的文字与set标签中的文字
var a = $('#a').text();
console.log(a);
$('#a').text("考你急哇");
//html就是返回html  text就是返回标签里的内容
var b = $('#b').html();
console.log(b);
$('#b').html('Are U OK?');
//在某个元素前后追加元素
$('#a').append('<div>Append</div>');
$('#a').prepend('<div>Prepend</div>');
//删除某个元素
$('#c').remove();