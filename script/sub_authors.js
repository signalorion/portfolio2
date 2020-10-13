/*서브페이지- 작가 자바스크립트*/
var auth_name = [
    "<span class='m_auth_name'>베르나르 <span class='mobilebr'>베르베르</span></span>",
    "<span class='m_auth_name'>로베르토 <span class='mobilebr'>볼라뇨</span></span>",
    "<span class='m_auth_name'>폴 <span class='mobilebr'>오스터</span></span>",
    "<span class='m_auth_name'>조르주 <span class='mobilebr'>심농</span></span>"
]

var auth_txt = ["인간의 눈높이를 벗어난<br> 세상 들여다 보기",
                "라틴 아메리카 문학의<br>시한폭탄",
                "재즈처럼 흐르는<br>도시의 감수성",
                "추리소설과 본격문학의<br>경계에 선 작가"
               ]
var intro1 = [
    "&lt;프랑스의 천재작가&gt;. 베르나르 베르베르를 두고 어떤 평자가 한 말이다. 그러나 베르베르는 결코 천재 작가가 아니다. 뛰어난 상상력과 과학지식을 바탕으로 한 그의 작품들은 우연의 산물이 아니라 어려서부터 모든 것을 주의 깊게 관찰하고 새로운 시각으로 보려고 노력함으로서 필연적으로 생겨난 결과물이기 때문이다. 한국인이 가장 사랑하는 작가 목록의 첫 머리에 항상 이름을 올리는 베르베르, 이제 베르베르는 그를 발견해 준 한국에서 뿐 아니라 모국인 프랑스에서도 내놓는 책마다 1위에 오르며 남녀노소를 무론하고 다양한 독자의 사랑을 받는 인기 작가로 자리매김했다.",

    "가르시아 메르케스 이후 라틴 아메리카에 등장한 최고의 작가, 스페인어권 세계에서 가장 영향력이 크고 유수의 작가 및 평론가들로부터 추앙받는 소설가, 라틴 아메리카 최후의 작가. 지금은 이 땅에 없는 라틴 아메리카 문학의 &lt;시한폭탄&gt;, 로베르토 볼라뇨에게 바치는 찬사들이다.",

    "소외된 주변 인물들에 대한 따뜻한 시선을 잃지 않으면서도, 감정에 몰입되지 않고 그 의식세계를 심오한 지성으로 그려내는 폴 오스터는 그 마법과도 같은 문학적 기교로 &lt;떠오르는 미국의 별&gt;이라는 칭호를 부여받은 바 있는 유대계 미국 작가로 미국에서 보기 드문 순문학 작가이다.",

    "평생 4백 편을 웃도는 소설을 쓰고, 약 20개의 필명을 지녔으며 1만 명의 여자와 잠자리를 함께 했다는 남자.  벨기에 작가 조르주 심농은 &lt;다산성 多産性&gt;의 작가다. 엄청난 다작, 그것도 모두 일정 수준 이상의 작품성을 지닌 다작으로 유명한 심농은 그를 추리 소설 작가로 명성을 떨치게 한 &lt;매그레 반장 시리즈&gt; 103편, 기타 장편 소설 117편, 그리고 필명으로 쓴 저작까지 모두 4백 편이 넘는 소설을 썼다. 프랑스어로 쓰인 그의 소설은 50개 이상의 언어로 번역되었으며전 세계적으로 8억 5천만 권 이상 팔려 나갔다. 카뮈, 지드, 헤밍웨이 등 수많은 작가들이 그의 작품에 바친 찬사는 심농의 중독적인 매력을 가늠하는 좌표와도 같다."
]

