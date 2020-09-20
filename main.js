//Ku pamieci wszystkich osob czytajcych ten kod którzy zgnieli smiercia tragiczna [*]
//Ilosc ofiar:1

var monthData = new Date()
var monthNumber;
var currentMonth;
var wordLength = [75, 63, 51, 96, 96, 96, 96, 96, 118, 96, 78, 96];
var randomNumber = [];
var gameCounter = 20;
var wordAng = [];
var wordPl = [];
var loopCounter;
localStorage.setItem("gameCounter", 20);

//////////////////////////
//Funkcje Logiczne
//////////////////////////

//Funkcja dzielaca zdania z tablicy na pojedyncze slowa
function splitingWord(chosenMonth) {
    var word = [
        //Styczen
        [
            `1. afford - stać na coś, pozwalać sobie na coś
2. appliance - urządzenie, sprzęt
3. Basic necessities - podstawowe potrzeby 
4. basic items - podstawowe rzeczy, przedmioty 
5. brand - gatunek, marka, znak firmowy
6. changing room - przymierzalnia
7. choice - wybór
8. complain about - narzekać na
9. consume - konsumować, zużywać
10. consumerism - konsumpcjonizm
11. cost - koszt, kosztować
12. damaged goods - zniszczone towary 
13. designer brands - znane/drogie marki, rzeczy markowe
14. dishwasher - zmywarka
15. extra charge - dodatkowa opłata
16. fair price - odpowiednia cena
17. goods - towary
18. household appliances - sprzęt domowy
19. logo - logo, znak firmowy
20. price - cena
21. purchase - kupować, zakup
22. shop - sklep, robić zakupy
23. shopper - kupujący, klient
24. staff - personel
25. supply - dostawa, dostarczać coś
26. value for money - warty, warte swojej ceny 
27. window shopping - oglądanie wystaw sklepowych
28. at the market - na targowisku
29. boutique - sklep z modą odzieżowa
30. branch - oddział 
31. chain store - sklep danej sieci
32. department store - dom towarowy 
33. shopping mall centre - centrum handlowe
34. ask for a refund - prosić o zwrot pieniędzy
35. by card - płatne karta
36. cash - gotówka
37. In cash - płatne gotówką
38. pay a fortune - zapłacić dużo pieniędzy
39. pay by card - płacić kartą
40. pay cash - płacić gotówką
41. receipt - paragon
42. refund - zwrot pieniędzy
43. save - oszczędzać
44. spend on - wydawać pieniądze 
45. advertisement - ogłoszenie, reklama
46. announcement - ogłoszenie, zawiadomienie
47. assure - zapewniać gwarantować
48. billboard - duża tablica reklamowa
49. commercial - płatna reklama
50. create one's brand - kreować własną markę
51. discount - rabat, ulga
52. encourage - zachęcać, popierać
53. get a discount - dostać rabat/zniżkę
54. give a discount - udzielać rabatu zniżki
55. give out flyers - rozdawać ulotki
56. guarantee - gwarancja
57. image - wizerunek, obraz
58. jingle - brzeczec, dzwonić
59. market research - badanie rynku
60. marketing campaign - kampania marketingowa 
61. mass audience - odbiorca masowy
62. memorable slogan - łatwy do zapamiętania slogan
63. offer - oferować, oferta
64. promate a new product - promować nowy produkt
65. reassure - zapewniać, uspokajać
66. sponsor - sponsor, sponsorować
67. voucher - kwit, bon
68. operate a machine - obsługiwać urządzenie, automat
69. PIN - osobisty numer identyfikacyjny
70. push - pchać, naciskać
71. put the card into - wkładać kartę do
72. press ENTER - wciskać enter
73. select - wybierać
74. take the card out - wyjmować kartę
75. type in the PIN number - wprowadzać numer pin`
        ],
        //Luty
        [
            `1. akcent - akcent 
2. adopted - przyjęty 
3. afrikaans - afrykanerski
4. basque - Bask, baskija
5. bilingual - dwujęzyczny
6. catalan - katalonczyk, katalonka
7. creole - kreol, kreolka, kreolski
8. descendant - potomek
9. feature - cecha
10. hindi - język urzędowy w indiach
11. influence - wpływ
12. informal - nieoficjalny, nieformalny
13. Irish - Irlandczyk 
14. irish gaelic - irlandzki celtycki język 
15. jamaican - jamajczyk, Jamajka, jamajski
16. jargon - żargon 
17. Latin - łacina
18. Latvian - Łotysz, Łotyszka
19. Maltese - maltańczyk, maltanka
20. mother tongue - język ojczysty
21. native - rodzimy mieszkaniec 
22. non native - obcokrajowiec
23. official language - język oficjalny 
24. pick up a language - przyswajać język
25. pronunciation - wymowa
26. rising intonation - rosnąca intonacja
27. south africa - Afryka Południowa
28. tell them apart - rozróżnić rzeczy/osoby
29. the caribbean - karaiby
30. widely spoken - powszechnie używany
31. act as a bridge - być łącznikiem
32. agreement - porozumienie, umowa, ugoda
33. booth - budka, kabina
34. both parties - obydwie grupy/strony
35. bring benefits - przynosić korzyści
36. brussels - Bruksela
37. direct translation - bezpośrednie tłumaczenie
38. encourage - zachęcać
39. the EU citizen - obywatel unii europejskiej
40. the European Commission - komisja Europejska
41. interfere with communication - zakłócać komunikację 
42. Interpreter - tłumacz 
43. minority - mniejszość
44. misunderstandings - nieporozumienia 
45. modern languages - języki współczesne 
46. natural way - języki współczesne
47. per citizen - na obywatela 
48. politician - polityk 
49. prepare to compromise - przygotować kompromis
50. preserve democracy - zachować demokrację 
51. provide jobs - dawać pracę
52. put sth into Polish - tłumaczyć, przekładać na polski
53. semi official status - polnooficialny status
54. solution - rozwiązanie
55. take it in turns - tu: pracować na zmianę
56. translator - tłumacz
57. with a delay - z opóźnieniem 
58. accommodation - zakwaterowanie
59. advantage - zaleta, korzyść
60. brochure - broszura
61. host family - rodzina, która gości u siebie studenta obcokrajowca
62. length of stay - długość pobytu
63. social programme - program socjalny`
        ],
        //Marzec
        [
            `1. akcent - akcent 
2. adopted - tu: przyjęty 
3. afrikaans - afrykanerski
4. basque - Bask, baskija
5. bilingual - dwujęzyczny
6. catalan - katalonczyk, katalonka
7. creole - kreol, kreolka, kreolski
8. descendant - potomek
9. feature - cecha
10. hindi - język urzędowy w indiach
11. influence - wpływ
12. informal - nieoficjalny, nieformalny
13. Irish - Irlandczyk 
14. irish gaelic - irlandzki celtycki język 
15. jamaican - jamajczyk, Jamajka, jamajski
16. jargon - żargon 
17. Latin - łacina
18. Latvian - Łotysz, Łotyszka
19. Maltese - maltańczyk, maltanka
20. mother tongue - język ojczysty
21. native - rodzimy mieszkaniec 
22. non native - obcokrajowiec
23. official language - język oficjalny 
24. pick up a language - przyswajać język
25. pronunciation - wymowa
26. rising intonation - rosnąca intonacja
27. south africa - Afryka Południowa
28. tell them apart - rozróżnić rzeczy/osoby
29. the caribbean - karaiby
30. widely spoken - powszechnie używany
31. act as a bridge - być łącznikiem
32. agreement - porozumienie, umowa, ugoda
33. booth - budka, kabina
34. both parties - obydwie grupy/strony
35. bring benefits - przynosić korzyści
36. brussels - Bruksela
37. direct translation - bezpośrednie tłumaczenie
38. encourage - zachęcać
39. the EU citizen - obywatel unii europejskiej
40. the European Commission - komisja Europejska
41. interfere with communication - zakłócać komunikację 
42. Interpreter - tłumacz 
43. minority - mniejszość
44. misunderstandings - nieporozumienia 
45. modern languages - języki współczesne 
46. natural way - języki współczesne
47. per citizen - na obywatela 
48. politician - polityk 
49. prepare to compromise - przygotować kompromis
50. preserve democracy - zachować demokrację 
51. provide jobs - dawać pracę`
        ],
        //Kwiecien
        [
            "4. alidi - alidi 2. at gunpoint - pod grozba uzycia broni 3. beat sb up - pobic 4. burglar - wlamywacz 5. commit a crime - popelnic przestepstwo 6. criminal - przestepca 7. escape - uciekac 8. force - sila 9. forger - falszerz 10. get out of - wyjsc 11. getaway - ucieczka 12. hand over - przekazywac 13. hand sth in - wreczyc 14. hide - ukryc 15. hold up - napad rabunkowy 16. illegal - nielegalny 17. mugger - bandyta 18. mugging - kradzierz z rozbojem 19. murder - morderstwo 20. murderer - morderca 21. pickpocket - kieszonkowiec 22. prisoner - wiezien 23. ransom - okup 24. rob - rabowac 25. robber - zlodziej 26. robbery - napad  27. shoplifter - zlodziej sklepowy 28. shoplifting - kradzierz sklepowa 29. suspect - podejrzany 30. suspicious - podejrzany 31. suspiciously - podejrzliwie 32. theft - kradziez 33. thieft - zlodziej 34. threaten - grozic 35. tick off - dawac reprymende 36. violence - przemoc 37. appear - pojawiac sie 38. appearence - wygląd 39. author - autor 40. carry out duties - wypelniac obowiazki 41. clever diagnosis - inteligentan diagnoza 42. come out - ukazac sie 43. cuff - mankiet 44. carved pipe - rzezbiona fajka 45. deduce - wnioskowac 46. diary - dziennik 47. edition - wydanie 48. fictional - fikcyjny 49. immediate success - natychmiastowy sukces 50. indicate - wskazywac 51. insult - zniewazac 52. magnifying glass - szklo powiekszajace 53. notice - zauwazyc 54. observation - obserwacja 55. plot - fabula 56. relationships - kontakty 57. shopkeeper - kupiec 58. smooth patch - gładka lata 59. solve mysteries - rozwiazywac zagadki 60. tattoo - tatuaz 61. tradesman - handlowiec 62. trai - szkolic 63. who is behind it - kto za tym stoi 64. accuse sb of sth - oskarzyc kogos o cos 65. accused of - oskarzony o 66. arrest - aresztowac 67. cctv - kamera przemyslowa 68. avidence - dowody 69. fill in a form - wypelniac formularz 70. fingerprint - odcisk palca 71. forensic - sadowy 72. murder case - sprawa o morderstwo 73. proof - dowod 74. prosecute - oskarzac 75. punish - karac kogos 76. report - raport 77. scene of crime - miejsce przestepstwa 78. traces - slady 79. confess guilt - przyznawac sie do winy 80. court -sad 81. defendant - oskarzony 82. end up in jail - trafic do wiezienia 83. go on trial - miec proces 84. guilty - winny 85. innocent - niewinny 86. judge - sedzia 87. jury - lawa przysieglych 88. lawer - prawnik 89. make statements under oath - zeznawac pod przysiega 90. minor - drobny 91. pass sentence - wydawac wyrok 92. sentence sombady to - skazywac kogos na 93. try - sadzic 94. under oath - pod przysiega 95. victim - ofiara 96. witness - slabosc"
        ],
        //Maj
        [
            "5. alidi - alidi 2. at gunpoint - pod grozba uzycia broni 3. beat sb up - pobic 4. burglar - wlamywacz 5. commit a crime - popelnic przestepstwo 6. criminal - przestepca 7. escape - uciekac 8. force - sila 9. forger - falszerz 10. get out of - wyjsc 11. getaway - ucieczka 12. hand over - przekazywac 13. hand sth in - wreczyc 14. hide - ukryc 15. hold up - napad rabunkowy 16. illegal - nielegalny 17. mugger - bandyta 18. mugging - kradzierz z rozbojem 19. murder - morderstwo 20. murderer - morderca 21. pickpocket - kieszonkowiec 22. prisoner - wiezien 23. ransom - okup 24. rob - rabowac 25. robber - zlodziej 26. robbery - napad  27. shoplifter - zlodziej sklepowy 28. shoplifting - kradzierz sklepowa 29. suspect - podejrzany 30. suspicious - podejrzany 31. suspiciously - podejrzliwie 32. theft - kradziez 33. thieft - zlodziej 34. threaten - grozic 35. tick off - dawac reprymende 36. violence - przemoc 37. appear - pojawiac sie 38. appearence - wygląd 39. author - autor 40. carry out duties - wypelniac obowiazki 41. clever diagnosis - inteligentan diagnoza 42. come out - ukazac sie 43. cuff - mankiet 44. carved pipe - rzezbiona fajka 45. deduce - wnioskowac 46. diary - dziennik 47. edition - wydanie 48. fictional - fikcyjny 49. immediate success - natychmiastowy sukces 50. indicate - wskazywac 51. insult - zniewazac 52. magnifying glass - szklo powiekszajace 53. notice - zauwazyc 54. observation - obserwacja 55. plot - fabula 56. relationships - kontakty 57. shopkeeper - kupiec 58. smooth patch - gładka lata 59. solve mysteries - rozwiazywac zagadki 60. tattoo - tatuaz 61. tradesman - handlowiec 62. trai - szkolic 63. who is behind it - kto za tym stoi 64. accuse sb of sth - oskarzyc kogos o cos 65. accused of - oskarzony o 66. arrest - aresztowac 67. cctv - kamera przemyslowa 68. avidence - dowody 69. fill in a form - wypelniac formularz 70. fingerprint - odcisk palca 71. forensic - sadowy 72. murder case - sprawa o morderstwo 73. proof - dowod 74. prosecute - oskarzac 75. punish - karac kogos 76. report - raport 77. scene of crime - miejsce przestepstwa 78. traces - slady 79. confess guilt - przyznawac sie do winy 80. court -sad 81. defendant - oskarzony 82. end up in jail - trafic do wiezienia 83. go on trial - miec proces 84. guilty - winny 85. innocent - niewinny 86. judge - sedzia 87. jury - lawa przysieglych 88. lawer - prawnik 89. make statements under oath - zeznawac pod przysiega 90. minor - drobny 91. pass sentence - wydawac wyrok 92. sentence sombady to - skazywac kogos na 93. try - sadzic 94. under oath - pod przysiega 95. victim - ofiara 96. witness - slabosc"
        ],
        //Czeriwec
        [
            "6. alidi - alidi 2. at gunpoint - pod grozba uzycia broni 3. beat sb up - pobic 4. burglar - wlamywacz 5. commit a crime - popelnic przestepstwo 6. criminal - przestepca 7. escape - uciekac 8. force - sila 9. forger - falszerz 10. get out of - wyjsc 11. getaway - ucieczka 12. hand over - przekazywac 13. hand sth in - wreczyc 14. hide - ukryc 15. hold up - napad rabunkowy 16. illegal - nielegalny 17. mugger - bandyta 18. mugging - kradzierz z rozbojem 19. murder - morderstwo 20. murderer - morderca 21. pickpocket - kieszonkowiec 22. prisoner - wiezien 23. ransom - okup 24. rob - rabowac 25. robber - zlodziej 26. robbery - napad  27. shoplifter - zlodziej sklepowy 28. shoplifting - kradzierz sklepowa 29. suspect - podejrzany 30. suspicious - podejrzany 31. suspiciously - podejrzliwie 32. theft - kradziez 33. thieft - zlodziej 34. threaten - grozic 35. tick off - dawac reprymende 36. violence - przemoc 37. appear - pojawiac sie 38. appearence - wygląd 39. author - autor 40. carry out duties - wypelniac obowiazki 41. clever diagnosis - inteligentan diagnoza 42. come out - ukazac sie 43. cuff - mankiet 44. carved pipe - rzezbiona fajka 45. deduce - wnioskowac 46. diary - dziennik 47. edition - wydanie 48. fictional - fikcyjny 49. immediate success - natychmiastowy sukces 50. indicate - wskazywac 51. insult - zniewazac 52. magnifying glass - szklo powiekszajace 53. notice - zauwazyc 54. observation - obserwacja 55. plot - fabula 56. relationships - kontakty 57. shopkeeper - kupiec 58. smooth patch - gładka lata 59. solve mysteries - rozwiazywac zagadki 60. tattoo - tatuaz 61. tradesman - handlowiec 62. trai - szkolic 63. who is behind it - kto za tym stoi 64. accuse sb of sth - oskarzyc kogos o cos 65. accused of - oskarzony o 66. arrest - aresztowac 67. cctv - kamera przemyslowa 68. avidence - dowody 69. fill in a form - wypelniac formularz 70. fingerprint - odcisk palca 71. forensic - sadowy 72. murder case - sprawa o morderstwo 73. proof - dowod 74. prosecute - oskarzac 75. punish - karac kogos 76. report - raport 77. scene of crime - miejsce przestepstwa 78. traces - slady 79. confess guilt - przyznawac sie do winy 80. court -sad 81. defendant - oskarzony 82. end up in jail - trafic do wiezienia 83. go on trial - miec proces 84. guilty - winny 85. innocent - niewinny 86. judge - sedzia 87. jury - lawa przysieglych 88. lawer - prawnik 89. make statements under oath - zeznawac pod przysiega 90. minor - drobny 91. pass sentence - wydawac wyrok 92. sentence sombady to - skazywac kogos na 93. try - sadzic 94. under oath - pod przysiega 95. victim - ofiara 96. witness - slabosc"
        ],
        //Lipiec
        [
            "7. alidi - alidi 2. at gunpoint - pod grozba uzycia broni 3. beat sb up - pobic 4. burglar - wlamywacz 5. commit a crime - popelnic przestepstwo 6. criminal - przestepca 7. escape - uciekac 8. force - sila 9. forger - falszerz 10. get out of - wyjsc 11. getaway - ucieczka 12. hand over - przekazywac 13. hand sth in - wreczyc 14. hide - ukryc 15. hold up - napad rabunkowy 16. illegal - nielegalny 17. mugger - bandyta 18. mugging - kradzierz z rozbojem 19. murder - morderstwo 20. murderer - morderca 21. pickpocket - kieszonkowiec 22. prisoner - wiezien 23. ransom - okup 24. rob - rabowac 25. robber - zlodziej 26. robbery - napad  27. shoplifter - zlodziej sklepowy 28. shoplifting - kradzierz sklepowa 29. suspect - podejrzany 30. suspicious - podejrzany 31. suspiciously - podejrzliwie 32. theft - kradziez 33. thieft - zlodziej 34. threaten - grozic 35. tick off - dawac reprymende 36. violence - przemoc 37. appear - pojawiac sie 38. appearence - wygląd 39. author - autor 40. carry out duties - wypelniac obowiazki 41. clever diagnosis - inteligentan diagnoza 42. come out - ukazac sie 43. cuff - mankiet 44. carved pipe - rzezbiona fajka 45. deduce - wnioskowac 46. diary - dziennik 47. edition - wydanie 48. fictional - fikcyjny 49. immediate success - natychmiastowy sukces 50. indicate - wskazywac 51. insult - zniewazac 52. magnifying glass - szklo powiekszajace 53. notice - zauwazyc 54. observation - obserwacja 55. plot - fabula 56. relationships - kontakty 57. shopkeeper - kupiec 58. smooth patch - gładka lata 59. solve mysteries - rozwiazywac zagadki 60. tattoo - tatuaz 61. tradesman - handlowiec 62. trai - szkolic 63. who is behind it - kto za tym stoi 64. accuse sb of sth - oskarzyc kogos o cos 65. accused of - oskarzony o 66. arrest - aresztowac 67. cctv - kamera przemyslowa 68. avidence - dowody 69. fill in a form - wypelniac formularz 70. fingerprint - odcisk palca 71. forensic - sadowy 72. murder case - sprawa o morderstwo 73. proof - dowod 74. prosecute - oskarzac 75. punish - karac kogos 76. report - raport 77. scene of crime - miejsce przestepstwa 78. traces - slady 79. confess guilt - przyznawac sie do winy 80. court -sad 81. defendant - oskarzony 82. end up in jail - trafic do wiezienia 83. go on trial - miec proces 84. guilty - winny 85. innocent - niewinny 86. judge - sedzia 87. jury - lawa przysieglych 88. lawer - prawnik 89. make statements under oath - zeznawac pod przysiega 90. minor - drobny 91. pass sentence - wydawac wyrok 92. sentence sombady to - skazywac kogos na 93. try - sadzic 94. under oath - pod przysiega 95. victim - ofiara 96. witness - slabosc"
        ],
        //Sierpien
        [
            "8. alidi - alidi 2. at gunpoint - pod grozba uzycia broni 3. beat sb up - pobic 4. burglar - wlamywacz 5. commit a crime - popelnic przestepstwo 6. criminal - przestepca 7. escape - uciekac 8. force - sila 9. forger - falszerz 10. get out of - wyjsc 11. getaway - ucieczka 12. hand over - przekazywac 13. hand sth in - wreczyc 14. hide - ukryc 15. hold up - napad rabunkowy 16. illegal - nielegalny 17. mugger - bandyta 18. mugging - kradzierz z rozbojem 19. murder - morderstwo 20. murderer - morderca 21. pickpocket - kieszonkowiec 22. prisoner - wiezien 23. ransom - okup 24. rob - rabowac 25. robber - zlodziej 26. robbery - napad  27. shoplifter - zlodziej sklepowy 28. shoplifting - kradzierz sklepowa 29. suspect - podejrzany 30. suspicious - podejrzany 31. suspiciously - podejrzliwie 32. theft - kradziez 33. thieft - zlodziej 34. threaten - grozic 35. tick off - dawac reprymende 36. violence - przemoc 37. appear - pojawiac sie 38. appearence - wygląd 39. author - autor 40. carry out duties - wypelniac obowiazki 41. clever diagnosis - inteligentan diagnoza 42. come out - ukazac sie 43. cuff - mankiet 44. carved pipe - rzezbiona fajka 45. deduce - wnioskowac 46. diary - dziennik 47. edition - wydanie 48. fictional - fikcyjny 49. immediate success - natychmiastowy sukces 50. indicate - wskazywac 51. insult - zniewazac 52. magnifying glass - szklo powiekszajace 53. notice - zauwazyc 54. observation - obserwacja 55. plot - fabula 56. relationships - kontakty 57. shopkeeper - kupiec 58. smooth patch - gładka lata 59. solve mysteries - rozwiazywac zagadki 60. tattoo - tatuaz 61. tradesman - handlowiec 62. trai - szkolic 63. who is behind it - kto za tym stoi 64. accuse sb of sth - oskarzyc kogos o cos 65. accused of - oskarzony o 66. arrest - aresztowac 67. cctv - kamera przemyslowa 68. avidence - dowody 69. fill in a form - wypelniac formularz 70. fingerprint - odcisk palca 71. forensic - sadowy 72. murder case - sprawa o morderstwo 73. proof - dowod 74. prosecute - oskarzac 75. punish - karac kogos 76. report - raport 77. scene of crime - miejsce przestepstwa 78. traces - slady 79. confess guilt - przyznawac sie do winy 80. court -sad 81. defendant - oskarzony 82. end up in jail - trafic do wiezienia 83. go on trial - miec proces 84. guilty - winny 85. innocent - niewinny 86. judge - sedzia 87. jury - lawa przysieglych 88. lawer - prawnik 89. make statements under oath - zeznawac pod przysiega 90. minor - drobny 91. pass sentence - wydawac wyrok 92. sentence sombady to - skazywac kogos na 93. try - sadzic 94. under oath - pod przysiega 95. victim - ofiara 96. witness - slabosc"
        ],
                //Wrzesien
        [
            `
,tights - rajstopy,
tracksuit - dres,
trainers - obuwie sportowe,
Tshirt - Tshirt,
trousers - spodnie,
waistcoat-kamizelka,
wellies-kalosze,
cheked-w kratkę,
denim-dzinsowy,
plain-bez wzoru,
spotted-w kropki,
striped- w paski,
woolen-wełniany,
corduroy-sztruksowy,
silk-jedwabny,
suede-zamszowy,
tartan-w kratkę,
velvet-askamitny,
affordable-niedrogi,
baggy-luźny,
(un)comfortable-(nie)wygodny,
dress up - wystroić się,
(un)fashionable-(nie)modny,
fit sb - pasować,
get dressed - ubierać/rozbierać się,
go with sth-pasować,
longsleeved- z długim rękawem,
match sth- pasować do czegośc,
put on sth-ubrac sie ,
running shoes-buty do biegania,
shortsleeved-z krótkim rękawem,
suit sb - pasować komuś,
try sth on - przymierzać,
wear sth- mieć coś na sth,
worn out - znoszony,
beige-beżowy,
chic-elegancki,
closefitting - przylegający,
collar-kołnierz,
flared-rozszerzający sie ku dołowi,
hip-modny,
loose-luźny,
sleeve-rękaw,
trendy-modny,
vest-podkoszulek,
zip-suwak,
absent-minded roztargniony,
amusing-zabawy,
argumentative-kłótliwy,
arrogant-arogancki,
boosy-apodaaktyczny,
brave-odważny,
careful-ostrożny,
caring-troskliwy,
childish-dziecinny,
clever-mądry,
cruel-bezlitosny,
easygoing-opanowany,
funloving-lubiący dobrą zabawe,
country of origin - kraj pochodzenia,
 countryof residence - kraj zamieszkania,
  current address - aktualny adres,
   date of birth - data urodzenia,
    family sure name - nazwisko,
     first name - imię,
     gender - płeć, 
     marital status - stan cywilny,
      middle name - drugie imię,
       nationality - narodowość,
        occupation - zawód,
         postcode - kod pocztowy,
          social media nick - nick na portalach społecznościowych,
           Apperance - wygląd zewnętrzny,
            general - ogólne,
             (un)attractive - (nie)atrakcyjny,
              beautiful - piękny,
               good-looking - przystojny,
                 handsome - przystojny,
                  pretty - ładny,
                   ugly - brzydki,
                    well-dressed - ładnie ubrany,
                     cute - czarujący,
                      gorgeous - wspaniały,
                       plain -  nieatrakcyjny, 
                       scruffy - niechlujny,
                        build- budowa ciała,
                         fat - gruby,
                          muscular - umięśniony,
                           obese - otyły, 
                           of average/medium height - średniego wzrostu,
                            overweight - z nadwagą,
                             plump - puszysty,
                              slim - szczupły,
                               thin/skinny - chudy,
                                well-built - dobrze zbudowany,
                                 chubby - pulchny,
                                  shapely - zgrabny,
                                   slender - szczupły,
                                    stocky - krępy,
                                     hair - włosy,
                                      bald - łysy,
                                       blond/fair - blond,
                                        curly - kręcone,
                                         dark - ciemne,
                                          dyed - farbowane,
                                           shoulder-length - do ramion,
                                            straight - proste,
                                             wavy - falowane,
                                              crew cut - frycura na jeża,
                                               ginger - rude,
                                                redhead - osoba o rudych włosach,
                                                 special features - cechy charakterystyczne,
                                                  beard - broda, dental brace - aparat na zęby,
                                                   freckles - piegi,
                                                    mounstache - wąsy,
                                                    piercing - kolczyk,
                                                     scar - blizna,
                                                      tattoo - tatuaż,`
        ],
        //Pazdziernik
        [
            "10. alidi - alidi 2. at gunpoint - pod grozba uzycia broni 3. beat sb up - pobic 4. burglar - wlamywacz 5. commit a crime - popelnic przestepstwo 6. criminal - przestepca 7. escape - uciekac 8. force - sila 9. forger - falszerz 10. get out of - wyjsc 11. getaway - ucieczka 12. hand over - przekazywac 13. hand sth in - wreczyc 14. hide - ukryc 15. hold up - napad rabunkowy 16. illegal - nielegalny 17. mugger - bandyta 18. mugging - kradzierz z rozbojem 19. murder - morderstwo 20. murderer - morderca 21. pickpocket - kieszonkowiec 22. prisoner - wiezien 23. ransom - okup 24. rob - rabowac 25. robber - zlodziej 26. robbery - napad  27. shoplifter - zlodziej sklepowy 28. shoplifting - kradzierz sklepowa 29. suspect - podejrzany 30. suspicious - podejrzany 31. suspiciously - podejrzliwie 32. theft - kradziez 33. thieft - zlodziej 34. threaten - grozic 35. tick off - dawac reprymende 36. violence - przemoc 37. appear - pojawiac sie 38. appearence - wygląd 39. author - autor 40. carry out duties - wypelniac obowiazki 41. clever diagnosis - inteligentan diagnoza 42. come out - ukazac sie 43. cuff - mankiet 44. carved pipe - rzezbiona fajka 45. deduce - wnioskowac 46. diary - dziennik 47. edition - wydanie 48. fictional - fikcyjny 49. immediate success - natychmiastowy sukces 50. indicate - wskazywac 51. insult - zniewazac 52. magnifying glass - szklo powiekszajace 53. notice - zauwazyc 54. observation - obserwacja 55. plot - fabula 56. relationships - kontakty 57. shopkeeper - kupiec 58. smooth patch - gładka lata 59. solve mysteries - rozwiazywac zagadki 60. tattoo - tatuaz 61. tradesman - handlowiec 62. trai - szkolic 63. who is behind it - kto za tym stoi 64. accuse sb of sth - oskarzyc kogos o cos 65. accused of - oskarzony o 66. arrest - aresztowac 67. cctv - kamera przemyslowa 68. avidence - dowody 69. fill in a form - wypelniac formularz 70. fingerprint - odcisk palca 71. forensic - sadowy 72. murder case - sprawa o morderstwo 73. proof - dowod 74. prosecute - oskarzac 75. punish - karac kogos 76. report - raport 77. scene of crime - miejsce przestepstwa 78. traces - slady 79. confess guilt - przyznawac sie do winy 80. court -sad 81. defendant - oskarzony 82. end up in jail - trafic do wiezienia 83. go on trial - miec proces 84. guilty - winny 85. innocent - niewinny 86. judge - sedzia 87. jury - lawa przysieglych 88. lawer - prawnik 89. make statements under oath - zeznawac pod przysiega 90. minor - drobny 91. pass sentence - wydawac wyrok 92. sentence sombady to - skazywac kogos na 93. try - sadzic 94. under oath - pod przysiega 95. victim - ofiara 96. witness - slabosc"
        ],
        //Listopad
        [
            "1. amateur - amator/ka2. association - stowarzyszenie, związek3. bat - rakieta4. challenge - rzucać wyzwanie, wyzywać5. championship - mistrzostwo6. chess - szachy 7. compete against - współzawodniczyć, konkurować8. competition - rywalizacja, konkurencja9. course - tor wyścigowy10. cricket ground - boisko do krykieta11. elbow and knee protection - ochrona na łokcie i kolana12. goal - bramka, gol13. golf course - pole do golfa14. grass court - murawa15. handball - piłka ręczna 16. helmet - kask17. net - siatka18. participant - uczestnik19. participate - uczestniczyć, brać udział 20. physical ability - umiejętności fizyczne21. rules - zasady22. set of golf club - zestaw kijów do golfa23. skills - zdolności24. spectator - widz 25. squash - rodzaj sportu odbijania rakieta piłki o ścianę 26. take up sth - zająć się27. tournament - rozgrywki sportowe28. warm up - rozgrzewać się 29. weightlifting - podnoszenie ciężarów30. bandage - bandaż, bandażować31. be on crutches - chodzić o kulach32. burn calories - spalać kalorie33. check up - kontrola34. cryotherapy - krioterapia35. cut down on - zredukować36. diabetes - cukrzyca37. diagnosis - diagnoza, rozpoznanie38. eliminate risk - eliminować zagrożenie39. health insurance - ubezpieczenie zdrowotne40. injection - zastrzyk41. instant relief - szybka ulga42. painkiller - środek przeciwbólowy 43. plaster - plaster, gips44. prescription - recepta45. protect - chronić46. put on weight - przybierać na wadze47. reduce the pain - zmniejszać ból 48. remedy - ulga, lekarstwo 49. vaccination - szczepienie50. X ray - rentgen, prześwietlenie51. ache - ból, boleć52. blood pressure - ciśnienie krwi53. broken arm - złamana ręka54. bruise - siniak55. cupping - stawianie baniek56. disabled - osoba niepełnosprawna57. disease - choroba58. faint - słaby, omdlały, mdleć 59. feel dizzy - mieć zawroty głowy60. gastric flu - grypa żołądkowa61. hiccup - czkawka62. high temperature - wysoka temperatura63. pain - ból, boleć64. painful - bolesny65. painful cough - bolesny kaszel66. pull a muscle - naciągnąć mięsień67. rheumatism - reumatyzm68. sleeplessness - bezsenność69. sore eye - bolące oko70. sore throat - ból gardła71. sprained ankle - skręcona, zwichnięta kostka72. stomach ache - ból żołądka73. suffer - cierpieć74. swollen joints - spuchnięte stawy75. symptoms - symptomy, obiawy76. twisted knee and ankle - skręcenie w kolanie, skręcona kostka 77. upset stomach - rozstrój żołądka 78. wounded - zraniony"],
        //Grudzien
        [
            "12. alidi - alidi 2. at gunpoint - pod grozba uzycia broni 3. beat sb up - pobic 4. burglar - wlamywacz 5. commit a crime - popelnic przestepstwo 6. criminal - przestepca 7. escape - uciekac 8. force - sila 9. forger - falszerz 10. get out of - wyjsc 11. getaway - ucieczka 12. hand over - przekazywac 13. hand sth in - wreczyc 14. hide - ukryc 15. hold up - napad rabunkowy 16. illegal - nielegalny 17. mugger - bandyta 18. mugging - kradzierz z rozbojem 19. murder - morderstwo 20. murderer - morderca 21. pickpocket - kieszonkowiec 22. prisoner - wiezien 23. ransom - okup 24. rob - rabowac 25. robber - zlodziej 26. robbery - napad  27. shoplifter - zlodziej sklepowy 28. shoplifting - kradzierz sklepowa 29. suspect - podejrzany 30. suspicious - podejrzany 31. suspiciously - podejrzliwie 32. theft - kradziez 33. thieft - zlodziej 34. threaten - grozic 35. tick off - dawac reprymende 36. violence - przemoc 37. appear - pojawiac sie 38. appearence - wygląd 39. author - autor 40. carry out duties - wypelniac obowiazki 41. clever diagnosis - inteligentan diagnoza 42. come out - ukazac sie 43. cuff - mankiet 44. carved pipe - rzezbiona fajka 45. deduce - wnioskowac 46. diary - dziennik 47. edition - wydanie 48. fictional - fikcyjny 49. immediate success - natychmiastowy sukces 50. indicate - wskazywac 51. insult - zniewazac 52. magnifying glass - szklo powiekszajace 53. notice - zauwazyc 54. observation - obserwacja 55. plot - fabula 56. relationships - kontakty 57. shopkeeper - kupiec 58. smooth patch - gładka lata 59. solve mysteries - rozwiazywac zagadki 60. tattoo - tatuaz 61. tradesman - handlowiec 62. trai - szkolic 63. who is behind it - kto za tym stoi 64. accuse sb of sth - oskarzyc kogos o cos 65. accused of - oskarzony o 66. arrest - aresztowac 67. cctv - kamera przemyslowa 68. avidence - dowody 69. fill in a form - wypelniac formularz 70. fingerprint - odcisk palca 71. forensic - sadowy 72. murder case - sprawa o morderstwo 73. proof - dowod 74. prosecute - oskarzac 75. punish - karac kogos 76. report - raport 77. scene of crime - miejsce przestepstwa 78. traces - slady 79. confess guilt - przyznawac sie do winy 80. court -sad 81. defendant - oskarzony 82. end up in jail - trafic do wiezienia 83. go on trial - miec proces 84. guilty - winny 85. innocent - niewinny 86. judge - sedzia 87. jury - lawa przysieglych 88. lawer - prawnik 89. make statements under oath - zeznawac pod przysiega 90. minor - drobny 91. pass sentence - wydawac wyrok 92. sentence sombady to - skazywac kogos na 93. try - sadzic 94. under oath - pod przysiega 95. victim - ofiara 96. witness - slabosc"
        ]
    ];
    //usuwanie niepotrzebnych loter w dowolnym ukladzie
    var s = /[,-]+/g;
    var splitedWord = [];
    var trashElement = [];
    //Dzielenie tablicy na word pl i na word ang
    splitedWord = word[chosenMonth][0].split(s);
    // sprawianie aby pierwszy element tablicy nie był undefinded a 1 //Wywoływało to blad jesli trzeba usunac undefinded
    splitedWord[0] = 1;
    //usuwanie pierwszego elementu tablicy
    trashElement = splitedWord.shift();
    //dzielenie tablicy na slowa  polskie i angielskie
    for (i = 0; i < splitedWord.length; i++) {
        splitedWord[i] = splitedWord[i].trim();
        if (i % 2 == 0) {
            wordAng.push(splitedWord[i]);
        } else {
            
            wordPl.push(splitedWord[i]);
        }
    }
    localStorage.setItem("wordAng", JSON.stringify(wordAng));
    localStorage.setItem("wordPl", JSON.stringify(wordPl));
}

