package com.firat.planck;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

//@Service
public class EmailSender {


    public void sendEmail() {
        // E-posta gönderim için gerekli SMTP sunucu ayarları
        String smtpHost = "smtp.gmail.com";
        String username = "yorulmazfrt@gmail.com";
        String password = "qcpx yjjp lrpe nkzp";
        int smtpPort = 587; // SMTP sunucu bağlantı noktası (örnek: 587)

        // E-posta ayarları
        String fromAddress = "yorulmazfrt@gmail.com";
        String toAddress = "frtyrlmz@gmail.com";
        String subject = "Örnek E-Posta Başlığı";
        String messageText = "Bu bir örnek e-posta mesajıdır.";

        // E-posta gönderme işlemi
        try {
            Properties properties = new Properties();
            properties.put("mail.smtp.host", smtpHost);
            properties.put("mail.smtp.port", smtpPort);
            properties.put("mail.smtp.protocol", "smtp");
            properties.put("mail.smtp.auth", "true");

            properties.put("mail.smtp.starttls.enable", "true");

            properties.put("mail.smtp.ssl.trust", "*");
            properties.put("mail.smtp.ssl.checkserveridentity", "false");
            properties.put("mail.smtp.ssl.enable", "TLSv1.2 TLSv1.2 TLSv1.1");



            Session session = Session.getInstance(properties, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(username, password);
                }
            });

            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(fromAddress));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toAddress));
            message.setSubject(subject);
            message.setText(messageText);

            Transport.send(message);
            System.out.println("E-posta başarıyla gönderildi.");
        } catch (MessagingException e) {
            e.printStackTrace();
            System.err.println("E-posta gönderme hatası: " + e.getMessage());
        }
    }

}
