<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE HTML>
<!--
	Editorial by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>

<head>
<title>Camp Search Page</title>
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1.0" />
<%@ include file="../common/head.jsp"%>
 <link rel="stylesheet" href="/resources/login/css/search_id.css" />  

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


</head>

<body class="is-preload">

	<!-- Wrapper -->
	<div id="wrapper">

		<!-- Main -->
		<div id="main">
			<div class="inner">
				<!-- Header -->
				<header id="header">
					<a><strong>Campfire</strong> ID·PW 찾기</a>
				</header>
			
				
			
<div style="text-align: center; margin-top: 20px;">
    <h2 style="font-size: 24px;">
     비밀번호 찾기 검색결과
    </h2>
</div>

<div style="text-align: center;">
    <center>
        <div>
            <h5>
                ${ pw }
            </h5>
            <p>
              <button type="button" onclick="history.go(-3);">Login</button>
                <button type="button" onclick="history.go(-1);" >Cancel</button>
            </p>
        </div>
    </center>
</div>
			
		</div>
	</div>
    

		
			</div>


	
		<!-- Scripts -->
  
	
</body>

</html>