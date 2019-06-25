<!--
	Bir Uğur KILCI ürünüdür.
	
	
	    ####
	
	# # #### # # ###     # # # #   ### #
	# # #    # # # #     ##  # #   #   #
	# # #  # # # ##      # # # #   #   #
	### #### ### # #     # # # ### ### #
	
	www.ugurklc.blogspot.com
	www.youtube.com/dusunenadamugur
	www.facebook.com/dusunuveringari
	www.twitter.com/ugur2nd
	www.linkedin.com/ugur2nd
-->
<!DOCTYPE PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>honeycomb | U&#287;ur KILCI</title>
		<!-- Css -->
		<link href="css/genel.css" rel="stylesheet"/>
		<!-- /Css -->
		<link rel="icon" type="image/ico" href="resimler/i.ico" />
		<META charset="UTF-8"/>		
		<meta http-equiv="content-language" content="tr"/>
		<META NAME="description" CONTENT="Video adresini yaz ve yolla! Çıkan kodu sitene yapıştır! Sitene her girildiğinde video izlensin!"/>
		<META NAME="keywords" CONTENT="honeycomb, youtube sessiz video kodu, youtube otomatik replay, youtube video izle, youtube video izletme, youtube otomatik oynatma kodu, youtube sessiz video çalma"/>
		<META NAME="author" CONTENT="honeycomb.pe.hu"/>
		<META name="Abstract" content="Video adresini yaz ve yolla! Çıkan kodu sitene yapıştır! Sitene her girildiğinde video izlensin!"/>
		<META name="Copyright" content="Telif Hakkı 2016 Uğur KILCI"/>
		<meta name="robots" content="index,follow"/>
		<meta name="googlebot" content="noindex,follow"/>
		<meta name="MobileOptimized" content="450">
	</head>
<body>

	<!-- Sayfayı Ortaladık -->
	<div align="center" class="orta">
		<!-- Header -->
		<?php include("ust.php")?>
		<!-- /Header -->
		
		<!-- Kodun çıktığı yer burası -->
		<?php 
	
			$adres = $_POST ["adres"];
			if ($_POST){
			
				echo "<br /><textarea style='margin: 0px; width: 400px; height: 134px;'><iframe style='overflow-x: hidden; overflow-y: hidden; width: 1px; height: 1px; border: 0px;' src='http://kilci.xyz/honeycomb/u?u=$adres'  frameborder='0' allowfullscreen></iframe></textarea>
					<br /><a href='index'><button class='btn' style='width:400px;'>Şimdi yeni bir tane kod oluştur!</button></a>
					<br /><br /><strong>Şimdi Ne Yapacağım?</strong><br />
				<p>Yukarıdaki kodu web sitenizin en altına yapıştırın.<br />(Not: Wordpress.com da bu kod çalışmıyor)</p><br />
					";
			}else{
				echo '<!-- Form -->
				<form action="yolla" method="POST">
				https://www.youtube.com/watch?v=<input type="text" name="adres" placeholder="416Yy8MMFK8" class="text" /> 
					<input type="submit" value="YOLLA!" class="btn"/>
				</form>
				<!-- /Form -->';
			}
	
		?>
		<!-- /Kodun çıktığı yer burası -->

	</div>
	<!-- /Sayfayı Ortaladık -->
	
		<!-- Footer -->
		<?php include("alt.php")?>
		<!-- /Footer -->
	</div>
</body>
</html>