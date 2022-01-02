
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ____  ____  ____  ______          ______     _____   _____
   / __ )/ __ \\/ __ \\/ ____/      \   \ /___/ / / /  __ ) /____/
  / __  / / / / /_/ / / _   ______   / /   / / / / __  / __/   
 / /_/ / /_/ / _, _/ /_/ / /_____/  / /___/ /_/ / /_/ / /___   
/_____/\\____/_/ |_|\\____/           \\____/\\____/_____/_____/   
                                                        </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
