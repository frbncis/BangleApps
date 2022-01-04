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

var hangoutsIcon = {
    width : 32, height : 32, bpp : 8,
    transparent : 254,
    buffer : E.toArrayBuffer(atob("/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4AAAAAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/gAAAAAAAAAAAAAAAP7+/v7+/v7+/v7+/v7+/v7+/v4AAAAA/v7+/v7+AAAAAP7+/v7+/v7+/v7+/v7+/v7+AAAA/v7+/v7+/v7+/gAAAP7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v4AAP7+/v7+/v7+/v7+/v4AAP7+/v7+/v7+/v7+/v7+/v4AAP7+/v7+/v7+/v7+AAAA/v7+/v7+/v7+/v7+/v7+/gAAAP7+/v7+/v7+/v4AAP7+/v7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/gAA/v7+AAAAAP7+/v4AAAAA/v7+AAD+/v7+/v7+/v4AAP7+/v4AAAAA/v7+/gAAAAD+/v7+AAD+/v7+/v7+/gAA/v7+/gAAAAD+/v7+AAAAAP7+/v4AAP7+/v7+/v7+AAD+/v7+AAAAAP7+/v4AAAAA/v7+/gAA/v7+/v7+/v4AAP7+/v7+/gAA/v7+/v7+AAD+/v7+AAD+/v7+/v7+/gAA/v7+/v4AAAD+/v7+/gAAAP7+/v4AAP7+/v7+/v7+AAD+/v7+AAAA/v7+/v4AAAD+/v7+/gAA/v7+/v7+/v7+AAD+/v4AAP7+/v7+/gAA/v7+/v4AAAD+/v7+/v7+/v4AAP7+/v7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v7+/v7+AAD+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v4AAAD+/v7+/v7+/v7+/v7+AAAA/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v7+AAAAAP7+/v7+/v7+/v4AAAD+/v7+/v7+/v7+/v7+/v7+/gAAAAAAAP7+/v7+AAAA/v7+/v7+/v7+/v7+/v7+/v7+/v7+AAAA/v7+AAAAAP7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+AAD+AAAAAP7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4AAAAAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/gAAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+AAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/g=="))
}

var musicIcon = {
    width : 25, height : 25, bpp : 4,
    transparent : 1,
    buffer : require("heatshrink").decompress(atob("iIACiEBAoYAGCIgLSEhYwviBuLBZAfCiEP/4AFDAgLG+AYEEAQVBgAGBDAfwBAQDCDAouE+AYSGJZKMMZZ8LSpYAviA="))
}

var discordIcon = {
    width : 24, height : 24, bpp : 8,
    transparent : 254,
    buffer : E.toArrayBuffer(atob("/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+AAAA/v7+/v7+AAAA/v7+/v7+/v7+/gAAAAAAAP7+/v4AAAAAAAD+/v7+/v7+AAAA/v7+AAAAAAAAAP7+AAAA/v7+/v4AAP7+/v7+/v7+/v7+/v7+/v4AAP7+/v4AAP7+/v7+/v7+/v7+/v7+/v4AAP7+/v4A/v7+/v7+/v7+/v7+/v7+/v7+AP7+/gAA/v7+/gAA/v7+/v7+AAD+/v7+AAD+/gAA/v7+AAAAAP7+/v4AAAAA/v7+AAD+/gD+/v4AAP7+AP7+/v4A/v4AAP7+/gD+/gD+/v4AAP7+AP7+/v4A/v4AAP7+/gD+AAD+/v7+AAAAAP7+/v4AAAAA/v7+/gAAAAD+/v7+/gAA/v7+/v7+AAD+/v7+/gAAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/gAAAAD+/v7+AP7+/v7+/v7+/v4A/v7+/gAAAAD+/v7+AAAAAAAAAAAAAAAA/v7+/gAA/gAA/v7+/gAAAAAAAAAAAAD+/v7+AAD+/v4AAAAAAAD+/v7+/v7+/gAAAAAAAP7+/v7+/gAAAAD+/v7+/v7+/gAAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+"))
}

