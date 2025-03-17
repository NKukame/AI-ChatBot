export const getResponse = async (message) => {
        console.log(message);
        const response = await fetch('http://localhost:8000/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: message,
            model:  "mistral-large-latest",
            api_key: "M8WSWXdvBx41jtTIgHCOe0Fbpj5ygjgi" }),
    });
    return response.json();
};
