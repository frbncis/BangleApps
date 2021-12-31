var s = require("Storage");
require("FontTeletext10x18Mode7").add(Graphics);

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
    onselect: function () { Bangle.setUI(); drawScrollableMenu(notifications); },
}

apps.forEach(app => {
    launcherMenu[app.name] = {
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

launcherMenu[""] = { "title": timeStr };
launcherMenu["Settings"].subtitle = 'Battery: ' + E.getBattery() + '%';

if (messages.length > 0) {
    //launcherMenu["Messages"].subtitle = messages[0].title + ': ' + messages[0].body;
}

let notifications = {};
notifications[""] = {
    title: "Notifications",
}

notifications["< Back"] = {
    onselect: function () { drawScrollableMenu(launcherMenu); },
}
messages.forEach(m => {
    notifications[m.title] = {
        "subtitle": m.body,
    };
});
const drawCellBg = function (isSelected, x, iy, x2, iy2) {
    g.setColor(isSelected ? g.theme.bgH : g.theme.bg);
    g.fillRect(x, iy, x2, iy2);
}

const drawCellTitle = function (text, x, y) {
    g.reset().setFont('Teletext10x18Mode7', 1);
    //console.log('title: ' + g.stringMetrics(text).height);
    g.drawString(text, x, y);
}

const drawCellSubtitle = function (text, x, y) {
    g.reset().setFont('6x8', 1).drawString(text, x, y);
}

const drawCell = function (x1, y1, x2, y2, isSelected, title, subtitle, subtitleOffset) {
    console.log("drawCell() for " + title);
    if (!subtitleOffset) subtitleOffset = 0;

    if (!isSelected) subtitleOffset = 0;
    else if (subtitle) subtitleOffset = subtitleOffset % subtitle.length;

    drawCellBg(isSelected, x1, y1, x2, y2);
    drawCellTitle(title, x1 + CELL_PADDING_LEFT, y1 + CELL_PADDING_TOP_BOTTOM);

    if (subtitle) {
        const st = subtitle.substr(subtitleOffset);
        drawCellSubtitle(st, x1 + CELL_PADDING_LEFT, y1 + CELL_TITLE_FONT_HEIGHT + CELL_PADDING_TOP_BOTTOM);
    }
}

// Based on selected font, use g.stringMetrics to determine
const CELL_MENU_HEIGHT = 10;

const CELL_TITLE_FONT_HEIGHT = 18;
const CELL_SUBTITLE_FONT_HEIGHT = 8;
const CELL_HEIGHT = 40;
const CELL_PADDING_LEFT = 2;
const CELL_PADDING_TOP_BOTTOM = Math.floor((CELL_HEIGHT - CELL_TITLE_FONT_HEIGHT - CELL_SUBTITLE_FONT_HEIGHT) / 2);

function drawScrollableMenu(items) {
    g.reset().clearRect(Bangle.appRect); // clear if no menu supplied

    Bangle.setLCDPower(1); // ensure screen is on

    if (!items) {
        Bangle.setUI();
        return;
    }

    var menuItems = Object.keys(items);
    var options = items[""];

    if (options) menuItems.splice(menuItems.indexOf(""), 1);
    if (!(options instanceof Object)) options = {};

    options.fontHeight = options.fontHeight || 16;

    if (options.selected === undefined)
        options.selected = 0;

    if (!options.fontHeight)
        options.fontHeight = 6;

    var ar = Bangle.appRect;
    var x = ar.x;
    var x2 = ar.x2;
    var y = ar.y;
    var y2 = ar.y2;

    if (options.title)
        y += CELL_MENU_HEIGHT + 2;

    var loc = require("locale");
    var l = {
        lastIdx: 0,
        draw: function (rowmin, rowmax) {
            var rows = 0 | Math.min((y2 - y) / CELL_HEIGHT, menuItems.length);

            var idx = E.clip(options.selected - (rows >> 1), 0, menuItems.length - rows);
            if (idx != l.lastIdx) rowmin = undefined; // redraw all if we scrolled

            l.lastIdx = idx;

            var iy = y;

            g.reset().setFont('6x8', 2).setFontAlign(0, -1, 0);

            if (options.predraw) options.predraw(g);

            // Menu Title
            if (rowmin === undefined && options.title) {
                g.setFont('6x8');
                g.fillRect(x, y - 1, x2, y - 1);
                g.drawString(options.title, (x + x2) / 2, 2);
                g.drawLine(x, y - 1, x2, y - 1);
                g.setFont('Teletext10x18Mode7', 1);
            }

            // ????
            if (rowmin !== undefined) {
                if (idx < rowmin) {
                    iy += CELL_HEIGHT * (rowmin - idx);
                    idx = rowmin;
                }
                if (idx + rows > rowmax) {
                    rows = 1 + rowmax - rowmin;
                }
            }

            while (rows--) {
                var name = menuItems[idx];
                var item = items[name];
                var hl = (idx == options.selected && !l.selectEdit);

                if ("object" == typeof item && item.value !== undefined) {
                    var xo = x2;
                    var v = item.value;
                    if (item.format) v = item.format(v);
                    v = loc.translate("" + v);

                    if (l.selectEdit && idx == options.selected) {
                        xo -= 24 + 1;
                        g.setColor(g.theme.bgH).fillRect(xo - (g.stringWidth(v) + 4), iy, x2, iy + options.fontHeight - 1);
                        g.setColor(g.theme.fgH).drawImage("\x0c\x05\x81\x00 \x07\x00\xF9\xF0\x0E\x00@", xo, iy + (options.fontHeight - 10) / 2, { scale: 2 });
                    }
                    g.setFontAlign(1, -1);
                    g.drawString(v, xo - 2, iy);
                    drawCell(x, iy, x2, iy + CELL_HEIGHT - 1, hl, name, v);
                } else {
                    drawCell(x, iy, x2, iy + CELL_HEIGHT - 1, hl, name, item.subtitle ? item.subtitle : "");
                }
                g.setColor(g.theme.fg);
                iy += CELL_HEIGHT;
                idx++;
            }
            g.setFontAlign(-1, -1);
            var more = idx < menuItems.length;
            g.drawImage("\b\b\x01\x108|\xFE\x10\x10\x10\x10"/*E.toString(8,8,1,
        0b00010000,
        0b00111000,
        0b01111100,
        0b11111110,
        0b00010000,
        0b00010000,
        0b00010000,
        0b00010000
      )*/, x2 + 2, 40);
            g.drawImage("\b\b\x01\x10\x10\x10\x10\xFE|8\x10"/*E.toString(8,8,1,
        0b00010000,
        0b00010000,
        0b00010000,
        0b00010000,
        0b11111110,
        0b01111100,
        0b00111000,
        0b00010000
      )*/, x2 + 2, 194);
            g.drawImage("\b\b\x01\x00\b\f\x0E\xFF\x0E\f\b"/*E.toString(8,8,1,
        0b00000000,
        0b00001000,
        0b00001100,
        0b00001110,
        0b11111111,
        0b00001110,
        0b00001100,
        0b00001000
      )*/, x2 + 2, 116);
            g.setColor(more ? g.theme.fg : g.theme.bg).fillPoly([104, 220, 136, 220, 120, 228]);
            g.flip();
        },
        select: function () {
            var item = items[menuItems[options.selected]];
            if (item.onselect) item.onselect(l);
            else if ("object" == typeof item) {
                // if a number, go into 'edit mode'
                if ("number" == typeof item.value)
                    l.selectEdit = l.selectEdit ? undefined : item;
                else { // else just toggle bools
                    if ("boolean" == typeof item.value) item.value = !item.value;
                    if (item.onchange) item.onchange(item.value);
                }
                l.draw();
            }
        },
        move: function (dir) {
            var item = l.selectEdit;
            if (item) {
                item = l.selectEdit;
                item.value -= (dir || 1) * (item.step || 1);
                if (item.min !== undefined && item.value < item.min) item.value = item.wrap ? item.max : item.min;
                if (item.max !== undefined && item.value > item.max) item.value = item.wrap ? item.min : item.max;
                if (item.onchange) item.onchange(item.value);
                l.draw(options.selected, options.selected);
            } else {
                var lastSelected = options.selected;
                options.selected = (dir + options.selected + menuItems.length) % menuItems.length;
                l.draw(Math.min(lastSelected, options.selected), Math.max(lastSelected, options.selected));
            }
        }
    };
    l.draw();
    Bangle.setUI("updown", dir => {
        if (dir) l.move(dir);
        else l.select();
    });
    return l;
}

var boolean = false;
var number = 50;
// First menu
var mainmenu = {
    "": { "title": "-- Main Menu --" },
    "Backlight": {
        value: boolean,
        format: v => v ? "On" : "Off",
        onchange: v => {
            boolean = v;

            if (boolean) {
                LED1.set();
            } else {
                LED1.reset();
            }
        }
    },
    "Submenu": {
        onselect: function () { drawScrollableMenu(submenu); },
    },
    "A Boolean": {
        value: boolean,
        format: v => v ? "On" : "Off",
        onchange: v => { boolean = v; }
    },
    "A Number": {
        value: number,
        min: 0,
        max: 100,
        step: 10,
        onchange: v => { number = v; }
    },
    "Exit": {
        onselect: function () { drawScrollableMenu(launcherMenu); }, // remove the menu
    },
};
// Submenu
var submenu = {
    "": { "title": "-- SubMenu --" },
    "One": undefined, // do nothing
    "Two": undefined, // do nothing
    "< Back": {
        onselect: function () { drawScrollableMenu(launcherMenu); },
    },
};
// Actually display the menu
drawScrollableMenu(launcherMenu);