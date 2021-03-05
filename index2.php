<?php
if(isset($_POST['submit'])){
$to = $_POST['email'];
$from = "dima.falaut@mail.ru";
$first_name = "Super window";
$subject = "Рассчёт стоимости новых окон";
$message = "Стоимось новых окон по заданным вами параметрам составляет " . $_POST['kolvo'] . " рублей. Позвоните по нашему номеру телефона (8-800-555-35-35), либо напишите на нашу электронную почту ($from), чтобы сделать заказ.";
$headers = "From:" . $from;
$mail_to_myemail = "Здравствуйте! 
Это ответ с сайта $first_name.
$message ";
header("Content-Type: text/html; charset=utf-8");
mail($to,$subject,$mail_to_myemail,$headers);
echo "Сообщение отправлено, спасибо за обращение.";
echo "<br /><br /><a href='index.html'>Вернуться назад.</a>";
}
?>
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="index.html");}
window.setTimeout("changeurl();",3000);
</script>