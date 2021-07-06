import { backgroundColorSetter } from "./cssProcessing";
import { breakingTime, passwordStrength } from "./passwordProcessing";

const warning = document.querySelector('.h5-warning')
const infoContainer = document.querySelector('.info-container');
const renderInfo = (infoObj)=>{
    const passStrength = passwordStrength(infoObj)
    infoContainer.innerHTML=''
    const infoWrapper = document.createElement('div')

    const containsNumbers = document.createElement('div')
    const containsLowerCase = document.createElement('div')
    const containsUpperCase = document.createElement('div')
    const containsSpecialChar = document.createElement('div')
    const passwordStrengthText = document.createElement('div')
    const hackText = document.createElement('div')
    const length = document.createElement('div')

    containsNumbers.innerHTML= infoObj.number?'Numbers:✅':'Numbers:❌'
    containsLowerCase.innerHTML= infoObj.lowercase?'Lowercase Characters:✅':'Lowercase Characters:❌'
    containsUpperCase.innerHTML= infoObj.uppercase?'Uppercase Characters:✅':'Uppercase Characters:❌'
    containsSpecialChar.innerHTML= infoObj.special?'Special Characters:✅':'Special Characters:❌'
    length.innerHTML= `Password length:${infoObj.length} ${infoObj.length==1?'Character':'Characters'}`
    passwordStrengthText.innerHTML = `Your Password is ${passStrength["name"]}`
    hackText.innerHTML=`It would take a Computer ${breakingTime(passStrength["number"])} to break your Password`

    infoWrapper.classList.add('info-wrapper')
    infoWrapper.appendChild(containsNumbers)
    infoWrapper.appendChild(containsLowerCase)
    infoWrapper.appendChild(containsUpperCase)
    infoWrapper.appendChild(containsSpecialChar)
    infoWrapper.appendChild(length)
    infoWrapper.appendChild(passwordStrengthText)
    infoWrapper.appendChild(hackText)

    infoContainer.appendChild(infoWrapper)
    
    if(infoObj.length>0 && infoObj.length<8){
        warning.textContent="Enter at least an 8 character password"
        backgroundColorSetter(7);
    }else{
        warning.textContent=
        backgroundColorSetter(passStrength["number"])
    }

}

const clearInfo=()=>{
    infoContainer.innerHTML='Result Appears here'
    backgroundColorSetter(0)
}

const defaultViews = ()=>{
    backgroundColorSetter(0)
}

export{
    renderInfo,
    clearInfo,
    defaultViews
}