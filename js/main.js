import dom from "./Dom.js";

const Dom = new dom;
function main () {
    console.log("main ---LOADING startup---")
    startup();
}

async function startup () {
    console.log("startup ---STANDBY---");
    function clickdo1(){
        console.log("hello!")
        boot()
    }
    Dom.clicked(document,clickdo1,"true")
}

function boot () {
    const button_id = "boot_button";
    Dom.create("input", "boot", { type: "button", value: "SYSTEM", id: button_id });
    const button = document.getElementById(button_id);
    Dom.clicked(button,button.remove(),"true");
}

main();