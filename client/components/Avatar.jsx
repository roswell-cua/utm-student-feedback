/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Photo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: block;
`;

const Initials = styled.div`
  width: 50px;
  height: 50px;
  color: #fff;
  background-color: #686f7a;
  text-align: center;
  line-height: 50px;
  border-radius: 25px;
`;

const Avatar = ({ src, username }) => ((src.length > 0)
  ? <Photo src={src} alt="avatar" />
  : <Initials>{username.split(' ').map((name) => name[0]).join('')}</Initials>
);

Avatar.propTypes = {
  src: PropTypes.string,
  username: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  src: '',
};

export default Avatar;
