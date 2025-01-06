# Wie funktioniert ein Webserver
- Client/Server Prinzip
- Client schickt Anfrage an den Server 
- Server antwortet
Beispiel:
1. Man gibt Link zur Webseite ein [skzter.dev](https://skzter.dev/)
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

### Request mit HTTP/1.1
- **Request line** mit Request-Methode, Leerzeichen, angefordertet URI, Leerzeichen, Protokollversion, Enter und Newline
```
GET / HTTP/3 
```
- eine oder mehrere **Request Header Felder** mit Name, Doppelpunkt, Leerzeichen (optional), Wert, Enter und Newline
```
Host: skzter.dev
Accept-Language: de
```
- optionaler message body
- in HTTP/1.1 alle Header Felder optinal außer *Host: hostname*

### Requestmethoden
- GET
    - übergibt nur Daten (keine anderen Effekte)
    - übergebene Daten durch URL abrufbar -> nützlich für Lesezeichen und teilen von Inhalten
    - Caching mgl
- POST
    - schickt Daten zur weiteren Verarbeitung an Server -> HTML-Formular
    - können neue Ressourcen entstehen oder alte modifiziert werden 
    - im allg. nicht von Caches zwischengespeichert
- HEAD
    - wie bei GET-Anfrage allerdings nur Nachrichtenrumpf (Header) senden und nicht Inhalt
    - kann Dateigrößen im Voraus durch
- weitere wie PUT, PATCH, DELETE, TRACE, OPTIONS, CONNECT

### Respone mit HTTP/1.1 
- eine **Status line** mit Protokollversion, Leerzeichen, Statuscode, optionale Antwort, Enter und Newline
``` 
HTTP/1.1 200 OK
```
- keine bis mehrere **Response Header Felder** mit Name, Doppelpunkt, (Leerzeichen), Wert, (Leerzeichen), Enter und Newline
```
Content-Type: text/html; charset=UTF-8 
```
- optionaler message body

### Response Status Codes
- 1xx (Information)
    - angekommen, wird verarbeitet
- 2xx (Erfolgreiche Operation)
    - Anfrage bearbeitet und Antwort an Anfragesteller zurückgesendet
- 3xx (Umleitung)
    - weitere Schritte auf Seite Client notwendig 
- 4xx (Client-Fehler)
    - bei Bearbeitung Anfrage Fehler aufgetreten, der im Verantwortungsbereich des Clients liegt
- 5xx - Server-Fehler
    - Fehler aufgetreten, dessen Ursache beim Server liegt

## HTTPS und TLS
## HTTP-Headerfelder
## HTTP-Statuscodes
