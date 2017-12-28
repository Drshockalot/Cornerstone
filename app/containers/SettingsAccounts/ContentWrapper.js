import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    align-content: space-between;
    width: calc(100% - 200px);
    min-height: 100%;
    height: 100%;
    position: relative;
    float: left;
`;

export default ContentWrapper;