var intro2 = [
    "갓 데뷔한 그에게 &lt;천재작가&gt;란 극찬을 듣게 한 소설 『개미』의 시초는 베르베르가 개미의 일하는 모습에 매료되어 더 이상 &lt;개미집을 부수지 않게 된 열두 살 무렵&gt;까지 거슬러 올라간다. 그러나 집필의 직접적 동기가 된 것은 1983년, &lt;뉴스&gt;재단의 콘테스트에서 아크리카 개미에 관한 보고서로 호평을 받으면서 부터다. 곧바로 아프리카 코트디부아르로 가서 &lt;마냥 개미&gt;를 관찰하고 돌아온 그는 120번에 가까운 개작을 거듭한 끝에 1991년 봄, 소설 『개미』를 탈고한다. 그는 『개미』로 &lt;과학과 미래&gt;의 그랑프리와&lt;팔리시상&gt;을 받았다.",

    "볼라뇨는 1953년 칠레에서 태어나 유년기를 보내고 멕시코로 이주해 청년기를 보냈다. 항상 스스로를 시인의로 여겼던 그는 15세부터 시를 쓰기 시작해 20대 초반에는 &lt;인프라레알리스모&gt;라는 반항적 시 문학 운동을 이끌기도 했다. 이어 20대 중반 유럽으로 이주, 30대 이후 본격적으로 소설 쓰기에 투신한다.",

    "특한 소재의 이야기에 팽팽한 긴장이 느껴지는 현장감과 은은한 감동을 가미시키는 천부적 재능을 갖고 있는 그는 현대 작가로서는 보기 드문 재능과 문학적 깊이, 문학의 기인이라 불릴만큼 개성있는 독창성과 담대함을 소유한 작가이기도 하다. 미국문학에서의 사실주의적인 경향과 신비주의적인 전통이 혼합되고, 동시에 멜로드라마적 요소와 명상적 요소가 한데 뒤섞여 있기도 한 그의 작품들은, 문학 장르의 모든 특징적 요소들의 혼성된 &lt;아름답게 디자인 된 예술품&gt;이라는 극찬을 받은 바 있다. 이렇게 많은 비평가들의 호평 속에 발간된 그의 작품들은 미국 뿐만 아니라 유럽문단, 특히 프랑스에서 주목받고 있으며, 그의 작품들은 현재 20여개국에서 번역 출간되고 있다.",

    "조르주 심농은 1903년 2월 13일 벨기에 리에주에서 태어났다. 1919년 열여섯 살에『가제트 드 리에주』지의 기자가 된 심농은 이 곳에서 1천여 개에 달하는 기사를 쓴다. 그리고 1922년 파리 북역에 발을 디딘 후 1924년부터 장 두 페리, 조르주 마르탱 조르주, 조르주 심 등 20여 개의 필명 아래 대중 소설들을 펴낸다.이어 심농은 일약 세계적인 추리 소설 작가로 등극한다. 바로 그의 분신과도 같은 캐릭터, &lt;매그레 반장&gt;이 등장하면서부터다."
]

