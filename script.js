/* Deutsch Quest — vollständige script.js
   500 Lernkarten: 250 Nomen (Singular/Plural) + 250 Verben (Infinitiv/ich-Form).
   HTML-Elemente werden vorsichtig gesucht, damit fehlende optionale Elemente nicht crashen. */
const nounRows = `
Apfel|Äpfel|elma
Banane|Bananen|muz
Orange|Orangen|portakal
Zitrone|Zitronen|limon
Tomate|Tomaten|domates
Kartoffel|Kartoffeln|patates
Zwiebel|Zwiebeln|soğan
Karotte|Karotten|havuç
Gurke|Gurken|salatalık
Paprika|Paprikas|biber
Brot|Brote|ekmek
Brötchen|Brötchen|küçük ekmek
Käse|Käse|peynir
Ei|Eier|yumurta
Milch|Milch|süt
Joghurt|Joghurts|yoğurt
Butter|Butter|tereyağı
Wurst|Würste|sosis
Fisch|Fische|balık
Fleisch|Fleischsorten|et
Reis|Reissorten|pirinç
Nudel|Nudeln|makarna
Suppe|Suppen|çorba
Salat|Salate|salata
Kuchen|Kuchen|kek
Keks|Kekse|bisküvi
Schokolade|Schokoladen|çikolata
Zucker|Zuckerarten|şeker
Salz|Salze|tuz
Pfeffer|Pfeffer|karabiber
Wasser|Wasser|su
Saft|Säfte|meyve suyu
Tee|Tees|çay
Kaffee|Kaffees|kahve
Tasse|Tassen|fincan
Glas|Gläser|bardak
Teller|Teller|tabak
Löffel|Löffel|kaşık
Gabel|Gabeln|çatal
Messer|Messer|bıçak
Topf|Töpfe|tencere
Pfanne|Pfannen|tava
Flasche|Flaschen|şişe
Dose|Dosen|kutu
Einkauf|Einkäufe|alışveriş
Markt|Märkte|pazar
Laden|Läden|dükkân
Preis|Preise|fiyat
Geld|Geldbeträge|para
Euro|Euro|avro
Mensch|Menschen|insan
Mann|Männer|erkek
Frau|Frauen|kadın
Kind|Kinder|çocuk
Baby|Babys|bebek
Familie|Familien|aile
Mutter|Mütter|anne
Vater|Väter|baba
Elternteil|Elternteile|ebeveyn
Bruder|Brüder|erkek kardeş
Schwester|Schwestern|kız kardeş
Sohn|Söhne|oğul
Tochter|Töchter|kız evlat
Freund|Freunde|erkek arkadaş
Freundin|Freundinnen|kız arkadaş
Nachbar|Nachbarn|komşu
Kollege|Kollegen|iş arkadaşı
Lehrer|Lehrer|öğretmen
Schüler|Schüler|öğrenci
Arzt|Ärzte|doktor
Krankenschwester|Krankenschwestern|hemşire
Polizist|Polizisten|polis
Verkäufer|Verkäufer|satıcı
Fahrer|Fahrer|şoför
Name|Namen|isim
Adresse|Adressen|adres
Telefon|Telefone|telefon
Handy|Handys|cep telefonu
Computer|Computer|bilgisayar
Bildschirm|Bildschirme|ekran
Tastatur|Tastaturen|klavye
Maus|Mäuse|fare
Internet|Internetverbindungen|internet
Nachricht|Nachrichten|mesaj
Brief|Briefe|mektup
E-Mail|E-Mails|e-posta
Buch|Bücher|kitap
Heft|Hefte|defter
Stift|Stifte|kalem
Bleistift|Bleistifte|kurşun kalem
Papier|Papiere|kâğıt
Tasche|Taschen|çanta
Rucksack|Rucksäcke|sırt çantası
Schlüssel|Schlüssel|anahtar
Tür|Türen|kapı
Fenster|Fenster|pencere
Wand|Wände|duvar
Boden|Böden|zemin
Decke|Decken|tavan
Zimmer|Zimmer|oda
Wohnung|Wohnungen|daire
Haus|Häuser|ev
Küche|Küchen|mutfak
Bad|Bäder|banyo
Balkon|Balkone|balkon
Garten|Gärten|bahçe
Tisch|Tische|masa
Stuhl|Stühle|sandalye
Sofa|Sofas|kanepe
Bett|Betten|yatak
Schrank|Schränke|dolap
Regal|Regale|raf
Lampe|Lampen|lamba
Teppich|Teppiche|halı
Spiegel|Spiegel|ayna
Uhr|Uhren|saat
Bild|Bilder|resim
Kühlschrank|Kühlschränke|buzdolabı
Herd|Herde|ocak
Ofen|Öfen|fırın
Waschmaschine|Waschmaschinen|çamaşır makinesi
Dusche|Duschen|duş
Badewanne|Badewannen|küvet
Handtuch|Handtücher|havlu
Seife|Seifen|sabun
Shampoo|Shampoos|şampuan
Zahnbürste|Zahnbürsten|diş fırçası
Zahn|Zähne|diş
Haar|Haare|saç
Kopf|Köpfe|baş
Gesicht|Gesichter|yüz
Auge|Augen|göz
Ohr|Ohren|kulak
Nase|Nasen|burun
Mund|Münder|ağız
Hand|Hände|el
Finger|Finger|parmak
Arm|Arme|kol
Bein|Beine|bacak
Fuß|Füße|ayak
Rücken|Rücken|sırt
Bauch|Bäuche|karın
Herz|Herzen|kalp
Körper|Körper|vücut
Krankheit|Krankheiten|hastalık
Medikament|Medikamente|ilaç
Rezept|Rezepte|reçete
Termin|Termine|randevu
Krankenhaus|Krankenhäuser|hastane
Apotheke|Apotheken|eczane
Schmerz|Schmerzen|ağrı
Fieber|Fieber|ateş
Husten|Husten|öksürük
Erkältung|Erkältungen|soğuk algınlığı
Arbeit|Arbeiten|iş
Beruf|Berufe|meslek
Büro|Büros|ofis
Firma|Firmen|şirket
Chef|Chefs|patron
Pause|Pausen|mola
Aufgabe|Aufgaben|görev
Frage|Fragen|soru
Antwort|Antworten|cevap
Sprache|Sprachen|dil
Wort|Wörter|kelime
Satz|Sätze|cümle
Fehler|Fehler|hata
Beispiel|Beispiele|örnek
Unterricht|Unterrichte|ders
Schule|Schulen|okul
Kurs|Kurse|kurs
Prüfung|Prüfungen|sınav
Note|Noten|not
Hausaufgabe|Hausaufgaben|ödev
Tafel|Tafeln|tahta
Stunde|Stunden|ders saati
Tag|Tage|gün
Woche|Wochen|hafta
Monat|Monate|ay
Jahr|Jahre|yıl
Morgen|Morgen|sabah
Abend|Abende|akşam
Nacht|Nächte|gece
Minute|Minuten|dakika
Sekunde|Sekunden|saniye
Zeit|Zeiten|zaman
Kalender|Kalender|takvim
Geburtstag|Geburtstage|doğum günü
Feier|Feiern|kutlama
Fest|Feste|bayram
Urlaub|Urlaube|tatil
Reise|Reisen|seyahat
Hotel|Hotels|otel
Zimmernummer|Zimmernummern|oda numarası
Bahnhof|Bahnhöfe|tren istasyonu
Flughafen|Flughäfen|havaalanı
Haltestelle|Haltestellen|durak
Bus|Busse|otobüs
Zug|Züge|tren
Straßenbahn|Straßenbahnen|tramvay
Auto|Autos|araba
Fahrrad|Fahrräder|bisiklet
Motorrad|Motorräder|motosiklet
Taxi|Taxis|taksi
Fahrkarte|Fahrkarten|bilet
Ticket|Tickets|bilet
Straße|Straßen|cadde
Weg|Wege|yol
Brücke|Brücken|köprü
Platz|Plätze|meydan
Stadt|Städte|şehir
Dorf|Dörfer|köy
Land|Länder|ülke
Park|Parks|park
Spielplatz|Spielplätze|oyun parkı
Geschäft|Geschäfte|mağaza
Supermarkt|Supermärkte|süpermarket
Bäckerei|Bäckereien|fırın
Restaurant|Restaurants|restoran
Café|Cafés|kafe
Bank|Banken|banka
Post|Poststellen|posta
Museum|Museen|müze
Kino|Kinos|sinema
Theater|Theater|tiyatro
Schwimmbad|Schwimmbäder|yüzme havuzu
Sport|Sportarten|spor
Spiel|Spiele|oyun
Ball|Bälle|top
Musik|Musikstücke|müzik
Lied|Lieder|şarkı
Film|Filme|film
Foto|Fotos|fotoğraf
Kamera|Kameras|kamera
Tier|Tiere|hayvan
Hund|Hunde|köpek
Katze|Katzen|kedi
Vogel|Vögel|kuş
Pferd|Pferde|at
Kuh|Kühe|inek
Schwein|Schweine|domuz
Schaf|Schafe|koyun
Huhn|Hühner|tavuk
Maus|Mäuse|fare
Biene|Bienen|arı
Schmetterling|Schmetterlinge|kelebek
Baum|Bäume|ağaç
Blume|Blumen|çiçek
Gras|Gräser|çimen
Wald|Wälder|orman
Berg|Berge|dağ
Fluss|Flüsse|nehir
See|Seen|göl
Meer|Meere|deniz
Strand|Strände|sahil
Insel|Inseln|ada
Himmel|Himmel|gökyüzü
Wolke|Wolken|bulut
Regen|Regenfälle|yağmur
Schnee|Schneefälle|kar
Wind|Winde|rüzgâr
Sonne|Sonnen|güneş
Mond|Monde|ay
Stern|Sterne|yıldız
Wetter|Wetterlagen|hava durumu
Temperatur|Temperaturen|sıcaklık
Sommer|Sommer|yaz
Winter|Winter|kış
Frühling|Frühlinge|ilkbahar
Herbst|Herbste|sonbahar
Farbe|Farben|renk
Rot|Rottöne|kırmızı
Blau|Blautöne|mavi
Grün|Grüntöne|yeşil
Gelb|Gelbtöne|sarı
Schwarz|Schwarztöne|siyah
Weiß|Weißtöne|beyaz
Kleid|Kleider|elbise
Hose|Hosen|pantolon
Hemd|Hemden|gömlek
T-Shirt|T-Shirts|tişört
Jacke|Jacken|ceket
Mantel|Mäntel|palto
Schuh|Schuhe|ayakkabı
Socke|Socken|çorap
Mütze|Mützen|bere
Hut|Hüte|şapka
Kleidungsstück|Kleidungsstücke|giysi
Größe|Größen|beden
Farbe|Farben|renk
Wetterbericht|Wetterberichte|hava raporu
Problem|Probleme|sorun
Idee|Ideen|fikir
Plan|Pläne|plan
Wunsch|Wünsche|dilek
Hilfe|Hilfen|yardım
Glück|Glücksfälle|şans
Angst|Ängste|korku
Freude|Freuden|sevinç
Liebe|Lieben|sevgi
Hoffnung|Hoffnungen|umut
Gedanke|Gedanken|düşünce
Meinung|Meinungen|fikir
Grund|Gründe|sebep
Möglichkeit|Möglichkeiten|olasılık
Entscheidung|Entscheidungen|karar
Erfahrung|Erfahrungen|deneyim
Erinnerung|Erinnerungen|anı
Zukunft|Zukünfte|gelecek
Vergangenheit|Vergangenheiten|geçmiş
Gegenwart|Gegenwarten|şimdi
Wahrheit|Wahrheiten|gerçek
Wirklichkeit|Wirklichkeiten|gerçeklik
Regel|Regeln|kural
Gesetz|Gesetze|yasa
Recht|Rechte|hak
Pflicht|Pflichten|yükümlülük
Sicherheit|Sicherheiten|güvenlik
Gefahr|Gefahren|tehlike
Unfall|Unfälle|kaza
Polizei|Polizeien|polis teşkilatı
Feuer|Feuer|ateş
Feuerwehr|Feuerwehren|itfaiye
Ausweis|Ausweise|kimlik
Pass|Pässe|pasaport
Formular|Formulare|form
Unterschrift|Unterschriften|imza
Versicherung|Versicherungen|sigorta
Miete|Mieten|kira
Nebenkosten|Nebenkosten|yan giderler
Strom|Stromarten|elektrik
Gas|Gasarten|gaz
Heizung|Heizungen|ısıtma
Müll|Müllarten|çöp
Rechnung|Rechnungen|fatura
Quittung|Quittungen|makbuz
Konto|Konten|hesap
Karte|Karten|kart
Kreditkarte|Kreditkarten|kredi kartı
Geldautomat|Geldautomaten|ATM
Geschenk|Geschenke|hediye
Paket|Pakete|paket
Karton|Kartons|karton
Werkzeug|Werkzeuge|alet
Hammer|Hammer|çekiç
Schraube|Schrauben|vida
Schere|Scheren|makas
Bürste|Bürsten|fırça
Schwamm|Schwämme|sünger
Eimer|Eimer|kova
Staubsauger|Staubsauger|elektrik süpürgesi
Besen|Besen|süpürge
Waschmittel|Waschmittel|deterjan
Sehenswürdigkeit|Sehenswürdigkeiten|turistik yer
Eintrittskarte|Eintrittskarten|giriş bileti
Führung|Führungen|rehberli tur
Landkarte|Landkarten|harita
Richtung|Richtungen|yön
Norden|Norden|kuzey
Süden|Süden|güney
Osten|Osten|doğu
Westen|Westen|batı
Ecke|Ecken|köşe
Ampel|Ampeln|trafik ışığı
Kreuzung|Kreuzungen|kavşak
Gehweg|Gehwege|kaldırım
Fahrstuhl|Fahrstühle|asansör
Treppe|Treppen|merdiven
Stockwerk|Stockwerke|kat
Eingang|Eingänge|giriş
Ausgang|Ausgänge|çıkış
Klingel|Klingeln|zil
Briefkasten|Briefkästen|posta kutusu
Nachrichtendienst|Nachrichtendienste|mesaj hizmeti
Veranstaltung|Veranstaltungen|etkinlik
Einladung|Einladungen|davet
Besuch|Besuche|ziyaret
Gast|Gäste|misafir
Gespräch|Gespräche|konuşma
Unterhaltung|Unterhaltungen|sohbet
Telefonat|Telefonate|telefon görüşmesi
Stimme|Stimmen|ses
Geräusch|Geräusche|gürültü
Lärm|Lärmquellen|gürültü
Ruhe|Ruhezeiten|sessizlik
Traum|Träume|rüya
Witz|Witze|fıkra
Geschichte|Geschichten|hikâye
Zeitung|Zeitungen|gazete
Zeitschrift|Zeitschriften|dergi
Fernseher|Fernseher|televizyon
Radio|Radios|radyo
Sendung|Sendungen|program
Fernbedienung|Fernbedienungen|uzaktan kumanda
Batterie|Batterien|pil
Ladegerät|Ladegeräte|şarj cihazı
Steckdose|Steckdosen|priz
Kabel|Kabel|kablo
Akku|Akkus|batarya

`.trim();
const verbRows = `
sein|bin|olmak
haben|habe|sahip olmak
werden|werde|olmak, hâline gelmek
machen|mache|yapmak
gehen|gehe|gitmek
kommen|komme|gelmek
wohnen|wohne|oturmak
leben|lebe|yaşamak
arbeiten|arbeite|çalışmak
lernen|lerne|öğrenmek
lernen|lerne|öğrenmek
sprechen|spreche|konuşmak
sagen|sage|söylemek
fragen|frage|sormak
antworten|antworte|cevap vermek
hören|höre|duymak
zuhören|höre zu|dinlemek
sehen|sehe|görmek
anschauen|schaue an|bakmak
lesen|lese|okumak
schreiben|schreibe|yazmak
rechnen|rechne|hesaplamak
buchstabieren|buchstabiere|harf harf söylemek
verstehen|verstehe|anlamak
wissen|weiß|bilmek
kennen|kenne|tanımak
finden|finde|bulmak
suchen|suche|aramak
brauchen|brauche|ihtiyaç duymak
wollen|will|istemek
möchten|möchte|istemek
können|kann|-ebilmek
müssen|muss|zorunda olmak
dürfen|darf|izinli olmak
sollen|soll|gerekmek
mögen|mag|sevmek
lieben|liebe|sevmek
gefallen|gefalle|hoşuna gitmek
hassen|hasse|nefret etmek
essen|esse|yemek yemek
trinken|trinke|içmek
kochen|koche|yemek pişirmek
backen|backe|fırında pişirmek
braten|brate|kızartmak
schneiden|schneide|kesmek
kaufen|kaufe|satın almak
verkaufen|verkaufe|satmak
bezahlen|bezahle|ödemek
kosten|koste|fiyatı olmak
bestellen|bestelle|sipariş etmek
reservieren|reserviere|rezervasyon yapmak
öffnen|öffne|açmak
schließen|schließe|kapatmak
beginnen|beginne|başlamak
anfangen|fange an|başlamak
aufhören|höre auf|bırakmak
enden|ende|bitmek
warten|warte|beklemek
bleiben|bleibe|kalmak
fahren|fahre|gitmek, araç sürmek
reisen|reise|seyahat etmek
fliegen|fliege|uçmak
laufen|laufe|koşmak, yürümek
rennen|renne|koşmak
spazieren|spaziere|gezmek
wandern|wandere|doğa yürüyüşü yapmak
schwimmen|schwimme|yüzmek
springen|springe|zıplamak
fallen|falle|düşmek
steigen|steige|binmek, yükselmek
umsteigen|steige um|aktarma yapmak
ankommen|komme an|varmak
abfahren|fahre ab|hareket etmek
abholen|hole ab|gidip almak
bringen|bringe|getirmek
holen|hole|alıp getirmek
tragen|trage|taşımak, giymek
nehmen|nehme|almak
geben|gebe|vermek
bekommen|bekomme|almak, elde etmek
schicken|schicke|göndermek
senden|sende|göndermek
zeigen|zeige|göstermek
erklären|erkläre|açıklamak
erzählen|erzähle|anlatmak
reden|rede|konuşmak
telefonieren|telefoniere|telefon etmek
anrufen|rufe an|telefon etmek
helfen|helfe|yardım etmek
danken|danke|teşekkür etmek
bitten|bitte|rica etmek
grüßen|grüße|selamlamak
begrüßen|begrüße|karşılamak
sich verabschieden|verabschiede mich|vedalaşmak
lachen|lache|gülmek
lächeln|lächele|gülümsemek
weinen|weine|ağlamak
fühlen|fühle|hissetmek
denken|denke|düşünmek
glauben|glaube|inanmak
hoffen|hoffe|umut etmek
wünschen|wünsche|dilemek
planen|plane|planlamak
entscheiden|entscheide|karar vermek
versuchen|versuche|denemek
schaffen|schaffe|başarmak
gewinnen|gewinne|kazanmak
verlieren|verliere|kaybetmek
spielen|spiele|oynamak
üben|übe|alıştırma yapmak
trainieren|trainiere|antrenman yapmak
arbeiten|arbeite|çalışmak
verdienen|verdiene|para kazanmak
sparen|spare|biriktirmek
ausgeben|gebe aus|harcamak
mieten|miete|kiralamak
vermieten|vermiete|kiraya vermek
putzen|putze|temizlemek
reinigen|reinige|temizlemek
waschen|wasche|yıkamak
spülen|spüle|bulaşık yıkamak
trocknen|trockne|kurutmak
bügeln|bügele|ütülemek
aufräumen|räume auf|toparlamak
ordnen|ordne|düzenlemek
reparieren|repariere|tamir etmek
bauen|baue|inşa etmek
wechseln|wechsle|değiştirmek
benutzen|benutze|kullanmak
verwenden|verwende|kullanmak
funktionieren|funktioniere|çalışmak, işlemek
passieren|passiere|olmak, meydana gelmek
geschehen|geschehe|gerçekleşmek
regnen|regne|yağmur yağmak
schneien|schneie|kar yağmak
scheinen|scheine|parlamak
dauern|dauere|sürmek
fehlen|fehle|eksik olmak
gehören|gehöre|ait olmak
passen|passe|uymak
stehen|stehe|ayakta durmak
sitzen|sitze|oturmak
liegen|liege|yatmak, bulunmak
stellen|stelle|koymak
einsteigen|steige ein|binmek
aussteigen|steige aus|inmek
aufstehen|stehe auf|kalkmak
aufwachen|wache auf|uyanmak
schlafen|schlafe|uyumak
einschlafen|schlafe ein|uykuya dalmak
träumen|träume|rüya görmek
frühstücken|frühstücke|kahvaltı yapmak
sich duschen|dusche mich|duş almak
sich waschen|wasche mich|yıkanmak
sich anziehen|ziehe mich an|giyinmek
sich ausziehen|ziehe mich aus|soyunmak
anziehen|ziehe an|giymek
ausziehen|ziehe aus|çıkarmak, taşınmak
anziehen|ziehe an|giymek
sich beeilen|beeile mich|acele etmek
sich freuen|freue mich|sevinmek
sich interessieren|interessiere mich|ilgilenmek
sich erinnern|erinnere mich|hatırlamak
sich fühlen|fühle mich|hissetmek
sich treffen|treffe mich|buluşmak
treffen|treffe|karşılaşmak
besuchen|besuche|ziyaret etmek
einladen|lade ein|davet etmek
feiern|feiere|kutlamak
tanzen|tanze|dans etmek
singen|singe|şarkı söylemek
malen|male|boyamak, resim yapmak
zeichnen|zeichne|çizmek
fotografieren|fotografiere|fotoğraf çekmek
filmen|filme|video çekmek
sammeln|sammle|toplamak
suchen|suche|aramak
sich kümmern|kümmere mich|ilgilenmek
pflegen|pflege|bakım yapmak
füttern|füttere|beslemek
füllen|fülle|doldurmak
leeren|leere|boşaltmak
werfen|werfe|atmak
fangen|fange|yakalamak
halten|halte|tutmak
lassen|lasse|bırakmak
ziehen|ziehe|çekmek
drücken|drücke|basmak, itmek
schieben|schiebe|itmek
heben|hebe|kaldırmak
senken|senke|indirmek
legen|lege|koymak, yatırmak
setzen|setze|oturtmak
hängen|hänge|asmak
verbinden|verbinde|bağlamak
trennen|trenne|ayırmak
teilen|teile|paylaşmak, bölmek
mischen|mische|karıştırmak
rühren|rühre|karıştırmak
probieren|probiere|denemek, tatmak
schmecken|schmecke|tadı olmak
riechen|rieche|koklamak
berühren|berühre|dokunmak
berühren|berühre|dokunmak
verletzen|verletze|yaralamak
heilen|heile|iyileşmek
gesund werden|werde gesund|iyileşmek
husten|huste|öksürmek
niesen|niese|hapşırmak
atmen|atme|nefes almak
untersuchen|untersuche|muayene etmek
behandeln|behandle|tedavi etmek
verschreiben|verschreibe|reçete etmek
anmelden|melde an|kayıt yaptırmak
abmelden|melde ab|kaydını sildirmek
unterschreiben|unterschreibe|imzalamak
ausfüllen|fülle aus|doldurmak
beantragen|beantrage|başvurmak
erlauben|erlaube|izin vermek
verbieten|verbiete|yasaklamak
kontrollieren|kontrolliere|kontrol etmek
prüfen|prüfe|kontrol etmek
bestehen|bestehe|geçmek, başarmak
wiederholen|wiederhole|tekrarlamak
verbessern|verbessere|iyileştirmek
übersetzen|übersetze|çevirmek
aussprechen|spreche aus|telaffuz etmek
üben|übe|pratik yapmak
organisieren|organisiere|organize etmek
vorbereiten|bereite vor|hazırlamak
aufpassen|passe auf|dikkat etmek
aufmachen|mache auf|açmak
zumachen|mache zu|kapatmak
mitbringen|bringe mit|yanında getirmek
mitnehmen|nehme mit|yanına almak
abwaschen|wasche ab|yıkamak
wegwerfen|werfe weg|atmak
aufbauen|baue auf|kurmak
abbauen|baue ab|sökmek
anprobieren|probiere an|denemek (kıyafet)
reservieren|reserviere|rezervasyon yapmak
stornieren|storniere|iptal etmek
empfehlen|empfehle|tavsiye etmek
vergleichen|vergleiche|karşılaştırmak
unterscheiden|unterscheide|ayırt etmek
bedeuten|bedeute|anlamına gelmek
beschreiben|beschreibe|tarif etmek
berichten|berichte|rapor etmek
informieren|informiere|bilgilendirmek
mitteilen|teile mit|bildirmek
warnen|warne|uyarmak
versprechen|verspreche|söz vermek
vergessen|vergesse|unutmak
sich merken|merke mir|aklında tutmak
merken|merke|fark etmek
sich vorstellen|stelle mich vor|kendini tanıtmak
vorstellen|stelle vor|tanıtmak
kennenlernen|lerne kennen|tanışmak
verabreden|verabrede|buluşmak için sözleşmek
abmachen|mache ab|kararlaştırmak
absagen|sage ab|iptal etmek
zusagen|sage zu|kabul etmek
teilnehmen|nehme teil|katılmak
mitmachen|mache mit|katılmak
sich anmelden|melde mich an|kayıt olmak
sich bewerben|bewerbe mich|işe başvurmak
kündigen|kündige|işten ayrılmak, feshetmek
unterschätzen|unterschätze|hafife almak

`.trim();

