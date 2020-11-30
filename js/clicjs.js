
	var i = 0;
    var j = 0;
    var statresult = 1 ;
    var total = 0 ;
	function Count() {
	    document.getElementById("output").innerHTML = i++ + 1;
	}

	function Count_1() {
	    document.getElementById("output_1").innerHTML = j++ + 1;
	}
	function ecart(){
	   var t = document.getElementById("output").innerText;
	   var i = document.getElementById("output_1").innerText;
	   document.getElementById("resultat").innerHTML = t - i;
	}
	function zero(){
	    document.getElementById("output").innerHTML = 0;
	    document.getElementById("output_1").innerHTML =0;
	    document.getElementById("resultat").innerHTML =0;
	    i = 0;
	    j = 0;
    }
     /**** partie javascript statistiques ****/ 
    var stat_ent= function stat(stat_entrees){
        var t = document.getElementById("output").innerText;
        var i = document.getElementById("output_1").innerText;
	    var stat_sorties = document.getElementById("output_1").innerText;
        var ecart = document.getElementById("resultat").innerHTML = t - i;
        var stat_total = document.getElementById("statotal").innerHTML = total++ + (stat_entrees - stat_sorties);
        var stat_entrees = stat_entrees + t ;
	    var stat_sorties = stat_sorties + i ;
        var ecart = ecart + (t-i);
        var stat_total = stat_entrees - stat_sorties;
        return stat_entrees ;
    }
        function statplus(se,ss,ec,st){
        var stat_entrees = stat_entrees++ + t ;
	    var stat_sorties = stat_sorties++ + i ;
        var ecart = ecart++ + (t-i);
        var stat_total = stat_entrees - stat_sorties;
        se = stat_entrees ;
        ss = stat_sorties ;
        ec = ecart ;
        st = stat_total ;
        document.getElementById("periode").innerHTML = statresult++ + 1;
        document.getElementById("statotal").innerHTML = total++ +(t-i); 
        return (se,ss,ec,st);
    }
    function zerostat(){
        var stat_entrees =0;
        var stat_sorties =0;
        var ecart =0;
        var stat_total =0;
        var statresult =1;
        var total =0;
        document.getElementById("output").innerHTML = 0;
	    document.getElementById("output_1").innerHTML =0;
	    document.getElementById("resultat").innerHTML =0;
        document.getElementById("stat").innerHTML =0;
        document.getElementById("periode").innerHTML =0;
        document.getElementById("statotal").innerHTML =0; 
    }
    