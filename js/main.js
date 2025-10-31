import Dom from "./Dom.js";
import Doanime from "./Doanime.js";

const dom = new Dom

//main
function main () {
    console.log("main ---LOADING startup---")
    startup();
}

//SCRIPT//
function startup () {
    console.log("startup ---STANDBY---");

    function clickdo(){
        console.log("startup ---LOADING boot---");
        boot();
    }
    dom.clicked(document,clickdo,"true")
    
    //anime
    const elem = dom.select("background");
    elem.addEventListener("DOMContentLoaded",Doanime.background.boot(elem))
    //
}

function boot () {
    const button_id = "boot_button";
    dom.create("input", "boot", { type: "button", value: "SYSTEM", id: button_id });
    
    function clickdo (){
        console.log("boot ---STARTED---");
        dom.remove(button_id);
    }
    dom.clicked(button_id,clickdo,"true")
}

function process () {

}

main();