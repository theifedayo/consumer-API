
# consume API

### Description
This is an API built around a simple data schema for easy integration to other platforms.

### Getting started
Make sure you have Node.js downloaded on your PC. To install packages in package.json file, run the command

	$ npm install 

When all has been installed, run :

	$ npm run dev
to start the server running in development mode on port: 5000

## Requests-check
Note - Request body data and response data are formatted as JSON.
This API endpoints can be consumed using curl or Postman.

Using curl:
curl this shows the route to which request is to be made
-H this represents headers
-d this represents data
-X this represents the type of request

Only two routes are available in this project with four types of request - GET, POST, PUT, DELETE and the response format are:


	{
		"success": [boolean],
		"message": [string],
		"data": [List]
	}


## Posts
 ListPostView.
Get list of posts from the database.
hosted route - https://consume-api-test.herokuapp.com/api/posts

	curl http://localhost:5000/api/posts
	-X   GET

sample response[200 OK]

	{
		"success": true,
		"count": 2,
		"data": [
			{
				"_id": "5fadsaf0asdghfe63e46",
				"title": "me and you",
				"post": "this is a new post about me and you",
				"__v": 0,
				"createdAt": "2020-12-09T12:47:48.188Z"
			},
			{
				"_id": "1f6215vsjhsfeaf5e46",
				"title": "my family",
				"post": "this is a new post about my family",
				"__v": 0,
				"createdAt": "2020-12-01T12:47:48.188Z"
			}
		]
	}


 Submit Post.
This endpoint allows you to create posts on your integration.

Headers - Content-Type	string    set to application/json
Body    - title 		string    title of the post
		- post 		string, 140 maxlength    description of title


	curl http://localhost:5000/api/posts
	-H   "Content-Type: application/json"
	-d   '{ title: "new title", post: "this explains your title"}'
	-X   POST

sample response[200 OK]

	{
		"success": true,
		"messafe": "Post successfully created",
		"data": {
					"_id": "5fadsaf0asdghfe63e46",
					"title": "me and you",
					"post": "this is a new post about me and you",
					"__v": 0,
					"createdAt": "2020-12-09T12:47:48.188Z"
				}
	}

 update Posts
This endpoint allows you to edit and update posts on your integration.

	curl http://localhost:5000/api/posts/<post_id>
	-H   "Content-Type: application/json"
	-d   '{ title: "update new title", post: "this explains your title"}'
	-X   PUT


sample response[200 OK]

	{
		"success": true,
		"messafe": "Post successfully updated",
		"data": {}
	}


 Delete Posts
This endpoint allows you to delete posts on your integration.


	curl http://localhost:5000/api/posts/<post_id>
	-H   "Content-Type: application/json"
	-d   '{ title: "new title", post: "this explains your title"}'
	-X   DELETE


sample response[200 OK]

	{
		"success": true,
		"messafe": "Post successfully deleted",
		"data": {}
	}

## Errors
The response for requests failure are rather simple. For now, only the server-side errors are handled.

	{
		"success": false,
		"message": 'Server error',
		"data": {}
	}


## Built With
Built with javascript - Nodejs
