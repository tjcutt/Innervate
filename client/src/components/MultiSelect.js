import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const names = [
  'Popular',
  'New',
  'Level',
];

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default class MultiSelect extends Component {
  state = {
    values: [],
  };

  handleChange = (event, index, values) => this.setState({values});

render() {
   return null
}

  // menuItems(values) {
  //   return names.map((name) => (
  //     <MenuItem
  //       key={name}
  //       insetChildren={true}
  //       checked={values && values.indexOf(name) > -1}
  //       value={name}
  //       primaryText={name}
  //     />
  //   ));
  // }
  //
  // render() {
  //   const {values} = this.state;
  //   return (
  //     <SelectField
  //       multiple={true}
  //       hintText="Sort"
  //       value={values}
  //       onChange={this.handleChange}
  //     >
  //       {this.menuItems(values)}
  //     </SelectField>
  //   );
  // }
}
