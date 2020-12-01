
	var i = 0;
    var j = 0;
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
    function stat(){
        var ii = document.getElementById("inputs").innerText;
        var ss = document.getElementById("outputs").innerText;
        var ecart = document.getElementById("resultats").innerHTML = ii - ss;
        document.getElementById("statotal").innerHTML = total++ + (stat_entrees - stat_sorties);
        var stat_entrees = stat_entrees + ii ;
	    var stat_sorties = stat_sorties + ss ;
        var ecart = ecart + (ii-ss);
        statresult = statresult + 1;
    }
        function statplus(se,ss,ec,st){
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
    }
    function zerostat(){
        var stat_entrees =0;
        var stat_sorties =0;
        var ecart =0;
        var stat_total =0;
        var statresult =1;
        var total =0;
        document.getElementById("inputs").innerHTML = 0;
	    document.getElementById("outputs").innerHTML =0;
	    document.getElementById("resultats").innerHTML =0;
        document.getElementById("statotal").innerHTML =0;
        document.getElementById("periodes").innerHTML =0;
        document.getElementById("statotal").innerHTML =0; 
    }
    