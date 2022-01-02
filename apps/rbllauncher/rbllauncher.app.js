var s = require("Storage");
require("FontTeletext10x18Mode7").add(Graphics);

var notificationGenericIcon = {
    width : 23, height : 23, bpp : 4,
    transparent : 1,
    buffer : require("heatshrink").decompress(atob("iIAlFJQ1KgEP//wBY0QBQILBgIWGBQP/CyMQCwgLFIQQYBEQpODFwwgDHQw3DAAQ6ECxa1GCwjBLF4R9HF4asJBRIwCcDUQA"))
}

var unknownIcon = {
    width : 25, height : 25, bpp : 4,
    transparent : 1,
    buffer : require("heatshrink").decompress(atob("iIAlF5EBBYMQHhcA/4AF+AYDh4NE+AGBDAYGB+AhB/4GBDAgUBFwQaBGIwCBDgIxGGAYYJA4MADBIyBAgQYIMZBgDCAZ8QDBYJCKoaVRGJbHMcBQAjiA"))
}

var settingsIcon = {
    width : 23, height : 23, bpp : 4,
    transparent : 1,
    buffer : require("heatshrink").decompress(atob("iIAniAqJiEBBScREAUQFhQZHMYQ6HOBQKMIhAK/BRiEBU6reVA=="))
}

const messages = require("Storage").readJSON("messages.json", 1) || [];

var apps = s.list(/\.info$/).map(app => { var a = s.readJSON(app, 1); return a && { name: a.name, type: a.type, icon: a.icon, sortorder: a.sortorder, src: a.src }; }).filter(app => app && (app.type == "app" || !app.type) && app.name.indexOf("Android") == -1 && app.name.indexOf("About") == -1);
apps.sort((a, b) => {
    var n = (0 | a.sortorder) - (0 | b.sortorder);
    if (n) return n; // do sortorder first
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
apps.forEach(app => {
    if (app.icon)
        app.icon = s.read(app.icon); // should just be a link to a memory area
});

let launcherMenu = [];

launcherMenu.Notifications = {
    subtitle: messages[0] !== undefined ? messages[0].title + ': ' + messages[0].body : "",
    onselect: function () { Bangle.setUI(); E.showMenu(notifications); },
    image: notificationGenericIcon,
}

apps.forEach(app => {
    launcherMenu[app.name] = {
        image: unknownIcon,
        onselect: function () {
            if (!app) return;
            if (!app.src || require("Storage").read(app.src) === undefined) {
                E.showMessage("App Source\nNot found");
                setTimeout(drawMenu, 2000);
            } else {
                E.showMessage("Loading...");
                load(app.src);
            }
        }
    };
});

let date = new Date();
let da = date.toString().split(" ");
let timeStr = da[4].substr(0, 5);
const t = 6;

launcherMenu[""] = {
    // title: timeStr
};
launcherMenu["Settings"].subtitle = 'Battery: ' + E.getBattery() + '%';
launcherMenu["Settings"].image = settingsIcon;

let notifications = {};
notifications[""] = {
    // title: "Notifications",
}

notifications["< Back"] = {
    onselect: function () { E.showMenu(launcherMenu); },
}
messages.forEach(m => {
    notifications[m.title] = {
        subtitle: m.body,
        image: notificationGenericIcon,
    };
});

E.showMenu(launcherMenu);