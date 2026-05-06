import { useQuery } from "@tanstack/react-query";

function usePublishedPage()  {
    return useQuery({
        queryKey: ["published-page"],
        queryFn: async () => {
        const response = await fetch(`http://localhost:2050/published-section`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
        }
    });
}
export default usePublishedPage