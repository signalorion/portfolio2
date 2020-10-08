////스크롤구역//////////////////////////
        $(window).scroll(function(){
            //스크롤바 위치 값
            var scTop=$(this).scrollTop();
            console.log("스크롤위치"+scTop);
            
            //첫번째요소 등장위치
            if(scTop===100){
                $(".imghere0").stop().css({
                    opacity:"1"
                });
            }////if////////////////////
            
            //두번째요소 등장위치
            if(scTop===400){
                $(".imghere1").stop().css({
                    opacity:"1",
                    marginTop: "-100px"
                });
            }////if////////////////////
            
            //세번째요소 등장위치
            if(scTop===700){
                $(".imghere2").stop().css({
                    opacity:"1",
                    marginTop: "-100px"
                });
            }////if////////////////////
            
            
            
        });///////scroll//////////////////
        //////////////////////////////////////////////

//근데 저 스크롤효과가 모바일환경에서는 안되게 해야함...안먹히니까
var winwid = window.outerWidth;
console.log(winwid);

$(function(){
    console.log("로딩완료");
    
    if(winwid<=1200){
    $(".imghere0").stop().css({
                    opacity:"1"
                });
        $(".imghere1").stop().css({
                    opacity:"1",
            marginTop: "-100px"
                });
         $(".imghere2").stop().css({
                    opacity:"1",
             marginTop: "-100px"
                });
}
});////////////////제이쿼리로딩영역///////////
//////////////////////////////////////////////

