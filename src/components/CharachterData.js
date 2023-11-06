import React, { useEffect } from 'react';
import axios from 'axios';

const CharacterData = ({ githubUsername }) => {
  const saveCharacterData = async (data) => {
    try {
      const response = await axios.post(
        `https://recruiting.verylongdomaintotestwith.ca/api/${githubUsername}/character`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Character data saved:', response.data);
    } catch (error) {
      console.error('Error saving character data:', error);
    }
  };

  const retrieveCharacterData = async (setCharacterData) => {
    try {
      const response = await axios.get(
        `https://recruiting.verylongdomaintotestwith.ca/api/${githubUsername}/character`
      );
      setCharacterData(response.data);
      console.log('Character data retrieved:', response.data);
    } catch (error) {
      console.error('Error retrieving character data:', error);
    }
  };

  useEffect(() => {
    retrieveCharacterData();
  }, [retrieveCharacterData]);

  return null;
};

export default CharacterData;
