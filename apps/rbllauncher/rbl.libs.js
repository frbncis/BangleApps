const s = require('Storage');

function getCurrentTimeString() {
    let date = new Date();
    let da = date.toString().split(" ");
    return timeStr = da[4].substr(0, 5);
}
exports.getCurrentTimeString = getCurrentTimeString;

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
exports.getNotificationCount = getNotificationCount;

function getMessageStyling(message) {
    const colorsDict = {
        red: "#f00", green: "#0f0", blue: "#00f",
        cyan: "#0ff", magenta: "#f0f", yellow: "#ff0"
    };

    const messageSource = message.src;

    const genericIcon = {
        width : 23, height : 23, bpp : 4,
        transparent : 1,
        buffer : require("heatshrink").decompress(atob("iIAlFJQ1KgEP//wBY0QBQILBgIWGBQP/CyMQCwgLFIQQYBEQpODFwwgDHQw3DAAQ6ECxa1GCwjBLF4R9HF4asJBRIwCcDUQA"))
    };

    const knownStyles = {
        'music': {
            color: colorsDict.yellow,
            icon: {
                width : 25, height : 25, bpp : 4,
                transparent : 1,
                buffer : require("heatshrink").decompress(atob("iIACiEBAoYAGCIgLSEhYwviBuLBZAfCiEP/4AFDAgLG+AYEEAQVBgAGBDAfwBAQDCDAouE+AYSGJZKMMZZ8LSpYAviA="))
            }
        },
        'Hangouts': {
            color: colorsDict.green,
            icon: {
                width : 32, height : 32, bpp : 8,
                transparent : 254,
                buffer : E.toArrayBuffer(atob("/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4AAAAAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/gAAAAAAAAAAAAAAAP7+/v7+/v7+/v7+/v7+/v7+/v4AAAAA/v7+/v7+AAAAAP7+/v7+/v7+/v7+/v7+/v7+AAAA/v7+/v7+/v7+/gAAAP7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v4AAP7+/v7+/v7+/v7+/v4AAP7+/v7+/v7+/v7+/v7+/v4AAP7+/v7+/v7+/v7+AAAA/v7+/v7+/v7+/v7+/v7+/gAAAP7+/v7+/v7+/v4AAP7+/v7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/gAA/v7+AAAAAP7+/v4AAAAA/v7+AAD+/v7+/v7+/v4AAP7+/v4AAAAA/v7+/gAAAAD+/v7+AAD+/v7+/v7+/gAA/v7+/gAAAAD+/v7+AAAAAP7+/v4AAP7+/v7+/v7+AAD+/v7+AAAAAP7+/v4AAAAA/v7+/gAA/v7+/v7+/v4AAP7+/v7+/gAA/v7+/v7+AAD+/v7+AAD+/v7+/v7+/gAA/v7+/v4AAAD+/v7+/gAAAP7+/v4AAP7+/v7+/v7+AAD+/v7+AAAA/v7+/v4AAAD+/v7+/gAA/v7+/v7+/v7+AAD+/v4AAP7+/v7+/gAA/v7+/v4AAAD+/v7+/v7+/v4AAP7+/v7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v7+/v7+AAD+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v4AAAD+/v7+/v7+/v7+/v7+AAAA/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v7+AAAAAP7+/v7+/v7+/v4AAAD+/v7+/v7+/v7+/v7+/v7+/gAAAAAAAP7+/v7+AAAA/v7+/v7+/v7+/v7+/v7+/v7+/v7+AAAA/v7+AAAAAP7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+AAD+AAAAAP7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v4AAAAAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/gAAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+AAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/g=="))
            }
        },
        'Discord': {
            color: '#7289da',
            icon:  {
                width : 24, height : 24, bpp : 8,
                transparent : 254,
                buffer : E.toArrayBuffer(atob("/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+AAAA/v7+/v7+AAAA/v7+/v7+/v7+/gAAAAAAAP7+/v4AAAAAAAD+/v7+/v7+AAAA/v7+AAAAAAAAAP7+AAAA/v7+/v4AAP7+/v7+/v7+/v7+/v7+/v4AAP7+/v4AAP7+/v7+/v7+/v7+/v7+/v4AAP7+/v4A/v7+/v7+/v7+/v7+/v7+/v7+AP7+/gAA/v7+/gAA/v7+/v7+AAD+/v7+AAD+/gAA/v7+AAAAAP7+/v4AAAAA/v7+AAD+/gD+/v4AAP7+AP7+/v4A/v4AAP7+/gD+/gD+/v4AAP7+AP7+/v4A/v4AAP7+/gD+AAD+/v7+AAAAAP7+/v4AAAAA/v7+/gAAAAD+/v7+/gAA/v7+/v7+AAD+/v7+/gAAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/gAAAAD+/v7+AP7+/v7+/v7+/v4A/v7+/gAAAAD+/v7+AAAAAAAAAAAAAAAA/v7+/gAA/gAA/v7+/gAAAAAAAAAAAAD+/v7+AAD+/v4AAAAAAAD+/v7+/v7+/gAAAAAAAP7+/v7+/gAAAAD+/v7+/v7+/gAAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+"))
            }
        },
        'Telegram': {
            color: '#24f4ff',
            icon: {
                width : 24, height : 24, bpp : 8,
                transparent : 254,
                buffer : E.toArrayBuffer(atob("/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v7+/v7+/gAAAAAAAP7+/v7+/v7+/v7+/v7+/v4AAAAAAP4AAP7+/v7+/v7+/v7+/v7+AAAAAAD+/v4AAP7+/v7+/v7+/v7+AAAAAAD+/v7+/gAA/v7+/v7+/v7+/gAAAAAA/v7+/gD+/gAA/v7+/v7+/gAAAAAAAP7+/v4AAP7+/gAA/v7+/v7+AAAAAP7+/v7+AAAA/v7+/gAA/v7+/v4AAAD+/v7+/v4AAAD+/v7+/gAA/v7+/v4AAAAAAP7+AAAAAP7+/v7+AAD+/v7+/v7+/gAAAAAAAAAA/v7+/v7+AAD+/v7+/v7+/v7+AAAAAAD+/v7+/v7+AAD+/v7+/v7+/v7+/gAAAAD+AAD+/v7+AAD+/v7+/v7+/v7+/v4AAP4AAAAA/v7+AAD+/v7+/v7+/v7+/v4AAAAAAAAAAP4AAP7+/v7+/v7+/v7+/v4AAAAA/v4AAAAAAP7+/v7+/v7+/v7+/v7+AAD+/v7+AAAAAP7+/v7+/v7+/v7+/v7+/v7+/v7+/gAA/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+"))
            }
        },
        'Amazon': {
            color: '#ff9900',
            icon: {
                width : 24, height : 24, bpp : 8,
                transparent : 254,
                buffer : E.toArrayBuffer(atob("/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+AAAAAAAA/v7+/v7+/v7+/v7+/v7+/gAAK4GsrIFWAAD+/v7+/v7+/v7+/v7+AACs19fX19fXrAAA/v7+/v7+/v7+/v7+AKzX19es19fX11YA/v7+/v7+/v7+/v4AK9fX1ysAAKzX16wA/v7+/v7+/v7+/v4AAFaBVgAAAIHX16wA/v7+/v7+/v7+/v7+AAAAACtWVqzX16wA/v7+/v7+/v7+/v7+AACB19fX19fX16wA/v7+/v7+/v7+/v7+AKzX19eBVqzX16wA/v7+/v7+/v7+/v4AVtfX1ysAAIHX16wA/v7+/v7+/v7+/v4AgdfX1wAAAKzX16wA/v7+/v7+/v7+/v4AgdfX1wAAK9fX19crAP7+/v7+/v7+/v4AgdfX16yB19fX19eBAAD+/v7+/v4AAAAAK9fX19fX14Gs19dWAAAAAP7+/v4AVisAACuBrKysKwArrCsrgayBAP7+/v4AAFasVgAAAAAAAAAAAAArgSuBAP7+/v7+AAArgdesgYFWVlaBrNeBAFYrAP7+/v7+/v4AAABWgaysrKyBVgAAAAAA/v7+/v7+/v7+/gAAAAAAAAAAAAD+/gD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+"))
            }
        }
    }

    if (knownStyles[messageSource]) {
        return knownStyles[messageSource];
    } else {
        return {
            color: colorsDict.cyan,
            icon: genericIcon
        };
    }
}
exports.getMessageStyling = getMessageStyling;

// Load messages from message.json that is maintained
// by the Android integration app.
function loadMessages() {
    messages = s.readJSON("messages.json", 1) || [];
    return messages;
}
exports.loadMessages = loadMessages;

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

        const mStyle = getMessageStyling(m);
  
        notifications[m.title] = {
            subtitle: m.body,
            image: mStyle.icon,
            color: mStyle.color,
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

    return notifications;
}
exports.loadNotifications = loadNotifications;
