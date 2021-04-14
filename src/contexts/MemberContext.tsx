import { PropsWithChildren, useState, useEffect } from "react";
import { createCtx } from "../hooks/useContextProvider";

interface ContextProps {
  title?: string;
  author?: string;
  body?: string;
  id?: number;
}
const [useMember, MemberCtxProvider] = createCtx<ContextProps | any>();

const MemberProvider = (props: PropsWithChildren<any>) => {
  useEffect(() => {
    const getMembers = async () => {
      const MembersFromServer = await fetchMembers()
      setMembers(MembersFromServer)
    }
    getMembers()
  }, [])

  const fetchMembers  = async () => {
      const res = await fetch('http://localhost:5000/members')
      const members = await res.json()
      return members
    }
  const [members, setMembers] = useState<any>([]);

  return <MemberCtxProvider value={members}>{props.children}</MemberCtxProvider>;
};
export { useMember, MemberProvider };
