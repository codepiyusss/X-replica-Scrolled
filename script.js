document.addEventListener("DOMContentLoaded", () => {
    const tweetInput = document.getElementById("tweetInput");
    const tweetButton = document.getElementById("tweetButton");
    const charCount = document.getElementById("charCount");
    const timeline = document.getElementById("timeline");

    // Update character count
    tweetInput.addEventListener("input", () => {
        const remaining = 280 - tweetInput.value.length;
        charCount.textContent = remaining;
        tweetButton.disabled = remaining < 0 || tweetInput.value.trim() === "";
    });

    // Post tweet
    tweetButton.addEventListener("click", () => {
        if (tweetInput.value.trim() === "") return;

        const tweet = document.createElement("div");
        tweet.className = "tweet";
        tweet.innerHTML = `
            <div class="tweet-author">
                <span class="tweet-author-name">Scrolled User</span>
                <span class="tweet-author-handle">@scrolleduser</span>
            </div>
            <p class="tweet-text">${tweetInput.value}</p>
            <span class="tweet-time">${new Date().toLocaleString()}</span>
        `;
        timeline.insertBefore(tweet, timeline.firstChild);
        tweetInput.value = "";
        charCount.textContent = "280";
        tweetButton.disabled = true;
    });
});