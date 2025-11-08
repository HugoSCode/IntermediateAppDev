import { fetchLeader } from "./FetchLeaders";
import { use } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";


export function cacheLeaders() {
    return useQuery({
        queryKey: ['leaders'],
        queryFn:async()=>{
            const leaders = await fetchLeader();
            return leaders;
        },
    });
}

export function useAllCachedLeaders() {
    const queryClient = useQueryClient();
    const cachedLeaders = queryClient.getQueryData(['leaders']);
    return cachedLeaders || [];
}