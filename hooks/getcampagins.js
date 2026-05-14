import { useQuery } from "@tanstack/react-query";

function useCampaigns()  {
    return useQuery({
        queryKey: ["campaigns"],
        queryFn: async () => {
        const response = await fetch(`http://localhost:2050/campaigns`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
        }
    });
}
export default useCampaigns