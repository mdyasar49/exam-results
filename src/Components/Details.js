import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import Data from './api-response';
export default function Details () {

    const male = Data.candidates.filter((candidate) => candidate.gender == 'male').length;
    const feMale = Data.candidates.filter((candidate) => candidate.gender == 'female').length;

    const totalPass = Data.candidates.filter((candidate) => candidate.result == 'pass').length;
    const totalFail = Data.candidates.filter((candidate) => candidate.result == "fail").length;
    const totalNotAttend = Data.candidates.filter((candidate) => candidate.result == ' ').length;

    const malePass = Data.candidates.filter((candidate) => candidate.gender == 'male' && candidate.result == 'pass').length;
    const feMalePass = Data.candidates.filter((candidate) => candidate.gender == 'female' && candidate.result == 'pass').length;

    const maleFail = Data.candidates.filter((candidate) => candidate.gender == 'male' && candidate.result == 'fail').length;
    const feMaleFail = Data.candidates.filter((candidate) => candidate.gender == 'female' && candidate.result == 'fail').length;

    const passCandidates = Data.candidates.filter((candidate) => candidate.result == 'pass' && candidate.score);
    const totalPassAverage = passCandidates.length > 0 ? passCandidates.reduce((average, candidate) => candidate.score, 0) / passCandidates.length : 0; // In this program divide a count values

    const malepassCandidates = Data.candidates.filter((candidate) => candidate.gender == 'male' && candidate.result == 'pass' && candidate.score);
    const totalMaleAverage =  malepassCandidates.length > 0 ? malepassCandidates.reduce((average, candidate) => candidate.score, 0) / malepassCandidates.length : 0; // In this program divide a count values

    const feMalepassCandidates = Data.candidates.filter((candidate) => candidate.gender == 'female' && candidate.result == 'pass' && candidate.score);
    const totalFemaleAverage = feMalepassCandidates.length > 0 ? feMalepassCandidates.reduce((average, candidate) => candidate.score, 0) / feMalepassCandidates.length : 0; // In this program divide a count values

    const maleNotAttend = Data.candidates.filter((candidate) => candidate.gender == 'male' && candidate.result == '').length;
    const feMaleNotAttend = Data.candidates.filter((candidate) => candidate.gender == 'female' && candidate.result == ' ').length;

    return (
        <>
          <TableContainer style={{ border: 'solid', fontSize: '5px bold' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Details</TableCell>
                        <TableCell>Total</TableCell>
                        <TableCell>Male</TableCell>
                        <TableCell>Female</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>No.of Candidate<TableCell>{Data.candidates.length}</TableCell><TableCell>{male}</TableCell><TableCell>{feMale}</TableCell></TableRow>
                        <TableRow>No.of Passed Candidate<TableCell>{totalPass}</TableCell><TableCell>{malePass}</TableCell><TableCell>{feMalePass}</TableCell></TableRow>
                        <TableRow>No.of Failed Candidate<TableCell>{totalFail}</TableCell><TableCell>{maleFail}</TableCell><TableCell>{feMaleFail}</TableCell></TableRow>
                        <TableRow>Average Pass Score<TableCell>{totalPassAverage}</TableCell><TableCell>{totalMaleAverage}</TableCell><TableCell>{totalFemaleAverage}</TableCell></TableRow>
                        <TableRow>Not Attended<TableCell>{totalNotAttend}</TableCell><TableCell>{maleNotAttend}</TableCell><TableCell>{feMaleNotAttend}</TableCell></TableRow>
                </TableBody>
            </Table>
          </TableContainer>
        </>
    );
}