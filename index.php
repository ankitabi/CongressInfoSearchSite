<?php 
$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
   $request = $_SERVER['QUERY_STRING'];
   $pos = strpos($request,"&");
   $request = substr($request,$pos);
   $serverLink = "http://congress.api.sunlightfoundation.com/".$_GET['opr']."?".$request;
   header('Access-Control-Allow-Origin: *');
   header('Content-Type: application/json');
   $contents = file_get_contents($serverLink);
   echo $contents;
}
?>