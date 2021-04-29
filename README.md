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

4. `cd app/` `NODE_ENV=development npm run build`

5. Run `npm run develop`

   Go to `localhost:<port>/admin`. Create a user.

   Go to Content-Types Builder >> Create new collection type.
   
   Choose "Page" as Display name.
   
   Select Text.
   
   Enter "name" as Name.
   
   Click Add another field.
   
   Select Rich text.
   
   Enter "content" as Name.
   
   Click Finish. Then Click Save.
   
   Go to Collection Types >> Pages.
   
   Click Add New Pages.
   
   Enter "About" as name.
   
   Enter "This is a page about the site." as content.
   
   Click Save.
   
   Click Publish.

   Go to Settings >> Users & Permissons Plugin >> Roles >> Public.

   Scroll down to "Page". Check "find" and "findone".

   Click Save.

6. Run `NODE_ENV=production npm run build` and then `NODE_ENV=production npm start`

. Go to `localhost:<port>/admin`. Go to Articles and delete all articles.
   Go to Settings >> Users & Permissons Plugin >> Roles >> Public.
   Under Permissions >> Application >> Article, check "count" and "create".
   Click "Save".    
   
7. Open a new terminal window. `cd ../script` `npm install`.

9. In the file `create-script.js`, change `numPosts` to the number of posts to create.
If Strapi is on localhost Change `port` to the port number of Strapi,
If Strapi is not on localhost but on a domain change the URL on row 12 to the URL for Strapi.

9. Run node create-script.js. Posts should be added in Strapi.

10. Log in to the UI. Disallow public to post articles.

11. The Strapi app should now be up and running with a number of articles.

12. You can keep your Strapi project alive and reload it without downtime
    with PM2.

    `npm install pm2 -g`

    In the `app` directory run `pm2 init`.

    Replace the content of the newly generated file ecosystem.config.js with the following code:
    
```
module.exports = {
  apps: [
    {
      name: 'app',
      script: 'npm',
      args: 'start',
    },
  ],
};
```

To start the app run `pm2 start ecosystem.config.js`.



