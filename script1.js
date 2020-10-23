/* Christian Downer 10-2020
Entertainment, Sports, and Technology News
News API Capital One */


//created variables out of the components used on the webpage
const search = document.querySelector('.search')
const input = document.querySelector('.input');
const articleList = document.querySelector('.articleList');

let currentCategory = "";



//creates an event for hitting the search button
search.addEventListener('submit', find);

//event for finding articles based on the search
function find(e){

	techArticleList.innerHTML = '';

	e.preventDefault(); //stops refreshing after pressing search that caused code to not work

	let searchInput = input.value;

	var url = 'http://newsapi.org/v2/everything?' +
          'q=' + searchInput + '&' + 'category=' + category + '&' +
          'apiKey=' + apiKey;

    console.log(url); //prints the url created for debugging purposes

	var req = new Request(url);

	fetch(url).then((response)=>{
		return response.json()
	}).then((data)=>{
		console.log(data) //prints the JSON returned for debugging purposes
		data.articles.forEach(article =>{
        	let li = document.createElement('li');
        	let a = document.createElement('a');
        	a.setAttribute('href', article.url);
        	a.setAttribute('target', '_blank');
        	a.textContent = article.title;
        	li.appendChild(a);
        	techArticleList.appendChild(li);
    	})

	})
}

function techNews(){

	// clear the webpage before loading tech article list
	techArticleList.innerHTML = '';
	techImgs.innerHTML = '';
	techInfo.innerHTML = '';
	techDesc.innerHTML = '';

	entArticleList.innerHTML = '';
	entImgs.innerHTML = '';
	entInfo.innerHTML = '';
	entDesc.innerHTML = '';

	sportArticleList.innerHTML = '';
	sportImgs.innerHTML = '';
	sportInfo.innerHTML = '';
	sportDesc.innerHTML = '';

	document.getElementById("techTitle").style.display = "block"; //display Tech articles header
	document.getElementById("sportTitle").style.display = "none"; //turns off Sports articles header
	document.getElementById("entTitle").style.display = "none"; //turns off Entertainment articles header

	const category = 'technology';

	var url = 'http://newsapi.org/v2/top-headlines?' +
          'language=en&' + 'category=' + category +  
          '&apiKey=' + apiKey;	

    console.log(url); //prints the url created for debugging purposes

	var req = new Request(url);

	let techArticles = [];

	

	fetch(url).then((response)=>{ //gets the information from the NewsAPI url
		return response.json()
	}).then((data)=>{
		console.log(data); //prints the JSON returned for debugging purposes

		techArticles = data.articles; 

		console.log(techArticles); //prints the articles array for debugging purposes

		data.articles.forEach(article =>{ //creates a list of article titles and makes them clickable links
           	let img = document.createElement('img'); //creates a list of the images for each article
			img.setAttribute('src', article.urlToImage);
			img.setAttribute('width', '50%');
			img.setAttribute('height', '10%');
        	techArticleList.appendChild(img);

           	let li = document.createElement('li');
        	let a = document.createElement('a');
        	a.setAttribute('href', article.url);
        	a.setAttribute('target', '_blank'); //opens the links in  a different tab
        	a.textContent = article.title;
        	li.appendChild(a);
        	techArticleList.appendChild(li);


        	//gives extra informationa about the articles
        	let p = document.createElement('p');
        	p.textContent = 'Source: ' + article.source.name + ' Published on: ' + article.publishedAt;
        	techArticleList.appendChild(p);

        	let desc = document.createElement('p');
        	desc.textContent = article.description;
        	techArticleList.appendChild(desc); 

        	let hr = document.createElement('hr');
        	techArticleList.appendChild(hr);

    	})

    })


}


