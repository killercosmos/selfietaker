var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition;
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){

console.log(event);

var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;
console.log(Content);

if(Content == "take my selfie")
{
    console.log("taking selfie --");
    speak();
}
}


function speak() {
    var synth = window.speechSynthesis;
    var speech_data = "Taking your selfie in 5 second";
    var utterThis = new SpeechSynthesisUtterance(speech_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

camera = document.getElementById("camera");

Webcam.set(
{
    width: 360,
    height:250,
    image_format: "jpeg",
    image_quality: 90

}
);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'selfie_image' src = "+ data_uri+" >"
    });

}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").scr;
    link.href = image;
    link.click();
}