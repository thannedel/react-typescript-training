import HouseTable from "./HouseTable";
import { useMember } from "../../contexts/MemberContext";

const House = () => {
  const members = useMember();

  return (
    <div className="home">
     {members.map((member: any) => (
        <div key={member.id}>
          <HouseTable first_name={member.first_name} last_name={member.last_name} />
        </div>
      ))}
    </div>
  );
};
export default House;