var intro3 = [
    "그의 작품들은 인간 중심의 세계관을 벗어나, 다른 눈높이에서 바라 본 세상을 여러 방면에서 제시하고 있다. 베르베르는 개미의 시각에서 인간 문명과의 조우를 그리고 있는 『개미』, 그리고 세계 밖에서 세계를 들여다보게 하는 백과사전인 『상대적이며 절대적인 지식의 백과사전』, 죽음과 삶을 넘낟는 영계 탐사자를 다룬 『타나토노트』, 명상을 통해 자기 내면세계로 안내하는 『여행의 책』, 인간 진화의 수수께끼를 본격적으로 탐구한 과학스릴러 『아버지들의 아버지』등의 화제작들을 발표하였다.",

    "첫 장편소설 『아이스링크』(1993)을 필두로 거의 매년 소설을 펴냈고, 각종 문학상을 휩쓸며 &lt;볼라뇨 전염병&gt;을 퍼뜨렸다. 특히 1998년 발표한 방대한 소설 『야만스러운 탐정들』로 &lt;라틴 아메리카의 노벨 문학상&gt;이라고 불리는 로물로 가예고스상을 수상하면서 더 이상 수식이 필요 없는 위대한 문학가로 우뚝 섰다. 그리고 2003년 스페인의 블라네스에서 숨을 거두기 직전까지 매달린, 1천 페이지가 넘는 어마어마한 작품 『2666』은 볼라뇨 필생의 역작이자 전례 없는 &lt;메가소설&gt;로서 사후 출간되어 스페인과 칠레, 미국의 문학상을 휩쓸었다. 그의 작품에서는 범죄, 죽음, 창녀의 삶과 같은 어둠의 세계와 볼라뇨 삶의 본령이었던 문학 또는 문학가들에 관한 이야기, 그리고 암담했던 라틴 아메리카의 정치적 상황에 관한 통렬한 성찰이 끝없이 펼쳐진다. 그의 글은 사실과 허구가 절묘하게 중첩되고 혼재하며, 깊은 철학적 사고가 위트 넘치는 풍자와 결합하여 끊임없이 웃음을 자아낸다. 작품으로는 대표작 『2666』과 『야만스러운 탐정들』을 비롯해 장편소설 『먼 별』(1996), 『부적』(1999), 『칠레의 밤』(2000), 단편집인 『전화』(1997), 『살인 창녀들』(2001), 『참을 수 없는 가우초』(2003), 시집 『낭만적인 개들』(1995) 등이 있다.",

    "그의 작품들은 기적과 상실, 고독과 열광의 이야기를 전광석화 같은 언어로 종횡 무진 전개해 나가고 있다. 또한 운명적인 만남과 그리고 상징적인 이미지들을 탄탄한 문장과 짜임새 있는 구성으로 결합시켜 독자들을 있을 법하지 않게 뒤얽힌 우연의 연속으로 이끌어 간다. 폴 오스터는 종종 프란츠 카프카 혹은 사뮈엘 베케트와 비견된다. 그는 이들과 흡사한 시각에서, 그러나 완전히 독특한 방식으로 운명과 그것이 인간을 지배하는 방식에 몰두한다. 상징적인 이미지들을 탄탄한 문체와 짜임새 있는 구성으로 결합시키는 발군의 문학적 기량은 폴 오스터 이외의 다른 작가에서 좀처럼 발견할 수 없는 덕목이다.",

    "1929년경 심농은 트렌치코트를 걸치고 파이프 담배를 문 매그레 반장 캐릭터를 처음 구상한다. 1930년 매그레가 주인공으로 등장하는 작품 『불안의 집』을 조르주 심이라는 이름으로 출간하고, 이어 심농 스스로 &lt;나의 첫 매그레&gt;라 칭한 『수상한 라트비아인』,그리고 1931년 『고인 갈레 씨』, 『생폴리앙의 목매단 사나이』두 작품을 펴내 성공을 거둔다. 이제 작가 심농을 대표하는 캐릭터가 된 매그레 반장은 총 103편(장편 75편, 단편 28편)의 이야기에 등장, 독특한 심리 게임으로 사건을 풀어가며 셜록 홈스, 아르센 뤼팽과 더불어 추리 문학 역사상 가장 사랑받는 주인공으로 자리매김한다."
]

var pm = location.href; //url읽어옴
pm = pm.split("?")[1].split("=")[1];

var bookinfo = [
            ["개미,2001년 01월 30일 발행", "신 (1~6권),2008년 11월 20일 발행", "제 3인류 (1~6권),2013년 10월 23일 발행", "잠 (1~2권),2017년 06월 30일 발행"],
            ["칠레의 밤,2010년 02월 05일 발행", "야만스러운 탐정들(1~2권),2012년 06월 15일 발행", "2666(1~5권),2013년 12월 19일 발행", "아이스링크,2014년 05월 15일 발행"],
            ["달의 궁전,2000년 03월 15일", "오기렌의 크리스마스 이야기,2001년 07월 31일 발행", "빵굽는 타자기,2002년 01월 31일 발행", "뉴욕 3부작,2003년 03월 30일"],
            ["갈래 씨 홀로 죽다,2011년 05월 20일 발행", "리버티 바,2011년 12월 20일 발행", "매그레,2012년 01월 20일 발행", "마제스틱 호텔의 지하,2017년 08년 20일"]
        ];

