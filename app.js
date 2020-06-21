var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.github.com/keng85/D3-Challenge/master/assets/data/data.csv", function(data) {

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function(d) {
        return d[12];
   })
   .attr("cy", function(d) {
        return d[7];
   })
   .attr("r", function(d) {
    return Math.sqrt(h - d[1]);
});
//Labels
svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .text(function(d) {
    return d[7] + "," + d[12];
}).attr("font-family", "sans-serif")
.attr("font-size", "11px")
.attr("fill", "red");
}