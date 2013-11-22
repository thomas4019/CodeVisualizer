var jsonData = {"Send":{"group":"hypeerweb.Models.Visitor","name":"Send","type":"class","functions":[{"name":"finalOperation","args":[{"name":"node","type":"Node"},{"name":"parameters","type":"Parameters"}],"usage":{"put":[25,26]}},{"name":"intermediateOperation","args":[{"name":"node","type":"Node"},{"name":"parameters","type":"Parameters"}],"usage":{"put":[32]}}]},"Command":{"group":"hypeerweb.proxy","name":"Command","type":"class","functions":[{"name":"toString","args":[],"usage":{}},{"name":"execute","args":[],"usage":{"getValue":[137],"getClass":[129,132],"invoke":[140,142],"getDeclaredMethod":[134]}},{"name":"isSynchronous","args":[],"usage":{}},{"name":"getClass","args":[{"name":"className","type":"String"}],"usage":{"equals":[176,178,180,182,184,186,188,190],"forName":[193]}}]},"Parameters":{"group":"hypeerweb.Models","name":"Parameters","type":"class","functions":[{"name":"put","args":[{"name":"key","type":"Object"},{"name":"data","type":"Object"}],"usage":{"put":[26]}},{"name":"get","args":[{"name":"key","type":"Object"}],"usage":{"get":[31]}}]},"ServerThread":{"group":"hypeerweb.proxy","name":"ServerThread","type":"class","functions":[{"name":"run","args":[],"usage":{"writeObject":[73],"isSynchronous":[71],"execute":[72,82],"flush":[74],"readObject":[70],"close":[75,76,77,79,80,81]}}]},"DeletionStateNotDeleteable":{"group":"hypeerweb.States","name":"DeletionStateNotDeleteable","type":"class","functions":[{"name":"deleteNode","args":[{"name":"current","type":"Node"},{"name":"toBeRemoved","type":"Node"}],"usage":{"isEmpty":[27],"iterator":[29],"next":[23,30],"getChild":[17],"deleteNode":[19,37],"getInverseSurrogateFold":[32,34]}}]},"FoldStateChildful":{"group":"hypeerweb.States","name":"FoldStateChildful","type":"class","functions":[{"name":"disconnect","args":[{"name":"p","type":"Node"},{"name":"disconnectedNode","type":"Node"}],"usage":{"setFold":[17,22],"setSurrogateFold":[18,23],"setFoldState":[20,25],"setInverseSurrogateFold":[19,24]}},{"name":"addChild","args":[{"name":"p","type":"Node"},{"name":"c","type":"Node"}],"usage":{}},{"name":"toString","args":[],"usage":{}}]},"HyPeerWeb":{"group":"hypeerweb.Models","name":"HyPeerWeb","type":"class","functions":[{"name":"getMainHyPeerWeb","args":[],"usage":{}},{"name":"clear","args":[],"usage":{"clear":[43]}},{"name":"addNode","args":[{"name":"child","type":"Node"}],"usage":{"setFold":[69,70],"put":[56,67,86],"get":[63],"setParent":[55,66],"insertChild":[85],"setHeight":[68],"addNeighbor":[65,71,72],"getRandom":[79],"getSize":[49],"findStartPoint":[80],"initialize":[54,64]}},{"name":"deleteNode","args":[{"name":"n","type":"int"}],"usage":{"get":[98],"deleteNode":[101]}},{"name":"deleteNode","args":[{"name":"n","type":"Node"}],"usage":{"clear":[125,142],"put":[143,164],"get":[159,167],"remove":[138,150,160,163],"println":[111],"next":[139],"deleteNode":[156],"setWebId":[140],"getWebId":[123,123,136,136],"getWebIdO":[127,145,151],"getSize":[115],"print":[170],"initialize":[141,149]}},{"name":"findStartPoint","args":[{"name":"current","type":"Node"},{"name":"target","type":"WebID"},{"name":"bestDist","type":"int"}],"usage":{"next":[178],"distanceTo":[179,182],"findStartPoint":[192],"getNeighborsSet":[180]}},{"name":"getParent","args":[],"usage":{}},{"name":"setParent","args":[{"name":"parent","type":"Node"}],"usage":{}},{"name":"getOrderedListOfNodes","args":[],"usage":{"toArray":[220]}},{"name":"getNode","args":[{"name":"webId","type":"int"}],"usage":{"get":[226]}},{"name":"getNodes","args":[],"usage":{}},{"name":"getSize","args":[],"usage":{"size":[236]}},{"name":"getRandomNode","args":[],"usage":{"random":[245],"getNode":[246],"getSize":[245]}},{"name":"print","args":[],"usage":{"println":[257,259],"getOrderedListOfNodes":[254]}},{"name":"close","args":[],"usage":{}}]},"ObjectDB":{"group":"hypeerweb.proxy","name":"ObjectDB","type":"class","functions":[{"name":"getSingleton","args":[],"usage":{}},{"name":"setFileLocation","args":[{"name":"fileLocation","type":"String"}],"usage":{}},{"name":"getValue","args":[{"name":"key","type":"LocalObjectId"}],"usage":{"get":[94]}},{"name":"getSize","args":[],"usage":{"size":[105]}},{"name":"getRandomMember","args":[],"usage":{"getRandomMember":[118],"nextInt":[117]}},{"name":"getRandomMember","args":[{"name":"i","type":"int"}],"usage":{"hasMoreElements":[134],"elements":[132],"nextElement":[135],"nextInt":[130]}},{"name":"enumeration","args":[],"usage":{"elements":[149]}},{"name":"dump","args":[],"usage":{"keys":[202],"println":[199,205,207],"hasMoreElements":[203],"nextElement":[204]}},{"name":"store","args":[{"name":"key","type":"LocalObjectId"},{"name":"value","type":"Object"}],"usage":{"put":[218]}},{"name":"remove","args":[{"name":"key","type":"LocalObjectId"}],"usage":{"remove":[230]}},{"name":"clear","args":[],"usage":{"clear":[240],"setNextId":[241]}},{"name":"save","args":[{"name":"destination","type":"String"}],"usage":{"writeObject":[265],"flush":[266],"println":[269],"write":[264],"close":[267]}},{"name":"save","args":[],"usage":{"save":[281]}},{"name":"restore","args":[{"name":"source","type":"String"}],"usage":{"readObject":[308],"read":[306],"setNextId":[307,311],"close":[309]}},{"name":"restore","args":[],"usage":{"restore":[323]}}]},"DeletionState":{"group":"hypeerweb.States","name":"DeletionState","type":"class","functions":[{"name":"deleteNode","args":[{"name":"current","type":"Node"},{"name":"toBeDeleted","type":"Node"}],"usage":{}}]},"Visitor":{"group":"hypeerweb.Models.Visitor","name":"Visitor","type":"interface","functions":[{"name":"visit","args":[{"name":"node","type":"Node"},{"name":"parameters","type":"Parameters"}],"usage":{}}]},"VisitorSend":{"group":"hypeerweb.Models.Visitor","name":"VisitorSend","type":"class","functions":[{"name":"visit","args":[{"name":"node","type":"Node"},{"name":"parameters","type":"Parameters"}],"usage":{"intermediateOperation":[48],"get":[33,34],"println":[59],"equals":[36],"accept":[50],"getClosestNode":[42],"contains":[46],"finalOperation":[38],"add":[49]}},{"name":"finalOperation","args":[{"name":"node","type":"Node"},{"name":"parameters","type":"Parameters"}],"usage":{}},{"name":"intermediateOperation","args":[{"name":"node","type":"Node"},{"name":"parameters","type":"Parameters"}],"usage":{}}]},"SurrogateNeighbors":{"group":"hypeerweb.DataAccess","name":"SurrogateNeighbors","type":"class","functions":[{"name":"getSurrogateNeighbors","args":[{"name":"webID","type":"WebID"}],"usage":{"commitTransaction":[52],"next":[35],"setInt":[33],"prepareStatement":[32],"getConnection":[26],"add":[37],"executeQuery":[34],"close":[44,48]}},{"name":"insertSurrogateNeighbor","args":[{"name":"webID","type":"WebID"},{"name":"surrogateNeighborWebID","type":"WebID"}],"usage":{"commitTransaction":[88],"setInt":[76,77],"prepareStatement":[75],"getConnection":[69],"close":[84],"executeUpdate":[78]}},{"name":"deleteSurrogateNeighbors","args":[{"name":"webID","type":"WebID"}],"usage":{"commitTransaction":[122],"setInt":[110],"prepareStatement":[109],"getConnection":[103],"close":[118],"executeUpdate":[111]}},{"name":"getInverseSurrogateNeighbors","args":[{"name":"webID","type":"WebID"}],"usage":{"commitTransaction":[164],"next":[147],"setInt":[145],"prepareStatement":[144],"getConnection":[138],"add":[149],"executeQuery":[146],"close":[156,160]}}]},"Validator":{"group":"hypeerweb.simulation","name":"Validator","type":"class","functions":[{"name":"validate","args":[],"usage":{"println":[64,69],"validateNode":[59],"print":[67]}},{"name":"validateNode","args":[{"name":"node","type":"NodeInterface"}],"usage":{"getInverseSurrogateNeighbors":[162],"checkFoldConstraints":[176],"checkSurrogateNeighborConstraints":[174],"getParent":[142],"checkSurrogateFoldConstraints":[178],"getNeighbors":[85,134],"getFold":[86],"getWebId":[91,99,123,143,151],"checkNeighborsNeighborsConstraints":[182],"getHeight":[107,115,123],"checkNeighborConstraints":[172],"printErrorMessage":[93,101,109,117,127,136,147,155,167],"checkInverseSurrogateFoldConstraints":[180],"getSurrogateNeighbors":[85,161],"getSurrogateFold":[86,125]}},{"name":"checkNeighborConstraints","args":[{"name":"node","type":"NodeInterface"},{"name":"validationFailed","type":"boolean"}],"usage":{"getHeight":[217,218],"printErrorMessage":[208,228,240,250,262,270],"getNeighbors":[201],"distanceTo":[267]}},{"name":"checkSurrogateNeighborConstraints","args":[{"name":"node","type":"NodeInterface"},{"name":"validationFailed","type":"boolean"}],"usage":{"getHeight":[308,308,308,308],"println":[322,324],"printErrorMessage":[299,310,335],"getWebId":[330,333],"distanceTo":[316],"getSurrogateNeighbors":[293],"positionOfHighestOrderOneBit":[329]}},{"name":"checkFoldConstraints","args":[{"name":"node","type":"NodeInterface"},{"name":"validationFailed","type":"boolean"}],"usage":{"getHeight":[388,388,400,400,412,412],"printErrorMessage":[369,382,392,404,416,424,436],"getComplement":[390],"getWebId":[390,402,402,414,414],"getFold":[367,375,376,377]}},{"name":"checkSurrogateFoldConstraints","args":[{"name":"node","type":"NodeInterface"},{"name":"validationFailed","type":"boolean"}],"usage":{"printErrorMessage":[464,477,488,495],"getComplement":[484],"getWebId":[493],"getFold":[462,470],"getSurrogateFold":[471]}},{"name":"checkInverseSurrogateFoldConstraints","args":[{"name":"node","type":"NodeInterface"},{"name":"validationFailed","type":"boolean"}],"usage":{"getHeight":[533,533,543,543,555,555],"printErrorMessage":[524,537,547,560,571],"getWebId":[558,558],"getInverseSurrogateFold":[518],"getFold":[517,530],"getNode":[557]}},{"name":"checkNeighborsNeighborsConstraints","args":[{"name":"node","type":"NodeInterface"},{"name":"validationFailed","type":"boolean"}],"usage":{"getHeight":[594,594,625,625,625,625,639,639,639,639],"abs":[610],"printErrorMessage":[614,627,641],"contains":[601,608,622,636],"getNeighbors":[597,603],"add":[631,646,650],"getWebId":[606,606,622,622,636,636],"getSurrogateNeighbors":[619],"getSurrogateFold":[635]}},{"name":"printErrorMessage","args":[{"name":"validationFailed","type":"boolean"},{"name":"node","type":"NodeInterface"},{"name":"message","type":"String"}],"usage":{"println":[672,674]}},{"name":"distanceTo","args":[{"name":"node1","type":"NodeInterface"},{"name":"node2","type":"NodeInterface"}],"usage":{"getWebId":[697,697]}},{"name":"positionOfHighestOrderOneBit","args":[{"name":"node","type":"NodeInterface"}],"usage":{"getWebId":[730]}},{"name":"getFold","args":[{"name":"node","type":"NodeInterface"}],"usage":{"getHeight":[757,762,766,766],"getWebId":[757],"getNode":[759,772]}},{"name":"getComplement","args":[{"name":"node","type":"NodeInterface"},{"name":"height","type":"int"}],"usage":{"getHeight":[790],"getWebId":[794]}}]},"FoldState":{"group":"hypeerweb.States","name":"FoldState","type":"class","functions":[{"name":"addChild","args":[{"name":"p","type":"Node"},{"name":"c","type":"Node"}],"usage":{}},{"name":"disconnect","args":[{"name":"p","type":"Node"},{"name":"disconnectedNode","type":"Node"}],"usage":{}}]},"FoldStateStable":{"group":"hypeerweb.States","name":"FoldStateStable","type":"class","functions":[{"name":"disconnect","args":[{"name":"p","type":"Node"},{"name":"disconnectedNode","type":"Node"}],"usage":{"setFold":[22],"setSurrogateFold":[23],"setFoldState":[25,30],"setInverseSurrogateFold":[29],"getFold":[18],"print":[20]}},{"name":"addChild","args":[{"name":"p","type":"Node"},{"name":"c","type":"Node"}],"usage":{"setFold":[41,46,51],"setSurrogateFold":[42,47],"setFoldState":[44,49,54],"setInverseSurrogateFold":[48,53],"getFold":[39]}},{"name":"toString","args":[],"usage":{}}]},"PeerCommunicator":{"group":"hypeerweb.proxy","name":"PeerCommunicator","type":"class","functions":[{"name":"stopThisConnection","args":[],"usage":{"sendASynchronous":[118]}},{"name":"stopConnection","args":[{"name":"globalObjectId","type":"GlobalObjectId"}],"usage":{"sendASynchronous":[136]}},{"name":"noop","args":[],"usage":{}},{"name":"run","args":[],"usage":{"save":[171],"println":[167,168],"start":[165],"accept":[163]}},{"name":"getSingleton","args":[],"usage":{}},{"name":"createPeerCommunicator","args":[],"usage":{}},{"name":"createPeerCommunicator","args":[{"name":"portNumber","type":"PortNumber"}],"usage":{}},{"name":"sendSynchronous","args":[{"name":"globalObjectId","type":"GlobalObjectId"},{"name":"command","type":"Command"}],"usage":{"getValue":[234],"writeObject":[238],"flush":[239],"getInputStream":[237],"println":[248,249],"getOutputStream":[236],"readObject":[242],"getMachineAddr":[234],"close":[244,245]}},{"name":"sendASynchronous","args":[{"name":"globalObjectId","type":"GlobalObjectId"},{"name":"command","type":"Command"}],"usage":{"getValue":[273],"writeObject":[278],"flush":[279],"getInputStream":[276],"println":[284,285],"getOutputStream":[275],"getMachineAddr":[273],"close":[281,282]}}]},"PortNumber":{"group":"hypeerweb.proxy","name":"PortNumber","type":"class","functions":[{"name":"setApplicationsPortNumber","args":[{"name":"portNumber","type":"PortNumber"}],"usage":{}},{"name":"getApplicationsPortNumber","args":[],"usage":{}},{"name":"getValue","args":[],"usage":{}},{"name":"equals","args":[{"name":"o","type":"Object"}],"usage":{}},{"name":"toString","args":[],"usage":{"toString":[122]}},{"name":"hashCode","args":[],"usage":{}},{"name":"generateDefaultPortNumber","args":[],"usage":{}}]},"Neighbors":{"group":"hypeerweb.DataAccess","name":"Neighbors","type":"class","functions":[{"name":"getNeighbors","args":[{"name":"webID","type":"WebID"},{"name":"incomingConnection","type":"Connection"}],"usage":{"commitTransaction":[56],"next":[39],"setInt":[37],"prepareStatement":[36],"getConnection":[30],"add":[41],"executeQuery":[38],"close":[48,52]}},{"name":"insertNeighbor","args":[{"name":"webID","type":"WebID"},{"name":"neighborWebID","type":"WebID"}],"usage":{"commitTransaction":[91],"setInt":[79,80],"prepareStatement":[78],"getConnection":[72],"close":[87],"executeUpdate":[81]}},{"name":"getNeighbors","args":[{"name":"webID","type":"WebID"}],"usage":{"commitTransaction":[134],"next":[117],"setInt":[115],"prepareStatement":[114],"getConnection":[108],"add":[119],"executeQuery":[116],"close":[126,130]}},{"name":"deleteNeighbors","args":[{"name":"webID","type":"WebID"}],"usage":{"commitTransaction":[168],"setInt":[156],"prepareStatement":[155],"getConnection":[149],"close":[164],"executeUpdate":[157]}}]},"FoldStateChildless":{"group":"hypeerweb.States","name":"FoldStateChildless","type":"class","functions":[{"name":"disconnect","args":[{"name":"p","type":"Node"},{"name":"disconnectedNode","type":"Node"}],"usage":{}},{"name":"addChild","args":[{"name":"p","type":"Node"},{"name":"c","type":"Node"}],"usage":{"setFold":[29,34],"setSurrogateFold":[30,35],"setFoldState":[27,32,37],"setInverseSurrogateFold":[26,31],"getInverseSurrogateFold":[22]}},{"name":"toString","args":[],"usage":{}}]},"DeletionStateDeleteable":{"group":"hypeerweb.States","name":"DeletionStateDeleteable","type":"class","functions":[{"name":"deleteNode","args":[{"name":"current","type":"Node"},{"name":"toBeRemoved","type":"Node"}],"usage":{"equals":[38],"getParent":[25,29],"println":[19],"disconnectFoldState":[34],"copyProperties":[40],"isHigh":[20],"disconnect":[36],"getWebIdO":[24],"print":[22,27,32],"getFoldState":[30]}}]},"VisitorBroadcast":{"group":"hypeerweb.Models.Visitor","name":"VisitorBroadcast","type":"class","functions":[{"name":"visit","args":[{"name":"n","type":"Node"},{"name":"parameters","type":"Parameters"}],"usage":{"getHeight":[24],"put":[20],"get":[34,43],"accept":[38,46],"getChild":[40],"getWebId":[22],"print":[37,45]}}]},"HyPeerWebDatabase":{"group":"hypeerweb.DataAccess","name":"HyPeerWebDatabase","type":"class","functions":[{"name":"getConnection","args":[],"usage":{"setAutoCommit":[40],"getConnection":[39],"forName":[31]}},{"name":"commitTransaction","args":[{"name":"connection","type":"Connection"},{"name":"successful","type":"boolean"}],"usage":{"commit":[57],"rollback":[61],"close":[66]}},{"name":"getHyPeerWeb","args":[],"usage":{"getNodes":[75]}},{"name":"insertNode","args":[{"name":"node","type":"Node"}],"usage":{"insertNode":[80]}},{"name":"updateNode","args":[{"name":"node","type":"Node"}],"usage":{"updateNode":[85]}},{"name":"deleteNode","args":[{"name":"webID","type":"WebID"}],"usage":{"deleteNode":[90]}},{"name":"getNeighbors","args":[{"name":"webID","type":"WebID"}],"usage":{"getNeighbors":[96]}},{"name":"insertNeighbor","args":[{"name":"webID","type":"WebID"},{"name":"neighborWebID","type":"WebID"}],"usage":{"insertNeighbor":[101]}},{"name":"deleteNeighbors","args":[{"name":"webID","type":"WebID"}],"usage":{"deleteNeighbors":[106]}},{"name":"getSurrogateNeighbors","args":[{"name":"webID","type":"WebID"}],"usage":{"getSurrogateNeighbors":[112]}},{"name":"insertSurrogateNeighbor","args":[{"name":"webID","type":"WebID"},{"name":"surrogateNeighborWebID","type":"WebID"}],"usage":{"insertSurrogateNeighbor":[117]}},{"name":"deleteSurrogateNeighbors","args":[{"name":"webID","type":"WebID"}],"usage":{"deleteSurrogateNeighbors":[122]}},{"name":"getInverseSurrogateNeighbors","args":[{"name":"webID","type":"WebID"}],"usage":{"getInverseSurrogateNeighbors":[127]}}]},"NodeSet":{"group":"hypeerweb.Models","name":"NodeSet","type":"class","functions":[{"name":"contains","args":[{"name":"id","type":"WebID"}],"usage":{"get":[17]}},{"name":"contains","args":[{"name":"n","type":"Node"}],"usage":{"get":[26]}},{"name":"get","args":[{"name":"webID","type":"int"}],"usage":{"get":[31]}},{"name":"iterator","args":[],"usage":{"iterator":[36]}},{"name":"isEmpty","args":[],"usage":{"size":[43]}},{"name":"add","args":[{"name":"n","type":"Node"}],"usage":{"put":[59],"contains":[53]}},{"name":"remove","args":[{"name":"n","type":"Node"}],"usage":{"remove":[66]}},{"name":"toArray","args":[{"name":"nodes","type":"Node[]"}],"usage":{"toArray":[71]}},{"name":"clone","args":[],"usage":{"add":[79]}}]},"GlobalObjectId":{"group":"hypeerweb.proxy","name":"GlobalObjectId","type":"class","functions":[{"name":"getMachineAddr","args":[],"usage":{"getHostAddress":[104]}},{"name":"getPortNumber","args":[],"usage":{}},{"name":"getLocalObjectId","args":[],"usage":{}},{"name":"toString","args":[],"usage":{"getMachineAddr":[132]}},{"name":"onSameMachineAs","args":[{"name":"globalObjectId","type":"GlobalObjectId"}],"usage":{"equals":[146,147]}},{"name":"hashCode","args":[],"usage":{"hashCode":[180,183,187]}},{"name":"equals","args":[{"name":"object","type":"Object"}],"usage":{"equals":[206,210,214]}}]},"Height":{"group":"hypeerweb.Models","name":"Height","type":"class","functions":[{"name":"getHeight","args":[],"usage":{}},{"name":"setHeight","args":[{"name":"height","type":"int"}],"usage":{}},{"name":"getIncremented","args":[],"usage":{}},{"name":"increment","args":[],"usage":{}},{"name":"decrement","args":[],"usage":{}},{"name":"toString","args":[],"usage":{}}]},"Broadcast":{"group":"hypeerweb.Models.Visitor","name":"Broadcast","type":"class","functions":[{"name":"finalOperation","args":[{"name":"node","type":"Node"},{"name":"parameters","type":"Parameters"}],"usage":{"accept":[29],"finalOperation":[28]}}]},"InsertionStateSliperySlope":{"group":"hypeerweb.States","name":"InsertionStateSliperySlope","type":"class","functions":[{"name":"addChild","args":[{"name":"current","type":"Node"},{"name":"child","type":"Node"}],"usage":{"isEmpty":[19],"next":[15,21],"addChild":[28],"getSurrogateFold":[23,25]}}]},"InsertionState":{"group":"hypeerweb.States","name":"InsertionState","type":"class","functions":[{"name":"addChild","args":[{"name":"current","type":"Node"},{"name":"n","type":"Node"}],"usage":{}}]},"MachineAddress":{"group":"hypeerweb.proxy","name":"MachineAddress","type":"class","functions":[{"name":"setMachineAddress","args":[{"name":"machineName","type":"String"}],"usage":{"println":[33],"getByName":[31],"exit":[35]}},{"name":"getThisMachinesInetAddress","args":[],"usage":{}}]},"Node":{"group":"hypeerweb.Models","name":"Node","type":"class","functions":[{"name":"insertChild","args":[{"name":"child","type":"Node"}],"usage":{"addChild":[58],"determineNonFlatNeighborsNeighbors":[57]}},{"name":"deleteNode","args":[{"name":"n","type":"Node"}],"usage":{"determineHigherNeighborsNeighbors":[64],"println":[63],"deleteNode":[65]}},{"name":"initialize","args":[{"name":"webid","type":"int"},{"name":"h","type":"int"}],"usage":{"setWebId":[136]}},{"name":"toString","args":[{"name":"leadingCharacters","type":"String"},{"name":"postCharacters","type":"String"}],"usage":{"append":[186,187,188,189,191,192,193,194,196,197,198,199,201,202,204,206,207,209,211,212,214,216,217,218,219,221,222,223,224,226,227,228,229,231,232,233,234,236,237,238,239,241,242,243,244],"toString":[246],"appendSortedListOf":[203,208,213]}},{"name":"toString","args":[],"usage":{"hashCode":[257],"realHashCode":[257]}},{"name":"equals","args":[{"name":"otherNode","type":"Object"}],"usage":{"getWebId":[272,272]}},{"name":"setWebId","args":[{"name":"webId","type":"WebID"}],"usage":{}},{"name":"getWebId","args":[],"usage":{"getValue":[291]}},{"name":"getWebIdO","args":[],"usage":{}},{"name":"getHeight","args":[],"usage":{"getHeight":[313]}},{"name":"getHeightO","args":[],"usage":{}},{"name":"getNeighborsSet","args":[],"usage":{}},{"name":"getSurrogateNeighborsSet","args":[],"usage":{}},{"name":"getInverseSurrogateNeighborsSet","args":[],"usage":{}},{"name":"getFold","args":[],"usage":{}},{"name":"getSurrogateFold","args":[],"usage":{}},{"name":"getInverseSurrogateFold","args":[],"usage":{}},{"name":"containsCloserNode","args":[{"name":"nextNodeId","type":"WebID"},{"name":"targetId","type":"WebID"}],"usage":{"iterator":[413,421,429],"hasNext":[414,422,430],"distanceTo":[410,417,425,433,437,439,441],"getWebIdO":[416,424,432]}},{"name":"distanceTo","args":[{"name":"thisId","type":"WebID"},{"name":"otherId","type":"WebID"}],"usage":{"distanceTo":[448]}},{"name":"distanceTo","args":[{"name":"thisId","type":"int"},{"name":"otherId","type":"int"}],"usage":{}},{"name":"setNeighbors","args":[{"name":"neighbors","type":"NodeSet"}],"usage":{"removeNeighbor":[493],"addNeighbor":[494]}},{"name":"addNeighbor","args":[{"name":"n","type":"Node"}],"usage":{"add":[501]}},{"name":"addSurrogateNeighbor","args":[{"name":"n","type":"Node"}],"usage":{"add":[506]}},{"name":"addInverseSurrogateNeighbor","args":[{"name":"n","type":"Node"}],"usage":{"add":[511]}},{"name":"setSurrogateNeighbors","args":[{"name":"surrogateNeighbors","type":"NodeSet"}],"usage":{"addInverseSurrogateNeighbor":[529],"remove":[520],"removeInverseSurrogateNeighbor":[528]}},{"name":"removeNeighbor","args":[{"name":"n","type":"Node"}],"usage":{"remove":[536]}},{"name":"removeSurrogateNeighbor","args":[{"name":"n","type":"Node"}],"usage":{"remove":[541]}},{"name":"removeInverseSurrogateNeighbor","args":[{"name":"n","type":"Node"}],"usage":{"remove":[546]}},{"name":"setInverseSurrogateNeighbors","args":[{"name":"inverseSurrogateNeighbors","type":"NodeSet"}],"usage":{"addSurrogateNeighbor":[557],"removeSurrogateNeighbor":[556]}},{"name":"setFold","args":[{"name":"fold","type":"Node"}],"usage":{}},{"name":"setSurrogateFold","args":[{"name":"surrogateFold","type":"Node"}],"usage":{}},{"name":"setInverseSurrogateFold","args":[{"name":"inverseSurrogateFold","type":"Node"}],"usage":{}},{"name":"appendSortedListOf","args":[{"name":"stringBuffer","type":"StringBuffer"},{"name":"set","type":"HashSet<Node>"}],"usage":{"append":[609,612],"sort":[606],"hashCode":[603],"realHashCode":[603],"size":[599]}},{"name":"appendSortedListOf","args":[{"name":"stringBuffer","type":"StringBuffer"},{"name":"set","type":"NodeSet"}],"usage":{"append":[629,632],"sort":[626],"hashCode":[623],"realHashCode":[623],"size":[619]}},{"name":"setHeight","args":[{"name":"newHeight","type":"Height"}],"usage":{}},{"name":"getNonFlatNeighborsNeighbors","args":[],"usage":{}},{"name":"getHigherNeighborNeighbors","args":[],"usage":{}},{"name":"isFlat","args":[],"usage":{"isEmpty":[656]}},{"name":"determineNonFlatNeighborsNeighbors","args":[],"usage":{"clear":[667],"isEmpty":[686],"getHeight":[670,670,678,678],"isFlat":[670,678],"add":[672,680]}},{"name":"isHigh","args":[],"usage":{"isEmpty":[692]}},{"name":"determineHigherNeighborsNeighbors","args":[],"usage":{"clear":[702],"isEmpty":[722],"getHeight":[705,705,713,713],"remove":[721],"println":[720],"getChild":[722],"isHigh":[705,713],"add":[707,715]}},{"name":"getNeighbors","args":[],"usage":{"toArray":[728]}},{"name":"getSurrogateNeighbors","args":[],"usage":{"toArray":[734]}},{"name":"getInverseSurrogateNeighbors","args":[],"usage":{"toArray":[740]}},{"name":"compareTo","args":[{"name":"node","type":"NodeInterface"}],"usage":{"getValue":[746],"getWebId":[746]}},{"name":"getParent","args":[],"usage":{"getHeight":[753,754],"get":[760],"getWebId":[756,759]}},{"name":"setParent","args":[{"name":"parent","type":"NodeInterface"}],"usage":{}},{"name":"getChild","args":[],"usage":{"getHeight":[781],"get":[783],"getWebId":[781]}},{"name":"getChildlessNeighbors","args":[],"usage":{"getHeight":[791,791],"add":[793]}},{"name":"copyProperties","args":[{"name":"fromNode","type":"Node"}],"usage":{"setInverseSurrogateNeighbors":[812],"addInverseSurrogateNeighbor":[828],"setParent":[814,837],"setSurrogateNeighbors":[816],"getChild":[835],"addSurrogateNeighbor":[833],"setInverseSurrogateFold":[811,847],"removeInverseSurrogateNeighbor":[827],"getSurrogateNeighborsSet":[825],"getInverseSurrogateFold":[850],"getFold":[840],"getNeighborsSet":[820],"removeNeighbor":[822],"setFold":[809,842],"setSurrogateFold":[815,852],"println":[806],"addNeighbor":[823],"setHeight":[810],"setFoldState":[817],"setWebId":[808],"removeSurrogateNeighbor":[832],"getInverseSurrogateNeighborsSet":[830],"setNeighbors":[813],"getSurrogateFold":[845]}},{"name":"disconnect","args":[],"usage":{"clear":[874,880],"removeNeighbor":[872],"getParent":[860],"println":[858],"removeInverseSurrogateNeighbor":[878],"getSurrogateNeighborsSet":[876],"add":[869,870],"print":[863],"decrement":[884],"getNeighborsSet":[865]}},{"name":"realHashCode","args":[],"usage":{"hashCode":[890]}},{"name":"hashCode","args":[],"usage":{"getWebId":[895]}},{"name":"isFoldStable","args":[],"usage":{}},{"name":"getFoldState","args":[],"usage":{}},{"name":"setFoldState","args":[{"name":"state","type":"FoldState"}],"usage":{}},{"name":"disconnectFoldState","args":[{"name":"toBeRemoved","type":"Node"}],"usage":{"disconnect":[915]}},{"name":"addChildFoldState","args":[{"name":"child","type":"Node"}],"usage":{"addChild":[920]}},{"name":"addChild","args":[{"name":"child","type":"Node"}],"usage":{"addChild":[926],"determineNonFlatNeighborsNeighbors":[925]}},{"name":"setInsertionState","args":[{"name":"state","type":"InsertionState"}],"usage":{}},{"name":"accept","args":[{"name":"visitor","type":"Visitor"},{"name":"parameters","type":"Parameters"}],"usage":{"visit":[936]}},{"name":"getAttributes","args":[],"usage":{}},{"name":"getAttribute","args":[{"name":"key","type":"Object"}],"usage":{"get":[949]}},{"name":"setAttributes","args":[{"name":"attributes","type":"Map"}],"usage":{}},{"name":"setAttribute","args":[{"name":"key","type":"Object"},{"name":"value","type":"Object"}],"usage":{"put":[962]}},{"name":"getClosestNode","args":[{"name":"node","type":"Node"},{"name":"target","type":"WebID"},{"name":"bestDist","type":"int"}],"usage":{"isEmpty":[970,978,986],"getSurrogateNeighborsSet":[980],"distanceTo":[1006],"getInverseSurrogateFold":[999],"getFold":[994],"add":[974,982,990,996,1001],"getInverseSurrogateNeighborsSet":[988],"getNeighborsSet":[972]}}]},"LocalObjectId":{"group":"hypeerweb.proxy","name":"LocalObjectId","type":"class","functions":[{"name":"getNextId","args":[],"usage":{}},{"name":"setNextId","args":[{"name":"nextId","type":"int"}],"usage":{}},{"name":"equals","args":[{"name":"localObjectId","type":"Object"}],"usage":{}},{"name":"getId","args":[],"usage":{}},{"name":"hashCode","args":[],"usage":{}},{"name":"toString","args":[],"usage":{"toString":[135]}}]},"HyPeerWebInterface":{"group":"hypeerweb.simulation","name":"HyPeerWebInterface","type":"interface","functions":[{"name":"getOrderedListOfNodes","args":[],"usage":{}},{"name":"getNode","args":[{"name":"webId","type":"int"}],"usage":{}}]},"Nodes":{"group":"hypeerweb.DataAccess","name":"Nodes","type":"class","functions":[{"name":"buildNodeCache","args":[],"usage":{"commitTransaction":[51],"put":[36],"getInt":[33,34],"next":[31],"prepareStatement":[29],"getConnection":[23],"executeQuery":[30],"close":[43,47]}},{"name":"getNodes","args":[],"usage":{"setInverseSurrogateNeighbors":[84],"getInverseSurrogateNeighbors":[79],"getInt":[71,72],"setSurrogateNeighbors":[83],"next":[69],"setInverseSurrogateFold":[87],"getNeighbors":[77],"add":[88],"buildNodeCache":[58],"executeQuery":[68],"getNode":[73,74,75,81],"close":[95,99],"commitTransaction":[103],"setFold":[85],"setSurrogateFold":[86],"getConnection":[61],"prepareStatement":[67],"getSurrogateNeighbors":[78],"setNeighbors":[82]}},{"name":"getNode","args":[{"name":"id","type":"int"}],"usage":{"get":[112]}},{"name":"getNode","args":[{"name":"id","type":"WebID"}],"usage":{"get":[118]}},{"name":"insertNode","args":[{"name":"node","type":"Node"}],"usage":{"commitTransaction":[148],"getSurrogateNeighborsSet":[156],"setInt":[131,132,133,134,135],"prepareStatement":[130],"getConnection":[123],"insertSurrogateNeighbor":[154,158],"getNeighborsSet":[152],"close":[144],"executeUpdate":[136]}},{"name":"updateNode","args":[{"name":"node","type":"Node"}],"usage":{"deleteNeighbors":[194],"commitTransaction":[190],"deleteSurrogateNeighbors":[201],"getSurrogateNeighborsSet":[203],"setInt":[174,175,176,177,179],"prepareStatement":[173],"getConnection":[166],"insertSurrogateNeighbor":[198,205],"getNeighborsSet":[196],"close":[186],"executeUpdate":[180]}},{"name":"deleteNode","args":[{"name":"webID","type":"WebID"}],"usage":{"deleteNeighbors":[236],"commitTransaction":[232],"deleteSurrogateNeighbors":[237],"setInt":[220],"prepareStatement":[219],"getConnection":[213],"close":[228],"executeUpdate":[221]}},{"name":"getNodeCache","args":[],"usage":{}}]},"InsertionStateInsertable":{"group":"hypeerweb.States","name":"InsertionStateInsertable","type":"class","functions":[{"name":"addChild","args":[{"name":"insertionPoint","type":"Node"},{"name":"child","type":"Node"}],"usage":{"setInverseSurrogateNeighbors":[24],"addChildFoldState":[28],"increment":[40],"setSurrogateNeighbors":[23],"setParent":[30],"getWebId":[17],"clear":[38],"getHeight":[18],"setHeight":[16],"addNeighbor":[21,26,34],"setInsertionState":[22],"setWebId":[19],"removeSurrogateNeighbor":[35],"setNeighbors":[20],"getInverseSurrogateNeighborsSet":[32]}}]},"WebID":{"group":"hypeerweb.Models","name":"WebID","type":"class","functions":[{"name":"hashCode","args":[],"usage":{}},{"name":"toString","args":[],"usage":{"append":[139,141],"length":[133],"toString":[132,142]}},{"name":"equals","args":[{"name":"object","type":"Object"}],"usage":{}},{"name":"getValue","args":[],"usage":{}},{"name":"getHeight","args":[],"usage":{}},{"name":"isNeighborOf","args":[{"name":"webId","type":"WebID"}],"usage":{"distanceTo":[206]}},{"name":"isSurrogateNeighborOf","args":[{"name":"webId","type":"WebID"}],"usage":{"distanceTo":[255]}},{"name":"isFoldOf","args":[{"name":"webId","type":"WebID"}],"usage":{}},{"name":"isSurrogateFoldOf","args":[{"name":"webId","type":"WebID"}],"usage":{}},{"name":"isInverseSurrogateFoldOf","args":[{"name":"webId","type":"WebID"}],"usage":{}},{"name":"invariant","args":[{"name":"webId","type":"WebID"}],"usage":{"locationOfMostSignificantOneBit":[385]}},{"name":"locationOfMostSignificantOneBit","args":[{"name":"id","type":"int"}],"usage":{}},{"name":"distanceTo","args":[{"name":"webId","type":"WebID"}],"usage":{}},{"name":"compareTo","args":[{"name":"other","type":"WebID"}],"usage":{}},{"name":"getRandom","args":[],"usage":{"invariant":[469],"random":[460]}}]},"NodeInterface":{"group":"hypeerweb.simulation","name":"NodeInterface","type":"interface","functions":[{"name":"getWebId","args":[],"usage":{}},{"name":"getHeight","args":[],"usage":{}},{"name":"getNeighbors","args":[],"usage":{}},{"name":"getSurrogateNeighbors","args":[],"usage":{}},{"name":"getInverseSurrogateNeighbors","args":[],"usage":{}},{"name":"getFold","args":[],"usage":{}},{"name":"getSurrogateFold","args":[],"usage":{}},{"name":"getInverseSurrogateFold","args":[],"usage":{}},{"name":"getParent","args":[],"usage":{}},{"name":"equals","args":[{"name":"o","type":"Object"}],"usage":{}},{"name":"hashCode","args":[],"usage":{}},{"name":"compareTo","args":[{"name":"node","type":"NodeInterface"}],"usage":{}}]}}