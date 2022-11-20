import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import iconLocation from '../assets/icon-location.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconWebsite from '../assets/icon-website.svg';
import iconCompany from '../assets/icon-company.svg';

const SearchResults = ({ userData }) => {
  const UserSocialInfo = [
    {
      id: 1,
      soc: 'Repos',
      qty: userData.public_repos,
    },
    {
      id: 2,
      soc: 'Followers',
      qty: userData.followers,
    },
    {
      id: 3,
      soc: 'Following',
      qty: userData.following,
    },
  ];

  return (
    <SearchResultsContainer>
      <LeftSide>
        <Avatar src={userData.avatar_url} alt='avatar' />
      </LeftSide>
      <RightSide>
        <UserDisplay>
          <UserInfo>
            <Username>{userData.name}</Username>
            <CreatedAt>
              {' '}
              Joined {moment(userData.created_at).format('Do MMM YYYY')}
            </CreatedAt>
          </UserInfo>
          <Login>@{userData.login}</Login>
          <Bio>{userData.bio || 'This profile has no bio'}</Bio>

          <SocialInfo>
            <SocialInfoItem>
              {UserSocialInfo.map(item => (
                <SocialInfoDesc key={item.id}>
                  <SocialInfoItemTitle>{item.soc}</SocialInfoItemTitle>
                  <SocialInfoItemQty>{item.qty}</SocialInfoItemQty>
                </SocialInfoDesc>
              ))}
            </SocialInfoItem>
          </SocialInfo>
          <SocialIcons>
            <SocialTop>
              <Location>
                <LocationIcon src={iconLocation} alt='location' />
                <LocationText>
                  {userData.location || (
                    <span style={{ opacity: '0.5' }}>Not Available</span>
                  )}
                </LocationText>
              </Location>
              <Twitter>
                <TwitterIcon src={iconTwitter} />
                <TwitterText href={`https://twitter.com/${userData.twitter_username}`}>
                  {userData.twitter_username || (
                    <span style={{ opacity: '0.5' }}>Not Available</span>
                  )}
                </TwitterText>
              </Twitter>
            </SocialTop>
            <SocialBottom>
              <Website>
                <WebsiteIcon src={iconWebsite} alt='blog' />
                <WebsiteText href={`https://${userData.blog}`}>
                  {userData.blog || <span style={{ opacity: '0.5' }}>Not Available</span>}
                </WebsiteText>
              </Website>
              <Company>
                <CompanyIcon src={iconCompany} alt='company' />
                <CompanyText>
                  {userData.company || (
                    <span style={{ opacity: '0.5' }}>Not Available</span>
                  )}
                </CompanyText>
              </Company>
            </SocialBottom>
          </SocialIcons>
        </UserDisplay>
      </RightSide>
    </SearchResultsContainer>
  );
};

const SearchResultsContainer = styled.div`
  background: ${props => props.theme.inputColor};
  margin-top: 24px;
  border-radius: 15px;
  height: 444px;
  display: flex;

  @media (max-width: 768px) {
    height: 481px;
  }

  @media (max-width: 375px) {
    height: 777px;
  }
`;

const LeftSide = styled.div`
  flex: 1;

  @media (max-width: 375px) {
    flex: 0;
  }
`;
const RightSide = styled.div`
  flex: 2;
  margin: 44px 48px 48px 0px;

  @media (max-width: 375px) {
    margin: 24px 24px 24px 19px;
  }
`;

const UserDisplay = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    /* flex-direction: row; */
  }

  @media (max-width: 375px) {
    /* flex-direction: column; */
  }
`;
const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 41px;
  }

  @media (max-width: 375px) {
    align-items: flex-start;
    margin-left: 0px;
  }
`;

const CreatedAt = styled.p`
  color: ${props => props.theme.text};
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  text-align: right;

  @media (max-width: 768px) {
  }

  @media (max-width: 375px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
  }
`;

const Login = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0079ff;
  margin-top: 2px;

  @media (max-width: 768px) {
    margin-left: 41px;
  }

  @media (max-width: 375px) {
    margin-left: 0px;
  }
`;

const Avatar = styled.img`
  width: 117px;
  height: 117px;
  border-radius: 50%;
  object-fit: cover;
  margin: 48px 0 0 48px;

  @media (max-width: 375px) {
    margin: 32px 0 0 24px;

    width: 70px;
    height: 70px;
  }
`;

const Username = styled.h1`
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;

  color: ${props => props.theme.numberColor};

  @media (max-width: 376px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
`;

const Bio = styled.p`
  color: ${props => props.theme.text};
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 38px;
  }

  @media (max-width: 375px) {
    width: 279px;
    position: absolute;
    top: 40%;
    left: 25%;
  }
`;

const SocialInfo = styled.div`
  background: ${props => props.theme.backgroundColor};
  height: 85px;
  margin-top: 32px;
  border-radius: 10px;
  color: ${props => props.theme.socialInfo};

  @media (max-width: 768px) {
    position: absolute;
    top: 65%;
    left: 18%;
    width: 480px;
  }

  @media (max-width: 375px) {
    top: 53%;
    left: 12%;
    width: 279px;
    margin-top: 20px;
  }
`;
const SocialInfoItem = styled.div`
  padding: 15px 0 51px 32px;
  display: flex;

  align-items: center;
  gap: 40px;

  justify-content: space-around;

  @media (max-width: 768px) {
  }

  @media (max-width: 375px) {
    padding: 15px 20px 51px 32px;
  }
`;

const SocialInfoDesc = styled.div``;
const SocialInfoItemTitle = styled.p`
  color: ${props => props.theme.socialInfo};
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;

  @media (max-width: 375px) {
    font-size: 11px;
  }
`;
const SocialInfoItemQty = styled.p`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  /* identical to box height */

  text-transform: uppercase;

  @media (max-width: 375px) {
    font-size: 16px;
  }
`;

const SocialIcons = styled.div`
  margin-top: 37px;

  @media (max-width: 768px) {
    position: absolute;
    top: 80%;
    left: 18%;
    width: 440px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    margin-top: 0px;

    top: 72%;
  }
`;

const SocialTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: space-around;
    align-items: flex-start;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    gap: 15px;
  }
`;
const SocialBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  color: ${props => props.theme.socialInfo};

  @media (max-width: 768px) {
    justify-content: space-around;
    align-items: flex-start;
  }
  @media (max-width: 375px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
`;
const LocationIcon = styled.img``;
const LocationText = styled.p`
  margin-left: 19px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: ${props => props.theme.socialInfo};

  @media (max-width: 375px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
  }
`;

const Twitter = styled.div`
  display: flex;
  align-items: center;
`;
const TwitterIcon = styled.img``;
const TwitterText = styled.a`
  text-decoration: none;
  color: ${props => props.theme.socialInfo};
  cursor: pointer;
  margin-left: 16px;
  @media (max-width: 375px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
  }
`;

const Website = styled.div`
  display: flex;
  align-items: center;
`;
const WebsiteIcon = styled.img``;
const WebsiteText = styled.a`
  color: ${props => props.theme.socialInfo};
  margin-left: 19px;
  text-decoration: none;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 375px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
  }
`;

const Company = styled.div`
  display: flex;
  align-items: center;
`;
const CompanyIcon = styled.img``;
const CompanyText = styled.p`
  margin-left: 19px;

  @media (max-width: 375px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
  }
`;

export default SearchResults;
