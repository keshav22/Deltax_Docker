# Mini Imdb.com(clone)

> The project could have been better if there was better error handling , contents in database , design , staying on the page after editing etc.
  


### Theory
* I learned Docker for this project & have successfully implemented.
* Used Node.js & php for backend(API & database).
* Database used is relational Mysql database.
* Created all CRUD API & created a dummy database to work on didn't used any free API's.

### Installation & Run
1. Open cmd/terminal & navigate inside Task folder
1. If your system has nodejs installed you can run the below line of code & you will be good to go.
		npm install / yarn
		npm start / yarn start / node index.js
2. Since I have incorporated docker so nothing to worry just run the belowcode 
	
		//First this
		docker build -t simpleweb:latest . //don't miss the dot(.)
		//Then
		docker run -p 8080:8080 -it simpleweb //Use 8080 only as its set on index.js also else change inndex.js too.
3. Now open any browser & type localhost:8080 & you will see your webpage.


### Points
1. I haven't used ASP.net as I haven't learned it yet.
2. I have used 4 tables named actor movie movie_cast & producer considered normal forms too.
3. Minimum requirements according to docs I think I am sure I have completed the first 2 but in 3 I have implementated the functionality only for Actors due to shortage of time.
4. During Implementation my system crashed due to some other reason & it took some time.
5. So in the remaining time I did the second & third(half) requirements.
6. As per docs I have considered functionality over style so sorry if it doesn't look good.
7. Hope you liked it. 
 
