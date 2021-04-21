import { PropsWithChildren, useState, useEffect } from "react";
import { createCtx } from "../hooks/useContextProvider";




const [useMember, MemberCtxProvider] = createCtx<any>();

const MemberProvider = (props: PropsWithChildren<any>) => {
  
const [isLoading, setIsLoading] = useState<boolean>(true);
 const [currentPage, setCurrentPage] = useState(1);
    const [membersPerPage] = useState(10);
   useEffect(() => {
    
    const fetchMembers = async () => {
    const res = await fetch(props.url)
    const members = await res.json()
      setMembers(members)
      console.log(members);
      setIsLoading(false);
    }
    fetchMembers()
  
  },[ props.url])

  
  const [members, setMembers] = useState<any>([]);
  
  
  return <MemberCtxProvider value={{
    members,
    isLoading,
    currentPage,
    membersPerPage,
    setCurrentPage
  }}>
    {props.children}</MemberCtxProvider>;
};
export { useMember, MemberProvider };
