var centers = {};
var packages = {};

var radius = 0;
var theta = 0;

function distance(x1, y1, x2, y2) {
  return Math.sqrt( ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)) );
}

function isSpaceOpen(x, y, r, group) {
  var value = true;

  Object.keys(centers).forEach( function(name) {
    var center = centers[name];
    d = distance(center.x, center.y, x, y);
    padding = group == center.group ? 50 : 80;
    if (d < (center.r + r + padding)) {
      value = false;
    }
  });

  return value;
}

function placePackage(name) {
  var cx, cy;
  do {
    radius += 1;
    for (theta = 0; theta < 6.2; theta += .1) {
      cx = radius * Math.cos(theta);
      cy = radius * Math.sin(theta);
      
      if (isSpaceOpen(cx, cy, 500, null)) {
        break;
      }
    }
  } while (!isSpaceOpen(cx, cy, 500, null));

  packages[name] = {x : cx, y : cy, radius : 0};
}

function place(entity) {
  var trial = 0;
  var cx, cy;

  rad = (entity.functions ? entity.functions.length * 5 + 60 : 60);
  g = entity.group;
  px = packages[g].x;
  py = packages[g].y;
  radius = packages[g].radius;
  do {
    radius += 1;
    for (theta = 0; theta < 6.2; theta += .1) {
      cx = px + radius * Math.cos(theta);
      cy = py + radius * Math.sin(theta);
      
      if (isSpaceOpen(cx, cy, rad, g)) {
        break;
      }
    }
    trial++;

  } while (!isSpaceOpen(cx, cy, rad, g));

  centers[entity.name] = {x : cx, y : cy, r : rad, group: g};
  packages[g].radius = radius;
}

/*d3.json("data/field_collection.js", visualize);*/

visualize(jsonData);

function visualize(json) {
	var data = $.map(json, function (value, key) { return value; });

  var locations = {};

  var index = 0;

  data.forEach( function(entity) {
    if (!packages[entity.group])
      placePackage(entity.group);
    place(entity);
  });


  //{Node : {x : 100, y: 100, r: 150}
	
	var body = d3.select("#viewport");
	var enter = body.selectAll("circle")
    .data(data)
    .enter().append("g");

    enter
    .attr('class', function(d) { return d.type; } )
    .attr("transform", function(d, i) {
      //var x = 100 + Math.round(Math.random()*2000);
      //var y = 100 + Math.round(Math.random()*2000);
      var x = centers[d.name].x;
      var y = centers[d.name].y;
      return "translate(" + [x,y] + ")";
    })
    //.attr('cx', function(d) { return Math.round(Math.random()*1000) })
    //.attr('cy', function(d) { return Math.round(Math.random()*1000) })

    enter.append("circle")
    
    .attr('r', function(d) {
      return (d.functions ? d.functions.length * 5 + 60 : 60);
    })
    .attr('stroke', 'black')
    .attr('stroke-width', '2')
    .attr('class', function(d) { return d.type; } )
  	

    enter.append('text')
    .text(function(d) { return d.name; })
    .attr('dx', function(d) { return -(d.functions ? d.functions.length * 5 + 60 : 60)*.9; })
    .attr('class', 'title')
    .attr('style', function(d) { return 'font-size: ' + (d.functions ? d.functions.length * .75 + 20 : 20) + 'px;'})

    var file_g = enter.selectAll("g")
    .data(function(d) { return d.functions ? d.functions : [] })
  	.enter();

    var func_g = file_g.append("g")
    .attr('transform', function(d, i, t) {
      count = this.parentNode.__data__.functions.length;
      angle = 360 / count;
      radius = parseInt(this.parentNode.firstChild.getAttribute('r'));
      x = Math.cos(((-90 + i*angle)* Math.PI) / 180) * (radius + 20); 
      y = Math.sin(((-90 + i*angle)* Math.PI) / 180) * (radius + 20);
      return 'translate(' + x + ' ' + y + ')';
    })
    .each(function(e) {
      locations[e.name] = $(this).offset();
    });

    func_g.append('text')
  	.text(function(d) { return d.name; })
  	.attr('title', function(d) { return _.map(d.args, function(x){ return x.name; }); })
    .attr('transform', function(d, i, t) {
      count = this.parentNode.parentNode.__data__.functions.length;
      angle = 360 / count;
      return 'rotate(' + Math.round(-90+i*angle) + ')';
    })
  	.each(function(e) {
  		$(this).tipsy({gravity: 'e'});
  	})
    
    func_g.selectAll('line')
    .data(function(d) { return d.usage ? _.keys(d.usage) : [] })
    .enter().append('line')
    .attr('x1', function(d) { return 0; }) //$(this.parentNode).offset().left;
    .attr('y1', function(d) { return 0; }) //$(this.parentNode).offset().top;
    .attr('data-target', function(d) { return d; })
    .attr('x2', function(d) {
      x = locations[d] ? locations[d].left - $(this).offset().left : 0;
      return x ;
    })
    .attr('y2', function(d) {
      y = locations[d] ? locations[d].top  - $(this).offset().top : 0;
      return y;
    })
    .attr('style', 'stroke:rgb(255,0,0);stroke-dasharray("5,5");stroke-width:2;');

  	//svg = Viz("digraph { a -> b; b -> a}", "svg");
  	//svg = Viz($('#data').html(), "plain");
  	//console.log(svg);
  	//$('#svg').html(svg);

  	/*data.forEach( function(cs) {
  		cs.functions.forEach( function(func) {
  			func.usage.forEach( function(func) {
  		});
  	});*/
}