//Losowa generacja cyfr
function randomNumberGenerator(chosenMonth) {
    /////////////
    let wordToRemove = JSON.parse(localStorage.getItem(chosenMonth + "_wordToRemove"));
    let randomNumber2 = [];
    ///////////////
    //Petla losujaca 20 unikalnych liczb
    const randomNumber = new Set();
    let randomNumberArray = [];
    //Losuj dopuki tablica losowych liczb nie bedzie rowna ilosci gier
    while (randomNumber.size != gameCounter) {
        randomNumber.add(Math.floor(Math.random() * wordLength[chosenMonth]));
        //jesli wylosowało sie 20 liczb i jesli urzytkownik zaznaczył jakis słowa do wykluczenia
        if (randomNumber.size == gameCounter && JSON.parse(localStorage.getItem(chosenMonth + "_wordToRemove")) !== null) {
            //Pojemnik na zmienne który zasteouje obiek Set
            randomNumberArray = Array.from(randomNumber);
            //jesli jakies słowo znjaduje sie na liscie słow do wyklucznenia wyklucz je
            randomNumberArray = randomNumberArray.filter(remove);
            //pomocnuczy parametr losujacy liczbe do wpisana w miejsce usunietej liczby
            let randomNumberArray2;
            //petla wykonujaca sie dopuki nie zostanie wylosowane 20 liczb
            while (randomNumberArray.length != gameCounter) {
                randomNumberArray2 = Math.floor(Math.random() * wordLength[chosenMonth]);
                //jesli liczba znajduje sie juz w tablicy wylosuj nowa
                if (randomNumberArray.includes(randomNumberArray2) || wordToRemove.includes(randomNumberArray2)) {
                    randomNumberArray2 = Math.floor(Math.random() * wordLength[chosenMonth]);
                    //jesli nie znajduje sie jeszcze w tablicy dodaj ja do niej
                } else {
                    randomNumberArray.push(randomNumberArray2);
                }
            }
            //wprowadz słowa do localStorage gdy były wykluczone słowa
            localStorage.setItem("randomNumber", JSON.stringify(Array.from(randomNumberArray)));
        } else {
            //Wprowadz słowa do localStorage gdy nie było wykluczonych słow
            localStorage.setItem("randomNumber", JSON.stringify(Array.from(randomNumber)));
        }
    }

}
//Funkcja Filter
function remove(val) {
    //Pobieranie wykluczonych słow
    let monthNumber = localStorage.getItem("monthNumber");
    let wordToRemove = JSON.parse(localStorage.getItem(monthNumber + "_wordToRemove"));
    //zwróc -1 jesli słowka wystepuje w tablicy
    return wordToRemove.indexOf(val) == -1;
}

