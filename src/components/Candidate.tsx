

import React from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';

interface Candidate {
  CandidateName: string;
  CandidateCountry: string;
  CandidateSchool: string;
};


const CandidateData: Candidate[] = [
  {
    CandidateName: "Aaliyah Sanderson",
    CandidateCountry: "Riyadh, Saudi Arabia",
    CandidateSchool: "Bachelor-Cambridge University(2023-2023)",
  },

  {
    CandidateName:"John Doe",
    CandidateCountry:"Bostom, USA",
    CandidateSchool:"Bachelor-MIT (2023-2023)"
    },
    {
      CandidateName:"Thomas Matt",
      CandidateCountry:"EdinBurgh Uk",
      CandidateSchool:"Bachelor-Havard University(2023-2023)"
      },
      {
        CandidateName:"Kamilia Smith",
        CandidateCountry:"London Uk",
        CandidateSchool:"Bachelor-Boston University(2023-2023)"
        },
        {
          CandidateName:"Roy Jade",
          CandidateCountry:"Cambridge Uk",
          CandidateSchool:"Bachelor-Yale University(2023-2023)"
          },
          {
            CandidateName:"Ahmad Salman",
            CandidateCountry:"New York USA",
            CandidateSchool:"Bachelor-Havard University(2023-2023)"
            },
];

const CandidateContainer = styled.div`
  width: 600px;
  background-color: #fff;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 5px;
  margin-top: 10px;
`;

const Inputcontained = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CandidateP = styled.p`
  color: #1D4ED8;
  font-weight: bold;
`;

const QualifiedDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;

const QualifiedP = styled.p`
  color: #1D4ED8;
  font-weight: bold;
`;

const Tasked = styled.p`
  color: #0B0B0B;
`;

const Spaned = styled.span`
  background-color: #F7F8FD;
  padding: 5px;
  border-radius: 25px;
  font-size: 10px;
  color: #22215B;
`;

const Disqualified = styled.p`
  color: #0B0B0B;
`;

const CandidateItems = styled.div`
  display: flex;
  align-items: center;
  height: 150px;
  gap: 10px;
  padding: 15px;
`;

const CandidateProfile = styled.h3`
  padding: 15px;
  background-color: #D7E5FD;
  color: #B1CDFD;
  border-radius: 60px;
  font-weight: bold;
  font-size: 17px;
`;

const CandidateDescription = styled.div``;

const CandidateName = styled.h1`
  font-size: 15px;
  font-weight: bold;
`;

const CandidateCountry = styled.h3`
  font-size: 13px;
`;
const CandidateSchool = styled.p`
  font-size: 12px;
  color: #aca7a7;
`;

const CandidateTop = styled.p`
  font-size: 12px;
  color: #1D4ED8;
`;

const CandidateSpan = styled.span``;

const ChoicesContainer = styled.p`
  display: flex;
  font-size: 13px;
  gap: 10px;
`;

const ChoicesButton = styled.p`
  color: #037092;
  background-color: #F3FAFC;
  border-radius: 5px;
  padding: 5px;
  font-weight: 500;
`;

const StyledHr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #f0ebeb;
  border: none;
`;

const CandidateComponent: React.FC = () => {
  return (
    <CandidateContainer>
      <HeaderContainer>
        <Inputcontained>
          <Checkbox style={{ marginBottom: "20px" }} />
          <CandidateP>245 Candidate</CandidateP>
        </Inputcontained>
        <QualifiedDiv>
          <QualifiedP>Qualified</QualifiedP>
          <Tasked>Tasked <Spaned>25</Spaned></Tasked>
          <Disqualified>Disqualified <Spaned>78</Spaned></Disqualified>
        </QualifiedDiv>
      </HeaderContainer>
      <StyledHr />
      {CandidateData.map((candidate, index) => (
        <div key={index}>
          <CandidateItems>
            <Checkbox style={{ marginBottom: "20px" }} />
            <CandidateProfile>AS</CandidateProfile>
            <CandidateDescription>
              <CandidateName>{candidate.CandidateName}</CandidateName>
              <CandidateCountry>{candidate.CandidateCountry}</CandidateCountry>
              <CandidateSchool>{candidate.CandidateSchool}</CandidateSchool>
              <CandidateTop>
                #Top-candidate <CandidateSpan>#Top-candidate </CandidateSpan>
              </CandidateTop>
              <ChoicesContainer>
                <ChoicesButton>New York</ChoicesButton>
                <ChoicesButton>Marketing</ChoicesButton>
                <ChoicesButton>London</ChoicesButton>
              </ChoicesContainer>
            </CandidateDescription>
          </CandidateItems>
          <StyledHr />
        </div>
      ))}
    </CandidateContainer>
  );
};

export default CandidateComponent;
