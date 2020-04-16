//DESCRIPTION: Invert selection
//=============================================================
//  Script by Luis Felipe Corullón
//  Contato: lf@corullon.com.br
//  Site: http://scripts.corullon.com.br
//=============================================================

//IF NO DOCUMENTS ARE OPEN, ALERT AND EXIT SCRIPT EXECUTION
if (app.documents.length == 0 || app.documents[0].visible == false) {
    alert("You must run this script with a document open." , "No document open" , true);
    exit();
    }
//GET SELECTION
var mySel = app.selection;
//LOOP THRU SELECTED OBJECTS AND NAME THEM AS MYSEL
for (var i = mySel.length-1; i >= 0; i--) {
    mySel[i].name = "mySel";
    }
//CLEAN SELECTION
app.select(NothingEnum.nothing);
//GET ALL ACTIVE PAGE ITEMS
var myPageItems = app.activeWindow.activePage.pageItems;
//STORE ALL PAGE ITEMS WITH NO "MYSEL" NAME
var newSel = new Array;
for (var i = myPageItems.length-1; i >= 0; i--) {
    if (myPageItems[i].name != "mySel") {
        newSel.push(myPageItems[i]);
        }
    }
//SELECT ALL STORED PAGE ITEMS
app.select(newSel);
//REMOVE "MYSEL" AS NAME OF ALL PAGE ITEMS
for (var i = myPageItems.length-1; i >= 0; i--) {
    if (myPageItems[i].name == "mySel") {
        myPageItems[i].name = "";
        }
    }