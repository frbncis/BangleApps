"";//not entirely sure why we need this - related to how bootupdate adds these to .boot0
require("FontHaxorNarrow7x17").add(Graphics);
require("FontTeletext10x18Mode7").add(Graphics);

Graphics.prototype.setFontGothicA1 = function(scale) {
    // Actual height 16 (15 - 0)
    g.setFontCustom(atob("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"), 32, atob("BAUHCwkPCgQHBwkJBQkFBQkJCQkJCQkJCQkFBQkJCQgPCgoKCwkJCwsECAoIDgsLCgsKCQgLCQ0ICQoHBQcIBwQJCQgJCQUJCQQECAQNCQkJCQYHBQkHCwcHBwcEBwsI"), 16+(scale<<8)+(1<<16));
}

const drawCellBg = function (isSelected, x, iy, x2, iy2) {
    g.setColor(isSelected ? g.theme.bgH : g.theme.bg);
    g.fillRect(x, iy, x2, iy2);
}

const drawCellTitle = function (text, x, y) {
    g.reset().setFontGothicA1();
    g.drawString(text, x, y);
}

const drawCellSubtitle = function (text, x, y) {
    g.reset().setFont('6x8', 1).drawString(text, x, y);
}

const drawCell = function (x1, y1, x2, y2, isSelected, title, subtitle, subtitleOffset, image) {
    if (!subtitleOffset) subtitleOffset = 0;

    if (!isSelected) subtitleOffset = 0;
    else if (subtitle) subtitleOffset = subtitleOffset % subtitle.length;

    let imageOffset = 0;
    let textTopOffset = CELL_PADDING_TOP_BOTTOM;
    drawCellBg(isSelected, x1, y1, x2, y2);

    if (image) {
        g.drawImage(image, x1 + CELL_PADDING_LEFT, y1 + CELL_PADDING_TOP_BOTTOM);
        imageOffset = image.width;
    }

    if (!subtitle || subtitle == "") {
        textTopOffset = Math.floor((CELL_HEIGHT - CELL_TITLE_FONT_HEIGHT) / 2);
    }

    drawCellTitle(title, x1 + 3 * CELL_PADDING_LEFT + imageOffset, y1 + textTopOffset);

    if (subtitle) {
        const st = subtitle.substr(subtitleOffset);
        drawCellSubtitle(st, x1 + imageOffset + 3 * CELL_PADDING_LEFT, y1 + CELL_TITLE_FONT_HEIGHT + textTopOffset);
    }
}

// Based on selected font, use g.stringMetrics to determine
const CELL_MENU_HEIGHT = 10;

const CELL_TITLE_FONT_HEIGHT = 18;
const CELL_SUBTITLE_FONT_HEIGHT = 8;
// const CELL_HEIGHT = 40;
const CELL_HEIGHT = (g.getHeight() / 4) -1;
const CELL_PADDING_LEFT = 2;
const CELL_PADDING_TOP_BOTTOM = Math.floor((CELL_HEIGHT - CELL_TITLE_FONT_HEIGHT - CELL_SUBTITLE_FONT_HEIGHT) / 2);

Bangle.drawWidgets = function () {
    // console.log("Overriding call to drawWidgets()");
}

E.showMenu = function (items) {
    g.reset().clearRect(Bangle.appRect); // clear if no menu supplied

    Bangle.setLCDPower(1); // ensure screen is on

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
    var y = 0;
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
                    drawCell(x, iy, x2, iy + CELL_HEIGHT - 1, hl, name, v, undefined, item.image ? item.image : undefined);
                } else if ("object" == typeof item && item.subtitle !== undefined) {
                    drawCell(x, iy, x2, iy + CELL_HEIGHT - 1, hl, name, item.subtitle ? item.subtitle : "", undefined, item.image ? item.image : undefined);
                }
                else {
                    drawCell(x, iy, x2, iy + CELL_HEIGHT - 1, hl, name, "", undefined, item.image ? item.image : undefined);
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

            // Backwards compatibility with E.showMenu
            if ("function" == typeof item) {
                item(l);
            }
            else if (item.onselect) {
                item.onselect(l);
            }
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