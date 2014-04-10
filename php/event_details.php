<?php
include("connect.php");
$event=$_GET["event"];
$event = get_magic_quotes_gpc() ? stripslashes($event) : $event;
$event = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($event) : mysql_escape_string($event);
$sql="select * from events where eve_id='".$event."'";
$que=mysql_query($sql);
while($res=mysql_fetch_assoc($que))
{
	$name = $res['eve_id'];
    $name= str_replace("_"," ",$name);
	$desc = stripslashes(nl2br($res['eve_desc']));
	$rules = stripslashes(nl2br($res['eve_rules']));	
	$other = nl2br($res['other_details']);
	$details = array('name' => $name, 'desc' => $desc, 'rules' => $rules, 'other' => $other);
	$json_details = json_encode($details);
	echo $json_details;
}
?>