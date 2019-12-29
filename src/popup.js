document.getElementById('extract').addEventListener('click', function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(
            tabs[0].id,
            {action: "BEGIN_EXTRACTION"},
            function (response) {
                const textarea = document.getElementById("result");

                textarea.value = JSON.stringify({
                    token: response.token,
                    cookie: response.cookie
                }, null, 2);

                textarea.select();
                document.execCommand("copy");

                const notifier = document.getElementById('notifier');
                notifier.textContent = 'Copied to clipboard!'
            });
    });
});


