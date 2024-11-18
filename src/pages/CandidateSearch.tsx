import { useState, useEffect } from 'react';
import CandidateCard from '../components/CandidateCard';
import PotentialCandidatesList from '../components/PotentialCandidatesList';
import Candidate from '../interfaces/Candidate.interface';
import { searchGithub } from '../api/API';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchCandidates = async () => {
      setLoading(true);
      try {
        const data = await searchGithub();
        setCandidates(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load candidates.');
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []); 

  const handleSaveCandidate = (candidate: Candidate) => {
    setSavedCandidates((prevSavedCandidates) => [...prevSavedCandidates, candidate]);
    moveToNextCandidate();
  };

  const handleSkipCandidate = () => {
    moveToNextCandidate();
  };

  const moveToNextCandidate = () => {
    if (currentCandidateIndex < candidates.length - 1) {
      setCurrentCandidateIndex(currentCandidateIndex + 1);
    }
  };

  const noMoreCandidates = currentCandidateIndex >= candidates.length;

  if (loading) {
    return <h3>Loading candidates...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      {noMoreCandidates ? (
        <h3>No more candidates to review.</h3>
      ) : (
        <CandidateCard
          candidate={candidates[currentCandidateIndex]}
          onSave={handleSaveCandidate}
          onSkip={handleSkipCandidate}
        />
      )}

      <PotentialCandidatesList savedCandidates={savedCandidates} />
    </div>
  );
};

export default CandidateSearch;
