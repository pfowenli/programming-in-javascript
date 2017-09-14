/*!
 * h1 with "Bar Chart"
 */
var body = d3.select('body');
var h1 = body.insert('h1', ':first-child');
h1.html("Bar Chart");


/*!
 * 
 *
 */

var dataArray = [32, 12, 24, 36, 96, 16];

var x = d3.scale.linear()
    .domain([0, d3.max(dataArray)])
    .range([0, 500]);

d3.select('#section-1 .caption').html('Q1');

d3.select('#section-1 .chart')
  .selectAll('div')
  .data(dataArray.slice(0, 3))
  .enter().append('div')
  .style('width', function(d) { return x(d) + "px"; })
  .text(function(d) { return d; });

d3.select('#section-2 .caption').html('Q2');

d3.select('#section-2 .chart')
  .selectAll('div')
  .data(dataArray.slice(3, 6))
  .enter().append('div')
  .style('width', function(d) { return x(d) + "px"; })
  .text(function(d) { return d; });
