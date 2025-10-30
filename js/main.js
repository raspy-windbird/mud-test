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
    const button_id = "boot";
    Dom.create("input", "boot", { type: "button", value: "SYSTEM", id: button_id });
    const button = document.getElementById(button_id);
    function clickdo2() {
        button.remove();
    }
    Dom.clicked(button,clickdo2,"true");
}

main();