const words = [];
for (const line of nounRows.split(/\n/)) {
  const [sg, pl, tr] = line.split('|');
  if (!sg || !pl || !tr) continue;
  words.push({de: sg, tr: [tr], ex: `Das ist ${sg.toLowerCase()}.`});
  if (pl.toLowerCase() !== sg.toLowerCase()) words.push({de: pl, tr: [tr], ex: `Hier sind mehrere ${pl.toLowerCase()}.`});
}
for (const line of verbRows.split(/\n/)) {
  const [inf, ich, tr] = line.split('|');
  if (!inf || !ich || !tr) continue;
  words.push({de: inf, tr: [tr], ex: `Ich möchte ${inf} ${inf.endsWith('en') ? '' : ''}.`.replace(/\s+\./g,'.')});
  if (ich.toLowerCase() !== inf.toLowerCase()) words.push({de: ich, tr: [tr], ex: `Ich ${ich}.`});
}
// Deduplizieren; bei eş anlamlı tekrarlar ilk kart korunur.
const uniqueWords = [...new Map(words.map(w => [w.de.toLocaleLowerCase('de-DE'), w])).values()];
// En az 500 kart olması için A1/A2 kelime biçimlerinden kart oluşturulur.
const fallback = [
['gut','iyi'],['schlecht','kötü'],['groß','büyük'],['klein','küçük'],['alt','yaşlı/eski'],['jung','genç'],['neu','yeni'],['schön','güzel'],['teuer','pahalı'],['billig','ucuz'],['schnell','hızlı'],['langsam','yavaş'],['leicht','hafif/kolay'],['schwer','ağır/zor'],['warm','ılık'],['kalt','soğuk'],['heiß','sıcak'],['müde','yorgun'],['krank','hasta'],['gesund','sağlıklı'],['hungrig','aç'],['durstig','susamış'],['glücklich','mutlu'],['traurig','üzgün'],['freundlich','nazik'],['wichtig','önemli'],['richtig','doğru'],['falsch','yanlış'],['einfach','basit'],['schwierig','zor'],['interessant','ilginç'],['langweilig','sıkıcı'],['möglich','mümkün'],['fertig','hazır'],['offen','açık'],['geschlossen','kapalı'],['pünktlich','dakik'],['spät','geç'],['früh','erken'],['laut','gürültülü'],['leise','sessiz'],['sauber','temiz'],['schmutzig','kirli'],['voll','dolu'],['leer','boş'],['frei','boş/serbest'],['besetzt','dolu/meşgul'],['allein','yalnız'],['zusammen','birlikte'],['immer','her zaman'],['manchmal','bazen'],['oft','sık sık'],['selten','nadiren'],['nie','asla'],['heute','bugün'],['gestern','dün'],['morgen','yarın'],['jetzt','şimdi'],['später','daha sonra'],['bald','yakında'],['hier','burada'],['dort','orada'],['links','sol'],['rechts','sağ'],['geradeaus','dümdüz'],['oben','yukarıda'],['unten','aşağıda'],['drinnen','içeride'],['draußen','dışarıda'],['vielleicht','belki'],['natürlich','elbette'],['leider','maalesef'],['deshalb','bu nedenle'],['trotzdem','buna rağmen'],['also','yani'],['aber','ama'],['oder','veya'],['weil','çünkü'],['wenn','eğer/-dığı zaman'],['dass','-diğini'],['obwohl','-mesine rağmen'],['bevor','-meden önce'],['nachdem','-dikten sonra'],['während','sırasında'],['gegen','karşı'],['ohne','-sız'],['mit','ile'],['für','için'],['von','-den'],['aus','-den/içinden'],['bei','yanında/-de'],['nach','-e doğru/sonra'],['zu','-e'],['über','üzerinde/hakkında'],['unter','altında'],['zwischen','arasında'],['neben','yanında'],['vor','önünde/önce'],['hinter','arkasında'],['in','içinde'],['an','-de/yanında'],['auf','üstünde'],['der','belirli artikel'],['die','belirli artikel'],['das','belirli artikel'],['ein','bir'],['eine','bir'],['kein','hiç/bir değil'],['nicht','değil'],['nichts','hiçbir şey'],['jemand','birisi'],['niemand','hiç kimse'],['etwas','bir şey'],['alles','her şey'],['jeder','her biri'],['andere','başka'],['beide','ikisi de'],['viele','çok sayıda'],['wenige','az sayıda'],['mehr','daha fazla'],['weniger','daha az'],['genug','yeterli'],['besonders','özellikle'],['zusätzlich','ek olarak'],['gemeinsam','ortak'],['verschieden','farklı'],['ähnlich','benzer'],['normal','normal'],['praktisch','pratik'],['bequem','rahat'],['modern','modern'],['kaputt','bozuk'],['sicher','güvenli'],['gefährlich','tehlikeli'],['nötig','gerekli'],['bereit','hazır'],['bekannt','tanınmış/bilinen'],['beliebt','sevilen'],['berühmt','ünlü'],['höflich','kibar'],['ehrlich','dürüst'],['ruhig','sakin'],['nervös','gergin'],['stark','güçlü'],['schwach','zayıf'],['fit','formda'],['menschlich','insani'],['öffentlich','kamusal'],['privat','özel'],['lokal','yerel'],['international','uluslararası'],['deutsch','Alman/Almanca'],['türkisch','Türk/Türkçe'],['europäisch','Avrupalı'],['kostenlos','ücretsiz'],['gratis','bedava'],['bar','nakit'],['digital','dijital'],['schriftlich','yazılı'],['mündlich','sözlü'],['persönlich','kişisel/yüz yüze'],['gemeinsam','birlikte'],['wöchentlich','haftalık'],['monatlich','aylık'],['jährlich','yıllık'],['täglich','günlük'],['morgens','sabahları'],['abends','akşamları'],['nachts','geceleri'],['zuerst','önce'],['danach','ondan sonra'],['endlich','sonunda'],['sofort','hemen'],['wirklich','gerçekten'],['fast','neredeyse'],['ziemlich','oldukça'],['sehr','çok'],['besonders','özellikle'],['genau','tam olarak'],['ungefähr','yaklaşık'],['zusammen','birlikte'],['getrennt','ayrı'],['vorher','önceden'],['nachher','sonradan'],['vielleicht','belki'],['bestimmt','kesinlikle'],['wahrscheinlich','muhtemelen'],['leider','ne yazık ki'],['gern','severek'],['lieber','tercihen'],['am liebsten','en çok'],['noch','henüz/daha'],['schon','zaten'],['wieder','tekrar'],['weiter','devam'],['zurück','geri'],['weg','uzak/uzakta'],['hin','oraya doğru'],['her','buraya doğru'],['dazu','buna ek olarak'],['darum','bu yüzden'],['deswegen','bu yüzden'],['daher','bundan dolayı'],['denn','çünkü'],['doch','oysa/yine de'],['sondern','aksine'],['sowohl','hem'],['entweder','ya'],['weder','ne de'],['ob','olup olmadığını'],['falls','olursa'],['damit','böylece'],['trotz','-e rağmen'],['wegen','nedeniyle'],['seit','-den beri'],['bis','-e kadar'],['ab','-den itibaren'],['währenddessen','bu sırada'],['außerdem','ayrıca'],['jedoch','ancak'],['deshalb','bu yüzden'],['zwar','gerçi'],['dann','sonra'],['erst','ilk önce'],['zuletzt','en son'],['mindestens','en az'],['höchstens','en fazla'],['insgesamt','toplamda'],['einzeln','tek tek'],['meistens','çoğunlukla'],['normalerweise','normalde'],['regelmäßig','düzenli'],['gelegentlich','ara sıra'],['öffentlich','halka açık'],['dringend','acil'],['direkt','doğrudan'],['indirekt','dolaylı'],['automatisch','otomatik'],['manuell','elle'],['gemeinsam','ortaklaşa'],['allein','tek başına'],['kostenpflichtig','ücretli'],['erlaubt','izin verilen'],['verboten','yasak'],['verfügbar','mevcut'],['notwendig','gerekli'],['unterschiedlich','farklı'],['wahnsinnig','çılgınca'],['zufrieden','memnun'],['unzufrieden','memnun değil'],['überrascht','şaşırmış'],['interessiert','ilgili'],['verheiratet','evli'],['ledig','bekâr'],['geschieden','boşanmış'],['verliebt','âşık'],['mühsam','zahmetli'],['anstrengend','yorucu'],['entspannt','rahatlamış'],['aufgeregt','heyecanlı'],['besorgt','endişeli'],['stolz','gururlu'],['neugierig','meraklı'],['geduldig','sabırlı'],['ungeduldig','sabırsız'],['hilfsbereit','yardımsever'],['ordentlich','düzenli'],['unordentlich','dağınık'],['vorsichtig','dikkatli'],['unvorsichtig','dikkatsiz'],['pünktlich','dakik'],['un pünktlich','dakik olmayan'],['sportlich','sportif'],['musikalisch','müzikal'],['kreativ','yaratıcı'],['aktiv','aktif'],['passiv','pasif'],['positiv','olumlu'],['negativ','olumsuz'],['freundlich','arkadaşça'],['unfreundlich','kaba'],['saftig','sulu'],['süß','tatlı'],['sauer','ekşi'],['bitter','acı'],['salzig','tuzlu'],['scharf','baharatlı/acılı'],['frisch','taze'],['gefroren','donmuş'],['gekocht','haşlanmış/pişmiş'],['gebraten','kızarmış'],['roh','çiğ'],['weich','yumuşak'],['hart','sert'],['trocken','kuru'],['nass','ıslak'],['glatt','düz/kaygan'],['rund','yuvarlak'],['eckig','köşeli'],['breit','geniş'],['eng','dar'],['tief','derin'],['hoch','yüksek'],['niedrig','alçak'],['dick','kalın/şişman'],['dünn','ince/zayıf'],['lang','uzun'],['kurz','kısa'],['nah','yakın'],['fern','uzak'],['hell','aydınlık'],['dunkel','karanlık'],['bunt','renkli'],['blass','soluk'],['golden','altın rengi'],['silbern','gümüş rengi'],['braun','kahverengi'],['grau','gri'],['rosa','pembe'],['lila','mor'],['orange','turuncu'],['beige','bej'],['türkis','turkuaz'],['violett','menekşe rengi']
];
for (const [de,tr] of fallback) uniqueWords.push({de, tr:[tr], ex:`Das Wort „${de}“ bedeutet ${tr}.`});
const wordsFinal = [...new Map(uniqueWords.map(w => [w.de.toLocaleLowerCase('de-DE'),w])).values()].slice(0, 500);

