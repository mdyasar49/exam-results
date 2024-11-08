import { Table, TableBody, TableCell, TableContainer, Typography, TableRow } from "@mui/material";
import React from "react";
import Data from './api-response';
export default function OverallResult () {

    const capitalLetter = (str) => {
        return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    // const highestScoreCandidate = Data.candidates.reduce((accumulator, currentValues) => accumulator.score > currentValues.score ? accumulator : currentValues );
    // const highestScoreCandidate= Data.candidates.find(candidate => candidate.score === Math.max(...Data.candidates.map(candidate => candidate.score))) ;

    let highestScoreCandidate = { score: 0 };
    Data.candidates.forEach((candidate) => {
        if (candidate.score > highestScoreCandidate.score) {
            highestScoreCandidate = candidate;
        }
    });

    // const malePassCandidates = Data.candidates.filter((candidate) => candidate.gender.indexOf('male') !== -1 && candidate.score);
    // const highestScoreMaleCandidate = malePassCandidates.reduce((accumulator, currentValues) => accumulator.score > currentValues.score ? accumulator : currentValues );

    let highestScoreMaleCandidate = { score: 0 };
    const malePassCandidates = Data.candidates.filter((candidate) => candidate.gender.indexOf('male') !== -1 && candidate.score);
    malePassCandidates.forEach((candidate) => {
        if (candidate.score > highestScoreMaleCandidate.score) {
            highestScoreMaleCandidate = candidate;
        }
    });

    // const femalePassCandidates = Data.candidates.filter((candidate) => candidate.gender.indexOf('female') !== -1 && candidate.score);
    // const highestScoreFemaleCandidate = femalePassCandidates.reduce((accumulator, currentValues) => accumulator.score > currentValues.score ? accumulator : currentValues );

    let highestScoreFemaleCandidate = { score: 0 };
    const femalePassCandidates = Data.candidates.filter((candidate) => candidate.gender.indexOf('female') !== -1 && candidate.score);
    femalePassCandidates.forEach((candidate) => {
        if (candidate.score > highestScoreFemaleCandidate.score) {
            highestScoreFemaleCandidate = candidate;
        }
    });

    
    return (
        <>
          <TableContainer style={{ border: 'solid', fontSize: '5px bold' }}>
            <Table>
                <TableBody>
                    <TableRow>Overall Topper Name<TableCell>{capitalLetter(highestScoreCandidate.name)}</TableCell><TableCell>{highestScoreCandidate.score}</TableCell></TableRow>
                    <TableRow>Overall Topper District Name<TableCell>{capitalLetter(highestScoreCandidate.district)}</TableCell><TableCell>{}</TableCell></TableRow>
                    <TableRow>Mal Topper Name<TableCell>{capitalLetter(highestScoreMaleCandidate.name)},{capitalLetter(highestScoreMaleCandidate.district)}</TableCell><TableCell>{highestScoreMaleCandidate.score}</TableCell></TableRow>
                    <TableRow>Female Topper Name<TableCell>{capitalLetter(highestScoreFemaleCandidate.name)},{capitalLetter(highestScoreFemaleCandidate.district)}</TableCell><TableCell>{highestScoreFemaleCandidate.score}</TableCell></TableRow>
                </TableBody>
            </Table>
          </TableContainer>
        </>
    );
}