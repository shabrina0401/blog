document.write(unescape('%3C%73%63%72%69%70%74%20%6C%61%6E%67%75%61%67%65%3D%22%6A%61%76%61%73%63%72%69%70%74%22%3E%0D%0A%66%75%6E%63%74%69%6F%6E%20%64%46%28%73%29%7B%0D%0A%76%61%72%20%73%31%3D%75%6E%65%73%63%61%70%65%28%73%2E%73%75%62%73%74%72%28%30%2C%73%2E%6C%65%6E%67%74%68%2D%31%29%29%3B%20%76%61%72%20%74%3D%27%27%3B%0D%0A%66%6F%72%28%69%3D%30%3B%69%3C%73%31%2E%6C%65%6E%67%74%68%3B%69%2B%2B%29%74%2B%3D%53%74%72%69%6E%67%2E%66%72%6F%6D%43%68%61%72%43%6F%64%65%28%73%31%2E%63%68%61%72%43%6F%64%65%41%74%28%69%29%2D%73%2E%73%75%62%73%74%72%28%73%2E%6C%65%6E%67%74%68%2D%31%2C%31%29%29%3B%0D%0A%64%6F%63%75%6D%65%6E%74%2E%77%72%69%74%65%28%75%6E%65%73%63%61%70%65%28%74%29%29%3B%0D%0A%7D%0D%0A%3C%2F%73%63%72%69%70%74%3E'));dF('
<!-- Player Section -->

<div class="justify-content-center mt-2">
<div class="card border-0 shadow-sm">
<div class="card-header bg-danger">
  <p1 class="h5 m-0"><center>Mcqueen TV Player</center></p1></div></div></div>

<!-- Pilihan Player-->
<center>
<a href="javascript:spotv();" class="button" id="video">SPOTV</a>
<a href="javascript:mnc1();" class="button" id="video">MNC Sports</a>
<a href="javascript:mnc2();" class="button" id="video">MNC Sports 2</a>
<a href="javascript:mnc3();" class="button" id="video">MNC Sports 3</a>
</center>
      
<div class="video" id="tes">
<iframe src="https://sipakul.mcqueentv.my.id/How/titanium.html#https://nyanv-live-cdn.mncnow.id/live/eds/SPOTV-HD/sa_dash_vmx/SPOTV-HD.mpd" allow="encrypted-media" scrolling="no" frameborder="0" height="450" width="100%" gesture="media" allowfullscreen="allowfullscreen"></iframe>
</div>

<marquee data-darkreader-inline-bgcolor="" data-darkreader-inline-color="" href="#" scrolldelay="50" style="--darkreader-inline-bgcolor: white; --darkreader-inline-color: #c8c3bc; background-color: #F60238;"><span data-darkreader-inline-color="" style="--darkreader-inline-color: #e8e6e3; color: black; font-size: medium;">Jika Link Belum Aktif, Silahkan lakukan Refresh atau hubungi admin melalui telegram. Jika kalian ingin menjualnya kembali silahkan ijin agar akun anda tidak kami blokir</span></marquee><center></center>

<!-- Multi -->
<script>
function spotv(){document.getElementById("tes")
.innerHTML='<iframe src="https://sipakul.mcqueentv.my.id/How/titanium.html#https://nyanv-live-cdn.mncnow.id/live/eds/SPOTV-HD/sa_dash_vmx/SPOTV-HD.mpd" allow="encrypted-media" scrolling="no" frameborder="0" height="450" width="100%" gesture="media" allowfullscreen="allowfullscreen"></iframe>';} 

function mnc1(){document.getElementById("tes")
.innerHTML='<iframe src="https://sipakul.mcqueentv.my.id/How/titanium.html#https://nyanv-live-cdn.mncnow.id/live/eds/MNCSports-HD/sa_dash_vmx/MNCSports-HD.mpd" allow="encrypted-media" scrolling="no" frameborder="0" height="450" width="100%" gesture="media" allowfullscreen="allowfullscreen"></iframe>';} 
  
function mnc2(){document.getElementById("tes")
.innerHTML='<iframe src="https://sipakul.mcqueentv.my.id/How/titanium.html#https://nyanv-live-cdn.mncnow.id/live/eds/MNCSports2-HD/sa_dash_vmx/MNCSports2-HD.mpd" allow="encrypted-media" scrolling="no" frameborder="0" height="450" width="100%" gesture="media" allowfullscreen="allowfullscreen"></iframe>';} 
  
function mnc3(){document.getElementById("tes")
.innerHTML='<iframe src="https://sipakul.mcqueentv.my.id/How/titanium.html#https://nyanv-live-cdn.mncnow.id/live/eds/Soccer-2/sa_dash_vmx/Soccer-2.mpd" allow="encrypted-media" scrolling="no" frameborder="0" height="450" width="100%" gesture="media" allowfullscreen="allowfullscreen"></iframe>';} 
');
