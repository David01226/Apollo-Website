document.addEventListener("DOMContentLoaded", function () {
    function loadGoogleAnalytics() {
        let script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-ZCZFN7DK0Y"; // Replace with your GA ID
        document.head.appendChild(script);
        
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-ZCZFN7DK0Y'); // Replace with your GA ID

        console.log("Google Analytics script added successfully.");
    }

    function loadMicrosoftClarity() {
          try {
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);
                  t.async=1;
                  t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];
                  y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "mpodjlp0eq"); // Replace with your Clarity ID
              console.log("Microsoft Clarity script added successfully.");
          } catch (error) {
              console.error("Error loading Microsoft Clarity:", error);
          }
        }

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function getCookie(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : null;
    }

    function injectCookieBanner() {
      // Check if the cookie consent banner already exists
      if (!document.getElementById("cookieBanner")) {
        let banner = document.createElement("div");
        banner.id = "cookieBanner";
        banner.innerHTML = `
            We use cookies to provide you with a great experience and to help our website run effectively. Full details can be found in our Privacy Policy.
            <div class="cookieBanner__btn-wrap">
              <button id="acceptCookies" class="cookie-btn btn btn-dark">Accept</button>
              <button id="declineCookies" class="cookie-btn btn btn-light decline">Decline</button>
            </div>
        `;
        setTimeout(() => {
            document.body.appendChild(banner);
            document.getElementById("acceptCookies").addEventListener("click", function () {
                setCookie("cookiesAccepted", "true", 365);
                loadGoogleAnalytics();
                loadMicrosoftClarity();
                document.getElementById("cookieBanner").remove();
            });
    
            document.getElementById("declineCookies").addEventListener("click", function () {
                setCookie("cookiesAccepted", "false", 365);
                document.getElementById("cookieBanner").remove();
            });
          }, "2000");
        
      }
    }

    if (getCookie("cookiesAccepted") === "true") {
        loadGoogleAnalytics();
        loadMicrosoftClarity();
    } else if (getCookie("cookiesAccepted") === null) {
        injectCookieBanner();
    }
});