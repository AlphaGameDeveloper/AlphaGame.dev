/* 
    MIT License

    Copyright (c) 2024 Damien Boisvert (AlphaGameDeveloper)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/
var pattern = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
inputSequenceIndex = 0;
document.addEventListener("keydown", function (event) {
    if (0 > pattern.indexOf(event.key) || event.key !== pattern[inputSequenceIndex]) {
      inputSequenceIndex = 0;
      return;
    }
    if (inputSequenceIndex++, pattern.length === inputSequenceIndex) {
      inputSequenceIndex = 0;
      let video = document.createElement("video");
      video.setAttribute("autoplay", true);
      let videoSource = document.createElement("source");
      videoSource.setAttribute("src", "https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4");
      videoSource.setAttribute("type", "video/mp4");
      video.appendChild(videoSource);
      document.body.appendChild(video);
      video.style.position = "fixed";
      video.style.top = "50%";
      video.style.left = "50%";
      video.style.transform = "translate(-50%, -50%)";
      video.style.width = "100%";
    }
}, false);
console.log("KonamiRickroll Loaded")
