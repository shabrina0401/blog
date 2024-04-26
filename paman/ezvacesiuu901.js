        function getParameterByName(name) {
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(window.location.href);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        var ConfiguracionCanales = {
            
            "KORIDN1": {
                url: "https://ssc-extra2-ak.akamaized.net/out/v1/8b70de2b70d447ba8a7450ba90926a2d/index.mpd",
                k1: "4d89249bd4ca4ebc9e70443265f9507d",
                k2: "cf074ffd2646c9c2f8513b47fa57bc30"
            },
          "KORIDN2": {
                url: "https://cors-proxy.elfsight.com/https://edge1.laotv.la/live/TrueSport2/index.m3u8",
            },
          "KORIDN3": {
                url: "https://node3.olelive.com:6443/live/CCTV5HD/hls.m3u8",
            },
          "DEMIT1": {
                url: "https://tr.live.cdn.cgates.lt/live/dash/561002/index.mpd",
                k1: "8ab2332442854e62b0018eec3ee58484",
                k2: "37fdee8b6eef5c96001e8c6fc47bfc08"
            },
          "DEMIT2": {
                url: "https://webtvstream.bhtelecom.ba/hls6/arena1.mpd",
                k1: "c18b6aa739be4c0b774605fcfb5d6b68",
                k2: "e41c3a6f7532b2e3a828d9580124c89d"
            },
          "DEMIT3": {
                url: "https://bkm.beetv.kz/btv/live/hls/000006998.m3u8",
            },
        "DEMIT4": {
                url: "https://cors-proxy.elfsight.com/https://pull.niur.live/live/stream-9912093_lhd.m3u8?txSecret=1cf991b604fb94a68fc543c9301786de&txTime=662c483f
",
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
