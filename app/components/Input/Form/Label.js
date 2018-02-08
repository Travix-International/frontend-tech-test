import styled from 'styled-components';

export default styled.label`
  display: inline-block;
  color: ${({ focused }) => (focused ? '#00DCA4' : '#6A7989')};
  font-weight: bold;
  font-size: 1em;
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
  -webkit-touch-callout: none;
  transition: color 0.3s;

  :before,
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 5px);
    border-bottom: 1px solid #B9C1CA;
  }

  :after {
    border-bottom: 2px solid #00DCA4;
    transform: ${({ focused }) => (focused ? 'translate3d(0, 0, 0)' : 'translate3d(-100%, 0, 0)')};
    transition: transform 0.3s;
  }
`;
