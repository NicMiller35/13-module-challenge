import { useEffect, useState } from 'react';
import { ListGroup, Card, Button } from 'react-bootstrap';
import Candidate from '../interfaces/Candidate.interface';

interface SavedCandidatesProps {
  savedCandidates: Candidate[];
  onRemove: (id: number) => void;  
}

const SavedCandidates = ({ savedCandidates, onRemove }: SavedCandidatesProps) => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  
  useEffect(() => {
    const savedData = localStorage.getItem('savedCandidates');
    if (savedData) {
      const parsedCandidates = JSON.parse(savedData);
      setCandidates(parsedCandidates);
      
    }
  }, []);

 
  useEffect(() => {
    if (candidates.length > 0) {
      localStorage.setItem('savedCandidates', JSON.stringify(candidates));
    }
  }, [candidates]);

  return (
    <div>
      <h3>Saved Candidates</h3>
      {savedCandidates.length === 0 ? (
        <p>No candidates saved yet.</p>
      ) : (
        <ListGroup>
          {savedCandidates.map((candidate) => (
            <ListGroup.Item key={candidate.id}>
              <Card>
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
                  <Card.Link href={candidate.html_url} target="_blank">
                    GitHub Profile
                  </Card.Link>
                  <Button variant="danger" onClick={() => onRemove(candidate.id)}>
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
};

export default SavedCandidates;
