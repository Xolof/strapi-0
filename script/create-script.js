const axios = require('axios');
const dateStr = "2015-04-12T10:00:00.000Z";
const firstDate = new Date(dateStr);
const numPosts = 0;
const port = false;
const liveURL = false;

const baseURL = liveURL ? liveURL : `http://localhost:${port}`;

createPosts();

async function createPosts() {
    for (var i = 0; i < numPosts; i++) {
        const currentDate = new Date(firstDate.getTime() + (i * 60000));
        await axios.post(`${baseURL}/articles`,
            {
                "id": 1,
                "title": `Post ${i + 1}` ,
                "descriptionHeading": "A new post!",
                "description": `This is a post created by a Node.js-script.`,
                "content": `## A new post!\n\nThis is post ${i + 1}`,
                "publishedAt": currentDate.toISOString(),
                "status": "published",
                "slug": `article-${i + 1}`,
                "category": {
                  "id": 5,
                  "name": "story",
                  "slug": "story",
                  "created_at": "2021-03-14T14:34:56.766Z",
                  "updated_at": "2021-03-14T14:34:56.766Z"
                },
                "author": {
                  "id": 1,
                  "name": "David Doe",
                  "email": "daviddoe@strapi.io",
                  "created_at": "2021-03-14T14:34:57.613Z",
                  "updated_at": "2021-03-14T14:34:57.613Z",
                  "picture": {
                    "id": 2,
                    "name": "daviddoe@strapi.io.jpg",
                    "alternativeText": null,
                    "caption": null,
                    "width": 2418,
                    "height": 2711,
                    "formats": {
                      "thumbnail": {
                        "name": "thumbnail_daviddoe@strapi.io.jpg",
                        "hash": "thumbnail_daviddoe_strapi_io_0cacb25dae",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "width": 139,
                        "height": 156,
                        "size": 4.18,
                        "path": null,
                        "url": "/uploads/thumbnail_daviddoe_strapi_io_0cacb25dae.jpg"
                      },
                      "large": {
                        "name": "large_daviddoe@strapi.io.jpg",
                        "hash": "large_daviddoe_strapi_io_0cacb25dae",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "width": 892,
                        "height": 1000,
                        "size": 73.81,
                        "path": null,
                        "url": "/uploads/large_daviddoe_strapi_io_0cacb25dae.jpg"
                      },
                      "medium": {
                        "name": "medium_daviddoe@strapi.io.jpg",
                        "hash": "medium_daviddoe_strapi_io_0cacb25dae",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "width": 669,
                        "height": 750,
                        "size": 44.33,
                        "path": null,
                        "url": "/uploads/medium_daviddoe_strapi_io_0cacb25dae.jpg"
                      },
                      "small": {
                        "name": "small_daviddoe@strapi.io.jpg",
                        "hash": "small_daviddoe_strapi_io_0cacb25dae",
                        "ext": ".jpg",
                        "mime": "image/jpeg",
                        "width": 446,
                        "height": 500,
                        "size": 22.5,
                        "path": null,
                        "url": "/uploads/small_daviddoe_strapi_io_0cacb25dae.jpg"
                      }
                    },
                    "hash": "daviddoe_strapi_io_0cacb25dae",
                    "ext": ".jpg",
                    "mime": "image/jpeg",
                    "size": 587.69,
                    "url": "/uploads/daviddoe_strapi_io_0cacb25dae.jpg",
                    "previewUrl": null,
                    "provider": "local",
                    "provider_metadata": null,
                    "created_at": "2021-03-14T14:34:57.793Z",
                    "updated_at": "2021-03-14T14:34:57.793Z"
                  }
                },
                "created_at": "2021-03-14T14:34:57.852Z",
                "updated_at": "2021-03-14T14:34:57.858Z",
                "image": {
                  "id": 5,
                  "name": "the-internet-s-own-boy.jpg",
                  "alternativeText": null,
                  "caption": null,
                  "width": 1200,
                  "height": 707,
                  "formats": {
                    "thumbnail": {
                      "name": "thumbnail_the-internet-s-own-boy.jpg",
                      "hash": "thumbnail_the_internet_s_own_boy_26badd3fbd",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "width": 245,
                      "height": 144,
                      "size": 8.18,
                      "path": null,
                      "url": "/uploads/thumbnail_the_internet_s_own_boy_26badd3fbd.jpg"
                    },
                    "large": {
                      "name": "large_the-internet-s-own-boy.jpg",
                      "hash": "large_the_internet_s_own_boy_26badd3fbd",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "width": 1000,
                      "height": 589,
                      "size": 70.11,
                      "path": null,
                      "url": "/uploads/large_the_internet_s_own_boy_26badd3fbd.jpg"
                    },
                    "medium": {
                      "name": "medium_the-internet-s-own-boy.jpg",
                      "hash": "medium_the_internet_s_own_boy_26badd3fbd",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "width": 750,
                      "height": 442,
                      "size": 45.93,
                      "path": null,
                      "url": "/uploads/medium_the_internet_s_own_boy_26badd3fbd.jpg"
                    },
                    "small": {
                      "name": "small_the-internet-s-own-boy.jpg",
                      "hash": "small_the_internet_s_own_boy_26badd3fbd",
                      "ext": ".jpg",
                      "mime": "image/jpeg",
                      "width": 500,
                      "height": 295,
                      "size": 24.8,
                      "path": null,
                      "url": "/uploads/small_the_internet_s_own_boy_26badd3fbd.jpg"
                    }
                  },
                  "hash": "the_internet_s_own_boy_26badd3fbd",
                  "ext": ".jpg",
                  "mime": "image/jpeg",
                  "size": 91.55,
                  "url": "/uploads/the_internet_s_own_boy_26badd3fbd.jpg",
                  "previewUrl": null,
                  "provider": "local",
                  "provider_metadata": null,
                  "created_at": "2021-03-14T14:34:58.150Z",
                  "updated_at": "2021-03-14T14:34:58.150Z"
                }
            }
            )
            .then(response => {
              // Handle success.
              console.log('Article added!');
            })
            .catch(error => {
              // Handle error.
              console.log('An error occurred:', error.response);
            });
    }
}
