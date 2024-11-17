import React from 'react';

type Candidate = {
    id: number;
    name: string;
    username: string;
    location: string;
    company: string;
    email: string;
    avatar: string;
};

interface CandidateCardProps {
    candidates: Candidate[];
}
const CandidateCard = ({ candidates }: CandidateCardProps) => {
    return (
        <ul>
            {candidates.map((candidate) => (
                <li key={candidate.id}>
                    <img src={candidate.avatar} alt={candidate.name} />
                    <h2>{candidate.name}</h2>
                    <p>{candidate.username}</p>
                    <p>{candidate.location}</p>
                    <p>{candidate.company}</p>
                    <p>{candidate.email}</p>
                </li>
            ))}
        </ul>
    );
};

export default CandidateCard;
