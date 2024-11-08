import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Data from "./api-response";

export default function DistrictWiserResults() {

  const separateDistrict = Data.candidates.map(candidate => candidate.district);

  function getDistrictStats(district) {
    const candidatesInDistrict = Data.candidates.filter(candidate => candidate.district === district);

    let total = candidatesInDistrict.length;
    let attended = candidatesInDistrict.filter(candidate => candidate.score).length;
    let pass = candidatesInDistrict.filter(candidate => candidate.result === "pass").length;
    let fail = candidatesInDistrict.filter(candidate => candidate.result === "fail").length;
    let passPercentage = total > 0 ? ((pass / total) * 100).toFixed(2) : 0;

    let maleCandidates = candidatesInDistrict.filter(candidate => candidate.gender === "male");
    let maleAttended = maleCandidates.filter(candidate => candidate.score).length;
    let malePass = maleCandidates.filter(candidate => candidate.result === "pass").length;
    let maleFail = maleCandidates.filter(candidate => candidate.result === "fail").length;
    let malePassPercentage = maleCandidates.length > 0 ? ((malePass / maleCandidates.length) * 100).toFixed(2) : 0;

    let femaleCandidates = candidatesInDistrict.filter(candidate => candidate.gender === "female");
    let femaleAttended = femaleCandidates.filter(candidate => candidate.score).length;
    let femalePass = femaleCandidates.filter(candidate => candidate.result === "pass").length;
    let femaleFail = femaleCandidates.filter(candidate => candidate.result === "fail").length;
    let femalePassPercentage = femaleCandidates.length > 0 ? ((femalePass / femaleCandidates.length) * 100).toFixed(2) : 0;

    // const overallTopper = candidatesInDistrict.reduce((candidate, overallTopper) =>candidate.score > overallTopper.score ? candidate : overallTopper, 0);
    // const malePassCandidates = maleCandidates.filter(candidate => candidate.score);
    // const maleTopper = malePassCandidates.reduce((candidate, overallTopper) =>candidate.score > overallTopper.score ? candidate : overallTopper, 0);
    // const femalePassCandidates = femaleCandidates.filter(candidate => candidate.score);
    // const femaleTopper = femalePassCandidates.reduce((candidate, overallTopper) =>candidate.score > overallTopper.score ? candidate : overallTopper, 0);

    let overallTopper = { score: 0 };
    candidatesInDistrict.forEach((candidate) => {
      if (candidate.score > overallTopper.score) {
        overallTopper = candidate;
      }
    });

    let malePassCandidates = maleCandidates.filter(candidate => candidate.score);
    let maleTopper = { score: 0 };
    malePassCandidates.forEach((candidate) => {
      if (candidate.score > maleTopper.score) {
        maleTopper = candidate;
      }
    });

    let femalePassCandidates = femaleCandidates.filter(candidate => candidate.score);
    let femaleTopper = { score: 0 };
    femalePassCandidates.forEach((candidate) => {
      if (candidate.score > femaleTopper.score) {
        femaleTopper = candidate;
      }
    });

    const districtStats = {
      district,
      total,
      attended,
      pass,
      fail,
      passPercentage,
      maleAttended,
      malePass,
      maleFail,
      malePassPercentage,
      femaleAttended,
      femalePass,
      femaleFail,
      femalePassPercentage,
      overallTopper,
      maleTopper,
      femaleTopper,
    };

    return districtStats;
  }

  return (
    <>
      <TableContainer>
        <Table style={{ border: 'solid', fontSize: '5px bold' }}>
          <TableHead>
            <TableRow>
              <TableCell>District</TableCell>
              <TableCell>Attended</TableCell>
              <TableCell>Pass</TableCell>
              <TableCell>Fail</TableCell>
              <TableCell>Pass %</TableCell>
              <TableCell>Attended</TableCell>
              <TableCell>Pass</TableCell>
              <TableCell>Fail</TableCell>
              <TableCell>Pass %</TableCell>
              <TableCell>Attended</TableCell>
              <TableCell>Pass</TableCell>
              <TableCell>Fail</TableCell>
              <TableCell>Pass %</TableCell>
              <TableCell>Overall Topper</TableCell>
              <TableCell>Male Topper</TableCell>
              <TableCell>Female Topper</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {separateDistrict.map(district => {
              const districtCandidates = getDistrictStats(district);
              return (
                <TableRow key={districtCandidates.district}>
                  <TableCell>{districtCandidates.district}</TableCell>
                  <TableCell>{districtCandidates.attended}</TableCell>
                  <TableCell>{districtCandidates.pass}</TableCell>
                  <TableCell>{districtCandidates.fail}</TableCell>
                  <TableCell>{districtCandidates.passPercentage}%</TableCell>
                  <TableCell>{districtCandidates.maleAttended}</TableCell>
                  <TableCell>{districtCandidates.malePass}</TableCell>
                  <TableCell>{districtCandidates.maleFail}</TableCell>
                  <TableCell>{districtCandidates.malePassPercentage}%</TableCell>
                  <TableCell>{districtCandidates.femaleAttended}</TableCell>
                  <TableCell>{districtCandidates.femalePass}</TableCell>
                  <TableCell>{districtCandidates.femaleFail}</TableCell>
                  <TableCell>{districtCandidates.femalePassPercentage}%</TableCell>
                  <TableCell>{districtCandidates.overallTopper.name}</TableCell>
                  <TableCell>{districtCandidates.maleTopper.name}</TableCell>
                  <TableCell>{districtCandidates.femaleTopper.name}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
