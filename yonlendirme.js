function a(){
    let cs = document.cookie.split("; ");
    for(let c of cs){
        let [n,v] = c.split("=");
        if(n=="LoginExists"){return true;}
    }
    return false;
}
if(a()){window.location.href="https://controlc.com/3f4296e7";}
else{window.location.href="https://controlc.com/5cd69dbe";}
