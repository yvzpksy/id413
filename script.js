let squareContainer = document.querySelector('.square-container');
//  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
 let kay = 0;
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
    ["Umay Demirel", "UmayDemirel", "https://umay.works/" ],
    ["Utku Erturkan", "UtkuErturkan", "http://utkuerturkan.works/" ],
    ["Yasemin Çetik", "YaseminCetik", "http://www.yasemincetik.me/" ]
]

if (!annyang) {
    console.log("Speech Recognition is not supported");
  } else if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    // annyang.debug();
    annyang.setLanguage('tr-TR');
     var commands = {
             'Merhaba *tag': readTurkishText,
             '*tag in': asagiKaydir,
             '*tag çık': yukariKaydir,
          
    }; 
    // Add our commands to annyang
    annyang.addCommands(commands);
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    // annyang.start();
    annyang.start({ autoRestart: true, continuous: false });
}


function readTurkishText(tag) {
    let name = "";
    // console.log(tag + " : " + name );
    for (var i = 0; i < students.length; i++) {
         tag = tag.toUpperCase();
         name = students[i][0].toUpperCase();
        // console.log(tag + " : " + name );
        if ( name.includes(tag) ) { 
            let lnk= students[i][2];
            window.open(lnk,"_self");
            // console.log(lnk);
        }
    }
}


function asagiKaydir() {   window.scrollBy(0,1500);}
function yukariKaydir() {   window.scrollBy(0,-1500);}
    // document.getElementById("hello").innerText = tag;


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
 