$(function () {

    $(".authornav li").click(function (e) {
        e.preventDefault();

        $(this).addClass("here").siblings().removeClass("here");

        var authornum = $(this).index();
        console.log(authornum);

        $(".auth_box").find(".auth_name").empty().html(auth_name[authornum]);

        $(".auth_box").find(".auth_txt").empty().html(auth_txt[authornum]);

        $(".auth_img").css({
            background: " url(images/writers/intro" + authornum + ".jpg) no-repeat top/cover"
        });

        $(".intro1").empty().html(intro1[authornum]);
        $(".intro2").empty().html(intro2[authornum]);
        $(".intro3").empty().html(intro3[authornum]);

        
        ///////////작가에 맞춰서 버튼, 책 세팅 바꾸기///////////
        if (authornum === 1) {
            $(".next_author").show();
            $(".next_author a span").empty().text("폴 오스터");

            //책정보변경
            $(".bookli li").each(function (idx, ele) {
                $("img", this).attr("src", "images/books/auth" + authornum + "/a" + (idx + 1) + ".jpg");

                // 책정보 셋팅
                $("h5", this).text(bookinfo[authornum][idx].split(",")[0]);
                $("p", this).text(bookinfo[authornum][idx].split(",")[1]);

            }); /////////// each //////////////////
        } else if (authornum === 2) {
            $(".next_author").show();
            $(".next_author a span").empty().text("조르주 심농");

            //책정보변경
            $(".bookli li").each(function (idx, ele) {
                $("img", this).attr("src", "images/books/auth" + authornum + "/a" + (idx + 1) + ".jpg");

                // 책정보 셋팅
                $("h5", this).text(bookinfo[authornum][idx].split(",")[0]);
                $("p", this).text(bookinfo[authornum][idx].split(",")[1]);

            }); /////////// each //////////////////
        } else if (authornum === 0) {
            $(".next_author").show();
            $(".next_author a span").empty().text("로베르토 볼라뇨");

            //책정보변경
            $(".bookli li").each(function (idx, ele) {
                $("img", this).attr("src", "images/books/auth" + authornum + "/a" + (idx + 1) + ".jpg");

                // 책정보 셋팅
                $("h5", this).text(bookinfo[authornum][idx].split(",")[0]);
                $("p", this).text(bookinfo[authornum][idx].split(",")[1]);

            }); /////////// each //////////////////

        } else { //3
            $(".next_author").hide();
            //책정보변경
            $(".bookli li").each(function (idx, ele) {
                $("img", this).attr("src", "images/books/auth" + authornum + "/a" + (idx + 1) + ".jpg");

                // 책정보 셋팅
                $("h5", this).text(bookinfo[authornum][idx].split(",")[0]);
                $("p", this).text(bookinfo[authornum][idx].split(",")[1]);

            }); /////////// each //////////////////
        }

    }); ////////작가이름클릭시////////////////////////////
    //////////////////////////////////////////////////////

    ///다음작가 버튼 클릭시
    $(".next_author").click(function () {
        $(".authornav .here").next().trigger("click");
    });


    // 파라미터에 따라 선택항목을 트리거한다!(메인페이지에서 사진클릭시)
    $(".authornav li").eq(pm).trigger("click");

    // 책 사진 셋팅 //파라미터에 맞춘거라 지우면 안됨
    $(".bookli li").each(function (idx, ele) {
        $("img", this).attr("src", "images/books/auth" + pm + "/a" + (idx + 1) + ".jpg");

        // 책정보 셋팅
        $("h5", this).text(bookinfo[pm][idx].split(",")[0]);
        $("p", this).text(bookinfo[pm][idx].split(",")[1]);

    }); /////////// each //////////////////

    /*sno를 바꾸자*/
    /*$(".authornav li a").click(function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();

        location.href = "authors.html?sno=" + idx;

    });///좋긴한데...화면이 너무 번쩍거림....//////*/





}); /////////제이쿼리 코드블록//////////////////////
