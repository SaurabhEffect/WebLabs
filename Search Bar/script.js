const searchBarContainer = document.getElementById("search-bar-container");
const magnifierIcon = document.getElementById("magnifier-icon");
const searchInput = document.getElementById("search-input");
const micIcon = document.getElementById("mic-icon");
const clearIcon = document.getElementById("clear-icon");
const fruitList = document.getElementById("fruit-list");
const noResults = document.getElementById("no-results");

let isExpanded = false;

magnifierIcon.addEventListener("click", (e) => {
  if (!isExpanded) {
    e.stopPropagation();
    expandSearchBar();
  } else if (searchInput.value) {
    console.log(`Searching for: ${searchInput.value}`);
  }
});

document.addEventListener("click", (e) => {
  if (isExpanded && !searchBarContainer.contains(e.target)) {
    collapseSearchBar();
  }
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value;
  handleClearIcon(query);
  filterFruitList(query);
});

// 3. Clear search input
clearIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  searchInput.value = "";
  handleClearIcon("");
  filterFruitList("");
  searchInput.focus();
});

micIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  startVoiceRecognition();
});

function expandSearchBar() {
  isExpanded = true;
  searchBarContainer.classList.remove("w-16", "cursor-pointer");
  searchBarContainer.classList.add("w-full");
  searchInput.classList.remove("opacity-0");
  micIcon.classList.remove("opacity-0");
  setTimeout(() => searchInput.focus(), 300);
}

function collapseSearchBar() {
  isExpanded = false;
  searchBarContainer.classList.add("w-16", "cursor-pointer");
  searchBarContainer.classList.remove("w-full");
  searchInput.classList.add("opacity-0");
  micIcon.classList.add("opacity-0");
  clearIcon.classList.add("opacity-0", "scale-0");
  searchInput.value = "";
  filterFruitList("");
}

function handleClearIcon(query) {
  if (query.length > 0) {
    clearIcon.classList.remove("opacity-0", "scale-0");
  } else {
    clearIcon.classList.add("opacity-0", "scale-0");
  }
}

function filterFruitList(query) {
  const listItems = fruitList.getElementsByTagName("li");
  let itemsFound = false;
  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];
    if (item.textContent.toLowerCase().includes(query.toLowerCase())) {
      item.style.display = "";
      itemsFound = true;
    } else {
      item.style.display = "none";
    }
  }
  noResults.style.display = itemsFound ? "none" : "block";
}

// Voice Recognition Functionality
function startVoiceRecognition() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Sorry, your browser doesn't support voice recognition.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  micIcon.classList.add("animate-pulse");

  recognition.start();

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    searchInput.value = speechResult;
    searchInput.dispatchEvent(new Event("input"));
  };

  recognition.onspeechend = () => {
    recognition.stop();
    micIcon.classList.remove("animate-pulse");
  };

  recognition.onerror = (event) => {
    alert(`Error occurred in recognition: ${event.error}`);
    micIcon.classList.remove("animate-pulse");
  };
}
