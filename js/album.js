// Residential
var images = {
    'files' : [

        {'source' : "230.JPG"},
        
        {'source' : "240.JPG"},
        {'source' : "259.JPG"},
        {'source' : "262.JPG"},
        
        {'source' : "261.JPG"},
        {'source' : "DSCF0302.JPG"},

        {'source' : "IMG_0315.JPG"},
        {'source' : "IMG_0321.JPG"},
        {'source' : "IMG_0326.JPG"},
        {'source' : "IMG_0328.JPG"},
        {'source' : "IMG_0324.JPG"},
        {'source' : "IMG_0331.JPG"},
        

        
        {'source' : "236.JPG"},
        {'source' : "238.JPG"},
        {'source' : "234.JPG"},
        {'source' : "245.JPG"},
        

        {'source' : "20181117_004939102_iOS.jpg"},
        {'source' : "20191123_013044141_iOS.png"},
        {'source' : "20191123_010125440_iOS.png"},

        {'source' : "DSCF0244.JPG"},
        {'source' : "DSCF0254.JPG"},
        {'source' : "DSCF0280.JPG"},
        {'source' : "DSCF0285.JPG"},
        
        {'source' : "DSCF0317.JPG"},
        {'source' : "DSCF0325.JPG"},
        {'source' : "DSCF0333.JPG"},
        {'source' : "DSCF0338.JPG"},
        {'source' : "DSC_0031.JPG"},
        {'source' : "DSC_0043.JPG"},
        {'source' : "DSC_0045.JPG"},
        {'source' : "HT logo picture.JPG"},
        {'source' : "LED House.JPG"},
        {'source' : "Sandy B Web Ready.jpg"},
        {'source' : "September Wilson House.jpg"},
        {'source' : "tree_002.JPG"},
        {'source' : "033.JPG"}
    ]
}
// Commercial
var images_corp = {
    'files' : [
        {'source' : "048.JPG"},
        {'source' : "DSC00181.JPG"},
        {'source' : "DSCF0261.JPG"},
        {'source' : "DSCF0271.JPG"},
        {'source' : "DSC_0013.JPG"},
        {'source' : "Eldercare photo.jpg"},
        {'source' : "Stygar best pic.jpg"},
        {'source' : "fredweberlogo.jpg"},
        {'source' : "fredwebertruck.jpg"},
        {'source' : "033.JPG"}
    ]
}

$(document).ready(function(){
    function buildAlbum(){
        var first_class = 'active';
        for(image in images.files) {
            $("#album-list").append("<div class='item " + first_class + "'><a target='_ht_photo' href='image/album/large_" + images.files[image].source + "'><img src='image/album/" + images.files[image].source + "' alt='' /></a></div>");
            first_class = ' ';
        }
    }
    buildAlbum();

    function buildAlbumCorp(){
        var first_class = 'active';
        for(image in images_corp.files) {
            $("#album-list-corp").append("<div class='item " + first_class + "'><a target='_ht_photo' href='image/album_corp/large_" + images_corp.files[image].source + "'><img src='image/album_corp/" + images_corp.files[image].source + "' alt='' /></a></div>");
            first_class = ' ';
        }
    }
    buildAlbumCorp();

    //Labels could be added later. Inside item div
    //    <div class="carousel-caption">
    //       <h3>First slide label</h3>
    //       <p>First slide Caption.</p>
    //    </div>
});
