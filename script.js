document.getElementById("linkForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const videoUrl = document.getElementById("videoUrl").value.trim();
  if (!videoUrl.startsWith("http")) {
    alert("Please enter a valid http/https URL");
    return;
  }

  const encodedUrl = encodeURIComponent(videoUrl);
  const intentLink = `intent://${videoUrl.replace(/^https?:\/\//, "")}#Intent;package=com.adam.players;scheme=http;end;`;

  const resultBox = document.getElementById("result");
  const output = document.getElementById("generatedLink");
  output.value = intentLink;
  resultBox.classList.remove("hidden");
});

function copyLink() {
  const output = document.getElementById("generatedLink");
  output.select();
  document.execCommand("copy");
  alert("Link copied to clipboard!");
}
