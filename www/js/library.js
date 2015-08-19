/*
 * Created by MarkehMe / Mark Hughes <mark@markeh.me>
 * Original assets are © 2002-2007 The Coca-Cola Company, Coca-Cola, Coke,
 * V-ego, Launching Pad and Decibel Central are trademarks of The Coca-Cola Company.
 * All other code is licensed under the MIT license.
 *
 * Copyright (c) 2015 Mark Hughes <mark@markeh.me>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */


function openMixer() {
	var mixerWindow = window.open("/music-mixer-app/",'musicmixer-'+(new Date()).toString(),'height=450,width=800');
	if (window.focus) {
    mixerWindow.focus()
  }
	return false;
}



var QueryString = function () {
	// Taken from here:
	// https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-url-parameter
  // This function is anonymous, is executed immediately and
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
    return query_string;
}();

/** Start original coke stuff **/
function GetCookie (name)
{
var arg = name + "=";
var alen = arg.length;
var clen = document.cookie.length;
var i = 0;
while (i < clen) {
var j = i + alen;
if (document.cookie.substring(i, j) == arg)
return getCookieVal (j);
i = document.cookie.indexOf(" ", i) + 1;
if (i == 0) break;
}
return "";
}

function getCookieVal(offset)
{
var endstr = document.cookie.indexOf (";", offset);
if (endstr == -1)
endstr = document.cookie.length;
return unescape(document.cookie.substring(offset, endstr));
}


function RemoveCookie (name)
{
	if (GetCookie(name) != "")
	{
		document.cookie = name +  "="  + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
 	}
}





function logFox(lbl,screenname) {

     //cfwb_log('', '', lbl, '', '', screenname, '', '');
   }


function openWindow(fileName)
{
	//alert("filename is "+fileName);

	//var fileName = "";
	var w = 680;
	var h = 520;

	/*
	if (section == "policy")
	{
		fileName = "http://dev4.cokemusic.com/home/privacypolicy.html";
		w = 570;
		h = 520;
	}
	else
	{
		fileName = "http://dev2.cariocas.cokemusic.com/cdc/rules.jsp";
		w = 680;
		h = 520;
	}
	*/
	if (fileName.indexOf("policy")!=-1)
	{
		w = 570;
		h = 520;

	}

	//var winl = (screen.width - w) / 2;
	//var wint = (screen.height - h) / 2;
	var winl = 0;
	var wint = 0;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars=yes,resizable=0,menubar=0' ;
	title = 'CokeMusic' ;
	win = window.open(fileName, title, winprops);
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}



function tracking(logfoxtitle,wtl_title,CONTENTGROUP,wtl_url){
/*logFox(logfoxtitle);
var wtl_TagID = 133378;
var wtl_SID = "133378";
var wtl_Offset = "-500";
WTL_TAG = new Image;
WTL_TAG.ID = "WTL_TAG";

wtl_Tag6(wtl_TagID,wtl_SID,wtl_url,wtl_title,CONTENTGROUP);*/
}


/* Function doCMTracking
*  Params: (* Obligatory)
*	 - * contentGroup: String CONTENTGROUP,SUBCONTENTGROUP; example: "Games,Sumo"
*	 - documentURL: String Current URL to be tracked; example: "/web/20050305033324/http://www.cokemusic.com/cstudios/cslanding1.jsp"
*	 - redirectURL: String Redirec to this URL after tracking; example: "/web/20050305033324/http://www.cokemusic.com/games/coaster.swf"
*	 - documentTitle: String Page Title; example: "CokeMusic - Registration"
*    - * newWindow: [0,1] The redirect window opens in a new window.
*/
function doCMTracking (contentGroup, documentURL, redirectURL, documentTitle, newWindow) {/*
	if (documentURL == "")
		var wtl_url = document.URL;
	else
		var wtl_url = documentURL;
	if (documentTitle == "")
		var wtl_title = document.title;
	else
		var wtl_title = documentTitle;
	WTL_TAG = new Image;
	WTL_TAG.ID = "WTL_TAG";

	var ORDER= "";
	var SERVER= "";
	var INVOICE= "";
	var CARTVIEW= "";
	var CARTADD= "";
	var CARTREMOVE= "";
	var CHECKOUT= "";
	var CARTBUY= "";
	var ADCAMPAIGN= "";

	//wtl_Tag6(TAG,SID,wtl_url,wtl_title,"MainContentGroup,SubContentGroup");
	wtl_Tag6(wtl_TagID,wtl_SID,wtl_url,wtl_title,contentGroup);
	if (redirectURL != "")
	{
		if(newWindow)
			window.open(redirectURL, 'fileWindow', 'scrollbars=yes,resizable=yes,menubar=yes');
		else
			window.location = redirectURL;
	}*/
}

function reloadBadge() {
	//parent.parent.leftFrame.badge.location.reload();
}





function track_createImage()

	{

		var demoId=4;

		var t_im = "";

		t_im = new Image;

		t_im.src = '../reporting/page_visit.jsp?section='+ demoId;





}







function MM_openBrWindow(theURL,winName,features) { //v2.0

		//wtl_Tag6(wtl_TagID,wtl_SID,"http://audiomixer.oddcast.com/audiomix_edit.php","Create your demo Go",CONTENTGROUP);

		var t_im = "";

		t_im = new Image;

		t_im.src = '../reporting/page_visit.jsp?section=4';



  window.open(theURL,winName,features);



}







function MM_preloadImages() { //v3.0



  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();



    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)



    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}



}







function MM_swapImgRestore() { //v3.0



  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;



}







function MM_findObj(n, d) { //v4.0



  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {



    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}



  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];



  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);



  if(!x && document.getElementById) x=document.getElementById(n); return x;



}


function MM_swapImage() { //v3.0

  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)

   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}

}
