$(function(){
    
    $(".intro_index li").mouseenter(function(){
        $(this).addClass("on").siblings().removeClass("on");
        
        var liin =$(this).index();
        console.log(liin);
        
        $(".bgbox").children().eq(liin).addClass("active").siblings().removeClass("active");
    });////////인트로 각 이름 호버할 시//////////////

    
    
    
    
    
    
    
    
});/////////////제이쿼리블록//////////////
/////////////////////////////////////////////////