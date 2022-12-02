import styles from 'styled-components';

export const ProfileCard = styles.div`
  margin: 50px auto 0 auto;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Description = styles.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 75px;
`;

export const Avatar = styles.img`
  width: 150px;
  border-radius: 50%;
`;

export const Name = styles.p`
  font-weight: 700;
  font-size: 25px;
  margin-top: 20px;
`;

export const Tag = styles.p`
  color: #777;
  margin-top: 15px;
`;

export const Location = styles.p`
  color: #777;
  margin-top: 15px;
`;

export const Stats = styles.ul`
  background-color: #eee;
  height: 100px;
  width: 100%;
  display: flex;
  border-top: 1px solid #aaa;
  border-radius: 0 0 5px 5px;
`;

export const StatsItem = styles.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:nth-child(2) {
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
  }
`;

export const Label = styles.span`
  color: #777;
  font-size: 17px;
`;

export const Quantity = styles.span`
  font-size: 20px;
  padding-top: 7px;
  font-weight: 700;
`;