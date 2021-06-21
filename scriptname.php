<?php

$url = 'https://kfatafat.com/matka_api/public/api/dev/createAutoResult';
	$data = array();
 
	// use key 'http' even if you send the request to https://...
	$options = array('http' => array(
		'method'  => 'POST',
		'content' => http_build_query($data)
	));
	$context  = stream_context_create($options);
	$result = file_get_contents($url, false, $context);

?> 