async function putProject(title, synopsis) {
    const url = `${import.meta.env.VITE_API_URL}/projects/${projectData.id}`;
    const token =window.localStorage.getItem("token");
    const response = await fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Token ${token}`
        },
        body: JSON.stringify({
            "title": title,
            "synopsis": synopsis,
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

  export default putProject