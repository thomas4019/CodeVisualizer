CodeVisualizer
==============
Present a summary of code in a visual format
so that programmers can rapidly understand how code interacts.
The extent of detail for information shown varies based on the size of project and the zoom level of the user's window.

See it in action
----------------
Checkout the [Live Demo](http://thomashansen.me/CodeVisualizer/). Note: Use the scroll wheel to zoom in and out. Click to pan.
<!---The graph is created using this [JSON data](http://thomashansen.me/CodeVisualizer/data/HyPeerWeb.js) in case you're interested!-->

Features
--------
* Start visualization by providing a URL to a GIT, Subversion, or CVS repository.
(Alternatively allow the user to upload a zip file with code)
* Instantly provide a visual graph where every class/file in the project is represented by a node
* List all public functions around the exterior of each node
* List all private functions within each node
* Group classes within packages visually
* Draw lines representing function calls

Fuzzy Features
--------------
* How to show inheritance (parent - child relationships)
* How to show implementation of interfaces
* Optimal placement of nodes to minimize line crossing
* How to show huge projects with 100+ nodes?

User Stories
------------
1. Bob just started working at ACME Software and now needs to fix a few small bugs in their program.
His mentor told him where to fix it. He wants to see if his change "fits in" with the rest of the program.
He then uses our system to determine exactly which classes will be affected so he can make the change with confidence.
2. James is the new sole maintainer for the companies small website.
The only one who knew how the code works quit a month ago and the company really wants a feature added.
James uses our system to learn how the code is setup and can add the desired changes within a few days instead of weeks.
3. At ACME Software the engineering team is debating about how to refactor their code. 
They would like an overview of their code to be able to discuss it's weaknesses and how to improve it.

Future Plans
-----------
* Pricing model similar to GitHub. Free for open-source projects
* Small monthly payment for a single developer to view private projects
* Different payment plans for large institutions
* Promote and offer free premium plans to college students.
When they graduate they will remember the solution and possibly encourage their employers to setup accounts
* When business becomes big sell to large company (google, microsoft, yahoo, ...) for nothing less than millions

Competition
-----------
There is no modern solution in this market. Here is a summary of other source code documentation and visualization products.

[Doxygen](http://www.stack.nl/~dimitri/doxygen/) (Free) A leading solution which was started in 1997 (and hasn't changed much since then).
It can provide call graphs but those don't work for large projects.
I tried setting up call graphs for a small Drupal website and it generated over a GB of images of callgraphs before I stopped the process.

[Bouml](http://www.bouml.fr/) (Paid) Windows software to generate UML diagrams. Our solution is a software as a service (SaaS).

[CodeFlower](http://redotheweb.com/CodeFlower/) (Free) Makes pretty looking flowers of your code base but not much more.

Currently Supported Languages
-------------------
* Java
* PHP
