
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
    ____                         ______      __       
   / __ )____  _________ _      / ____/_  __/ /_  ___ 
  / __  / __ \/ ___/ __ `/_____/ /   / / / / __ \/ _ \
 / /_/ / /_/ / /  / /_/ /_____/ /___/ /_/ / /_/ /  __/
/_____/\____/_/   \__, /      \____/\__,_/_.___/\___/,&lt; 
                 /____/                               
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
