export const saveUser = (user) => {
  const currentUser = {
    email: user?.email,
  };

  fetch(`https://bentilzone-server-side.vercel.app/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};
