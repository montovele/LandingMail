

ssh root@108.174.155.118 -p 22022







Alternativa rápida (sin backup)

Si quieres reemplazar directamente:

rm -rf /var/www/hencom/LandingMail/dist
mkdir -p /var/www/hencom/LandingMail/dist
mv /var/www/LandingMail/dist/* /var/www/hencom/LandingMail/dist/