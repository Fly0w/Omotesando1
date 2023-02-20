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

//////////Room management functions/////////
const addNewResident = (room, newResidentName, newUserName,newPassword, newBirthday) => {
    rooms[room].residentName = newResidentName;
    rooms[room].residentUserName = newUserName;
    rooms[room].residentPassword = newPassword;
    rooms[room].residentBirthday = newBirthday;
    rooms[room].isLastTimeGarbage = false;
    rooms[room].isNextTimeGarbage = false;
    rooms[room].isLineLinked = false;
    rooms[room].isGarbageWeek = false;

    addNamesToHTML();
}
const changeResidentName = (room, newResidentName) =>{
    rooms[room].residentName = newResidentName;
    addNamesToHTML();
}
const changeResidentUserName = (room, newUserName) =>{
    rooms[room].residentUserName = newUserName;
}
const changeResidentPassword = (room, newPassword) =>{
    rooms[room].residentPassword = newPassword;
}
const changeResidentThisWeekGarbageStatus = (room) =>{
    rooms[room].isGarbageWeek = !rooms[room].isGarbageWeek;
    updateHTMLGarbageTurn();
}
const changeResidentLastWeekGarbageStatus = (room) =>{
    rooms[room].isLastTimeGarbage = !rooms[room].isLastTimeGarbage;
    updateHTMLGarbageTurn();
}
const changeResidentNextWeekGarbageStatus = (room) =>{
    rooms[room].isNextTimeGarbage = !rooms[room].isNextTimeGarbage;
    updateHTMLGarbageTurn();
}
const changeResidentLineStatus = (room) =>{
    rooms[room].isLineLinked = !rooms[room].isLineLinked;
}


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
            location.replace("https://fly0w.github.io/Omotesando1JAP/");
        }
    );




//Home page Room names
const addNamesToHTML = () => {
    let HTMLnames = document.getElementsByClassName("name");
    let HTMLnamesKanji = document.getElementsByClassName("nameKanji");
    let names = [];
    let namesKanji = [];


    Object.entries(rooms).forEach(value => {
        names.push(value[1].residentName);
        namesKanji.push(value[1].residentNameKanji);
    });

    for (let i = 0; i < HTMLnames.length; i++){
        HTMLnames[i].innerHTML = names[i];
        HTMLnamesKanji[i].innerHTML = namesKanji[i];
    }
};

addNamesToHTML();


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

    let HTMLannounceTypeGarbage = document.getElementById("typegarbage");
    let HTMLannounceDayGarbage = document.getElementById("daygarbage");
    let HTMLannounceDayToday = document.getElementById("date");



    switch (today){
        case "Monday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="combustible">COMBUSTIBLE</li></ul>';
            HTMLannounceDayGarbage.className = "animate__animated animate__pulse animate__infinite content tonight"
            HTMLannounceDayGarbage.innerHTML = 'TONIGHT';
            HTMLannounceDayToday.innerHTML = 'MONDAY - ' + fulldate;
            break;
        case "Tuesday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="noncombustible">NON-COMBUSTIBLE</li><li class="petbottle">PET BOTTLES</li><li class="glassbottle">GLASS BOTTLES</li><li class="aluminumcan">ALUMINUM CANS</li><li class="cardboard">CARDBOARD</li></ul>';
            HTMLannounceDayGarbage.className = "content tomorrow"
            HTMLannounceDayGarbage.innerHTML = 'TOMORROW NIGHT';
            HTMLannounceDayToday.innerHTML = 'TUESDAY - ' + fulldate;
            break;
        case "Wednesday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="noncombustible">NON-COMBUSTIBLE</li><li class="petbottle">PET BOTTLES</li><li class="glassbottle">GLASS BOTTLES</li><li class="aluminumcan">ALUMINUM CANS</li><li class="cardboard">CARDBOARD</li></ul>';
            HTMLannounceDayGarbage.className = "animate__animated animate__pulse animate__infinite content tonight"
            HTMLannounceDayGarbage.innerHTML = 'TONIGHT';
            HTMLannounceDayToday.innerHTML = 'WEDNESDAY - ' + fulldate;
            break;
        case "Thursday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="combustible">COMBUSTIBLE</li></ul>';
            HTMLannounceDayGarbage.className = "animate__animated animate__pulse animate__infinite content tonight"
            HTMLannounceDayGarbage.innerHTML = 'TONIGHT';
            HTMLannounceDayToday.innerHTML = 'THURSDAY - ' + fulldate;
            break;
        case "Friday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="combustible">COMBUSTIBLE</li></ul>';
            HTMLannounceDayGarbage.className = "content"
            HTMLannounceDayGarbage.innerHTML = 'MONDAY NIGHT';
            HTMLannounceDayToday.innerHTML = 'FRIDAY - ' + fulldate;
            break;
        case "Saturday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="combustible">COMBUSTIBLE</li></ul>';
            HTMLannounceDayGarbage.className = "content"
            HTMLannounceDayGarbage.innerHTML = 'MONDAY NIGHT';
            HTMLannounceDayToday.innerHTML = 'SATURDAY - ' + fulldate;
            break;
        case "Sunday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="combustible">COMBUSTIBLE</li></ul>';
            HTMLannounceDayGarbage.className = "content tomorrow"
            HTMLannounceDayGarbage.innerHTML = 'TOMORROW NIGHT';
            HTMLannounceDayToday.innerHTML = 'SUNDAY - ' + fulldate;
            break;
        default:
            HTMLannounceTypeGarbage.innerHTML = "Error";
    }
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
        
    //Loop that adds text and style in the room boxes depending on the garbage turn
    for (let i = 0; i < HTMLturn.length; i++){ 
        if (turnsNow[i] === true){
            HTMLturn[i].innerHTML = "It's your turn !";
            HTMLturn[i].classList.add("now");
        } else if (turnsLastWeek[i] === true){
            HTMLturn[i].innerHTML = "Was last turn";
            HTMLturn[i].classList.add("last");
        } else if (turnsNextWeek[i] === true){
            HTMLturn[i].innerHTML = "Is next turn";
            HTMLturn[i].classList.add("next");
        } else {
            HTMLturn[i].innerHTML = "";
            HTMLturn[i].className = ("turn");
        }  
    } 


    HTMLannounceThisWeek.innerHTML = `${thisWeekResp[0]} & ${thisWeekResp[1]}`; 
    HTMLannounceLastWeek.innerHTML = `${lastWeekResp[0]} & ${lastWeekResp[1]}`;
    HTMLannounceNextWeek.innerHTML = `${nextWeekResp[0]} & ${nextWeekResp[1]}`;
}

updateHTMLGarbageTurn();
