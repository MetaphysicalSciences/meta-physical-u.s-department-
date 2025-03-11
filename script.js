function revealInfo() {
    var secretInfo = document.getElementById("secret-info");
    secretInfo.style.display = "block";
}

function showResearchData() {
    var researchArchive = document.getElementById("research-archive");
    researchArchive.style.display = "block";
}

function verifyPassword() {
    var password = document.getElementById("passwordInput").value;
    var correctPassword = "METAPHYSICS";
    var errorMessage = document.getElementById("errorMessage");
    
    if (password === correctPassword) {
        // Simulate downloading the government file
        var hiddenFile = new Blob([`U.S. Department of Metaphysical Sciences\n\nClassified Report: Project ArchIve\n\nProject Overview:\n\nResearch into the metaphysical properties of the multiverse has been ongoing since the 1990s. These operations involve the manipulation of quantum fields to generate stable rifts between dimensions. ...`], { type: "text/plain" });
        var link = document.createElement("a");
        link.href = URL.createObjectURL(hiddenFile);
        link.download = "classified_report.txt";
        link.click();
        
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }
}

document.getElementById('passwordButton').addEventListener('click', function() {
    document.getElementById('passwordSection').style.display = 'block';
});
