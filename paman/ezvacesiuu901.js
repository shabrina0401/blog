        function getParameterByName(name) {
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(window.location.href);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        var ConfiguracionCanales = {
            
            "TIMNAZ1": {
                url: "https://ssc-extra1-ak.akamaized.net/out/v1/647c58693f1d46af92bd7e69f17912cb/index.mpd",
                k1: "ecbc9e6fe6b145efb6658fb5cf7427f8",
                k2: "03c17e28911f71221acbc0b11f900401"
            },
          "TIMNAZ2": {
                url: "https://cors-proxy.elfsight.com/https://edge1.laotv.la/live/TrueSport6/index.m3u8",
            },
          "TIMNAZ3": {
                url: "https://cors-proxy.elfsight.com/https://pull.niues.live/live/stream-9912043_lsd.m3u8?auth_key=1713715510-0-0-30dc47ef7c434a8c029dd1a8132f31d",
            },
          "HALA1": {
                url: "https://live-ctv.video.9c9media.com/f/TSN/TSN3/manifest.mpd",
                k1: "c0f378ad54e14a9c85a3d8c986d2a51f",
                k2: "5e1d040743ff78715e464ffb905e68a9"
            },
          "HALA2": {
                url: "https://webtvstream.bhtelecom.ba/hls6/as_premium3.mpd",
                k1: "c18b6aa739be4c0b774605fcfb5d6b68",
                k2: "e41c3a6f7532b2e3a828d9580124c89d"
            },
          "HALA3": {
                url: "https://pull.jsjwhzx.xyz/live/stream-551866_lhd.m3u8?auth_key=1713728938-0-0-9ea9e3790a1bd8e2b9b83d4e827bf18a",
            },

        };

var id = getParameterByName('id');
var config = ConfiguracionCanales[id];

if (config) {
    var sources = [];

    if (config.url.includes('.m3u8')) {
        sources.push({
            file: config.url
        });
    }
    
    if (config.url.includes('.mpd') && config.k1 && config.k2) {
        sources.push({
            file: config.url,
            drm: {"clearkey": {"keyId": config.k1, "key": config.k2}}
        });
    }

 //JWWWWWW
    jwplayer("player").setup({
        playlist: [{
            sources: sources
        }],
        autostart: false,
        width: "100vw", 
        height: "calc(var(--vh, 1vh) * 100)", 
        aspectratio: "16:9",
        cast: {}, 
                sharing: {}
        });
        }
