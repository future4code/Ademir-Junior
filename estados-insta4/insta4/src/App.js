import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Ademir'}
          fotoUsuario={'https://scontent.fplu9-1.fna.fbcdn.net/v/t1.6435-9/37284291_1933538866668261_2164852130672803840_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WKlEgCENepUAX_22PGg&tn=HOLS5OSgsQ7Tlf7q&_nc_ht=scontent.fplu9-1.fna&oh=f47d7509b3151a6abb7daa735501ff82&oe=61BC8059'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'Paulo'}
          fotoUsuario={'https://scontent.fplu9-1.fna.fbcdn.net/v/t1.6435-9/87181963_2940505805971557_2581633029772410880_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=84a396&_nc_ohc=HvIuquj7VrQAX_Won31&_nc_ht=scontent.fplu9-1.fna&oh=87deeeb2bfe2486991b4449e5b19c430&oe=61BABB0F'}
          fotoPost={'https://picsum.photos/200/150'}
        /><Post
        nomeUsuario={'Junior'}
        fotoUsuario={'https://scontent.fplu9-1.fna.fbcdn.net/v/t1.6435-9/87166936_2945300852158719_4330556945497849856_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=84a396&_nc_ohc=6L0n8hsHdjYAX-GvZik&_nc_ht=scontent.fplu9-1.fna&oh=f486d4ba14fff5782224de4b180fa083&oe=61BA9576'}
        fotoPost={'https://picsum.photos/200/152'}
      />
      </MainContainer>
    );
  }
}

export default App;
