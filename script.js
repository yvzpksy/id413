let squareContainer = document.querySelector('.square-container');
var students = [
    ["Alara Manguoğlu", "AlaraManguoglu", "http://alaramanguoglu.works/" ],
    ["Alp Ege Koç", "AlpEgeKoc", "http://alpege.rocks/" ],
    ["Ceren Usta", "CerenUsta", "http://cerenusta.studio/" ],
    ["Doruk Okan Yavuz", "DorukOkanYavuz", "http://dorukokanyavuz.works" ],
    ["Duygu Can", "DuyguCan", "http://www.duygucan.works" ],
    ["Evren Uçar", "EvrenUcar", "https://evrenucar.studio" ],
    ["Ezgi Selin Kaya", "EzgiSelinKaya", "http://ezgiselinkaya.rocks" ],
    ["Ezgi Taşlı", "EzgiTasli", "http://ezgitasli.rocks" ],
    ["Gamze Karamanlı", "GamzeKaramanli", "http://gamzekaramanli.live/" ],
    ["Gamze Uras", "GamzeUras", "http://gamzeuras.works/" ],
    ["İbrahim Cihangir Sadi", "IbrahimCihangirSadi", "http://cihangirsadi.studio" ],
    ["İlayda Şahin", "IlaydaSahin", "http://ilaydasahin.works/" ],
    ["Selen Elçin Erşan", "SelenElcinErsan", "http://Selenelcinersan.works/" ],
    ["Sena Ezer", "SenaEzer", "http://senaezer.works/" ],
    ["Tuğçe Sözen", "TugceSozen", "http://tugcesozen.works/" ],
    ["Umay Demirel", "UmayDemirel", "http://umay.works/" ],
    ["Utku Erturkan", "UtkuErturkan", "http://utkuerturkan.works/" ],
    ["Yasemin Çetik", "YaseminCetik", "http://www.yasemincetik.me/" ]
]

squareContainer.innerHTML = "";
for (var i = 0; i < students.length; i++) {
    squareContainer.innerHTML =  squareContainer.innerHTML +
    '<div class="square" id="' + students[i][1] + '"><span>' + students[i][0] +
    '</span> <div class="content"  lnk="' +  students[i][2] + '"></div></div>'
}

let squares = document.querySelectorAll('.square');
for (var i = 0; i < squares.length; i++) {
    var lnk = squares[i].getAttribute('id');
    squares[i].style.backgroundImage = "url('" + lnk + ".jpg')";
    squares[i].addEventListener('click', clicked);
}

function clicked(e) {
    var lnk = e.target.getAttribute('lnk');
    window.open(lnk, "id413");
}
 
