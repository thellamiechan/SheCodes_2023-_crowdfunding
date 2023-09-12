import { useState , useEffect } from "react";
import getProject from "../api/getProject";

export default function useProject(projectId) {
    const [project, setproject] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        getProject(projectId)
            .then((project) => {
                setproject(project);
                setIsLoading(false);
            }) 
            .catch ((error) => {
                setError(error);
                setIsLoading(false);
            });
    }), (projectId);
    return ( project, isLoading, error)
}