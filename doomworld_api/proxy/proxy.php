<?php
include "includes/lib.php";

$_p = new proxy();
header('Content-Type: application/json');
/**
 * expose endpoints
 * */
echo $_p->doRequest($_GET);
