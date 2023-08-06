import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../authSlice';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const navigate = useNavigate();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return children;
};

export default Protected;
