async function postProject(projectData) {
    const url = `${import.meta.env.VITE_API_URL}/projects/`;
    const token = window.localStorage.getItem("token");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `token ${token}`
        },
        body: JSON.stringify({
            "title": projectData.title,
            "synopsis": projectData.synopsis,
            "goal": projectData.goal,
            "is_open": projectData.is_open,
            "image": projectData.image,
            "date_created": new Date().toISOString(),
            "owner": 1
        }),
    });
    if (!response.ok) {
        const fallbackError = "Error trying to load";

        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postProject