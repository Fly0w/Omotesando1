let rooms = {
    A101:{
        residentName: 'Gregory',
        residentNameKanji: 'グレゴリー',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A1021:{
        residentName: 'Yusei',
        residentNameKanji: '勇成',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A1022:{
        residentName: 'Florian',
        residentNameKanji: 'フロリアン',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A201:{
        residentName: 'Yuta',
        residentNameKanji: '優太',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A202:{
        residentName: 'Maya',
        residentNameKanji: 'マヤ',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A203:{
        residentName: 'Shonosuke',
        residentNameKanji: '祥之介',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A204:{
        residentName: 'Siyun',
        residentNameKanji: 'シユン',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A205:{
        residentName: 'Diana',
        residentNameKanji: 'ダヤナ',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A2061:{
        residentName: 'Aika',
        residentNameKanji: '愛香',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    A2062:{
        residentName: 'Revy',
        residentNameKanji: 'レヴィ',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B101:{
        residentName: 'Hiro',
        residentNameKanji: '大和',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B102:{
        residentName: 'Rodrigo',
        residentNameKanji: 'ロド',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B103:{
        residentName: 'Ricky',
        residentNameKanji: 'リッキー',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B104:{
        residentName: 'Aya',
        residentNameKanji: 'アヤ',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B201:{
        residentName: 'Hanna',
        residentNameKanji: 'ハンナ',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B202:{
        residentName: 'Marina',
        residentNameKanji: 'まりな',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B203:{
        residentName: 'Astrid',
        residentNameKanji: 'アスター',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    },
    B204:{
        residentName: 'Haruki',
        residentNameKanji: '春貴',
        isLastTimeGroceries: false,
        isNextTimeGroceries: false,
        isGrocery: false,
        isLastTimeGarbage: false,
        isNextTimeGarbage: false,
        isLineLinked: false,
        isGarbageWeek: false
    }
};

//////////Room management functions/////////
// const addNewResident = (room, newResidentName, newUserName,newPassword, newBirthday) => {
//     rooms[room].residentName = newResidentName;
//     rooms[room].residentUserName = newUserName;
//     rooms[room].residentPassword = newPassword;
//     rooms[room].residentBirthday = newBirthday;
//     rooms[room].isLastTimeGarbage = false;
//     rooms[room].isNextTimeGarbage = false;
//     rooms[room].isLineLinked = false;
//     rooms[room].isGarbageWeek = false;

//     addNamesToHTML();
// }
// const changeResidentName = (room, newResidentName) =>{
//     rooms[room].residentName = newResidentName;
//     addNamesToHTML();
// }
// const changeResidentUserName = (room, newUserName) =>{
//     rooms[room].residentUserName = newUserName;
// }
// const changeResidentPassword = (room, newPassword) =>{
//     rooms[room].residentPassword = newPassword;
// }
// const changeResidentThisWeekGarbageStatus = (room) =>{
//     rooms[room].isGarbageWeek = !rooms[room].isGarbageWeek;
//     updateHTMLGarbageTurn();
// }
// const changeResidentLastWeekGarbageStatus = (room) =>{
//     rooms[room].isLastTimeGarbage = !rooms[room].isLastTimeGarbage;
//     updateHTMLGarbageTurn();
// }
// const changeResidentNextWeekGarbageStatus = (room) =>{
//     rooms[room].isNextTimeGarbage = !rooms[room].isNextTimeGarbage;
//     updateHTMLGarbageTurn();
// }
// const changeResidentLineStatus = (room) =>{
//     rooms[room].isLineLinked = !rooms[room].isLineLinked;
// }


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
const updateDuoGroceries = () => {
    const now = new Date();
    const startDate = new Date("2023-01-01");

    const nowDateMonth = now.getMonth();
    const nowDateYear = now.getYear();

    const startDateMonth = startDate.getMonth();
    const startDateYear = startDate.getYear();

    const diff = (nowDateYear - startDateYear)*12 + (nowDateMonth - startDateMonth);

    //Definition of the key for the array
    let modulo = diff % 9; 
    let moduloPlus = modulo + 1; //For next month key
    let moduloMinus = modulo - 1; //For last month key
    //The key can't be more than 8 or less than 0
    if (modulo === 8){
        moduloPlus = 0;
        moduloMinus = 7;
    } else if (modulo === 0){
        moduloPlus = 1;
        moduloMinus = 8;
    };

    const duoRooms = [
        ['A203', 'B202'],
        ['A204', 'B203'],
        ['A205', 'B204'],
        ['A2061', 'A2062'],
        ['A101', 'B101'],
        ['A1021', 'B102'],
        ['A1022', 'B103'],
        ['A201', 'B104'],
        ['A202', 'B201'],
    ];

// This Month
    let thisMonth1 = duoRooms[modulo][0];
    let thisMonth2 = duoRooms[modulo][1];

    rooms[thisMonth1].isGrocery = true;
    rooms[thisMonth1].isNextTimeGroceries = false;
    rooms[thisMonth1].isLastTimeGroceries = false;

    rooms[thisMonth2].isGrocery = true;
    rooms[thisMonth2].isNextTimeGroceries = false;
    rooms[thisMonth2].isLastTimeGroceries = false;

// Next Month
    let nextMonth1 = duoRooms[moduloPlus][0];
    let nextMonth2 = duoRooms[moduloPlus][1];

    rooms[nextMonth1].isGrocery = false;
    rooms[nextMonth1].isNextTimeGroceries = true;
    rooms[nextMonth1].isLastTimeGroceries = false;

    rooms[nextMonth2].isGrocery = false;
    rooms[nextMonth2].isNextTimeGroceries = true;
    rooms[nextMonth2].isLastTimeGroceries = false;

// Last Month
    let lastMonth1 = duoRooms[moduloMinus][0];
    let lastMonth2 = duoRooms[moduloMinus][1];

    rooms[lastMonth1].isGrocery = false;
    rooms[lastMonth1].isNextTimeGroceries = false;
    rooms[lastMonth1].isLastTimeGroceries = true;

    rooms[lastMonth2].isGrocery = false;
    rooms[lastMonth2].isNextTimeGroceries = false;
    rooms[lastMonth2].isLastTimeGroceries = true;

    // console.log(thisMonth1, thisMonth2, nextMonth1, nextMonth2, lastMonth1, lastMonth2 )
}







        //English Version

// Function that lists the type of garbage and displays it depending on the day
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
    let HTMLturn = document.getElementsByClassName("turngar");
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
            HTMLturn[i].innerHTML = "It's your garbage turn !";
            HTMLturn[i].classList.add("nowgar");
        } else if (turnsLastWeek[i] === true){
            HTMLturn[i].innerHTML = "Was last garbage turn";
            HTMLturn[i].classList.add("lastgar");
        } else if (turnsNextWeek[i] === true){
            HTMLturn[i].innerHTML = "Is next garbage turn";
            HTMLturn[i].classList.add("nextgar");
        } else {
            HTMLturn[i].innerHTML = "";
            HTMLturn[i].className = ("turngar");
        }  
    } 


    HTMLannounceThisWeek.innerHTML = `${thisWeekResp[0]} & ${thisWeekResp[1]}`; 
    HTMLannounceLastWeek.innerHTML = `${lastWeekResp[0]} & ${lastWeekResp[1]}`;
    HTMLannounceNextWeek.innerHTML = `${nextWeekResp[0]} & ${nextWeekResp[1]}`;
}

const updateHTMLGroceriesTurn = () => {
    updateDuoGroceries();
    let HTMLturnGro = document.getElementsByClassName("turngro");
    let HTMLannounceThisMonth = document.getElementById("monthresp");
    let HTMLannounceLastMonth = document.getElementById("lastmonthresp");
    let HTMLannounceNextMonth = document.getElementById("nextmonthresp");
    

    let thisMonthResp = [];
    let lastMonthResp = [];
    let nextMonthResp = [];

    let turnsNow = [];
    let turnsLastMonth = [];
    let turnsNextMonth = [];

    //Loop that adds names in the arrays depending on the groceries turn
    Object.entries(rooms).forEach(value => {
        turnsNow.push(value[1].isGrocery);
        turnsLastMonth.push(value[1].isLastTimeGroceries);
        turnsNextMonth.push(value[1].isNextTimeGroceries);
        if (value[1].isGrocery === true){
            thisMonthResp.push(value[1].residentName)
        } else if (value[1].isLastTimeGroceries === true){
            lastMonthResp.push(value[1].residentName)
        } else if (value[1].isNextTimeGroceries === true){
            nextMonthResp.push(value[1].residentName)
        }
    });
        
    //Loop that adds text and style in the room boxes depending on the groceries turn
    for (let i = 0; i < HTMLturnGro.length; i++){ 
        if (turnsNow[i] === true){
            HTMLturnGro[i].innerHTML = "It's your groceries turn !";
            HTMLturnGro[i].classList.add("nowgro");
        } else if (turnsLastMonth[i] === true){
            HTMLturnGro[i].innerHTML = "Was last groceries turn";
            HTMLturnGro[i].classList.add("lastgro");
        } else if (turnsNextMonth[i] === true){
            HTMLturnGro[i].innerHTML = "Is next groceries turn";
            HTMLturnGro[i].classList.add("nextgro");
        } else {
            HTMLturnGro[i].innerHTML = "";
            HTMLturnGro[i].className = ("turngro");
        }  
    } 


    HTMLannounceThisMonth.innerHTML = `${thisMonthResp[0]} & ${thisMonthResp[1]}`; 
    HTMLannounceLastMonth.innerHTML = `${lastMonthResp[0]} & ${lastMonthResp[1]}`;
    HTMLannounceNextMonth.innerHTML = `${nextMonthResp[0]} & ${nextMonthResp[1]}`;

    // console.log(HTMLannounceThisMonth, HTMLannounceLastMonth, HTMLannounceNextMonth)
}




        //Japanese Version

// Function that lists the type of garbage and displays it depending on the day
const updateListGarbageTurnJAP = () => {
    const dateNow = new Date();
    let today = weekday[dateNow.getDay()];
    // let today = "Wednesday";
    let fulldate = dateNow.toLocaleDateString();

    let HTMLannounceTypeGarbage = document.getElementById("typegarbage");
    let HTMLannounceDayGarbage = document.getElementById("daygarbage");
    let HTMLannounceDayToday = document.getElementById("date");



    switch (today){
        case "Monday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="combustible">燃えるゴミ</li></ul>';
            HTMLannounceDayGarbage.className = "animate__animated animate__pulse animate__infinite content tonight"
            HTMLannounceDayGarbage.innerHTML = '今日の夜';
            HTMLannounceDayToday.innerHTML = '月　- ' + fulldate;
            break;
        case "Tuesday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="noncombustible">燃えないゴミ</li><li class="petbottle">ペットボトル</li><li class="glassbottle">びん</li><li class="aluminumcan">かん</li><li class="cardboard">ダンボール</li></ul>';
            HTMLannounceDayGarbage.className = "content tomorrow"
            HTMLannounceDayGarbage.innerHTML = '明日の夜';
            HTMLannounceDayToday.innerHTML = '火 - ' + fulldate;
            break;
        case "Wednesday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="noncombustible">燃えないゴミ</li><li class="petbottle">ペットボトル</li><li class="glassbottle">びん</li><li class="aluminumcan">かん</li><li class="cardboard">ダンボール</li></ul>';
            HTMLannounceDayGarbage.className = "animate__animated animate__pulse animate__infinite content tonight"
            HTMLannounceDayGarbage.innerHTML = '今日の夜';
            HTMLannounceDayToday.innerHTML = '水 - ' + fulldate;
            break;
        case "Thursday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="combustible">燃えるゴミ</li></ul>';
            HTMLannounceDayGarbage.className = "animate__animated animate__pulse animate__infinite content tonight"
            HTMLannounceDayGarbage.innerHTML = '今日の夜';
            HTMLannounceDayToday.innerHTML = '木 - ' + fulldate;
            break;
        case "Friday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="combustible">燃えるゴミ</li></ul>';
            HTMLannounceDayGarbage.className = "content"
            HTMLannounceDayGarbage.innerHTML = '月曜日の夜';
            HTMLannounceDayToday.innerHTML = '金 - ' + fulldate;
            break;
        case "Saturday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="combustible">燃えるゴミ</li></ul>';
            HTMLannounceDayGarbage.className = "content"
            HTMLannounceDayGarbage.innerHTML = '月曜日の夜';
            HTMLannounceDayToday.innerHTML = '土 - ' + fulldate;
            break;
        case "Sunday":
            HTMLannounceTypeGarbage.innerHTML = '<ul><li class="combustible">燃えるゴミ</li></ul>';
            HTMLannounceDayGarbage.className = "content tomorrow"
            HTMLannounceDayGarbage.innerHTML = '明日の夜';
            HTMLannounceDayToday.innerHTML = '日 - ' + fulldate;
            break;
        default:
            HTMLannounceTypeGarbage.innerHTML = "Error";
    }
}

const updateHTMLGarbageTurnJAP = () => {
    updateListGarbageTurnJAP();
    updateDuoGarbage();
    let HTMLturn = document.getElementsByClassName("turngar");
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
            thisWeekResp.push(value[1].residentNameKanji)
        } else if (value[1].isLastTimeGarbage === true){
            lastWeekResp.push(value[1].residentNameKanji)
        } else if (value[1].isNextTimeGarbage === true){
            nextWeekResp.push(value[1].residentNameKanji)
        }
    });
        
    //Loop that adds text and style in the room boxes depending on the garbage turn
    for (let i = 0; i < HTMLturn.length; i++){ 
        if (turnsNow[i] === true){
            HTMLturn[i].innerHTML = "今週のゴミ担当";
            HTMLturn[i].classList.add("nowgar");
        } else if (turnsLastWeek[i] === true){
            HTMLturn[i].innerHTML = "先週のゴミ担当";
            HTMLturn[i].classList.add("lastgar");
        } else if (turnsNextWeek[i] === true){
            HTMLturn[i].innerHTML = "来週のゴミ担当";
            HTMLturn[i].classList.add("nextgar");
        } else {
            HTMLturn[i].innerHTML = "";
            HTMLturn[i].className = ("turngar");
        }  
    } 


    HTMLannounceThisWeek.innerHTML = `${thisWeekResp[0]} & ${thisWeekResp[1]}`; 
    HTMLannounceLastWeek.innerHTML = `${lastWeekResp[0]} & ${lastWeekResp[1]}`;
    HTMLannounceNextWeek.innerHTML = `${nextWeekResp[0]} & ${nextWeekResp[1]}`;
}

const updateHTMLGroceriesTurnJAP = () => {
    updateDuoGroceries();
    let HTMLturnGro = document.getElementsByClassName("turngro");
    let HTMLannounceThisMonth = document.getElementById("monthresp");
    let HTMLannounceLastMonth = document.getElementById("lastmonthresp");
    let HTMLannounceNextMonth = document.getElementById("nextmonthresp");
    

    let thisMonthResp = [];
    let lastMonthResp = [];
    let nextMonthResp = [];

    let turnsNow = [];
    let turnsLastMonth = [];
    let turnsNextMonth = [];

    //Loop that adds names in the arrays depending on the groceries turn
    Object.entries(rooms).forEach(value => {
        turnsNow.push(value[1].isGrocery);
        turnsLastMonth.push(value[1].isLastTimeGroceries);
        turnsNextMonth.push(value[1].isNextTimeGroceries);
        if (value[1].isGrocery === true){
            thisMonthResp.push(value[1].residentNameKanji)
        } else if (value[1].isLastTimeGroceries === true){
            lastMonthResp.push(value[1].residentNameKanji)
        } else if (value[1].isNextTimeGroceries === true){
            nextMonthResp.push(value[1].residentNameKanji)
        }
    });
        
    //Loop that adds text and style in the room boxes depending on the groceries turn
    for (let i = 0; i < HTMLturnGro.length; i++){ 
        if (turnsNow[i] === true){
            HTMLturnGro[i].innerHTML = "今月の買い物担当";
            HTMLturnGro[i].classList.add("nowgro");
        } else if (turnsLastMonth[i] === true){
            HTMLturnGro[i].innerHTML = "先月の買い物担当";
            HTMLturnGro[i].classList.add("lastgro");
        } else if (turnsNextMonth[i] === true){
            HTMLturnGro[i].innerHTML = "来月の買い物担当";
            HTMLturnGro[i].classList.add("nextgro");
        } else {
            HTMLturnGro[i].innerHTML = "";
            HTMLturnGro[i].className = ("turngro");
        }  
    } 


    HTMLannounceThisMonth.innerHTML = `${thisMonthResp[0]} & ${thisMonthResp[1]}`; 
    HTMLannounceLastMonth.innerHTML = `${lastMonthResp[0]} & ${lastMonthResp[1]}`;
    HTMLannounceNextMonth.innerHTML = `${nextMonthResp[0]} & ${nextMonthResp[1]}`;

    // console.log(HTMLannounceThisMonth, HTMLannounceLastMonth, HTMLannounceNextMonth)
}

addNamesToHTML();


let version = document.getElementById('english');

if (version.classList[1] === 'activated') { 
    updateHTMLGarbageTurn();
    updateHTMLGroceriesTurn();
        //Japanese Button
    const buttonJapanese = document.getElementById("japanese");
    buttonJapanese.addEventListener("click", function switchLanguage(){
        location.replace("./jap_ver.html");  
    });
} else if (version.classList[1] === 'inactive'){
    updateHTMLGarbageTurnJAP();
    updateHTMLGroceriesTurnJAP();
        //English Button
    const buttonEnglish = document.getElementById("english");
    buttonEnglish.addEventListener("click", function switchLanguage(){
        location.replace("./index.html");  
    })
} 




    

