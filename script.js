/*------------------------------ navigation ------------------------------*/
        function openNav() {
            document.getElementById("mySidenav").style.width = "15vw";
            document.getElementById("op").style.display = "none";
            document.getElementById("cls").style.display = "block";

        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("cls").style.display = "none";

            document.getElementById("op").style.display = "block";
        }
        /*-------------------------------------------------------------------------*/
        
    function openPage(pageName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("calculator__mathCache__tab--content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("calculator__mathCache__button--tablink");
  document.getElementById(pageName).style.display = "block";

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

        /*----------------------------- calc function -----------------------------*/
        let his=0;
        
        function num(x) {
            let wynik=document.getElementById("result").value;
            let wynik1=document.getElementById("result1").value;
            if(x=="+" || x=="-" || x=="*" || x=="/")
                {
                    document.getElementById("result1").value=wynik+x;
                    reset_ce();
                }
            else
                {
                    document.getElementById("result").value += x;
                }
        }

        function equals() {
           let war=document.getElementById("result").value;
            document.getElementById("result1").value+=war;
            let wynik=document.getElementById("result1").value;
            historia();
            document.getElementById("result").value = eval(wynik);
            document.getElementById("result1").value="";
        }
        
        function historia(){
            let dzialanie=document.getElementById("result1").value;
            if(his==0)
                {
                    document.getElementById("historia").innerHTML=dzialanie+"= <br>"+eval(dzialanie)+"<br>";
                    his++;
                }
            else
                {
                    document.getElementById("historia").innerHTML+=dzialanie+"= <br>"+eval(dzialanie)+"<br>";
                }
        }
        function historia_clear(){
            document.getElementById("historia").innerHTML="No history yet.";
            his=0;    
        }
        
        function reset_ce(){
            document.getElementById("result").value = "";
        }
        
        function reset_c(){
            document.getElementById("result1").value = "";
            document.getElementById("result").value = "";
        }
        
        function backspace(){
            let wynik=document.getElementById("result").value;
            document.getElementById("result").value="";
            for(let i=0;i<wynik.length-1;i++)
                {
                    document.getElementById("result").value+=wynik.charAt(i);
                }
        }
        
        function divide(){
            let wynik=document.getElementById("result").value;
            document.getElementById("result").value="1/"+wynik;
            document.getElementById("result").value=eval(document.getElementById("result").value);
        }
        
        function procent(){
            let wynik=document.getElementById("result").value;
            document.getElementById("result").value=wynik/100;
             document.getElementById("result1").value=wynik/100;
        }
        
        function square_root(){
             let war=document.getElementById("result").value;
            document.getElementById("result1").value="√"+"("+war+")";
            let dzialanie=document.getElementById("result1").value;
            document.getElementById("result").value=(Math.sqrt(war));
            if(his==0)
                {
                    document.getElementById("historia").innerHTML=dzialanie+"= <br>"+(Math.sqrt(war))+"<br>";
                    his++;
                }
            else
                {
                    document.getElementById("historia").innerHTML+=dzialanie+"= <br>"+(Math.sqrt(war))+"<br>";
                }
        }
        
        function square(){
            let war=document.getElementById("result").value;
            document.getElementById("result1").value="sqr("+war+")";
            let dzialanie=document.getElementById("result1").value;
            document.getElementById("result").value=(war*war);
            if(his==0)
                {
                    document.getElementById("historia").innerHTML=dzialanie+"= <br>"+(war*war)+"<br>";
                    his++;
                }
            else
                {
                    document.getElementById("historia").innerHTML+=dzialanie+"= <br>"+(war*war)+"<br>";
                }
        }
        
        function cube(){
            let war=document.getElementById("result").value;
            document.getElementById("result1").value="cube("+war+")";
            let dzialanie=document.getElementById("result1").value;
            document.getElementById("result").value=(war*war*war);
            if(his==0)
                {
                    document.getElementById("historia").innerHTML=dzialanie+"= <br>"+(war*war*war)+"<br>";
                    his++;
                }
            else
                {
                    document.getElementById("historia").innerHTML+=dzialanie+"= <br>"+(war*war*war)+"<br>";
                }
        }
        
        function change(){
            let wynik=document.getElementById("result").value
            if(wynik.charAt(0)=="-")
                {
                    
                    for(let i=1;i<wynik.length;i++)
                    {
                        if(i==1)
                        {
                            document.getElementById("result").value=wynik.charAt(i);
                        }
                        else
                            {
                                document.getElementById("result").value+=wynik.charAt(i);
                            }
                    }
                }
            else
                {
                    document.getElementById("result").value="-"+wynik;
                }
        }

/*------------------------------------------*/     
document.getElementById("popup").onclick = displayInfo;

function displayInfo() {
    document.getElementById("demo").innerHTML = '<h2>Informacje</h2><p class="popup-p">lorrem ipsum dolo</p><p class="popup-p">lorrem ipsum dolo</p>';
document.getElementById("demo").style.display = "block";
}
