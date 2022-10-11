<?php
// create curl resource 
$ch = curl_init();

 // set url 
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_USERAGENT, "");
curl_setopt($ch, CURLOPT_URL, "http://tvn.x10.mx/1/master.m3u8");
curl_setopt($ch, CURLOPT_REFERER, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);


$result = curl_exec($ch);
header('Content-Type: audio/x-mpegurl');
curl_close($ch);

echo $result;
