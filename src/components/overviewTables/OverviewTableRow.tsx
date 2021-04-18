interface OverviewTableRowProps {
  first_name: string;
  last_name: string;
  party: string;
  state: string;
  seniority: string;
  votes_with_party_pct: number;
}
const OverviewTableRow = ({ first_name, last_name, party,state,seniority,votes_with_party_pct }: OverviewTableRowProps) => {
  return (
      <tr>
      <td>{first_name} {last_name }</td>
      <td>{party}</td>
      <td>{state}</td>
      <td>{seniority}</td>
      <td>{votes_with_party_pct}</td>
    </tr>
  );
};
export default OverviewTableRow;