function sportNews(){

	// clear the webpage before loading tech article list
	techArticleList.innerHTML = '';
	techImgs.innerHTML = '';
	techInfo.innerHTML = '';
	techDesc.innerHTML = '';

	entArticleList.innerHTML = '';
	entImgs.innerHTML = '';
	entInfo.innerHTML = '';
	entDesc.innerHTML = '';

	sportArticleList.innerHTML = '';
	sportImgs.innerHTML = '';
	sportInfo.innerHTML = '';
	sportDesc.innerHTML = '';

	document.getElementById("sportTitle").style.display = "block"; //display Sport articles header
	document.getElementById("techTitle").style.display = "none"; //turns off Tech articles header
	document.getElementById("entTitle").style.display = "none"; //turns off Entertainment articles header


	const category = 'sports';

	var url = 'http://newsapi.org/v2/top-headlines?' +
          'language=en&' + 'category=' + category +  
          '&apiKey=' + apiKey;	

    console.log(url); //prints the url created for debugging purposes

	var req = new Request(url);

	let sportArticles = [];

	

	fetch(url).then((response)=>{ //gets the information from the NewsAPI url
		return response.json()
	}).then((data)=>{
		console.log(data); //prints the JSON returned for debugging purposes

		aportArticles = data.articles; 

		console.log(sportArticles); //prints the articles array for debugging purposes

		data.articles.forEach(article =>{ //creates a list of article titles and makes them clickable links
        	let li = document.createElement('li');
        	let a = document.createElement('a');
        	a.setAttribute('href', article.url);
        	a.setAttribute('target', '_blank'); //opens the links in  a different tab
        	a.textContent = article.title;
        	li.appendChild(a);
        	sportArticleList.appendChild(li);

           	let img = document.createElement('img'); //creates a list of the images for each article
			img.setAttribute('src', article.urlToImage);
			img.setAttribute('width', '50%');
			img.setAttribute('height', '10%');
        	sportImgs.appendChild(img);


        	//gives extra informationa about the articles
        	let p = document.createElement('p');
        	p.textContent = 'Source: ' + article.source.name + ' Published on: ' + article.publishedAt;
        	sportInfo.appendChild(p);

        	let desc = document.createElement('p')
        	desc.textInfo = article.description;
        	sportDesc.appendChild(desc);

    	})

    })


}


function entNews(){

	// clear the webpage before loading tech article list
	techArticleList.innerHTML = '';
	techImgs.innerHTML = '';
	techInfo.innerHTML = '';
	techDesc.innerHTML = '';

	entArticleList.innerHTML = '';
	entImgs.innerHTML = '';
	entInfo.innerHTML = '';
	entDesc.innerHTML = '';

	sportArticleList.innerHTML = '';
	sportImgs.innerHTML = '';
	sportInfo.innerHTML = '';
	sportDesc.innerHTML = '';

document.getElementById("entTitle").style.display = "block"; //display Entertainment articles header
	document.getElementById("sportTitle").style.display = "none"; //turns off Sports articles header
	document.getElementById("techTitle").style.display = "none"; //turns off Tech articles header


	const category = 'entertainment';

	var url = 'http://newsapi.org/v2/top-headlines?' +
          'language=en&' + 'category=' + category +  
          '&apiKey=' + apiKey;	

    console.log(url); //prints the url created for debugging purposes

	var req = new Request(url);

	let entArticles = [];

	

	fetch(url).then((response)=>{ //gets the information from the NewsAPI url
		return response.json()
	}).then((data)=>{
		console.log(data); //prints the JSON returned for debugging purposes

		entArticles = data.articles; 

		console.log(entArticles); //prints the articles array for debugging purposes

		data.articles.forEach(article =>{ //creates a list of article titles and makes them clickable links
        	let li = document.createElement('li');
        	let a = document.createElement('a');
        	a.setAttribute('href', article.url);
        	a.setAttribute('target', '_blank'); //opens the links in  a different tab
        	a.textContent = article.title;
        	li.appendChild(a);
        	entArticleList.appendChild(li);

           	let img = document.createElement('img'); //creates a list of the images for each article
			img.setAttribute('src', article.urlToImage);
			img.setAttribute('width', '50%');
			img.setAttribute('height', '10%');
        	entImgs.appendChild(img);


        	//gives extra informationa about the articles
        	let p = document.createElement('p');
        	p.textContent = 'Source: ' + article.source.name + ' Published on: ' + article.publishedAt;
        	entInfo.appendChild(p);

        	let desc = document.createElement('p')
        	desc.textInfo = article.description;
        	entDesc.appendChild(desc);

    	})

    })


}