
const passwordChecker = (passwordToCheck)=>{
    const containsNumbers = /^(?=.*[0-9])([a-zA-Z0-9\W]{1,})$/.test(passwordToCheck);
    const containsLowerCase = /^(?=.*[a-z])([a-zA-Z0-9\W]{1,})$/.test(passwordToCheck)
    const containsUpperCase = /^(?=.*[A-Z])([a-zA-Z0-9\W]{1,})$/.test(passwordToCheck)
    const containsSpecialChar = /^(?=.*[\W])([a-zA-Z0-9\W]{1,})$/.test(passwordToCheck)
    //  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/.test(passwordToCheck)
    return {
        length:passwordToCheck.length,
        number:containsNumbers, 
        lowercase:containsLowerCase, 
        uppercase:containsUpperCase, 
        special:containsSpecialChar
    }
}

const passwordStrength = (obj)=>{
    let strengthNumber=0
    const {length:length,number:number,lowercase:lowercase,uppercase:uppercase,special:special}=obj
    if(length<8){
        return {name:'Extremely Weak', number:strengthNumber}
    }else{
        if(number)
        strengthNumber+=1;
        if(lowercase)
        strengthNumber+=1;
        if(uppercase)
        strengthNumber+=1;
        if(special)
        strengthNumber+=1;
        if(length>11 && strengthNumber>2)
            strengthNumber+=1;
        if(length>=20 && strengthNumber>3)
            strengthNumber+=1;
    }


    switch(strengthNumber){
        case 0: return {name:'Very Weak', number:strengthNumber}
        case 1: return {name:'Weak', number:strengthNumber}
        case 2: return {name:'Better than Weak', number:strengthNumber}
        case 3: return {name:'Moderate', number:strengthNumber}
        case 4: return {name:'Strong', number:strengthNumber}
        case 5: return {name:'Very Strong', number:strengthNumber}
        case 6: return {name:'Very Strong', number:strengthNumber}
    }
}

const breakingTime = (strengthNumber)=>{
    if(strengthNumber>=0 && strengthNumber<=6){
        switch(strengthNumber){
            case 0: return "less than a nano-sec";
            case 1: return "few minutes";
            case 2: return "some days";
            case 3: return "some years";
            case 4: return "more than a dozen decades";
            case 5: return "a couple of centuries";
            case 6: return "more than a thousand years"
            default : return "less than a minute"
        }
    }
}

export{
    passwordChecker,
    passwordStrength,
    breakingTime
}