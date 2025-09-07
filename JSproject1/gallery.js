function upDate(previewPic){
    /* In this function you should 
    1) change the url for the background image of the div with the id = "image" 
    to the source file of the preview image
    
    2) Change the text  of the div with the id = "image" 
    to the alt text of the preview image 
    */
    
    // Debug: kiểm tra sự kiện có được kích hoạt không
    console.log("Event triggered: upDate");
    
    // Debug: in ra thông tin về previewPic
    console.log("Alt text: " + previewPic.alt);
    console.log("Image source: " + previewPic.src);
    
    // 1. Thay đổi background image
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    
    // 2. Thay đổi text thành alt text của ảnh
    document.getElementById("image").innerHTML = previewPic.alt;
}