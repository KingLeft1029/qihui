//导航显示固定
$(window).scroll(function(){
    var st=$("body").scrollTop()||$("html").scrollTop();
if(st>=153){
    $(".lastnav").fadeIn()
}else{
    $(".lastnav").fadeOut()
}
// console.log(st);
})
// 产品的交互
$(".chanp").click(function (e) {
    $(".downChanp").css({
        display: "block",
    })
    e.stopPropagation()
    $(".down1").css({
        transform: "rotate(180deg)",
        transition: "0.5s"
    })


})
$(document).click(function () {
    $(".downChanp").css({
        display: "none"
    })
    $(".down1").css({
        transform: "rotate(0deg)",
        transition: "0.5s"
    })
})
// 右滑出来的列表
// $(".listRR .listR").eq(0).css({
//     display:"block"
// })
var y=0
var flag=true
$(".liss .lis").hover(function(){
   
        $(".liss .lis").eq(y).css({
            background:"white"
        })
        $(".listRR .listR").eq(y).css({
            display:"none"
        })
        var res=$(this).index()
        // console.log(res)
        $(".liss .lis").eq(res).css({
            background:"#DCDCDE"
        })
        $(".listRR .listR").eq(res).css({
            display:"block"
        }).animate({
            width:"1000px",
            height:"490px"
        })
        y=res

},function(){
    $(".listRR .listR").css({
            display:"none"
        }).animate({
            width:0,
            height:"490px"
        })
    $(".liss .lis").css({
        background:"white"
    })
})

// 轮播图的交互
var x = 0
$(".square div").eq(0).css({
    borderColor: "red"
})
$(".square span").eq(0).css({
    display: "block"
})
$(".lunb img").eq(0).css({
    display: "block"
})
$(".square div").mouseover(function () {
    $(".square span").eq(x).css({
        display: "none"
    })
    $(".square div").css({
        borderColor: "white"
    })
    $(".lunb img").eq(x).css({
        display: "none"
    })
    var index = $(this).index()
    // console.log(index)
    $(this).css({
        borderColor: "red"
    })
    $(".square span").eq(index).css({
        display: "block"
    })
    $(".lunb img").eq(index).css({
        display: "block"
    })
    x = index
})
$(".lunb").mouseover(function () {
    clearInterval(timer)
})
var timer = setInterval(function () {
    $(".square span").eq(x).css({
        display: "none"
    })
    $(".square div").eq(x).css({
        borderColor: "white"
    })
    $(".lunb img").eq(x).css({
        display: "none"
    })
    x++
    if (x > $(".lunb img").length - 1) {
        x = 0
    }
    $(".square span").eq(x).css({
        display: "block"
    })
    $(".square div").eq(x).css({
        borderColor: "red"
    })
    $(".lunb img").eq(x).css({
        display: "block"
    })
}, 1000)
// 登录注册
$(".denglz .dengl").hover(function () {
    $(".denglz .dengl").css({
        background: "#DD2C4B",
        color: "white"
    })
    $(".denglz .denglpic").attr({
        src: "images/tou2.png"
    })
}, function () {
    $(".denglz .dengl").css({
        background: "#fff",
        color: "#DD2C4B"
    })
    $(".denglz .denglpic").attr({
        src: "images/tou.png"
    })
})
$(".denglz .zhuc").hover(function () {
    $(".denglz .zhuc").css({
        background: "#DD2C4B",
        color: "white"
    })
    $(".denglz .zhucpic").attr({
        src: "images/bi2.png"
    })
}, function () {
    $(".denglz .zhuc").css({
        background: "#fff",
        color: "#DD2C4B"
    })
    $(".denglz .zhucpic").attr({
        src: "images/bi.png"
    })
})
// 移动的小横杠 这个代码需要优化一下
$.fn.extend({
    tabyi: function () {
        var tab = $(this).children(".gzgc").children("div");
        var heng = $(this).children(".heng")
        var heng2 = $(this).children(".heng2")
        var content=$(this).children(".tabcontent").children("div")
        content.eq(0).css({
            display:"block"
        })
        tab.eq(0).mouseover(function () {
            content.eq(0).css({
                display:"block"
            })
            content.eq(1).css({
                display:"none"
            })
            content.eq(2).css({
                display:"none"
            })
            content.eq(3).css({
                display:"none"
            })
            heng.animate({
                left: "13px",
                width:"30px"
            },200)
            tab.eq(0).css({
                color:"#DD2C4B"
            })
            tab.eq(1).css({
                color:"#363636"
            })
            tab.eq(2).css({
                color:"#363636"
            })
            tab.eq(3).css({
                color:"#363636"
            })
        })
        tab.eq(1).mouseover(function () {
            content.eq(1).css({
                display:"block"
            })
            content.eq(0).css({
                display:"none"
            })
            content.eq(2).css({
                display:"none"
            })
            content.eq(3).css({
                display:"none"
            })
            heng.animate({
                left: "47px",
                width:"30px"
            },200)
            tab.eq(1).css({
                color:"#DD2C4B"
            })
           
            tab.eq(0).css({
                    color:"#363636"
                })
                tab.eq(2).css({
                    color:"#363636"
                })
                tab.eq(3).css({
                    color:"#363636"
                })
        })
        tab.eq(2).mouseover(function () {
            content.eq(2).css({
                display:"block"
            })
            content.eq(1).css({
                display:"none"
            })
            content.eq(0).css({
                display:"none"
            })
            content.eq(3).css({
                display:"none"
            })
            heng.animate({
                left: "82px",
                width:"70px"
            },200)
            tab.eq(2).css({
                color:"#DD2C4B"
            })
            tab.eq(0).css({
                color:"#363636"
            })
            tab.eq(1).css({
                color:"#363636"
            })
            tab.eq(3).css({
                color:"#363636"
            })
        })
        tab.eq(3).mouseover(function () {
            content.eq(3).css({
                display:"block"
            })
            content.eq(1).css({
                display:"none"
            })
            content.eq(2).css({
                display:"none"
            })
            content.eq(0).css({
                display:"none"
            })
            heng.animate({
                left: "152px",
                width:"68px"
            },200)
            tab.eq(3).css({
                color:"#DD2C4B"
            })
            tab.eq(0).css({
                color:"#363636"
            })
            tab.eq(2).css({
                color:"#363636"
            })
            tab.eq(1).css({
                color:"#363636"
            })
        })
    }
})
$(".tab").tabyi()
// 左侧快捷导航栏
var z=0
$(".quickNav li").mouseover(function(){
//     $(".quickNav font").eq(x).css({
//         display:"none"
//     })
// var index=$(this).index()
// console.log(index)
//     $(".quickNav font").eq(index).css({
//         display:"block"
//     })
//     z=index
 $(this).children("font").css({
        display:"block"
    })
}).mouseout(function(){
    $(".quickNav font").css({
        display:"none"
    })
})
// 左侧快捷导航栏
$(window).scroll(function(){
    var st=$("body").scrollTop()||$("html").scrollTop();
if(st>=350){
    $(".quickNav").fadeIn()
}else{
    $(".quickNav").fadeOut()
}
// console.log(st);
})
// 楼层