/////////////////////
//Funkcje WindowsOnLoad
//////////////////////////
//Czesc Logiczna wypisujaca aktualne słowo i porownujaca inputUsera do slowa
function setingWord() {

    var randomNumber = [];
    var randomWordPl = [];
    var randomWordAng = [];
    var userInput;
    let wordPl = [];
    let wordAng = [];
    /*Jak Pobrac zmienna w localStorage*/
    loopCounter = localStorage.getItem("loopCounter");
    userInput = localStorage.getItem("userInput");

    /*Jak Pobrac tablice w localStorage*/
    randomWordAng = JSON.parse(localStorage.getItem("randomWordAng"));
    randomWordPl = JSON.parse(localStorage.getItem("randomWordPl"));
    randomNumber = JSON.parse(localStorage.getItem("randomNumber"));
    wordAng = JSON.parse(localStorage.getItem("wordAng"));
    wordPl = JSON.parse(localStorage.getItem("wordPl"));

    //Jesli uzytkownik dal 20 odpowiedzi odtworz tablice jeszcze raz
    if (loopCounter >= randomWordAng.length || randomWordAng.length == 1) {
        console.log("zmien loopCounter na 0");
        localStorage.setItem("loopCounter", 0);
        loopCounter = localStorage.getItem("loopCounter");
    }
    ///////////////////
    //Informacje diagnostyczne w cmd
    /////////////////////
    console.log("randomWordLenth:" + randomWordAng.length);
    console.log("loopCounter:" + loopCounter);
    console.log(randomWordAng);
    console.log(randomWordPl);
    console.log(wordAng)
    console.log(wordPl)
    //Jeali ilosc iteracji petli ma index w slowie wykonaj petle
    if (loopCounter < randomWordAng.length) {
        //jezeli loopCounter nie jest rowny kontynuuj iteracja petli *w załozeniu do mamentu w którym nie bedzie rowna
        $("#randomWord_wordPl").text(randomWordPl[loopCounter]);
        //Jesli uzytkonik wprowadzil poprawnie slowo
        if (userInput == randomWordAng[loopCounter].toLowerCase()) {
            //////////////////////
            //Podmina Tesktu w HTML
            ////////////////////
            let checkingCharacter = "";
            let item = [];
            $("#logic_wordAng").text(randomWordAng[loopCounter]);
            $("#logic_mark").text("Dobrze");
            $("#logic_userInput").text(localStorage.getItem("userInput"));
            //////////////////////////////////////
            for (i = 0; i < userInput.length; i++) {
                let userInput = localStorage.getItem("userInput");
                item = '<span style="color:green">' + userInput.charAt(i) + '</span>';
                checkingCharacter = checkingCharacter + item;
                // console.log(checkingCharacter);
                $("#logic_userInput").html(checkingCharacter);
            }
            ///////////////////////////////////////////

            ///////////////////////
            //Usuwanie wpisanego dobrze słowa
            /////////////////////////
            let randomWordAng2 = randomWordAng.splice(loopCounter, 1);
            let randomWordPl2 = randomWordPl.splice(loopCounter, 1);
            /*Jak Aktualizowac zmienna w localStorage*/
            localStorage.setItem("randomWordAng", JSON.stringify(randomWordAng));
            localStorage.setItem("randomWordPl", JSON.stringify(randomWordPl));
            //jesli uzytkownik sie pomylil
        } else {
            $("#logic_wordAng").text(randomWordAng[loopCounter]);
            $("#logic_mark").text("Zle");
            $("#logic_userInput").text(localStorage.getItem("userInput"));
            //////////////////////////////////////
            let checkingCharacter = "";
            let item = [];
            for (i = 0; i < userInput.length; i++) {
                // let userInputHtml = $("#logic_userInput").text();
                if (userInput.charAt(i) != randomWordAng[loopCounter].charAt(i)) {
                    let userInput = localStorage.getItem("userInput");
                    item = '<span style="color:red">' + userInput.charAt(i) + '</span>';
                    checkingCharacter = checkingCharacter + item;
                    // console.log(checkingCharacter);
                    $("#logic_userInput").html(checkingCharacter);
                } else {
                    let userInput = localStorage.getItem("userInput");
                    item = '<span style="color:green">' + userInput.charAt(i) + '</span>';
                    checkingCharacter = checkingCharacter + item;
                    // console.log(checkingCharacter);
                    $("#logic_userInput").html(checkingCharacter);
                }
            }
            ///////////////////////////////////////////
        }
        //Jesli uzytkownik wpisał wszystkie slowa poprawnie przenies go do -> Score
    } else if (randomWordAng.length == 0) {
        ///////////////////////////
        //Pobieranie czasu ukonczenia
        ////////////////////////////
        let endTime = Date.now();
        localStorage.setItem("endTime", endTime);
        console.log(endTime);
        ///////////////////////////////////////////////
        //Jesli tablica jest pusta czały czas zachodzi przekierowanie do Score co powoduje blad nieskonczonej petli
        //Zmienna nie moze byc pusta po zmianie

        // localStorage.setItem("randomWordAng",JSON.stringify(wordAng));
        localStorage.setItem("randomWordAng", JSON.stringify("wordAng"));

        let hrefScore = "score.html";
        window.location.href = hrefScore;
    }
}

