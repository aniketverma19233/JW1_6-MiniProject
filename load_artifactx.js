const loadScript = (FILE_URL, async = true, type = "text/javascript") => {
    return new Promise((resolve, reject) => {
        try {
            const scriptEle = document.createElement("script");
            scriptEle.type = type;
            scriptEle.src =FILE_URL;

            scriptEle.addEventListener("load", (ev) => {
                resolve({ status: true });
            });

            scriptEle.addEventListener("error", (ev) => {
                reject({
                    status: false,
                    message: `Failed to load the script ＄{FILE_URL}`
                });
            });

            document.body.appendChild(scriptEle);
        } catch (error) {
            reject(error);
        }
    });
};

loadScript("https://cdn.jsdelivr.net/gh/aniketverma19233/JW1_6-MiniProject@latest/tcx.js").then( data  => {
        console.log("Script loaded successfully", data);
    })
    .catch( err => {
        console.error(err);
    });
var DOMContentLoaded_event = document.createEvent("Event");
	    DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true);
	    window.document.dispatchEvent(DOMContentLoaded_event);
