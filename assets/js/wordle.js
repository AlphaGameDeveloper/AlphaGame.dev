// Copyright (c) 2025 Damien Boisvert (AlphaGameDeveloper)
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

function getWordleSolution() {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const dateStr = `${yyyy}-${mm}-${dd}`;

    const proxy = "https://corsproxy.io/?";
    const target = `https://www.nytimes.com/svc/wordle/v2/${dateStr}.json`;
    const url = proxy + encodeURIComponent(target);

    fetch(url)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Failed to fetch Wordle data");
            }
            return response.json();
        })
        .then(function (data) {
            const word = data.solution.toUpperCase();
            document.getElementById("solution").innerText = word;
        })
        .catch(function (err) {
            document.getElementById("solution").innerHTML =
                "FAILED! <i>(No that's not the solution, just an error message lol)</i>";
            console.error(err);
        });
}

