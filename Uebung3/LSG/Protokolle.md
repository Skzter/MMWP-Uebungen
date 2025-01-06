# Wie funktioniert ein Webserver
- Client/Server Prinzip
- Client schickt Anfrage an den Server 
- Server antwortet
Beispiel:
1. Man gibt Link zur Webseite eine [skzter.dev](https://skzter.dev/)
2. Anfrage an Rechner mit Hostname *skzter.dev*, Ressource index.* zurückzusenden
3. Name *skzter.dev* wird durch DNS-Protokoll in IP-Adresse umgesetzt
4. für Übertragung wird über TCP auf Standard-Port 80 (HTTP) oder 443 (HTTPS) GET-Anforderung gesendet
# Protokolle
## HTTP
- steht für Hypertext Transfer Protocol
- Request/Response Protokoll
- TCP für Übertragung bis HTTP/3
- ab HTTP/3 QUIC + UDP als Transportprotokolle
- QUIC (Quick UDP Internet Connections) ist auf UDP aufbauendes zuverlässiges, verbindungsorientiertes und verschlüsseltes Netzwerkprotokoll
  auf Transportschicht (wikipedia.org/wiki/QUIC)
- nutzt TLS zur kryptographischen Absicherung der Kommunikation und verfolgt Ziel höhere Perfomance als TCP zu bieten
- gibt HTTP-Authentifizierung durch Challenge-Response Mechanismus, wobei Server eine Challenge (Login-Daten z.B.) vorm übertragen der Ressource
- muss serverseitig konfiguriert werden
- Nutzer danach gegenüber Server authentifiziert aber Server nicht gegenüber Nutzer -> Gefahr Spoofing Angriff 
- HTTPS löst Problem durch digitale Zertifikate die Identität des Webservers bestätigen 
### Beispielanfrage mit HTTP/1.1
- besteht aus request zeile 
### 
## HTTPS und TLS
## HTTP-Headerfelder
## HTTP-Statuscodes
