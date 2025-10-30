import dom from "./Dom.js";

const Dom = new dom;
async function main () {
    console.log("main ---LOADING startup---")
    await startup();
    await boot();
}

async function startup () {
    console.log("startup ---STANDBY---");
    function dosomething(){console.log("hello!")}
    await Dom.clicked(document,dosomething,"true")
}

async function boot (params) {
    const button_id = "boot";
    await Dom.create("input", "boot", { type: "button", value: "SYSTEM", id: button_id });
    const button = document.getElementById(button_id);
    function clickdo() {
        console.log("hello");
        button.remove();
    }
    Dom.clicked(button,clickdo,"true");

}

main()