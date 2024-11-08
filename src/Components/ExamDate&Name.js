import React from "react";
import Data from "./api-response";
import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
export default function DateTime () {
    // Date
    const getFormattedDate = () => {
        const options = { day: '2-digit', month: 'short', year: '2-digit' };
        return new Date(Data.examDate).toLocaleDateString('en-GB', options).replace(/ /g, '-');
      }
  return(
   <>
    <TableContainer style={{ border: 'solid', fontSize: '5px bold', width: '50%' }}>
        <Table>
            <TableBody >
                <TableRow><TableCell>Exam Name</TableCell><TableCell>{Data.examName} Exam</TableCell></TableRow>
                <TableRow><TableCell>Exam Data</TableCell><TableCell>{getFormattedDate()}</TableCell></TableRow>
            </TableBody>
        </Table>
    </TableContainer>
   </>
  );
}
