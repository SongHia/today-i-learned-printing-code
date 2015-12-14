//Giphy Endpoints
var api = "https://api.giphy.com";
var randomGif = "/v1/gifs/random?";
var trendingGif = "/v1/gifs/trending?";
var searchGif = "/v1/gifs/search?";
var query = "&q=til";
var apiKey = "&api_key=dc6zaTOxFJmzC";


function init() {
  renderRecord();
  renderDisplay();
  // renderGiphy();
}

// edit form button event
// when the form is submitted (with a new record edit), the below runs
jQuery("#editForm").submit(function(e){

	// first, let's pull out all the values
	var til = jQuery("#edit-til").val();
	var context = jQuery("#edit-context").val();
	var bestPartDay = jQuery("#edit-bestPartDay").val();
	var tags = jQuery("#edit-tags").val();
	var id = jQuery("#edit-id").val();
	// var date = jQuery("#edit-date").val();
     
	// console.log(id); //status check
      
	// POST the data from above to our API create route
  	jQuery.ajax({
  		url : '/api/update/'+id,
  		dataType : 'json',
  		type : 'POST',
  	// we send the data in a data object (with key/value pairs)
  	data : {
  		// date : date,
  		til : til,
  		context : context,
  		bestPartDay : bestPartDay,
  		tags : tags
  	},
  	success : function(response){
  		if(response.status=="OK"){
	  		// console.log(response); // test for success
	  		renderRecord(); // re-render the records
	  		$('#editModal').modal('hide') // now, close the modal
	  		jQuery("#editForm input").val(''); // now, clear the input fields
  		}
  		else {
  			alert("something went wrong with edit 1");
  		}
  	},
  	error : function(err){
  		alert("something went wrong with edit 2"); // do error checking
  		console.error(err);
  	}
  }); 

	// prevents the form from submitting normally
  e.preventDefault();
  return false;
});


// get Record JSON from /api/get
function renderRecord(){
	// first, make sure the #record-holder is empty
	jQuery('#record-holder').empty();

	jQuery.ajax({
		url : '/api/get',
		dataType : 'json',
		success : function(response) {
			// console.log(response);

			var record = response.record;

			for(var i=0;i<record.length;i++){
				
				var date =  new Date(record[i].dateAdded); // turn string into a date object

				var htmlToAdd = '<div class="col-md-4">'+
					// '<img src='+record[i].imageUrl+' width="100">'+
					'<h1><span class ="date">'+date.toDateString()+'</span></h1>'+
					'<h1>Today I learned: <span class="til">'+record[i].til+'</span></h1>'+
					'<ul>'+
						'<li>Context: <span class="context">'+record[i].context+'</span></li>'+
						'<li>Best Part Of The Day: <span class="bestPartDay">'+record[i].bestPartDay+'</span></li>'+
						'<li>Tags: <span class="tags">'+record[i].tags+'</span></li>'+
						'<li class="hide">ID: <span class="id">'+record[i]._id+'</span></li>'+
						// '<li>Date Added: '+date.toDateString()+'</li>'+
						// '<li>Best Link: '+record[i].pageURL+'</li>'+
					'</ul>'+
					// '<a href="/edit/'+record[i]._id+'">Edit Record</a>'+
					'<button type="button" class="edit-button" id="'+record[i]._id+'" onclick="deleteRecord(event)">Delete Record</button>'+
					'<button type="button" class="edit-button" data-toggle="modal" data-target="#editModal"">Edit Record</button>'+
				'</div>';

				jQuery("#record-holder").append(htmlToAdd);
			}
		}
	})	
}

