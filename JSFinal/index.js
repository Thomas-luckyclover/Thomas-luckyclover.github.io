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
    
    // 3. Thêm lớp CSS để hiển thị ảnh đúng cách
    document.getElementById("image").classList.add("active");
}

function unDo(){
    /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    
    // Debug: kiểm tra sự kiện có được kích hoạt không
    console.log("Event triggered: unDo");
    
    // 1. Khôi phục background image về trạng thái ban đầu (rỗng)
    document.getElementById("image").style.backgroundImage = "url('')";
    
    // 2. Khôi phục text về trạng thái ban đầu
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    
    // 3. Xóa lớp CSS active
    document.getElementById("image").classList.remove("active");
}