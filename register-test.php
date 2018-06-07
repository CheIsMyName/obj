<?php
	header('content-type:text/html;charset=utf-8');
	$uname = $_POST['uname'];
	$upwd = $_POST['upwd'];
	$uphone = $_POST['uphone'];
	$uemail = $_POST['uemail'];
//	echo $uname,$upwd,$uphone,$uemail;
	$db = mysql_connect("localhost","root","root");
	mysql_select_db('db1804',$db);
	mysql_query("set names utf-8");
	
	$sql = "INSERT INTO `user`( `uname`, `upwd`, `uphone`, `uemail`) VALUES ('$uname','$upwd','$uphone','$uemail')";
//	$sql ="INSERT INTO `user`( `uname`, `upwd`,'uphone','uemail') VALUES ('$uname','$upwd','$uphone','$uemail')";
	$row = mysql_query($sql);
	echo $row;
	//判断是否注册成功
	if($row){
		echo "<script>alert('注册成功');location.href='login.html';</script>";
	}else{
		echo "<script>alert('注册失败');location.href='register.html';</script>";
	}

	
	
	
	
	
	
	
	
	
	
	




?>