const users = [
  {
    id: 1,
    email: "valid@example.com",
    password: "$2b$10$hdFtMARDDbr58jzOI8eEsuJrn98PVRvjwYvzQbIW4bSy8hOpC8EeO",
  },
];

export function findUserByEmail(email: string) {
  return users.find((user) => user.email === email);
}

export function createUser(email: string, password: string) {
  const maxId = users.reduce((max, user) => (user.id > max ? user.id : max), 0);
  const newUser = {
    id: maxId + 1,
    email,
    password,
  };

  users.push(newUser);

  return newUser;
}
