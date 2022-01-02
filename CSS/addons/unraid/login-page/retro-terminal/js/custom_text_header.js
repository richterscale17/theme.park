
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ____  ____  ____  ______            ________  ______  ______&#13
   / __ )/ __ \/ __ \/ ____/           / ____/ / / / __ )/ ____/&#13
  / __  / / / / /_/ / / __   ______   / /   / / / / __  / __/   &#13
 / /_/ / /_/ / _, _/ /_/ /  /_____/  / /___/ /_/ / /_/ / /___   &#13
/_____/\____/_/ |_|\____/            \____/\____/_____/_____/    &#13
                                                        </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
