$( document ).ready(function() {
    
    /**
     * Alle Daten werden in einem Objekt gespeichert.
     * Das Objekt wird im localStorage gespeichert.
     * Beim Laden der Seite wird geprüft, ob gespeicherte Daten im localStorage existieren.
       Je nachdem wird das Objekt (mit allen Daten) aus localStorage geladen oder ein neues
       Objekt erstellt.
     */                
    
    /******************************
     Gibt es homeObj im localStorage?
    ******************************/                
    
        // Wenn ja, Obj aus localStorage laden
        if(localStorage.getItem('store_homeObj')){
            console.log('homeObj existiert - homeObj laden!');
            var homeObj = JSON.parse(localStorage.getItem('store_homeObj'));
        }
        // Wenn nicht, Obj erstellen
        else{
            console.log('homeObj existiert nicht - homeObj erstellen!');
    
            var homeObj = {
                "Name": "Namen eingeben",
                "Logo": "img/home.png",
                "lastModus": "landscape",
                "Player":[
                    {   // Keeper
                        "Name" : "Sommer",
                        "midpointTop" : "49.98832710779082",
                        "midpointLeft" : "5.223259327377824"
                    },
                    {   // Defense
                        "Name" : "Lainer",
                        "midpointTop" : "87.72678762006404",
                        "midpointLeft" : "15.055596426694692"
                    },
                    {
                        "Name" : "Elvedi",
                        "midpointTop" : "31.483457844183565",
                        "midpointLeft" : "15.055596426694692"
                    },
                    {
                        "Name" : "Ginter",
                        "midpointTop" : "68.08964781216649",
                        "midpointLeft" : "15.055596426694692"
                    },
                    {
                        "Name" : "Wendt",
                        "midpointTop" : "11.953041622198505",
                        "midpointLeft" : "15.055596426694692"
                    },
                    {   // Midfield
                        "Name" : "Benes",
                        "midpointTop" : "50.05336179295624",
                        "midpointLeft" : "30.399789805570155"
                    },
                    {
                        "Name"         : "Zakaria",
                        "midpointTop" : "31.483457844183565",
                        "midpointLeft" : "25.722963741460852"
                    },
                    {
                        "Name" : "Neuhaus",
                        "midpointTop" : "68.08964781216649",
                        "midpointLeft" : "25.722963741460852"
                    },
                    {   // Offensive
                        "Name" : "Turam",
                        "midpointTop" : "11.953041622198505",
                        "midpointLeft" : "43.95733053074094"
                    },
                    {
                        "Name" : "Embolo",
                        "midpointTop" : "50.05336179295624",
                        "midpointLeft" : "43.95733053074094"
                    },
                    {
                        "Name" : "Plea",
                        "midpointTop" : "87.72678762006404",
                        "midpointLeft" : "43.95733053074094"
                    }
                ]
    
            }
        }
    
    /******************************
     * Gibt es guestObj im localStorage?
     *****************************/                
    
        if(localStorage.getItem('store_guestObj')){
            console.log('guestObj existiert - guestObj laden!');
            var guestObj = JSON.parse(localStorage.getItem('store_guestObj'));
        }
        else{
            console.log('guestObj existiert nicht - guestObj erstellen!');
    
            var guestObj = {
                "Name": "Namen eingeben",
                "Logo": "img/guest.png",
                "lastModus": "landscape",
                "Player":[
                    {   // Keeper
                        "Name" : "Neuer",
                        "midpointTop" : "49.98832710779082",
                        "midpointLeft" : "96.13809774040988"
                    },
                    {   // Defense
                        "Name" : "Davies",
                        "midpointTop" : "87.72678762006404",
                        "midpointLeft" : "84.944403573305308"
                    },
                    {
                        "Name" : "Süle",
                        "midpointTop" : "68.08964781216649",
                        "midpointLeft" : "84.944403573305308"
                    },
                    {
                        "Name" : "Martinez",
                        "midpointTop" : "31.483457844183565",
                        "midpointLeft" : "84.944403573305308"
                    },
                    {
                        "Name" : "Alaba",
                        "midpointTop" : "11.953041622198505",
                        "midpointLeft" : "84.944403573305308"
                    },
                    {   // Midfield
                        "Name" : "Kimmich",
                        "midpointTop" : "31.483457844183565",
                        "midpointLeft" : "74.277036258539148"
                    },
                    {
                        "Name" : "Thiago",
                        "midpointTop" : "68.08964781216649",
                        "midpointLeft" : "74.277036258539148"
                    },
                    {
                        "Name" : "Goretzka",
                        "midpointTop" : "50.05336179295624",
                        "midpointLeft" : "69.600210194429845‬"
                    },
                    {   // Offensive
                        "Name" : "Comman",
                        "midpointTop" : "11.953041622198505",
                        "midpointLeft" : "57.04266946925906‬"
                    },
                    {
                        "Name" : "Lewandowski",
                        "midpointTop" : "50.05336179295624",
                        "midpointLeft" : "57.04266946925906‬"
                    },
                    {
                        "Name" : "Perisic",
                        "midpointTop" : "87.72678762006404",
                        "midpointLeft" : "57.04266946925906‬"
                    }
                ]
            }
        }
    
        console.log('localStorage: ', localStorage.getItem('store_guestObj'));
        console.log('homeObj: ', homeObj);
        console.log('guestObj: ', guestObj);
    
    
    
    /******************************
     Funktionen
    *****************************/        
    
        /**
         *  Bevor die Seite verlassen wird, wird die Orientierung im Objekt gespeichert
         */             
    
            //window.addEventListener('beforeunload', function(event) {
            $(window).on('beforeunload', function(){
    
                console.log('Anwendung wird Verlassen!');
    
                localStorage.setItem('store_homeObj',JSON.stringify(homeObj));
                localStorage.setItem('store_guestObj',JSON.stringify(guestObj));
    
            });
    
    
    
    
        /**
         * Berechnet die Positionen der Spielerbox
         */
    
            var getDimensions = {
                // Funktionen werden in dieser Reihenfolge aufgerufen
                init: function(i,team){
                    this.setVars(i,team);
                    this.getOrientation();
                    this.getBoxSizesInPx();
                    this.getElementPosInPx();
                    this.getElementPosInPct();
                    this.getElementSizesInPx();
                    this.getElementSizesInPct();
                    this.getElementHalfInPct();
                    this.getPlayernamePosInPx();
                    this.getPlayernamePosInPct();
                    this.getPlayernameSizesInPx();
                    this.getPlayernameSizesInPct();
                },
                // Variablen Werte geben
                setVars: function(i,team){

                    if(team == 'home'){
                        this.obj     = homeObj;
                        this.element = $('#field > #homeTactics > .player:eq('+i+')');
                        this.playerName = $('#field > #homeTactics > .player:eq('+i+') > span.playerName');
                    }
    
                    if(team == 'guest'){
                        this.obj     = guestObj;
                        this.element = $('#field > #guestTactics > .player:eq('+i+')');
                        this.playerName = $('#field > #guestTactics > .player:eq('+i+') > span.playerName');
                    }
    
                    this.box = $('#field');
                    
                },
                // Aktuellen Modus speichern
                getOrientation: function(){
                    // Aktuller Modus: landscape
                    if ($(window).innerWidth() > $(window).innerHeight()){
                        this.modusNow = 'landscape';
                    }
    
                    // Aktuller Modus: portrait
                    if ($(window).innerHeight() > $(window).innerWidth()){
                        this.modusNow = 'portrait';
                        // console.log('getOrientation');
                    }
                },
                // Eltern Element Breite/Höhe speichern - #field
                getBoxSizesInPx: function(){
                    // Breithe/Höhe vom umgebenden Element
                    // this.boxSizes_heightInPx = this.box.height();    // does not include the padding, border and margin.                                             
                    // this.boxSizes_widthInPx = this.box.width();  // does not include the padding, border and margin.  
                    this.boxSizes_outerHeightInPx = this.box.outerHeight(true);   // include the padding, border and margin.                                              
                    this.boxSizes_outerWidthInPx = this.box.outerWidth(true);  // include the padding, border and margin.                                                 
                },
                // Kind Element Top/Left in Px speichern - .player
                getElementPosInPx: function(){
                    this.elementPosInPx_top = this.element.position().top;
                    this.elementPosInPx_left = this.element.position().left;
                },
                // Kind Element Top/Left in % speichern - .player
                getElementPosInPct: function(){
                    this.elementPosInPct_top = (this.elementPosInPx_top / this.boxSizes_outerHeightInPx) * 100;
                    this.elementPosInPct_left = (this.elementPosInPx_left / this.boxSizes_outerWidthInPx) * 100;        
                },
                // Kind Element Breite/Höhe in Px speichern - .player
                getElementSizesInPx: function(){
                    // this.elementHeightInPx = this.element.height(); // does not include the padding, border and margin.
                    // this.elementWidthInPx = this.element.width(); // does not include the padding, border and margin.
                    this.elementOuterHeightInPx = this.element.outerHeight(true); // include the padding, border and margin.
                    this.elementOuterWidthInPx = this.element.outerWidth(true); // include the padding, border and margin.  

                    // console.log('this.elementHeightInPx: ' + this.elementHeightInPx);
                    // console.log('this.elementWidthInPx: ' + this.elementWidthInPx);
                },
                // Kind Element Breite/Höhe in % speichern - .player
                getElementSizesInPct: function(){
                    this.elementHeightInPct = (this.elementOuterHeightInPx / this.boxSizes_outerHeightInPx) * 100;
                    this.elementWidthInPct = (this.elementOuterWidthInPx / this.boxSizes_outerWidthInPx) * 100;    
                },
                // Hälfte Breite/Höhe des Kind Elements in % - .player 
                getElementHalfInPct: function(){
                    this.elementHalfInPct_height = ((this.elementOuterHeightInPx/2) / this.boxSizes_outerHeightInPx) * 100;
                    this.elementHalfInPct_width = ((this.elementOuterWidthInPx/2) / this.boxSizes_outerWidthInPx) * 100;  
                    // console.log('getElementHalfInPct . elementHalfInPct_height: ', this.elementHalfInPct_height);
                    // console.log('getElementHalfInPct . elementHalfInPct_width: ', this.elementHalfInPct_width);
                },
                // Top/Left Werte der Spielernamensbox zum Eltern Element .player in Px
                getPlayernamePosInPx: function(){
                    this.playerNamePosInPx_top = this.playerName.position().top;
                    this.playerNamePosInPx_left = this.playerName.position().left;
                    // console.log('playerNamePosInPx_top: ' + this.playerNamePosInPx_top);
                    // console.log('playerNamePosInPx_left: ' + this.playerNamePosInPx_left);
                },
                // Top/Left Werte der Spielernamensbox zum Eltern Element .player in % (Beachten: Der % Wert bezieht sich nicht auf #Field)
                getPlayernamePosInPct: function(){
                    this.getPlayernamePosInPct_top = (this.playerName.position().top / this.elementOuterHeightInPx) * 100;
                    this.getPlayernamePosInPct_left = (this.playerName.position().left / this.elementOuterWidthInPx) * 100;
                    // console.log('getPlayernamePosInPct_top: ' + this.getPlayernamePosInPct_top);
                    // console.log('getPlayernamePosInPct_left: ' + this.getPlayernamePosInPct_left);
                },
                // Höhe/Breite der Spielernamensbox in Px
                getPlayernameSizesInPx: function(){
                    this.playernameSizesInPx_height = this.playerName.height(); // does not include the padding, border and margin.
                    this.PlayernameSizesInPx_width = this.playerName.width(); // does not include the padding, border and margin.
                    this.playernameSizesInPx_outerHeight = this.playerName.outerHeight(true); // include the padding, border and margin.
                    this.PlayernameSizesInPx_outerWidth = this.playerName.outerWidth(true); // include the padding, border and margin.

                    // console.log('playernameSizesInPx_height: ' + this.playernameSizesInPx_height);
                    // console.log('PlayernameSizesInPx_width: ' + this.PlayernameSizesInPx_width);
                },
                // Höhe/Breite der Spielernamensbox in %
                getPlayernameSizesInPct: function(){
                    this.playernameSizesInPct_height = (this.playerName.height() / this.elementOuterHeightInPx) * 100;
                    this.PlayernameSizesInPct_width = (this.playerName.width() / this.elementOuterWidthInPx) * 100;
                    // console.log('playernameSizesInPct_height: ' + this.playernameSizesInPct_height);
                    // console.log('PlayernameSizesInPct_width: ' + this.PlayernameSizesInPct_width);
                },
                // Berechnet den Mittelpunkt Top/Left der Box .player und trägt die Werte ins Objekt ein. Wird angewendet, wenn ein Spieler verschoben wird
                calcMidpointInPct: function(i){

                    // Wenn Landscape Modus
                    if(this.modusNow === 'landscape'){

                        /**
                         * Mittelpunkt Top: Abstand von Oben bis zum Mittelpunkt der Namensbox im aktuellen Modus (in %) berechnen
                         **
                         *  elementPosInPx_top                  = Abtand von der oberen Spielfeldkannte bis zur oberen Kannte der Spielerbox
                         *  playerNamePosInPx_top               = Abtand von der oberen Kannte der Spielerbox bis zur oberen Kannte der Namensbox
                         *  playernameSizesInPx_outerHeight/2   = Höhe der Namensbox / 2 = Hälfte der Höhe der Namensbox
                         *  boxSizes_outerHeightInPx            = Höhe von #field (Spielfeld, ist das Eltern Element der Spielerbox)
                         *  Dieser Wert ergibt den Abstand (in Px) von der oberen Spielfeldkannte bis zum Mittelpunkt der Namensbox
                         **
                         *  Danach wird der % Anteil dieses Wertes im Verhältnis zum Spielfeld berechnet
                         */
                        this.getMidpointTopInPct = ((this.elementPosInPx_top + this.playerNamePosInPx_top + (this.playernameSizesInPx_outerHeight/2)) / this.boxSizes_outerHeightInPx) * 100;

                        /**
                         * Mittelpunkt Left: Abstand von Links bis zum Mittelpunkt der Namensbox im aktuellen Modus (in %) berechnen
                         **
                         *  elementPosInPx_left           = Abtand von der linken Spielfeldkannte bis zur linken Kannte der Spielerbox
                         *  elementOuterWidthInPx/2       = Breite der Namensbox / 2 = Hälfte der Breite der Namensbox
                         *  boxSizes_outerWidthInPx       = Breite von #field (Spielfeld, ist das Eltern Element der Spielerbox)
                         *  Dieser Wert ergibt den Abstand (in Px) von der linken Spielfeldkannte bis zum Mittelpunkt der Namensbox
                         **
                         *  Danach wird der % Anteil dieses Wertes im Verhältnis zum Spielfeld berechnet
                         */
                        this.getMidpointLeftInPct = ((this.elementPosInPx_left + (this.elementOuterWidthInPx/2)) / this.boxSizes_outerWidthInPx) * 100;

                    }

                    // Wenn Portrait Modus
                    if(this.modusNow === 'portrait'){

                        /**
                         * Die Werte werden immer so berechnet, als wenn man sie im Landscape Modus berechnen würde!
                         * Daher wird im Portraitmodus für den Wert Top, der Abstand von Rechts bis zum Mittelpunkt der Namensbox verwendet
                         * Für Left wird der Wert von Top bis zum Mittelpunkt der Namensbox verwendet
                         */
                        
                        /**
                         * Mittelpunkt Top: Breite - Abstand von Links bis zum Mittelpunkt der Namensbox im aktuellen Modus (in %) berechnen
                         **
                         *  boxSizes_outerWidthInPx      = Breite von #field (Spielfeld, ist das Eltern Element der Spielerbox)
                         *  elementPosInPx_left          = Abtand von der linken Spielfeldkannte bis zur linken Kannte der Spielerbox
                         *  elementOuterWidthInPx/2      = Breite der Namensbox / 2 = Hälfte der Breite der Namensbox
                         *  Dieser Wert ergibt den Abstand (in Px) von der rechten Spielfeldkannte bis zum Mittelpunkt der Namensbox
                         **
                         *  Danach wird der % Anteil dieses Wertes im Verhältnis zum Spielfeld berechnet
                         */
                        this.getMidpointTopInPct = ((this.boxSizes_outerWidthInPx - (this.elementPosInPx_left + (this.elementOuterWidthInPx/2))) / this.boxSizes_outerWidthInPx) * 100;
                        
                        /**
                         * Mittelpunkt Left: Abstand von Oben bis zum Mittelpunkt der Namensbox im aktuellen Modus (in %) berechnen
                         **
                         *  elementPosInPx_top                  = Abtand von der oberen Spielfeldkannte bis zur oberen Kannte der Spielerbox
                         *  playerNamePosInPx_top               = Abtand von der oberen Kannte der Spielerbox bis zur oberen Kannte der Namensbox
                         *  playernameSizesInPx_outerHeight/2   = Höhe der Namensbox / 2 = Hälfte der Höhe der Namensbox
                         *  boxSizes_outerHeightInPx            = Höhe von #field (Spielfeld, ist das Eltern Element der Spielerbox)
                         *  Dieser Wert ergibt den Abstand (in Px) von der oberen Spielfeldkannte bis zum Mittelpunkt der Namensbox
                         **
                         *  Danach wird der % Anteil dieses Wertes im Verhältnis zum Spielfeld berechnet
                         */
                        this.getMidpointLeftInPct = ((this.elementPosInPx_top + this.playerNamePosInPx_top + (this.playernameSizesInPx_outerHeight/2)) / this.boxSizes_outerHeightInPx) * 100;
                    }


                    // Trägt die neuen Mittelpunkt Werte ins Objekt ein
                    this.obj.Player[i].midpointTop     = this.getMidpointTopInPct; // Mittelpunkt Top
                    this.obj.Player[i].midpointLeft    = this.getMidpointLeftInPct; // Mittelpunkt Left


                },
                // Berechnet die Position Top/Left der Box .player anhand der Mittelpunkt Werte
                calcPositionsInPct: function(i){
    
                    /**
                     * Mittelpunkt Werte für Top/Left kommen aus dem Objekt
                     * Spielerboxen müssen geladen sein, damit deren Maße auf der aktullen Displaygröße erfasst werden können
                     * Jetzt hat man die Dimensionen von Spielerboxen, Spielfeld
                     * Anhand der Mittelpunkte und der Maße werden die Boxen so platziert, dass sie am Mittelpunkt platziert sind
                     * Dann braucht man nur je nach Modus (Landscape/Portrait) die aktuelle Höhe oder Breite der Spielerbox in % vom Top oder Left Wert abziehen
                     * Die Werte werden immer so berechnet, als wenn man sie im Landscape Modus berechnen würde!
                     */

                    // Wenn Landscape Modus
                    if(this.modusNow === 'landscape'){
                        
                        // Top: Top Mittelpunkt Wert - Abstand von der Mitte der Namensbox bis zur oberen Kannte der umgebenden Box in % 
                        this.getPlayerPosTopInPct = parseFloat(this.obj.Player[i].midpointTop) - (((this.playerNamePosInPx_top + this.playernameSizesInPx_outerHeight/2) / this.boxSizes_outerHeightInPx) * 100);
                        // this.getPlayerPosTopInPct = parseFloat(this.obj.Player[i].midpointTop) - (((this.playerNamePosInPx_top + this.playernameSizesInPx_height/2) / this.boxSizes_outerHeightInPx) * 100);

                        // Left: Left Mittelpunkt Wert - Hälfte der Spielerbox in %
                        this.getPlayerPosLeftInPct = parseFloat(this.obj.Player[i].midpointLeft) - this.elementHalfInPct_width;

                    }
    
                    // Wenn Landscape Modus
                    if(this.modusNow === 'portrait'){

                        // Top: Left Mittelpunkt Wert - Abstand von der Mitte der Namensbox bis zur oberen Kannte der umgebenden Box in % 
                        this.getPlayerPosTopInPct = parseFloat(this.obj.Player[i].midpointLeft) - (((this.playerNamePosInPx_top + this.playernameSizesInPx_outerHeight/2) / this.boxSizes_outerHeightInPx) * 100);
                        
                        // Left: Top Mittelpunkt Wert - Hälfte der Spielerbox in %
                        this.getPlayerPosLeftInPct = 100 - parseFloat(this.obj.Player[i].midpointTop) - this.elementHalfInPct_width;

                    }
                }

            }

    
    /******************************
     Daten aus Objekt ins Dashboard laden
    ******************************/ 
        
        /**
         * Zu aller erst die Spieler Boxen laden mit Daten (Name, Logo, Position)
         */
            loadPlayerData();
    
    
        /**
         *  orientationchange
         */             
    
            // Ändert sich die Ausrichtung vom Gerät
            $(window).on('orientationchange', function(e){
    
                console.log('orientationchange');
                    
                // *** Ohne setTimeout könnten die neuen Maße noch nicht bereit stehen
                setTimeout(function(){
                            
                    // Spieler laden - mit den neuen Objekt Daten
                    loadPlayerData();
        
                }, 500);
    
            });
    
    
        /**
         *  Mannschaftsnamen laden
         */             
    
            loadTeamName();
    
        /**
         *  Logo laden
         */             
    
            loadLogo();
    
    
        /**
         *  Spieler
         */ 
    
            /**
             *  Funktion um zu Spieler erstellen
             */ 
    
                function loadPlayerData(){      
                    
                    // Entfernt die Spieler, falls schon geladen             
                    $('#field > #homeTactics').empty(); 
                    $('#field > #guestTactics').empty();                          
                                        
                    // Spieler laden
                    createPlayer('#homeTactics',homeObj,'home');
                    createPlayer('#guestTactics',guestObj,'guest');
    
                    // Erstellt alle Spieler mit ihren Daten aus dem Objekt
                    function createPlayer(element,obj,team){
    
                        // Spielerbox .player HTML Block
                        let player = '<div class="player" data-player-number="">\
                        <img src="img/logo-dummy.svg" alt="" class="playerLogo">\
                        <span class="playerName"></span>\
                        </div>'; 
    
                        for (let i = 0; i < obj.Player.length; i++) {
                            // Player HTML Block ans Ende innerhalb von #field einfügen 
                            $('#field > '+element+'').append(player);
    
                            // Logo im hinzugefügtem HTML Block einfügen 
                            $('#field > '+element+' > .player:eq('+i+') > img').attr('src',obj.Logo);
    
                            // Spielernamen als Alt Attribut hinzufügen
                            $('#field > '+element+' > .player:eq('+i+') > img').attr('alt', obj.Player[i].Name);
    
                            // Spielernummer ins Data Attribut hinzufügen
                            $('#field > '+element+' > .player:eq('+i+')').attr('data-player-number',i);
    
                            // Spielernamen einfügen
                            $('#field > '+element+' > .player:eq('+i+') > .playerName').text(obj.Player[i].Name);
    
                            // Spieler positionieren

                                // Aktuellen Maße ermitteln...
                                getDimensions.init(i,team);

                                // ...und die Positionen berechnen
                                getDimensions.calcPositionsInPct(i);

                                // Spieler positionieren
                                $('#field > '+element+' > .player:eq('+i+')').css({'top':''+getDimensions.getPlayerPosTopInPct+'%','left':''+getDimensions.getPlayerPosLeftInPct+'%'});                            
                        }
                    }
    
                    /**
                     *  Spieler verschieben können
                     */
    
                    $('.player').draggable({
                        cursor: 'pointer'
                    });
    
                }
                        
    
        /**
         *  Team Namen 
         */ 
    
            function loadTeamName(){              
                
                /**
                 *  Home
                 */      
    
                    // Wenn homeObj.Name existiert, den Wert ins Menü einfügen
                    if(homeObj.Name){
                        $('#homeName').text(homeObj.Name);
                    }
    
                /**
                 *  Guest
                 */         
    
                    if(guestObj.Name){
                        $('#guestName').text(guestObj.Name);
                    }
    
            }
    
    
        /**
         *  Logos
         */                
    
            function loadLogo(){              
    
                // Wenn homeObj.Logo existiert, Bild ins Menü einfügen
                if(homeObj.Logo){
                    $('#homeLogo > img').attr('src', homeObj.Logo);
                }
    
                if(guestObj.Logo){
                    $('#guestLogo > img').attr('src', guestObj.Logo);
                }        
                    
            }
    
    
    
    /******************************
     Änderungen speichern
    ******************************/ 
    
        /**
         *  Spieler Daten
         */         
        
            /**
             *  Spielernamen im Objekt speichern
             */         
    
                /**
                 *  Home
                 */      
    
                    $('nav').on('change', '#menuEditPlayerHome > li', function(e){
                                                    
                        // Speichert den geänderten Spielernamen im Array vom Objekt
                        homeObj.Player[$(this).data('player-number')].Name = $('.editPlayerName',this).val();  
                    
                    });
    
                /**
                 *  Guest
                 */         
    
                    $('nav').on('change', '#menuEditPlayerGuest > li', function(e){
                    
                        // Speichert den geänderten Spielernamen im Array vom Objekt
                        guestObj.Player[$(this).data('player-number')].Name = $('.editPlayerName',this).val();
    
                    });    
    
    
            /**
             *  Spieler Positionen im Objekt speichern
             *  Später brauche ich evtl. noch: touchend
             */        
    
                /**
                 *  Home
                 */      
    
                    $('#field').on('mouseup', '#homeTactics > .player', function(e){
    
                        console.log('Spieler Positionen im Objekt speichern');
    
                        // Die neue Position wird berechnet...
                        getDimensions.init($(this).data('player-number'),'home');
                        getDimensions.calcMidpointInPct($(this).data('player-number'));

                        console.log('homeObj: ', homeObj);
                            
                    });
    
    
                /**
                 *  Guest
                 */      
    
                    $('#field').on('mouseup', '> #guestTactics > .player', function(e){
    
                        console.log('Spieler Positionen im Objekt speichern');
                        
                        // Die neue Position wird berechnet...
                        getDimensions.init($(this).data('player-number'),'guest');
                        getDimensions.calcMidpointInPct($(this).data('player-number'));
    
                        console.log('guestObj: ', guestObj);           
    
                    });            
    
    
    
        /**
         *  Team Namen im Objekt speichern
         */                
    
            /**
             *  Teamnamen Änderung erkennen und speichern
             */     
            
                /**
                 *  Home
                 */     
    
                    $('nav').on('change', '#menuEditTeamHome > li > .editTeamName', function(e){
    
                        console.log('change menuEditTeamHome');
    
                        // Text aus <textarea> speichern
                        let getTeamHomeName = $('#menuEditTeamHome > li > .editTeamName').val();
    
                        // Text als neuen Wert für Objekt Key einfügen 
                        homeObj.Name = getTeamHomeName;
    
                    });
    
                /**
                 *  Guest
                 */
    
                    $('nav').on('change', '#menuEditTeamGuest > li > .editTeamName', function(e){
    
                        console.log('change menuEditTeamGuest');
    
                        let getTeamGuestName = $('#menuEditTeamGuest > li > .editTeamName').val();
                        guestObj.Name = getTeamGuestName;
                    });    
    
    
            
    
        
        /**
         *  Logo im Objekt speichern
         */                
    
            /**
             *  Logo Upload bei Klick auf Button starten
             */                
    
                $('nav').on('click', '#menuEditLogoHome > li.menuEditLogoButtons > .btnUploadLogo', function(e){
                    console.log( 'trigger upload logo home' );
                    $('#menuEditLogoHome > li.menuEditLogoButtons > .uploadLogo').trigger('click'); 
                });
    
                $('nav').on('click', '#menuEditLogoGuest > li.menuEditLogoButtons > .btnUploadLogo', function(e){
                    console.log( 'trigger upload logo guest' );
                    $('#menuEditLogoGuest > li.menuEditLogoButtons > .uploadLogo').trigger('click'); 
                });
    
    
            /**
             *  Wenn neues Logo hochgeladen wird
             */                
    
                $('nav').on('change', '#menuEditLogoHome > li.menuEditLogoButtons > .uploadLogo', function(getId){
                    fnLogoUpload(this,'home');
                });
    
                $('nav').on('change', '#menuEditLogoGuest > li.menuEditLogoButtons > .uploadLogo', function(getId){
                    fnLogoUpload(this,'guest');
                });        
    
                function fnLogoUpload(field,team){
    
                    // Wenn FileList Objekt von <input> eine Datei enthält. field = this: <input type="file">
                    if (field.files && field.files[0]) {    
    
                        // Speichert Datei aus <input type="file">
                        var getFile = field.files[0];
    
                        // Instanz von FormData()
                        var newFormData = new FormData(); 
                        
                    /***  
                     *   Fügt die Datei an den Wert eines bestehenden Schlüssel/Wert-Paares in einem FormData-Objekt an, 
                     *   oder fügt den Schlüssel mit dem Wert hinzu hinzu, falls dieser nicht vorhanden ist. 
                     *   teamLogo:File
                     */
                        newFormData.append('teamLogo', getFile);
    
                    /**
                     *  MimeType des Logos wird geprüft
                     */                
    
                        // Datei wird ans PHP Script gesendet, welches den MimeType prüft und gibt das Ergebnis zurück (response)
                        $.ajax({
                            url: 'php/script.php',
                            type: 'post',
                            data: newFormData,
                            contentType: false,
                            processData: false,
                            success: function(response){
                                if(response != 0){
                                    console.log( 'Data Loaded: ', response );
                                    storeLogo(getFile);                                         // File entspricht MimeType, Funktion zum lokalen speichern aufrufen
                                }else{
                                    console.log('file not uploaded');
                                }
                            },
                            error: function(response){
                                console.log('error!', response);
                            },
                            statusCode: {
                                404: function() {
                                console.log('404 page not found');
                                }
                            },
                            complete:function(response){
                                console.log('complete!', response);
                            }
                        });                
    
                    /**
                     *  Wird nur aufgerufen, wenn MimeType des Logos ok ist
                     *  Fügt das Logo ein
                     *  Speichert Logo im Obj
                     */                
    
                        function storeLogo(pmGetFile){
    
                            // FileReader-Objekt Instanz
                            var fileReader = new FileReader();
                            
                            // Wenn fileReader 'gestartet' wurde. Geschieht weiter unten mit fileReader.readAsDataURL(this.files[0]);
                            $(fileReader).on('load',function(e) {
    
                                // FileReader Obj enthält jetzt: result: 'data:...'
                                // console.log( 'fileReader: ', fileReader);
    
                                /**
                                 * Home
                                 */ 
                                    if(team == 'home'){
                                        
                                        // Logo File im Objekt speichern
                                        homeObj.Logo = fileReader.result
    
                                        // Neues Logo in die Logo Bearbeitungsmaske einfügen
                                        $('nav > #menuEditLogoHome > li.menuEditLogoImg > img').attr('src', fileReader.result);
    
                                        // disabled aus Delete Button entfernen
                                        $('nav > #menuEditLogoHome > li.menuEditLogoButtons > .btnDeleteLogo').prop("disabled", false);
    
                                        // Delete Button Sichtbarkeit auf 100%
                                        $('nav > #menuEditLogoHome > li.menuEditLogoButtons > .btnDeleteLogo').css({'opacity':'1'});
    
                                }
    
                                /**
                                 * Guest
                                 */ 
                                    if(team == 'guest'){
    
                                        // Logo File im Objekt speichern
                                        guestObj.Logo = fileReader.result
    
                                        // Neues Logo in die Logo Bearbeitungsmaske einfügen
                                        $('nav > #menuEditLogoGuest > li.menuEditLogoImg > img').attr('src', fileReader.result);
    
                                        // disabled aus Delete Button entfernen
                                        $('nav > #menuEditLogoGuest > li.menuEditLogoButtons > .btnDeleteLogo').prop("disabled", false);
    
                                        // Delete Button Sichtbarkeit auf 100%
                                        $('nav > #menuEditLogoGuest > li.menuEditLogoButtons > .btnDeleteLogo').css({'opacity':'1'});                            
    
                                    }
    
                            });
    
                            // *** Startet den Lesevorgang und liest den spezifierten Blob und, wenn der Lesevorgang abgeschlossen ist, enthält result die Daten als Data-URL. ***
                            //console.log( 'fileReader: ', fileReader);
                            fileReader.readAsDataURL(pmGetFile);
    
                        }
                    }
    
                }
    
    
    /***************************************
     Menü 
    ***************************************/  
    
        /**
         *  Hauptmenü > Bearbeitungs Menü  
         */ 
    
            // Klick auf Burger Icon
            $('#edit').click(function(){
                
                // Wird das Bearbeitungs Menü angezeigt oder nicht?
                let subMenuStatus = $('#editMenu').css('display');
            
                // Bearbeitungs Menü wird nicht angezeigt
                if (subMenuStatus == 'none') {
                
                    // Bearbeitungs Menü anzeigen
                    $('#editMenu').css({'display':'grid'});
                    // $('#infoMenu').css({'display':'grid'});

                
                    //  Hauptmenü Icon in "schließen" ändern
                    $('#edit > img').attr('src','img/111210-interface-and-web_cross-sign.svg');
                
                } 
                // Bearbeitungs Menü wird angezeigt
                else {
                    
                    // Bearbeitungs Menü ausblenden
                    $('#editMenu').css({'display':'none'});
                    $('#infoMenu').css({'display':'none'});

                    // Wenn das Bearbeitungs Menü geschlossen wird, müssen auch dessen Bearbeitungs Masken geschlossen werden.
                    $('nav > #editMenu').next().remove()
                
                    // Hauptmenü Icon in "öffnen" ändern
                    $('#edit > img').attr('src','img/111210-interface-and-web_menu-button-of-three-horizontal-lines.svg');
    
                    
                    // Wenn das Menü geschlossen wird,...
    
                        // // ...werden beide aktuellen Objekte im localStorage gespeichert
                        // localStorage.setItem('store_homeObj',JSON.stringify(homeObj));
                        // localStorage.setItem('store_guestObj',JSON.stringify(guestObj));
    
                        // ...die Daten werden neu ins Dashboard geladen
                        
                            // Spieler Daten - Name, Logo, Position
                            loadPlayerData();
    
                            // Mannschaftsnamen
                            loadTeamName();
    
                            // Logo
                            loadLogo();
    
                }
                
            }); 
    
        /**
         *  Hauptmenü > Bearbeitungs Menü > Spielernamen 
         */ 
    
            /**
             *  Home 
             */     
    
                // Klick auf Spielernamen Button
                $('#btnEditPlayerHome').click(function(){
                    
                    // Wird die Spielernamen Bearbeitungs Maske angezeigt oder nicht?
                    let subMenuStatus = $('nav > #menuEditPlayerHome').html();
                
                    // Spielernamen Bearbeitungs Maske wird nicht angezeigt
                    if (typeof subMenuStatus == 'undefined') {
    
                        // Entfernt eine Bearbeitungs Maske die evtl. vorher geöffnet wurde. Stellt sicher, dass immer nur eine Maske geöffnet ist.
                        $('nav > #editMenu').next().remove()
    
                        // Textfelder mit Spielernamen laden
                        loadPlayerTextfields('home');
                    
                        // Button formatieren
                        //$('#btnEditPlayerHome').css({'background-color':'rgba(255, 255, 0,  0.8)','color':'rgba(0, 30, 72, 0.8)'});
                    
                    } 
                    // Spielernamen Bearbeitungs Maske wird angezeigt
                    else {
                        
                        // Spielernamen Bearbeitungs Maske löschen
                        $('nav > #menuEditPlayerHome').remove();
                    
                        // Button formatieren
                        //$('#btnEditPlayerHome').css({'background-color':'rgba(0, 30, 72, 1)','color':'rgba(255, 255, 255, 1)'});      
                    }
                    
                });         
    
            /**
             *  Guest 
             */     
    
                $('#btnEditPlayerGuest').click(function(){
                        
                    // Wird die Spielernamen Bearbeitungs Maske angezeigt oder nicht?
                    let subMenuStatus = $('nav > #menuEditPlayerGuest').html();
                
                    // Spielernamen Bearbeitungs Maske wird nicht angezeigt
                    if (typeof subMenuStatus == 'undefined') {
    
                        // Entfernt eine Bearbeitungs Maske die evtl. vorher geöffnet wurde. Stellt sicher, dass immer nur eine Maske geöffnet ist.
                        $('nav > #editMenu').next().remove();
    
                        // Textfelder mit Spielernamen laden
                        loadPlayerTextfields('guest');
                    
                        // Button formatieren
                        //$('#btnEditPlayerGuest').css({'background-color':'rgba(255, 255, 0,  0.8)','color':'rgba(0, 30, 72, 0.8)'});
                    
                    } 
                    // Spielernamen Bearbeitungs Maske wird angezeigt
                    else {
                        
                        // Spielernamen Bearbeitungs Maske löschen
                        $('nav > #menuEditPlayerGuest').remove();
                    
                        // Button formatieren
                        //$('#btnEditPlayerGuest').css({'background-color':'rgba(0, 30, 72, 1)','color':'rgba(255, 255, 255, 1)'});      
                    }
                    
                });         
    
    
    
    
    
            /**
             *  Funktion: Textfelder mit Spielernamen laden
             */ 
                
                function loadPlayerTextfields(team){
    
    
                    /**
                     *  Spielernamen HTML Block
                     */ 
                        var playerTextFields = '<li data-player-number="">\
                        <span class="editPlayerNum"></span>\
                        <input type="text" size="12" maxlength="12" class="editPlayerName" placeholder="Spielernamen eingeben">\
                        </li>';            
    
                    /**
                     *  Home
                     */                
    
                        if(team == 'home'){
    
                            // Spielernamen Bearbeitungs Maske 
                            let setEditMenu = '<ul id="menuEditPlayerHome" class="menuEditData"></ul>';
    
                                // HTML Block ans Ende von <nav> einfügen
                                $('nav').append(setEditMenu);                
    
                            // Jeden Spieler aus Obj durchlaufen
                            for (let i = 0; i < homeObj.Player.length; i++) {
    
                                // <li> HTML Block mit Textfeld ans Ende innerhalb von <ul> einfügen
                                $('nav > #menuEditPlayerHome').append(playerTextFields);
    
                                // Spielernummer einfügen
                                $('nav > #menuEditPlayerHome > li:eq('+i+') > span').text(i+1);
    
                                // Spielernummer ins Data Attribut einfügen
                                $('nav > #menuEditPlayerHome > li:eq('+i+')').attr('data-player-number',i);
    
                                // Spielernamen ins Textfeld einfügen
                                $('nav > #menuEditPlayerHome > li:eq('+i+') > input.editPlayerName').val(homeObj.Player[i].Name);
    
                            }
    
                        }
    
                    /**
                     *  Guest
                     */                
    
                        if(team == 'guest'){
    
                            // Spielernamen Bearbeitungs Maske 
                            let setEditMenu = '<ul id="menuEditPlayerGuest" class="menuEditData"></ul>';
                            
                                // HTML Block ans Ende von <nav> einfügen    
                                $('nav').append(setEditMenu);                
    
                            // Jeden Spieler aus Obj durchlaufen
                            for (let i = 0; i < guestObj.Player.length; i++) {
    
                                // <li> HTML Block mit Textfeld ans Ende innerhalb von <ul></ul> einfügen
                                $('nav > #menuEditPlayerGuest').append(playerTextFields);
    
                                // Spielernummer einfügen
                                $('nav > #menuEditPlayerGuest > li:eq('+i+') > span').text(i+1);
    
                                // Spielernummer ins Data Attribut einfügen
                                $('nav > #menuEditPlayerGuest > li:eq('+i+')').attr('data-player-number',i);
    
                                // Spielernamen ins Textfeld einfügen
                                $('nav > #menuEditPlayerGuest > li:eq('+i+') > input.editPlayerName').val(guestObj.Player[i].Name);
    
                            }
    
                        }            
    
                }
    
    
        /**
         *  Hauptmenü > Bearbeitungs Menü > Mannschaftsnamen 
         */ 
    
            /**
             *  Home 
             */     
    
                $('#btnEditTeamHome').click(function(){
                        
                    // Wird die Mannschaftsnamen Bearbeitungs Maske angezeigt oder nicht?
                    let subMenuStatus = $('nav > #menuEditTeamHome').html();
                
                    // Mannschaftsname Bearbeitungs Maske wird nicht angezeigt
                    if (typeof subMenuStatus == 'undefined') {
    
                        // Entfernt eine Bearbeitungs Maske die evtl. vorher geöffnet wurde. Stellt sicher, dass immer nur eine Maske geöffnet ist.
                        $('nav > #editMenu').next().remove();
    
                        // Textfeld mit Mannschaftsname laden
                        loadTeamTextfields('home');
                    
                        // Button formatieren
                        //$('#btnEditTeamHome').css({'background-color':'rgba(255, 255, 0,  0.8)','color':'rgba(0, 30, 72, 0.8)'});
                    
                    } 
                    // Mannschaftsname Bearbeitungs Maske wird angezeigt
                    else {
                        
                        // Mannschaftsnamen Bearbeitungs Maske löschen
                        $('nav > #menuEditTeamHome').remove();
                    
                        // Button formatieren
                        //$('#btnEditTeamHome').css({'background-color':'rgba(0, 30, 72, 1)','color':'rgba(255, 255, 255, 1)'});      
                    }
                    
                });         
    
    
            /**
             *  Guest 
             */     
    
                $('#btnEditTeamGuest').click(function(){
                        
                    // Wird die Mannschaftsnamen Bearbeitungs Maske angezeigt oder nicht?
                    let subMenuStatus = $('nav > #menuEditTeamGuest').html();
                
                    // Mannschaftsnamen Bearbeitungs Maske wird nicht angezeigt
                    if (typeof subMenuStatus == 'undefined') {
    
                        // Entfernt eine Bearbeitungs Maske die evtl. vorher geöffnet wurde. Stellt sicher, dass immer nur eine Maske geöffnet ist.
                        $('nav > #editMenu').next().remove();
    
                        // Textfeld mit Mannschaftsname laden
                        loadTeamTextfields('guest');
                    
                        // Button formatieren
                        //$('#btnEditTeamGuest').css({'background-color':'rgba(255, 255, 0,  0.8)','color':'rgba(0, 30, 72, 0.8)'});
                    
                    } 
                    // Mannschaftsname Bearbeitungs Maske wird angezeigt
                    else {
                        
                        // Mannschaftsnamen Bearbeitungs Maske löschen
                        $('nav > #menuEditTeamGuest').remove();
                    
                        // Button formatieren
                        //$('#btnEditTeamGuest').css({'background-color':'rgba(0, 30, 72, 1)','color':'rgba(255, 255, 255, 1)'});      
                    }
                    
                });         
    
    
    
            
    
            /**
             *  Funktion: Textfeld mit Mannschaftsname laden
             */ 
                
                function loadTeamTextfields(team){
    
    
                    /**
                     *  Mannschaftsname HTML Block
                     */ 
                        var teamTextFields = '<li><input type="text" size="12" maxlength="34" class="editTeamName" placeholder="Mannschaftsnamen eingeben"></li>';            
    
                    /**
                     *  Home
                     */                
    
                        if(team == 'home'){
    
                            // Mannschaftsname Bearbeitungs Maske 
                            let setEditMenu = '<ul id="menuEditTeamHome" class="menuEditData"></ul>';
    
                                // HTML Block ans Ende von <nav> einfügen
                                $('nav').append(setEditMenu);                
    
                            // <li> HTML Block mit Textfeld ans Ende innerhalb von <ul> einfügen
                            $('nav > #menuEditTeamHome').append(teamTextFields);
    
                            // Mannschaftsname ins Textfeld einfügen
                            $('nav > #menuEditTeamHome > li > input.editTeamName').val(homeObj.Name);
    
                        }
    
                    /**
                     *  Guest
                     */                
    
                        if(team == 'guest'){
    
                            console.log('guestObj:', guestObj);
    
                            // Mannschaftsname Bearbeitungs Maske 
                            let setEditMenu = '<ul id="menuEditTeamGuest" class="menuEditData"></ul>';
    
                                // HTML Block ans Ende von <nav> einfügen
                                $('nav').append(setEditMenu);                
    
                            // <li> HTML Block mit Textfeld ans Ende innerhalb von <ul> einfügen
                            $('nav > #menuEditTeamGuest').append(teamTextFields);
    
                            // Mannschaftsname ins Textfeld einfügen
                            $('nav > #menuEditTeamGuest > li > input.editTeamName').val(guestObj.Name);
    
                        }            
    
                }
    
    
        /**
         *  Hauptmenü > Bearbeitungs Menü > Logo 
         */ 
    
            /**
             *  Home 
             */     
    
                $('#btnEditLogoHome').click(function(){
                            
                    // Wird die Logo Bearbeitungs Maske angezeigt oder nicht?           
                    let subMenuStatus = $('nav > #menuEditLogoHome').html();
                
                    // Logo Bearbeitungs Maske wird nicht angezeigt
                    if (typeof subMenuStatus == 'undefined') {
    
                        // Entfernt eine Bearbeitungs Maske die evtl. vorher geöffnet wurde. Stellt sicher, dass immer nur eine Maske geöffnet ist.
                        $('nav > #editMenu').next().remove();
    
                        // Logo Maske laden
                        loadTeamLogoUpload('home');
                    
                        // Button formatieren
                        //$('#btnEditLogoHome').css({'background-color':'rgba(255, 255, 0,  0.8)','color':'rgba(0, 30, 72, 0.8)'});
                    
                    } 
                    // Logo Bearbeitungs Maske wird angezeigt
                    else {
                        
                        // Logo Bearbeitungs Maske löschen
                        $('nav > #menuEditLogoHome').remove();
                    
                        // Button formatieren
                        //$('#btnEditLogoHome').css({'background-color':'rgba(0, 30, 72, 1)','color':'rgba(255, 255, 255, 1)'});      
                    }
                    
                });         
    
            /**
             *  Guest 
             */     
    
                $('#btnEditLogoGuest').click(function(){
                            
                    // Wird die Logo Bearbeitungs Maske angezeigt oder nicht?           
                    let subMenuStatus = $('nav > #menuEditLogoGuest').html();
                
                    // Logo Bearbeitungs Maske wird nicht angezeigt
                    if (typeof subMenuStatus == 'undefined') {
    
                        // Entfernt eine Bearbeitungs Maske die evtl. vorher geöffnet wurde. Stellt sicher, dass immer nur eine Maske geöffnet ist.
                        $('nav > #editMenu').next().remove();
    
                        // Logo Maske laden
                        loadTeamLogoUpload('guest');
                    
                        // Button formatieren
                        //$('#btnEditLogoGuest').css({'background-color':'rgba(255, 255, 0,  0.8)','color':'rgba(0, 30, 72, 0.8)'});
                    
                    } 
                    // Logo Bearbeitungs Maske wird angezeigt
                    else {
                        
                        // Logo Bearbeitungs Maske löschen
                        $('nav > #menuEditLogoGuest').remove();
                    
                        // Button formatieren
                        //$('#btnEditLogoGuest').css({'background-color':'rgba(0, 30, 72, 1)','color':'rgba(255, 255, 255, 1)'});      
                    }
                    
                });         
    
            /**
             *  Funktion: Logo Upload laden
             */ 
                
                function loadTeamLogoUpload(team){
    
    
                    /**
                     *  Logo HTML Block
                     */ 
                        var logoUpload = '<li class="menuEditLogoButtons">\
                        <button class="btnUploadLogo"><img src="img/111210-interface-and-web_upload.svg" alt=""></button>\
                        </li>\
                        <li class="menuEditLogoImg">\
                        <img src="" alt="" />\
                        </li>\
                        <li class="menuEditLogoButtons">\
                        <button class="btnDeleteLogo"><img src="img/159586-interface-icon-compilation_garbage.svg" alt=""></button>\
                        <input type="file" enctype="multipart/form-data" class="uploadLogo" name="file" accept="image/png, image/jpeg, image/svg+xml, image/gif"/>\
                        </li>';            
    
                    /**
                     *  Home
                     */                
    
                        if(team == 'home'){
    
                            // Logo Bearbeitungs Maske
                            let setEditMenu = '<ul id="menuEditLogoHome" class="menuEditData"></ul>';
                            
                                // HTML Block ans Ende von <nav> einfügen
                                $('nav').append(setEditMenu);                
    
                            // <li> HTML Block mit Buttons ans Ende innerhalb von <ul> einfügen
                            $('nav > #menuEditLogoHome').append(logoUpload);
    
                            // Logo einfügen
                            $('nav > #menuEditLogoHome > li.menuEditLogoImg > img').attr('src', homeObj.Logo);
        
                            /**
                             *  Delete Button deaktivieren
                             *  Aktiviert wird der Delete Button in der Funktion fnLogoUpload() > storelogo()
                             */ 
    
                                // Wenn kein Logo hochgeladen wurde
                                if(homeObj.Logo == 'img/logo-dummy.svg'){
                                                                        
                                    // Delete Button auf disabled setzen
                                    $('nav > #menuEditLogoHome > li.menuEditLogoButtons > .btnDeleteLogo').prop("disabled", true);
    
                                    // Delete Button Sichtbarkeit veringern
                                    $('nav > #menuEditLogoHome > li.menuEditLogoButtons > .btnDeleteLogo').css({'opacity':'0'});
                                }
    
                            /**
                             *  Klick auf Delete Button
                             */ 
    
                                $('nav > #menuEditLogoHome > li.menuEditLogoButtons > .btnDeleteLogo').click(function(){
                                    
                                    // Fügt das Platzhalter Logo als Pfad ins Objekt ein
                                    homeObj.Logo = 'img/logo-dummy.svg';
    
                                    // Platzhalter Logo einfügen
                                    $('nav > #menuEditLogoHome > li.menuEditLogoImg > img').attr('src', homeObj.Logo);
    
                                    // Delete Button auf disabled setzen
                                    $('nav > #menuEditLogoHome > li.menuEditLogoButtons > .btnDeleteLogo').prop("disabled", true);
    
                                    // Delete Button Sichtbarkeit veringern
                                    $('nav > #menuEditLogoHome > li.menuEditLogoButtons > .btnDeleteLogo').css({'opacity':'0'});
                                    
                                    /**
                                     *  Falls <input file> Daten enthält, müssen diese entfernt werden. So ist Platz für eine neue Upload Datei.
                                     */
                                        // Speichert den aktuellen Inhalt von <input file>
                                        let field = $('#menuEditLogoHome > li.menuEditLogoButtons > .uploadLogo').val();
    
                                        // Wenn <input file> einen Wert enthält...
                                        if (typeof field != 'undefined') {    
                            
                                            // ...diesen löschen
                                            $('#menuEditLogoHome > li.menuEditLogoButtons > .uploadLogo').val('');
                                            
                                        }
    
                                });
    
                        }
    
                    /**
                     *  Guest
                     */                
    
                        if(team == 'guest'){
    
                            // Logo Bearbeitungs Maske
                            let setEditMenu = '<ul id="menuEditLogoGuest" class="menuEditData"></ul>';
    
                                // HTML Block ans Ende von <nav> einfügen
                                $('nav').append(setEditMenu);                
    
                            // <li> HTML Block mit Buttons ans Ende innerhalb von <ul> einfügen
                            $('nav > #menuEditLogoGuest').append(logoUpload);
    
                            // Logo einfügen
                            $('nav > #menuEditLogoGuest > li.menuEditLogoImg > img').attr('src', guestObj.Logo);
    
                            /**
                             *  Delete Button deaktivieren
                             *  Aktiviert wird der Delete Button in der Funktion fnLogoUpload() > storelogo()
                             */ 
    
                                // *** Wenn kein Logo hochgeladen wurde
                                if(guestObj.Logo == 'img/logo-dummy.svg'){
                                                                        
                                    // Delete Button auf disabled setzen
                                    $('nav > #menuEditLogoGuest > li.menuEditLogoButtons > .btnDeleteLogo').prop("disabled", true);
    
                                    // Delete Button Sichtbarkeit veringern
                                    $('nav > #menuEditLogoGuest > li.menuEditLogoButtons > .btnDeleteLogo').css({'opacity':'0'});
                                }
    
                            /**
                             *  Klick auf Delete Button
                             */ 
    
                                $('nav > #menuEditLogoGuest > li.menuEditLogoButtons > .btnDeleteLogo').click(function(){
                                    
                                    // Fügt das Platzhalter Logo als Pfad ins Objekt ein
                                    guestObj.Logo = 'img/logo-dummy.svg';
    
                                    // Platzhalter Logo einfügen
                                    $('nav > #menuEditLogoGuest > li.menuEditLogoImg > img').attr('src', guestObj.Logo);
    
                                    // Delete Button auf disabled setzen
                                    $('nav > #menuEditLogoGuest > li.menuEditLogoButtons > .btnDeleteLogo').prop("disabled", true);
    
                                    // Delete Button Sichtbarkeit veringern
                                    $('nav > #menuEditLogoGuest > li.menuEditLogoButtons > .btnDeleteLogo').css({'opacity':'0'});
    
                                    /**
                                     *  Falls <input file> Daten enthält, müssen diese entfernt werden. So ist Platz für eine neue Upload Datei.
                                     */
                                        
                                        // Speichert den aktuellen Inhalt von <input file>
                                        let field = $('#menuEditLogoGuest > li.menuEditLogoButtons > .uploadLogo').val();
    
                                        // Wenn <input file> einen Wert enthält...
                                        if (typeof field != 'undefined') {    
    
                                            // ...diesen löschen
                                            $('#menuEditLogoGuest > li.menuEditLogoButtons > .uploadLogo').val('');
                                            
                                        }
    
                                });
    
                        }            
    
                }
                
    function checkInputValue(){
        
        // Wert aus <input>
        let text = $('main input').val();
        
        // String aus input auf nicht erlaubte Zeichen prüfen
        let check = text.match(/[0-9!"§$%&\/()=?`´*+~'#_:,.;|<>@°^]/gi);

    }

    }); // Ende $( document ).ready(function() {}
            
    
    