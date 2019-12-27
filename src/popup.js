document.getElementById('extract').addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {action: "BEGIN_EXTRACTION"},
            function (response) {
                document.getElementById("result").value = JSON.stringify({
                    token: response.token,
                    cookie: response.cookie
                }, null, 2)
            });
    });
});


