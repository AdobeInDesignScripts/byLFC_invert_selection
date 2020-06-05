//DESCRIPTION: Invert selection
//=============================================================
//  Script by Luis Felipe Corullón
//  Contato: lf@corullon.com.br
//  Site: http://scripts.corullon.com.br
//=============================================================
/*
MIT License
Copyright (c) 2020 lfcorullon
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
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
