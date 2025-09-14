const slider = document.querySelectorAll(".slide");
var counter = 0;
// makes the images slides automatically after 5 seconds
setInterval(()=>{
    counter = (counter + 1) % slider.length;
    slideImage();
},5000);
// This provides the 100% margin from the left side
slider.forEach(
    (slide,index) =>{
        slide.style.left = `${index * 100}%`
    }
)
// Left sliding function
const leftSlide =  () => {
    if (counter > 0){
        counter --;
        slideImage()
        console.log("Left sliding button is clicked")
    }
    else{
        console.log("This is the first image of this slider")
    }
}
// Right sliding function
const rightSlide = () =>{
    if (counter < (slider.length - 1)){
        counter++;
        slideImage()
        console.log("Right sliding button is clicked")
    }
    else{
        console.log("This is the last image of this sliding page.")
    }
}
// Main function which helps to slide
const slideImage = ()=>{
    slider.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter * 100}%)`
        }
    )
}