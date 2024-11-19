import { Card, Container, Row, Col } from 'react-bootstrap';
import Candidate from '../interfaces/Candidate.interface';


interface PotentialCandidatesListProps {
    savedCandidates: Candidate[];
}

const PotentialCandidatesList = ({ savedCandidates }: PotentialCandidatesListProps) => {
    if (savedCandidates.length === 0) {
        return (
            <Container>
                <h3>No potential candidates have been saved yet.</h3>
            </Container>
        );
    }

    return (
        
        <Container>
            <h2>Potential Candidates</h2>
            <Row>
                {savedCandidates.map((candidate) => (
                    <Col key={candidate.id} xs={12} md={6} lg={4}>
                        <Card>
                            <Card.Img variant="top" src={candidate.avatar} />
                            <Card.Body>
                                <Card.Title>{candidate.name}</Card.Title>
                                <Card.Text>
                                    <strong>Username:</strong> {candidate.username}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Location:</strong> {candidate.location}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Company:</strong> {candidate.company}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Email:</strong> {candidate.email}
                                </Card.Text>
                                <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                                    View Profile
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        
    );
};

export default PotentialCandidatesList;
