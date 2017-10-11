//The html page uses this.
// global.$ = $;
const console = require('console');
const jQuery = require('jquery');
const {remote} = require('electron');
const {Menu, BrowserWindow, MenuItem, shell} = remote;
var child_process = require('child_process');
const app = remote.app;
const logger = app.console;

var initMenu = function () {
    try {
        var nativeMenuBar = new Menu();
        if (process.platform == "darwin") {
            nativeMenuBar.createMacBuiltin && nativeMenuBar.createMacBuiltin("FileExplorer");
        }
    } catch (error) {
        console.error(error);
        setTimeout(function () { throw error }, 1);
    }
};

function openFile() {

}

jQuery(document).ready(function() {
    initMenu();
    let childProcess = child_process.execSync("aws --version");
    jQuery('#awsversion').text(childProcess);
    logger.log("SO I shoulld see this.")
});
