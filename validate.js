function formvalidate(){
    let  name = document.login.name.value
    let password = document.login.pwd1.value
    let cpassword = document.login.pwd2.value



    if (name==null || name== ""){
        document.write("input your name")
        return false
    } else if (password.length<8){
        document.write("password must be 8 characters")
        return false
    }else if (password ==cpassword){
        return true
    }else {
        document.write("password is not the same")
        return false
    }
}