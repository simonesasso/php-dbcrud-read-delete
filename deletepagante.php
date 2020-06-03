<?php



$id = $_POST["id"];


$server = 'localhost';
$username = 'root';
$password = 'root';
$dbName = 'hoteldb2';

$conn = new mysqli($server, $username, $password, $dbName);

if ($conn -> connect_errno) {
  echo $conn -> connect_errno;
  return;
}

if ($id) {
  $sql = "

     DELETE FROM paganti WHERE id=" . $id ;



  $conn -> query($sql);
}



$conn -> close();


?>