var floors=document.getElementById("quickNav").getElementsByTagName("li")
var contents=document.getElementById("bigfloor").getElementsByClassName("onefloor")
var font=document.getElementById("quickNav").getElementsByTagName("font")

//   监听页面滚动  window.onscroll
//     滚动过程中获取当前滚动高度
//     根据滚动高度 结合指定元素的offsetTop进行换算
//     满足相应条件时 元素出现在视图区域内  执行相应逻辑处理

//     记录一下 滚动到哪一个内容模块
    var x=0;
    function scroll(){

        // 获取窗口高度
        var H=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight;

        // 获取页面滚动高度
        var st=document.body.scrollTop||document.documentElement.scrollTop;

        for(var i=0;i<contents.length;i++){
            // 获取元素顶部偏移量 offsetTop
            var ot=contents[i].offsetTop;
            var h=parseFloat(getComputedStyle(contents[i],null).height)

           // i!=x  为了不重复执行 
            if(st>=ot-H/2&&st+H/2<ot+h&&i!=x){
                 font[x].style.display="none";
                // nav.children[i].style.background="gold";
                x=i;
                // console.log(i);
                font[i].style.display="block";
            }
        }

    }

    // 初始执行 确定位置
    scroll();

    window.onscroll=scroll;

// 点击到对应位置(重点掌握!!!!!)
    var flag = true //设置标识。防止出现跑马灯
    $(".quickNav li").click(function(){
        flag = false
        var index = $(this).index()//获取当前点击元素的索引
        var top = $(".onefloor").eq(index).offset().top-50;//获取每个banner到顶部的距离
        $("html,body").stop(true).animate({"scrollTop":top},function(){flag = true})
    })
    
// //			滚轮滑动切换楼层
//     $(window).scroll(function(){
//         if(flag){
//         //浏览器可视窗口的一半，也可以根据自己需求设定
//             var winH = $(window).innerHeight()/2;
//             var scrollT = $(window).scrollTop()
//             var len = $(".onefloor").size()
//             for(var i=0;i<len;i++){
//                 //注意这里banner对象加了i之后变成了js对象,所以用offsetTop
//                 var bannerGap = $(".onefloor")[i].offsetTop - scrollT
//                 if(bannerGap < winH){
//                     $(".quickNav font").eq(i).css({
//                         display:"block"
//                     })
//                 }else{
//                     $(".quickNav font").eq(i).css({
//                         display:"none"
//                     })
//                 }
//             }
//         }
//     })
