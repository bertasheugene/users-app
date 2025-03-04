import React, { useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import useFetch from './hooks/useFetch';

function App() {
  const { data, loading, error } = useFetch("https://reqres.in/api/users");
  const [searchValue, setSearchValue] = useState('');
  const [invites, setInvites] = useState([]);
  const [successInvite, setSuccessInvite] = useState(false);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickInvite = (id) => {
    if(invites.includes(id)){
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  const onSubmitUsers = () => {
    setSuccessInvite(true);
  }

  const resetSubmitUsers = () => {
    setSuccessInvite(false);
    setInvites([]);
    setSearchValue('');
  }

  return (
    <div className="App">

      {
        successInvite ?
        (
          <Success resetSubmitUsers={resetSubmitUsers} count={invites.length} />
        ) : (
          <Users 
            searchValue={searchValue} 
            onChangeSearchValue={onChangeSearchValue} 
            items={data ? data.data : []} 
            isLoading={loading}
            invites={invites}
            onClickInvite={onClickInvite}
            onSubmitUsers={onSubmitUsers}
          />
        )

      }
    </div>
  );
}

export default App;