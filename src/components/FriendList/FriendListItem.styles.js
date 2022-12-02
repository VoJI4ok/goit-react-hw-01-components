import styles from 'styled-components';

export const Status = styles.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 20px;
  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styles.img`
  margin-left: 30px;
`;

export const Name = styles.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 46px;
`;