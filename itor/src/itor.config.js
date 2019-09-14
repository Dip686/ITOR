export var config = {
  header: {
    title: 'Itor tutorial'
  },
  renderAt: 'root',
  narator: {
    position: 'left',
    defaultStep: 0,
    currentStep: 0,
    steps: [
      {
        content: 'string or html code',
        workingSample: 'code1',
        sampleHeader: '11'
      },
      {
        content: 'string or html code',
        workingSample: 'code2',
        sampleHeader: '22'
      },
      {
        content: 'string or html code',
        workingSample: 'code3',
        sampleHeader: '33'
      }
    ]
  }
};

// export var config = {
//   header: {
//     '_title': 'FusionCharts Interactive tutorial'
//   },
//   renderAt: 'root',
//   narator: {
//     position: 'left',
//     defaultStep: 0,
//     currentStep: 0,
//     steps: [
//       {
//         content: `The very first step is to create an HTML file. 
//         You can write it on the editor or click the below button to add HTML sample in the editor <p></p>`,
//         workingSample: `<html>
//         <head>
//         <title>My first chart using FusionCharts Suite XT</title>
//         </head>
//         <body>
//             <div id="chart-container">FusionCharts XT will load here!</div>
//         </body>
//         </html>`,
//         sampleHeader: 'Create HTML Page'
//       },
//       {
//         content: `Include the FusionCharts JavaScript files from CDN. Refer the sample below<p></p>
//         <a href="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js">
//         https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js</a>
//         Add the script in your HTML file to get FusionCharts in your webpage <p></p>`,
//         workingSample: `<html>
//         <head>
//         <title>My first chart using FusionCharts Suite XT</title>
//         <!-- Include fusioncharts core library -->
//         <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
//         </head>
//         <body>
//             <div id="chart-container">FusionCharts XT will load here!</div>
//         </body>
//         </html>`,
//         sampleHeader: 'Add FusionCharts Script'
//       },
//       {
//         content: `FusionCharts accepts data in JSON format. 
//         Following code is the JSON representation of the above table with the required attributes to render the above chart.<p></p>
//         <pre>{
//           // Chart Configuration
//           "chart": {
//             "caption": "Countries With Most Oil Reserves [2017-18]",
//             "subCaption": "In MMbbl = One Million barrels",
//             "xAxisName": "Country",
//             "yAxisName": "Reserves (MMbbl)",
//             "numberSuffix": "K",
//             "theme": "fusion"
//           },
//           // Chart Data
//           "data": [
//             {
//               "label": "Venezuela",
//               "value": "290"
//             },
//             {
//               "label": "Saudi",
//               "value": "260"
//             },
//             {
//               "label": "Canada",
//               "value": "180"
//             },
//             {
//               "label": "Iran",
//               "value": "140"
//             },
//             {
//               "label": "Russia",
//               "value": "115"
//             },
//             {
//               "label": "UAE",
//               "value": "100"
//             },
//             {
//               "label": "US",
//               "value": "30"
//             },
//             {
//               "label": "China",
//               "value": "30"
//             }
//           ]
//         }</pre style="align:left"><p></p>`,
//         workingSample: `<html>
//         <head>
//         <title>My first chart using FusionCharts Suite XT</title>
//         <!-- Include fusioncharts core library -->
//         <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
//         <!-- Include fusion theme -->
//         <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
//         <script type="text/javascript">
//             FusionCharts.ready(function(){
//             var fusioncharts = new FusionCharts({
//             type: 'column2d',
//             renderAt: 'chart-container',
//             width: '700',
//             height: '400',
//             dataFormat: 'json',
//             dataSource: {
//                 // Chart Configuration
//                 "chart": {
//                     "caption": "Countries With Most Oil Reserves [2017-18]",
//                     "subCaption": "In MMbbl = One Million barrels",
//                     "xAxisName": "Country",
//                     "yAxisName": "Reserves (MMbbl)",
//                     "numberSuffix": "K",
//                     "theme": "fusion",
//                 },
//                 // Chart Data
//                 "data": [{
//                     "label": "Venezuela",
//                     "value": "290"
//                 }, {
//                     "label": "Saudi",
//                     "value": "260"
//                 }, {
//                     "label": "Canada",
//                     "value": "180"
//                 }, {
//                     "label": "Iran",
//                     "value": "140"
//                 }, {
//                     "label": "Russia",
//                     "value": "115"
//                 }, {
//                     "label": "UAE",
//                     "value": "100"
//                 }, {
//                     "label": "US",
//                     "value": "30"
//                 }, {
//                     "label": "China",
//                     "value": "30"
//                 }]
//             }
//         });
//         });
//         </script>
//         </head>
//         <body>
//             <div id="chart-container">FusionCharts XT will load here!</div>
//         </body>
//         </html>`,
//         sampleHeader: 'Use sample data'
//       },
//       {
//         content:`Call the render function to render the chart <p></p>
//         <code> fusioncharts.render();</code>`,
//         workingSample: `<html>
//         <head>
//         <title>My first chart using FusionCharts Suite XT</title>
//         <!-- Include fusioncharts core library -->
//         <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
//         <!-- Include fusion theme -->
//         <script type="text/javascript" src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
//         <script type="text/javascript">
//             FusionCharts.ready(function(){
//             var fusioncharts = new FusionCharts({
//             type: 'column2d',
//             renderAt: 'chart-container',
//             width: '700',
//             height: '400',
//             dataFormat: 'json',
//             dataSource: {
//                 // Chart Configuration
//                 "chart": {
//                     "caption": "Countries With Most Oil Reserves [2017-18]",
//                     "subCaption": "In MMbbl = One Million barrels",
//                     "xAxisName": "Country",
//                     "yAxisName": "Reserves (MMbbl)",
//                     "numberSuffix": "K",
//                     "theme": "fusion",
//                 },
//                 // Chart Data
//                 "data": [{
//                     "label": "Venezuela",
//                     "value": "290"
//                 }, {
//                     "label": "Saudi",
//                     "value": "260"
//                 }, {
//                     "label": "Canada",
//                     "value": "180"
//                 }, {
//                     "label": "Iran",
//                     "value": "140"
//                 }, {
//                     "label": "Russia",
//                     "value": "115"
//                 }, {
//                     "label": "UAE",
//                     "value": "100"
//                 }, {
//                     "label": "US",
//                     "value": "30"
//                 }, {
//                     "label": "China",
//                     "value": "30"
//                 }]
//             }
//         });
//             fusioncharts.render();
//             });
//         </script>
//         </head>
//         <body>
//             <div id="chart-container">FusionCharts XT will load here!</div>
//         </body>
//         </html>`,
//         sampleHeader: 'Call Render function'
//       }
//     ]
//   }
// };
