db.users.insertMany([
  {
    username: "alice_smith",
    email: "alice.smith@example.com",
    age: 24,
    country: "Canada",
    created_at: new Date(),
    is_active: true,
  },
  {
    username: "bob_jackson",
    email: "bob.jackson@example.com",
    age: 35,
    country: "UK",
    created_at: new Date(),
    is_active: false,
  },
  {
    username: "emma_wilson",
    email: "emma.wilson@example.com",
    age: 30,
    country: "Australia",
    created_at: new Date(),
    is_active: true,
  },
]);
