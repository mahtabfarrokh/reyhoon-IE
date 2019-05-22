function handleTab(evt, name){
    if(name==='login'){
            document.getElementById("register").style.display = "none";
            document.getElementById("login").style.display = "block";

            document.getElementsByClassName("lll1")[0].style.backgroundColor = "#cf0067";
            document.getElementsByClassName("lll2")[0].style.backgroundColor = "white";

            document.getElementsByClassName("micon2")[0].style.color = "#cf0067";
            document.getElementsByClassName("micon1")[0].style.color = "#9b9b9b";

    }
    if(name==='register'){
            document.getElementById("login").style.display = "none";
            document.getElementById("register").style.display = "block";

            document.getElementsByClassName("lll2")[0].style.backgroundColor = "#cf0067";
            document.getElementsByClassName("lll1")[0].style.backgroundColor = "white";

            document.getElementsByClassName("micon1")[0].style.color = "#cf0067";
            document.getElementsByClassName("micon2")[0].style.color = "#9b9b9b";

    }
                        
}