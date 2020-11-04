/* Christian Downer 10-2020
Entertainment, Sports, and Technology News
News API Capital One */


//created variables out of the components used on the webpage
const search = document.querySelector('.search')
const input = document.querySelector('.input');
const articleList = document.querySelector('.articleList');

let country = document.getElementById('country').value;
console.log(country);

let currentCategory = "";

let searchNoti = 0;

function clearScreen(){

	techArticleList.innerHTML = '';
	searchArticleList.innerHTML = '';
	entArticleList.innerHTML = '';
	sportArticleList.innerHTML = '';

	document.getElementById("searchTitle").style.display = "none"; //turns off Search articles header
	document.getElementById("sportTitle").style.display = "none"; //turns off Sports articles header
	document.getElementById("entTitle").style.display = "none"; //turns off Entertainment articles header
	document.getElementById("techTitle").style.display = "none"; //turns off Tech article header
	document.getElementById("noResults").style.display = "none"; 
	document.getElementById("startScreen").style.display = "none";

}


function pagesNumber(a){

	if(a <= 100 && a > 0){
		a = 1;
		return a;
	}

	if(a > 100){
		a = a/100;
		a = Math.round(a);
		a = a + 1;
		return a;
	}

}


//creates an event for hitting the search button
search.addEventListener('submit', find);