///////////////////////////
//Funkcje OnClick
//////////////////////////////

//Index -> Month -> Z pliku index do wybierania opcji aktualny miesaic lub wybierz recznie
$("#index_Index_Month").click(function () {
    let startTime = new Date();
    localStorage.setItem("startTime", startTime);
    console.log(startTime);

    let hrefMonth = "month.html";
    window.location.href = hrefMonth;
});

//Index -> Settings -> Otwórz ustawienia
$("#index_Index_Settings").click(function () {
    let hrefSettings = "settings.html";
    window.location.href = hrefSettings;
})

//Month -> ChosingMonth -> Przechodzenie z opcji wybierania opcji slowek na wybieranie miesaic
$("#month_Month_ChosingMonth").click(function () {
    let hrefChosingMonth = "chosingMonth.html";
    window.location.href = hrefChosingMonth;
})

//Month -> RandomWord -> Przechodzenie z wybierania opcji słowek do losowania słowek
$("#month_Month_RandomWord").click(function () {
    localStorage.setItem('monthNumber', monthData.getMonth()); //pobierz wartosc aktualnego miesiaca do monthNumber
    localStorage.setItem("loopCounter", 0); //wyzeruj licznik
    //Pobieranie aktualnego miesaca do funkcji
    randomNumberGenerator(localStorage.getItem("monthNumber")); //wylosuj 20liczb
    splitingWord(localStorage.getItem("monthNumber"));

    ///////////////////////////
    //Pobieranie czasu ukonczenia
    ////////////////////////////
    let startTime = Date.now();
    localStorage.setItem("startTime", startTime);
    /////////////////////////////////

    //pobierz 20 losowych liczb
    let randomNumber = JSON.parse(localStorage.getItem("randomNumber"));
    var randomWordAng = [];
    var randomWordPl = [];
    for (i = 0; i < gameCounter; i++) {
        //Wprowadz wylosowane słowa do osbnych zmiennych
        randomWordAng[i] = wordAng[randomNumber[i]];
        randomWordPl[i] = wordPl[randomNumber[i]];
    }
    //dodaj do localStorage randomWordPl/Ang
    localStorage.setItem("randomWordPl", JSON.stringify(randomWordPl));
    localStorage.setItem("randomWordAng", JSON.stringify(randomWordAng));

    let hrefRandomWord = "randomWord.html";
    window.location.href = hrefRandomWord;
})

