var msg = [
        "빌 스트리트가 말할 수 있다면",
        "올랜도",
        "단지 흑인이라서, 다른 이유는 없다",
        "바이러스를 이기는 영양제"
    ];

var writer = [
        "제임스 볼드윈",
        "버지니아 울프",
        "제임스 볼드윈",
        "김경철, 김해영"
    ];

$(function(){
    
    $(".intro_index li").mouseenter(function(){
        $(this).addClass("on").siblings().removeClass("on");
        
        var liin =$(this).index();
        console.log(liin);
        
        $(".bgbox").children().eq(liin).addClass("active").siblings().removeClass("active");
    });////////인트로 각 이름 호버할 시//////////////

    
    /*새로나온책 포문돌리기*/
    for(var i=0; i<4; i++){
        $(".newlist").append('<li><a href="#"><img src="images/books/'+(i+1)+'.jpg" alt="새책"><b>'+msg[i]+'</b><p>'+writer[i]+'</p></a></li>');
    };
    
    /*이벤트 배너 좌로 넘어가기*/
    
    
    
    
    
    
    
});/////////////제이쿼리블록//////////////
/////////////////////////////////////////////////