// get Record JSON from /api/get 
function renderDisplay(){
	// first, make sure the #record-holder is empty
	jQuery('#record-display').empty();

	jQuery.ajax({
		url : '/api/get',
		dataType : 'json',
		success : function(response) {
			// console.log(response);

			var record = response.record;

			renderRune(record);
			// console.log(record);

			var i = record[Math.floor(Math.random()*record.length)];
			// console.log(i.til);
	
			// for(var i=0;i<record.length;i++){
				var date =  new Date(i.dateAdded); // 	turn string into a date object
				var htmlToAdd = '<div class="col-md-12">'+
					'<h1><span class ="displayDate">'+date.toDateString()+'</span></h1>'+
					'<h2><span class="displayTil">'+i.til+'</span></h2>'+
					'<h2>Context: <span class="displayContext">'+i.context+'</span></h2>'+
					'<h2>The Best Part: <span class="displayBestPartDay">'+i.bestPartDay+'</span></h2>'+
					'<h3>Tags: <span class="tags">'+i.tags+'</span></h3>'+
					'<h2 class="hide">ID: <span class="displayId">'+i._id+'</span></h2>'+
					'<input type="button" class="refresh-button" value="TIME TRAVEL" onClick="window.location.reload()">'+
				'</div>';

				jQuery("#record-display").append(htmlToAdd);
			// }
		}
	})	
}


function renderRune(record) {

var r = new Rune({
container: "#canvas",
width: 1000,
height: 1000,
debug: true
});


//random record  
var i = record[Math.floor(Math.random()*record.length)];
var date =  new Date(i.dateAdded); //converts date
console.log("formatted date: " + date);

console.log("typeof date: " + typeof date);
console.log(date);


var allSize = 10;
var allAlign = "center";
var allFont = "Helvetica";
var allWeight = "normal";
var allDecoration = "none";
var yellow = "#FFE100";
var magenta = "#CC1474";
var black = 30;

var purple ="#272E6E";
var meringue = "#FFFFC3";

var mustard = "#FFE165";
var sienna = "#DE4242";
var blood = "#84243B";


var lemon = "#FEFF94";
var plum = "#AD64C5";
var teal = "#83D9EF";
var babyblue = "#BCFFF2";

var magentaBG = "#BA388A";
var purplePen = "#3F1E79";

var randYellow = "#FDD938";
var randGreen = "#31AA4C";
var randBlue = "#6F79B3";
var white = 255;
var randRed = "#EB212E";

//background
r.rect(0, 0, r.width, r.height).fill(randBlue)
	.stroke(false);


var startingX = r.width/2;
var startingY = r.height/2;
// var allSpacing = 1;

//scaling background
// var columns = 10;
// var rows = 80;
// var columns = 12;

// var columns = 8;
var columns = 6;
// var rows = 100;
// var rows = 90;
// var rows = 45;
// var rows = 20;
var rows = 10;
var xDist = r.width/columns; 
var yDist = r.height/rows; 


for(var x = 0; x < r.width; x+=xDist)
  {
    for(var y = 0; y < r.height; y+=yDist)
    {
     // var theDate = r.text(date.toDateString(), x, y)
     var theDate = r.text("THURS OCT 16 2015", x, y)
		.fill(randYellow)
		.stroke(false)
		.fontSize("left")
		.textAlign(allAlign)
		// .fontFamily(allFont)
		.fontFamily("Futura LT Pro")
		.fontWeight(allWeight)
		.textDecoration(allDecoration)
		.rotate(45, r.width/2, r.height/2);
    }
  }

  


var contextCol = 1;
// var contextRow = 26;
var contextRow = 60;
var contextRow = 30;
var contextXDist = r.width/contextCol;
var contextYDist = r.height/contextRow;

for(var x = 0; x < r.width; x+=contextXDist)
  {
    for(var y = 0; y < r.height; y+=contextYDist)
    {

		var theContext = r.text(i.context.toUpperCase(), r.width/2, y)
			.fill(randGreen)
			.stroke(false)
			.fontSize(allSize*2)
			.textAlign("center")
			// .fontFamily(allFont)
			.fontFamily("Futura LT Pro")
			.fontWeight(allWeight)
			.textDecoration(allDecoration)
		  	.letterSpacing(2);
    }
  }

var firstContext = r.text(i.context.toUpperCase(), r.width/2, contextYDist*20)
			.fill(randRed)
			.stroke(false)
			.fontSize(allSize*2)
			.textAlign("center")
			// .fontFamily(allFont)
			.fontFamily("Futura LT Pro")
			.fontWeight(allWeight)
			.textDecoration(allDecoration)
		  	.letterSpacing(2);


// var theContext = r.text(i.context.toUpperCase(), startingX, startingY+tilSize)
// 	.fill(yellow)
// 	.stroke(false)
// 	.fontSize(allSize*2)
// 	.textAlign(allAlign)
// 	.fontFamily(allFont)
// 	.fontWeight(allWeight)
// 	.textDecoration(allDecoration);
//   // .letterSpacing(allSpacing);


// As long as the spirit 
// is clear, the outcome 
// can take any form.

// var tilSize = allSize*7;
var tilSize = allSize*5.5;
var tilString = i.til.toUpperCase();
var tilArray = tilString.split(".");
console.log("the new til array element 0: " + tilArray[0]);

var tilColor = randYellow;
// var tilColor = babyblue;

var tilStroke = randYellow;

var theTIL01 = r.text(tilArray[0], startingX, startingY)
	.fill(tilColor)
	.stroke(tilStroke)
	.fontSize(tilSize)
	.textAlign(allAlign)
	// .fontFamily(allFont)
	.fontFamily("Futura")
	.fontWeight("bold")
	.textDecoration(allDecoration)
	.rotate(45, r.width/2, r.height/2);

var theTIL02 = r.text(tilArray[1], startingX, startingY+tilSize)
	// .fill(tilStroke)
	.fill(tilColor)
	.stroke(tilStroke)
	.fontSize(tilSize)
	.textAlign(allAlign)
	// .fontFamily(allFont)
	.fontFamily("Futura")
	.fontWeight("bold")
	.textDecoration(allDecoration)
	.rotate(45, r.width/2, r.height/2);



console.log("best part: " + i.bestPartDay);
console.log("tags: " + i.tags);
console.log("og date: " + i.dateAdded);


r.draw();
}