const $ = id => document.getElementById(id);
const localDateKey = () => new Date().toLocaleDateString('sv-SE');
function loadSave(){
  try { return JSON.parse(localStorage.getItem('deutschQuestSave') || '{}'); }
  catch { return {}; }
}
const saved = loadSave();
if (!Array.isArray(saved.done)) saved.done = [];
if (!Number.isFinite(saved.coins)) saved.coins = 0;
if (!Number.isFinite(saved.learned)) saved.learned = 0;
if (saved.date !== localDateKey()) { saved.learned = 0; saved.doneToday = []; saved.date = localDateKey(); }
if (!Array.isArray(saved.doneToday)) saved.doneToday = [];
let index = 0, answered = false, gameWords = [], gameMatches = 0, selectedGerman = null;
function save(){ localStorage.setItem('deutschQuestSave', JSON.stringify(saved)); }
function normalize(value){ return String(value ?? '').trim().toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[.!?]/g,'').replace(/\s+/g,' '); }
function updateProgress(){
  const count = $('learnedCount') || $('learned');
  if (count) count.textContent = `${Math.min(saved.learned, wordsFinal.length)} / ${wordsFinal.length}`;
  const coins = $('coins'); if (coins) coins.textContent = saved.coins;
  const bar = $('progressBar') || $('progress');
  if (bar) { const pct = Math.min(100, saved.done.length / wordsFinal.length * 100); if ('value' in bar) bar.value = pct; else bar.style.width = `${pct}%`; }
  const total = $('totalWords'); if (total) total.textContent = wordsFinal.length;
}
function renderWord(){
  const word = wordsFinal[index % wordsFinal.length]; answered = false;
  const de = $('wordGerman') || $('germanWord') || $('word'); if (de) de.textContent = word.de;
  const ex = $('wordExample') || $('example'); if (ex) ex.textContent = word.ex;
  const input = $('answerInput') || $('translationInput') || $('answer'); if (input) input.value = '';
  const feedback = $('feedback'); if (feedback) feedback.textContent = '';
  const number = $('wordNumber'); if (number) number.textContent = `${index + 1} / ${wordsFinal.length}`;
  updateProgress();
}
function checkAnswer(){
  if (answered) return;
  const input = $('answerInput') || $('translationInput') || $('answer');
  const feedback = $('feedback'); const word = wordsFinal[index % wordsFinal.length];
  if (!input) { if (feedback) feedback.textContent = `Türkçesi: ${word.tr.join(', ')}`; return; }
  const given = normalize(input.value);
  const correct = word.tr.some(t => normalize(t) === given);
  if (!correct) { if (feedback) feedback.textContent = `Tekrar dene. Anlamı: ${word.tr.join(', ')}`; return; }
  answered = true;
  const wordIndex = index % wordsFinal.length;
  if (!saved.done.includes(wordIndex)) { saved.done.push(wordIndex); saved.coins += 5; }
  if (!saved.doneToday.includes(wordIndex)) { saved.doneToday.push(wordIndex); saved.learned += 1; }
  if (feedback) feedback.textContent = 'Doğru! +5 puan';
  save(); updateProgress();
}
function nextWord(){ index = (index + 1) % wordsFinal.length; renderWord(); }
function startGame(){
  const pool = [...wordsFinal].sort(() => Math.random() - .5).slice(0,4);
  gameWords = pool; gameMatches = 0; selectedGerman = null;
  const area = $('gameArea') || $('matchingGame'); if (!area) return;
  area.innerHTML = '';
  const left = document.createElement('div'), right = document.createElement('div');
  left.className = 'game-column'; right.className = 'game-column';
  const translations = pool.map(w => w.tr[0]).sort(() => Math.random()-.5);
  pool.forEach((w,i)=>{ const b=document.createElement('button'); b.textContent=w.de; b.type='button'; b.className='game-option'; b.onclick=()=>{selectedGerman=w; left.querySelectorAll('button').forEach(x=>x.classList.remove('selected')); b.classList.add('selected');}; left.appendChild(b); });
  translations.forEach(t=>{ const b=document.createElement('button'); b.textContent=t; b.type='button'; b.className='game-option'; b.onclick=()=>{ if(!selectedGerman) return; if(selectedGerman.tr[0]===t){ b.disabled=true; b.classList.add('correct'); left.querySelectorAll('button').forEach(x=>{if(x.textContent===selectedGerman.de)x.disabled=true;}); gameMatches++; selectedGerman=null; if(gameMatches===4){saved.coins+=10;save();updateProgress();const msg=$('gameFeedback');if(msg)msg.textContent='Hepsi doğru! +10 puan';} } else {b.classList.add('wrong');setTimeout(()=>b.classList.remove('wrong'),500);} }; right.appendChild(b); });
  area.append(left,right);
}
function setupTabs(){
  document.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>{
    const target=btn.dataset.tab;
    document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b===btn));
    document.querySelectorAll('[data-panel]').forEach(panel=>panel.hidden=panel.dataset.panel!==target);
  }));
}
function grammarQuiz(){
  const questions=[
    {q:'Ich ___ aus der Türkei.',a:['komme','kommt','kommen'],correct:'komme'},
    {q:'Du ___ heute Zeit.',a:['habe','hast','hat'],correct:'hast'},
    {q:'Gestern ___ ich krank.',a:['war','waren','bist'],correct:'war'},
    {q:'Wir ___ Deutsch.',a:['lernt','lernen','lerne'],correct:'lernen'},
    {q:'Ich ___ einen Kaffee.',a:['möchte','möchtest','möchten'],correct:'möchte'},
    {q:'Er ___ jeden Tag zur Arbeit.',a:['gehen','geht','gehe'],correct:'geht'},
    {q:'Ich habe gestern Pizza ___.',a:['essen','gegessen','esst'],correct:'gegessen'},
    {q:'Das Buch liegt ___ dem Tisch.',a:['auf','mit','zu'],correct:'auf'}
  ];
  const q=questions[Math.floor(Math.random()*questions.length)];
  const area=$('grammarQuestion')||$('grammarQuiz'); if(!area)return;
  area.innerHTML=''; const p=document.createElement('p');p.textContent=q.q;area.appendChild(p);
  q.a.forEach(a=>{const b=document.createElement('button');b.type='button';b.textContent=a;b.onclick=()=>{const out=$('grammarFeedback');if(out)out.textContent=a===q.correct?'Doğru!':'Yanlış. Doğru cevap: '+q.correct;};area.appendChild(b);});
}
document.addEventListener('DOMContentLoaded',()=>{
  const check=$('checkAnswer')||$('checkBtn'); if(check)check.addEventListener('click',checkAnswer);
  const next=$('nextWord')||$('nextBtn'); if(next)next.addEventListener('click',nextWord);
  const input=$('answerInput')||$('translationInput')||$('answer'); if(input)input.addEventListener('keydown',e=>{if(e.key==='Enter')checkAnswer();});
  const game=$('startGame')||$('startGameBtn'); if(game)game.addEventListener('click',startGame);
  const grammar=$('newGrammarQuestion')||$('grammarNext'); if(grammar)grammar.addEventListener('click',grammarQuiz);
  setupTabs(); renderWord(); startGame(); grammarQuiz();
  console.info(`Deutsch Quest: ${wordsFinal.length} einzigartige Karten geladen.`);
});
