function addMessage(text, type) {
  const chat = document.getElementById("chat");

  const message = document.createElement("div");
  message.className = "message " + type;
  message.innerText = text;

  chat.appendChild(message);
  chat.scrollTop = chat.scrollHeight;
}

function botReply(text) {
  setTimeout(() => {
    addMessage(text, "bot");
  }, 400);
}

function quickReply(type) {

  if (type === "price") {
    addMessage("What are your prices?", "user");

    botReply(
      "Our haircut starts from ₹150. For other services, please contact us."
    );
  }

  else if (type === "timing") {
    addMessage("What are your opening hours?", "user");

    botReply(
      "We are open from 10:00 AM to 8:00 PM, Monday to Sunday."
    );
  }

  else if (type === "booking") {
    addMessage("I want to book an appointment.", "user");

    botReply(
      "Sure! Please send your name and preferred appointment time."
    );
  }

  else if (type === "contact") {
    addMessage("How can I contact you?", "user");

    botReply(
      "You can contact us at +91 XXXXX XXXXX."
    );
  }
}

function sendMessage() {

  const input = document.getElementById("userInput");
  const text = input.value.trim();

  if (text === "") return;

  addMessage(text, "user");
  input.value = "";

  const lower = text.toLowerCase();

  if (
    lower.includes("price") ||
    lower.includes("cost") ||
    lower.includes("rate") ||
    lower.includes("kitne") ||
    lower.includes("paisa")
  ) {

    botReply(
      "Our haircut starts from ₹150. Please contact us for other service prices."
    );

  }

  else if (
    lower.includes("time") ||
    lower.includes("timing") ||
    lower.includes("open") ||
    lower.includes("close") ||
    lower.includes("kab")
  ) {

    botReply(
      "We are open from 10:00 AM to 8:00 PM, Monday to Sunday."
    );

  }

  else if (
    lower.includes("book") ||
    lower.includes("appointment") ||
    lower.includes("booking")
  ) {

    botReply(
      "Sure! Please send your name and preferred appointment time."
    );

  }

  else if (
    lower.includes("contact") ||
    lower.includes("phone") ||
    lower.includes("number")
  ) {

    botReply(
      "You can contact us at +91 XXXXX XXXXX."
    );

  }

  else {

    botReply(
      "Thanks for your message! Please tell us what service you are interested in."
    );

  }
    }