// new GET GIPHY JSON FROM API
function renderGiphy(){
	jQuery.ajax({
		url : api + trendingGif + apiKey,
		dataType : 'json',
		success : function(response) {

			var data = response.data; //stores the data object
			var i = data[Math.floor(Math.random()*data.length)]; //randomly picks data object
			// console.log(i.images.original.url); //checks the url property
			$('body').css('background-image', 'url(' + i.images.original.url + ')'); //writes the url to css as bg image
			// $('randbg').css('background', 'url(' + i.images.original.url + ')' + 'no-repeat center center fixed'); //writes the url to css as bg image
		}
	})	
}


jQuery('#editModal').on('show.bs.modal', function (e) {
	// let's get access to what we just clicked on
	var clickedButton = e.relatedTarget;
	// now let's get its parent
	var parent = jQuery(clickedButton).parent();

    // now, let's get the values of the records that we're wanting to edit
    // we do this by targeting specific spans within the parent and pulling out the text
    // var date = $(parent).find('.date').text();
	var til = $(parent).find('.til').text();
	var context = $(parent).find('.context').text();
	var bestPartDay = $(parent).find('.bestPartDay').text();
	var tags = $(parent).find('.tags').text();
	var id = $(parent).find('.id').text();

  	// now let's set the value of the edit fields to those values
 	// jQuery("#edit-date").val(date);
	jQuery("#edit-til").val(til);
	jQuery("#edit-context").val(context);
	jQuery("#edit-bestPartDay").val(bestPartDay);
	jQuery("#edit-tags").val(tags);
	jQuery("#edit-id").val(id);
})


function deleteRecord(event){
	var targetedId = event.target.id;
	console.log('the record to delete is ' + targetedId);
	// now, let's call the delete route with AJAX
	jQuery.ajax({
		url : '/api/delete/'+targetedId,
		dataType : 'json',
		success : function(response) {
			// now, let's re-render the records
			renderRecord();
		}
	})
	event.preventDefault();
}


window.addEventListener('load', init);