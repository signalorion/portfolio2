var msg = [
        "빌 스트리트가 말할 수 있다면",
        "단지 흑인이라서, 다른 이유는 없다",
        "인도로 가는 길",
        "아이의 뇌는 스스로 배운다"
    ];

var writer = [
        "제임스 볼드윈",
        "제임스 볼드윈",
        "E. M. 포스터",
        "셀린 알바레즈"
    ];

var bantit = ["아이를 위한 정신 의학",
            "중국과 협상하기",
             "바이러스를 이기는 영양제",
             "심판",
             "올랜도"
            ]
var banwriter = [
    "다키카와 가즈히로",
    "헨리 M. 폴슨 주니어",
    "김경철, 김해영",
    "베르나르 베르베르",
    "버지니아 울프"
]

var bantrans = [
    "김경원 옮김",
    "고기탁 옮김",
    "&nbsp;",
    "전미연 옮김",
    "이미애 옮김"
]


$(function () {

    $(".intro_index li").mouseenter(function () {
        $(this).addClass("on").siblings().removeClass("on");

        var liin = $(this).index();
        console.log(liin);

        $(".bgbox").children().eq(liin).addClass("active").siblings().removeClass("active");
    }); ////////인트로 각 이름 호버할 시//////////////

    /*배너이미지 돌아가기*/
    var banimg = $(".ban_img_box div");
    var banbul = $(".ban_bul li")
    var seq = 0;
    setInterval(function () {
        seq++;
        if (seq === 5) seq = 0;

        $(".ban_txt_li").empty().append('<li><h3><a href="newbook.html">' + bantit[seq] + '</a></h3></li><li><a href="#">' + banwriter[seq] + '<span>' + bantrans[seq] + '</span></a></li>');
        banimg.eq(seq).addClass("active").siblings().removeClass("active");

        banbul.eq(seq).addClass("on").siblings().removeClass("on");
    }, 4000);
    
    /*블릿 누르면 이동하기*/
    $(".ban_bul li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        var thisbul = $(this).index();
        console.log(thisbul);
        
        
    });////////블릿누르면 이동////////////////


    /*새로나온책 포문돌리기*/
    for (var i = 0; i < 4; i++) {
        $(".newlist").append('<li><a href="#"><img src="images/books/' + (i + 1) + '.jpg" alt="새책"><b>' + msg[i] + '</b><p>' + writer[i] + '</p></a></li>');
    };

    /*이벤트 배너 좌로 넘어가기*/

    $('.eventban').bxSlider({
        auto: true,
        autoControls: false,
        stopAutoOnClick: false,
        pager: false,
        slideWidth: 600
    });

/*대표작가 사진 호버하면*/
    $(".author_list li a div ").hide();
    
    $(".author_list li").hover(function(){
        $(this).find("div").stop().fadeIn(300);
    }, function(){
        $(this).find("div").stop().fadeOut(300);
    });
    
    /*격자무늬 메뉴 호버하면*/
    $(".sechover").hide();
    
    $(".boxs_wrap section").hover(function(){
        $(this).find(".sechover").stop().fadeIn(200);
    },function(){
        $(this).find(".sechover").stop().fadeOut(200);
    });
    
    


}); /////////////제이쿼리블록//////////////
/////////////////////////////////////////////////
