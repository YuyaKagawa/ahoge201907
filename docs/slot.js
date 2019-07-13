function button_change(){
    var elem = document.getElementById("button"); // 押したボタンの状態

    if (elem.value == "スタート"){ // ボタンが[スタート]の場合
        elem.value = "ストップ"; // ストップと表示させる
        startSlot(); // スロットをスタートさせる
    }
    else{ // ボタンが[ストップ]の場合
        elem.value = "スタート"; // スタートと表示させる
        stopSlot(); // スロットをストップさせる
    }

    // スロットをスタートさせる処理の中身
    function startSlot() {
        runSlot(); // スロット開始
    }

    // スロットを回す処理の中身
    function runSlot() {
        // 表示する画像の候補
        images = new Array("img/あ.gif","img/か.gif","img/さ.gif","img/た.gif","img/な.gif","img/は.gif","img/ま.gif","img/や.gif","img/ら.gif","img/わ.gif");
        count = -1; // 何番目かを指す
        slotrunning = setInterval(imgchange,300); // 300msごとにimgchange()を実行
    }

    // 画像を変えてゆく関数
    function imgchange(){
        count++; // 画像番号を増やす

        // 最後まで来たら最初に戻る
        if (count >= images.length){
            count = 0;
        }

        document.slot.src = images[count]; // 画像を表示
    }

    // スロットを止める処理の中身
    function stopSlot() {
        clearInterval(slotrunning); // スロットを止める
        
        // スロットを止めた際の文字（画像の名前）を取得
        result = document.slot.src;

        var string;

        if (images[count] == "img/な.gif"){ // 見事"安藤なつ"を揃えられた場合
            switch(Math.floor(4 * Math.random())) {
                case 0: string="どもーーー"; break;
                case 1: string="もういやーん、はいブパパブパパブパパー"; break;
                case 2: string="どうもーありがとうございましたー"; break;
                case 3: string="すげーなお前！"; break;
            }
        }
        else{ // 失敗した場合
            switch(Math.floor(13 * Math.random())) {
                case 0: string="どんな呼び方してんだ！"; break;
                case 1: string="やめろ！"; break;
                case 2: string="関係ねえだろ！何の話をしてんだ！"; break;
                case 3: string="飲んでんのかお前！なめんなよ！"; break;
                case 4: string="適当なこと言って、ふざけんのもいい加減にしろ！ヴァーカ！"; break;
                case 5: string="こんな滅茶苦茶にして・・・どう思ってんだ！"; break;
                case 6: string="OKじゃねーよ！"; break;
                case 7: string="そんな適当なことやってるとな、一生出世しねーからな！"; break;
                case 8: string="何てこと言ってんだ！"; break;
                case 9: string="ねーよそんな名前！"; break;
                case 10: string="最低だな！"; break;
                case 11: string="名前覚えてないんかい！"; break;
                case 12: string="馬鹿野郎が！"; break;
            }
        }

        alert(string) // テキストを表示
    }

};