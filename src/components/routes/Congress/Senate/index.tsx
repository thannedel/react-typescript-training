import OverviewTable from '../../../overviewTables/OverviewTable';
import { Container, Row , Col } from 'reactstrap';
import { MemberProvider } from '../../../../contexts/MemberContext';
//import {useState} from 'react'


export const Senate = () => {
  const url = process.env.REACT_APP_API_SENATE_ENDPOINT
  return (
    
    <MemberProvider url={url}>
      <section id="explore-section" className="bg-faded text-muted py-5">
      <Container>
      <h3>Congress</h3>
        <Row>
          <Col>
          <p className="lead">The major power of the House is to pass federal legislation that affects the entire country, although its bills must also be passed by the Senate and further agreed to by the U.S. President before becoming law (unless both the House and Senate re-pass the legislation with a two-thirds majority in each chamber). The House has some exclusive powers: the power to initiate revenue bills, to impeach officials (impeached officials are subsequently tried in the Senate), and to elect the U.S. President in case there is no majority in the Electoral College. Each U.S. state is represented in the House in proportion to its population as measured in the census, but every state is entitled to at least one representative.</p>
      </Col>
      </Row>
        </Container>
        <Container>
          <OverviewTable />
        </Container>
        </section>
    </MemberProvider>
  );
};