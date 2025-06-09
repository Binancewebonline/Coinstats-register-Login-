const redirectLinks = [
  { id: "6ZMCaw6MoUJe19M", url: "https://coinstats.app/p/6ZMCaw6MoUJe19M" },
  { id: "MnWIlxup31WTwie", url: "https://coinstats.app/p/MnWIlxup31WTwie" },
  { id: "AODn1d7anqTWlQG", url: "https://coinstats.app/p/AODn1d7anqTWlQG" },
  { id: "YlaLJkOhuai4nAx", url: "https://coinstats.app/p/YlaLJkOhuai4nAx" },
  { id: "UpnvcxwHNgeZRld", url: "https://coinstats.app/p/UpnvcxwHNgeZRld" },
];

function register() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;

  let users = JSON.parse(localStorage.getItem("users") || "[]");

  if (users.find(u => u.username === username)) {
    alert("Username already exists.");
    return;
  }

  if (users.length >= redirectLinks.length) {
    alert("Registration limit reached.");
    return;
  }

  const assignedLink = redirectLinks[users.length];

  users.push({ username, password, link: assignedLink.url });
  localStorage.setItem("users", JSON.stringify(users));

  alert(`Verify your account using the link:\n${assignedLink.url}`);
  window.location.href = assignedLink.url;
}

function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    alert("Login successful! Redirecting...");
    window.location.href = user.link;
  } else {
    alert("Invalid login.");
  }
}
