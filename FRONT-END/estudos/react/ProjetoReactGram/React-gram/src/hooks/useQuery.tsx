import { useLocation } from "react-router";
import { useMemo } from "react";



export function useQuery(){
    const {search} = useLocation()
    return useMemo(() => new URLSearchParams(search), [search])
}