/*열린책들 로그인 제이쿼리*/

$(function(){
    console.log("로딩완료");
    
     $(".mobileham a").click(function () {
        $(".m_sidemenu").animate({
            width: "100vw"
        }, 400);
    });

    $(".m_side_x").click(function () {
        $(".m_sidemenu").animate({
            width: "0"
        }, 400);
    });
});////////////////제이쿼리로딩영역///////////
//////////////////////////////////////////////

