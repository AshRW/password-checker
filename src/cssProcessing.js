const backgroundColorSetter = (passwordStrengthNumber)=>{
    const body = document.querySelector('body')
    const title = document.querySelector('.title')
    switch(passwordStrengthNumber){
        case 0:{
            body.style.background="#2e2e2e"
            // body.style.backgroundImage="linear-gradient(#2e2e2e, #FFF)"
            title.style.color="#2e2e2e"
            break;
        }
        case 1:{
            body.style.background="#a30000"
            title.style.color="#a30000"
            break;
        }
        case 2:{
            body.style.background="#a35c00"
            title.style.color="#a35c00"
            break;
        }
        case 3:{
            body.style.background="#a39b00"
            title.style.color="#a39b00"
            break;
        }
        case 4:{
            body.style.background="#008544"
            title.style.color="#008544"
            break;
        }
        case 5:{
            body.style.background="#00a354"
            title.style.color="#00a354"
            break;
        }
        case 6:{
            body.style.background="#00c71e"
            title.style.color="#00c71e"
            break;
        }
        default:{
            body.style.background="#660000"
            title.style.color="#660000"
        }
    }
}

export{
    backgroundColorSetter
}