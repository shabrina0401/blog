function playM3u8(url, license){                        
 var player = new Clappr.Player({                 
                    source: url,
                    parentId: '#player',
                    preload: 'auto',
                    autoPlay: 'false',
                    width: '100%',
                    height: '100%',
                    fullscreenEnabled:'true',
                    hideMediaControl: 'false',
                    watermark: 'https://raw.githubusercontent.com/shabrina0401/pict/main/Mcqueen.png',
                    position: 'bottom-right',
                    plugins: [LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback],
           
                    chromecast: {
                      appId: '9DFB77C0',
                      media: {
                        type: ChromecastPlugin.Movie,
                        title: 'Player HLS - DASH',
                      },
                  },

                    shakaConfiguration: {
                    preferredAudioLanguage: 'en-US',
                    drm: {
                    servers: {
                    'com.widevine.alpha': 'https://mrpw.ptmnc01.verspective.net/?deviceId=ZTFiY2FmYjMtZDY5NS0zMDE0LTg2MDYtY2EyNDhiYmQ5YTJm'
                             }
                         },
                    streaming: {
                      rebufferingGoal: 15
                    }
                  },
                  shakaOnBeforeLoad: function(shaka_player) {
                    // shaka_player.getNetworkingEngine().registerRequestFilter() ...
                  },

                });

  document.title = "Watching: " +url;
    
}

playM3u8(window.location.href.split("#")[1], window.location.href.split("=")[1])
