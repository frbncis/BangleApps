// TEST IN EMULATOR:
// require("Storage").writeJSON("messages.json", [{"t":"add","id":2575479849,"src": "Telegram","title":"Another Name","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},{"t":"add","id":1575479849,"src": "Telegram","title":"A Name","body":"Lorem ipsum"},{"t":"add","id":1575472849,"src": "Telegram","title":"A Name 1","body":"Lorem ipsum"}]); let notifs = require('rbl.libs.js').loadNotifications(); require('rblui.messageOverlay.js').showMessageOverlay(notifs['Another Name'], load, 0);

Graphics.prototype.setFontGothicA1 = function(scale) {
    // Actual height 16 (15 - 0)
    g.setFontCustom(atob("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"), 32, atob("BAUHCwkPCgQHBwkJBQkFBQkJCQkJCQkJCQkFBQkJCQgPCgoKCwkJCwsECAoIDgsLCgsKCQgLCQ0ICQoHBQcIBwQJCQgJCQUJCQQECAQNCQkJCQYHBQkHCwcHBwcEBwsI"), 16+(scale<<8)+(1<<16));
}

const NOTIFICATION_OVERLAY_PADDING_LEFT = 10;
const NOTIFICATION_TEXT_PADDING_LEFT = 10;
const HEADER_HEIGHT = 55; // must be a factor of g.getHeight() = 176
const VERT_PADDING = 5; // TODO: Remove this?
const PIXELS_PER_SCROLL = 22; // must be a factor of g.getHeight() = 176

const CELL_MENU_HEIGHT = 10;

function getTextLines(text, width, firstLine, lastLine) {
    const lines = g.wrapString(text, width);

    return lines.slice(firstLine, lastLine);
}

var notificationGenericIcon = {
    width : 23, height : 23, bpp : 4,
    transparent : 1,
    buffer : require("heatshrink").decompress(atob("iIAlFJQ1KgEP//wBY0QBQILBgIWGBQP/CyMQCwgLFIQQYBEQpODFwwgDHQw3DAAQ6ECxa1GCwjBLF4R9HF4asJBRIwCcDUQA"))
};

// TODO: This should be shared with the status bar draw
// code used in menu software mod.
function drawStatusBar(bgColor, textColor, centerText, rightText) {
    const x = 0;
    const y = 0;
    const x2 = g.getWidth();
    const y2 = CELL_MENU_HEIGHT;
    g.setFont('6x8');
    g.setColor(bgColor);
    const centerTextMetrics = g.stringMetrics(centerText);
    const rightTextMetrics = g.stringMetrics(rightText);
    const textYPosition = ((y2 - y) / 2) - (centerTextMetrics.height / 2);
    g.fillRect(x, y, x2, y2 - 1);
    g.setColor(textColor);
    g.drawString(centerText, ((x2 - x) / 2) - (centerTextMetrics.width / 2), textYPosition);
    g.drawString(rightText, x2 - rightTextMetrics.width, textYPosition);
    g.drawLine(x, y - 1, x2, y - 1);
}

let notificationBodyLineHeight = g.setFont('6x8', 2).stringMetrics(' ').height;

function drawNotificationBody(y, title, body) {
    const startY = y;
    g.reset().setFontGothicA1();
    const titleLines = g.wrapString(title, Bangle.appRect.w - 30);
    const bodyLines = getTextLines(body, Bangle.appRect.w - 30);
    g.drawString(titleLines.join('\n'), NOTIFICATION_OVERLAY_PADDING_LEFT, y);
    y += g.stringMetrics(' ').height * titleLines.length;
    y += VERT_PADDING;
    g.setFont('6x8', 2);
    g.drawString(bodyLines.join('\n'), NOTIFICATION_OVERLAY_PADDING_LEFT, y);
    // Advance y to the end of the message
    y += bodyLines.length * g.stringMetrics(' ').height;
    return y - startY;
}

// Draws a notification header. Returns the y position for the end of the header.
function drawNotificationHeader(y, icon, title, bgColor, textColor) {
    g.setColor(bgColor);
    g.fillRect(0, y, g.getWidth(), y + HEADER_HEIGHT);
    // Draw the icon
    g.drawImage(icon, NOTIFICATION_OVERLAY_PADDING_LEFT, y + (HEADER_HEIGHT / 2) - (notificationGenericIcon.height / 2), {
        // Scale this so it is 23px x 23px
        scale: 23 / icon.width
    });
    // Draw the title
    g.reset().setFontGothicA1();
    g.setColor(textColor);
    g.drawString(title, NOTIFICATION_OVERLAY_PADDING_LEFT + icon.width + NOTIFICATION_TEXT_PADDING_LEFT, y + (HEADER_HEIGHT / 2) - (g.stringMetrics(' ').height / 2));
    return HEADER_HEIGHT;
}

