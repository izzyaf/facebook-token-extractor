function extractToken() {
    const elements = document.getElementsByName('fb_dtsg');

    if (elements.length > 0) {
        return elements[0].value
    }

    return ''
}

chrome.runtime.onMessage.addListener(
    function (msg, _, sendResponse) {
        if (msg.action === "BEGIN_EXTRACTION") {
            sendResponse({
                token: extractToken()
            });
        }
    });
