import Dom from "./Dom.js";
import Doanime from "./Doanime.js";

//main
function main () {
    console.log("main ---LOADING startup---")
    startup();
}

//SCRIPT//
function startup () {
    console.log("startup ---STANDBY---");
    function clickdo1(){
        console.log("startup ---LOADING boot---");
        boot();
    }
    Dom.clicked(document,clickdo1,"true")
    
    const elem = document.getElementById("background");
    elem.addEventListener("DOMContentLoaded",Doanime.background.boot(elem))
}

function boot () {
    const button_id = "boot_button";
    Dom.create("input", "boot", { type: "button", value: "SYSTEM", id: button_id });
    
    const button = document.getElementById(button_id);
    button.addEventListener('click', () => {
    console.log("boot ---STARTED---");
    button.remove();
    });
}

function process () {

}

main();