//ChosingMonth -> RandomWord Wybrany miesiac
function chosingMonth_ChosingMonth_RandomWord(chosenMonth) {
    localStorage.setItem('monthNumber', chosenMonth); //zapisz wybrany miesaic do ceschu
    localStorage.setItem("loopCounter", 0);
    randomNumberGenerator(localStorage.getItem("monthNumber")); //wylosuj 20liczb
    splitingWord(localStorage.getItem("monthNumber"));

    //pobierz zmienna randomNumber z local storage i uzyj jej przy wpiswyaniu do localstorage wylosowanych slow
    let randomNumber = JSON.parse(localStorage.getItem("randomNumber"));
    var randomWordAng = [];
    var randomWordPl = [];
    for (i = 0; i < gameCounter; i++) {
        randomWordAng[i] = wordAng[randomNumber[i]];
        randomWordPl[i] = wordPl[randomNumber[i]];
    }
    //wprpwadz slowa do loclastorage
    let hrefRandomWord = "randomWord.html";

    ///////////////////////////
    //Pobieranie czasu ukonczenia
    ////////////////////////////
    let startTime = Date.now();
    localStorage.setItem("startTime", startTime);
    console.log(startTime);
    ////////////////////////////////////

    localStorage.setItem("randomWordPl", JSON.stringify(randomWordPl));
    localStorage.setItem("randomWordAng", JSON.stringify(randomWordAng));
    window.location.href = hrefRandomWord;
}

