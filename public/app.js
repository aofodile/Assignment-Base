const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'

const zips = [];

fetch(endpoint)
	.then(blob => blob.json())
 	.then(data => zips.push(...data));

function findMatches(wordToMatch, zips) {
	return zips.filter(restr => {
    	const regex = new RegExp(wordToMatch, 'gi');
    	return restr.zip.match(regex)
  	});
}

function displayMatches() {
	// console.log(this.value)
  	const matchArray = findMatches(this.value, zips);
  	const html = matchArray.map(restr => {
  		return `<li><span class="population">${restr.name}</span><span class="name">${restr.zip}</span></li>`;
  	}).join('')
  	suggestions.innerHTML = html;
  	
}


const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
