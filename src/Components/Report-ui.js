import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import Data from './api-response';
export default function Report () {

    const capitalizeWords = (str) => {
        return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };
    const color = (result) => {
        if (result === 'pass') {
            return 'green';
        } else if (result === 'fail') {
            return 'red';
        } else if (result === ' ') {
            return 'yellow';
        } else {
            return 'white';
        }
    }
    return(
        <>
          <TableContainer >
            <Table style={{ border: 'solid', fontSize: '5px bold' }} >
                <TableHead>
                    <TableRow>
                        <TableCell>S.No</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Gender</TableCell>
                        <TableCell>District</TableCell>
                        <TableCell>Result</TableCell>
                        <TableCell>Score</TableCell>
                        {/* <TableCell >Questions</TableCell> */}
                        <TableCell>Answered</TableCell>
                        <TableCell>Unanswered</TableCell>
                        <TableCell>Correct</TableCell>
                        <TableCell>Incorrect</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody >
                    { Data.candidates.map((data,index) => (
                      <TableRow key={index + 1} >
                        <TableCell style={{ color: color(data.result)}}>{index + 1 }</TableCell>
                        <TableCell style={{ color: color(data.result)}}>{capitalizeWords(data.name)}</TableCell>
                        <TableCell style={{ color: color(data.result)}}>{capitalizeWords(data.gender)}</TableCell>
                        <TableCell style={{ color: color(data.result)}}>{capitalizeWords(data.district)}</TableCell>
                        <TableCell style={{ color: 'white', backgroundColor: color(data.result)}}>{capitalizeWords(data.result)}</TableCell>
                        <TableCell style={{ color: color(data.result)}}>{data.score}</TableCell>
                        <TableCell style={{ color: color(data.result)}}>{data.details.answered}</TableCell>
                        <TableCell style={{ color: color(data.result)}}>{data.details.Unanswered}</TableCell>
                        <TableCell style={{ color: color(data.result)}}>{data.details.correctAnswer}</TableCell>
                        <TableCell style={{ color: color(data.result)}}>{data.details.incorrectAnswer}</TableCell>                  
                      </TableRow>
                    ))}
                </TableBody>
            </Table>
          </TableContainer>
        </>
    );
}
