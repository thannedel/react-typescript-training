import { useMember } from '../../contexts/MemberContext';
import OverviewTableHead from './OverviewTableHead'
import OverviewTableRow from './OverviewTableRow'
import Paginate from '../common/Paginate'
import { Table } from 'reactstrap';

  const OverviewTable = () => {
    const { members, isLoading,currentPage,membersPerPage } = useMember();
    
    if (isLoading) {
      return(<p>loading...</p>)
    }
 
    // For the Pagination
     const indexOfLastMember = currentPage * membersPerPage;
     const indexOfFirstMember = indexOfLastMember - membersPerPage;
     const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);
    
    return (
    <>
   <Table striped>
      <thead>
          <OverviewTableHead />
      </thead>
      <tbody>
         {currentMembers.map((member: any) => (
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
        <Paginate/>
      </>
  );
};
export default OverviewTable;
