import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useQuery () {
    const {search} = useLocation()
     return useMemo(() => new URLSearchParams(search), [search]) // a funcao so sera executada quando esse search for alterado
}