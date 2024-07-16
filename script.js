// window.alert = function(message, timeout=null ){
//     const alert = document.createElement("div");
//     alert.classList.add("alert");
//     alert.setAttribute("style",'position: fixed; top: 50%; left: 50%; border-radius: 5px; box-shadow: 0 0 5px 0 #000044');
//     alert.innerHTML="Abhishek";
//     document.body.appendChild(alert);
// }
function stro(){
    const inputF=document.getElementsByTagName("strong");
    const fn=document.getElementById("fn").value;
    const ln=document.getElementById("ln").value;
    const em=document.getElementById("email").value;
    for (let index = 0; index < inputF.length ; index++) {
        inputF[index].setAttribute("style","display: none;");
    }
}
stro();
function alertM(){

    const inputF=document.getElementsByTagName("input");
    const inputF1=document.getElementsByTagName("strong");
    const fn=document.getElementById("fn");
    const ln=document.getElementById("ln");
    const em=document.getElementById("email");
    const ge=document.getElementById("GE");
    const sr=document.getElementById("SR");
    const QT1=document.querySelector(".qt1");
    const QT2=document.querySelector(".qt2");
    const textA=document.getElementById("me");
    const cons=document.getElementById("consent");
    const S1=document.getElementById("s1");
    const S2=document.getElementById("s2");
    const S3=document.getElementById("s3");
    const S4=document.getElementById("s4");
    const S5=document.getElementById("s5");
    if(fn.value.trim()==="" && ln.value.trim()==="" && em.value.trim()==="" && ge.checked==false && sr.checked==false && textA.value.trim()==="" && cons.checked===false){
        for (let index = 0; index < 3 ; index++) {
            inputF[index].setAttribute("style","border-color: red");
            
        }
        for (let index = 0; index < inputF1.length ; index++) {
            inputF1[index].style.display="block";
        }
        QT1.setAttribute("style","border-color: red");
        QT2.setAttribute("style","border-color: red");
        textA.setAttribute("style","border-color: red");
    }
    else if (fn.value.trim()==="" && ln.value.trim()==="") {
        fn.setAttribute("style","border-color: red");
        ln.setAttribute("style","border-color: red");
        S1.style.display="block";
    }
    else if (fn.value.trim()==="") {
        fn.setAttribute("style","border-color: red");
        S1.style.display="block";
    }
    else if (ln.value.trim()==="") {
        ln.setAttribute("style","border-color: red");
        S1.style.display="block";
    }
    else if(em.value.trim()===""){
        em.setAttribute("style","border-color: red");
        S2.style.display="block";
    }
    else if(ge.checked==false && sr.checked==false){
        ge.setAttribute("style","border-color: red");
        sr.setAttribute("style","border-color: red");
        S3.style.display="block";
    }
    else if(textA.value.trim()===""){
        textA.setAttribute("style","border-color: red");
        S4.style.display="block";
    }
    else if(cons.checked==false){
        S5.style.display="block";
    }
    else{
        let a=document.querySelector(".alertbox");
        let b=document.querySelector('form');
        b.style.marginTop="70px";
        a.style.display="block";
        setTimeout(()=>{
            b.style.marginTop="0px";
            a.style.display="none";
        }, 3000);
    }
    ge.checked=false;
    sr.checked=false;
}


document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    alertM();
});