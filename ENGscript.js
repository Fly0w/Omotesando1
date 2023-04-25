let rooms = {
    A101:{
        residentName: 'Gregory',
        residentNameKanji: 'グレゴリー',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A1021:{
        residentName: 'Yuta',
        residentNameKanji: '優太',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A1022:{
        residentName: 'Florian',
        residentNameKanji: 'フロリアン',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A201:{
        residentName: 'Yusei',
        residentNameKanji: '勇成',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A202:{
        residentName: 'Yuka',
        residentNameKanji: '由佳',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A203:{
        residentName: 'Shonosuke',
        residentNameKanji: '祥之介',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A204:{
        residentName: 'Siyun',
        residentNameKanji: 'シユン',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A205:{
        residentName: 'Diana',
        residentNameKanji: 'ダヤナ',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A2061:{
        residentName: 'Aika',
        residentNameKanji: '愛香',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A2062:{
        residentName: 'Revy',
        residentNameKanji: 'レヴィ',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B101:{
        residentName: 'Hiro',
        residentNameKanji: '大和',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B102:{
        residentName: 'Rodrigo',
        residentNameKanji: 'ロド',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B103:{
        residentName: 'Ricky',
        residentNameKanji: 'リッキー',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B104:{
        residentName: 'Aya',
        residentNameKanji: 'アヤ',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B201:{
        residentName: 'Hanna',
        residentNameKanji: 'ハンナ',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B202:{
        residentName: 'Marina',
        residentNameKanji: 'まりな',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B203:{
        residentName: 'Astrid',
        residentNameKanji: 'アスター',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B204:{
        residentName: 'Haruki',
        residentNameKanji: '春貴',
        residentUserName: '',
        residentPassword: '',
        residentBirthday: '',
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    }
};


// Buttons

    // //English Button
    // const buttonEnglish = document.getElementById("english");
    // buttonEnglish.addEventListener("click", 
    //     function englishVersion(){
    //         location.replace("https://fly0w.github.io/Omotesando1/");
    //     }
    // );
    
        //Japanese Button
    const buttonJapanese = document.getElementById("japanese");
    buttonJapanese.addEventListener("click", 
        function japaneseVersion(){
            location.replace("https://fly0w.github.io/LINEOmotesando1JAP/");
        }
    );


//Garbage turn status
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const updateDuoGarbage = () => {
    const now = new Date();
    const startDateMs = Date.parse("January 1, 2023");
    const nowDateMs = now.getTime();
    // const nowDateMs = Date.parse("January 8, 2023");
    let difDateMs = nowDateMs-startDateMs ; //Number of ms between January 1st 2023 and now
    const weekMs = 1000 * 60 * 60 * 24 * 7; 
    const difDateWeek = Math.floor(difDateMs / weekMs); //Number of weeks since Sunday 1st of January 2023
    
    
    //Definition of the key for the array
    let modulo = difDateWeek % 9; 
    let moduloPlus = modulo + 1; //For next week key
    let moduloMinus = modulo - 1; //For last week key
    //The key can't be more than 8 or less than 0
    if (modulo === 8){
        moduloPlus = 0;
        moduloMinus = 7;
    } else if (modulo === 0){
        moduloPlus = 1;
        moduloMinus = 8;
    };

    const duoRooms = [
        ['B104', 'B201'],
        ['B202', 'B203'],
        ['B204', 'A101'],
        ['A1021', 'A1022'],
        ['A201', 'A202'],
        ['A203', 'A204'],
        ['A205', 'B101'],
        ['A2061', 'A2062'],
        ['B102', 'B103'],
    ];

// This week
    let thisWeek1 = duoRooms[modulo][0];
    let thisWeek2 = duoRooms[modulo][1];

    rooms[thisWeek1].isGarbageWeek = true;
    rooms[thisWeek1].isNextTimeGarbage = false;
    rooms[thisWeek1].isLastTimeGarbage = false;

    rooms[thisWeek2].isGarbageWeek = true;
    rooms[thisWeek2].isNextTimeGarbage = false;
    rooms[thisWeek2].isLastTimeGarbage = false;

// Next week
    let nextWeek1 = duoRooms[moduloPlus][0];
    let nextWeek2 = duoRooms[moduloPlus][1];

    rooms[nextWeek1].isGarbageWeek = false;
    rooms[nextWeek1].isNextTimeGarbage = true;
    rooms[nextWeek1].isLastTimeGarbage = false;
    
    rooms[nextWeek2].isGarbageWeek = false;
    rooms[nextWeek2].isNextTimeGarbage = true;
    rooms[nextWeek2].isLastTimeGarbage = false;

// Last Week
    let lastWeek1 = duoRooms[moduloMinus][0];
    let lastWeek2 = duoRooms[moduloMinus][1];

    rooms[lastWeek1].isGarbageWeek = false;
    rooms[lastWeek1].isNextTimeGarbage = false;
    rooms[lastWeek1].isLastTimeGarbage = true;
    
    rooms[lastWeek2].isGarbageWeek = false;
    rooms[lastWeek2].isNextTimeGarbage = false;
    rooms[lastWeek2].isLastTimeGarbage = true;
}

const updateListGarbageTurn = () => {
    const dateNow = new Date();
    let today = weekday[dateNow.getDay()];
    // let today = "Wednesday";
    let fulldate = dateNow.toLocaleDateString();

    let HTMLannounceDayGarbage = document.getElementById("daygarbage");
    let HTMLannounceDayToday = document.getElementById("date");
    HTMLannounceDayGarbage.innerHTML = 
    '<h5>MONDAY NIGHT :</h5><ul><li class="combustible">COMBUSTIBLE</li></ul><br/><h5>WEDNESDAY NIGHT : </h5><ul><li class="noncombustible">NON-COMBUSTIBLE</li><li class="petbottle">PET BOTTLES</li><li class="glassbottle">GLASS BOTTLES</li><li class="aluminumcan">ALUMINUM CANS</li><li class="cardboard">CARDBOARD</li></ul><br/><h5>THURSDAY NIGHT : </h5><ul><li class="combustible">COMBUSTIBLE</li></ul><br/>';
}

const updateHTMLGarbageTurn = () => {
    updateListGarbageTurn();
    updateDuoGarbage();
    let HTMLturn = document.getElementsByClassName("turn");
    let HTMLannounceThisWeek = document.getElementById("weekresp");
    let HTMLannounceLastWeek = document.getElementById("lastweekresp");
    let HTMLannounceNextWeek = document.getElementById("nextweekresp");
    

    let thisWeekResp = [];
    let lastWeekResp = [];
    let nextWeekResp = [];

    let turnsNow = [];
    let turnsLastWeek = [];
    let turnsNextWeek = [];

    //Loop that adds names in the arrays depending on the garbage turn
    Object.entries(rooms).forEach(value => {
        turnsNow.push(value[1].isGarbageWeek);
        turnsLastWeek.push(value[1].isLastTimeGarbage);
        turnsNextWeek.push(value[1].isNextTimeGarbage);
        if (value[1].isGarbageWeek === true){
            thisWeekResp.push(value[1].residentName)
        } else if (value[1].isLastTimeGarbage === true){
            lastWeekResp.push(value[1].residentName)
        } else if (value[1].isNextTimeGarbage === true){
            nextWeekResp.push(value[1].residentName)
        }
    });
        
    HTMLannounceThisWeek.innerHTML = `${thisWeekResp[0]} & ${thisWeekResp[1]}`; 
    HTMLannounceLastWeek.innerHTML = `${lastWeekResp[0]} & ${lastWeekResp[1]}`;
    HTMLannounceNextWeek.innerHTML = `${nextWeekResp[0]} & ${nextWeekResp[1]}`;
}

updateHTMLGarbageTurn();
