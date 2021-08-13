var im=[];
var div=document.querySelector("div");
var button=document.querySelector("button");
var body=document.querySelector("body");
var aud;
var komar;
button.onclick=function(){
                body.removeChild(div);
                setTimeout(spawn,3000);
}
function spawn() {

                for(var i=0;i<6;i++)
                {
                                var eye = document.createElement("img");


                                im.push(eye);
                                eye.src="eye.gif";
                                body.appendChild(eye);

                }
                aud=document.createElement("audio");
                komar=document.createElement("source");
                aud.autoplay="autoplay";
                komar.src="zvuk-komar.mp3";
                komar.type="audio/mp3";
                aud.appendChild(komar);
                body.appendChild(aud);
                setTimeout(rickroll,3000);
}
function rickroll() {

                for(var i=0;i<im.lenght;i++)
                {
                                body.removeChild(im[i]);
                }
                aud.removeChild(komar);
                body.removeChild(aud);
                var a=document.createElement("a");
                a.href="jasoned.mp4";
                var para = document.createElement("button");
                para.textContent="Click me!";
                a.appendChild(para);
                body.appendChild(a);
                var vid=document.createElement("video");
                var rick=document.createElement("source");

                vid.autoplay="autoplay";
                rick.src="rickroll.mp4";
                rick.type="video/mp4";
                vid.appendChild(rick);
                body.appendChild(vid);


}