export const getResponse = async (message) => {
    const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        body: JSON.stringify({ query: message,
            model:  "mistral-large-latest",
            api_key: process.env.CHAT_API_KEY }),
    });
    return response.json();
};
