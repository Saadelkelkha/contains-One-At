function contientUnAt(ch) {
    var n = 0
    for (var i = 0; i < ch.length; i++) {
        if (ch[i] == "@"){
            n += 1
        }
    }
    if (n == 1){
            return true;
    }else{
        return false
    }
    
}