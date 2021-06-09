function transform(btn){
    let btnMenu = document.getElementById(btn);
    if(btnMenu.classList.contains("change"))
        btnMenu.classList.remove("change");
    else btnMenu.classList.add("change");
}

function btnSearchClick(){
    transform("btnMenu");
    transform("logoHeader");
    transform("inputSearchBar");

}

function btnMenuClick(){
    transform("btnMenu");

}

