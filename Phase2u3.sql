-- Phase 2 - Aufgabe 3
CREATE TABLE Mitglied (
    MitgliedID INT,
    Name VARCHAR(255) NOT NULL,
    Nachname VARCHAR(255) NOT NULL,
    Geburtsdatum TIMESTAMP NOT NULL,
    Eintrittsdatum TIMESTAMP NOT NULL,
    Verguetung INT DEFAULT 0,
    Beitrag INT DEFAULT 60,
    Status VARCHAR(50) DEFAULT 'Aktiv',
    Geschlecht VARCHAR(10),
    Telefonnummer VARCHAR(20) NOT NULL UNIQUE,
    EMail VARCHAR(255) NOT NULL,
    PRIMARY KEY(MitgliedID)
);

CREATE TABLE Team (
    TeamID INT,
    Name VARCHAR(255) NOT NULL UNIQUE,
    Leistungsklasse VARCHAR(255) NOT NULL,
    Altersklasse VARCHAR(255) NOT NULL,
    Kategorie CHAR(1) NOT NULL,
    PRIMARY KEY(TeamID)
);

CREATE TABLE Spieler (
    Position VARCHAR(255) DEFAULT 'Universal',
    Spielerpassnummer INT NOT NULL UNIQUE,
    Trikotnummer INT NOT NULL,
    Sprunghoehe INT,
    Groesse FLOAT,
    Punkte INT DEFAULT 0,
    Blocks INT DEFAULT 0,
    Assists INT DEFAULT 0,
    TeamID INT,
    MitgliedID INT,
    FOREIGN KEY (TeamID) REFERENCES Team(TeamID),
    FOREIGN KEY (MitgliedID) REFERENCES Mitglied(MitgliedID)
);

CREATE TABLE Trainer (
    Qualifikation VARCHAR(255) NOT NULL,
    Zustaendigkeit VARCHAR(255) NOT NULL,
    Arbeitsstunden INT NOT NULL,
    MitgliedID INT,
    FOREIGN KEY (MitgliedID) REFERENCES Mitglied(MitgliedID)
);

CREATE TABLE Funktionaer (
    Rolle VARCHAR(255) NOT NULL,
    Eintrittsdatum DATE NOT NULL,
    Amtszeit INT NOT NULL,
    MitgliedID INT,
    FOREIGN KEY (MitgliedID) REFERENCES Mitglied(MitgliedID)
);

CREATE TABLE Sporthalle (
    SporthalleName VARCHAR(255),
    Adresse VARCHAR(255) NOT NULL,
    PRIMARY KEY(SporthalleName)
);

CREATE TABLE Ausruestung (
    AusruestungID INT,
    Name VARCHAR(255) NOT NULL,
    Kosten FLOAT NOT NULL,
    Art VARCHAR(255) NOT NULL,
    SporthalleName VARCHAR(255) NOT NULL,
    PRIMARY KEY(AusruestungID),
    FOREIGN KEY(SporthalleName) REFERENCES Sporthalle(SporthalleName)
);

CREATE TABLE Wettkampf (
    WettkampfName VARCHAR(255),
    Startdatum TIMESTAMP NOT NULL, -- auch DATE mgl
    Enddatum TIMESTAMP NOT NULL,
    Art VARCHAR(255) NOT NULL,
    Leistungsklasse VARCHAR(255) NOT NULL,
    Altersklasse VARCHAR(255) NOT NULL,
    Preisgeld FLOAT DEFAULT 0.0,
    MitgliedID INT,
    PRIMARY KEY(WettkampfName),
    FOREIGN KEY(MitgliedID) REFERENCES Mitglied(MitgliedID)
);

CREATE TABLE WettkampfSpiel (
    WettkampfSpielID INT,
    Startzeit TIMESTAMP NOT NULL,
    Datum DATE NOT NULL,
    Adresse VARCHAR(255) NOT NULL,
    Gegner VARCHAR(255), -- Wann eingefügt? Danach dann NOT NULL aber auch davor mgl dann so
    Dauer INT, -- siehe oben
    Endergebnis VARCHAR(255), -- siehe oben
    Spieltag INT NOT NULL,
    WettkampfName VARCHAR(255) NOT NULL,
    PRIMARY KEY(WettkampfSpielID),
    FOREIGN KEY(WettkampfName) REFERENCES Wettkampf(WettkampfName)
);

CREATE TABLE Sponsor (
    Telefonnummer VARCHAR(20) ,
    Name VARCHAR(255) NOT NULL,
    EMail VARCHAR(255) NOT NULL,
    Art CHAR(1) NOT NULL,
    Kontaktperson VARCHAR(255) NOT NULL,
    PRIMARY KEY(Telefonnummer)
);

CREATE TABLE nimmtTeilAn (
    TeamID INT NOT NULL,
    WettkampfName VARCHAR(255) NOT NULL,
    FOREIGN KEY(TeamID) REFERENCES Team(TeamID),
    FOREIGN KEY(WettkampfName) REFERENCES Wettkampf(WettkampfName)
);

CREATE TABLE trainiert (
    TeamID INT NOT NULL,
    MitgliedID INT NOT NULL,
    FOREIGN KEY(TeamID) REFERENCES Team(TeamID),
    FOREIGN KEY(MitgliedID) REFERENCES Mitglied(MitgliedID)
);

CREATE TABLE trainiertIn (
    Startzeit VARCHAR(4) NOT NULL, -- keine Zeitangabe mit nur HH:MM gefunden deswegen INT
    Endzeit VARCHAR(4) NOT NULL,
    Ort VARCHAR(255) NOT NULL,
    Wochentag VARCHAR(50) NOT NULL,
    SporthalleName VARCHAR(255) NOT NULL,
    TeamID INT NOT NULL,
    FOREIGN KEY(SporthalleName) REFERENCES Sporthalle(SporthalleName),
    FOREIGN KEY(TeamID) REFERENCES Team(TeamID)
);

CREATE TABLE sponsort (
    Startdatum DATE NOT NULL,
    Enddatum DATE NOT NULL,
    Art CHAR(1) NOT NULL,
    Budget FLOAT NOT NULL,
    Telefonnummer VARCHAR(20) NOT NULL,
    TeamID INT NOT NULL,
    FOREIGN KEY(Telefonnummer) REFERENCES Sponsor(Telefonnummer),
    FOREIGN KEY(TeamID) REFERENCES Team(TeamID)
);
-- Phase 3 - Aufgabe 2
-- Before Insert Trigger bei neue Hallenzeit
-- kein Team zur selben Zeit in der Halle
-- TEST: 2 Teams einfügen und Hallenzeiten vergeben
-- Erg: Fehlgeschlagen Doppelbuchung mgl

-- RAISE_APPLICATION_ERROR(420, 'Hallenzeit bereits belegt')

EXECUTE ADDHZ(1, 3, 'hier', 'mo', 'Toll', 2);
CREATE or REPLACE TRIGGER bi_hallenzeit
BEFORE INSERT ON trainiertIn




-- Phase 3 - Aufgabe 3