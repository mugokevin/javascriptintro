function setCookie(){
    document.cookie = "coding is fun"
    alert(document.cookie)
}

function getCookie(){
    document.cookie = "kuja uone mazingaombwe"
    if (document.cookie.length!=0){
        alert(document.cookie)
    }else{
        alert("cookie not available")
    }
}

