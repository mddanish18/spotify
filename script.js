

let songIndex=0;
let audioElement=new Audio('audio1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let SongItem=Array.from(document.getElementsByClassName('SongItem'));

//audioElement.play();
let songs=[
    {songNAme:"salam_e_ishq",flePath:"song/1.mp3",coverPath:"cover/cover1.jpg"},
    {songNAme:"let_ me_down",flePath:"song/2.mp3",coverPath:"cover/cover2.jpg"},
    {songNAme:"salam_e_ishq",flePath:"song/3.mp3",coverPath:"cover/cover3.jpg"},
    {songNAme:"salam_e_ishq",flePath:"song/4.mp3",coverPath:"cover/cover4.jpg"},
    {songNAme:"salam_e_ishq",flePath:"song/5.mp3",coverPath:"cover/cover5.jpg"},
    {songNAme:"salam_e_ishq",flePath:"song/6.mp3",coverPath:"cover/cover6.jpg"},
    {songNAme:"salam_e_ishq",flePath:"song/7.mp3",coverPath:"cover/cover7.jpg"},
    {songNAme:"salam_e_ishq",flePath:"song/8.mp3",coverPath:"cover/cover8.jpg"},
    {songNAme:"salam_e_ishq",flePath:"song/9.mp3",coverPath:"cover/cover9.jpg"},
    {songNAme:"salam_e_ishq",flePath:"song/10.mp3",coverPath:"cover/cover10.jpg"}
]
SongItem.forEach((element, i)=>{
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songNAme;
})



//manage play pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100); 
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
