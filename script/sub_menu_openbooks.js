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