var request = require ('request');

module.exports.abertis = function(req, res){

	var jsonString = null;
	var urlAbertis = "https://www.quandl.com/api/v3/datasets/YAHOO/MC_ABE.json?api_key=HGoTu3E3A_Lsv6biw1kc";

	request({
		url: urlAbertis,
		json: true	
	}, 
	function (error, response, body){

		if (!error && response.statusCode == 200){
		var parseo = body.dataset.data;
		//console.log(parseo)
		var jsonString=[];
		for(var i = 0 ; i < parseo.length; i++){
			var jsonDato={};
			
				jsonDato.fecha = String(parseo[i][0]);
				jsonDato.abierto = parseFloat(parseo[i][1]);
				jsonDato.alto = parseFloat(parseo[i][2]);
				jsonDato.bajo = parseFloat(parseo[i][3]);
				jsonDato.cierre = parseFloat(parseo[i][4]);
				jsonDato.volumen = parseFloat(parseo[i][5]);
				jsonDato.ajuste_cierre = parseFloat(parseo[i][6]);
				jsonString.push(jsonDato);
			}

		
			var jsonArrayValor = JSON.parse(JSON.stringify(jsonString));
			//
			var aDocs =  jsonArrayValor;
			//console.log(jsonArrayValor);
			
			var parseo_code = body.dataset.dataset_code;
     		var parseo_nombre = body.dataset.name;
      		//console.log(parseo_code)
      		//console.log(parseo_nombre)
		}

		var dato2 = [];
    for (var n = 0; n < jsonArrayValor.length; n++){
      dato2.push([
        jsonArrayValor[n]['fecha'],
        jsonArrayValor[n]['abierto'],
        jsonArrayValor[n]['alto'],
        jsonArrayValor[n]['bajo'],
        jsonArrayValor[n]['cierre'],
        jsonArrayValor[n]['volumen'],
        jsonArrayValor[n]['ajuste_cierre']
        ]);
      
    }
  
  var valores00 = ([dato2 [n=0]]);
  var valores01 = ([dato2 [n=1]]);
  var valores02 = ([dato2 [n=2]]);
  var valores03 = ([dato2 [n=3]]);
  var valores04 = ([dato2 [n=4]]);
  var valores05 = ([dato2 [n=5]]);
  var valores06 = ([dato2 [n=6]]);
  var valores07 = ([dato2 [n=7]]);
  var valores08 = ([dato2 [n=8]]);
  var valores09 = ([dato2 [n=9]]);
  var valores10 = ([dato2 [n=10]]);
  var valores11 = ([dato2 [n=11]]);
  var valores12 = ([dato2 [n=12]]);
  var valores13 = ([dato2 [n=13]]);
  var valores14 = ([dato2 [n=14]]);
  var valores15 = ([dato2 [n=15]]);
  var valores16 = ([dato2 [n=16]]);
  var valores17 = ([dato2 [n=17]]);
  var valores18 = ([dato2 [n=18]]);
  var valores19 = ([dato2 [n=19]]);
  //console.log(valores00)



var stockchart = [];
    for (var m = 0; m < jsonArrayValor.length; m++){
      stockchart.push([
        jsonArrayValor[m]['fecha'],
        jsonArrayValor[m]['abierto'],
        jsonArrayValor[m]['alto'],
        jsonArrayValor[m]['bajo'],
        jsonArrayValor[m]['cierre'],
        jsonArrayValor[m]['volumen'],
        jsonArrayValor[m]['ajuste_cierre']
        ]);
      
    }
  
  var grafico00 = ([stockchart [m=0]]);
  var grafico01 = ([stockchart [m=1]]);
  var grafico02 = ([stockchart [m=2]]);
  var grafico03 = ([stockchart [m=3]]);
  var grafico04 = ([stockchart [m=4]]);
  var grafico05 = ([stockchart [m=5]]);
  var grafico06 = ([stockchart [m=6]]);
  var grafico07 = ([stockchart [m=7]]);
  var grafico08 = ([stockchart [m=8]]);
  var grafico09 = ([stockchart [m=9]]);
  var grafico10 = ([stockchart [m=10]]);
  var grafico11 = ([stockchart [m=11]]);
  var grafico12 = ([stockchart [m=12]]);
  var grafico13 = ([stockchart [m=13]]);
  var grafico14 = ([stockchart [m=14]]);
  var grafico15 = ([stockchart [m=15]]);
  var grafico16 = ([stockchart [m=16]]);
  var grafico17 = ([stockchart [m=17]]);
  var grafico18 = ([stockchart [m=18]]);
  var grafico19 = ([stockchart [m=19]]);
  var grafico20 = ([stockchart [m=20]]);
  var grafico21 = ([stockchart [m=21]]);
  var grafico22 = ([stockchart [m=22]]);
  var grafico23 = ([stockchart [m=23]]);
  var grafico24 = ([stockchart [m=24]]);
  var grafico25 = ([stockchart [m=25]]);
  var grafico26 = ([stockchart [m=26]]);
  var grafico27 = ([stockchart [m=27]]);
  var grafico28 = ([stockchart [m=28]]);
  var grafico29 = ([stockchart [m=29]]);
  var grafico30 = ([stockchart [m=30]]);
  var grafico31 = ([stockchart [m=31]]);
  var grafico32 = ([stockchart [m=32]]);
  var grafico33 = ([stockchart [m=33]]);
  var grafico34 = ([stockchart [m=34]]);
  var grafico35 = ([stockchart [m=35]]);
  var grafico36 = ([stockchart [m=36]]);
  var grafico37 = ([stockchart [m=37]]);
  var grafico38 = ([stockchart [m=38]]);
  var grafico39 = ([stockchart [m=39]]);
  var grafico40 = ([stockchart [m=40]]);
  var grafico41 = ([stockchart [m=41]]);
  var grafico42 = ([stockchart [m=42]]);
  var grafico43 = ([stockchart [m=43]]);
  var grafico44 = ([stockchart [m=44]]);
  var grafico45 = ([stockchart [m=45]]);
  var grafico46 = ([stockchart [m=46]]);
  var grafico47 = ([stockchart [m=47]]);
  var grafico48 = ([stockchart [m=48]]);
  var grafico49 = ([stockchart [m=49]]);
  var grafico50 = ([stockchart [m=50]]);
  var grafico51 = ([stockchart [m=51]]);
  var grafico52 = ([stockchart [m=52]]);
  var grafico53 = ([stockchart [m=53]]);
  var grafico54 = ([stockchart [m=54]]);
  var grafico55 = ([stockchart [m=56]]);
  var grafico56 = ([stockchart [m=56]]);
  var grafico57 = ([stockchart [m=57]]);
  var grafico58 = ([stockchart [m=58]]);
  var grafico59 = ([stockchart [m=59]]);
  var grafico60 = ([stockchart [m=60]]);
  var grafico61 = ([stockchart [m=61]]);
  var grafico62 = ([stockchart [m=62]]);
  var grafico63 = ([stockchart [m=63]]);
  var grafico64 = ([stockchart [m=64]]);
  var grafico65 = ([stockchart [m=65]]);
  var grafico66 = ([stockchart [m=66]]);
  var grafico67 = ([stockchart [m=67]]);
  var grafico68 = ([stockchart [m=68]]);
  var grafico69 = ([stockchart [m=69]]);
  var grafico70 = ([stockchart [m=70]]);
  var grafico71 = ([stockchart [m=71]]);
  var grafico72 = ([stockchart [m=72]]);
  var grafico73 = ([stockchart [m=73]]);
  var grafico74 = ([stockchart [m=74]]);
  var grafico75 = ([stockchart [m=76]]);
  var grafico76 = ([stockchart [m=76]]);
  var grafico77 = ([stockchart [m=77]]);
  var grafico78 = ([stockchart [m=78]]);
  var grafico79 = ([stockchart [m=79]]);
  var grafico80 = ([stockchart [m=80]]);
  var grafico81 = ([stockchart [m=81]]);
  var grafico82 = ([stockchart [m=82]]);
  var grafico83 = ([stockchart [m=83]]);
  var grafico84 = ([stockchart [m=84]]);
  var grafico85 = ([stockchart [m=85]]);
  var grafico86 = ([stockchart [m=86]]);
  var grafico87 = ([stockchart [m=87]]);
  var grafico88 = ([stockchart [m=88]]);
  var grafico89 = ([stockchart [m=89]]);
  var grafico90 = ([stockchart [m=90]]);
  var grafico91 = ([stockchart [m=91]]);
  var grafico92 = ([stockchart [m=92]]);
  var grafico93 = ([stockchart [m=93]]);
  var grafico94 = ([stockchart [m=94]]);
  var grafico95 = ([stockchart [m=95]]);
  var grafico96 = ([stockchart [m=96]]);
  var grafico97 = ([stockchart [m=97]]);
  var grafico98 = ([stockchart [m=98]]);
  var grafico99 = ([stockchart [m=99]]);
  var grafico100 = ([stockchart [m=100]]);
  var grafico101 = ([stockchart [m=101]]);
  var grafico102 = ([stockchart [m=102]]);
  var grafico103 = ([stockchart [m=103]]);
  var grafico104 = ([stockchart [m=104]]);
  var grafico105 = ([stockchart [m=105]]);
  var grafico106 = ([stockchart [m=106]]);
  var grafico107 = ([stockchart [m=107]]);
  var grafico108 = ([stockchart [m=108]]);
  var grafico109 = ([stockchart [m=109]]);
  var grafico110 = ([stockchart [m=110]]);
  var grafico111 = ([stockchart [m=111]]);
  var grafico112 = ([stockchart [m=112]]);
  var grafico113 = ([stockchart [m=113]]);
  var grafico114 = ([stockchart [m=114]]);
  var grafico115 = ([stockchart [m=115]]);
  var grafico116 = ([stockchart [m=116]]);
  var grafico117 = ([stockchart [m=117]]);
  var grafico118 = ([stockchart [m=118]]);
  var grafico119 = ([stockchart [m=119]]);
  var grafico120 = ([stockchart [m=120]]);
  var grafico121 = ([stockchart [m=121]]);
  var grafico122 = ([stockchart [m=122]]);
  var grafico123 = ([stockchart [m=123]]);
  var grafico124 = ([stockchart [m=124]]);
  var grafico125 = ([stockchart [m=125]]);
  var grafico126 = ([stockchart [m=126]]);
  var grafico127 = ([stockchart [m=127]]);
  var grafico128 = ([stockchart [m=128]]);
  var grafico129 = ([stockchart [m=129]]);
  var grafico130 = ([stockchart [m=130]]);
  var grafico131 = ([stockchart [m=131]]);
  var grafico132 = ([stockchart [m=132]]);
  var grafico133 = ([stockchart [m=133]]);
  var grafico134 = ([stockchart [m=134]]);
  var grafico135 = ([stockchart [m=135]]);
  var grafico136 = ([stockchart [m=136]]);
  var grafico137 = ([stockchart [m=137]]);
  var grafico138 = ([stockchart [m=138]]);
  var grafico139 = ([stockchart [m=139]]);
  var grafico140 = ([stockchart [m=140]]);
  var grafico141 = ([stockchart [m=141]]);
  var grafico142 = ([stockchart [m=142]]);
  var grafico143 = ([stockchart [m=143]]);
  var grafico144 = ([stockchart [m=144]]);
  var grafico145 = ([stockchart [m=145]]);
  var grafico146 = ([stockchart [m=146]]);
  var grafico147 = ([stockchart [m=147]]);
  var grafico148 = ([stockchart [m=148]]);
  var grafico149 = ([stockchart [m=149]]);
  var grafico150 = ([stockchart [m=150]]);
  var grafico151 = ([stockchart [m=151]]);
  var grafico152 = ([stockchart [m=152]]);
  var grafico153 = ([stockchart [m=153]]);
  var grafico154 = ([stockchart [m=154]]);
  var grafico155 = ([stockchart [m=155]]);
  var grafico156 = ([stockchart [m=156]]);
  var grafico157 = ([stockchart [m=157]]);
  var grafico158 = ([stockchart [m=158]]);
  var grafico159 = ([stockchart [m=159]]);
  var grafico160 = ([stockchart [m=160]]);
  var grafico161 = ([stockchart [m=161]]);
  var grafico162 = ([stockchart [m=162]]);
  var grafico163 = ([stockchart [m=163]]);
  var grafico164 = ([stockchart [m=164]]);
  var grafico165 = ([stockchart [m=165]]);
  var grafico166 = ([stockchart [m=166]]);
  var grafico167 = ([stockchart [m=167]]);
  var grafico168 = ([stockchart [m=168]]);
  var grafico169 = ([stockchart [m=169]]);
  var grafico170 = ([stockchart [m=170]]);
  var grafico171 = ([stockchart [m=171]]);
  var grafico172 = ([stockchart [m=172]]);
  var grafico173 = ([stockchart [m=173]]);
  var grafico174 = ([stockchart [m=174]]);
  var grafico175 = ([stockchart [m=175]]);
  var grafico176 = ([stockchart [m=176]]);
  var grafico177 = ([stockchart [m=177]]);
  var grafico178 = ([stockchart [m=178]]);
  var grafico179 = ([stockchart [m=179]]);
  var grafico180 = ([stockchart [m=180]]);
  var grafico181 = ([stockchart [m=181]]);
  var grafico182 = ([stockchart [m=182]]);
  var grafico183 = ([stockchart [m=183]]);
  var grafico184 = ([stockchart [m=184]]);
  var grafico185 = ([stockchart [m=185]]);
  var grafico186 = ([stockchart [m=186]]);
  var grafico187 = ([stockchart [m=187]]);
  var grafico188 = ([stockchart [m=188]]);
  var grafico189 = ([stockchart [m=189]]);
  var grafico190 = ([stockchart [m=190]]);
  var grafico191 = ([stockchart [m=191]]);
  var grafico192 = ([stockchart [m=192]]);
  var grafico193 = ([stockchart [m=193]]);
  var grafico194 = ([stockchart [m=194]]);
  var grafico195 = ([stockchart [m=195]]);
  var grafico196 = ([stockchart [m=196]]);
  var grafico197 = ([stockchart [m=197]]);
  var grafico198 = ([stockchart [m=198]]);
  var grafico199 = ([stockchart [m=199]]);
  var grafico200 = ([stockchart [m=200]]);
  var grafico201 = ([stockchart [m=201]]);
  var grafico202 = ([stockchart [m=202]]);
  var grafico203 = ([stockchart [m=203]]);
  var grafico204 = ([stockchart [m=204]]);
  var grafico205 = ([stockchart [m=205]]);
  var grafico206 = ([stockchart [m=206]]);
  var grafico207 = ([stockchart [m=207]]);
  var grafico208 = ([stockchart [m=208]]);
  var grafico209 = ([stockchart [m=209]]);
  var grafico210 = ([stockchart [m=210]]);
  var grafico211 = ([stockchart [m=211]]);
  var grafico212 = ([stockchart [m=212]]);
  var grafico213 = ([stockchart [m=213]]);
  var grafico214 = ([stockchart [m=214]]);
  var grafico215 = ([stockchart [m=215]]);
  var grafico216 = ([stockchart [m=216]]);
  var grafico217 = ([stockchart [m=217]]);
  var grafico218 = ([stockchart [m=218]]);
  var grafico219 = ([stockchart [m=219]]);
  var grafico220 = ([stockchart [m=220]]);
  var grafico221 = ([stockchart [m=221]]);
  var grafico222 = ([stockchart [m=222]]);
  var grafico223 = ([stockchart [m=223]]);
  var grafico224 = ([stockchart [m=224]]);
  var grafico225 = ([stockchart [m=225]]);
  var grafico226 = ([stockchart [m=226]]);
  var grafico227 = ([stockchart [m=227]]);
  var grafico228 = ([stockchart [m=228]]);
  var grafico229 = ([stockchart [m=229]]);
  var grafico230 = ([stockchart [m=230]]);
  var grafico231 = ([stockchart [m=231]]);
  var grafico232 = ([stockchart [m=232]]);
  var grafico233 = ([stockchart [m=233]]);
  var grafico234 = ([stockchart [m=234]]);
  var grafico235 = ([stockchart [m=235]]);
  var grafico236 = ([stockchart [m=236]]);
  var grafico237 = ([stockchart [m=237]]);
  var grafico238 = ([stockchart [m=238]]);
  var grafico239 = ([stockchart [m=239]]);

res.render('./ibex/abertis', { 	
	parseo_nombre: parseo_nombre,
    valores00: valores00,
    valores01: valores01,
    valores02: valores02,
    valores03: valores03,
    valores04: valores04,
    valores05: valores05,
    valores06: valores06,
    valores07: valores07,
    valores08: valores08,
    valores09: valores09,
    valores10: valores10,
    valores11: valores11,
    valores12: valores12,
    valores13: valores13,
    valores14: valores14,
    valores15: valores15,
    valores16: valores16,
    valores17: valores17,
    valores18: valores18,
    valores19: valores19,
    grafico00: grafico00,
    grafico01: grafico01,
    grafico02: grafico02,
    grafico03: grafico03,
    grafico04: grafico04,
    grafico05: grafico05,
    grafico06: grafico06,
    grafico07: grafico07,
    grafico08: grafico08,
    grafico09: grafico09,
    grafico10: grafico10,
    grafico11: grafico11,
    grafico12: grafico12,
    grafico13: grafico13,
    grafico14: grafico14,
    grafico15: grafico15,
    grafico16: grafico16,
    grafico17: grafico17,
    grafico18: grafico18,
    grafico19: grafico19,
    grafico20: grafico20,
    grafico21: grafico21,
    grafico22: grafico22,
    grafico23: grafico23,
    grafico24: grafico24,
    grafico25: grafico25,
    grafico26: grafico26,
    grafico27: grafico27,
    grafico28: grafico28,
    grafico29: grafico29,
    grafico30: grafico30,
    grafico31: grafico31,
    grafico32: grafico32,
    grafico33: grafico33,
    grafico34: grafico34,
    grafico35: grafico35,
    grafico36: grafico36,
    grafico37: grafico37,
    grafico38: grafico38,
    grafico39: grafico39,
    grafico40: grafico40, 
    grafico41: grafico41, 
    grafico42: grafico42, 
    grafico43: grafico43, 
    grafico44: grafico44,
    grafico45: grafico45, 
    grafico46: grafico46, 
    grafico47: grafico47, 
    grafico48: grafico48, 
    grafico49: grafico49,
    grafico50: grafico50, 
    grafico51: grafico51, 
    grafico52: grafico52,
    grafico53: grafico53,
    grafico54: grafico54,
    grafico55: grafico55,
    grafico56: grafico56,
    grafico57: grafico57,
    grafico58: grafico58,
    grafico59: grafico59,
    grafico60: grafico60, 
    grafico61: grafico61, 
    grafico62: grafico62, 
    grafico63: grafico63, 
    grafico64: grafico64, 
    grafico65: grafico65, 
    grafico66: grafico66,
    grafico67: grafico67, 
    grafico68: grafico68, 
    grafico69: grafico69,
    grafico70: grafico70,
    grafico71: grafico71, 
    grafico72: grafico72, 
    grafico73: grafico73, 
    grafico74: grafico74, 
    grafico75: grafico75, 
    grafico76: grafico76,
    grafico77: grafico77, 
    grafico78: grafico78, 
    grafico79: grafico79, 
    grafico80: grafico80, 
    grafico81: grafico81,
    grafico82: grafico82,
    grafico83: grafico83, 
    grafico84: grafico84, 
    grafico85: grafico85, 
    grafico86: grafico86, 
    grafico87: grafico87, 
    grafico88: grafico88,
    grafico89: grafico89, 
    grafico90: grafico90, 
    grafico91: grafico91, 
    grafico92: grafico92,
    grafico93: grafico93, 
    grafico94: grafico94, 
    grafico95: grafico95, 
    grafico96: grafico96, 
    grafico97: grafico97, 
    grafico98: grafico98,
    grafico99: grafico99, 
    grafico100: grafico100, 
    grafico101: grafico101, 
    grafico102: grafico102, 
    grafico103: grafico103,
    grafico104: grafico104,
    grafico105: grafico105, 
    grafico106: grafico106,
    grafico107: grafico107,
    grafico108: grafico108,
    grafico109: grafico109,
    grafico110: grafico110,
    grafico111: grafico111,
    grafico112: grafico112, 
    grafico113: grafico113, 
    grafico114: grafico114,
    grafico115: grafico115, 
    grafico116: grafico116,
    grafico117: grafico117,
    grafico118: grafico118,
    grafico119: grafico119, 
    grafico120: grafico120, 
    grafico121: grafico121,
    grafico122: grafico122, 
    grafico123: grafico123,
    grafico124: grafico124,
    grafico125: grafico125,
    grafico126: grafico126,
    grafico127: grafico127,
    grafico128: grafico128,
    grafico129: grafico129,
    grafico130: grafico130,
    grafico131: grafico131,
    grafico132: grafico132,
    grafico133: grafico133,
    grafico134: grafico134,
    grafico135: grafico135,
    grafico136: grafico136,
    grafico137: grafico137,
    grafico138: grafico138,
    grafico139: grafico139,
    grafico140: grafico140,
    grafico141: grafico141,
    grafico142: grafico142,
    grafico143: grafico143,
    grafico144: grafico144,
    grafico145: grafico145,
    grafico146: grafico146,
    grafico147: grafico147,
    grafico148: grafico148,
    grafico149: grafico149,
    grafico150: grafico150,
    grafico151: grafico151,
    grafico152: grafico152,
    grafico153: grafico153,
    grafico154: grafico154,
    grafico155: grafico155,
    grafico156: grafico156,
    grafico157: grafico157,
    grafico158: grafico158,
    grafico159: grafico159,
    grafico160: grafico160,
    grafico161: grafico161,
    grafico162: grafico162,
    grafico163: grafico163,
    grafico164: grafico164,
    grafico165: grafico165,
    grafico166: grafico166,
    grafico167: grafico167, 
    grafico168: grafico168,
    grafico169: grafico169,
    grafico170: grafico170,
    grafico171: grafico171,
    grafico172: grafico172,
    grafico173: grafico173,
    grafico174: grafico174,
    grafico175: grafico175, 
    grafico176: grafico176, 
    grafico177: grafico177, 
    grafico178: grafico178, 
    grafico179: grafico179, 
    grafico180: grafico180,
    grafico181: grafico181, 
    grafico182: grafico182, 
    grafico183: grafico183, 
    grafico184: grafico184,
    grafico185: grafico185, 
    grafico186: grafico186,
    grafico187: grafico187, 
    grafico188: grafico188, 
    grafico189: grafico189, 
    grafico190: grafico190, 
    grafico191: grafico191, 
    grafico192: grafico192, 
    grafico193: grafico193, 
    grafico194: grafico194, 
    grafico195: grafico195, 
    grafico196: grafico196, 
    grafico197: grafico197, 
    grafico198: grafico198, 
    grafico199: grafico199, 
    grafico200: grafico200, 
    grafico201: grafico201, 
    grafico202: grafico202,
    grafico203: grafico203, 
    grafico204: grafico204, 
    grafico205: grafico205, 
    grafico206: grafico206, 
    grafico207: grafico207,
    grafico208: grafico208,
    grafico209: grafico209,
    grafico210: grafico210,
    grafico211: grafico211,
    grafico212: grafico212,
    grafico213: grafico213,
    grafico214: grafico214,
    grafico215: grafico215,
    grafico216: grafico216,
    grafico217: grafico217, 
    grafico218: grafico218,
    grafico219: grafico219,
    grafico220: grafico220,
    grafico221: grafico221, 
    grafico222: grafico222, 
    grafico223: grafico223, 
    grafico224: grafico224,
    grafico225: grafico225, 
    grafico226: grafico226, 
    grafico227: grafico227, 
    grafico228: grafico228, 
    grafico229: grafico229, 
    grafico230: grafico230, 
    grafico231: grafico231, 
    grafico232: grafico232, 
    grafico233: grafico233, 
    grafico234: grafico234,
    grafico235: grafico235, 
    grafico236: grafico236, 
    grafico237: grafico237, 
    grafico238: grafico238, 
    grafico239: grafico239

	});

});

};