//event for finding articles based on the search
function find(e){

	clearScreen();
	document.getElementById("searchTitle").style.display = "block"; //display Search articles header

	let results = null;

	let techPages = null;
	let sportPages = null;
	let entPages = null;

	let techTot = null;
	let sportTot = null;
	let entTot = null;

	e.preventDefault(); //stops refreshing after pressing search that caused code to not work

	

	country = document.getElementById('country').value;

	let searchInput = input.value;

	//Creates the search results for under the technology category

	var url = 'http://newsapi.org/v2/top-headlines?' + 'country=' + country + '&' +  'category=' + 'technology' + '&' +
          'q=' + searchInput + '&' +
          'apiKey=' + apiKey;

    console.log(url); //prints the url created for debugging purposes

	var req = new Request(url);

	fetch(url).then((response)=>{
		return response.json()
	}).then((data)=>{
		console.log(data) //prints the JSON returned for debugging purposes
		results = data.totalResults;
		console.log(results);

		if (data.totalResults == 0){
			techPages = 0;
		}

		else{
			techPages = pagesNumber(results);
		}

		let techTot = techPages;

		//techPages = pagesNumber(results);
		console.log(techPages); //prints the number of results pages resquired for search for debugging purposes


		for (let i = 1; i <= techPages && i < 100; i++) {
	  		var url = 'http://newsapi.org/v2/top-headlines?' + 'country=' + country + '&' + 
	          'q=' + searchInput + '&' + 'pageSize=100' + '&' + 'page=' + i + '&' + 
	          'category=technology' + '&' +'apiKey=' + apiKey;

			var req = new Request(url);

			fetch(url).then((response)=>{
				return response.json()
			}).then((data)=>{
				console.log(data) //prints the JSON returned for debugging purposes
				data.articles.forEach(article =>{
		        	let li = document.createElement('li');
		        	let img = document.createElement('img');
		        	let h2 = document.createElement('h2');
				   	let a = document.createElement('a');
			      	let h5 = document.createElement('h5');
			      	let p2 = document.createElement('p');
			      	//let hr = document.createElement('hr');

			       	a.setAttribute('href', article.url);
				   	a.setAttribute('target', '_blank');
				    a.textContent = article.title;

				    h2.appendChild(a);

			       	img.setAttribute('href', article.url);
			       	img.setAttribute('target', '_blank');
				    img.setAttribute('src', article.urlToImage);

			       	h5.textContent = 'Source: ' + article.source.name + ' Published on: ' + article.publishedAt;
			       	p2.textContent = article.content;
				        	
				   	li.appendChild(img);
			       	li.appendChild(h2);
			       	li.appendChild(h5);
				   	li.appendChild(p2);
		        	searchArticleList.appendChild(li);
	    		})
	  		})

	  		document.getElementById("noResults").style.display = "none"; 

    	}

	})


	//Creates the search results for under the sports category

	var url = 'http://newsapi.org/v2/top-headlines?' + 'country=' + country + '&' + 'category=sports' + '&' +
          'q=' + searchInput + '&' +
          'apiKey=' + apiKey;

    console.log(url); //prints the url created for debugging purposes

	var req = new Request(url);

	fetch(url).then((response)=>{
		return response.json()
	}).then((data)=>{
		console.log(data) //prints the JSON returned for debugging purposes
		results = data.totalResults;
		console.log(results);

		if (data.totalResults == 0){
			sportPages = 0;
		}

		else{
			sportPages = pagesNumber(results);
		}

		let sportTot = sportPages;

		//sportPages = pagesNumber(results);
		console.log(sportPages); //prints the number of results pages resquired for search for debugging purposes


		for (let i = 1; i <= sportPages && i < 100; i++) {
	  		var url = 'http://newsapi.org/v2/top-headlines?' + 'country=' + country + '&' +
	          'q=' + searchInput + '&' + 'pageSize=100' + '&' + 'page=' + i + '&' + 
	          'category=sports' + '&' +'apiKey=' + apiKey;

			var req = new Request(url);

			fetch(url).then((response)=>{
				return response.json()
			}).then((data)=>{
				console.log(data) //prints the JSON returned for debugging purposes
				data.articles.forEach(article =>{
					let li = document.createElement('li');
		        	let img = document.createElement('img');
		        	let h2 = document.createElement('h2');
				   	let a = document.createElement('a');
			      	let h5 = document.createElement('h5');
			      	let p2 = document.createElement('p');
			      	//let hr = document.createElement('hr');

			       	a.setAttribute('href', article.url);
				   	a.setAttribute('target', '_blank');
				    a.textContent = article.title;

				    h2.appendChild(a);

			       	img.setAttribute('href', article.url);
			       	img.setAttribute('target', '_blank');
				    img.setAttribute('src', article.urlToImage);

			       	h5.textContent = 'Source: ' + article.source.name + ' Published on: ' + article.publishedAt;
			       	p2.textContent = article.content;
				        	
				   	li.appendChild(img);
			       	li.appendChild(h2);
			       	li.appendChild(h5);
				   	li.appendChild(p2);
		        	searchArticleList.appendChild(li);
	    		})
	  		})

	  		document.getElementById("noResults").style.display = "none"; 

    	}

	})


	//Creates the search results for under the entertainment category

	var url = 'http://newsapi.org/v2/top-headlines?' +'country=' + country + '&' + 'category=entertainment' +
		 '&' + 'q=' + searchInput + '&' + 'apiKey=' + apiKey;

    console.log(url); //prints the url created for debugging purposes

	var req = new Request(url);

	fetch(url).then((response)=>{
		return response.json()
	}).then((data)=>{
		console.log(data) //prints the JSON returned for debugging purposes
		results = data.totalResults;
		console.log(results);

		if (results == 0){
			entPages = 0;
		}

		else{
			entPages = pagesNumber(results);
		}

		let entTot = entPages;

		//entPages = pagesNumber(results);
		console.log(entPages); //prints the number of results pages resquired for search for debugging purposes


		for (let i = 1; i <= entPages && i < 100; i++) {
	  		var url = 'http://newsapi.org/v2/top-headlines?' +
	          'q=' + searchInput + '&' +'country=' + country + '&' + 'pageSize=100' + '&' + 'page=' + i + '&' + 
	          'category=entertainment' + '&' + 'apiKey=' + apiKey;

			var req = new Request(url);

			fetch(url).then((response)=>{
				return response.json()
			}).then((data)=>{
				console.log(data) //prints the JSON returned for debugging purposes
				data.articles.forEach(article =>{
		        	let li = document.createElement('li');
		        	let img = document.createElement('img');
		        	let h2 = document.createElement('h2');
				   	let a = document.createElement('a');
			      	let h5 = document.createElement('h5');
			      	let p2 = document.createElement('p');
			      	//let hr = document.createElement('hr');

			       	a.setAttribute('href', article.url);
				   	a.setAttribute('target', '_blank');
				    a.textContent = article.title;

				    h2.appendChild(a);

			       	img.setAttribute('href', article.url);
			       	img.setAttribute('target', '_blank');
				    img.setAttribute('src', article.urlToImage);

			       	h5.textContent = 'Source: ' + article.source.name + ' Published on: ' + article.publishedAt;
			       	p2.textContent = article.content;
				        	
				   	li.appendChild(img);
			       	li.appendChild(h2);
			       	li.appendChild(h5);
				   	li.appendChild(p2);
		        	searchArticleList.appendChild(li);
	    		})
	  		})

	  		document.getElementById("noResults").style.display = "none"; 

    	}

	})

	let total = techTot +  sportTot + entTot;
	console.log(total);

	if(total == 0){
    	document.getElementById("noResults").style.display = "block";
    }
}



