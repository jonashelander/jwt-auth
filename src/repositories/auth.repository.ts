const users = [
  {
    id: 1,
    email: "valid@example.com",
    password: "validpassword",
  },
];

export function findUserByEmail(email: string) {
  return users.find((user) => user.email === email);
}
