function extractToken() {
    const elements = document.getElementsByName('fb_dtsg');

    if (elements.length > 0) {
        return elements[0].value
    }

    return ''
}

function extractPageId() {
    const metas = document.getElementsByTagName('meta');

    for (const meta of metas) {
        if (meta.getAttribute('property') === 'al:android:url') {
            return new URL(meta.getAttribute('content')).pathname.split('/').pop()
        }

        if (meta.getAttribute('property') === 'al:ios:url') {
            return new URL(meta.getAttribute('content')).searchParams.get('id')
        }
    }

    return ''
}

chrome.runtime.onMessage.addListener(
    function (msg, _, sendResponse) {
        if (msg.action === "BEGIN_EXTRACTION") {
            sendResponse({
                pageId: extractPageId(),
                token: extractToken(),
            });
        }
    });
