let video=document.getElementById("video");
let button=document.querySelector('.btn');
async function PicInPic(){
    try{
        await video.requestPictureInPicture();
    }
    catch(error){
        console.log(error);
    }
}

async function ChooseScreen(){
    try{
        let captureStream = await navigator.mediaDevices.getDisplayMedia();
        if(captureStream){
            video.srcObject=captureStream;
        }else{
            video.srcObject="/picture_in_picture/infinityScroll.mp4";
        }
        video.onloadedmetadata=()=>{
            video.play();
        }
    }catch(error){
        console.log(error)
    }
}