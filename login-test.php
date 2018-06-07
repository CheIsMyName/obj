<?php
header('content-type:text/html;charset=utf-8');
	$uname = $_POST['uname'];
	$upwd = $_POST['upwd'];
	$uphone = $_POST['uphone'];
	$uemail = $_POST['uemail'];
//	echo $uname,$upwd;
	$db = mysql_connect("localhost","root","root");
	mysql_select_db('db1804',$db);
	mysql_query("set names utf-8");
	
	$sql = "SELECT * FROM `user` where uname='$uname'";
	$sql1 = "SELECT * FROM `user` where uphone='$uphone'";
	$sql2 = "SELECT * FROM `user` where uemail='$uemail'";
	//5.执行sql语句
	$set = mysql_query($sql); //返回的是数据集
	$set = mysql_query($sql1); //返回的是数据集
	$set = mysql_query($sql2); //返回的是数据集
    //echo $set;
	$arr = mysql_fetch_array($set);
	//	print_r($arr);
	if($arr['uname'] == $uname || $arr['uphone'] == $uphone || $arr['uemail'] == $uemail){
		if($arr['upwd'] == $upwd){
			echo "<script>alert('登录成功');location.href='index.html';</script>";
		}else{
			echo "<script>alert('密码错误');location.href='login.html';</script>";
		}
	}else{
		echo "<script>alert('用户名不存在');location.href='logi-test.html';</script>";
	}

?>