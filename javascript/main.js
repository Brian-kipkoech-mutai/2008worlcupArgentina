 const yearText=document.getElementById('year');
 const countryText=document.getElementById('country');
 const sportText=document.getElementById('sport');
 const coachText=document.getElementById('coach');
 const playersDisplaySection=document.getElementById('players-display-section');
 const selectOption=document.getElementById('selectOption');


const argentinaWorldCupSquad = {
    sport: "Football",
    coach: {
        name: "Lionel Scaloni",
        nationality: "Argentinian"
    },
    country: "Argentina",
    year: 2018,
    players: [
        {
            name: "Sergio Romero",
            nickname: "Chiquito",
            position: "Goalkeeper",
            isCaptain: false,
            number: 1,
            age: 34
        },
        {
            name: "Nicolás Otamendi",
            nickname: "El General",
            position: "Defender",
            isCaptain: false,
            number: 2,
            age: 30
        },
        {
            name: "Javier Mascherano",
            nickname: "El Jefecito",
            position: "Midfielder",
            isCaptain: true,
            number: 14,
            age: 35
        },
        {
            name: "Lionel Messi",
            nickname: "La Pulga",
            position: "Forward",
            isCaptain: true,
            number: 10,
            age: 31
        },
        {
            name: "Paulo Dybala",
            nickname: "La Joya",
            position: "Forward",
            isCaptain: false,
            number: 21,
            age: 27
        },
        {
            name: "Gonzalo Higuaín",
            nickname: "Pipita",
            position: "Forward",
            isCaptain: false,
            number: 9,
            age: 32
        },
        {
            name: "Ángel Di María",
            nickname: "Fideo",
            position: "Midfielder",
            isCaptain: false,
            number: 11,
            age: 33
        },
        {
            name: "Éver Banega",
            nickname: "El Maestro",
            position: "Midfielder",
            isCaptain: false,
            number: 7,
            age: 33
        },
        {
            name: "Marcos Rojo",
            nickname: "El Patrón",
            position: "Defender",
            isCaptain: false,
            number: 16,
            age: 31
        },
        {
            name: "Gabriel Mercado",
            nickname: "Mercadito",
            position: "Defender",
            isCaptain: false,
            number: 25,
            age: 34
        },
        {
            name: "Enzo Pérez",
            nickname: "El Rayo",
            position: "Midfielder",
            isCaptain: false,
            number: 15,
            age: 35
        }
    ]
};

 
 const {sport,coach,country,year,players}=argentinaWorldCupSquad
 sportText.innerHTML=`<span>Sport</span>: ${sport}`;
 const{name}=coach;
 coachText.innerHTML=`<span>Couch</span>: ${name}`;
 yearText.innerHTML=`<span>Year</span>: ${year}`;
 countryText.innerHTML=`<span>Country</span>: ${country}`;

 const setDisplay=(array=players)=>{
    playersDisplaySection.style.transform='translateX(-100%)'
    playersDisplaySection.style.opacity='0'
   const cardsHTML= array.map(({name,nickname,position,isCaptain,age})=>{
     return   `<section class="player-card">
        <h2 class="tittle">Name :${name} ${isCaptain?'(captain)':''}</h2>
        <p class="nickname" >Nick name: ${nickname}</p>
        <p class="position">Position: ${position}</p>
         <p class="age">Age: ${age}</p>
      </section>`
    }).join('')+'<section class="after-element"></section>'

    playersDisplaySection.innerHTML=cardsHTML;

 setTimeout(()=>
    playersDisplaySection.style.transform='translateX(0)',500
 )
 setTimeout(()=>  {
    playersDisplaySection.style.opacity='1';
playersDisplaySection.scrollIntoView({behavior:'smooth',block:'start'})
    
 },800)
 }

 const adjustToChange=()=>{
    switch(selectOption.value){
        case 'ageOver30':
            setDisplay(players.filter(({age})=>age>30));
            break;
        
        case 'midfield':
                setDisplay(
                    players.filter(({position})=>position=='Midfielder')
                );
                break;
        case 'forward' :
            setDisplay(
                 players.filter(({position})=>position=='Forward')
            );
             break ;
        case 'defender' :
            setDisplay(
                players.filter(({position})=>position=='Defender')
            )
            break;
        case 'captain': setDisplay(
            players.filter(({isCaptain})=>isCaptain)
        );
            break;
        default:
            setDisplay();

    }  
    
     
 }
 selectOption.addEventListener('change',adjustToChange)
 setDisplay();