//RandomWord -> logicPart -> Sprawdzanie poprawnosci słowka
$("#randomWord_RandomWord_Logic").click(function () {
    let hreflogicPart = "logicPart.html";
    //Wproawdzanie user Input do localStorage
    let userInput = document.getElementById("randomWord_UserInput").value;
    localStorage.setItem("userInput", userInput.toLowerCase().trim())

    window.location.href = hreflogicPart;
})

//Logic -> RandomWord -> Powrot do RandomWord i kolejne losowe słowo
$("#logic_Logic_RandomWord").click(function () {
    let hrefRandomWord = "randomWord.html";
    //ziteruj loopCounter aby wyswietlic Następne slowo
    loopCounter++;
    localStorage.setItem("loopCounter", loopCounter);
    window.location.href = hrefRandomWord;
})

//Score -> Index -> Powrót do Indexu do stromy startowej
$("#score_Exit").click(function () {
    let hrefIndex = "index.html";
    window.location.href = hrefIndex;
})

//Po kliknieciu na Miesiac w ustawianiach pojawi sie pelna lista slowek z tego miesiaca
function openSettings(chosenMonth) {

    //pobieranie ID i wyciaganie z niego numeru miesiaca
    let monthNumber = chosenMonth.replace("settings_Navi_", "");
    monthNumber = monthNumber.replace("_Div", "");
    localStorage.setItem("settingChosenMonth", monthNumber);

    //Id diva do ktorego trafia słowka
    let divId = $("#" + chosenMonth + "_Div");

    //Zablokuj wszystkie inne przyciski oprócz kliknietego
    for (i = 0; i < 12; i++) {
        $("#settings_Navi_" + i).attr("onClick", ";");
    }

    //Odblokuj wybrany przycisk
    $("#settings_Navi_" + monthNumber).attr("onClick", "openSettings(this.id)");

    //Jesli uzytonwik pierwszy raz kliknie przycisk
    if ($("#" + chosenMonth).hasClass("click")) {
        let monthNumber = localStorage.getItem("settingChosenMonth");

        //uczyn diva ze słowkami niewidzialnym
        $("#settings_Navi_" + monthNumber + "_Div").css("display", "none");
        $("#settings_Navi_" + monthNumber).attr("class", "clicked_Save");

        //włacza kliknalnosc innych przycisków
        for (i = 0; i < 12; i++) {
            $("#settings_Navi_" + i).attr("onClick", "openSettings(this.id)");
        }
        //Jesli urzytkownik 2raz kliknie przycisk
    } else if ($("#" + chosenMonth).hasClass("clicked_Save")) {

        $("#settings_Navi_" + monthNumber).attr("class", "clicked_Close");
        $("#settings_Navi_" + monthNumber + "_Div").css("display", "block");

        //jesli urzytkownik ponownie bedzie chciał ponownie otworzyc te sama liste
    } else if ($("#" + chosenMonth).hasClass("clicked_Close")) {

        $("#settings_Navi_" + monthNumber).attr("class", "clicked_Save");
        $("#settings_Navi_" + monthNumber + "_Div").css("display", "none");
        for (i = 0; i < 12; i++) {
            $("#settings_Navi_" + i).attr("onClick", "openSettings(this.id)");
        }

        //Jesli kliknie pierwszy raz trzeba utworzyc divy
    } else {

        //Wywoływanie funkcji dzielaca napisa
        splitingWord(monthNumber);

        //pobierz słowa aktualne dla danego miesiaca
        let wordAng = JSON.parse(localStorage.getItem("wordAng"));

        //Dodaj klase click do kliknetego przyciosku
        let buttonId = document.getElementById(chosenMonth);
        let wordToRemove = [];
        buttonId.className = "click";

        //Uwidocznij diva
        $(divId).css("display", "block");

        //Stwórz tyle checkboxów ile jest slow w tablicy
        for (i = 0; i < wordLength[monthNumber]; i++) {
            $(divId).append('</br>  <input type="checkbox" onchange="addToBlackList(this.id)" class="checkbox" id=' + chosenMonth + "_" + i + '>' + '<span class="checkbox">' + i + ". " + wordAng[i] + '<span/> ');
        }

        //Stwórz przycisk zapisu zmian
        $(divId).append('<button onclick="saveChanges()" id="save_' + monthNumber + '">Zapisz zmiany</button>');
        $(divId).append('<button onclick="showRemovedWord()" id="show_' + monthNumber + '">Pokaż wykluczone</button>');
        $("#save_" + monthNumber).css("left", "-30px");
        $("#show_" + monthNumber).css("left", "-30px");
    }
}

