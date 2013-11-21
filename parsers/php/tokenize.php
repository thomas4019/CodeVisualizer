<?php
header('Content-Type: application/json');

$source = file_get_contents('devel.module');
$tokens = token_get_all($source);
foreach ($tokens as $key => &$value) {
	if (is_array($value)) {
		$value[0] = token_name($value[0]);
	}
}
//var_dump($tokens);
print json_encode($tokens);