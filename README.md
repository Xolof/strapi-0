# Instance of Strapi to be used in experiment

[Source of Strapi Docker example](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/installation/docker.html)

## Set up

0. Make a copy of this directory if you want to set up more instances later.

1. In the new directory run 
`yarn create strapi-app app  --quickstart --template https://github.com/strapi/strapi-template-blog`

2. When the app is running, press CTRL+C.

3. Change to the correct port.
In `app/config/server.js` on line 3 change `1337` to:

* `4001` for the Strapi instance with 100 posts
* `4003` for the Strapi instance with 10000 posts.

4. `cd app/` `NODE_ENV=production npm run build`

5. Run `NODE_ENV=production npm start`

6. Go to localhost:<port>. Create a user. Then go to Articles and delete all articles.
   Go to Settings >> Users & Permissons Plugin >> Roles >> Public.
   Under Permissions, check "count" and "create".
   Click "Save".
   
7. Open a new terminal window. `cd ../script` `npm install`.

8. In the file `create-script.js`, change `numPosts` to the number of posts to create.
Change `port` to the port number of Strapi.

9. Run node create-script.js. Posts should be added in Strapi.

10. Log in to the UI. Disallow public to post articles.

11. The Strapi app should now be up and running with a number of articles.


