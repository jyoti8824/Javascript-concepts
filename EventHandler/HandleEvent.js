let keyPressCount = 0;

function showMessage() {
    document.getElementById( 'message' ).innerText = 'Button clicked!';
}

function showMouseOverMessage() {
    document.getElementById( 'message' ).innerText = 'Mouse over button!';
}

function showMouseOutMessage() {
    document.getElementById( 'message' ).innerText = 'Mouse out of button!';
}

function showDoubleClickMessage() {
    document.getElementById( 'message' ).innerText = 'Button double-clicked!';
}

function showKeyPressMessage( event ) {
    keyPressCount++;
    document.getElementById( 'message' ).innerText = `Key pressed: ${event.key} | Total key presses: ${keyPressCount}`;
}

function showKeyDownMessage( event ) {
    document.getElementById( 'message' ).innerText = `Key down: ${event.key}`;
}

function showChangeMessage() {
    document.getElementById( 'message' ).innerText = 'Input changed!';
}

function showLoadMessage() {
    document.getElementById( 'message' ).innerText = 'Page loaded!';
}

window.onload = showLoadMessage;