import React from 'react';
import styled from 'styled-components';


const Content = styled.main`
    display: flex;
    width: 700px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 500px;
    margin 0 auto;
    box-sizing: border-box;
`
const ContentItem = styled.p`
    color: #6899;
    text-align: left;
    width: 250px;
    font-weight: bold;
    box-sizing: border-box;
    margin: 40px;
    padding: 10px;
`


export default function content(){
    return (
        <React.Fragment>
            <Content>
                <ContentItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus id viverra ante, quis molestie diam. Morbi tempus vel ex nec pharetra.
                    Nunc non mi augue. Ut efficitur efficitur quam eget faucibus. 
                    Praesent auctor, nunc vitae luctus volutpat, leo neque finibus tortor, 
                    ac ultricies erat quam non magna. Fusce hendrerit facilisis justo, eu 
                    tristique eros viverra nec. 
                    Integer non dolor eu nulla dapibus auctor eu in urna.</ContentItem>
            <ContentItem>Curabitur ut placerat mauris, in varius velit. Nunc turpis ex, 
                faucibus a lacus sit amet, ultrices condimentum nibh. 
                Curabitur commodo venenatis metus eget efficitur.
                 Nam auctor pharetra porttitor.
                 Cras sed dolor vel nunc auctor dignissim. 
                 Curabitur eget ornare lacus. Vestibulum id finibus enim.</ContentItem>
            </Content>
        </React.Fragment>
    );
}