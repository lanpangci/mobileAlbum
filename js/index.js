var arr = [
    {url: './images/0.png'},
    {url: './images/1.png'},
    {url: './images/2.png'},
    {url: './images/3.png'},
    {url: './images/4.png'},
    {url: './images/5.png'},
    {url: './images/6.png'},
    {url: './images/7.png'},
    {url: './images/8.png'},
    {url: './images/9.png'},
    {url: './images/10.png'},
    {url: './images/11.png'},
    {url: './images/12.png'},
    {url: './images/13.png'},
    {url: './images/14.png'}
]
var deviceW_H = $(window).width()/$(window).height(),
    activeIndex;
function init() {
    renderPage(arr);
    $('li').css('height',$('li').width());
}
init();


function renderPage(arr) {
    var str = '';
    arr.forEach(function (ele, index) {
        str += '<li><img src="'+ele.url+'"/></li>';
    });
    $('.wrapper').append($(str));
}

$('ul').on('tap', 'li', function () {
    var index = activeIndex = $(this).index();
    loadImg(index);
})

function loadImg(index) {

    $('.show').html('').css('display','block');
    var img = new Image();
    img.src = arr[index].url;
    img.onload = function () {
        var w = this.width;
        var h = this.height;
        var imgW_H = w/h;
        if(imgW_H < deviceW_H) {//竖图
            $(this).appendTo($('.show')).css({height: '100%',left: '50%'}).animate({opacity: 1}, 300);
            var itemW = $(this).width();
            $(this).css('margin-left',-itemW/2 + 'px');

        }else{//横图
            $(this).appendTo($('.show')).css({width: '100%', top: '50%'}).animate({opacity: 1}, 300);
            var itemH = $(this).height();
            $(this).css('margin-top',-itemH/2 + 'px');
        }
    }
}
$('.show')
    .on('tap', function () {
        $(this).css('display','none');
    })
    .on('swipeLeft', function () {
        activeIndex++;
        if(activeIndex > arr.length - 1) {
            activeIndex = arr.length - 1;
        }else {
            loadImg(activeIndex);
        }
        // console.log(9);
        
    })
    .on('swipeRight', function () {
        activeIndex--;
        if(activeIndex < 0) {
           activeIndex = 0;
        }else {
            loadImg(activeIndex);
        }  
    })








