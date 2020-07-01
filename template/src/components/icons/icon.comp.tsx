import * as React from 'react';
import {get} from 'lodash';
import {IconText, IconWrapper} from '@components/icons/icon.styles';
import theme from '@theme/theme';

/** ICON TYPES */
export type IconProps = {
  name?: string;
  size?: number;
  color?: string;
};
/** END OF ICON TYPES */

const family = require('./glyphmap.json');

const Icon: React.FC<IconProps> = (props: IconProps): React.FunctionComponentElement<IconProps> => {
  // second: If the family was found, now, get the char code of the icon, based on "name" in glyph map
  const charcode = get(family, [props.name], null);
  // verify if the charcode was NOT found
  if (!charcode) {
    // if the charCode was not found, notify the dev and return an empty component
    return null;
  }

  return (
    <IconWrapper {...props}>
      <IconText {...props} color={props.color}>
        {String.fromCharCode(charcode)}
      </IconText>
    </IconWrapper>
  );
};

Icon.defaultProps = {
  name: 'feather',
  size: 24,
  color: theme.colors.black.lighter,
};
export default Icon;
