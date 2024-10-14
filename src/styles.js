import styled from 'styled-components';

export const Container = styled.div({
    width: '100%',
    height: '100vh',
    backgroundColor: 'grey',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    

    
});


export const Content = styled.div({
    backgroundColor: 'white',
    width: '80%',
 
});

export const Row = styled.div ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

})
