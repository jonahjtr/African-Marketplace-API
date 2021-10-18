# african marketplace

build week African marketplace endpoints:
USERS:
api/users/register [POST] create a user \*\* pass in "role" as owner or else role will be automatically user  
 api/users/login [POST] login

ITEMS:
api/items [GET] get all items  
 api/items/:id [GET] get item by item id
api/items [POST] add an item USE:
"name": "<name>",
"category": "<choose a category>",
"description": "<insert the description>t",
"price": "<insert price>",
"user_id": <insert user ID without quotes, whoever is posting>
api/items/:id [PUT] edit any item (update as much of the item as you want)
api/items/:id [DELETE] delete item by id
