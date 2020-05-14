import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProfile} from '../../actions/actionCreators';
import Pages from '../Pages';
import Error from '../Pages/Error';
import Loading from '../Pages/Loading';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [getProfile]);

  const loading = useSelector(state => state.user.loading);
  const error = useSelector(state => state.user.error);
  const user = useSelector(state => state.user.user);

  const userExists = user && Object.keys(user).length > 0;

  return loading || (!userExists && !error) ? (
    <Loading />
  ) : !error ? (
    <Pages user={user} />
  ) : (
    <Error />
  );
};

export default App;
