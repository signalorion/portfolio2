$(function(){
    
    $(".intro_index li").mouseenter(function(){
        $(this).addClass("on").siblings().removeClass("on");
        
        var ebg = $(this).children("a").attr("href");
        console.log(ebg);
        
        $("#intro").css({
            background: "url(../"+ebg+") no-repeat center/cover"
        });
        
        var lbg = $(this).attr("class");
        console.log(lbg);
        
        var laft =$(".intro_index li.on::after");
        laft.css({
            backgroundColor:"red"
        });
    });////////인트로 각 이름 호버할 시//////////////
    
    $(".intro_index li a").click(function(e){
        e.preventDefault();
    });///////////a링크 이동방지////////////////
    ///근데 이동하긴 해야하는데... 그냥 호버하면 뜰걸 각각 정하는게 맘 편할까...//
    
    
    
    
    
    
    
});/////////////제이쿼리블록//////////////
/////////////////////////////////////////////////