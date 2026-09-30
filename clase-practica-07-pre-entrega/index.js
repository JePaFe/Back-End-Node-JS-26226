const [, , method, route, ...args] = process.argv;

const [resource, id] = route.split("/");

const BASE_URL = "https://jsonplaceholder.typicode.com";

const request = async (url, options = {}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
};

try {
  if (method === "GET") {
    if (id) {
      const data = await request(`${BASE_URL}/${resource}/${id}`);
      console.log(data);
    } else {
      const data = await request(`${BASE_URL}/${resource}`);
      console.log(data);
    }
  } else if (method === "POST") {
    const [title, body] = args;

    if (!title || !body) {
      throw new Error(
        `Title and body are required for POST requests on ${resource}`,
      );
    }

    const data = await request(`${BASE_URL}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    console.log(data);
  } else if (method === "DELETE") {
    if (!id) {
      throw new Error(`ID is required for DELETE requests on ${resource}`);
    }

    await request(`${BASE_URL}/${resource}/${id}`, { method: "DELETE" });
  } else {
    throw new Error(`Unsupported method: ${method}`);
  }
} catch (error) {
  console.log(error.message);
}
