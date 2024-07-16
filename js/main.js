let demoImg_count = 1;   //счетчик, НЕ ТРОГАТЬ НИКОГДА!
let demoImg_limit = 8;
function chngMobileDemoImg(val) {
    let newVal = +val + demoImg_count;
    console.log("newVal");
    console.log(newVal);
    if (newVal > demoImg_limit) { newVal = 1; }
    if (newVal < 1) { newVal = demoImg_limit; }
    let urlResult = "./assets/img/jobe/mjobe_" + newVal + ".jpg";

    document.getElementById("myWork_1_img").src = urlResult;
    demoImg_count = newVal;


    // if (val == 1) {
    //     let urlResult = "./assets/img/jobe/mjobe_" + newVal + ".jpg";
    //     // $("#myWork_1_img").src("background", urlResult);
    //     document.getElementById("myWork_1_img").src = urlResult;
    //     demoImg_count = newVal;
    //     return;
    // } else {
    //     console.log("11");
    //     return;
    // }
}

$(document).ready(function(){
    "use strict";

    // for (let i = 1; i <= 8; i++) {
    //     let urlResult = "url('./assets/img/jobe/mjobe_" + i + ".jpg')";
    //     $("#myWork_" + i).css("background", urlResult);
    //     $("#myWork_" + i).css("background-repeat", "no-repeat");
    //     $("#myWork_" + i).css("background-size", "contain");
    // };
    // myWork_1

    const qrList = 3;   // для qr кодов - указатель кол-ва "сколько показывать"
    let qr_count = 0;   //счетчик, НЕ ТРОГАТЬ НИКОГДА!
    
    // document.getElementById('plusDemoImg_1').onclick = chngMobileDemoImg(1);

    // функция переключатель qr кодов в "контактах"
    function changeQR() {
        (qr_count + 1 > qrList - 1) ? qr_count = 0 : qr_count = qr_count + 1;

        let urlResult = "url('./assets/qr/qr_" + qr_count + ".jpg')";
        setTimeout(
            () => {
                $("#qr_div").css("background", urlResult);
                $("#qr_div").css("background-repeat", "no-repeat");
                $("#qr_div").css("background-size", "contain");
                changeQR();
            },
            4 * 1000
          );        
    }

    changeQR();
});