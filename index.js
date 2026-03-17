document.getElementById("launchBtn").addEventListener("click", function () {
    var url = prompt("Paste the link you want to be embedded into an about:blank page.", "https://example.com");

    if (url) {
        // Ensure the URL has a protocol
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        // Open the new window
        var win = window.open();
        if (!win) {
            alert("Pop-up blocked! Please allow pop-ups for this site.");
            return;
        }

        // Set up the blank page document
        win.document.body.style.margin = "0";
        win.document.body.style.height = "100vh";
        win.document.body.style.overflow = "hidden";

        // Create and style the iframe
        var iframe = win.document.createElement("iframe");
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.margin = "0";
        iframe.referrerPolicy = "no-referrer";
        iframe.allow = "fullscreen";
        iframe.src = url;

        // Append iframe to the new window
        win.document.body.appendChild(iframe);

        // Inject the external script
        var script = win.document.createElement("script");
        script.src = "https://3kh0.github.io/js/main.js";
        win.document.body.appendChild(script);
    }
});
