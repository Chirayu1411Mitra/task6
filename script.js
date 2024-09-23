const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchHistory = document.getElementById('searchHistory');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

document.addEventListener('DOMContentLoaded', loadSearchHistory);

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    addSearchTerm(searchTerm);
    searchInput.value = ''; 
  }
});

clearHistoryBtn.addEventListener('click', clearSearchHistory);

function loadSearchHistory() {
  const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  history.forEach(term => {
    displaySearchTerm(term);
  });
}

function addSearchTerm(term) {
  let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
  history.push(term);
  localStorage.setItem('searchHistory', JSON.stringify(history));
  displaySearchTerm(term);
}

function displaySearchTerm(term) {
  const li = document.createElement('li');
  li.textContent = term;
  searchHistory.appendChild(li);
}

function clearSearchHistory() {
  localStorage.removeItem('searchHistory');
  searchHistory.innerHTML = '';
}
