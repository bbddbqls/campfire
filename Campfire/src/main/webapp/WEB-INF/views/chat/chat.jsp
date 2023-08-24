<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<div class="chatIconChatDivider">
    <img id="chatIcon" src="${pageContext.request.contextPath}/resources/images/tw/keyboard_arrow_up.png" onclick="toggleChat(this)"></img>
    <div id="chat">
        <div class="container" id="chatRoomListContainer">
            <c:forEach var="i" begin="1" end="20">
                <div class="chatRoomDoor">
                    <div class="rowDivider">
                        <div class="firstRow">
                            <div class="personTitleUnreadCountDivider">
                                <div class="person">
                                    <div class="tag">
                                        <c:choose>
                                            <c:when test="${i % 2 == 1}">
                                                <h3 class="buyer">구매자</h3>
                                            </c:when>
                                            <c:otherwise>
                                                <h3 class="seller">판매자</h3>
                                            </c:otherwise>
                                        </c:choose>
                                    </div>
                                    <div class="name">
                                        <h3>모래표범</h3>
                                    </div>
                                </div>
                                <div class="title">
                                    <h3>${i} 깨끗한 텐트 팝니다</h3>
                                </div>
                                <div class="unreadCount">
                                    <h3>2123</h3>
                                </div>
                            </div>
                        </div>
                        <div class="secondRow">
                            <div class="messageTimeDivider">
                                <div class="message">
                                    <p>어느 회사의 제품인가요?</p>
                                </div>
                                <div class="time">
                                    <p>21:07</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </c:forEach>

        </div>
        <div class="container" id="chatRoomContainer">
            <div class="informationMessageListMessagingDivider">
                <div class="container" id="informationContainer">
                    <div class="buttonInChat hideChatButton">
                        <img src="${pageContext.request.contextPath}/resources/images/tw/arrow_back_ios.png" alt="">
                    </div>
                    <div class="buttonInChat leaveChatButton">
                        <img src="${pageContext.request.contextPath}/resources/images/tw/close.png" alt="">
                    </div>
                    <div class="chatTitle">
                        <h3>깨끗한 텐트 팝니다</h3>
                    </div>
                    <div class="buttonInChat productDetailRedirectButton">
                        <h4>
                            상품 페이지
                        </h4>
                    </div>
                </div>
                <div class="container" id="messageListContainer">
                    <c:forEach var="i" begin="1" end="20">
                        <!-- message, myMessage or otherPersonMessage -->
                        <c:choose>
                            <c:when test="${i % 2 == 1}">
                                <div class="message myMessage">
                            </c:when>
                            <c:otherwise>
                                <div class="message otherPersonMessage">
                            </c:otherwise>
                        </c:choose>
                            <div class="personContentDivider">
                                <div class="person">
                                    <div class="tag">
                                        <c:choose>
                                            <c:when test="${i % 2 == 1}">
                                                <h3 class="buyer">구매자</h3>
                                            </c:when>
                                            <c:otherwise>
                                                <h3 class="seller">판매자</h3>
                                            </c:otherwise>
                                        </c:choose>
                                    </div> <!-- (End) tag  -->
                                        <div class="name">
                                            <c:choose>
                                                <c:when test="${i % 2 == 1}">
                                                    <h3>슬라임1616</h3>
                                                </c:when>
                                                <c:otherwise>
                                                    <h3>모래표범1616</h3>
                                                </c:otherwise>
                                            </c:choose>
                                        </div> <!-- (End) name  -->
                                </div> <!-- (End) person  -->
                                <div class="content">
                                    <div class="textIsReadDivider">
                                        <div class="text">
                                            <p>바나나맛 우유 abcdefghijklmnopqrstuvwxyz</p>
                                            <div class="time">
                                                <p>21:07</p>
                                            </div>
                                        </div>
                                        <c:choose>
                                            <c:when test="${i == 5}">
                                                <div class="isRead on">
                                            </c:when>
                                            <c:otherwise>
                                                <div class="isRead off">
                                            </c:otherwise>
                                        </c:choose>
                                            <p>읽음</p>
                                        </div>
                                    </div> <!-- (End) textIsReadDivider-->
                                </div> <!-- (End) content -->
                            </div>  <!-- (End) personContentDivider -->
                        </div> <!-- (End) message, myMessage or otherPersonMessage -->
                    </c:forEach>

                    <!-- <div class="message myMessage">
                        <div class="personContentIsReadDivider">
                            <div class="person">
                                <h3>슬라임</h3>
                            </div>
                            <div class="content">
                                <div class="text">
                                    <p>바나나맛 우유</p>
                                    <div class="time">
                                        <p>21:07</p>
                                    </div>
                                </div>
                            </div>
                            <div class="isRead off">
                                <div class="greenHorizontalLine"></div>
                                <p>읽음</p>
                            </div>
                        </div>
                    </div> -->

                </div>
                <div class="container" id="messagingContainer">
                    <input type="text" name="demo-name" id="demo-name" value="" placeholder="">
                    <div class=" button primary sendButtonBlock">
                        <img onclick="" src="${pageContext.request.contextPath}/resources/images/tw/send.svg" alt="send_inputted_message">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>