//Po kliknieciu przycisku pokazuje usuniete słowa
function showRemovedWord() {
    //pobierz aktualny miesiac z localStorage
    let monthNumber = localStorage.getItem("settingChosenMonth");
    //jesli zmienna usnietych słow istnieje
    if (JSON.parse(localStorage.getItem(monthNumber + "_wordToRemove") !== null)) {
        let wordToRemove = JSON.parse(localStorage.getItem(monthNumber + "_wordToRemove"));
        let showToRemove = "";
        //jesli tablica bedzie pusta
        if (wordToRemove.length == 0) {
            alert("Nie wykluczyłeś żadnych słówek");
        } else {
            //jesli urztkownik wykluczy jakis słowa zrób wezyka z konkatenacji
            for (i = 0; i < wordToRemove.length; i++) {
                showToRemove = showToRemove + wordAng[wordToRemove[i]] + " , ";
            }
            //Pokarz wykluczone słowa
            alert("Te słowa są wykluczone: " + showToRemove);
        }
        //jesli zmienna usunietych słow nie istnieje
    } else {
        alert("Nie wykluczyłeś żadnych słówek");
    }
}

//Zapisywanie slowek na liste do usuniecia
function saveChanges() {
    let wordToRemove = [];
    let monthNumber = localStorage.getItem("settingChosenMonth");

    //Jesli checkbox ma klase to remove dodaj go do localStorage slowke do wykluczenia
    for (i = 0; i < wordLength[monthNumber]; i++) {
        if ($("#settings_Navi_" + monthNumber + "_" + i).hasClass("toRemove")) {
            wordToRemove.push(i)
        } else {
            continue;
        }
    }
    localStorage.setItem(monthNumber + "_wordToRemove", JSON.stringify(wordToRemove));

    //////////////////////////////////
    ////Zamknij ustawienia
    ////////////////////////////////////
    $("#settings_Navi_" + monthNumber + "_Div").css("display", "none");
    $("#settings_Navi_" + monthNumber).attr("class", "clicked_Save");
    for (i = 0; i < 12; i++) {
        $("#settings_Navi_" + i).attr("onClick", "openSettings(this.id)");
    }
}

