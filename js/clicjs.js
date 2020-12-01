/*** valeurs pour le seuil d'alerte ***/
var seuil =0;
var surface = 120;
var perim = 8;
var seuilrec = surface / perim ;
/** calcul du seuil recommandé */

function myseuil(){
  var surface = 120;
  var perim = 8;
  var seuil = surface / perim;
  document.getElementById("leseuil").innerHTML = seuil;
}



/*** valeurs pour les entrees et sorties ***/
	var i = 0;
    var j = 0;
    var ii = 0;
    var ss = 0;
    var statresult = 1 ;
    var total = 0 ;
	function Count() {
        document.getElementById("input").innerHTML = i++ + 1;
    }
	function Count_1() {
        document.getElementById("output").innerHTML = j++ + 1;   
	}
	function ecart(){
	   var t = document.getElementById("input").innerText;
	   var i = document.getElementById("output").innerText;
	   document.getElementById("resultat").innerHTML = t - i;
	}
	function zero(){
	    document.getElementById("input").innerHTML = 0;
	    document.getElementById("output").innerHTML =0;
	    document.getElementById("resultat").innerHTML =0;
	    i = 0;
	    j = 0;
    }
     /**** partie javascript statistiques ****/ 

    function Contins() {
    document.getElementById("inputs").innerHTML = ii++ + 1;
    }
    function Contous() {
     document.getElementById("outputs").innerHTML = ss++ + 1;
    }
     function ecarts(){
        var ii = document.getElementById("inputs").innerText;
        var ss = document.getElementById("outputs").innerText;
        document.getElementById("resultats").innerHTML = ii - ss;
     }
    function stat(){
        var ii = document.getElementById("inputs").innerText;
        var ss = document.getElementById("outputs").innerText;
        var ecart = document.getElementById("resultats").innerHTML = ii - ss;
        document.getElementById("statotal").innerHTML = total++ + (stat_entrees - stat_sorties);
        var stat_entrees = stat_entrees++ + ii ;
	    var stat_sorties = stat_sorties++ + ss ;
        var ecart = ecart++ + (ii-ss);
        statresult = statresult++ + 1;
    }
       /**  function statplus(se,ss,ec,st){
        var stat_entrees = stat_entrees++ + iii ;
	    var stat_sorties = stat_sorties++ + sss ;
        var ecart = ecart++ + (iii-sss);
        var stat_total = stat_entrees - stat_sorties;
        se = stat_entrees ;
        ss = stat_sorties ;
        ec = ecart ;
        st = stat_total ;
        document.getElementById("periodes").innerHTML = statresult++ + 1;
        document.getElementById("statotal").innerHTML = total++ +(iii-sss); 
        return (se,ss,ec,st);
        **/
    }
    function zerostat(){
        var stat_entrees =0;
        var stat_sorties =0;
        var ecart =0;
        var stat_total =0;
        var statresult =1;
        var total =0;
        document.getElementById("input").innerHTML = 0;
	    document.getElementById("output").innerHTML =0;
	    document.getElementById("resultat").innerHTML =0;
        document.getElementById("inputs").innerHTML = 0;
	    document.getElementById("outputs").innerHTML =0;
	    document.getElementById("resultats").innerHTML =0;
        document.getElementById("statotal").innerHTML =0;
        document.getElementById("periodes").innerHTML =0;
        document.getElementById("statotal").innerHTML =0; 
    }
    