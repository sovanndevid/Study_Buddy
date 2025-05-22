function toggleChatbot() {
    document.getElementById("chatbotBox").classList.toggle("active");
  }
  
  async function handleChat() {
    const input = document.getElementById("chatInput");
    const msg = input.value.trim();
    if (!msg) return;
  
    const messages = document.getElementById("chatbotMessages");
    messages.innerHTML += `<p class="user">${msg}</p>`;
    input.value = "";
  
    const reply = await askAI(msg);
    messages.innerHTML += `<p class="bot">${reply}</p>`;
    messages.scrollTop = messages.scrollHeight;
  }
  
  async function askAI(message) {
    try {
      const response = await fetch("https://studybuddy-backend-git-main-sovanndevidnong-admins-projects.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });
      const data = await response.json();
      return data.reply || "Sorry, I couldn't respond.";
    } catch (err) {
      return "Error contacting AI.";
    }
  }
  