
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ____  ____  ____  ______        \  ______     ______ ______
   / __ )/ __ \\/ __ \\/ ____/       \  /  __/ / / / __ ) /____/
  / __  / / / / /_/ / / __   ______   / /   / / / / __  / __/   
 / /_/ / /_/ / _, _/ /_/  / /_____/  / /___/ /_/ / /_/ / /___   
/_____/\\____/_/ |_|\\___/             \\____/\\____/_____/_____/   
                                                        </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