var telegramIcon = {
    width : 24, height : 24, bpp : 8,
    transparent : 254,
    buffer : E.toArrayBuffer(atob("/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v7+/v7+/gAAAAAAAP7+/v7+/v7+/v7+/v7+/v4AAAAAAP4AAP7+/v7+/v7+/v7+/v7+AAAAAAD+/v4AAP7+/v7+/v7+/v7+AAAAAAD+/v7+/gAA/v7+/v7+/v7+/gAAAAAA/v7+/gD+/gAA/v7+/v7+/gAAAAAAAP7+/v4AAP7+/gAA/v7+/v7+AAAAAP7+/v7+AAAA/v7+/gAA/v7+/v4AAAD+/v7+/v4AAAD+/v7+/gAA/v7+/v4AAAAAAP7+AAAAAP7+/v7+AAD+/v7+/v7+/gAAAAAAAAAA/v7+/v7+AAD+/v7+/v7+/v7+AAAAAAD+/v7+/v7+AAD+/v7+/v7+/v7+/gAAAAD+AAD+/v7+AAD+/v7+/v7+/v7+/v4AAP4AAAAA/v7+AAD+/v7+/v7+/v7+/v4AAAAAAAAAAP4AAP7+/v7+/v7+/v7+/v4AAAAA/v4AAAAAAP7+/v7+/v7+/v7+/v7+AAD+/v7+AAAAAP7+/v7+/v7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+"))
  }

const showNotifications = (n) => {
    if (n && Object.keys(n).length > 0) {
        E.showMenu(n);
    } else {
        const NO_NOTIFICATIONS_TEXT = 'No Notifications';

        const textMetrics = g.stringMetrics(NO_NOTIFICATIONS_TEXT);

        g.clearRect(Bangle.appRect);
        g.drawRect(Bangle.appRect);

        g.drawString(
            NO_NOTIFICATIONS_TEXT,
            (g.getWidth() / 2) - (textMetrics.width / 2),
            (g.getHeight() / 2) - (textMetrics.height / 2)
        );

        Bangle.setUI();
        Bangle.setUI("updown", dir => {
            E.showMenu(launcherMenu);
        });
    }
}

function getMessageIcon(message) {
    const messageSource = message.src;

    let icon = undefined;

    if (message.id == 'music') {
        icon = musicIcon;
    } else if (messageSource == 'Hangouts') {
        icon = hangoutsIcon;
    } else if (messageSource == 'Discord') {
        icon = discordIcon;
    } else if (messageSource == 'Telegram') {
        icon = telegramIcon
    } else {
        icon = notificationGenericIcon;
    }

    return icon;
}

let messages = [];

function loadMessages() {
    messages = s.readJSON("messages.json", 1) || [];
    return messages;
}

loadMessages();

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

const firstNonMusicNotification = messages.find(m => m.id != 'music');

