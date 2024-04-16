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
var p = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"], c = 0, k = function (e) {
    if (0 > p.indexOf(e.key) || e.key !== p[c]) {
      c = 0;
      return;
    }
    if (c++, p.length === c) {
      c = 0;
      let v = document.createElement("video");
      v.setAttribute("autoplay", true);
      let s = document.createElement("source");
      s.setAttribute("src", "https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4");
      s.setAttribute("type", "video/mp4");
      v.appendChild(s);
      document.body.appendChild(v);
      v.style.position = "fixed";
      v.style.top = "50%";
      v.style.left = "50%";
      v.style.transform = "translate(-50%, -50%)";
      v.style.width = "100%";
    }
  };
  document.addEventListener("keydown", k, false);
  