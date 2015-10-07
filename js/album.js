// Residential
var images = {
	'files' : [
		{'source' : "033.JPG"},
		{'source' : "230.JPG"},
		{'source' : "234.JPG"},
		{'source' : "236.JPG"},
		{'source' : "238.JPG"},
		{'source' : "240.JPG"},
		{'source' : "245.JPG"},
		{'source' : "259.JPG"},
		{'source' : "261.JPG"},
		{'source' : "262.JPG"},
		{'source' : "DSCF0244.JPG"},
		{'source' : "DSCF0254.JPG"},
		{'source' : "DSCF0280-1.JPG"},
		{'source' : "DSCF0280.JPG"},
		{'source' : "DSCF0285.JPG"},
		{'source' : "DSCF0302.JPG"},
		{'source' : "DSCF0317.JPG"},
		{'source' : "DSCF0325.JPG"},
		{'source' : "DSCF0333.JPG"},
		{'source' : "DSCF0338.JPG"},
		{'source' : "DSC_0031.JPG"},
		{'source' : "DSC_0043.JPG"},
		{'source' : "DSC_0045.JPG"},
		{'source' : "DSC_0151.JPG"},
		{'source' : "HT logo picture.JPG"},
		{'source' : "LED House.JPG"},
		{'source' : "Sandy B Web Ready.jpg"},
		{'source' : "September Wilson House.jpg"}
	]
}
// Commercial
var images_corp = {
	'files' : [
		{'source' : "033.JPG"},
		{'source' : "048.JPG"},
		{'source' : "DSC00181.JPG"},
		{'source' : "DSCF0261.JPG"},
		{'source' : "DSCF0271.JPG"},
		{'source' : "DSC_0013.JPG"},
		{'source' : "Eldercare photo.jpg"},
		{'source' : "Stygar best pic.jpg"},
		{'source' : "fredweberlogo.jpg"},
		{'source' : "fredwebertruck.jpg"}
	]
}

$(document).ready(function(){
    $("#album-list").append("<div class='item active'><img src='image/res.JPG' alt='' /></div>");

	function buildAlbum(){
		for(image in images.files) {
			$("#album-list").append("<div class='item'><img src='image/album/" + images.files[image].source + "' alt='' /></div>");
		}
	}
	buildAlbum();

    $("#album-list-corp").append("<div class='item active'><img src='image/com.JPG' alt='' /></div>");

	function buildAlbumCorp(){
		for(image in images_corp.files) {
			$("#album-list-corp").append("<div class='item'><img src='image/album_corp/" + images_corp.files[image].source + "' alt='' /></div>");
		}
	}
	buildAlbumCorp();

	//Labels could be added later. Inside item div
	//    <div class="carousel-caption">
	//       <h3>First slide label</h3>
	//       <p>First slide Caption.</p>
	//    </div>
});
