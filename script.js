function medidorTemperatura(){

    var celsiu = parseFloat(document.getElementById("celsius").value);


    document.getElementById("resultKelvin").innerText = "";
    document.getElementById("resultFahrenheit").innerText = "";

    if( celsiu){
         var  kelvin = celsiu + 273.15;
        document.getElementById("resultKelvin").innerText +="kelvin" + kelvin + "K" ;
        
        var  fahrenheit = (celsiu * 9) /5 +32;
        document.getElementById("resultFahrenheit").innerText +="farenkenth:" + " " + fahrenheit + "F"; 

        prevent.default();
    } else {


   } 

    }