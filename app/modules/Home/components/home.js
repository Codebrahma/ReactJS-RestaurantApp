
import React from 'react';
import MultiFilter from '../../common/components/MultiFilter';

export default class HomePage extends React.Component {
  clickHandler = (a) => {
    console.log(a);
  }

  render() {
    return (
      <MultiFilter
        filterLabel="Cost for two"
        filterClickHandler={this.clickHandler}
        filterList={[
          { label: 'Promotions', value: '0', id: 'offers-filter' },
          { label: 'Pure Veg', value: '0', id: 'veg-filter' },
          { label: 'Free Delivery', value: '0', id: 'free-delivery-filter' },
          { label: 'Online Payments', value: '0', id: 'online-payment-filter' },
        ]}
      />
    );
  }
}
