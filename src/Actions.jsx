export const deposit=(amount)=>{
    return {type:"deposit",payload:amount}
}

export const withdraw=(amount)=>{
    return {type:"withdraw",payload:amount}
}


export const updateName=(name)=>{
    return {type:"namechange",payload:name}
}



export const updateMobile=(mobile)=>{
    return {type:"mobilenum",payload:mobile}
}


export const updateReset=()=>{
    return {type:"reset"}
}



