import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import styled from 'styled-components';

const IconWrapper = styled(Box)`
  width: ${({ theme, width }) => theme.spaces[width]};
  height: ${({ theme, height }) => theme.spaces[height]};

  path {
    fill: ${({ color, theme }) => theme.colors[color]};
  }
  ${({ theme, colors }) => colors(theme)}
`;

export const Icon = React.forwardRef((props, ref) => {
  return <IconWrapper ref={ref} {...props} />;
});

Icon.displayName = 'Icon';

Icon.defaultProps = {
  color: 'neutral600',
  colors: () => undefined,
  height: 1,
  width: 1,
};

Icon.propTypes = {
  color: PropTypes.string,
  colors: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,
};