launcherMenu.Notifications = {
    subtitle: firstNonMusicNotification !== undefined ? firstNonMusicNotification.title + ': ' + firstNonMusicNotification.body : "",
    onselect: function () { Bangle.setUI(); loadNotifications(); showNotifications(notifications); },
    image: notificationGenericIcon
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

const music = messages.find(m => m.id);

launcherMenu['Music'] = {
    image: musicIcon,
    subtitle: music ? music.track + ' - ' + music.artist : undefined,
    sortorder: -1000,
    onselect: () => showMessageOverlay('music', () => E.showMenu(launcherMenu)),
}

launcherMenu["Settings"].subtitle = 'Battery: ' + E.getBattery() + '%';
launcherMenu["Settings"].image = settingsIcon;

let notifications;

// Construct the notifications as a doubly linked list.
function loadNotifications() {
    notifications = {};
    
    // Head
    notifications["< Back"] = {
        onselect: function () { E.showMenu(launcherMenu); },
        previous: undefined,
        next: undefined
    }

    const head = notifications["< Back"];
    let previousNode = head;
    
    loadMessages();

    messages.forEach((m, mIndex) => {
        // Skip music related messages
        if (m.id == 'music') {
            return;
        }
  
        notifications[m.title] = {
            subtitle: m.body,
            image: getMessageIcon(m),
            message: m,
            onselect: () => showMessageOverlay(notifications[m.title], () => {
                notifications[""] = Object.assign(
                    {},
                    notifications[""],
                    {
                        // Add one to the message index since the "Back"
                        // menu entry is at index 0.
                        selected: mIndex + 1,
                    }
                );

                showNotifications(notifications);
            }),
            previous: previousNode,
        };

        previousNode.next = notifications[m.title];
        previousNode = notifications[m.title];
    });
}

loadNotifications();

let musicReloadTask = undefined;

function getTextLines(text, width, firstLine, lastLine) {
    const lines = g.wrapString(text, width);

    return lines.slice(firstLine, lastLine);
}

function showPopover(onBack, onDismiss, onCancel, selectedIndex) {
    const popoverOptions = [
        {
            text: "Back",
            onselect: onBack
        },
        {
            text: "Dismiss",
            onselect: onDismiss
        },
        {
            text: "---"
        },
        {
            text: "Cancel",
            onselect: () => {
                onCancel()
            }
        }
    ];

    if (selectedIndex === undefined || selectedIndex < 0) {
        selectedIndex = 0;
    } else if (selectedIndex >= popoverOptions.length) {
        selectedIndex = popoverOptions.length - 1;
    }

    const EXPOSED_LEFT_EDGE = g.getWidth()/3;

    // TODO: Align margin/padding terminology.
    const POPOVER_LEFT_MARGIN = 10;
    const POPOVER_TOP_MARGIN = 10;

    g.setColor(0, 0, 0);
    g.fillRect(EXPOSED_LEFT_EDGE, 0, g.getWidth(), g.getHeight());

    let x = EXPOSED_LEFT_EDGE + POPOVER_LEFT_MARGIN;
    let y = POPOVER_TOP_MARGIN;

    g.reset().setFontGothicA1();

    g.setColor(255, 255, 255);
    const metrics = g.stringMetrics(" ");

    popoverOptions.forEach((option, index) => {
        const bullet = " > ";
        const bulletMetrics = g.stringMetrics(bullet)

        if (option.text == '---') {
            g.drawLine(x + bulletMetrics.width, y, g.getWidth() - POPOVER_LEFT_MARGIN, y);
        } else {
            if (index == selectedIndex) {
                g.drawString(bullet, x, y);
            }
    
            g.drawString(option.text, x + bulletMetrics.width, y);
            y += metrics.height        
        }

        y += POPOVER_TOP_MARGIN;
    });

    Bangle.setUI();
    Bangle.setUI('updown', (dir) => {
        if (!dir) {
            popoverOptions[selectedIndex].onselect();
        } else {
            let newSelectedIndex = selectedIndex + dir;

            // Horizontal rules cannot be selected, so apply another
            // "scroll"
            while (popoverOptions[newSelectedIndex] && popoverOptions[newSelectedIndex].text === '---') {
                newSelectedIndex += dir;
            }
        
            showPopover(onBack, onDismiss, onCancel, newSelectedIndex);
        }
    });
}

const CELL_MENU_HEIGHT = 10;

function getNotificationCount(current) {
    // Find the head
    let head = current;

    while (head.previous !== undefined) {
        head = head.previous;
    }

    let currentNodePosition = 0;
    let node = head;

    // Find the current nod position
    while (node.next !== undefined && node.next != current) {
        currentNodePosition += 1;
        node = node.next;
    };

    let depth = currentNodePosition;

    // Continue to the end
    while(node.next !== undefined) {
        node = node.next;
        depth += 1;
    }

    return { current: (currentNodePosition + 1), total: depth }
}


// TODO: This should be shared with the status bar draw
// code used in menu software mod.
const drawStatusBar = (text, bgColor) => {
    const x = 0;
    const y = 0;
    const x2 = g.getWidth();
    const y2 = CELL_MENU_HEIGHT;

    g.setFont('6x8');
    g.setColor(bgColor);
    const textMetrics = g.stringMetrics(text);

    g.fillRect(x, y, x2, y2 - 1);

    // Set text to black
    g.setColor(0, 0, 0);
    g.drawString(
        text,
        ((x2 - x) / 2) - (textMetrics.width /2),
        ((y2 - y) / 2) - (textMetrics.height / 2)
    );

    g.drawLine(x, y - 1, x2, y - 1);
}

function getHeaderBackground(messageNode) {
    const colorsDict = {
        red: "#f00", green: "#0f0", blue: "#00f",
        cyan: "#0ff", magenta: "#f0f", yellow: "#ff0"
    };

    const colors = Object.keys(colorsDict);

    let messageNodeDetails = getNotificationCount(messageNode);

    const selectedColor = colors[(messageNodeDetails.current % colors.length)];

    return colorsDict[selectedColor];
}

function showMessageOverlay(messageNode, ondismissed, yOffset) {
    Bangle.setUI();

    g.reset().clearRect(0, 0, g.getWidth(), g.getHeight());

    // const message = messages.find(m => m.id == messageUid);
    const message = messageNode.message;
    let shouldAdvanceToNextMessage = false;

    if (ondismissed === undefined) {
        ondismissed = () => {
            showNotifications(notifications);
        }
    }

    if (yOffset === undefined) {
        yOffset = 0;
    } else if (yOffset >= 20) {
        // Navigating backwards.
        if (messageNode.previous !== undefined && messageNode.previous.message !== undefined) {
            setTimeout(() => showMessageOverlay(messageNode.previous, ondismissed, 0));
        } else {
            // Debounce needed to avoid going back into the message
            setTimeout(ondismissed, 250);
        }
    }

    if (!message) {
        return;
    } else if (message.id == 'music') {
        // Backfill "standard" message properties from the
        // music message.
        message.src = 'Music';
        message.title = message.track;
        message.body = message.artist;
    }

    g.reset().clearRect(Bangle.appRect);

    const x = 10;
    let y = yOffset + CELL_MENU_HEIGHT;
    const VERT_PADDING = 5;
    const HEADER_HEIGHT = 48;

    // Draw the header background
    const headerBackground = getHeaderBackground(messageNode);
    g.setColor(headerBackground);
    g.fillRect(0, 0, Bangle.appRect.w, y + HEADER_HEIGHT);
    
    let icon = getMessageIcon(message);

    g.drawImage(
        icon,
        x,
        y + (HEADER_HEIGHT / 2) - (notificationGenericIcon.height / 2),
        {
            // Scale this so it is 23px x 23px
            scale: 23 / icon.width
        }
    );

    // Draw the header text
    g.reset().setFontGothicA1();
    g.drawString(
        message.src ? message.src : 'Notification',
        x + notificationGenericIcon.width + 10,
        y + (HEADER_HEIGHT / 2) - (g.stringMetrics(' ').height / 2)
    );

    if (yOffset > 0) {
        const PULL_TO_EXIT_TEXT = "<";

        const pullToExitTextMetrics = g.stringMetrics(PULL_TO_EXIT_TEXT);
        g.drawString(
            PULL_TO_EXIT_TEXT,
            (Bangle.appRect.w / 2) - (pullToExitTextMetrics.width / 2),
            pullToExitTextMetrics.height
        );
    }

    y += HEADER_HEIGHT + VERT_PADDING;

    if(message) {
        g.reset().setFontGothicA1();

        const titleLines = g.wrapString(message.title, Bangle.appRect.w - 30);
        const bodyLines = getTextLines(message.body, Bangle.appRect.w - 30);

        g.drawString(
            titleLines.join('\n'),
            x,
            y
        );

        y += g.stringMetrics(' ').height * titleLines.length;

        y += VERT_PADDING;

        g.setFont('6x8', 2);
        g.drawString(bodyLines.join('\n'), x, y);

        // Advance y to the end of the message
        y += bodyLines.length * g.stringMetrics(' ').height + HEADER_HEIGHT;

        // Is there a next message? Draw the header block for the next message at the bottom.
        if (messageNode.next !== undefined) {
            const nextMessage = messageNode.next.message;

            // Figure out how much padding we need between the end of the current
            // body to align with the yOffset "steps per scroll"
            const endOfMessageY = y + HEADER_HEIGHT + CELL_MENU_HEIGHT;
            const padding = (endOfMessageY % 30);
            y += padding;

            // Draw the header background
            g.setColor(getHeaderBackground(messageNode.next));
            g.fillRect(0, y, Bangle.appRect.w, y + HEADER_HEIGHT);
            
            let icon = getMessageIcon(nextMessage);

            g.drawImage(
                icon,
                x,
                y + (HEADER_HEIGHT / 2) - (notificationGenericIcon.height / 2),
                {
                    // Scale this so it is 23px x 23px
                    scale: 23 / icon.width
                }
            );

            // Draw the header text
            g.reset().setFontGothicA1();
            g.drawString(
                nextMessage.src ? nextMessage.src : 'Notification',
                x + notificationGenericIcon.width + 10,
                y + (HEADER_HEIGHT / 2) - (g.stringMetrics(' ').height / 2)
            );

            y += HEADER_HEIGHT;

            if (y <= g.getHeight()) {
                shouldAdvanceToNextMessage = true;
            }
        }
    } else {
        g.drawString("Message not found.");
    }

    // Draw status bar at the end so it has the highest z-index
    const notificationCount = getNotificationCount(messageNode);

    drawStatusBar(
        notificationCount.current + '/' + notificationCount.total,
        headerBackground
    );

    if (message.id == 'music') {
        // The poll based reload task is unstable.
        // TODO: Subscribe to incoming GB music events?
        if (musicReloadTask) {
            clearInterval(musicReloadTask);
        }

        // musicReloadTask = setInterval(() => {
        //     loadMessages();
        //     showMessageOverlay('music');
        // }, 1000);

        Bangle.setUI("leftright", dir => {
            // Tap
            if (dir === undefined) {
                clearTimeout(musicReloadTask);
                ondismissed();
            } else {
                Bangle.musicControl('next');
                // Redraw the overlay in one second hopefully with new music
                // state details.
                if (musicReloadTask) {
                    clearTimeout(musicReloadTask);
                }

                musicReloadTask = setTimeout(() =>
                {
                    loadMessages();
                    showMessageOverlay('music');
                }, 5000);
            }
        });
    } else {
        // pressing button shows popover
        const popover = _ => showPopover(
            ondismissed,
            () => {
                Bangle.messageResponse(message, false);

                setTimeout(
                    () => {
                        loadNotifications();
                        showNotifications(notifications);
                    },
                    500);
            },
            () => showMessageOverlay(messageNode, ondismissed, yOffset)
        );

        setWatch(popover, BTN1, {edge:"falling"});

        Bangle.setUI("updown", dir => {
            // Tap
            if (dir === undefined) {
                popover();
            } else {
                if (!shouldAdvanceToNextMessage) {
                    // Redraw the message overlay with a scroll offset.
                    showMessageOverlay(messageNode, ondismissed, yOffset + dir * 30);
                } else {
                    showMessageOverlay(messageNode.next, ondismissed, 0);
                }
            }
        });
    }
}

E.showMenu(launcherMenu);

// 10s of inactivity goes back to clock
Bangle.setLocked(false); // unlock initially
var lockTimeout;
Bangle.on('lock', locked => {
  if (lockTimeout) clearTimeout(lockTimeout);
  lockTimeout = undefined;
  if (locked)
    lockTimeout = setTimeout(_=>load(), 10000);
});
