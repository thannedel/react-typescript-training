interface HouseTableProps {
  first_name: string;
  last_name: string;
}

const HouseTable = ({ first_name, last_name }: HouseTableProps) => {
  return (
    <div>
      <h3>{first_name}</h3>
      <p>{last_name}</p>
    </div>
  );
};
export default HouseTable;
