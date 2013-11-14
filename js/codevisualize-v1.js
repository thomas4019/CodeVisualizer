d3.json("codef.js", function(json) {
	//console.log(json);
	var data = $.map(json, function (value, key) { return value; });
	//console.log(data);
	
	var body = d3.select("body");
	var ul = body.selectAll("ul")
    .data(data)
    .enter().append("ul")
    .text(function(d) { return d.name; })
  	.attr('class', function(d) { return d.type; } );

    var li = ul.selectAll("li")
    .data(function(d) { return d.functions ? d.functions : [] })
  	.enter().append("li")
  	.text(function(d) { return d.name; })
  	.attr('title', function(d) { return _.map(d.args, function(x){ return x.name; }); })
  	.each(function(e) {
  		console.log(e);
  		$(this).tipsy({gravity: 'e'});
  	});

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