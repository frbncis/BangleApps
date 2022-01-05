function showPopover(popoverOptions, selectedIndex) {
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
        
            showPopover(popoverOptions, newSelectedIndex);
        }
    });
}

exports.showPopover = showPopover;