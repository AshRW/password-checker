import {renderInfo, clearInfo, defaultViews} from './views'
import { passwordChecker} from './passwordProcessing';
defaultViews()

const input = document.querySelector('#password_input')

input.addEventListener('input', (e)=>{
    const input = e.target.value;
    if(input){
        if(!/^\s+/.test(input)){
            const passwordResultObj = passwordChecker(input)
            renderInfo(passwordResultObj)
        }else{
            e.target.value=''
            alert("Password can't start with Space")
        }
    }else{
        clearInfo()
    }
})



