const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json'

const zips = [];
// let response = await fetch(endpoint)
// let data = await zips.push(data)
fetch(endpoint)
 .then(blob => blob.json())
 .then(data => zips.push(data));

function findMatches(wordToMatch, zips) {
	return zips.filter(restr => {
    	const regex = new RegExp(wordToMatch, 'gi');
    	return restr.zip.match(regex)
  	});
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  	const matchArray = findMatches(this.value, zips);
  	const html = matchArray.map(restr => {
    	const regex = new RegExp(this.value, 'gi');
    	const zipNo = restr.zip.replace(regex, `<span class="hl">${this.value}</span>`);
    	return `
    		<li>
    	    	<span class="name">${zipNo}</span>
      		</li>
    	`;
  	}).join('');
  	suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
