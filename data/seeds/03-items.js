exports.seed = function (knex, Promise) {
  return knex("items")
    .del()
    .then(function () {
      return knex("items").insert([
        {
          name: "shoes",
          location: "Nigeria",
          category: "clothing",
          description: "nike size 13",
          price: 20,
          user_id: 1,
        },
        {
          name: "necklace",
          location: "ethiopia",
          category: "accessories",
          description: "gold necklace, 13 inches",
          price: 200,
          user_id: 1,
        },
        {
          name: "shirt",
          location: "sudan",
          category: "clothing",
          description: "shirt with mickey mouse on it",
          price: 35.99,
          user_id: 1,
        },
        {
          name: "pants",
          location: "morocco",
          category: "clothing",
          description: "leather snake skin",
          price: 301,
          user_id: 2,
        },
        {
          name: "dress",
          location: "senegal",
          category: "clothing",
          description: "blue dress size 44",
          price: 4000.0,
          user_id: 3,
        },
        {
          name: "hat",
          location: "uganda",
          category: "accessories",
          description: "for big heads",
          price: 35.99,
          user_id: 2,
        },
      ]);
    });
};
