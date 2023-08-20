<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*, java.util.UUID" %>
<%@ page import="javax.imageio.ImageIO" %>
<%@ page import="java.awt.image.BufferedImage" %>
<%@ page import="java.awt.Graphics2D" %> <!-- 추가한 부분 -->

<%
String sFileInfo = "";

try {
    // 파일명 - 싱글파일업로드와 다르게 멀티파일업로드는 HEADER로 넘어옴
    String name = request.getHeader("file-name");
    String ext = name.substring(name.lastIndexOf(".") + 1);
    // 파일 기본경로
    String defaultPath = application.getRealPath("/");
    // 파일 기본경로 _ 상세경로resources
    String uploadPath = defaultPath + "resources" + File.separator + "upload" + File.separator;

    System.out.print(uploadPath);
    File file = new File(uploadPath);
    if (!file.exists()) {
        file.mkdirs();
    }

    String realname = UUID.randomUUID().toString() + "." + ext;
    InputStream is = request.getInputStream();
    OutputStream os = new FileOutputStream(new File(uploadPath, realname));

    byte[] buffer = new byte[4096];
    int bytesRead;
    while ((bytesRead = is.read(buffer)) != -1) {
        os.write(buffer, 0, bytesRead);
    }

    os.flush();
    os.close();

    // 리사이징된 이미지 저장
    BufferedImage originalImage = ImageIO.read(new File(uploadPath, realname));
    int maxWidth = 400; // 원하는 가로 최대 크기
    int maxHeight = 400; // 원하는 세로 최대 크기
    
    int originalWidth = originalImage.getWidth();
    int originalHeight = originalImage.getHeight();
    
    double scaleFactor = Math.min(1.0 * maxWidth / originalWidth, 1.0 * maxHeight / originalHeight);
    int newWidth = (int) (originalWidth * scaleFactor);
    int newHeight = (int) (originalHeight * scaleFactor);
    
    BufferedImage resizedImage = new BufferedImage(newWidth, newHeight, BufferedImage.TYPE_INT_RGB);
    Graphics2D g = resizedImage.createGraphics();
    g.drawImage(originalImage, 0, 0, newWidth, newHeight, null);
    g.dispose();

    String resizedFilename = UUID.randomUUID().toString() + "_resized." + ext;
    ImageIO.write(resizedImage, ext, new File(uploadPath, resizedFilename));

    sFileInfo += "&bNewLine=true&sFileName=" + name + "&sFileURL=" + "/resources/upload/" + resizedFilename;
} catch (Exception e) {
    sFileInfo = "Error: " + e.getMessage();
}

out.println(sFileInfo);
%>
