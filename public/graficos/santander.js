 // Generates GET requests to a URL.
    function httpGet(Url){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", Url, false);
      xmlHttp.send(null);
      return xmlHttp.responseText;
    }

    window.onload=function(){
      // GET request to localhost:3000/test, which has been configured to send back our db data
      var aData = JSON.parse(httpGet('http://localhost:7777/STOCKMARKET'));
     
      var valores = [];
     

      for(var n=aData.length-1 ; n >= 0; n--){
        //seriesFecha.push([aData[n]['fecha']])
        valores.push([
          aData[n]['fecha'],
          aData[n]['abierto']
          ]);
        
       console.log(aData[n])

      }
      

      anychart.onDocumentReady(function() {
      // create data set on our data
      var dataSet = anychart.data.set([ valores[n=20],valores[n=19],valores[n=18],valores[n=17],valores[n=16],valores[n=15],valores[n=14],valores[n=13],valores[n=12],valores[n=11],valores[n=10],valores[n=9],valores[n=8],valores[n=7],valores[n=6],valores[n=5],valores[n=4],valores[n=3],valores[n=2],valores[n=1],valores[n=0] ]);
     // var dataSet = anychart.data.set(valores);

   
      // map data for the first series, take x from the zero column and value from the first column of data set
      var seriesData = dataSet.mapAs({x: [0], value: [1]});

     // create line chart
      chart = anychart.area();

      // adding dollar symbols to yAxis labels
      chart.yAxis(null)//.labels().textFormatter("€{%Value}");

      // turn on chart animation
      chart.animation(true);
      
      // axes settings
      //chart.yAxis().title('Precio');
      //chart.xAxis().title('Fecha');
      //chart.xAxis().labels().padding([5,5,0,5]);
      //chart.xAxis().labels().rotation(45);
      //chart.xAxis().overlapMode("allowOverlap");
      chart.xAxis(null)

      // set chart title text settings
      chart.title('SAN Santander<br/>' +
      '<span style="color:#212121; font-size: 13px;">2016</span>');
      chart.title().useHtml(true).padding([0,0,20,0]);

      // create a series with mapped data
      var series = chart.area(seriesData);
      series.name("ACME Share Price");
      series.hoverMarkers().enabled(true).type('circle').size(4);

      // set chart tooltip and interactivity settings
      chart.tooltip().position('top').anchor('centerbottom');
      chart.tooltip().positionMode('point');
      chart.interactivity().hoverMode('byX');
      
      // chart padding
      chart.right(20);

      // set container id for the chart
      chart.container('container');

      // initiate chart drawing
      chart.draw();
    });

    };