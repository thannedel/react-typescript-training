import { useMember } from '../../contexts/MemberContext';
import OverviewTableHead from './OverviewTableHead'
import OverviewTableRow from './OverviewTableRow'

import { Table } from 'reactstrap';
  const OverviewTable = () => {
    const  members  = useMember();
    
  return (
   <Table striped>
      <thead>
          <OverviewTableHead />
      </thead>
      <tbody>
         {members.map((member:any) => (
           <OverviewTableRow
             key={member.id}
             first_name={member.first_name}
             last_name={member.last_name} 
             party={member.party}
             state={member.state}
           seniority={member.seniority}
           votes_with_party_pct={member.votes_with_party_pct}
           />
           
          ))}
      </tbody>
      </Table>
    
  
  );
};
export default OverviewTable;
