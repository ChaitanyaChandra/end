//////./
/////// 
//////   Click on the Google Glass
/////    in the demo to toggle...
//// 
///
//



// Just a little javascript to get your time...

var time = new Date();
var h = time.getHours();
if (h > 12) {
    h -= 12;
} else if (h === 0) {
  h = 12;
}
var m = time.getMinutes();
if (m < 10){ m = "0" + m;  }

$("time").text(h + ":" + m);