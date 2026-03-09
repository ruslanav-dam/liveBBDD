const E={slug:"moduls12-sql-2526",title:"Prova de nivell — Moduls 1 i 2",subtitle:"Tipus de dades · CREATE TABLE · Funcions d'agregacio · GROUP BY · HAVING · ORDER BY",course:"0484 Bases de Dades · DAM 2025-2026",timeLimit:3e3,totalQ:20,parts:[{id:"A",label:"Part A — Test d'opcio multiple",pts:"0.5 pts x 8",qNums:[1,2,3,4,5,6,7,8]},{id:"B",label:"Part B — Completar el codi SQL",pts:"0.25 pts x 6",qNums:[9,10,11,12,13,14]},{id:"C",label:"Part C — Interpretar resultats",pts:"0.5 pts x 3",qNums:[15,16,17]},{id:"D",label:"Part D — Escriure consultes SQL",pts:"1 pt x 3",qNums:[18,19,20]}]},c={1:{text:"Un restaurant vol guardar els preus dels plats. Quin tipus de dada es el mes adequat per a la columna <code>Price</code>?",options:{A:"FLOAT(10,2) perque ocupa menys espai que DECIMAL",B:"DOUBLE(10,2) perque te mes precisio que FLOAT",C:"VARCHAR(10) perque permet guardar el simbol € al costat",D:"DECIMAL(10,2) perque no genera errors d'arrodoniment"},correct:"D",feedback:{D:"Correcte! DECIMAL emmagatzema valors exactes. FLOAT/DOUBLE generen errors com 0.1 + 0.2 = 0.30000000000000004.",A:"Incorrecte. FLOAT genera errors d'arrodoniment amb imports monetaris.",B:"Incorrecte. DOUBLE tambe genera errors d'arrodoniment, nomes te mes rang.",C:"Incorrecte. Els preus s'han de guardar com a numeros, no com a text."}},2:{text:"Una bolera guarda codis de partida de 6 caracters fixos (ex: <code>BOL001</code>). Quin tipus es millor per a aquest camp?",options:{A:"CHAR(6) perque la longitud es fixa i sempre ocupa 6 bytes",B:"VARCHAR(6) perque sempre es mes eficient que CHAR",C:"TEXT perque pot emmagatzemar cadenes de qualsevol mida",D:"INT perque els codis que comencen amb lletres es guarden com a enters"},correct:"A",feedback:{A:"Correcte! Quan la longitud es fixa, CHAR es mes eficient. Sempre ocupa n bytes, sense bytes extra de capçalera.",B:"Incorrecte. Per a longitud fixa, CHAR pot ser mes eficient que VARCHAR.",C:"Incorrecte. TEXT es per a cadenes molt llargues, no per a codis curts.",D:"Incorrecte. BOL001 conte lletres, no es pot guardar com a INT."}},3:{text:"Un gimnàs te una taula de membres. Quina definicio fa que <code>UpdatedAt</code> es reassigni automaticament cada vegada que es modifica una fila?",options:{A:"UpdatedAt DATE DEFAULT NOW()",B:"UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",C:"UpdatedAt DATETIME AUTO_INCREMENT",D:"UpdatedAt TIMESTAMP UNIQUE NOT NULL"},correct:"B",feedback:{B:"Correcte! ON UPDATE CURRENT_TIMESTAMP es la clausula que reassigna el valor automaticament amb cada UPDATE.",A:"Incorrecte. DEFAULT NOW() nomes s'activa a la insercio, i DATE no suporta ON UPDATE.",C:"Incorrecte. AUTO_INCREMENT es per a enters, no per a dates.",D:"Incorrecte. UNIQUE i NOT NULL son restriccions, no fan actualitzacio automatica."}},4:{text:"Un hospital vol comptar pacients per planta. Per que dona error aquesta consulta en mode estricte?",code:`SELECT Floor, PatientName, COUNT(*)
FROM Patients
GROUP BY Floor;`,options:{A:"Perque COUNT(*) no es compatible amb GROUP BY",B:"Perque la taula Patients no existeix al sistema",C:"Perque PatientName no esta al GROUP BY ni es funcio d'agregacio",D:"Perque falta la clausula WHERE abans de GROUP BY"},correct:"C",feedback:{C:"Correcte! Tota columna al SELECT que no sigui funcio d'agregacio ha d'estar al GROUP BY.",A:"Incorrecte. COUNT(*) funciona perfectament amb GROUP BY.",B:"Incorrecte. L'error es de sintaxi SQL, no de l'existencia de la taula.",D:"Incorrecte. WHERE es opcional, no causa l'error."}},5:{text:"Una startup vol crear una taula de projectes amb ID autoincremental. Quina sintaxi es correcta a MySQL?",options:{A:"<code>ProjectID AUTOINCREMENT INT PRIMARY KEY</code>",B:"<code>ProjectID INT AUTO_INCREMENT PRIMARY KEY</code>",C:"<code>ProjectID PRIMARY KEY INT AUTO_INCREMENT</code>",D:"<code>ProjectID INT PRIMARY KEY DEFAULT INCREMENT</code>"},correct:"B",feedback:{B:"Correcte! L'ordre es: tipus (INT) → AUTO_INCREMENT → PRIMARY KEY.",A:"Incorrecte. A MySQL es AUTO_INCREMENT (amb guio baix) i el tipus va primer.",C:"Incorrecte. El tipus de dada (INT) ha d'anar abans de PRIMARY KEY.",D:"Incorrecte. DEFAULT INCREMENT no existeix; la clausula es AUTO_INCREMENT."}},6:{text:"Una escola vol veure assignatures amb nota mitjana superior a 7. Per que falla aquesta consulta?",code:`SELECT Subject, AVG(Grade) AS Mitjana
FROM Students
GROUP BY Subject
WHERE Mitjana > 7;`,options:{A:"Perque AVG() no accepta la columna Grade com a parametre",B:"Perque Subject hauria d'anar entre cometes simples",C:"Perque falta ORDER BY al final de la consulta",D:"Perque WHERE va abans de GROUP BY i no pot usar alies del SELECT"},correct:"D",feedback:{D:"Correcte! WHERE va ABANS de GROUP BY (no despres) i no pot referenciar alies. Caldria usar HAVING AVG(Grade) > 7.",A:"Incorrecte. AVG() funciona amb qualsevol columna numerica.",B:"Incorrecte. Els noms de columna no van entre cometes.",C:"Incorrecte. ORDER BY es opcional."}},7:{text:"Una clinica busca pacients sense telefon registrat. Quina clausula es correcta?",options:{A:"<code>WHERE Phone IS NULL</code>",B:"<code>WHERE Phone = NULL</code>",C:"<code>WHERE Phone == NULL</code>",D:"<code>WHERE Phone LIKE NULL</code>"},correct:"A",feedback:{A:"Correcte! NULL no es un valor, es l'absencia de valor. Nomes IS NULL i IS NOT NULL funcionen.",B:"Incorrecte. = NULL sempre retorna NULL (ni true ni false), no filtra res.",C:"Incorrecte. == no existeix en SQL estandard; l'operador d'igualtat es =.",D:"Incorrecte. LIKE es per a patrons de text amb % i _, no per a NULL."}},8:{text:"Una bolera te 500 partides registrades de 40 jugadors diferents. Quantes files retorna aquesta consulta?",code:`SELECT DISTINCT PlayerName
FROM Games;`,options:{A:"500 files, una per cada partida registrada",B:"1 fila amb el valor 40 com a resultat",C:"40 files, una per cada jugador unic",D:"0 files, perque DISTINCT no funciona amb VARCHAR"},correct:"C",feedback:{C:"Correcte! DISTINCT elimina duplicats i retorna cada valor unic una sola vegada → 40 jugadors.",A:"Incorrecte. DISTINCT elimina les repeticions, no retorna totes les files.",B:"Incorrecte. DISTINCT no compta, retorna els valors unics com a files. Per comptar caldria COUNT(DISTINCT).",D:"Incorrecte. DISTINCT funciona amb qualsevol tipus de dada."}},15:{text:"Un equip de desenvolupament crea aquesta taula. Quins problemes de tipus de dada te?",code:`CREATE TABLE Invoices (
  InvoiceID INT,
  Client VARCHAR(80),
  Total FLOAT NOT NULL,
  Tax DOUBLE DEFAULT 0,
  InvoiceDate VARCHAR(15)
);`,options:{A:"VARCHAR(80) per Client hauria de ser CHAR(80)",B:"Nomes falta afegir PRIMARY KEY a InvoiceID",C:"L'unic problema es que DEFAULT 0 no es valid per a DOUBLE",D:"FLOAT/DOUBLE per a diners i VARCHAR per a dates son incorrectes"},correct:"D",feedback:{D:"Correcte! Per diners cal DECIMAL (no FLOAT/DOUBLE). Per dates cal DATE o DATETIME (no VARCHAR).",A:"Incorrecte. VARCHAR es correcte per a noms de longitud variable.",B:"Incorrecte. Falta el PK, pero els tipus incorrectes son un error mes greu.",C:"Incorrecte. DEFAULT 0 es valid. Els problemes reals son FLOAT per diners i VARCHAR per dates."}},16:{text:"Observa la consulta d'un bar i el seu resultat. Quina conclusio es correcta?",code:`SELECT Category, COUNT(*) AS Total, AVG(Price) AS PreuMitja
FROM Drinks
WHERE Price >= 2
GROUP BY Category
HAVING COUNT(*) >= 3;

-- Resultat:
-- Cocktails | 5 | 8.50
-- Cerveses  | 3 | 3.20`,options:{A:"Es mostren categories amb 3+ begudes de preu >= 2; Cocktails te 5 begudes amb preu mitja 8.50",B:"El bar te exactament 8 begudes en total perque 5 + 3 = 8",C:"La columna PreuMitja mostra el preu maxim de cada categoria",D:"WHERE Price >= 2 filtra despres de GROUP BY i afecta nomes el resultat final"},correct:"A",feedback:{A:"Correcte! WHERE filtra begudes >= 2 (ABANS d'agrupar). GROUP BY agrupa per categoria. HAVING exclou categories amb menys de 3.",B:"Incorrecte. Pot haver-hi mes begudes en categories excloses per HAVING o amb preu < 2.",C:"Incorrecte. AVG() calcula la MITJANA, no el maxim. El maxim seria MAX().",D:"Incorrecte. WHERE filtra ABANS de GROUP BY, no despres."}},17:{text:"En quin ordre <strong>executa</strong> internament MySQL les clausules d'una consulta completa?",options:{A:"SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY → LIMIT",B:"FROM → WHERE → SELECT → GROUP BY → HAVING → ORDER BY → LIMIT",C:"FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT",D:"FROM → GROUP BY → WHERE → SELECT → HAVING → ORDER BY → LIMIT"},correct:"C",feedback:{C:"Correcte! FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT. Per aixo un alies del SELECT no es pot usar a WHERE.",A:"Incorrecte. Aixo es l'ordre d'escriptura, no l'ordre d'execucio intern.",B:"Incorrecte. SELECT s'executa despres de HAVING, no despres de WHERE.",D:"Incorrecte. WHERE s'executa abans de GROUP BY, no despres."}}},i=[{qNum:9,text:"Una bolera vol registrar partides. Completa per crear la taula amb un ID autoincremental i una puntuacio amb decimals:",codeTemplate:`CREATE TABLE Games (
  GameID {0} AUTO_INCREMENT PRIMARY KEY,
  PlayerName VARCHAR(60) NOT NULL,
  Score {1}(6,2) NOT NULL
);`,inputs:[{id:"fi2_9a",answer:"INT",width:5},{id:"fi2_9b",answer:"DECIMAL",width:9}],feedback:"GameID ha de ser <code>INT</code> (tipus enter per a AUTO_INCREMENT). Score ha de ser <code>DECIMAL(6,2)</code> per a puntuacions exactes."},{qNum:10,text:"Un gimnàs vol saber quins tipus d'abonament tenen un <strong>preu mitja superior a 30</strong>. Completa:",codeTemplate:`SELECT MembershipType, AVG(Price) AS PreuMitja
FROM Members
{0} BY MembershipType
{1} AVG(Price) > 30;`,inputs:[{id:"fi2_10a",answer:"GROUP",width:7},{id:"fi2_10b",answer:"HAVING",width:8}],feedback:"<code>GROUP BY</code> per agrupar per tipus d'abonament. <code>HAVING</code> per filtrar grups on la mitjana supera 30."},{qNum:11,text:"Un hospital vol que el camp <code>BloodType</code> <strong>nomes accepti</strong> els valors 'A', 'B', 'AB' i 'O'. Completa:",codeTemplate:"BloodType {0}('A', 'B', 'AB', 'O') NOT NULL",inputs:[{id:"fi2_11a",answer:"ENUM",width:6}],feedback:"<code>ENUM</code> restringeix els valors permesos a una llista tancada."},{qNum:12,text:"Una startup vol veure els <strong>5 projectes amb mes pressupost</strong>. Completa:",codeTemplate:`SELECT Name, Budget FROM Projects
ORDER BY Budget {0}
{1} 5;`,inputs:[{id:"fi2_12a",answer:"DESC",width:6},{id:"fi2_12b",answer:"LIMIT",width:7}],feedback:"<code>ORDER BY Budget DESC</code> ordena de major a menor. <code>LIMIT 5</code> retorna nomes els 5 primers."},{qNum:13,text:"Un hospital registra pacients. Completa per obtenir el <strong>nombre total</strong> i el <strong>salari maxim</strong> dels metges:",codeTemplate:`SELECT {0}(*) AS TotalMetges, {1}(Salary) AS SalariMaxim
FROM Doctors;`,inputs:[{id:"fi2_13a",answer:"COUNT",width:7},{id:"fi2_13b",answer:"MAX",width:5}],feedback:"<code>COUNT(*)</code> compta totes les files. <code>MAX(Salary)</code> retorna el valor mes gran de la columna."},{qNum:14,text:"Una escola vol saber quantes <strong>assignatures diferents</strong> s'imparteixen. Completa:",codeTemplate:`SELECT {0}({1} Subject) AS TotalAssignatures
FROM Classes;`,inputs:[{id:"fi2_14a",answer:"COUNT",width:7},{id:"fi2_14b",answer:"DISTINCT",width:10}],feedback:"<code>COUNT(DISTINCT Subject)</code> compta el nombre de valors unics."}],d=[{qNum:18,text:`Un gimnàs necessita la taula <code>Members</code>. Escriu el <strong>CREATE TABLE</strong> amb:<br><br>
      <code>MemberID</code>: enter, clau primaria, autoincremental<br>
      <code>FirstName</code>: text variable maxim 50 caracters, obligatori<br>
      <code>LastName</code>: text variable maxim 50 caracters, obligatori<br>
      <code>Email</code>: text variable maxim 100 caracters, unic i obligatori<br>
      <code>MonthlyFee</code>: decimal amb 8 digits i 2 decimals, obligatori<br>
      <code>MembershipType</code>: nomes permet 'Basic', 'Premium', 'VIP'<br>
      <code>JoinDate</code>: data, valor per defecte la data actual<br>
      <code>IsActive</code>: boolea, valor per defecte TRUE`,placeholder:`CREATE TABLE Members (
  MemberID ...,
  FirstName ...,
  ...
);`,required:[["create table","member"],["memberid","int","auto_increment","primary key"],["firstname","varchar"],["email","unique"],["monthlyfee","decimal"],["membershiptype","enum"]],feedback:`Solucio esperada:<br>
      <code>CREATE TABLE Members (<br>
      &nbsp;&nbsp;MemberID INT AUTO_INCREMENT PRIMARY KEY,<br>
      &nbsp;&nbsp;FirstName VARCHAR(50) NOT NULL,<br>
      &nbsp;&nbsp;LastName VARCHAR(50) NOT NULL,<br>
      &nbsp;&nbsp;Email VARCHAR(100) NOT NULL UNIQUE,<br>
      &nbsp;&nbsp;MonthlyFee DECIMAL(8,2) NOT NULL,<br>
      &nbsp;&nbsp;MembershipType ENUM('Basic','Premium','VIP'),<br>
      &nbsp;&nbsp;JoinDate DATE DEFAULT (CURRENT_DATE),<br>
      &nbsp;&nbsp;IsActive BOOLEAN DEFAULT TRUE<br>
      );</code>`},{qNum:19,text:`Un restaurant te la taula <strong>MenuItems</strong> amb:
      <code>ItemID</code> INT (PK), <code>Name</code> VARCHAR(100), <code>Price</code> DECIMAL(8,2),
      <code>Category</code> VARCHAR(50), <code>Stock</code> INT, <code>SupplierID</code> INT (FK).<br><br>
      Escriu la consulta per obtenir, per cada categoria:<br>
      - El nom de la categoria<br>
      - El nombre total de plats (alies: <code>TotalPlats</code>)<br>
      - El preu mitja (alies: <code>PreuMitja</code>)<br>
      - L'estoc total (alies: <code>EstocTotal</code>)<br><br>
      Nomes mostra categories amb <strong>mes de 2 plats</strong>, ordenat per <strong>preu mitja de major a menor</strong>, limitat als <strong>5 primers</strong> resultats.`,placeholder:`SELECT ...
FROM ...
GROUP BY ...
HAVING ...
ORDER BY ...
LIMIT ...;`,required:[["select","category","count","avg","sum"],["from","menuitems"],["group by","category"],["having","count",">","2"],["order by","desc"],["limit","5"]],feedback:`Solucio esperada:<br>
      <code>SELECT Category, COUNT(*) AS TotalPlats, AVG(Price) AS PreuMitja, SUM(Stock) AS EstocTotal<br>
      FROM MenuItems<br>
      GROUP BY Category<br>
      HAVING COUNT(*) > 2<br>
      ORDER BY PreuMitja DESC<br>
      LIMIT 5;</code>`},{qNum:20,text:`Escriu <strong>dues sentencies SQL</strong> per a una escola:<br><br>
      <strong>(a)</strong> Crea la taula <code>Students</code> amb:
      <code>StudentID</code> INT PK autoincremental,
      <code>FullName</code> VARCHAR(100) NOT NULL,
      <code>BirthDate</code> DATE,
      <code>Grade</code> DECIMAL(4,2),
      <code>EnrollDate</code> TIMESTAMP DEFAULT CURRENT_TIMESTAMP.<br><br>
      <strong>(b)</strong> Escriu una consulta sobre <code>Students</code> que mostri la nota mitjana (alies <code>NotaMitja</code>) i el nombre d'alumnes (alies <code>Total</code>) agrupats per any de naixement (<code>YEAR(BirthDate)</code>), excloent alumnes amb nota inferior a 5, i mostrant nomes els anys amb <strong>3 o mes alumnes</strong>.`,placeholder:`-- a) CREATE TABLE
...

-- b) SELECT
...`,required:[["create table","student"],["studentid","int","auto_increment","primary key"],["fullname","varchar"],["grade","decimal"],["select","avg","count","year"],["where","grade"],["group by"],["having","count","3"]],feedback:`Solucio esperada:<br>
      <code>-- a)<br>
      CREATE TABLE Students (<br>
      &nbsp;&nbsp;StudentID INT AUTO_INCREMENT PRIMARY KEY,<br>
      &nbsp;&nbsp;FullName VARCHAR(100) NOT NULL,<br>
      &nbsp;&nbsp;BirthDate DATE,<br>
      &nbsp;&nbsp;Grade DECIMAL(4,2),<br>
      &nbsp;&nbsp;EnrollDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP<br>
      );<br><br>
      -- b)<br>
      SELECT YEAR(BirthDate) AS Any, AVG(Grade) AS NotaMitja, COUNT(*) AS Total<br>
      FROM Students<br>
      WHERE Grade >= 5<br>
      GROUP BY YEAR(BirthDate)<br>
      HAVING COUNT(*) >= 3;</code>`}];function l(a,o){var t;const r=(t=c[a])==null?void 0:t.correct;return o===r}function u(a,o){return a.inputs.every(r=>(o[r.id]||"").trim().toUpperCase()===r.answer.toUpperCase())}function m(a,o){const r=(o||"").toLowerCase(),e=a.required.filter(s=>s.every(n=>r.includes(n))).length/a.required.length;return e>=.75?{correct:!0,partial:!1,pts:1}:e>=.5?{correct:!1,partial:!0,pts:.5}:{correct:!1,partial:!1,pts:0}}function p(a,o,r){let t=0;return[...Array(8).keys()].map(e=>e+1).concat([15,16,17]).forEach(e=>{l(e,a[e])&&(t+=.5)}),i.forEach(e=>{u(e,o)&&(t+=.25)}),d.forEach(e=>{t+=m(e,r[e.qNum]).pts}),Math.min(10,t)}export{E as EXAM,i as FILL_QUESTIONS,c as MC_QUESTIONS,d as WRITE_QUESTIONS,p as calcTotalScore,u as gradeFill,l as gradeMC,m as gradeWrite};