function showMessageOverlay(messageNode, ondismissed, yOffset) {
    Bangle.setUI();
    g.reset().clearRect(0, 0, g.getWidth(), g.getHeight());
    const message = messageNode.message;
    let shouldAdvanceToNextMessage = false;
    // if (ondismissed === undefined) {
    //     ondismissed = () => {
    //         showNotifications(notifications);
    //     };
    // }
    if (yOffset === undefined) {
        yOffset = 0;
    }
    else if (yOffset >= 20) {
        // Navigating backwards.
        if (messageNode.previous !== undefined && messageNode.previous.message !== undefined) {
            setTimeout(() => showMessageOverlay(messageNode.previous, ondismissed, 0));
        }
        else {
            // Debounce needed to avoid going back into the message
            setTimeout(ondismissed, 250);
        }
    }

    if (!message) {
        return;
    }
    else if (message.id == 'music') {
        // Backfill "standard" message properties from the
        // music message.
        message.src = 'Music';
        message.title = message.track;
        message.body = message.artist;
    }

    g.reset().clearRect(Bangle.appRect);
    
    let y = yOffset;
    
    // Draw the header background
    const headerBackground = messageNode.color;
    const icon = messageNode.image;
    
    if (yOffset > 0) {
        const PULL_TO_EXIT_TEXT = "<";
        const pullToExitTextMetrics = g.stringMetrics(PULL_TO_EXIT_TEXT);
        g.drawString(PULL_TO_EXIT_TEXT, (Bangle.appRect.w / 2) - (pullToExitTextMetrics.width / 2), pullToExitTextMetrics.height);
    }
    y += drawNotificationHeader(y, icon, message.src ? message.src : 'Notification', headerBackground, '#000');
    
    y += VERT_PADDING;
    
    y += drawNotificationBody(y, message.title, message.body);

    // Is there a next message? Draw the header block for the next message at the bottom.
    if (messageNode.next !== undefined) {
        const nextMessage = messageNode.next.message;
        // Voodo math to figure out the positioning of the next
        // notification header
        let a = y - yOffset; // End of the message without the offset.
        if (a <= g.getHeight()) {
            // unscrolled message fits on the screen.
            a = g.getHeight();
        }
        else {
            // message that requires scrolling.
            a += notificationBodyLineHeight;
        }
    
        a += yOffset;
        y = a;

        let icon = messageNode.next.image;
        let headerColor = messageNode.next.color;
        y += drawNotificationHeader(y, icon, nextMessage.src ? nextMessage.src : 'Notification', headerColor, '#000');
    
        if (y <= g.getHeight() + CELL_MENU_HEIGHT) {
            shouldAdvanceToNextMessage = true;
        }
    }
    
    // Draw status bar at the end so it has the highest z-index
    const notificationCount = require('rbl.libs.js').getNotificationCount(messageNode);
    drawStatusBar(headerBackground, '#000', require('rbl.libs.js').getCurrentTimeString(), notificationCount.current + '/' + notificationCount.total);
    
    if (message.id == 'music') {
        // The poll based reload task is unstable.
        // TODO: Subscribe to incoming GB music events?
        // if (musicReloadTask) {
        //     clearInterval(musicReloadTask);
        // }
        // musicReloadTask = setInterval(() => {
        //     loadMessages();
        //     showMessageOverlay('music');
        // }, 1000);
        Bangle.setUI("leftright", dir => {
            // Tap
            if (dir === undefined) {
                // clearTimeout(musicReloadTask);
                ondismissed();
            }
            else {
                // Bangle.musicControl('next');
                // // Redraw the overlay in one second hopefully with new music
                // // state details.
                // if (musicReloadTask) {
                //     clearTimeout(musicReloadTask);
                // }
                // musicReloadTask = setTimeout(() => {
                //     loadMessages();
                //     showMessageOverlay('music');
                // }, 5000);
            }
        });
    }
    else {
        // pressing button shows popover
        const popoverOnBack = ondismissed;
        const popoverOnDismiss = () => {
            Bangle.messageResponse(message, false);
            // setTimeout(() => {
            //     loadNotifications();
            //     showNotifications(notifications);
            // }, 500);
            ondismissed();
        };
        const popoverOnCancel = () => showMessageOverlay(messageNode, ondismissed, yOffset);
        const popoverOptions = [
            {
                text: "Back",
                onselect: popoverOnBack
            },
            {
                text: "Dismiss",
                onselect: popoverOnDismiss
            },
            {
                text: "---"
            },
            {
                text: "Cancel",
                onselect: popoverOnCancel
            }
        ];
        const popover = _ => rblui.showPopover(popoverOptions);
        setWatch(popover, BTN1, { edge: "falling" });
        Bangle.setUI("updown", dir => {
            // Tap
            if (dir === undefined) {
                popover();
            }
            else {
                if (!shouldAdvanceToNextMessage) {
                    // Redraw the message overlay with a scroll offset.
                    showMessageOverlay(messageNode, ondismissed, yOffset + dir * notificationBodyLineHeight);
                }
                else {
                    showMessageOverlay(messageNode.next, ondismissed, 0);
                }
            }
        });
    }
}

exports.showMessageOverlay = showMessageOverlay;