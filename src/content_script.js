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

const port = chrome.runtime.connect({name: 'EXTRACTOR'});
port.onMessage.addListener(function (msg) {
    console.log('message', msg)

    if (msg.action === "BEGIN_EXTRACTION")
        port.postMessage({
            action: 'END_EXTRACTION',
            cookie: extractCookie(),
            token: extractToken()
        })
})
