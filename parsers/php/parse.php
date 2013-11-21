<?php
require 'krumo/class.krumo.php';
require 'PHP-Parser/lib/bootstrap.php';

ini_set('xdebug.max_nesting_level', 2000);

$out = toFolderArray('/home/thomas/cakephp');

header('Content-Type: application/json');
print json_encode($out);

function toFolderArray($path) {
	$di = new RecursiveDirectoryIterator($path, FilesystemIterator::SKIP_DOTS);
	$out = array();
	$skip = strlen($path) + 1;
	foreach (new RecursiveIteratorIterator($di) as $filename => $file) {
	    if ($file->isFile() && strpos($filename, '.git') === FALSE) {
	    	$subpath = substr($file->getPath(), $skip);
	    	$out_f = toFileArray($filename, $subpath);
	    	$out = array_merge($out, $out_f);
	    }
	}

	return $out;
}
 
function toFileArray($path, $group) {
	$parts = explode('/', $path);
	$filename = array_pop($parts);
	$code = file_get_contents($path);

	if (strstr($code, '<?php') === FALSE) {
		return array(
			$filename => array(
				'group' => $group,
				'name' => $filename,
				'type' => 'data',
			)
		);
	}

	$parser = new PHPParser_Parser(new PHPParser_Lexer);

	try {
	    $stmts = $parser->parse($code);
	    //var_dump($stmts);

	    $out = getSimpleTree($stmts, $filename);
		return $out;
	} catch (PHPParser_Error $e) {
	    echo 'Parse Error: ', $e->getMessage();
	}

	return array();
}

function getSimpleTree($stmts, $filename) {
	$c = array();
	foreach ($stmts as $key => $value) {
		if ($value instanceof PHPParser_Node_Stmt_Interface || $value instanceof PHPParser_Node_Stmt_Class) {
			foreach ($value->stmts as $key2 => $value2) {
				$class = $value->name;
				if ($value2 instanceof PHPParser_Node_Stmt_Function || $value2 instanceof PHPParser_Node_Stmt_ClassMethod) {
					$c[$class]['functions'][] = toFuncArray($value2);
					$c[$class]['name'] = $class;
					
					$c[$class]['type'] = $value instanceof PHPParser_Node_Stmt_Interface ? 'interface' : 'class';
				}
			}
		}
		if ($value instanceof PHPParser_Node_Stmt_Function || $value instanceof PHPParser_Node_Stmt_ClassMethod) {
			$c[$filename]['functions'][] = toFuncArray($value);
			$c[$filename]['name'] = $filename;
			$c[$filename]['type'] = 'file';
		}
	}

	return $c;
}

function toFuncArray($value) {
	$usage = array();
	getUsage($value, $usage);
	return array(
		'name' => $value->name,
		'args' => toArray($value->params),
		'usage' => $usage,
	);
}

function toArray($params) {
	$c = array();

	foreach ($params as $key => $value) {
		$c[] = array(
			'name' => $value->name,
			'type' => $value->type,
		);
	}

	return $c;
}

/* Accepts a Node and returns usage of variables and functions as an array.
   
   calls (array) => <function name> => line numbers (array)

*/
function getUsage($n, &$out) {
	if ($n instanceof PHPParser_Node_Expr_FuncCall) {
		$funcName = $n->name;
		$func = 'unknown';
		if ($funcName instanceof PHPParser_Node_name) {
			$func = $funcName->toString();
		} else {
			$func = $funcName;
		}
		$line = $n->getAttribute('startLine');
		$out[$func][] = $line;
	}

	if ($n instanceof PHPParser_NodeAbstract) {
		foreach ($n->getIterator() as $key => $value) {
			if(is_array($value)) {
				foreach ($value as $stmt) {
					getUsage($stmt, $out);
				}
			} else {
				getUsage($value, $out);
			}
		}
	}
}