import { PropsWithChildren, useState, useEffect } from "react";
import { createCtx } from "../hooks/useContextProvider";




const [useMember, MemberCtxProvider] = createCtx<any>();

const MemberProvider = (props: PropsWithChildren<any>) => {
  
  //const [isLoading, setIsLoading] = useState<boolean>(false);
 // console.log(isLoading);
   useEffect(() => {
    
    const fetchMembers = async () => {
   //   setIsLoading(true);
    const res = await fetch(props.url)
    const members = await res.json()
      setMembers(members)
      console.log(members);
     // setIsLoading(false);
    }
    fetchMembers()
  
  },[props.url])

  
  const [members, setMembers] = useState<any>([]);
  
  
  return <MemberCtxProvider value={members}>{props.children}</MemberCtxProvider>;
};
export { useMember, MemberProvider };
