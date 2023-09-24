async function postPledge(pledgeData) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const token =window.localStorage.getItem("token");
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Token ${token}`
        },
        body: JSON.stringify({
            "project":pledgeData.projectId,
            "amount":pledgeData.amount,
            "comment": pledgeData.comment,
            "anonymous":pledgeData.anonymous,
            "supporter": 2
        }),
    });
    console.log(pledgeData);

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

export default postPledge