//Po kliknieciu zmien class clowka na toRemove/checkbox
function addToBlackList(chosenMonth) {

    //podmiana klas po kliknieciu
    if ($("#" + chosenMonth).hasClass("toRemove")) {
        $("#" + chosenMonth)[0].className = "checkbox";
    } else {
        $("#" + chosenMonth)[0].className = "toRemove";
    }
}

////////////////////////////
// Funkceje Onload
////////////////////////////


//Zamiana w pliku -> ChosingMonth tła atualnego miesiaca na inny kolor
function monthChangingBackground() {
    let m = new Date();
    $("#" + m.getMonth()).css("background", "#e67e22"); //ustaw kolor aktualnego miesaca na inny
}

//Zamiana w pliku -> ChosingMonth ROK na aktualna date
function changeYear() {
    let year = new Date().getFullYear()
    $("#chosingCurrentYear").html(year); //zmien h1 na aktualny rok
}

//Sprawdzanie w pliku -> Score ile czasu zajeło nam wykonanie całej sesji
function settingTime() {
    let startTime = localStorage.getItem("startTime");
    let endTime = localStorage.getItem("endTime");
    let timeGraduation = millisToMinutesAndSeconds(endTime - startTime);
    $("#score_Time").text("Zajelo ci to: " + timeGraduation);
}

//Zamiana Milisekund na minuty i sekundy
function millisToMinutesAndSeconds(endTime) {
    var minutes = Math.floor(endTime / 60000);
    var seconds = ((endTime % 60000) / 1000).toFixed(0);
    return minutes + " min " + (seconds < 10 ? '0' : '') + seconds + " sekund";
}

//Funkcja ukrywajaca ustawienia
function hideSettings() {
    for (i = 0; i < 12; i++) {
        $("#settings_Navi_" + i + "_Div").addClass("settings_Navi_Div");
    }
}

//Blokowanie backbuttona
// function preventBack() {window.history.forward();}
// setTimeout("preventBack()", 0);
// window.onunload = function() {null};

async function registerSW() {
    if ("serviceWorker" in navigator) {
        try {
            await navigator.serviceWorker.register("./sw.js");
        } catch (e) {
            console.log("SW registration failed");
        }
    }
}

function windowsOnLoad() {
    monthChangingBackground();
    changeYear();
    setingWord();
    settingTime();
    hideSettings();
    registerSW();
}
window.onload = windowsOnLoad();
