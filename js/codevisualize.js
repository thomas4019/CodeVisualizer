d3.json("codef.js", function(json) {
	//console.log(json);
	var data = $.map(json, function (value, key) { return value; });
	//console.log(data);

  var locations = {};
	
	var body = d3.select("#viewport");
	var enter = body.selectAll("circle")
    .data(data)
    .enter().append("g");

    enter
    .attr('class', function(d) { return d.type; } )
    .attr("transform", function(d, i) {
      var x = 100 + Math.round(Math.random()*800);
      var y = 100 + Math.round(Math.random()*600);
      return "translate(" + [x,y] + ")";
    })
    //.attr('cx', function(d) { return Math.round(Math.random()*1000) })
    //.attr('cy', function(d) { return Math.round(Math.random()*1000) })

    enter.append("circle")
    
    .attr('r', 100)
    .attr('stroke', 'black')
    .attr('stroke-width', '2')
    .attr('class', function(d) { return d.type; } )
  	

    enter.append('text')
    .text(function(d) { return d.name; })
    .attr('dx', -85)
    .attr('class', 'title')

    var li = enter.selectAll("text")
    .data(function(d) { return d.functions ? d.functions : [] })
  	.enter();

    li.append("text")
  	.text(function(d) { return d.name; })
  	.attr('title', function(d) { return _.map(d.args, function(x){ return x.name; }); })
    .attr('transform', function(d, i, t) {
      count = this.parentNode.__data__.functions.length;
      angle = 360 / count;
      return 'rotate(' + Math.round(-90+i*angle) + ')';
    })
    //.attr('dx', function(d, i, t) { return Math.cos(((-90 + i*15)* Math.PI) / 180) * 100; } )
    //.attr('dy', function(d, i, t) { return Math.sin(((-90 + i*15)* Math.PI) / 180) * 100; } )
    .attr('dx', 125)
  	.each(function(e) {
  		$(this).tipsy({gravity: 'e'});
  	})
    .each(function(e) {
      locations[e.name] = $(this).offset();
    });
    
    li.append('g').selectAll('line')
    .data(function(d) { return d.usage ? _.keys(d.usage) : [] })
    .enter().append('line')
    .attr('x1', function(d, i, t) { angle = 360 / count; return Math.cos(((-90 + i*15)* Math.PI) / 180) * 120; }) //$(this.parentNode).offset().left;
    .attr('y1', function(d, i, t) { angle = 360 / count; return Math.sin(((-90 + i*15)* Math.PI) / 180) * 120; }) //$(this.parentNode).offset().top;
    .attr('x2', 500)
    .attr('y2', 500)
    .attr('style', "stroke:rgb(255,0,0);stroke-width:2;");

    console.log(locations);

  	//svg = Viz("digraph { a -> b; b -> a}", "svg");
  	//svg = Viz($('#data').html(), "plain");
  	//console.log(svg);
  	//$('#svg').html(svg);

  	/*data.forEach( function(cs) {
  		cs.functions.forEach( function(func) {
  			func.usage.forEach( function(func) {
  		});
  	});*/
});