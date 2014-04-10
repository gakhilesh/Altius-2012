<?php
include("connect.php");
$cat=$_GET["cat"];
$cat = get_magic_quotes_gpc() ? stripslashes($cat) : $cat;
$cat = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($cat) : mysql_escape_string($cat);

//$que=mysql_query("select * from events where cat_name='$cat');
$sql="select * from events where cat_id='".$cat."' order by eve_id";
$que=mysql_query($sql);
while($res=mysql_fetch_assoc($que))
{
	$name = $res['eve_id'];
	$name = stripslashes(str_replace("_", " ",$name));
	echo "<br />";
	echo "<div class='shadow' id='".$res['eve_id']."' onClick=event_details('".$res['eve_id']."')>$name</div>";
}
?>