function techNews(){

	// clear the webpage before loading tech article list	
	clearScreen();
	document.getElementById("techTitle").style.display = "block"; //display Tech articles header

	country = document.getElementById('country').value;

	var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=' + country + '&' + 'category=technology' +  
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
           	let li = document.createElement('li');
        	let img = document.createElement('img');
        	let h2 = document.createElement('h2');
		   	let a = document.createElement('a');
	      	let h5 = document.createElement('h5');
	      	let p2 = document.createElement('p');
	      	//let hr = document.createElement('hr');

	       	a.setAttribute('href', article.url);
		   	a.setAttribute('target', '_blank');
		    a.textContent = article.title;

		    h2.appendChild(a);

	       	img.setAttribute('href', article.url);
	       	img.setAttribute('target', '_blank');
		    img.setAttribute('src', article.urlToImage);

	       	h5.textContent = 'Source: ' + article.source.name + ' Published on: ' + article.publishedAt;
	       	p2.textContent = article.content;
		        	
		   	li.appendChild(img);
	       	li.appendChild(h2);
	       	li.appendChild(h5);
		   	li.appendChild(p2);
		   	//li.appendChild(hr);
		    techArticleList.appendChild(li);
    	})

    })


}

function sportNews(){

	// clear the webpage before loading tech article list	
	clearScreen();
	document.getElementById("sportTitle").style.display = "block"; //display Tech articles header

	country = document.getElementById('country').value;

	var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=' + country + '&' + 'category=sports' +  
          '&apiKey=' + apiKey;	

    console.log(url); //prints the url created for debugging purposes

	var req = new Request(url);

	let sportArticles = [];
	

	fetch(url).then((response)=>{ //gets the information from the NewsAPI url
		return response.json()
	}).then((data)=>{
		console.log(data); //prints the JSON returned for debugging purposes

		techArticles = data.articles; 

		console.log(techArticles); //prints the articles array for debugging purposes

		data.articles.forEach(article =>{ //creates a list of article titles and makes them clickable links
           	let li = document.createElement('li');
        	let img = document.createElement('img');
        	let h2 = document.createElement('h2');
		   	let a = document.createElement('a');
	      	let h5 = document.createElement('h5');
	      	let p2 = document.createElement('p');

	       	a.setAttribute('href', article.url);
		   	a.setAttribute('target', '_blank');
		    a.textContent = article.title;

		    h2.appendChild(a);

	       	img.setAttribute('href', article.url);
	       	img.setAttribute('target', '_blank');
		    img.setAttribute('src', article.urlToImage);

	       	h5.textContent = 'Source: ' + article.source.name + ' Published on: ' + article.publishedAt;
	       	p2.textContent = article.content;
		        	
		   	li.appendChild(img);
	       	li.appendChild(h2);
	       	li.appendChild(h5);
		   	li.appendChild(p2);
		    sportArticleList.appendChild(li);
    	})

    })


}

function entNews(){

	// clear the webpage before loading tech article list	
	clearScreen();
	document.getElementById("entTitle").style.display = "block"; //display Tech articles header

	country = document.getElementById('country').value;

	var url = 'http://newsapi.org/v2/top-headlines?' +
          'country=' + country + '&' + 'category=entertainment' +  
          '&apiKey=' + apiKey;	

    console.log(url); //prints the url created for debugging purposes

	var req = new Request(url);

	let sportArticles = [];
	

	fetch(url).then((response)=>{ //gets the information from the NewsAPI url
		return response.json()
	}).then((data)=>{
		console.log(data); //prints the JSON returned for debugging purposes

		techArticles = data.articles; 

		console.log(techArticles); //prints the articles array for debugging purposes

		data.articles.forEach(article =>{ //creates a list of article titles and makes them clickable links
           	let li = document.createElement('li');
        	let img = document.createElement('img');
        	let h2 = document.createElement('h2');
		   	let a = document.createElement('a');
	      	let h5 = document.createElement('h5');
	      	let p2 = document.createElement('p');

	       	a.setAttribute('href', article.url);
		   	a.setAttribute('target', '_blank');
		    a.textContent = article.title;

		    h2.appendChild(a);

	       	img.setAttribute('href', article.url);
	       	img.setAttribute('target', '_blank');
		    img.setAttribute('src', article.urlToImage);

	       	h5.textContent = 'Source: ' + article.source.name + ' Published on: ' + article.publishedAt;
	       	p2.textContent = article.content;
		        	
		   	li.appendChild(img);
	       	li.appendChild(h2);
	       	li.appendChild(h5);
		   	li.appendChild(p2);
		    entArticleList.appendChild(li);
    	})

    })


}

function reloadPage(){
	location.reload();
}    