#!/bin/sh

#Affichage des catÃÂ©gorie
echo '------------------------------------------------------------------------------'
echo "Affichage des catÃÂ©gries"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/categorie
echo
echo '------------------------------------------------------------------------------'
echo "Affichage de la premiÃÂ¨re catÃÂ©gorie"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/categorie/1
echo
echo '------------------------------------------------------------------------------'
echo "Affichage d'une catÃÂ©gorie inexistante"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/categorie/1234
echo
echo '------------------------------------------------------------------------------'
body='{"id":100,"catName":"Demo","lastMod":"2010-06-08T02:00:00+02:00"}'
echo "Creation de la catÃÂ©gorie $body"
curl --noproxy "*" -H "Content-Type: application/json"  -X POST -d $body https://26kwy.sse.codesandbox.io/api/categorie/
echo
echo '------------------------------------------------------------------------------'
body='{"id":100,"catName":"Demo","lastMod":"2010-06-08T02:00:00+02:00"}'
echo "Creation d'un double la catÃÂ©gorie $body"
curl --noproxy "*" -H "Content-Type: application/json"  -X POST -d $body https://26kwy.sse.codesandbox.io/api/categorie/
echo
echo '------------------------------------------------------------------------------'
body='{"id":100,"catName":"DemoUpdate","lastMod":"2010-06-08T02:00:00+02:00"}'
echo "Mise ÃÂ  jour de la catÃÂ©gorie 100 : $body"
curl --noproxy "*" -H "Content-Type: application/json"  -X PUT -d $body https://26kwy.sse.codesandbox.io/api/categorie/100
echo
echo '------------------------------------------------------------------------------'
echo "Affichage de la catÃÂ©gorie 100"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/categorie/100
echo
echo '------------------------------------------------------------------------------'
echo "Suppression de la catÃÂ©goie 100"
curl --noproxy "*" -H "Content-Type: application/json" -X DELETE https://26kwy.sse.codesandbox.ioapi/categorie/100
echo
echo
echo '------------------------------------------------------------------------------'
echo "Suppression d'une catÃÂ©gorie inexistante 1234"
curl --noproxy "*" -H "Content-Type: application/json" -X DELETE https://26kwy.sse.codesandbox.io/api/categorie/1234
echo
echo '------------------------------------------------------------------------------'
echo "Affichage de la catÃÂ©gorie 100"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/categorie/100
echo
echo '------------------------------------------------------------------------------'
echo "Affichage des brasseries"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/brewery/
echo
echo '-------------------------------------------------------------------------------'
echo "Affichage de la première brasserie grâce à l'id"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/brewery/96
echo
echo '-------------------------------------------------------------------------------'
echo "Affichage de la brasseries Tablerock"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/brewery/name/Tablerock
echo
echo '-------------------------------------------------------------------------------'
echo "Affichage des brasseries dont le nom commence par Tab"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/brewery/leftname/Tab
echo 
echo '-------------------------------------------------------------------------------'
echo "Affichage des brasseries de Londre"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/brewery/city/London
echo
echo '-------------------------------------------------------------------------------'
echo "Affichage des brasseries situés dans une ville commencant par Lon"
curl --noproxy "*" -H "Content-Type: application/json" -X GET https://26kwy.sse.codesandbox.io/api/brewery/leftcity/Lon
echo
echo '-------------------------------------------------------------------------------'