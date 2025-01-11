# Was ist ein Webserver
- Kann sich auf Hardware oder Software beziehen, oder beides zusammen
  - Hardware: Computer, der Daten der Website speichert, und mit dem Internet verbunden ist, um darüber mit anderen Geräten Dateien auszutauschen
  - Software: verschiedene Programme, die verwalten wie Nutzer auf Daten zugreifen können. Minimal ein HTTP-Server, der URL’s auswerten und Daten an  Clients schicken kann. 
- Der simpelste Webserver akzeptiert HTTP Anfragern des Browsers, und antwortet auf diese mit dem angeforderten Dokument
  - Das wäre ein statischer Webserver, da er Dateien wie sie auf dem Server liegen an den Nutzer weiterreicht
  - Etwas komplexer, gibt es ebenfalls dynamische Webserver, welche auf einem statischen Webserver aufbauen, und diesen mit weiterer Software erweitern.
    - Meist Anwendungsserver und Datenbank
    - Dynamisch, da Anwendungsserver die vom Client angefragten Dateien erst zuvor mit Informationen aus der Datenbank aktualisiert, bevor er diese an den Client schickt.
      - Bspw. Wikipedia: einzelne Seiten keine ausgeschriebenen HTML Dokumente, sondern Templates, welche mit in DB gespeicherten Seiteninhalten gefüllt werden
- An sich erfüllt jeder Internetfähige Computer diese Anforderungen, d.h. jeder könnte einen Webserver auf seinem privaten Computer hosten. 
  - Eigens dafür vorgesehener Webserver hat aber mehrere Vorteile
    - Von Störungen abgesehen immer erreichbar und funktionsfähig
    - Kann eine feste IP-Adresse habe (Nicht alle Internetanbieter bieten feste IP’s für private Anschlüsse)
    - Wird dieser von einem Anbieter instandgehalten, falls dieser gemietet wurde
  - Bekannte Anbieter: Strato, IONOS, Netcup
  - Quelle: https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server

# Was ist DNS
- Domain Name System
- Weltweit verteilter, hierarchischer Verzeichnisdienst der den Namensraum des Internets verwaltet
- Verzeichnis, ordnet Domainnamen die IPs des zugehörigen Servers zu
- Hierarchisch, da der Namensraum Baumförmig aufgebaut ist
- Namensraum:
  - Domainname besteht von vorne nach hinten aus einem Pfad von Blatt zu Wurzel des Baumes
  - Erste Ebene des Baumes, also das Ende des Domainnamens, heißt Top-Level-Domain. Bsp.: .de, .com, .dev. Diese ist oft Länderabhängig, kann sich aber auch auf den Inhalt der Website beziehen
  - Für jede Top-Level-Domain existieren eigene Nameserver, welche wiederum die IP-Adresse der Second-Level-Domain, also dem (von rechts) zweiten Teil der Domain, auflösen. Bsp.: wikipedia.org, skzter.dev, Google.com
  - Weitere Stufen möglich, bspw. de.wikipedia.org, welche dann über einen Namensserver von dem Webserver selber aufgelöst werden müssen, in diesem Fall Wikipedia. Maximale Länge: 255 Bytes.
  - Da die Auflösung von Second-Level-Domains über auf die Top-Level-Domains zugeordnete Namensserver passiert, müssen diese Server öffentlich und offiziell verzeichnet sein. Daher müssen Domains immer von einem Provider gemietet werden, damit dieser sie dann bei dem zugehörigen Namensserver registriert. Kostet etwa 5 – 15€ im Jahr, ist aber oft bei Hosting Verträgen mit dabei. Sprich: Hosting bei Strato oder IONOS (das sind beides auch domain name provider) enthält oft auch kostenlose Domainnamen
  - Quelle: https://de.wikipedia.org/wiki/Domain_Name_System

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
GET / HTTP/1.1
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

### Quellen
- https://en.wikipedia.org/wiki/HTTP
- https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol
- https://de.wikipedia.org/wiki/QUIC

## HTTPS und SSL/TLS
- Hypertext Transfer Protocol Secure
- wie HTTP nur das zusätzliche Verschlüsselung Daten mit SSL/TLS geschieht
- SSl Vorläufer TLS, wurde vollständig durch TLS ersetzt

### Funktionsweise TLS
- Handshake für sicheren Verbindungsaufbau
1. **ClientHello:**
   - Der Client sendet:
     - Unterstützte TLS-Versionen.
     - Verschlüsselungsverfahren (Cipher Suites).
     - Zufallsdaten (Random Values).
   - Optional: Unterstützte Kompressionsmethoden und andere Erweiterungen.

2. **ServerHello:**
   - Der Server antwortet mit:
     - Der gewählten TLS-Version.
     - Der ausgewählten Cipher Suite.
     - Eigenen Zufallsdaten.
   - Zusätzlich:
     - Ein **Zertifikat** zur Authentifizierung des Servers (enthält den öffentlichen Schlüssel).

3. **Schlüsselaustausch:**
   - Der Client überprüft das Zertifikat des Servers.
   - Basierend auf dem Schlüsselaustauschverfahren (z. B. RSA oder Diffie-Hellman):
     - Der Client generiert ein Premaster-Secret (bei RSA).
     - Bei Ephemeral-Diffie-Hellman (ECDHE): Beide Seiten tauschen kryptografische Parameter aus, um einen gemeinsamen Schlüssel zu berechnen.

4. **Session Key:**
   - Der symmetrische Schlüssel (Session Key) wird von beiden Seiten aus dem Premaster-Secret und Zufallsdaten abgeleitet.

5. **Bestätigung:**
   - Beide Seiten senden verschlüsselte Nachrichten, um den Handshake abzuschließen und die Verbindung zu aktivieren.

- Datenübertragungs-Phase
  - Die Kommunikation erfolgt mit symmetrischer Verschlüsselung (z. B. AES).
  - Jede Nachricht enthält einen **Message Authentication Code (MAC)**, um die Integrität zu gewährleisten.
  - Vertraulichkeit und Datenintegrität werden in Echtzeit gesichert.

-  Beendigungs-Phase
   - Beide Seiten tauschen **Close Notify**-Nachrichten aus.
   - Dies stellt sicher, dass die Verbindung geordnet geschlossen wird, und verhindert unvollständige Datenübertragung oder Manipulationen.

### Quellen
- https://de.wikipedia.org/wiki/Transport_Layer_Security