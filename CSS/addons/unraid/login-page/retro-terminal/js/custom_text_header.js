
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ____  ____  ____   ______           ________  ______  ______
   / __ )/ __ \\/__ \\ / ____/           / ____/ / / / __ )/ ____/\
  / __  / / / / /_/ / / ___   ______   / /   / / / / __  / __/   \
 / /_/ / /_/ / _, _/ / _/  /  /_____/  / /___/ /_/ / /_/ / /____ \
/_____/\\____/_/ |_|\\____/            \\____/\\____/_____/____/ \
                                                        </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
